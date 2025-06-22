// src/app/admin/resources/edit/[id]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Save, ArrowLeft, FileText, Download, Eye, AlertCircle, CheckCircle, Upload, X } from 'lucide-react';

const EditResource = () => {
  const params = useParams();
  const router = useRouter();
  const resourceId = params.id;

  const [resource, setResource] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    subcategoryId: '',
    isPublished: true
  });
  const [newFile, setNewFile] = useState(null);
  const [replaceFile, setReplaceFile] = useState(false);

  const API_BASE_URL = 'https://vpaz7p5kf6.execute-api.ap-south-1.amazonaws.com/prod';

  useEffect(() => {
    if (resourceId) {
      loadResourceData();
    }
  }, [resourceId]);

  const loadResourceData = async () => {
    try {
      setLoading(true);
      
      // Load categories and resource data in parallel
      const [categoriesResponse, resourcesResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/categories`),
        fetch(`${API_BASE_URL}/resources`)
      ]);

      const categoriesData = await categoriesResponse.json();
      const resourcesData = await resourcesResponse.json();

      if (categoriesData.success) {
        setCategories(categoriesData.categories);
      }

      if (resourcesData.success) {
        const foundResource = resourcesData.resources.find(r => r.id === resourceId);
        if (foundResource) {
          setResource(foundResource);
          setFormData({
            title: foundResource.title || '',
            description: foundResource.description || '',
            categoryId: foundResource.categoryId || '',
            subcategoryId: foundResource.subcategoryId || '',
            isPublished: foundResource.isPublished !== false
          });
        } else {
          setMessage({ type: 'error', text: 'Resource not found' });
        }
      }
    } catch (error) {
      console.error('Error loading resource data:', error);
      setMessage({ type: 'error', text: 'Failed to load resource data' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileSelect = (file) => {
    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/plain',
      'image/jpeg',
      'image/png'
    ];

    if (!allowedTypes.includes(file.type)) {
      setMessage({ type: 'error', text: 'Please select a valid file type (PDF, Word, PowerPoint, Text, or Image)' });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'File size must be less than 10MB' });
      return;
    }

    setNewFile(file);
    setMessage(null);
  };

  const removeNewFile = () => {
    setNewFile(null);
    setReplaceFile(false);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.categoryId) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      let updateData = {
        title: formData.title,
        description: formData.description,
        categoryId: formData.categoryId,
        subcategoryId: formData.subcategoryId || null,
        isPublished: formData.isPublished
      };

      // If replacing file, add file data
      if (newFile && replaceFile) {
        const base64Content = await convertFileToBase64(newFile);
        updateData.fileContent = base64Content;
        updateData.fileName = newFile.name;
      }

      // Note: You'll need to implement the update endpoint in your Lambda function
      const response = await fetch(`${API_BASE_URL}/admin/resources/${resourceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setMessage({ type: 'success', text: 'Resource updated successfully!' });
          // Reload resource data to show updates
          setTimeout(() => loadResourceData(), 1000);
        } else {
          throw new Error(result.error || 'Update failed');
        }
      } else {
        throw new Error('Failed to update resource');
      }
    } catch (error) {
      console.error('Update error:', error);
      setMessage({ type: 'error', text: `Update failed: ${error.message}` });
    } finally {
      setSaving(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  const getSubcategoryName = (subcategoryId) => {
    if (!subcategoryId) return 'None';
    for (const category of categories) {
      if (category.subcategories) {
        const subcategory = category.subcategories.find(s => s.id === subcategoryId);
        if (subcategory) return subcategory.name;
      }
    }
    return 'Unknown';
  };

  const getSelectedCategory = () => {
    return categories.find(cat => cat.id === formData.categoryId);
  };

  const getSubcategories = () => {
    const selectedCategory = getSelectedCategory();
    return selectedCategory ? selectedCategory.subcategories || [] : [];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Resource not found</p>
          <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <div className="flex items-center space-x-4">
                <Link href="/admin/resources" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Resources
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">Edit Resource</h1>
              <p className="text-gray-600">Modify resource details and file</p>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href={resource.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 flex items-center space-x-1"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Messages */}
        {message && (
          <div className={`border rounded-lg p-4 mb-6 ${
            message.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center">
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              )}
              <p className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                {message.text}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current File Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current File</h2>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">{resource.originalFileName}</p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(resource.fileSize)} • {resource.fileType?.toUpperCase()}
                    </p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">
                        Downloads: {resource.downloadCount || 0}
                      </span>
                      <span className="text-xs text-gray-500">
                        Uploaded: {new Date(resource.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setReplaceFile(!replaceFile)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    {replaceFile ? 'Cancel Replace' : 'Replace File'}
                  </button>
                </div>
              </div>
            </div>

            {/* File Replacement Section */}
            {replaceFile && (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Replace with New File</h3>
                {!newFile ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Select a new file to replace the current one</p>
                    <input
                      type="file"
                      onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png"
                      className="hidden"
                      id="replace-file-upload"
                    />
                    <label
                      htmlFor="replace-file-upload"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm cursor-pointer transition-colors"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Supported: PDF, Word, PowerPoint, Text, Images (Max 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-medium text-green-900">{newFile.name}</p>
                          <p className="text-sm text-green-700">
                            {formatFileSize(newFile.size)} • {newFile.type}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeNewFile}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Resource Details Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resource Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter resource title"
                  required
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter resource description"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcategory */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subcategory
                </label>
                <select
                  name="subcategoryId"
                  value={formData.subcategoryId}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={!formData.categoryId || getSubcategories().length === 0}
                >
                  <option value="">Select Subcategory (Optional)</option>
                  {getSubcategories().map(subcategory => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Publication Status */}
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Published (visible to users)
                </label>
              </div>
            </div>
          </div>

          {/* Current Categorization Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Current Categorization</h3>
            <div className="text-sm text-blue-800">
              <p><strong>Category:</strong> {getCategoryName(resource.categoryId)}</p>
              <p><strong>Subcategory:</strong> {getSubcategoryName(resource.subcategoryId)}</p>
              <p><strong>Status:</strong> {resource.isPublished ? 'Published' : 'Draft'}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4 pt-6">
            <Link
              href="/admin/resources"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Update Resource</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditResource;
// src/app/admin/resources/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusCircle, FileText, Download, Eye, Edit, Trash2, Upload, FolderOpen } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalResources: 0,
    totalDownloads: 0,
    totalCategories: 0,
    recentUploads: []
  });
  const [loading, setLoading] = useState(true);

  // Your API Gateway URL from Phase 1
  const API_BASE_URL = 'https://vpaz7p5kf6.execute-api.ap-south-1.amazonaws.com/prod';

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch categories
      const categoriesResponse = await fetch(`${API_BASE_URL}/categories`);
      const categoriesData = await categoriesResponse.json();
      
      // Fetch all resources
      const resourcesResponse = await fetch(`${API_BASE_URL}/resources`);
      const resourcesData = await resourcesResponse.json();
      
      if (categoriesData.success && resourcesData.success) {
        const totalDownloads = resourcesData.resources.reduce((sum, resource) => 
          sum + (resource.downloadCount || 0), 0
        );
        
        const recentUploads = resourcesData.resources
          .slice(0, 5)
          .map(resource => ({
            ...resource,
            createdAt: new Date(resource.createdAt).toLocaleDateString()
          }));

        setStats({
          totalResources: resourcesData.resources.length,
          totalDownloads,
          totalCategories: categoriesData.categories.length,
          recentUploads
        });
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color = "bg-blue-500" }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-full`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  const QuickActionCard = ({ title, description, href, icon: Icon, color = "bg-blue-500" }) => (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
        <div className="flex items-center space-x-4">
          <div className={`${color} p-3 rounded-full`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your portfolio resources</p>
            </div>
            <Link 
              href="/admin/resources/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Add Resource</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Resources" 
            value={stats.totalResources} 
            icon={FileText}
            color="bg-blue-500"
          />
          <StatCard 
            title="Total Downloads" 
            value={stats.totalDownloads} 
            icon={Download}
            color="bg-green-500"
          />
          <StatCard 
            title="Categories" 
            value={stats.totalCategories} 
            icon={FolderOpen}
            color="bg-purple-500"
          />
          <StatCard 
            title="This Month" 
            value={stats.recentUploads.length > 0 ? stats.recentUploads.filter(r => 
              new Date(r.createdAt) > new Date(Date.now() - 30*24*60*60*1000)
            ).length : 0} 
            icon={Upload}
            color="bg-orange-500"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickActionCard
              title="Upload Resource"
              description="Add new files to your portfolio"
              href="/admin/resources/create"
              icon={Upload}
              color="bg-blue-500"
            />
            <QuickActionCard
              title="Manage Resources"
              description="View, edit, and organize your files"
              href="/admin/resources"
              icon={FileText}
              color="bg-green-500"
            />
            <QuickActionCard
              title="View Portfolio"
              description="See how students view your resources"
              href="/"
              icon={Eye}
              color="bg-purple-500"
            />
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Uploads</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {stats.recentUploads.length > 0 ? (
              stats.recentUploads.map((resource) => (
                <div key={resource.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">
                          Uploaded: {resource.createdAt}
                        </span>
                        <span className="text-xs text-gray-500">
                          Downloads: {resource.downloadCount || 0}
                        </span>
                        <span className="text-xs text-gray-500">
                          Size: {Math.round(resource.fileSize / 1024)} KB
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/resources/edit/${resource.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No resources uploaded yet</p>
                <Link 
                  href="/admin/resources/create"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Upload your first resource
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
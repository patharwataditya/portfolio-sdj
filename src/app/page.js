"use client";
// app/page.js
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);

  const allPublications = [
    {
      title: "A Hybrid Deep learning Framework for efficient Network Intrusion Detection Systems Using Data Augmentation",
      authors: "Swati Dhondiram Jadhav, Priya Shirley Muller, K Madhavi, E. Prasanthi, B. Jayaram and Goski Satish",
      conference: "3rd IEEE International Conference on Integrated Circuits and Communication Systems (ICICACS - 2025)",
      year: "2025"
    },
    {
      title: "Performance of HfO2 on High Electron Mobility Transistor for Microwave Applications",
      authors: "Swati Dhondiram Jadhav and Aboo Bakar Khan",
      conference: "3rd IEEE Electron Device Kolkata Conference 2024 (EDKCON 2024)",
      year: "2025",
      doi: "10.1109/EDKCON62339.2024.10870791"
    },
    {
      title: "Improvement of AlGaN/ GaN based HEMT with high performance rate for integrated circuit design for wide range of applications",
      authors: "Swati Dhondiram Jadhav, Aboo Bakar Khan",
      journal: "Journal of Integrated Circuits and Systems",
      volume: "vol. 19, n. 1",
      year: "2024"
    },
    {
      title: "An Advanced Encryption Algorithm for Enhancing Data Security in Cloud Computing",
      authors: "R. Anandh, A. Swaminathan, Swati Dhondiram Jadhav, P. Valarmathi, N. Gopinath and Kanchan S. Tiwari",
      journal: "Recent Advances in Electrical & Electronic Engineering",
      year: "2024",
      doi: "10.2174/0123520965279410231221034431"
    },
    {
      title: "A Novel Structure of AlGaN/GaN Based HEMT Device Compatible for High Power Applications",
      authors: "Swati Dhondiram Jadhav",
      conference: "Conference at Chhatrapati Shivaji Maharaj University, Center for Climate Change & Water Studies",
      year: "2024"
    },
    {
      title: "Performance Improvement in ALGaN/GaN HEMT by High-K Approach",
      authors: "Jadhav Swati Dhondiram, Aboo Bakar Khan",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      volume: "vol. 12, no. 2s, pp. 82-92",
      year: "2024"
    },
    {
      title: "ALGaN/GaN Based HEMT Using Double Gate with Field Plate for Microwave Power Applications",
      authors: "Jadhav Swati Dhondiram, Aboo Bakar Khan",
      journal: "Journal of Harbin Engineering University",
      volume: "Vol 44 No. 8",
      year: "2023"
    },
    {
      title: "AlGaN/GaN based HEMT with AIN Spacer and Nucleation Layer, For High Power Application",
      authors: "Jadhav Swati Dhondiram, Aboo Bakar Khan",
      conference: "International Conference of IEEE Devices for Integrated Circuit (DevIC)",
      year: "2023",
      doi: "10.1109/DevIC57758.2023.10134564"
    },
    {
      title: "A Literature Review of HEMT for Low Noise and High-Frequency Applications: Current Status and Technology Comparison",
      authors: "Swati D. Jadhav and Aboo B. Khan",
      conference: "11th IEEE International Conference CSNT IEEE Xplore",
      year: "2022"
    },
    {
      title: "Ground station for Pratham Satellite with Tracking & Polarization by Designing a Crossed Yagi-Uda Antenna",
      authors: "Swati D. Jadhav, Swapnil Bari, Saikrishna Domal, and Poonam Gangan",
      conference: "International Conference on Electrical, Electronics and Computer Science (EECS-2014)",
      year: "2015"
    },
    {
      title: "Coplanar capacitive coupled compact microstrip antenna for wireless communication",
      authors: "Swati D. Jadhav and Veeresh G. Kasabegoudar",
      journal: "International Journal of Wireless Communications and Mobile Computing",
      volume: "vol. 1, no. 4, pp. 124-128",
      year: "2013"
    },
    {
      title: "Multiband Rectenna using a Bowtie Antenna – A Review",
      authors: "Swati D. Jadhav and Veeresh G. Kasabegoudar",
      journal: "International Journal of Emerging Technology and Advanced Engineering",
      year: "2012"
    },
    // Book Chapters
    {
      title: "A Deep Learning Algorithm for Multiple Disease Prediction Using the IoT and Its Implications",
      authors: "N. Gopinath, S., P. Tamilarasan, Maria Pius Pallan, and Swati Dhondiram Jadhav",
      book: "Future Innovations in the Convergence of AI and Internet of Things in Medicine, IGI Global Scientific Publishing",
      year: "2025",
      type: "Book Chapter"
    },
    {
      title: "A Deep Learning Framework for IoT Lightweight Traffic Multiclassification: Smart-cities",
      authors: "Bukkarayasamudram, Jadhav Swati Dhondiram, Goviraboyina, Sharma S, Mukherjee S., Reddy P",
      journal: "Romanian Journal of Medical Practice",
      volume: "Vol 14, No 3",
      pages: "175-184",
      year: "2024",
      type: "Book Chapter",
      doi: "10.2174/0122103279292479240226111739"
    }
  ];

  const featuredPublications = allPublications.slice(0, 5);
  const publicationsToDisplay = showAllPublications ? allPublications : featuredPublications;

  
  
  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-50 to-gray-100'} min-h-screen transition-colors duration-300`}>

      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}  `}>Dr. Swati Jadhav</h1>
            <div className="flex items-center space-x-8">
              <ul className={`hidden md:flex space-x-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
                <li><a href="#experience" className="hover:text-blue-500 transition">Experience</a></li>
                <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
                <li><a href="#publications" className="hover:text-blue-500 transition">Publications</a></li>
                <li><a href="#patents" className="hover:text-blue-500 transition">Patents</a></li>
              </ul>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'} text-white`}>
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Dr. Swati Dhondiram Jadhav</h1>
              <h2 className="text-xl md:text-2xl mb-6">Assistant Professor, Computer Engineering</h2>
              <p className="text-lg mb-8">Ph.D. in Electronics and Communication Engineering with 13+ years of teaching experience and research expertise in Electronics and Telecommunications Engineering.</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:swatijadhav5@gmail.com" className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition transform hover:scale-105 duration-300">
                  Contact Me
                </a>
                <a href="#publications" className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-700 transition transform hover:scale-105 duration-300">
                  View Publications
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 mt-8 md:mt-0 animate-float">
              {/* Placeholder for profile photo */}
              <div className="w-64 h-64 mx-auto rounded-full bg-white/30 border-4 border-white/50 flex items-center justify-center text-6xl backdrop-blur-sm">
                SDJ
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section id="about" className="mb-20 animate-slideUp">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>About Me</h2>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Quick learner with a keen aptitude for learning and productively applying new knowledge resourcefully. A proactive learner with a flair for adopting emerging academic trends and addressing technology requirements.</p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Strong abilities in coordinating with industries and departments for implementing procedures and educational standards for academic excellence. An effective communicator with good analytical, problem solving and interpersonal skills.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Contact Information</h3>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li className="flex items-center">
                      <span className="mr-2">📞</span> +91-91124 88262
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">📧</span> swatijadhav5@gmail.com
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">📧</span> connectswatijadhav55@gmail.com
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🔗</span> <a href="https://www.linkedin.com/in/drswatidhondiramjadhav11030505 " className="text-blue-600 hover:underline">LinkedIn Profile</a>
                    </li>
                  </ul>
                </div>
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Academic IDs</h3>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li className="flex items-center">
                      <span className="mr-2">🎓</span> Google Scholar: iuLAR0oAAAAJ
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🆔</span> ORCID: 0000-0001-8601-4259
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🔍</span> Scopus ID: 57771856000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Ph.D. in Electronics and Communication Engineering</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Chhatrapati Shivaji Maharaj University</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>April 2025</div>
                  </li>
                  <li>
                    <div className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>M.E. in Digital Communication</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dr. BAMU, Aurangabad</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Feb 2014 - 76.12% (First with Distinction)</div>
                  </li>
                  <li>
                    <div className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>B.Tech</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>S.G.G.S.I.E. & T, Nanded</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>May 2008 - 6.85 CGPA (First)</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 animate-slideUp">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>Work Experience</h2>
          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-all hover:shadow-xl duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Assistant Professor</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>International Institute of Information Technology (I²IT), Hinjewadi, Pune</p>
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>February 2024 - Present</div>
              </div>
              <div className="mt-4">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Working in the Department of Computer Engineering, contributing to academic excellence and implementing educational standards.</p>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-all hover:shadow-xl duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Assistant Professor</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Keystone School of Engineering, Uruli Devachi, Pune</p>
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>February 2023 - January 2024</div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-all hover:shadow-xl duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Assistant Professor</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Vishwaniketan's Institute of Management Entrepreneurship Engineering Technology, Khopoli</p>
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>December 2021 - December 2022</div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-all hover:shadow-xl duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Assistant Professor</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Yadavrao Tasgaonkar College of Engineering and Management, Karjat</p>
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>July 2010 - January 2020</div>
              </div>
              <div className="mt-4">
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>10 years of teaching excellence and academic leadership.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20 animate-slideUp">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Technical Skills</h3>
              <div className="mb-6">
                <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Programming Languages & Software</h4>
                <div className="flex flex-wrap gap-2">
                  {['Silvaco TCAD', 'Arduino IDE', 'Visual Studio Code', 'HTML', 'CSS', 'SERVLET', 'XML', 'PHP', 'JSP', 'RUBY', 'IE3D', 'C', 'C++', 'MATLAB'].map((skill) => (
                    <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm transition-transform hover:scale-110 duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Operating Systems</h4>
                <div className="flex flex-wrap gap-2">
                  {['Windows 10/XP/2007/2008', 'Raspberry Pi OS', 'LINUX'].map((skill) => (
                    <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm transition-transform hover:scale-110 duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Subjects Taught</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Digital Signal Processing', 
                  'Web Technology', 
                  'Business Intelligence',
                  'Internet of Things',
                  'Software Engineering',
                  'Digital Electronics',
                  'Microprocessor',
                  'Basic Electrical Engineering',
                  'Communication Engineering',
                  'Data Compression & Encryption'
                ].map((subject) => (
                  <div key={subject} className="flex items-center">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-20 animate-slideUp">
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>Research Publications</h2>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {showAllPublications ? "All Publications" : "Selected Publications"}
        </h3>
        <div className="space-y-6">
          {publicationsToDisplay.map((pub, index) => (
            <div key={index} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 last:border-0 last:pb-0`}>
              <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{pub.title}</h4>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{pub.authors}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                {pub.type && <span className="italic">{pub.type}, </span>}
                {pub.journal || pub.conference || pub.book}{pub.volume && `, ${pub.volume}`}
                {pub.pages && `, pp. ${pub.pages}`}{pub.year && `, ${pub.year}`}
              </p>
              {pub.doi && (
                <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-1`}>
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                    DOI: {pub.doi}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowAllPublications(!showAllPublications)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition transform hover:scale-105 duration-300"
          >
            {showAllPublications ? "Show Featured Publications" : "View All Publications"}
          </button>
        </div>
      </div>
    </section>

        {/* Patents Section */}
        <section id="patents" className="mb-20 animate-slideUp">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>Patents</h2>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
            <div className="space-y-6">
              {[
                {
                  title: "IoT based smart solar charging system for E-Vehicles using Artificial Intelligence",
                  inventors: "Dr. N Gopinath, Asha M. L. Dr. Manisha Kowdiki, Prof. Rupali Adhanu, Dr. Komal Chaure, Pooja Desai, Dr Sonali Patil, Dr. Deepali Patil, Swati Dhondiram Jadhav, Nadhini P. N. Gopinath",
                  applicationNo: "202541020701 A",
                  filingDate: "07/03/2025",
                  publicationDate: "21/03/2025"
                },
                {
                  title: "IoT BASED AUTOMATED WATER TANK MAINTENANCE AND PH LEVEL MONITORING IN HUGE WATER SUPPLY REGIONS",
                  inventors: "S.Vinothkumar, Hanumanthappa H, Viki Tukaram Patil, Aishwarya Churi, Ashwini Mandale (Jadhav), Kanchan S. Tiwari, S Asma Begum, L. Cathrine, Swati Dhondiram Jadhav, N.Gopinath",
                  applicationNo: "2024410208 97 INDIA",
                  filingDate: "20/03/2024",
                  publicationDate: "29/03/2024"
                },
                {
                  title: "An AI & Cloud based Public Security Camera Device",
                  inventors: "Dr. A. Jaya, Mr P.Suresh Ms. Manju Swati Dhondiram Jadhav, Dr.R.Anandh, Korke Prashant Shivaji, Dr. Vrushali Waghmare, Dr. Nilesh Ramesh Kolhalkar, Mrs. P.Nandhini, Dr.N.Gopinath",
                  applicationNo: "404065-00",
                  filingDate: "08/01/2024"
                },
                {
                  title: "VACUME CLEANER WITH GARBAGE BIN",
                  inventors: "Prof. Rajinder Kumar Uppal, Dr. H. R. Chharang, Dr. M. Sasikumar, Swati Dhondiram Jadhav, Patrik Viktor, Albert Molnar, Monika Fodor",
                  status: "Design Accepted and Published",
                  journalNo: "39/2023",
                  journalDate: "29/09/2023",
                  applicationNo: "391069-001"
                }
              ].map((patent, index) => (
                <div key={index} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 last:border-0 last:pb-0`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{patent.title}</h4>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{patent.inventors}</p>
                  <div className={`mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div>
                      <span className="font-medium">Application No:</span> {patent.applicationNo}
                    </div>
                    {patent.filingDate && (
                      <div>
                        <span className="font-medium">Filing Date:</span> {patent.filingDate}
                      </div>
                    )}
                    {patent.publicationDate && (
                      <div>
                        <span className="font-medium">Publication Date:</span> {patent.publicationDate}
                      </div>
                    )}
                    {patent.status && (
                      <div>
                        <span className="font-medium">Status:</span> {patent.status}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section id="responsibilities" className="mb-20 animate-slideUp">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>Professional Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Academic</h3>
              <ul className="space-y-2">
                {[
                  'Research Coordinator',
                  'Internship Coordinator',
                  'Faculty Development Coordinator',
                  'Training and Placement Coordinator',
                  'Mentor-Mentee Coordinator',
                  'Project Based Learning Coordinator',
                  'Value Addition Program Coordinator',
                  'Project Coordinator',
                  'Exam Coordinator',
                  'Class Advisor'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Technical</h3>
              <ul className="space-y-2">
                {[
                  'Conducted C2TC (Campus to Technical Careers) program',
                  'BEE Subject In-charge / Project In-charge',
                  'Committee Member of E-Yantra lab',
                  'Term test coordinator',
                  'NAAC Committee member'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Industry Collaboration</h3>
              <ul className="space-y-2">
                {[
                  'NISSO CORPORATION (Japanese Language Training)',
                  'ISRO, BANGLORE Industry Visit',
                  'Selec Controls Pvt. Ltd (12 Industry projects)',
                  'Guided the project of Base station for IIT Bombay'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Training & Certifications */}
        <section id="training" className="mb-20 animate-slideUp">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-800'} border-b-2 border-blue-500 pb-2 inline-block`}>Professional Development</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Recent Faculty Development Programs</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "High Performance Computing: Fueling the Future of AI and Deep Learning",
                    org: "International Institute of Information Technology (I²IT), Hinjewadi, Pune",
                    date: "December 26-31, 2024"
                  },
                  {
                    title: "Next Gen in AI/ML and IoT",
                    org: "V. P. Engineering College, Rajkot, Gujarat",
                    date: "January 6-11, 2025"
                  },
                  {
                    title: "Generative AI and its Multidomain Use Cases",
                    org: "Vishwakarma Institute of Technology, Pune",
                    date: "December 2-6, 2024"
                  },
                  {
                    title: "Industry 5.O for Society 5.O",
                    org: "Vishwakarma Institute of Information Technology, Pune",
                    date: "March 18-22, 2024"
                  }
                ].map((program, index) => (
                  <div key={index} className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                    <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{program.title}</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{program.org}</p>
                    <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>{program.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Memberships & Reviewer Roles</h3>
              <div className="mb-6">
                <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Professional Memberships</h4>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>IAENG - International Association of Engineers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>IRED - Institute of Research Engineers and Doctors</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Reviewer for Conferences</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>2nd IEEE International Conference on Networks, Multimedia and Information Technology (2024)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>First International IEEE conference on Data Science and network Security (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>18th IEEE International Colloquium on Signal Processing & Applications (2022)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} py-12`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Dr. Swati Dhondiram Jadhav</h2>
              <p className="text-gray-300">
                Assistant Professor, Computer Engineering<br />
                International Institute of Information Technology (I²IT)<br />
                Hinjewadi, Pune - 411 057
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Experience", href: "#experience" },
                  { name: "Skills", href: "#skills" },
                  { name: "Publications", href: "#publications" },
                  { name: "Patents", href: "#patents" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:swatijadhav5@gmail.com" className="text-gray-300 hover:text-white transition">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/drswatidhondiramjadhav11030505 " className="text-gray-300 hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://scholar.google.com/citations?user=iuLAR0oAAAAJ " className="text-gray-300 hover:text-white transition">
                    Google Scholar
                  </a>
                </li>
                <li>
                  <a href="https://orcid.org/0000-0001-8601-4259 " className="text-gray-300 hover:text-white transition">
                    ORCID
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Dr. Swati Dhondiram Jadhav. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
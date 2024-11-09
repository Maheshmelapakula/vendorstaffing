import React from 'react';
import { FaBriefcase, FaUserTie, FaCogs } from 'react-icons/fa';

function Services() {
  return (
    <section id="services" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* IT Staffing Service */}
        <div className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg transition-shadow">
          <FaUserTie className="text-blue-600 text-3xl mb-4" />
          <h3 className="text-xl font-bold">IT Staffing</h3>
          <p>Providing top-tier tech talent for your business needs.</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Success Stories:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Project Alpha</strong>: Placed a team of expert developers for a fintech app, enabling rapid project delivery.
              </li>
              <li>
                <strong>Healthcare Platform</strong>: Supplied key engineers for scaling up a critical medical software project.
              </li>
            </ul>
            <p className="mt-4 text-green-600 font-medium">Trusted by top-tier companies for critical staffing needs.</p>
          </div>
        </div>
        
        {/* Project Management Service */}
        <div className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg transition-shadow">
          <FaBriefcase className="text-blue-600 text-3xl mb-4" />
          <h3 className="text-xl font-bold">Project Management</h3>
          <p>End-to-end project handling with expertise and efficiency.</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Live Projects:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Retail System Overhaul</strong>: Managed the transition of a legacy system to a modern cloud-based platform.
              </li>
              <li>
                <strong>CRM Implementation</strong>: Led an enterprise-level CRM deployment with successful adoption.
              </li>
            </ul>
            <p className="mt-4 text-green-600 font-medium">Delivering strategic project solutions for global enterprises.</p>
          </div>
        </div>

        {/* Technical Consulting Service */}
        <div className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg transition-shadow">
          <FaCogs className="text-blue-600 text-3xl mb-4" />
          <h3 className="text-xl font-bold">Technical Consulting</h3>
          <p>Professional insights and technical solutions tailored to you.</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Key Engagements:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Cloud Optimization</strong>: Advised a SaaS company on optimizing cloud infrastructure, reducing costs by 30%.
              </li>
              <li>
                <strong>Security Audit</strong>: Conducted a full security review for a financial services firm, enhancing compliance.
              </li>
            </ul>
            <p className="mt-4 text-green-600 font-medium">Providing IT services to companies for seamless business operations.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Services;

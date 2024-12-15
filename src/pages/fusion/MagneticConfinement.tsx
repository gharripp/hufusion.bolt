import React from 'react';
import PageHeader from '../../components/PageHeader';

export default function MagneticConfinement() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Magnetic Confinement Fusion"
          description="Exploring different approaches to plasma confinement for fusion energy"
        />

        {/* Introduction */}
        <div className="text-gray-300 mb-12">
          <p className="mb-6">
            Magnetic confinement fusion uses powerful magnetic fields to contain
            and isolate hot plasma, enabling nuclear fusion reactions. Two major
            approaches dominate current research: tokamaks and stellarators,
            each with unique advantages and engineering challenges.
          </p>
        </div>

        {/* Main Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Stellarator Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Stellarator</h2>
            <p className="text-gray-300 mb-4">
              Stellarators use external magnetic coils to create a twisted
              magnetic field that confines the plasma. This design offers
              inherent stability and continuous operation capabilities.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-white mb-2">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Steady-state operation without current drive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>No risk of disruptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Complex 3D magnetic field geometry</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Current Challenges</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Complex coil design and construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Optimization of magnetic field configuration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tokamak Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Tokamak</h2>
            <p className="text-gray-300 mb-4">
              Tokamaks use a combination of external magnetic fields and
              internal plasma current to achieve confinement. They are currently
              the most developed approach to fusion.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-white mb-2">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Axisymmetric design simplifies construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Well-established experimental database</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Higher achieved plasma parameters</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Current Challenges</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Risk of disruptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hampton-blue mr-2">•</span>
                    <span>Pulsed operation limitations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Research Focus Section */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Research Focus
          </h2>
          <p className="text-gray-300 mb-6">
            At HU Fusion, we focus on stellarator optimization while maintaining
            active collaboration with tokamak research facilities. Our approach
            combines theoretical modeling, experimental validation, and advanced
            engineering solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl text-white mb-2">Current Projects</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  <span>STAR_Lite Stellarator development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  <span>Advanced magnetic field optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  <span>Plasma stability studies</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-white mb-2">
                Collaborative Research
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  <span>Princeton Plasma Physics Lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  <span>North Carolina State University FPAC Lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  <span>HSX - Stellarator UW Madison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

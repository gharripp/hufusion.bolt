import PageHeader from '../../components/PageHeader';

export default function Overview() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <PageHeader 
        title="Nuclear Fusion"
        description="Harnessing the power of stars on Earth"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What is Nuclear Fusion?</h2>
              <p className="text-gray-300 leading-relaxed">
                Nuclear fusion is the process that powers the Sun and stars. It occurs when atomic nuclei combine, or "fuse," 
                releasing vast amounts of energy. Unlike current nuclear power plants that split heavy atoms (fission), 
                fusion combines light atoms like hydrogen isotopes to form heavier elements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Promise of Fusion Energy</h2>
              <p className="text-gray-300 leading-relaxed">
                Fusion offers the potential for nearly limitless, clean energy production with minimal environmental impact. 
                The fuel (primarily deuterium) can be extracted from seawater, making it a virtually inexhaustible resource. 
                Unlike fossil fuels, fusion produces no greenhouse gases, and unlike nuclear fission, it generates minimal 
                long-lived radioactive waste.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed">
                Creating fusion on Earth requires heating fuel to temperatures exceeding 100 million degrees Celsius—hotter 
                than the core of the Sun. At these temperatures, matter exists as plasma, which must be confined and controlled. 
                Two main approaches are being pursued globally: magnetic confinement (using devices like tokamaks and stellarators) 
                and inertial confinement.
              </p>
            </section>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Advantages of Fusion</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  Abundant fuel supply from seawater
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  No greenhouse gas emissions
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  Minimal radioactive waste
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  Inherently safe operation
                </li>
                <li className="flex items-start">
                  <span className="text-hampton-blue mr-2">•</span>
                  High energy density
                </li>
              </ul>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
                alt="Fusion Research Facility"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm text-gray-300">
                  Modern fusion research facilities use advanced technology to study plasma behavior and confinement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
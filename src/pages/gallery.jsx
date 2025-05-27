import React, { useState } from 'react';

const categories = [
  'Web Development',
  'App Development',
  'Team Building Activities',
  'Tech Talks',
  'CSR Initiatives',
];

const projects = [
  { name: 'Bastion', image: 'https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'SELP', image: 'https://images.unsplash.com/photo-1674027326252-a09b3473e18f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Medease', image: 'https://images.unsplash.com/photo-1674027326252-a09b3473e18f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'VB Site', image: 'https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Core9', image: 'https://images.unsplash.com/photo-1674027326252-a09b3473e18f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'MyProperty+', image: 'https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function GalleryOfSuccess() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-16 px-4 lg:px-20 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
          ... Our Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Gallery Of Success</h2>
        <p className="text-gray-600 text-lg mb-10">
          Our portfolio showcases not only our achievements but also the strong relationships we've cultivated and the trust we've gained throughout our journey.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 border rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-transparent'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

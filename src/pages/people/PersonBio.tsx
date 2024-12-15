import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const peopleData = {
  'dr-lowe': {
    name: 'Dr. Calvin Lowe',
    role: 'HU Fusion Director',
    title: 'Research Professor',
    image: '/images/Calvin-Lowe.jpg',
    specialization: 'Plasma Physics',
    education: [
      'Ph.D. in ...',
      'M.S. in ...',
      'B.S. in ...',
    ],
    research: [
      '...',
      '...',
      '...',
    ],
    publications: [
      '..."',
      '..."',
    ],
    bio: 'Dr. Lowe leads the NU Fusion program, focusing on advancing plasma physics research and fusion reactor development. His work combines theoretical and experimental approaches to fusion energy.',
  },
  'dr-punjabi': {
    name: 'Dr. Alkesh Punjabi',
    role: 'Head of HU Theory',
    title: 'Research Professor',
    image: '/images/punjabilakesh-1.jpg',
    specialization: 'Fusion Technology',
    education: [
      'Ph.D. in...',
      'M.S. in ...',
      'B.Tech in ...',
    ],
    research: [
      '...',
      '...',
      '...',
    ],
    publications: [
      '..."',
      '..."',
    ],
    bio: 'Dr. Punjabi leads the theoretical physics division, specializing in computational approaches to fusion challenges. His research focuses on developing new models for non-resonant divertors.',
  },
  'dr-ali': {
    name: 'Dr. Halima Ali',
    role: 'Research Director',
    title: 'Research Professor',
    image: '/images/halima_ali.jpg',
    specialization: 'Stellarator Design',
    education: [
      'Ph.D. in...',
      'M.S. in ...',
      'B.S. in ...',
    ],
    research: [
      '...',
      '...',
      '...',
    ],
    publications: [
      '..."',
      '..."',
    ],
    bio: '...',
  },
  'dr-naik': {
    name: 'Dr. Shibabrat Naik',
    role: 'STAR_Lite Theory Lead',
    title: 'Assistant Professor',
    image: '/images/naik_shibabrat.jpg',
    specialization: 'Plasma Dynamics',
    education: [
      '...',
      '...',
      '...',
    ],
    research: [
      '...',
      '...',
      '...',
    ],
    publications: [
      '...',
      '...',
    ],
    bio: '...',
  },
  'dr-harrer': {
    name: 'Dr. Georg Harrer',
    role: 'STAR_Lite Experimental Lead',
    title: 'Assistant Professor',
    image: '/images/georg_harrer.jpg',
    specialization: 'Experimental Physics',
    education: [
      'Ph.D. in Physics, TU Wien',
      'M.S. in Physics, TU Wien',
      'B.S. in Physics, TU Wien',
    ],
    research: [
      'Experimental plasma physics',
      'Edge plasma phenomena',
      'Fusion diagnostics',
    ],
    publications: [
      '...',
      '...',
    ],
    bio: 'Dr. Harrer specializes in experimental fusion physics, with a focus on edge plasma phenomena. His research contributes to understanding plasma-wall interactions and improving plasma containment.',
  },
};

export default function PersonBio() {
  const { id } = useParams<{ id: string }>();
  const person = peopleData[id as keyof typeof peopleData];

  if (!person) {
    return <div className="min-h-screen bg-black pt-20 text-white">Person not found</div>;
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <a href="/people/faculty" className="inline-flex items-center text-gray-400 hover:text-hampton-blue mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Faculty
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="rounded-lg overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4">
              <p className="text-hampton-blue">{person.specialization}</p>
              <p className="text-gray-400">{person.role}</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-white mb-2">{person.name}</h1>
            <p className="text-xl text-hampton-blue mb-6">{person.title}</p>
            <p className="text-gray-300 mb-8">{person.bio}</p>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
                <ul className="space-y-2">
                  {person.education.map((edu, index) => (
                    <li key={index} className="text-gray-300">{edu}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Research Focus</h2>
                <ul className="space-y-2">
                  {person.research.map((item, index) => (
                    <li key={index} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Selected Publications</h2>
                <ul className="space-y-2">
                  {person.publications.map((pub, index) => (
                    <li key={index} className="text-gray-300">{pub}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
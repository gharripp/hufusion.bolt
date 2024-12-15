import React from 'react';
import PersonCard from '../../components/PersonCard';
import PageHeader from '../../components/PageHeader';

const facultyMembers = [
  {
    id: 'dr-lowe',
    name: 'Dr. Calvin Lowe',
    role: 'HU Fusion Director',
    title: 'Research Professor',
    image: '/images/Calvin-Lowe.jpg',
    specialization: 'Plasma Physics',
  },
  {
    id: 'dr-punjabi',
    name: 'Dr. Alkesh Punjabi',
    role: 'Head of HU Theory',
    title: 'Research Professor',
    image: '/images/punjabi.jpg',
    specialization: 'Divertor Theory',
  },
  {
    id: 'dr-ali',
    name: 'Dr. Halima Ali',
    role: 'Education Director',
    title: 'Professor',
    image: '/images/halima_ali.jpg',
    specialization: 'Divertor Theory',
  },
  {
    id: 'dr-naik',
    name: 'Dr. Shibabrat Naik',
    role: 'STAR_Lite Theory Lead',
    title: 'Assistant Professor',
    image: '/images/naik_shibabrat.jpg',
    specialization: 'Non-Linear Systems',
  },
  {
    id: 'dr-harrer',
    name: 'Dr. Georg Harrer',
    role: 'STAR_Lite Experimental Lead',
    title: 'Assistant Professor',
    image: '/images/georg_harrer.jpg',
    specialization: 'Plasma Edge Physics',
  }
];

export default function Faculty() {
  return (
    <div>
      <PageHeader 
        title="Faculty"
        description="Meet our distinguished faculty members leading groundbreaking fusion research"
      />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facultyMembers.map((member) => (
            <PersonCard key={member.id} person={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
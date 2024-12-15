import React from 'react';
import { Link } from 'react-router-dom';

interface Person {
  id: string;
  name: string;
  role: string;
  title: string;
  image: string;
  specialization: string;
}

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <Link 
      to={`/people/bio/${person.id}`}
      className="group relative block bg-black overflow-hidden rounded-lg transition-transform hover:scale-105"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-hampton-blue transition-colors">
            {person.name}
          </h3>
          <p className="text-gray-300 font-medium">{person.title}</p>
          <p className="text-gray-400 text-sm">{person.specialization}</p>
        </div>
      </div>
    </Link>
  );
}
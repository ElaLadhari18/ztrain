import React, { useState } from 'react';
import { Factory, Truck, LayoutGrid, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'INDUSTRIES SERVED',
    description: 'Explore the diverse industries we serve.',
    icon: Factory,
    link: '/industries',
  },
  {
    title: 'TRANSPORTATION SERVICES',
    description: 'Discover our comprehensive transportation solutions.',
    icon: Truck,
    link: '/transportation',
  },
  {
    title: 'LOGISTICS CAPABILITIES',
    description: 'Learn about our logistics capabilities and expertise.',
    icon: LayoutGrid,
    link: '/logistics',
  },
];

export default function ExploreSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-16 ">
      {services.map((service, index) => (
        <div key={index} className="box hover:border-[#FFA500] border-2 border-transparent">
          <div className="p-4 flex flex-col items-center">
            <service.icon className="h-16 w-16 text-[#FFA500] mb-4" />
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link to={service.link} className="learn-more">
              Learn More <ArrowRight className="h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

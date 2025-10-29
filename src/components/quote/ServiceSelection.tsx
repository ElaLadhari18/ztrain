import React from 'react';
import { Ship, Package, Plane, Truck } from 'lucide-react';

interface ServiceSelectionProps {
  data: string;
  updateData: (data: string) => void;
}

function ServiceSelection({ data, updateData }: ServiceSelectionProps) {
  const services = [
    {
      id: 'Sea Freight FCL',
      title: 'Sea Freight FCL',
      icon: Ship,
      description: 'Full Container Load shipping service'
    },
    {
      id: 'Sea Freight LCL',
      title: 'Sea Freight LCL',
      icon: Package,
      description: 'Less than Container Load shipping service'
    },
    {
      id: 'Air Freight',
      title: 'Air Freight',
      icon: Plane,
      description: 'Air cargo transportation service'
    },
    {
      id: 'Road Freight',
      title: 'Road Freight',
      icon: Truck,
      description: 'Ground transportation service'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service Type</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => updateData(service.id)}
              className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                data === service.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-300 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${
                  data === service.id ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-600'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
              {data === service.id && (
                <div className="absolute top-2 right-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSelection;
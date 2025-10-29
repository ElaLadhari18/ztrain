import React from 'react';
import { User, Building2, MapPin, Mail, Phone } from 'lucide-react';

interface PersonalInfoProps {
  data: {
    name: string;
    companyName: string;
    address: string;
    email: string;
    phone: string;
  };
  updateData: (data: any) => void;
}

function PersonalInfo({ data, updateData }: PersonalInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-6 w-6 text-orange-500" />
          </div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="pl-12 h-12 w-full rounded-md border-gray-300 text-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building2 className="h-6 w-6 text-orange-500" />
          </div>
          <input
            type="text"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="pl-12 h-12 w-full rounded-md border-gray-300 text-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-6 w-6 text-orange-500" />
          </div>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="pl-12 h-12 w-full rounded-md border-gray-300 text-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-6 w-6 text-orange-500" />
          </div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="pl-12 h-12 w-full rounded-md border-gray-300 text-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-6 w-6 text-orange-500" />
          </div>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="pl-12 h-12 w-full rounded-md border-gray-300 text-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
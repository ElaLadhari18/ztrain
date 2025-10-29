import React, { useState } from 'react';
import { Search, Package, CheckCircle, Truck, MapPin } from 'lucide-react';

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // Here you would typically make an API call to fetch tracking information
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Shipment</h1>
        <p className="text-xl text-gray-600">
          Enter your tracking number to get real-time updates
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex shadow-sm rounded-md">
            <div className="relative flex-grow focus-within:z-10">
              <input
                type="text"
                name="tracking"
                id="tracking"
                className="block w-full rounded-none rounded-l-md border-gray-300 pl-4 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <Search className="h-5 w-5" />
              <span>Track</span>
            </button>
          </div>
        </form>

        {isTracking && (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  Tracking Number: {trackingNumber}
                </h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  In Transit
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Estimated delivery: March 20, 2024
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                <div className="relative flex items-center">
                  <div className="absolute left-0 h-16 w-16 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-24">
                    <h3 className="text-lg font-medium text-gray-900">Order Confirmed</h3>
                    <p className="text-sm text-gray-500">March 15, 2024 - 9:00 AM</p>
                    <p className="text-sm text-gray-600">Order has been received and confirmed</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 h-16 w-16 flex items-center justify-center">
                    <Package className="h-8 w-8 text-primary-500" />
                  </div>
                  <div className="ml-24">
                    <h3 className="text-lg font-medium text-gray-900">Package Processed</h3>
                    <p className="text-sm text-gray-500">March 16, 2024 - 2:30 PM</p>
                    <p className="text-sm text-gray-600">Package has been processed at origin facility</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 h-16 w-16 flex items-center justify-center">
                    <Truck className="h-8 w-8 text-primary-500" />
                  </div>
                  <div className="ml-24">
                    <h3 className="text-lg font-medium text-gray-900">In Transit</h3>
                    <p className="text-sm text-gray-500">March 17, 2024 - 10:15 AM</p>
                    <p className="text-sm text-gray-600">Package is in transit to destination</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 h-16 w-16 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-24">
                    <h3 className="text-lg font-medium text-gray-400">Out for Delivery</h3>
                    <p className="text-sm text-gray-400">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { QuoteRequest } from '../../types';

interface QuoteConfirmationProps {
  data: QuoteRequest;
  onSubmit: () => void;
  onBack: () => void;
}

export function QuoteConfirmation({ data, onSubmit, onBack }: QuoteConfirmationProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
        <dl className="mt-2 divide-y divide-gray-200">
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="text-sm text-gray-900">{data.personalInfo?.name}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Company</dt>
            <dd className="text-sm text-gray-900">{data.personalInfo?.companyName}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="text-sm text-gray-900">{data.personalInfo?.email}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="text-sm text-gray-900">{data.personalInfo?.phone}</dd>
          </div>
        </dl>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Service Details</h3>
        <dl className="mt-2 divide-y divide-gray-200">
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Service Type</dt>
            <dd className="text-sm text-gray-900">{data.serviceInfo?.serviceType}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Loading Point</dt>
            <dd className="text-sm text-gray-900">{data.serviceInfo?.portOfLoading}</dd>
          </div>
          <div className="py-3 flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Discharge Point</dt>
            <dd className="text-sm text-gray-900">{data.serviceInfo?.portOfDischarge}</dd>
          </div>
        </dl>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Quote Request
        </button>
      </div>
    </div>
  );
}
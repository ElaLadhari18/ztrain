import React from 'react';
import { QuoteRequest } from '../../types';

interface ServiceDetailsFormProps {
  data: QuoteRequest;
  onUpdate: (data: QuoteRequest) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ServiceDetailsForm({
  data,
  onUpdate,
  onNext,
  onBack,
}: ServiceDetailsFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onUpdate({
      ...data,
      serviceInfo: {
        ...data.serviceInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
            Service Type *
          </label>
          <select
            name="serviceType"
            id="serviceType"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={data.serviceInfo?.serviceType || ''}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="air">Air Freight</option>
            <option value="sea-fcl">Sea Freight (FCL)</option>
            <option value="sea-lcl">Sea Freight (LCL)</option>
            <option value="road-ftl">Road Freight (FTL)</option>
            <option value="road-ltl">Road Freight (LTL)</option>
          </select>
        </div>

        <div>
          <label htmlFor="portOfLoading" className="block text-sm font-medium text-gray-700">
            Port/Place of Loading *
          </label>
          <input
            type="text"
            name="portOfLoading"
            id="portOfLoading"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={data.serviceInfo?.portOfLoading || ''}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="portOfDischarge" className="block text-sm font-medium text-gray-700">
            Port/Place of Discharge *
          </label>
          <input
            type="text"
            name="portOfDischarge"
            id="portOfDischarge"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={data.serviceInfo?.portOfDischarge || ''}
            onChange={handleChange}
          />
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
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
}
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Truck, Ship, Plane, ClipboardList, User, Building2, MapPin } from 'lucide-react';
import PersonalInfo from '../components/quote/PersonalInfo';
import ServiceSelection from '../components/quote/ServiceSelection';
import ServiceDetails from '../components/quote/ServiceDetails';

export function Quote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      companyName: '',
      address: '',
      email: '',
      phone: '',
    },
    serviceType: '',
    serviceDetails: {},
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo data={formData.personalInfo} updateData={(data) => updateFormData('personalInfo', data)} />;
      case 2:
        return <ServiceSelection data={formData.serviceType} updateData={(data) => updateFormData('serviceType', data)} />;
      case 3:
        return <ServiceDetails serviceType={formData.serviceType} data={formData.serviceDetails} updateData={(data) => updateFormData('serviceDetails', data)} />;
      default:
        return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('Sending...');

    try {
      const formDataToSend = new FormData();
      
      // access key
      formDataToSend.append('access_key', 'f402ce8d-e7ee-4504-8e72-6cdb65266fc1');
      // formDataToSend.append('access_key', 'e18e5343-b93d-4615-b579-fc048de5e99b');
      
      // personal info
      Object.entries(formData.personalInfo).forEach(([key, value]) => {
        formDataToSend.append(`personal_info_${key}`, value as string);
      });
      
      // service type
      formDataToSend.append('service_type', formData.serviceType);
      
      // service details
      Object.entries(formData.serviceDetails).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(`service_details_${key}`, value as string);
        }
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus('Form submitted successfully!');
        // Reset form
        setFormData({
          personalInfo: {
            name: '',
            companyName: '',
            address: '',
            email: '',
            phone: '',
          },
          serviceType: '',
          serviceDetails: {},
        });
        setStep(1);
      } else {
        console.error('Submission error:', data);
        setSubmissionStatus('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <StepIndicator
                step={1}
                currentStep={step}
                icon={User}
                text="Personal Info"
              />
              <div className="flex-1 h-1 bg-orange-200">
                <div
                  className="h-1 bg-orange-500 transition-all duration-300"
                  style={{ width: step > 1 ? '100%' : '0%' }}
                />
              </div>
              <StepIndicator
                step={2}
                currentStep={step}
                icon={ClipboardList}
                text="Service Type"
              />
              <div className="flex-1 h-1 bg-orange-200">
                <div
                  className="h-1 bg-orange-500 transition-all duration-300"
                  style={{ width: step > 2 ? '100%' : '0%' }}
                />
              </div>
              <StepIndicator
                step={3}
                currentStep={step}
                icon={Truck}
                text="Service Details"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}

            {submissionStatus && (
              <div className={`mt-4 p-4 rounded-md ${
                submissionStatus.includes('success') 
                  ? 'bg-green-50 text-green-800' 
                  : submissionStatus === 'Sending...'
                  ? 'bg-blue-50 text-blue-800'
                  : 'bg-red-50 text-red-800'
              }`}>
                {submissionStatus}
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 py-2 border border-orange-300 text-orange-600 rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}
              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submissionStatus === 'Sending...'}
                    className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  icon: React.ElementType;
  text: string;
}

function StepIndicator({ step, currentStep, icon: Icon, text }: StepIndicatorProps) {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isActive
            ? 'bg-orange-500 text-white'
            : isCompleted
            ? 'bg-orange-500 text-white'
            : 'bg-orange-200 text-orange-700'
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <span className="mt-2 text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

export default Quote;



















// import React, { useState } from 'react';
// import { ChevronRight, ChevronLeft, Truck, ClipboardList, User } from 'lucide-react';
// import PersonalInfo from '../components/quote/PersonalInfo';
// import ServiceSelection from '../components/quote/ServiceSelection';
// import ServiceDetails from '../components/quote/ServiceDetails';

// export function Quote() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     personalInfo: {
//       name: '',
//       companyName: '',
//       address: '',
//       email: '',
//       phone: '',
//     },
//     serviceType: '',
//     serviceDetails: {},
//   });
//   const [submissionStatus, setSubmissionStatus] = useState('');

//   const updateFormData = (section, data) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: data
//     }));
//   };

//   const nextStep = () => setStep(s => Math.min(s + 1, 3));
//   const prevStep = () => setStep(s => Math.max(s - 1, 1));

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return <PersonalInfo data={formData.personalInfo} updateData={(data) => updateFormData('personalInfo', data)} />;
//       case 2:
//         return <ServiceSelection data={formData.serviceType} updateData={(data) => updateFormData('serviceType', data)} />;
//       case 3:
//         return <ServiceDetails serviceType={formData.serviceType} data={formData.serviceDetails} updateData={(data) => updateFormData('serviceDetails', data)} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-lg shadow-xl p-8">
//           <div className="mb-8">
//             <div className="flex items-center justify-center space-x-4">
//               <StepIndicator step={1} currentStep={step} icon={User} text="Personal Info" />
//               <div className="flex-1 h-1" style={{ backgroundColor: '#ffd699' }}>
//                 <div className="h-1 transition-all duration-300" style={{ width: step > 1 ? '100%' : '0%', backgroundColor: '#ffa500' }} />
//               </div>
//               <StepIndicator step={2} currentStep={step} icon={ClipboardList} text="Service Type" />
//               <div className="flex-1 h-1" style={{ backgroundColor: '#ffd699' }}>
//                 <div className="h-1 transition-all duration-300" style={{ width: step > 2 ? '100%' : '0%', backgroundColor: '#ffa500' }} />
//               </div>
//               <StepIndicator step={3} currentStep={step} icon={Truck} text="Service Details" />
//             </div>
//           </div>

//           <form>
//             {renderStep()}
//             <div className="mt-8 flex justify-between">
//               {step > 1 && (
//                 <button type="button" onClick={prevStep} className="flex items-center px-4 py-2 border rounded-md" style={{ borderColor: '#ffa500', color: '#ffa500', backgroundColor: '#ffd699' }}>
//                   <ChevronLeft className="w-5 h-5 mr-2" /> Previous
//                 </button>
//               )}
//               <div className="ml-auto">
//                 {step < 3 ? (
//                   <button type="button" onClick={nextStep} className="flex items-center px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#ffa500' }}>
//                     Next <ChevronRight className="w-5 h-5 ml-2" />
//                   </button>
//                 ) : (
//                   <button type="submit" className="flex items-center px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#ffa500' }}>
//                     Submit Request
//                   </button>
//                 )}
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StepIndicator({ step, currentStep, icon: Icon, text }) {
//   const isActive = step === currentStep;
//   const isCompleted = step < currentStep;

//   return (
//     <div className="flex flex-col items-center">
//       <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: isActive || isCompleted ? '#ffa500' : '#ffd699', color: isActive || isCompleted ? 'white' : '#ffa500' }}>
//         <Icon className="w-5 h-5" />
//       </div>
//       <span className="mt-2 text-sm font-medium text-gray-700">{text}</span>
//     </div>
//   );
// }

// export default Quote;

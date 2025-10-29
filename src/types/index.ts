// types/index.ts
export interface QuoteRequest {
    step: number;
    personalInfo?: {
      name?: string;
      companyName?: string;
      email?: string;
      phone?: string;
      address?: string;
      website?: string;
      country?: string;
    };
    serviceInfo?: {
      serviceType?: 'air' | 'sea-fcl' | 'sea-lcl' | 'road-ftl' | 'road-ltl'; // `serviceType` est optionnel
      portOfLoading?: string;
      portOfDischarge?: string;
      equipmentType?: string;
      commodity?: string;
      quantity?: number;
      packingType?: string;
      targetRate?: string;
      cargoReadinessDate?: string;
      pickupAddress?: string;
      deliveryAddress?: string;
      incoterm?: string;
      grossWeight?: string;
      netWeight?: string;
      temperature?: string;
      humidity?: string;
      dimensions?: {
        length: number;
        width: number;
        height: number;
      };
    };
  }
  
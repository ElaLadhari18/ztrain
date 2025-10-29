import { Factory, Building2, Wheat, FlaskRound as Flask, Stethoscope } from 'lucide-react';
import mining1 from "../assests/mining1.jpg";
import mining2 from "../assests/mining2.jpg";
import mining11 from "../assests/ProvenTrack.jpg";

import construction from "../assests/Construction-Materials-1.png";
import construction1 from "../assests/Construction-Materials-2.png";
import construction2 from "../assests/Construction-Materials-3.png";

import agr from "../assests/Food-and-Agriculture-1.png";
import agr1 from "../assests/Food-and-Agriculture2.png";
import agr2 from "../assests/Food-and-Agriculture-3.png";

import chemic from "../assests/Chemicals-and-Commodities-1.png";
import chemic1 from "../assests/Chemicals-and-Commodities-2.png";
import chemic2 from "../assests/Chemicals-and-Commodities-3.png";

import pharma from "../assests/Pharmaceutical-and-Healthcare-1.png";
import pharma1 from "../assests/Pharmaceutical-and-Healthcare-2.png";
import pharma2 from "../assests/Pharmaceutical-and-Healthcare-3.png";





export const industries = [
  {
    id: 'mining',
    icon: Factory,
    title: 'Mining',
    shortDesc: 'Mining materials and equipment transport',
    longDesc: 'From oil and gas to precious metals, we have extensive experience in handling the transportation and logistics needs of the mining industry. Our robust infrastructure and specialized equipment allow us to safely and efficiently manage the movement of your critical raw materials.',
    image: mining1,
    galleryImages: [mining11, mining2],
    details: {
      services: [
        'Bulk materials transport',
        'Specialized handling',
        'Heavy equipment management'
      ],
      expertise: 'Robust infrastructure and specialized equipment'
    }
  },
  {
    id: 'construction',
    icon: Building2,
    title: 'Construction Materials',
    shortDesc: 'Logistics solutions for construction',
    longDesc: 'Whether it\'s cement, steel, or aggregates, we understand the importance of timely and reliable delivery for the construction industry. Our comprehensive logistics solutions ensure your building materials reach job sites on schedule, enabling your projects to stay on track.',
    image: construction,
    galleryImages: [construction1,construction2 ],

    details: {
      services: [
        'On-site delivery',
        'Temporary storage',
        'Materials distribution'
      ],
      expertise: 'Timely and reliable delivery for the construction industry.'
    }
  },
  {
    id: 'agriculture',
    icon: Wheat,
    title: 'Food & Agriculture',
    shortDesc: 'Agricultural and food products transport',
    longDesc: 'Navigating the complexities of the food and agricultural supply chain, we provide seamless logistics for the transportation of grains, produce, and packaged goods. Our temperature-controlled facilities and specialized handling procedures guarantee the integrity of your perishable cargo.',
    image: agr,
    galleryImages: [agr1, agr2],

    details: {
      services: [
        'Refrigerated transport',
        'Climate-controlled storage',
        'Complete traceability'
      ],
      expertise: 'Temperature-controlled facilities'
    }
  },
  {
    id: 'chemicals',
    icon: Flask,
    title: 'Chemicals',
    shortDesc: 'Secure transport of hazardous materials',
    longDesc: 'Zed Train for Trans has a deep understanding of the unique requirements for handling hazardous materials and sensitive commodities, such as fertilizers, minerals, and plastics. We adhere to strict safety protocols to ensure the safe and compliant movement of these specialized goods.',
    image: chemic,
    galleryImages: [chemic1, chemic2],

    details: {
      services: [
        'ADR transport',
        'Secure storage',
        'Risk management'
      ],
      expertise: 'Strict safety protocols for hazardous materials.'
    }
  },
  {
    id: 'pharmaceutical',
    icon: Stethoscope,
    title: 'Pharmaceutical and Healthcare',
    shortDesc: 'Medical and pharmaceutical logistics',
    longDesc: 'In the fast-paced world of pharmaceutical and medical logistics, we excel at delivering time-sensitive and temperature-controlled shipments of pharmaceuticals, medical equipment, and personal protective equipment (PPE). Our commitment to quality and regulatory compliance is paramount.',
    image: pharma,
    galleryImages: [pharma1, pharma2],
    details: {
      services: [
        'Temperature-controlled transport',
        'Real-time tracking',
        'Regulatory compliance'
      ],
      expertise: ' Time-sensitive and temperature-controlled shipments.'
    }
  }
];
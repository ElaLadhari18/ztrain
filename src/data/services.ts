import { Truck, Ship, Plane, Train, FileCheck, Package, Building, Warehouse } from 'lucide-react';

import road1 from "../assests/Road-Freight1.png";
import road2 from "../assests/Road-Freight2.png";
import road11 from "../assests/Road-Freight3.png";

import ocean from "../assests/Ocean-Freight1.png";
import ocean1 from "../assests/Ocean-Freight1.png";
import ocean2 from "../assests/Ocean-Freight3.png";

import air from "../assests/Air-Freight1.png";
import air1 from "../assests/Air-Freight2.png";
import air2 from "../assests/Air-Freight3.png";

import rail from "../assests/Rail-Freight1.png";
import rail1 from "../assests/Rail-Freight2.png";
import rail2 from "../assests/Rail-Freight3.png";

import custom from "../assests/Customs-Clearance1.png";
import custom1 from "../assests/Customs-Clearance2.png";
import custom2 from "../assests/Customs-Clearance3.png";

import stuffing from "../assests/Stuffing-Process1.png";
import stuffing1 from "../assests/Stuffing-Process2.png";
import stuffing2 from "../assests/Stuffing-Process3.png";

import warehouse from "../assests/Warehousing1.png";
import warehouse1 from "../assests/Warehousing2.png";
import warehouse2 from "../assests/Warehousing3.png";




export const services = [
  {
    id: 'road-freight',
    icon: Truck,
    title: 'Road Freight',
    // shortDesc: 'Full truckload, LTL, and last-mile delivery solutions.',
    shortDesc: ' FTL, LTL, and last-mile delivery solutions.',
    fullDesc: 'Our fleet of modern trucks and experienced drivers are equipped to handle all your road freight needs, from full truckload to less-than-truckload (LTL) and last-mile deliveries. We prioritize safety, reliability, and on-time performance to keep your goods moving seamlessly.',
    mainImage : road1,
    additionalImages : [road1, road2],
    features: [
      'Full truckload services',
      'Less-than-truckload (LTL)',
      'Last-mile delivery',
      'Temperature-controlled transport',
      'Real-time tracking',
      'Express delivery options'
    ]
  },
  {
    id: 'ocean-freight',
    icon: Ship,
    title: 'Ocean Freight',
    shortDesc: 'Container shipping and bulk cargo solutions.',
    fullDesc: 'Whether it\'s containerized shipping or bulk cargo, we have the capabilities to manage your international ocean freight with precision. Our partnerships with leading ocean carriers and in-depth understanding of global trade regulations allow us to navigate the complexities of overseas logistics.',
    mainImage : ocean,
    additionalImages : [ocean1, ocean2],
    features: [
      'FCL (Full Container Load)',
      'LCL (Less than Container Load)',
      'Break bulk cargo',
      'Project cargo',
      'Global port coverage',
      'Customs clearance assistance'
    ]
  },
  {
    id: 'air-freight',
    icon: Plane,
    title: 'Air Freight',
    shortDesc: 'Express and specialized air transport.',
    fullDesc: 'For time-sensitive shipments or specialized air transport requirements, we offer reliable and expedited air freight solutions. Our air cargo expertise ensures your high-value or delicate goods reach their destinations safely and efficiently.',
    mainImage : air,
    additionalImages : [air1, air2],
    features: [
      'Express air freight',
      'Charter services',
      'Door-to-door delivery',
      'Dangerous goods handling',
      'Temperature-sensitive cargo',
    ]
  },
  {
    id: 'rail-freight',
    icon: Train,
    title: 'Rail Freight',
    shortDesc: 'Cost-effective and eco-friendly rail solutions.',
    fullDesc: 'Leveraging our extensive rail network, we provide cost-effective and environmentally-friendly rail freight services for your bulk and containerized shipments. Our intermodal capabilities allow us to seamlessly integrate rail transport into your supply chain.',
    mainImage : rail,
    additionalImages : [rail1, rail2],
    features: [
      'Intermodal services',
      'Bulk cargo transport',
      'Container transport',
      'Cross-border solutions',
      'Track and trace',
      'Eco-friendly shipping'
    ]
  },
  {
    id: 'customs-clearance',
    icon: FileCheck,
    title: 'Customs Clearance',
    shortDesc: 'Expert customs documentation and processing.',
    fullDesc: 'Navigating the intricacies of customs regulations can be a daunting task. That\'s why we offer comprehensive customs clearance services, ensuring your international shipments are processed smoothly and in compliance with all applicable laws and regulations.',
    mainImage : custom,
    additionalImages : [custom1, custom2],
    features: [
      'Import/Export documentation',
      'Customs compliance',
      'Duty calculation',
      'Classification services',
      'Risk management',
      'Regulatory consulting'
    ]
  },
  {
    id: 'stuffing-process',
    icon: Package,
    title: 'Stuffing Process',
    shortDesc: 'Professional container loading services.',
    fullDesc: 'For your containerized freight, we provide specialized stuffing services to optimize load planning and secure your cargo for safe transport. Our experienced team adheres to best practices to ensure your shipments are delivered in perfect condition.',
    mainImage : stuffing,
    additionalImages : [stuffing1, stuffing2],
    features: [
      'Container loading',
      'Load optimization',
      'Cargo securing',
      'Quality inspection',
      'Documentation',
      'Container sealing'
    ]
  },
  {
    id: 'warehousing',
    icon: Building,
    title: 'Warehousing',
    shortDesc: 'Secure storage and inventory management.',
    fullDesc: 'Complement your transportation needs with our state-of-the-art warehousing facilities. From short-term storage to value-added services like cross-docking and inventory management, we offer flexible and secure solutions to support your supply chain operations.',
    mainImage : warehouse,
    additionalImages : [warehouse1, warehouse2],
    features: [
      'Secure storage',
      'Inventory management',
      'Cross-docking',
      'Pick and pack',
      'Quality control',
      'Distribution services'
    ]
  }
];
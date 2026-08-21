export interface ProductItem {
  id: string;
  name: string;
  category: 'shutters' | 'railings' | 'gates' | 'stairs' | 'canopies' | 'custom';
  series: string;
  tagline: string;
  description: string;
  highlightFeatures: string[];
  alloy: string;
  finishStandard: string;
  windRating: string;
  fbcCompliance: string;
  leadTime: string;
  imageUrl: string;
  cadSvgType: 'shutter-bahama' | 'shutter-colonial' | 'railing-cable' | 'railing-glass' | 'gate-cantilever' | 'stairs-mono' | 'canopy-louver';
  specifications: {
    label: string;
    value: string;
  }[];
  applicationZones: string[];
}

export interface ProjectPortfolio {
  id: string;
  title: string;
  category: 'Residential Luxury' | 'Commercial & Hospitality' | 'HVHZ Shutter Systems' | 'Architectural Railings' | 'Structural Steel';
  location: string;
  county: string;
  completionYear: number;
  windRating: string;
  linearFootageOrUnits: string;
  materialsUsed: string[];
  architectOrGC?: string;
  description: string;
  engineeringChallenges: string;
  photoUrl: string;
  cadBlueprintUrl?: string;
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface FloridaCountyWindData {
  county: string;
  region: string;
  baseWindSpeedMph: number;
  isHVHZ: boolean; // High Velocity Hurricane Zone (Miami-Dade & Broward)
  coastalExposureSpeedMph: number;
  standardBuildingCode: string;
  saltCorrosionIndex: 'High' | 'Very High' | 'Severe Marine';
  recommendedAlloy: string;
}

export interface FinishOption {
  id: string;
  name: string;
  category: 'woodgrain' | 'powdercoat' | 'metallic' | 'anodized';
  previewColor: string;
  secondaryColor?: string;
  texturePattern?: string;
  description: string;
  warranty: string;
  marineGrade: boolean;
}

export interface QuoteRequestForm {
  projectType: 'residential' | 'commercial' | 'general_contractor' | 'architect';
  productCategory: string;
  estimatedQuantity: string;
  dimensions: {
    widthInches: number;
    heightInches: number;
    lengthFeet?: number;
  };
  county: string;
  exposureCategory: 'B' | 'C' | 'D (Waterfront/Coastal)';
  finishType: string;
  requiresPEStamp: boolean;
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  address?: string;
  projectNotes: string;
  timeframe: string;
}

import { ProductItem, ProjectPortfolio, FloridaCountyWindData, FinishOption } from '../types';

export const COMPANY_INFO = {
  name: 'J.A. Custom Fabricators, Inc.',
  shortName: 'JACF',
  tagline: 'Custom Architectural Metalworks & Coastal Engineering',
  foundedYear: 1997,
  address: '1230 Wingfield St.',
  city: 'Lake Worth',
  state: 'FL',
  zip: '33460',
  phone: '(561) 585-8854',
  phoneAlt: '(561) 615-4680',
  email: 'contactus@jacf.us',
  serviceArea: 'Palm Beach, Broward, Miami-Dade, Martin, Collier & All Florida Counties',
  dba: 'South Florida Aluminum',
  facilitySizeSqFt: '24,000 sq.ft.',
  leadEngineer: 'Angela Fajardo, P.E.',
  certifications: [
    'Florida Building Code (FBC) 8th Edition Compliant',
    'Miami-Dade County NOA Approved Extrusions',
    'HVHZ (High Velocity Hurricane Zone) Certified',
    'AWS D1.1 / D1.2 Structural Welding Certified',
    'AAMA 2605 Architectural Coating Compliant',
    'ASTM E1886 / E1996 Large Missile Impact Tested',
  ],
  stats: [
    { label: 'Years of Excellence', value: '28+' },
    { label: 'Florida Installations', value: '5,200+' },
    { label: 'Hurricane Wind Rating', value: '195 MPH' },
    { label: 'Lake Worth Facility', value: '24k SF' },
  ],
  partners: [
    {
      name: 'Mouw Associates, Inc.',
      type: 'General Contractors & Construction Managers',
      description: 'Preeminent South Florida commercial and high-end residential builder.',
      badgeColor: '#0284c7',
      initials: 'MA',
    },
    {
      name: 'Sisca Construction',
      type: 'Commercial & Institutional Builders',
      description: 'Leading general contractor for monumental architectural developments.',
      badgeColor: '#15803d',
      initials: 'SC',
    },
    {
      name: 'CJM Construction',
      type: 'Luxury Custom Builders',
      description: 'Specialists in premier Palm Beach custom estates and waterfront properties.',
      badgeColor: '#0369a1',
      initials: 'CJM',
    },
    {
      name: 'Wietsma Lippolis',
      type: 'Architecture & Design-Build',
      description: 'Award-winning architectural design and ultra-luxury custom home construction.',
      badgeColor: '#0f766e',
      initials: 'WL',
    },
  ]
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'el-dorado-shutters',
    name: 'El Dorado™ Aluminum Woodgrain Shutters',
    category: 'shutters',
    series: 'Signature Architectural Series',
    tagline: 'Authentic timber warmth with unyielding aerospace aluminum strength.',
    description: 'Our patented El Dorado™ aluminum shutters feature high-definition sublimation powder coating replicating authentic hardwoods like Teak, Walnut, and White Oak. Engineered for Florida HVHZ hurricane conditions up to 190 MPH, they are permanently immune to dry rot, termite damage, and coastal saltwater degradation.',
    highlightFeatures: [
      'Zero rot, warp, splinter, or termite susceptibility',
      'Patented heat-transfer woodgrain sublimation technology',
      'Articulating & fixed louver options with continuous 316 stainless hinges',
      'HVHZ Miami-Dade NOA wind-borne debris certified',
      'AAMA 2605 10-Year coastal colorfast marine warranty'
    ],
    alloy: '6061-T6 & 6063-T6 Structural Architectural Aluminum',
    finishStandard: 'AAMA 2605 Fluoropolymer / Hyper-Realistic Woodgrain Sublimation',
    windRating: '190 MPH (HVHZ Wind-Borne Debris Zone)',
    fbcCompliance: 'FBC 8th Edition & Miami-Dade Protocols TAS 201/202/203',
    leadTime: '3-4 Weeks Fabrication',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    cadSvgType: 'shutter-bahama',
    specifications: [
      { label: 'Frame Wall Thickness', value: '0.125" Heavy-Gauge Extrusion' },
      { label: 'Louver Profile', value: '2.0" & 2.75" Aerodynamic Louver Blades' },
      { label: 'Hinge Hardware', value: '316 Marine Grade Stainless Steel' },
      { label: 'Max Panel Span', value: 'Up to 96" Height x 48" Width per leaf' },
      { label: 'Salt Spray Resistance', value: '3,000+ Hours ASTM B117 Tested' },
      { label: 'Mounting Systems', value: 'Top-Hinged Bahama, Bi-Fold Colonial, Fixed Louvered' }
    ],
    applicationZones: ['Coastal Waterfronts', 'Historic Preservation', 'Luxury Estates', 'High-Rise Balconies']
  },
  {
    id: 'architectural-railings',
    name: 'Engineered Railings & Impact Balustrades',
    category: 'railings',
    series: 'Horizon Glass & Marine Cable Series',
    tagline: 'Sleek visual openness engineered for severe coastal gust resistance.',
    description: 'Precision welded aluminum horizontal slat railings, seamless floating structural impact glass balustrades, and marine 316L cable systems. Fabricated with tight micro-tolerances (±0.015") to enhance modern architectural lines while satisfying FBC concentrated load and coastal uplift requirements.',
    highlightFeatures: [
      'Concealed mechanical fasteners & fully continuous robotic TIG welds',
      '1/2" to 3/4" laminated tempered impact glass with SentryGlas® interlayer',
      'Grade 316L electropolished nautical cable fittings',
      'Integrated hidden LED perimeter channel conduits',
      'Multi-story commercial & residential structural load certified'
    ],
    alloy: '6061-T6 Aluminum / Marine 316L Stainless Steel',
    finishStandard: 'Architectural Powder Coat (Matte Obsidian, Satin Bronze, Custom RAL)',
    windRating: '185 MPH Design Pressure (+85 / -110 PSF)',
    fbcCompliance: 'FBC Building & Residential Section 1607.8',
    leadTime: '2-3 Weeks Fabrication',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    cadSvgType: 'railing-glass',
    specifications: [
      { label: 'Post Profiles', value: '2" x 2", 2" x 3", and Custom Billet Post' },
      { label: 'Base Shoe System', value: 'Continuous Extruded T6 Aluminum Clad' },
      { label: 'Infill Varieties', value: '1/2" Impact Glass, 1/8" Marine Cable, Horizontal Louver' },
      { label: 'Top Rail Options', value: 'Minimalist Cap, Low-Profile Rectangle, Handrail ADA Compliant' },
      { label: 'Fasteners', value: 'Corrosion-Resistant 316 Stainless Anchors' }
    ],
    applicationZones: ['Intracoastal Terraces', 'Infinity Pools', 'Multi-Floor Mezzanines', 'Commercial Rooftops']
  },
  {
    id: 'precision-gates',
    name: 'Estate Gates & Security Slat Fencing',
    category: 'gates',
    series: 'Fortress Pro Architectural Series',
    tagline: 'Statement entryways with zero-sag welded geometry and whisper-quiet automation.',
    description: 'Engineered cantilever sliding, bi-parting swing, and pedestrian access gates crafted from heavy structural box extrusions. Built specifically to conquer Florida moisture and coastal salinity with internal reinforcement trusses and seamless concealed pivot hardware.',
    highlightFeatures: [
      'Internal trussing system preventing sagging up to 32ft clear openings',
      'Commercial-grade linear slide operators and smart intercom integration',
      'Laser-cut CNC privacy pattern panels and Louvered woodgrain infills',
      'Dual-layer zinc-rich epoxy primer under AAMA 2605 topcoats',
      'Heavy-duty sealed stainless ball bearing hinges'
    ],
    alloy: '6061-T6 High-Yield Structural Aluminum Extrusion',
    finishStandard: 'Dual-Coat Marine Architectural Powder Coating',
    windRating: '175 MPH (Open slat aerodynamics)',
    fbcCompliance: 'UL 325 & ASTM F2200 Safety Compliance',
    leadTime: '3-4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    cadSvgType: 'gate-cantilever',
    specifications: [
      { label: 'Main Frame Extrusions', value: '2" x 4" & 3" x 6" Heavy Wall Aluminum' },
      { label: 'Hinge Rating', value: 'Greaseable 316 Stainless rated to 3,000 lbs' },
      { label: 'Clear Span Capacity', value: 'Up to 36 Feet Single Leaf / 70 Feet Dual' },
      { label: 'Automation Prep', value: 'Direct Mount Brackets for LiftMaster & FAAC Systems' }
    ],
    applicationZones: ['Gated Palm Beach Estates', 'Commercial Freight Entry', 'Marina Security', 'Pedestrian Portals']
  },
  {
    id: 'canopies-trellises',
    name: 'Louvered Pergolas & Architectural Canopies',
    category: 'canopies',
    series: 'Solarium Architectural Shade',
    tagline: 'Engineered sun control and rain deflection with architectural presence.',
    description: 'Heavy-duty cantilevered entry canopies, motorized louvered pergolas, and decorative aluminum brise-soleil facades engineered to resist hurricane suction forces while delivering modern architectural shading.',
    highlightFeatures: [
      'Aerodynamic air-foil louver profiles minimizing wind uplift forces',
      'Integrated internal water drainage guttering and concealed downspouts',
      'Structural outrigger bracket connections with PE stamped anchor details',
      'Thermal expansion joints engineered for extreme South Florida UV exposure',
      'Optional woodgrain sublimation matched to El Dorado™ Shutters'
    ],
    alloy: '6005A-T61 & 6061-T6 High-Strength Aluminum',
    finishStandard: 'AAMA 2605 10-Year Coastal Fluoropolymer',
    windRating: '180 MPH Sustained Cat 5 Uplift Load',
    fbcCompliance: 'FBC ASCE 7-22 Wind Load Approved',
    leadTime: '3-4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    cadSvgType: 'canopy-louver',
    specifications: [
      { label: 'Blade Span', value: 'Up to 24 Feet unsupported extrusions' },
      { label: 'Tie-Back Rods', value: 'Solid 1.25" Marine Stainless Turnbuckle Rods' },
      { label: 'Fascia Depth', value: '6", 8", 10", and 12" Continuous Channel' },
      { label: 'Drainage Integration', value: 'Concealed internal scuppers and collector heads' }
    ],
    applicationZones: ['Storefront Entrances', 'Luxury Patio Living', 'Boutique Hotel Pool Decks', 'Clubhouse Entries']
  },
  {
    id: 'structural-stairs',
    name: 'Custom Floating & Spiral Staircases',
    category: 'stairs',
    series: 'Stratos Structural Metalworks',
    tagline: 'Center-spine, cantilevered, and ornamental spiral stairs engineered to perfection.',
    description: 'Precision CNC-machined mono-stringers, dual structural channels, spiral stairs, and exterior egress stair towers. Calculated by our licensed P.E. to eliminate vibrational deflection while creating breathtaking architectural centerpieces.',
    highlightFeatures: [
      'Finite Element Analysis (FEA) vibration & deflection modeling',
      'Integrated glass/cable balustrades with concealed wiring channels',
      'Custom tread mounting saddles for white oak, marble, or grip-plate aluminum',
      'Modular pre-assembled sections for rapid jobsite erection',
      'Signed & sealed structural engineering calculations included'
    ],
    alloy: 'ASTM A36 Carbon Steel / 6061-T6 Marine Grade Structural Aluminum',
    finishStandard: 'High-Durability Textured Powder Coat or Hot-Dip Galvanized + Powder',
    windRating: 'FBC Interior / Exterior Coastal Compliant',
    fbcCompliance: 'FBC Chapter 10 & IBC Section 1011',
    leadTime: '4-6 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    cadSvgType: 'stairs-mono',
    specifications: [
      { label: 'Spine Profile', value: '8" x 8" or 10" x 6" Heavy-Wall Structural Tube' },
      { label: 'Tread Saddle Plate', value: '1/2" CNC Laser-Cut Steel / Aluminum' },
      { label: 'Anchor System', value: 'High-Strength Chemical Hilti Epoxies' },
      { label: 'Deflection Target', value: 'L/360 or greater for premium solid footing' }
    ],
    applicationZones: ['Modern Luxury Atriums', 'Commercial Headquarters', 'Waterfront Penthouses', 'Exterior Spiral Access']
  }
];

export const PORTFOLIO_PROJECTS: ProjectPortfolio[] = [
  {
    id: 'palm-beach-oceanfront-estate',
    title: 'The Breakers Ocean Estate — Custom Louvered Facade & Balustrades',
    category: 'Residential Luxury',
    location: 'North Ocean Blvd, Palm Beach, FL',
    county: 'Palm Beach County',
    completionYear: 2025,
    windRating: '185 MPH Exposure D (Direct Oceanfront)',
    linearFootageOrUnits: '420 Linear Feet Railing + 38 El Dorado™ Shutters',
    materialsUsed: ['6061-T6 Marine Aluminum', 'El Dorado™ Teak Woodgrain', 'SentryGlas® Impact Glass'],
    architectOrGC: 'Palm Beach Luxury Builders & Architecture',
    description: 'Full exterior architectural metal package for an oceanfront estate directly on the Atlantic. Included custom motorized Bahama shutters matching the historic West Indies vernacular, structural glass balustrades along three terrace tiers, and an automated vehicular gate.',
    engineeringChallenges: 'Direct salt-spray Atlantic frontage required AAMA 2605 multi-stage pre-treatment and PE stamped calculations for 185 MPH coastal wind vortexes at the roofline.',
    photoUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: [
      { label: 'Design Pressure', value: '+75 / -95 PSF' },
      { label: 'Salt Test', value: '4,000 Hrs Pass' },
      { label: 'Turnaround', value: '4.5 Weeks' }
    ]
  },
  {
    id: 'jupiter-inlet-colony',
    title: 'Inlet Point Modern — Floating Mono-Stringer & Cantilever Canopy',
    category: 'Structural Steel',
    location: 'Jupiter Inlet Colony, FL',
    county: 'Palm Beach County',
    completionYear: 2024,
    windRating: '180 MPH Certified',
    linearFootageOrUnits: '3-Story Center-Spine Staircase + 24ft Entry Canopy',
    materialsUsed: ['ASTM A36 Structural Tube', '316L Stainless Tension Rods', '6061-T6 Cladding'],
    architectOrGC: 'Coastal Contemporary Architects',
    description: 'Designed, engineered, and fabricated an interior 3-story floating mono-stringer staircase with concealed tread fastenings, paired with a matching exterior cantilevered aircraft-grade aluminum entry canopy.',
    engineeringChallenges: 'Eliminated floor resonance vibration through FEA-optimized internal dampening stiffeners without increasing the sleek 8x6 tube silhouette.',
    photoUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: [
      { label: 'Deflection Target', value: 'L/480 Achieved' },
      { label: 'Weld Quality', value: '100% UT Inspected' },
      { label: 'Tolerances', value: '±0.010 in' }
    ]
  },
  {
    id: 'las-olas-waterfront-marina',
    title: 'Fort Lauderdale Yacht Basin — Cantilever Security & Perimeter Railings',
    category: 'Commercial & Hospitality',
    location: 'Las Olas Isles, Fort Lauderdale, FL',
    county: 'Broward County (HVHZ)',
    completionYear: 2024,
    windRating: '180 MPH HVHZ Miami-Dade/Broward',
    linearFootageOrUnits: '850 Linear Feet Perimeter + 4 Automated Access Gates',
    materialsUsed: ['5052-H32 Perforated Panels', '6061-T6 Extrusions', 'Matte Obsidian AAMA 2605'],
    architectOrGC: 'Marina Waterfront Development Group',
    description: 'Engineered commercial-grade perimeter security railings with integrated custom laser-cut nautical wave perforated panels, plus cantilever sliding vehicle gates with high-cycle hydraulic operators.',
    engineeringChallenges: 'Broward County HVHZ certification required full physical test report submissions and wind tunnel drag coefficient calculations for the perforated infill.',
    photoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: [
      { label: 'Opening Span', value: '32 Ft Clear' },
      { label: 'Corrosion Shield', value: 'Triple-Tier Anodic' },
      { label: 'Cycle Rating', value: '250,000 Ops' }
    ]
  },
  {
    id: 'star-island-sanctuary',
    title: 'Miami Beach Luxury Villa — El Dorado™ Shutters & Slat Gates',
    category: 'HVHZ Shutter Systems',
    location: 'Star Island, Miami Beach, FL',
    county: 'Miami-Dade County (HVHZ)',
    completionYear: 2025,
    windRating: '190 MPH Category 5 HVHZ',
    linearFootageOrUnits: '54 Bahama & Colonial Shutters + 18ft Bifold Gate',
    materialsUsed: ['El Dorado™ Dark Walnut Sublimation', 'Billet Aluminum Fasteners'],
    architectOrGC: 'Star Island Architectural Design',
    description: 'Comprehensive hurricane protection package for an ultra-luxury modern villa featuring El Dorado™ woodgrain shutters that passed strict Miami-Dade TAS 201 missile impact standards while maintaining the organic beauty of walnut wood.',
    engineeringChallenges: 'Passed large missile cannon test (9-lb 2x4 projectile fired at 50 ft/sec) without requiring visible storm bars.',
    photoUrl: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    metrics: [
      { label: 'Missile Impact', value: 'TAS 201 Level D' },
      { label: 'Woodgrain Depth', value: 'Photorealistic 3D' },
      { label: 'Warranty', value: '15-Year Marine' }
    ]
  },
  {
    id: 'boca-raton-residence',
    title: 'Royal Palm Yacht Club — Floating Glass Balustrades & Privacy Screens',
    category: 'Architectural Railings',
    location: 'Royal Palm Yacht & CC, Boca Raton, FL',
    county: 'Palm Beach County',
    completionYear: 2024,
    windRating: '175 MPH Exposure C',
    linearFootageOrUnits: '310 Linear Feet Glass Railing + 6 Louvered Screens',
    materialsUsed: ['SentryGlas® Plus 13/16" Laminated', 'Anodized Billet Base Shoes'],
    architectOrGC: 'Custom Waterfront Homes Inc.',
    description: 'Clean, minimalist base-shoe structural glass railing for 2nd and 3rd level balconies with zero vertical posts, offering unobstructed views of the Royal Palm waterway.',
    engineeringChallenges: 'Engineered hidden drainage channels inside the base shoe extrusion to prevent standing water accumulation on tile deck surfaces.',
    photoUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    metrics: [
      { label: 'Glass Clarity', value: 'Starphire Low-Iron' },
      { label: 'Load Test', value: '350 lbs Point Load' },
      { label: 'Drainage Flow', value: '12 GPM Internal' }
    ]
  },
  {
    id: 'naples-port-royal',
    title: 'Gulf Shore Haven — Motorized Louver Pergola & Stainless Trellis',
    category: 'Commercial & Hospitality',
    location: 'Port Royal, Naples, FL',
    county: 'Collier County',
    completionYear: 2024,
    windRating: '170 MPH Gulf Coast Exposure',
    linearFootageOrUnits: '36ft x 20ft Louvered Structure + Architectural Louvers',
    materialsUsed: ['6005A-T61 Structural Extrusions', 'Somfy Motorized Actuators'],
    architectOrGC: 'Naples Coastal Estates',
    description: 'Custom motorized louvered aluminum pergola that closes automatically when rain sensors trigger, providing seamless dry outdoor entertaining and opening to allow full sunlight.',
    engineeringChallenges: 'Designed structural footing connections capable of resisting 14,000 lbs of dynamic hurricane uplift tension without requiring visible cross-bracing.',
    photoUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    metrics: [
      { label: 'Uplift Capacity', value: '14,000 lbs' },
      { label: 'Automation', value: 'Rain & Wind Smart' },
      { label: 'Span', value: '20 Ft Clear' }
    ]
  }
];

export const FLORIDA_WIND_DATA: FloridaCountyWindData[] = [
  {
    county: 'Miami-Dade',
    region: 'South Florida (HVHZ)',
    baseWindSpeedMph: 185,
    isHVHZ: true,
    coastalExposureSpeedMph: 195,
    standardBuildingCode: 'FBC 8th Edition HVHZ (TAS 201, 202, 203)',
    saltCorrosionIndex: 'Severe Marine',
    recommendedAlloy: '6061-T6 + AAMA 2605 / Marine 316L'
  },
  {
    county: 'Broward',
    region: 'South Florida (HVHZ)',
    baseWindSpeedMph: 180,
    isHVHZ: true,
    coastalExposureSpeedMph: 190,
    standardBuildingCode: 'FBC 8th Edition HVHZ (TAS 201, 202, 203)',
    saltCorrosionIndex: 'Severe Marine',
    recommendedAlloy: '6061-T6 + AAMA 2605 / Marine 316L'
  },
  {
    county: 'Palm Beach (JACF HQ)',
    region: 'South Florida Coastal',
    baseWindSpeedMph: 170,
    isHVHZ: false,
    coastalExposureSpeedMph: 185,
    standardBuildingCode: 'FBC 8th Edition Wind-Borne Debris Region',
    saltCorrosionIndex: 'Very High',
    recommendedAlloy: '6061-T6 / 6063-T6 + AAMA 2604/2605'
  },
  {
    county: 'Monroe (Florida Keys)',
    region: 'Florida Keys',
    baseWindSpeedMph: 185,
    isHVHZ: false,
    coastalExposureSpeedMph: 200,
    standardBuildingCode: 'FBC 8th Edition Extreme Coastal Wind Zone',
    saltCorrosionIndex: 'Severe Marine',
    recommendedAlloy: 'Marine 6061-T6 & Electropolished 316L'
  },
  {
    county: 'Collier (Naples / Marco Island)',
    region: 'Southwest Gulf Coast',
    baseWindSpeedMph: 165,
    isHVHZ: false,
    coastalExposureSpeedMph: 180,
    standardBuildingCode: 'FBC 8th Edition Wind-Borne Debris Region',
    saltCorrosionIndex: 'High',
    recommendedAlloy: '6061-T6 / 5052-H32'
  },
  {
    county: 'Martin (Stuart / Hobe Sound)',
    region: 'Treasure Coast',
    baseWindSpeedMph: 165,
    isHVHZ: false,
    coastalExposureSpeedMph: 175,
    standardBuildingCode: 'FBC 8th Edition Wind-Borne Debris Region',
    saltCorrosionIndex: 'Very High',
    recommendedAlloy: '6061-T6 + AAMA 2605'
  },
  {
    county: 'St. Lucie (Port St. Lucie / Fort Pierce)',
    region: 'Treasure Coast',
    baseWindSpeedMph: 160,
    isHVHZ: false,
    coastalExposureSpeedMph: 170,
    standardBuildingCode: 'FBC 8th Edition Wind-Borne Debris Region',
    saltCorrosionIndex: 'High',
    recommendedAlloy: '6061-T6 / 6063-T6'
  },
  {
    county: 'Lee (Fort Myers / Cape Coral / Sanibel)',
    region: 'Southwest Gulf Coast',
    baseWindSpeedMph: 165,
    isHVHZ: false,
    coastalExposureSpeedMph: 180,
    standardBuildingCode: 'FBC 8th Edition Wind-Borne Debris Region',
    saltCorrosionIndex: 'Very High',
    recommendedAlloy: '6061-T6 + AAMA 2605'
  },
  {
    county: 'Hillsborough & Pinellas (Tampa Bay)',
    region: 'Central West Coast',
    baseWindSpeedMph: 150,
    isHVHZ: false,
    coastalExposureSpeedMph: 165,
    standardBuildingCode: 'FBC 8th Edition Wind-Borne Debris Region',
    saltCorrosionIndex: 'High',
    recommendedAlloy: '6061-T6 / 6063-T6'
  }
];

export const FINISH_OPTIONS: FinishOption[] = [
  {
    id: 'woodgrain-teak',
    name: 'El Dorado™ Royal Teak Sublimation',
    category: 'woodgrain',
    previewColor: '#9C5B28',
    secondaryColor: '#6B3A14',
    description: 'Golden honey undertones with deep natural timber grain lines. Replicates aged nautical teak without maintenance.',
    warranty: '10-Year Coastal Salt & UV Non-Chalking Warranty',
    marineGrade: true
  },
  {
    id: 'woodgrain-walnut',
    name: 'El Dorado™ American Walnut Sublimation',
    category: 'woodgrain',
    previewColor: '#4A2F1B',
    secondaryColor: '#2B1A0E',
    description: 'Deep espresso tones with rich architectural grain movement. Ideal for contemporary luxury facades.',
    warranty: '10-Year Coastal Salt & UV Non-Chalking Warranty',
    marineGrade: true
  },
  {
    id: 'woodgrain-white-oak',
    name: 'El Dorado™ Coastal White Oak Sublimation',
    category: 'woodgrain',
    previewColor: '#C4A47C',
    secondaryColor: '#8C6C48',
    description: 'Light, sun-bleached driftwood aesthetic designed for modern coastal and Scandinavian-inspired architecture.',
    warranty: '10-Year Coastal Salt & UV Non-Chalking Warranty',
    marineGrade: true
  },
  {
    id: 'powder-matte-black',
    name: 'Matte Obsidian Architectural Black (AAMA 2605)',
    category: 'powdercoat',
    previewColor: '#1E293B',
    description: 'Ultra-low sheen deep black fluoropolymer powder. Resists fingerprinting, UV chalking, and salt crusting.',
    warranty: '15-Year Performance Warranty',
    marineGrade: true
  },
  {
    id: 'powder-coastal-bronze',
    name: 'Monumental Coastal Bronze (AAMA 2605)',
    category: 'powdercoat',
    previewColor: '#382D26',
    secondaryColor: '#524338',
    description: 'Subtle metallic luster that pairs seamlessly with natural stone and high-end mahogany accents.',
    warranty: '15-Year Performance Warranty',
    marineGrade: true
  },
  {
    id: 'powder-architectural-white',
    name: 'Polar High-Reflective White (AAMA 2605)',
    category: 'powdercoat',
    previewColor: '#F8FAFC',
    description: 'High solar-reflectance clean white finish engineered to reduce heat absorption in intense Florida sun.',
    warranty: '15-Year Performance Warranty',
    marineGrade: true
  },
  {
    id: 'metallic-titanium-silver',
    name: 'Aero Titanium Silver Sparkle',
    category: 'metallic',
    previewColor: '#94A3B8',
    secondaryColor: '#64748B',
    description: 'Fine mica metallic flakes suspended in clear fluoropolymer for an aircraft-grade engineered luster.',
    warranty: '10-Year Performance Warranty',
    marineGrade: true
  }
];

export const WORKSHOP_PROCESS_STEPS = [
  {
    stepNumber: '01',
    title: '3D Laser Metrology & Structural Site Survey',
    duration: 'Phase 1',
    description: 'Our engineering field teams capture site dimensions using Leica 3D LiDAR scanners with sub-millimeter accuracy, eliminating field fitment errors on irregular concrete or historic masonry.',
    detailPoints: ['Sub-millimeter LiDAR point cloud scanning', 'Structural anchor slab pull-testing', 'Elevation & plumb coordinate mapping']
  },
  {
    stepNumber: '02',
    title: 'SolidWorks CAD & PE Signed Engineering',
    duration: 'Phase 2',
    description: 'Angela Fajardo, P.E. and our design engineering team model full 3D assemblies, perform Finite Element Analysis (FEA) for hurricane wind loads, and deliver stamped calculations for municipal Florida permitting.',
    detailPoints: ['Florida P.E. Signed & Sealed Calculation Sheets', 'FEA stress concentration & deflection modeling', 'ASCE 7-22 wind uplift validation']
  },
  {
    stepNumber: '03',
    title: 'CNC Fiber Laser & Precision Forming',
    duration: 'Phase 3',
    description: 'In our 24,000 sq.ft. Lake Worth facility, 6kW high-speed fiber lasers and CNC synchronized multi-axis press brakes cut and form aluminum and steel alloys with tight ±0.015" tolerances.',
    detailPoints: ['6kW CNC Fiber Laser cutting up to 3/4" plate', '220-ton 8-axis CNC press brake bending', 'Precision miter cutting with high-flow coolant']
  },
  {
    stepNumber: '04',
    title: 'AWS Certified TIG/MIG Welding & Assembly',
    duration: 'Phase 4',
    description: 'Certified fabricators execute continuous, penetration-verified TIG welds on all architectural seams. All joints are hand-dressed and grain-matched for invisible transitions.',
    detailPoints: ['AWS D1.2 (Structural Aluminum) Certified', 'Full-penetration seamless miter welds', 'Non-destructive dye penetrant weld inspection']
  },
  {
    stepNumber: '05',
    title: '5-Stage Chemical Pretreatment & AAMA 2605 Coating',
    duration: 'Phase 5',
    description: 'Extrusions undergo an acid etch, zirconium conversion bath, and electrostatic powder application cured in automated batch ovens to guarantee 3,000+ hour salt-spray durability.',
    detailPoints: ['5-stage zirconium pre-treatment wash', 'El Dorado™ heat sublimation woodgrain line', 'AAMA 2605 high-spec fluoropolymer cure']
  }
];

export const TESTIMONIALS = [
  {
    quote: "JACF's El Dorado shutters solved what other fabricators couldn't: the historic architectural review board wanted authentic wood appearance, but the owner needed Category 5 hurricane protection. JACF delivered both with immaculate precision.",
    author: "Richard V. Henderson, AIA",
    role: "Principal Architect",
    firm: "Henderson & Partners Architecture, Palm Beach",
    project: "North Ocean Blvd Estate"
  },
  {
    quote: "As a luxury custom builder in South Florida for 22 years, I rely on JACF for every custom stair, glass balustrade, and gate. Their in-house engineering and PE stamps save us weeks in municipal permitting.",
    author: "Markus D. Castiglione",
    role: "VP of Construction",
    firm: "Castiglione Custom Waterfront Homes, Boca Raton",
    project: "Royal Palm Yacht Club Residences"
  },
  {
    quote: "When Hurricane Ian and Idalia tested coastal structures, our JACF-fabricated louvered canopies and gates showed zero deformation. Their engineering tolerances and weld quality are in a league of their own.",
    author: "Elena Rostova",
    role: "Director of Facilities",
    firm: "Atlantic Coast Marina Group, Fort Lauderdale",
    project: "Las Olas Yacht Basin"
  }
];

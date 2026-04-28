// Generator: produces all city, service, and utility pages from the new template.
// Usage: node gen-template.js

const fs = require('fs');
const path = require('path');

const PHONE = '(858) 988-0325';
const TEL = '+18589880325';
const DOMAIN = 'https://www.autopaintsd.com';

const CITIES = [
  { slug: 'mira-mesa', name: 'Mira Mesa', zip: '92126', lat: 32.9116, lng: -117.1484,
    region: 'North City', nearby: ['Scripps Ranch', 'Rancho Peñasquitos', 'Sorrento Valley'],
    chips: ['Mira Mesa Boulevard', 'Sorrento Valley adjacent', 'Scripps Ranch', 'Rancho Peñasquitos', 'Carmel Mountain Ranch', 'Sabre Springs'],
    blurb: 'On-site cosmetic auto body and paint repair in Mira Mesa and North City. We come to your home, driveway, or office parking — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Office park lot corners, HOA garage pillars, and tight tech-campus parking produce constant side scrapes — we fix them on-site where the car sits.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded Mira Mesa office and shopping center lots are a daily occurrence. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Paint transfer and swirl damage from freeway commutes on I-15 and SR-56 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumper covers. We repair or replace on-site at your home or office in Mira Mesa.' }
    ],
    nearbyLinks: ['rancho-bernardo','poway','carlsbad','pacific-beach']
  },
  { slug: 'carlsbad', name: 'Carlsbad', zip: '92008', lat: 33.1581, lng: -117.3506,
    region: 'North County Coastal', nearby: ['Oceanside', 'Vista', 'Encinitas'],
    chips: ['Carlsbad Village', 'La Costa', 'Aviara', 'Bressi Ranch', 'Carlsbad-by-the-Sea', 'Calavera Hills'],
    blurb: 'On-site cosmetic auto body and paint repair in Carlsbad and North County coastal communities. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Coastal HOA garages, downtown Village parking, and beach lot pillars produce constant side scrapes — we fix them on-site where the car sits.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in busy Plaza Camino Real and shopping center lots are a daily occurrence. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Salt-air oxidation and freeway commute swirls on I-5 and the 78 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot incidents around Carlsbad Village crack plastic bumper covers. We repair or replace on-site at your home or office.' }
    ],
    nearbyLinks: ['oceanside','vista','encinitas-na','escondido']
  },
  { slug: 'chula-vista', name: 'Chula Vista', zip: '91910', lat: 32.6401, lng: -117.0842,
    region: 'South Bay', nearby: ['National City', 'Bonita', 'Eastlake'],
    chips: ['Eastlake', 'Otay Ranch', 'Bonita', 'Rolling Hills Ranch', 'Sunbow', 'Rancho Del Rey'],
    blurb: 'On-site cosmetic auto body and paint repair in Chula Vista and the South Bay. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Otay Ranch Town Center lot corners, apartment garage pillars, and tight street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded Chula Vista shopping centers and Plaza Bonita lots happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Sun damage, paint transfer, and swirl marks from I-805 and the 125 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumper covers. We repair or replace on-site at your home in Chula Vista.' }
    ],
    nearbyLinks: ['national-city','coronado','downtown-san-diego']
  },
  { slug: 'coronado', name: 'Coronado', zip: '92118', lat: 32.6859, lng: -117.1831,
    region: 'San Diego Bay', nearby: ['Downtown San Diego', 'Imperial Beach', 'Point Loma'],
    chips: ['Coronado Village', 'Coronado Cays', 'Coronado Shores', 'North Island'],
    blurb: 'On-site cosmetic auto body and paint repair on Coronado island. We come to your driveway, garage, or hotel parking — bumper repair, scratch removal, and paint correction without crossing the bridge.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Tight Coronado Village street parking and hotel valet brushes produce constant side scrapes — we fix them on-site, no bridge trip required.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings around Orange Avenue and Hotel del Coronado parking are common. PDR returns panels to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Salt-air oxidation, fade, and swirl damage on luxury vehicles corrected with precision color-match — booth-quality finish at your home.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Curbed bumpers from narrow streets and low-speed parking incidents repaired on-site at your Coronado address.' }
    ],
    nearbyLinks: ['downtown-san-diego','national-city','ocean-beach']
  },
  { slug: 'downtown-san-diego', name: 'Downtown San Diego', zip: '92101', lat: 32.7157, lng: -117.1611,
    region: 'Central San Diego', nearby: ['Little Italy', 'East Village', 'Marina District', 'Gaslamp'],
    chips: ['Gaslamp Quarter', 'East Village', 'Little Italy', 'Marina', 'Cortez Hill', 'Columbia'],
    blurb: 'On-site cosmetic auto body and paint repair in Downtown San Diego. We come to high-rise garages, condo buildings, and office parking — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Tight downtown garage pillars, valet brushes, and Gaslamp street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in condo and high-rise garages happen weekly. PDR gets panels back to factory condition the same day, no shop visit.' },
      { icon:'🎨', t:'Paint Repair', d:'City grime, sun damage, and freeway swirl from I-5 and the 163 corrected with precision color-match — at your downtown address.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking garage incidents and ride-share contact crack plastic bumpers. We repair or replace on-site at your condo or office.' }
    ],
    nearbyLinks: ['coronado','mission-valley','ocean-beach','national-city']
  },
  { slug: 'el-cajon', name: 'El Cajon', zip: '92020', lat: 32.7948, lng: -116.9625,
    region: 'East County', nearby: ['Santee', 'La Mesa', 'Lakeside'],
    chips: ['Downtown El Cajon', 'Fletcher Hills', 'Bostonia', 'Rancho San Diego', 'Granite Hills'],
    blurb: 'On-site cosmetic auto body and paint repair in El Cajon and East County. We come to your home, driveway, or workplace — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Parkway Plaza lot corners, narrow apartment garages, and tight street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in shopping center lots and crowded residential streets happen daily. PDR returns panels to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Sun fade, oxidation, and freeway swirl from the 8 and the 67 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumper covers. We repair or replace on-site at your El Cajon address.' }
    ],
    nearbyLinks: ['santee','escondido','poway']
  },
  { slug: 'escondido', name: 'Escondido', zip: '92025', lat: 33.1192, lng: -117.0864,
    region: 'North County Inland', nearby: ['San Marcos', 'Vista', 'Rancho Bernardo'],
    chips: ['Downtown Escondido', 'Hidden Meadows', 'Felicita', 'Eureka Springs', 'Old Escondido'],
    blurb: 'On-site cosmetic auto body and paint repair in Escondido and North County inland. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Westfield North County lot corners, HOA garage pillars, and tight street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded Escondido shopping centers and apartment lots happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Inland sun fade and freeway swirl from I-15 and the 78 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumper covers. We repair or replace on-site at your Escondido address.' }
    ],
    nearbyLinks: ['rancho-bernardo','vista','poway']
  },
  { slug: 'la-jolla', name: 'La Jolla', zip: '92037', lat: 32.8328, lng: -117.2713,
    region: 'Coastal North City', nearby: ['Pacific Beach', 'University City', 'Bird Rock'],
    chips: ['La Jolla Village', 'Bird Rock', 'La Jolla Shores', 'Mount Soledad', 'UTC', 'Windansea'],
    blurb: 'On-site cosmetic auto body and paint repair in La Jolla and the coastal North City. We come to your driveway, garage, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Tight Village street parking, HOA garage pillars, and UTC lot corners produce constant side scrapes — we fix them on-site where the car sits.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded La Jolla Village and UTC parking happen daily. PDR returns panels to factory condition the same day on luxury vehicles.' },
      { icon:'🎨', t:'Paint Repair', d:'Salt-air oxidation, sun fade, and swirl damage corrected with precision color-match — booth-quality finish at your home or office.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Curbed bumpers from narrow Village streets and low-speed garage incidents repaired on-site at your La Jolla address.' }
    ],
    nearbyLinks: ['pacific-beach','mira-mesa','ocean-beach']
  },
  { slug: 'mission-valley', name: 'Mission Valley', zip: '92108', lat: 32.7717, lng: -117.1500,
    region: 'Central San Diego', nearby: ['Hillcrest', 'Old Town', 'Linda Vista'],
    chips: ['Fashion Valley', 'Hazard Center', 'Friars Mission', 'Civita', 'Mission Center'],
    blurb: 'On-site cosmetic auto body and paint repair in Mission Valley and central San Diego. We come to your apartment, condo, or office parking — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Fashion Valley and Westfield Mission Valley lot corners, condo garage pillars, and tight tower parking produce constant side scrapes.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in mall and stadium-area lots are a daily occurrence. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Sun damage and freeway swirl from I-8, I-15, and the 163 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumper covers. We repair or replace on-site at your Mission Valley address.' }
    ],
    nearbyLinks: ['downtown-san-diego','la-jolla','mira-mesa']
  },
  { slug: 'national-city', name: 'National City', zip: '91950', lat: 32.6781, lng: -117.0992,
    region: 'South Bay', nearby: ['Chula Vista', 'Downtown San Diego', 'Bonita'],
    chips: ['Mile of Cars', 'Lincoln Acres', 'Olivewood', 'Granger Hills', 'Old Town National City'],
    blurb: 'On-site cosmetic auto body and paint repair in National City and the South Bay. We come to your home, driveway, or workplace — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Plaza Bonita lot corners, apartment garage pillars, and tight street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in shopping center lots and Mile of Cars area happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Sun fade and freeway swirl from I-5 and the 805 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumpers. We repair or replace on-site at your National City address.' }
    ],
    nearbyLinks: ['chula-vista','downtown-san-diego','coronado']
  },
  { slug: 'ocean-beach', name: 'Ocean Beach', zip: '92107', lat: 32.7494, lng: -117.2497,
    region: 'Coastal San Diego', nearby: ['Point Loma', 'Pacific Beach', 'Mission Beach'],
    chips: ['OB Pier', 'Newport Avenue', 'Sunset Cliffs', 'Point Loma Heights'],
    blurb: 'On-site cosmetic auto body and paint repair in Ocean Beach and Point Loma. We come to your apartment, driveway, or street parking — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Tight Newport Avenue street parking, beach lot pillars, and apartment garages produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings near OB Pier and crowded beach parking happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Salt-air oxidation, sun fade, and swirl damage corrected with precision color-match. Booth-quality finish at your beach address.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Curbed bumpers from narrow OB streets and low-speed parking incidents repaired on-site at your Ocean Beach address.' }
    ],
    nearbyLinks: ['pacific-beach','la-jolla','downtown-san-diego']
  },
  { slug: 'oceanside', name: 'Oceanside', zip: '92054', lat: 33.1959, lng: -117.3795,
    region: 'North County Coastal', nearby: ['Carlsbad', 'Vista', 'Camp Pendleton'],
    chips: ['Downtown Oceanside', 'South Oceanside', 'Fire Mountain', 'Rancho Del Oro', 'Mira Costa'],
    blurb: 'On-site cosmetic auto body and paint repair in Oceanside and North County coastal. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Beach lot corners, downtown street parking, and apartment garages produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in shopping center lots and crowded beach parking happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Salt-air oxidation, sun fade, and freeway swirl from I-5 and the 76 corrected with precision color-match. No booth required.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumpers. We repair or replace on-site at your Oceanside address.' }
    ],
    nearbyLinks: ['carlsbad','vista','escondido']
  },
  { slug: 'pacific-beach', name: 'Pacific Beach', zip: '92109', lat: 32.7977, lng: -117.2359,
    region: 'Coastal San Diego', nearby: ['La Jolla', 'Mission Beach', 'Bay Park'],
    chips: ['North PB', 'South PB', 'Mission Bay', 'Crown Point', 'Bay Park'],
    blurb: 'On-site cosmetic auto body and paint repair in Pacific Beach and Mission Bay area. We come to your apartment, driveway, or street parking — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Tight Garnet Avenue street parking, apartment garages, and beach lots produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded PB beach parking and shopping center lots happen daily. PDR returns panels to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Salt-air oxidation, sun fade, and swirl damage corrected with precision color-match — booth-quality finish at your beach address.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Curbed bumpers from narrow PB alleys and low-speed parking incidents repaired on-site at your Pacific Beach address.' }
    ],
    nearbyLinks: ['la-jolla','ocean-beach','mira-mesa']
  },
  { slug: 'poway', name: 'Poway', zip: '92064', lat: 32.9628, lng: -117.0359,
    region: 'North Inland', nearby: ['Rancho Bernardo', 'Scripps Ranch', 'Rancho Peñasquitos'],
    chips: ['Old Poway', 'Green Valley', 'Garden Road', 'Twin Peaks', 'Rancho Arbolitos'],
    blurb: 'On-site cosmetic auto body and paint repair in Poway and North Inland communities. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Poway Road shopping center lots, HOA garage pillars, and tight residential street parking produce constant side scrapes — fixed on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded shopping centers and school pickup lines happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Inland sun fade, oxidation, and freeway swirl from the 67 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumpers. We repair or replace on-site at your Poway address.' }
    ],
    nearbyLinks: ['rancho-bernardo','mira-mesa','escondido','santee']
  },
  { slug: 'rancho-bernardo', name: 'Rancho Bernardo', zip: '92127', lat: 33.0270, lng: -117.0850,
    region: 'North Inland', nearby: ['Poway', '4S Ranch', 'Escondido'],
    chips: ['Westwood', 'Bernardo Heights', 'Oaks North', 'Rancho Bernardo Inn area', '4S Ranch'],
    blurb: 'On-site cosmetic auto body and paint repair in Rancho Bernardo and 4S Ranch. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Bernardo Plaza lot corners, HOA garage pillars, and tight tech-campus parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded shopping centers and 55+ community lots happen daily. PDR returns panels to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Inland sun fade and freeway swirl from I-15 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumpers. We repair or replace on-site at your Rancho Bernardo address.' }
    ],
    nearbyLinks: ['poway','escondido','mira-mesa']
  },
  { slug: 'santee', name: 'Santee', zip: '92071', lat: 32.8384, lng: -116.9739,
    region: 'East County', nearby: ['El Cajon', 'Lakeside', 'Mission Trails'],
    chips: ['Downtown Santee', 'Carlton Hills', 'Sky Ranch', 'Riverview', 'Magnolia'],
    blurb: 'On-site cosmetic auto body and paint repair in Santee and East County. We come to your home, driveway, or workplace — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Santee Town Center lot corners, narrow apartment garages, and tight street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in shopping center lots and school pickup lines happen daily. PDR gets panels back to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Inland sun fade and freeway swirl from the 52 and 67 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumpers. We repair or replace on-site at your Santee address.' }
    ],
    nearbyLinks: ['el-cajon','poway','mira-mesa']
  },
  { slug: 'vista', name: 'Vista', zip: '92084', lat: 33.2000, lng: -117.2425,
    region: 'North County Inland', nearby: ['Oceanside', 'Carlsbad', 'San Marcos'],
    chips: ['Downtown Vista', 'Shadowridge', 'Vista Village', 'Buena Vista', 'East Vista'],
    blurb: 'On-site cosmetic auto body and paint repair in Vista and North County inland. We come to your home, driveway, or office — bumper repair, scratch removal, and paint correction without the shop wait.',
    drivers: [
      { icon:'🚧', t:'Car Scratch Repair', d:'Vista Village lot corners, apartment garage pillars, and tight street parking produce constant side scrapes — we fix them on-site.' },
      { icon:'🔨', t:'Dent Repair', d:'Door dings in crowded shopping centers and school pickup lines happen daily. PDR returns panels to factory condition the same day.' },
      { icon:'🎨', t:'Paint Repair', d:'Inland sun fade and freeway swirl from the 78 corrected with precision color-match. No booth, no shop visit needed.' },
      { icon:'💥', t:'Bumper Crack Repair', d:'Low-speed parking lot and drive-through incidents crack plastic bumpers. We repair or replace on-site at your Vista address.' }
    ],
    nearbyLinks: ['oceanside','carlsbad','escondido']
  }
];

const ALL_CITIES_BY_SLUG = Object.fromEntries(CITIES.map(c => [c.slug, c]));

const NAV_CITIES = [
  'carlsbad','chula-vista','coronado','downtown-san-diego','el-cajon','escondido',
  'la-jolla','mira-mesa','mission-valley','national-city','ocean-beach','oceanside',
  'pacific-beach','poway','rancho-bernardo','santee','vista'
];

const SERVICES = [
  { slug: 'bumper-repair', name: 'Bumper Repair', short: 'Bumper Repair', icon: '🚗',
    titleSeo: 'Mobile Bumper Repair San Diego – Same-Day Service | Auto Paint Fix',
    descSeo: 'Mobile bumper repair across San Diego County. Cracks, dents, scuffs and impact damage repaired on-site with color-matched paint. Text a photo for a fast quote.',
    blurb: 'Cracked, scuffed, or dented bumper? We repair and refinish bumpers on-site across San Diego County — color-matched factory paint, no drop-off, no waiting room.',
    priceRange: '$350–$600', timeRange: '2–3 hrs',
    cards: [
      { icon:'🔧', t:'Surface Scuff Repair', d:'Light scuffs and paint transfer from parking lot or curb contact wet-sanded, blended, and resprayed.', p:'From $200' },
      { icon:'🎨', t:'Bumper Respray', d:'Full panel color-match and respray for deeper scratches, faded paint, or minor cracks that don\'t affect structure.', p:'From $405' },
      { icon:'💥', t:'Crack Repair', d:'Plastic bumper covers cracked from low-speed impacts plastic-welded, sanded smooth, and refinished.', p:'From $300' },
      { icon:'🚗', t:'Bumper Replace + Paint', d:'New bumper sourced, installed, and painted to exact factory color spec. We handle the full job.', p:'From $605' }
    ],
    faq: [
      { q:'How much does bumper repair cost?', a:'Most bumper repairs range from $200 to $600 depending on damage severity. Text a photo for an exact quote.' },
      { q:'How long does mobile bumper repair take?', a:'Most bumper repairs take 2–3 hours on-site. Same-day completion is standard.' },
      { q:'Do you repair cracked bumpers?', a:'Yes — plastic bumpers are plastic-welded, reinforced, sanded smooth, and refinished with color-matched paint.' },
      { q:'Will the paint match exactly?', a:'Yes. We pull your factory paint code and mix to spec, then blend into adjacent panels for a seamless finish.' }
    ]
  },
  { slug: 'auto-body-paint', name: 'Auto Body Paint', short: 'Auto Body Paint', icon: '🎨',
    titleSeo: 'Mobile Auto Body Paint San Diego – Color-Matched Refinish | Auto Paint Fix',
    descSeo: 'Mobile auto body paint repair across San Diego. Single panel to full vehicle refinishing with factory color-match. Text a photo for a fast quote.',
    blurb: 'Single-panel repaints to full vehicle refinishing — showroom-quality paint work delivered at your location. Precision color-matching means no visible difference between repainted and original panels.',
    priceRange: '$400–$1,620+', timeRange: '3–5 hrs',
    cards: [
      { icon:'🎨', t:'Single Panel Repaint', d:'One damaged panel stripped, prepped, and resprayed with factory-matched base and clear coat.', p:'From $550' },
      { icon:'✨', t:'Partial Repaint', d:'Targeted repair across multiple panels — blended seamlessly into adjacent paintwork.', p:'From $625' },
      { icon:'🚗', t:'Full Vehicle Repaint', d:'Complete refinishing including panel prep, color-match, base coat, and high-gloss clear coat.', p:'From $1,620' },
      { icon:'🛠️', t:'Touch-Up + Blend', d:'Small spot repairs blended into surrounding paintwork — invisible repair on factory finishes.', p:'From $200' }
    ],
    faq: [
      { q:'How much does auto body paint repair cost?', a:'Single panel repaints start at $550. Partial repaints start at $625. Full vehicle refinishing starts at $1,620.' },
      { q:'How long does paint work take?', a:'Single panel jobs take 3–5 hours on-site. Full repaints span multiple sessions and we coordinate timing with you.' },
      { q:'Will it match my factory color?', a:'Yes — we pull your paint code, mix to spec, and blend into adjacent panels for a seamless finish.' },
      { q:'Can you paint metallic and pearl colors?', a:'Yes. Metallic, pearl, and tri-coat finishes are matched and applied to factory standard.' }
    ]
  },
  { slug: 'paintless-dent-repair', name: 'Paintless Dent Repair', short: 'PDR', icon: '⚙️',
    titleSeo: 'Paintless Dent Repair (PDR) San Diego – Mobile Same-Day | Auto Paint Fix',
    descSeo: 'Mobile paintless dent repair in San Diego County. Door dings, hail damage, and minor dents removed without repainting. Text a photo for a fast quote.',
    blurb: 'PDR pushes dents back to original shape from behind the panel — no filler, no paint, no body shop. The factory finish stays intact.',
    priceRange: '$200–$500', timeRange: '1.5–3 hrs',
    cards: [
      { icon:'🚪', t:'Door Ding', d:'Single dings from parking lot contact massaged out from behind the panel. Factory paint preserved.', p:'From $150' },
      { icon:'🌧️', t:'Hail Damage', d:'Multi-dent hail repair across hood, roof, and trunk panels. Most jobs completed in one session.', p:'Quote on photos' },
      { icon:'🛒', t:'Shopping Cart Dent', d:'Side panel dents from cart contact lifted back to original shape — no filler, no paint.', p:'From $200' },
      { icon:'🔧', t:'Body Line Crease', d:'Dents along character lines and body creases worked from behind. Eligible panels only.', p:'From $300' }
    ],
    faq: [
      { q:'When is PDR an option?', a:'PDR works on dents where the paint is intact, the panel is accessible from behind, and the metal hasn\'t been stretched.' },
      { q:'How much does PDR cost?', a:'Most door dings cost $150–$300. Larger dents and creases run $300–$500. Hail repair is quoted from photos.' },
      { q:'How long does it take?', a:'Most single-dent jobs take 1.5–3 hours on-site. Multi-dent repair is scoped during the photo quote.' },
      { q:'Is PDR cheaper than traditional repair?', a:'Yes — typically 40–60% less than conventional dent repair, because there\'s no filler, no paint, and no shop overhead.' }
    ]
  },
  { slug: 'scratch-removal', name: 'Scratch Removal', short: 'Scratch Removal', icon: '✦',
    titleSeo: 'Mobile Scratch Removal San Diego – Same-Day Service | Auto Paint Fix',
    descSeo: 'Mobile car scratch removal across San Diego. Surface to deep scratch repair on doors, bumpers, and panels with color-matched paint. Text a photo for a quote.',
    blurb: 'Key marks, road debris scratches, parking lot contact — repaired on-site with a seamless blend. Most jobs completed in 1.5–3 hours.',
    priceRange: '$200–$450', timeRange: '1.5–3 hrs',
    cards: [
      { icon:'✦', t:'Surface Scratch', d:'Clear-coat-only scratches polished and sealed. The factory paint stays untouched underneath.', p:'From $150' },
      { icon:'🔑', t:'Key Mark Repair', d:'Deeper scratches that go through paint sanded, color-matched, and resprayed for a seamless finish.', p:'From $250' },
      { icon:'🌳', t:'Road Debris', d:'Multi-scratch repair from highway debris or branches color-matched and refinished panel-by-panel.', p:'From $300' },
      { icon:'🅿️', t:'Parking Lot Scrape', d:'Side panel scrapes from contact incidents wet-sanded, blended, and resprayed.', p:'From $200' }
    ],
    faq: [
      { q:'How much does scratch removal cost?', a:'Surface scratches start at $150. Deeper scratches that need paint range from $250 to $450 depending on length and panel.' },
      { q:'Will the repair be invisible?', a:'On most repairs, yes. We color-match factory paint and blend into adjacent panels so the repair disappears.' },
      { q:'Can you fix key scratches?', a:'Yes — key scratches are sanded, primed if needed, color-matched, and refinished with clear coat.' },
      { q:'How long does it take?', a:'Most scratch repairs take 1.5–3 hours on-site. Same-day completion is standard.' }
    ]
  },
  { slug: 'scuff-scrape-repair', name: 'Scuff & Scrape Repair', short: 'Scuff Repair', icon: '🛡️',
    titleSeo: 'Bumper Scuff & Scrape Repair San Diego – Mobile | Auto Paint Fix',
    descSeo: 'Mobile bumper scuff and scrape repair in San Diego. Light scuffs, paint transfer, and curb scrapes removed and refinished on-site. Text a photo for a quote.',
    blurb: 'Light scuffs, paint transfer, and curb scrapes — sanded, blended, and color-matched on-site. Most jobs done in 1–2 hours.',
    priceRange: '$150–$300', timeRange: '1–2 hrs',
    cards: [
      { icon:'🛒', t:'Paint Transfer', d:'Other-vehicle paint left on your panel removed, then your factory color blended back in.', p:'From $150' },
      { icon:'🅿️', t:'Curb Scrape', d:'Bumper corners and lower panels scraped from curb contact resurfaced and refinished.', p:'From $200' },
      { icon:'🚪', t:'Door Edge Scuff', d:'Door edge contact damage sanded, primed where needed, and resprayed to match.', p:'From $175' },
      { icon:'🛡️', t:'Light Bumper Scuff', d:'Surface-level bumper scuffs blended and refinished with color-matched paint.', p:'From $150' }
    ],
    faq: [
      { q:'How much does scuff repair cost?', a:'Most scuff and scrape jobs run $150–$300. Text a photo for an exact quote.' },
      { q:'How long does it take?', a:'Most scuff and scrape repair takes 1–2 hours on-site.' },
      { q:'Is this the same as scratch removal?', a:'Scuffs are surface-level — paint transfer or light contact damage. Scratches go deeper into the paint and may need primer and respray.' },
      { q:'Will paint match exactly?', a:'Yes. We pull your factory paint code and blend into adjacent panels.' }
    ]
  }
];

// ---- helpers ----
const navHTML = (currentSlug) => `
<!-- NAV -->
<nav>
  <a class="nav-brand" href="index.html">
    <img src="logo.png" alt="Auto Paint Fix" style="width:280px;height:38px;object-fit:cover;object-position:center;display:block;">
  </a>
  <div class="nav-links">
    <a href="services.html"${currentSlug==='services'?' class="active"':''}>Services</a>
    <a href="pricing.html"${currentSlug==='pricing'?' class="active"':''}>Pricing</a>
    <div class="nav-dropdown"><a href="service-area.html"${currentSlug==='service-area'?' class="active"':''}>Service Area</a><div class="nav-dropdown-menu">${NAV_CITIES.map(slug => `<a href="${slug}.html">${ALL_CITIES_BY_SLUG[slug].name}</a>`).join('')}<a href="service-area.html" class="dd-all">View All Service Areas →</a></div></div>
    <a href="tel:${TEL}" class="nav-phone">${PHONE}</a>
    <a href="contact.html" class="nav-cta">Get a Quote</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu">
  <a href="services.html">Services</a>
  <a href="pricing.html">Pricing</a>
  <a href="service-area.html">Service Area</a>
  ${NAV_CITIES.map(slug => `<a href="${slug}.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ ${ALL_CITIES_BY_SLUG[slug].name}</a>`).join('\n  ')}
  <a href="tel:${TEL}" class="mm-phone">${PHONE}</a>
  <a href="contact.html" class="mm-cta">Get a Quote</a>
</div>
`;

const topbarHTML = (tagline) => `
<!-- TOPBAR -->
<div class="topbar">
  <div class="topbar-track">
    <span class="topbar-item"><span class="topbar-sep"></span> ${tagline} <span class="topbar-sep"></span> <a href="tel:${TEL}">${PHONE}</a> <span class="topbar-sep"></span> No Shop Drop-Off <span class="topbar-sep"></span> Text a Photo for a Quote <span class="topbar-sep"></span> Same-Day When Available <span class="topbar-sep"></span></span>
    <span class="topbar-item"><span class="topbar-sep"></span> ${tagline} <span class="topbar-sep"></span> <a href="tel:${TEL}">${PHONE}</a> <span class="topbar-sep"></span> No Shop Drop-Off <span class="topbar-sep"></span> Text a Photo for a Quote <span class="topbar-sep"></span> Same-Day When Available <span class="topbar-sep"></span></span>
  </div>
</div>
`;

const footerHTML = () => `
<!-- FOOTER -->
<div class="footer-rainbow-stripe"></div>
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand-row">
        <img src="logo.png" alt="Auto Paint Fix" style="width:240px;height:auto;display:block;">
      </div>
      <p class="footer-tagline">Mobile cosmetic auto body and paint repair in San Diego County. We come to your location — no shop required.</p>
      <a href="tel:${TEL}" class="footer-phone">${PHONE}</a>
    </div>
    <div>
      <div class="footer-col-title">Services</div>
      <ul class="footer-links">
        ${SERVICES.map(s => `<li><a href="${s.slug}.html">${s.name}</a></li>`).join('\n        ')}
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Service Area</div>
      <ul class="footer-links">
        <li><a href="service-area.html">San Diego County</a></li>
        ${NAV_CITIES.map(slug => `<li><a href="${slug}.html">${ALL_CITIES_BY_SLUG[slug].name}</a></li>`).join('\n        ')}
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Quick Links</div>
      <ul class="footer-links">
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Request a Quote</a></li>
        <li><a href="services.html">All Services</a></li>
        <li><a href="service-area.html">Service Areas</a></li>
        <li><a href="sms:${TEL}">Text a Photo</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Auto Paint Fix. All rights reserved.</span>
    <span>Mobile Auto Body &amp; Paint Repair — San Diego County, CA</span>
  </div>
</footer>
`;

const stickyAndScripts = (tagline) => `
<!-- STICKY CTA -->
<div class="sticky-cta" id="stickyCta">
  <div>
    <div class="sticky-brand">AUTO PAINT FIX</div>
    <div class="sticky-tagline">${tagline}</div>
  </div>
  <div class="sticky-actions">
    <a href="tel:${TEL}" class="sticky-phone">${PHONE}</a>
    <a href="contact.html" class="sticky-btn">Get a Quote</a>
    <button class="sticky-close" id="stickyClose" aria-label="Close">&times;</button>
  </div>
</div>

<!-- WHATSAPP BUTTON -->
<a href="https://wa.me/18589880325?text=Hi! I need a quote for auto paint repair." class="wa-btn" target="_blank" rel="noopener" aria-label="WhatsApp">&#x1F4AC;</a>

<!-- SCRIPTS -->
<script>
document.getElementById('hamburger').addEventListener('click',function(){document.getElementById('mobileMenu').classList.toggle('open')});
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target)}})},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
window.addEventListener('scroll',()=>{const s=document.getElementById('stickyCta');if(s)s.classList.toggle('vis',window.scrollY>400)});
document.getElementById('stickyClose').addEventListener('click',()=>document.getElementById('stickyCta').classList.remove('vis'));
</script>
</body>
</html>
`;

const baseStyles = `<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0C0C0C;--bg2:#161616;--bg3:#1F1F1F;--mid:#888888;--line:rgba(255,255,255,0.09);--red:#D92626;--red2:#B81E1E;--rainbow:linear-gradient(90deg,#FF0000 0%,#FF6600 14%,#FFD600 28%,#00CC44 42%,#0088FF 57%,#6600FF 71%,#CC00FF 85%,#FF0066 100%)}
html{scroll-behavior:smooth}
body{background:var(--bg);color:#fff;font-family:'DM Sans',sans-serif;font-size:16px;line-height:1.6;overflow-x:hidden}
.topbar{background:var(--red);height:38px;overflow:hidden;display:flex;align-items:center;position:relative}
.topbar::before,.topbar::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none}
.topbar::before{left:0;background:linear-gradient(90deg,var(--red),transparent)}
.topbar::after{right:0;background:linear-gradient(270deg,var(--red),transparent)}
.topbar-track{display:flex;white-space:nowrap;animation:topbarScroll 32s linear infinite}
.topbar-track:hover{animation-play-state:paused}
.topbar-item{display:inline-flex;align-items:center;gap:10px;font-family:'Anton',sans-serif;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#fff;padding:0 28px;flex-shrink:0}
.topbar-item a{color:#fff;text-decoration:none}
.topbar-sep{display:inline-block;width:5px;height:5px;background:rgba(255,255,255,0.5);border-radius:50%;flex-shrink:0}
@keyframes topbarScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
nav{background:rgba(12,12,12,0.98);border-bottom:1px solid rgba(255,255,255,0.07);display:flex;justify-content:space-between;align-items:center;padding:14px 48px;position:sticky;top:0;z-index:300;backdrop-filter:blur(12px)}
.nav-brand{display:flex;align-items:center;text-decoration:none}
.nav-links{display:flex;gap:28px;align-items:center}
.nav-links a{text-decoration:none;color:var(--mid);font-size:14px;font-weight:500;transition:color 0.2s}
.nav-links a:hover,.nav-links a.active{color:#fff}
.nav-phone{color:#fff!important;font-weight:800!important;background:var(--red)!important;padding:8px 16px!important;border-radius:6px!important;font-size:14px!important}
.nav-cta{background:transparent!important;border:1px solid rgba(255,255,255,0.25)!important;color:#fff!important;padding:8px 18px!important;border-radius:6px!important;font-weight:600!important;font-size:14px!important}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.hamburger span{display:block;width:24px;height:2px;background:#fff;border-radius:2px}
.mobile-menu{display:none;background:var(--bg2);border-top:1px solid rgba(255,255,255,0.07);padding:20px 24px;flex-direction:column;gap:4px}
.mobile-menu.open{display:flex}
.mobile-menu a{text-decoration:none;color:#E0E0E0;font-size:16px;font-weight:500;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07)}
.mobile-menu a:last-child{border-bottom:none}
.mm-phone{font-weight:700!important;color:var(--red)!important;font-size:18px!important}
.mm-cta{background:var(--red)!important;color:#fff!important;text-align:center;border-radius:6px;font-weight:700!important;padding:14px!important;border-bottom:none!important;margin-top:8px}
.section-tag{font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:var(--red);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.section-tag::before{content:'';width:20px;height:2px;background:var(--red);flex-shrink:0}
h2.section-h{font-family:'Anton',sans-serif;font-size:clamp(40px,5vw,72px);letter-spacing:0.01em;line-height:0.92;margin-bottom:18px}
.reveal{opacity:0;transform:translateY(22px);transition:opacity 0.7s ease,transform 0.7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
.btn-primary{display:inline-flex;align-items:center;gap:9px;background:var(--red);color:#fff;padding:15px 32px;border-radius:6px;font-size:15px;font-weight:700;text-decoration:none;transition:background 0.2s}
.btn-primary:hover{background:var(--red2)}
.btn-sms{display:inline-flex;align-items:center;gap:8px;background:transparent;border:1px solid rgba(255,255,255,0.25);color:#fff;padding:15px 28px;border-radius:6px;font-size:15px;font-weight:700;text-decoration:none;transition:border-color 0.2s,background 0.2s}
.btn-sms:hover{border-color:#fff;background:rgba(255,255,255,0.05)}
.page-hero{padding:80px 48px 72px;background:var(--bg);border-bottom:1px solid rgba(255,255,255,0.07);position:relative;overflow:hidden}
.page-hero::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 50% 80% at 80% 50%,rgba(217,38,38,0.08) 0%,transparent 60%)}
.breadcrumb{font-size:13px;color:var(--mid);margin-bottom:20px}
.breadcrumb a{color:var(--mid);text-decoration:none}
.breadcrumb a:hover{color:#fff}
.page-hero h1{font-family:'Anton',sans-serif;font-size:clamp(52px,6.5vw,100px);line-height:0.9;letter-spacing:0.01em;color:#fff;margin-bottom:20px}
.page-hero-sub{font-size:17px;color:rgba(255,255,255,0.55);max-width:600px;line-height:1.75;margin-bottom:32px}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin-top:48px}
.svc-card{background:var(--bg2);padding:44px 36px;position:relative;overflow:hidden;transition:background 0.3s}
.svc-card::after{content:'';position:absolute;bottom:0;left:0;width:0;height:3px;background:var(--red);transition:width 0.4s ease}
.svc-card:hover{background:var(--bg3)}
.svc-card:hover::after{width:100%}
.svc-icon{font-size:36px;margin-bottom:20px}
.svc-title{font-family:'Anton',sans-serif;font-size:24px;letter-spacing:0.02em;color:#fff;margin-bottom:12px;line-height:1.1}
.svc-desc{font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:16px}
.svc-meta{display:flex;gap:10px;flex-wrap:wrap}
.svc-badge{font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--red);background:rgba(217,38,38,0.1);border:1px solid rgba(217,38,38,0.2);padding:5px 10px;border-radius:4px}
.svc-num{position:absolute;bottom:12px;right:20px;font-family:'Anton',sans-serif;font-size:72px;color:rgba(255,255,255,0.025);line-height:1;pointer-events:none}
.local-section{padding:88px 48px;background:var(--bg)}
.local-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;margin-top:48px}
.local-intro{font-size:16px;color:rgba(255,255,255,0.65);line-height:1.8;margin-bottom:28px}
.neighborhood-list{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:32px}
.neighborhood-list li{font-size:15px;color:rgba(255,255,255,0.75);display:flex;gap:10px;align-items:center;line-height:1.5;padding:10px 16px;background:var(--bg2);border-radius:6px;border:1px solid rgba(255,255,255,0.06)}
.neighborhood-list li::before{content:'📍';font-size:13px;flex-shrink:0}
.map-wrap{border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);height:420px}
.map-wrap iframe{width:100%;height:100%;border:0;display:block}
.why-section{padding:88px 48px;background:var(--bg2)}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--line);border:1px solid var(--line);margin-top:48px}
.why-block{background:var(--bg2);padding:44px 36px;transition:background 0.3s}
.why-block:hover{background:var(--bg3)}
.why-icon{font-size:40px;margin-bottom:20px}
.why-title{font-family:'Anton',sans-serif;font-size:22px;letter-spacing:0.02em;color:#fff;margin-bottom:14px;line-height:1.1}
.why-desc{font-size:14px;color:var(--mid);line-height:1.8}
.cta-section{padding:72px 48px;background:var(--red);text-align:center}
.cta-h{font-family:'Anton',sans-serif;font-size:clamp(36px,5vw,64px);line-height:0.92;color:#fff;margin-bottom:16px}
.cta-p{font-size:16px;color:rgba(255,255,255,0.85);max-width:500px;margin:0 auto 32px;line-height:1.7}
.cta-btns{display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
.cta-btn-dark{background:#111;color:#fff;padding:15px 32px;border-radius:6px;font-size:15px;font-weight:700;text-decoration:none}
.cta-btn-outline{background:transparent;border:2px solid rgba(255,255,255,0.5);color:#fff;padding:15px 32px;border-radius:6px;font-size:15px;font-weight:700;text-decoration:none}
.footer-rainbow-stripe{height:4px;background:var(--rainbow)}
footer{background:#080808;padding:64px 48px 32px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}
.footer-brand-row{display:flex;align-items:center;gap:12px;margin-bottom:18px}
.footer-tagline{font-size:13px;color:rgba(255,255,255,0.4);line-height:1.75;max-width:280px;margin-bottom:18px}
.footer-phone{font-family:'Anton',sans-serif;font-size:24px;color:var(--red);text-decoration:none;display:block}
.footer-col-title{font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:16px}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:10px}
.footer-links a{text-decoration:none;color:rgba(255,255,255,0.45);font-size:14px;transition:color 0.2s}
.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:12px;color:rgba(255,255,255,0.25)}
.wa-btn{position:fixed;bottom:80px;right:24px;z-index:500;background:#25D366;border-radius:50%;width:54px;height:54px;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 4px 20px rgba(0,0,0,0.3);font-size:26px}
.sticky-cta{position:fixed;bottom:0;left:0;right:0;z-index:400;background:#0C0C0C;border-top:2px solid var(--red);padding:12px 48px;display:flex;justify-content:space-between;align-items:center;gap:16px;transform:translateY(100%);transition:transform 0.4s ease}
.sticky-cta.vis{transform:translateY(0)}
.sticky-brand{font-family:'Anton',sans-serif;font-size:18px;color:#fff}
.sticky-tagline{font-size:12px;color:var(--mid)}
.sticky-actions{display:flex;align-items:center;gap:12px}
.sticky-phone{font-family:'Anton',sans-serif;font-size:20px;color:var(--red);text-decoration:none}
.sticky-btn{background:var(--red);color:#fff;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none}
.sticky-close{background:none;border:none;color:var(--mid);font-size:20px;cursor:pointer;padding:4px}
.nav-dropdown{position:relative}
.nav-dropdown>a{display:flex;align-items:center;gap:5px}
.nav-dropdown>a::after{content:'▾';font-size:10px;opacity:0.6}
.nav-dropdown-menu{position:absolute;top:100%;padding-top:14px;left:50%;background:rgba(18,18,18,0.98);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:10px;min-width:360px;display:grid;grid-template-columns:1fr 1fr;gap:2px;box-shadow:0 12px 40px rgba(0,0,0,0.5);z-index:999;opacity:0;pointer-events:none;transition:opacity 0.18s ease,transform 0.18s ease;transform:translateX(-50%) translateY(-6px);backdrop-filter:blur(16px)}
.nav-dropdown:hover .nav-dropdown-menu,.nav-dropdown-menu:hover{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.nav-dropdown-menu a{text-decoration:none;color:rgba(255,255,255,0.7);font-size:13px;font-weight:500;padding:8px 12px;border-radius:6px;transition:background 0.15s,color 0.15s;white-space:nowrap}
.nav-dropdown-menu a:hover{background:rgba(255,255,255,0.08);color:#fff}
.nav-dropdown-menu .dd-all{grid-column:1/-1;border-top:1px solid rgba(255,255,255,0.08);margin-top:4px;padding-top:10px;color:var(--red)!important;font-weight:700!important;text-align:center}
.nav-dropdown-menu .dd-all:hover{background:rgba(220,38,38,0.1)!important;color:var(--red)!important}
@media(max-width:960px){.svc-grid{grid-template-columns:1fr 1fr}.core-repairs-grid{grid-template-columns:1fr 1fr!important}.local-grid{grid-template-columns:1fr}.why-grid{grid-template-columns:1fr 1fr}}
@media(max-width:768px){nav{padding:12px 20px}.nav-links{display:none}.hamburger{display:flex}.page-hero,.local-section,.why-section,.cta-section{padding-left:24px;padding-right:24px}.svc-grid{grid-template-columns:1fr}.why-grid{grid-template-columns:1fr}footer{padding:48px 24px 24px}.footer-grid{grid-template-columns:1fr;gap:32px}.sticky-cta{padding:12px 20px}}
</style>`;

const headFonts = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;

// SHARED svc-grid block (used by city pages)
const sharedSvcGrid = `
  <div class="svc-grid">
    <div class="svc-card">
      <div class="svc-icon">&#x1F697;</div>
      <div class="svc-title">Bumper Repair</div>
      <p class="svc-desc">Cracks, dents, scuffs, and impact damage with color-matched refinish.</p>
      <div class="svc-meta"><span class="svc-badge">$350&ndash;$600</span><span class="svc-badge">2&ndash;3 hrs</span></div>
      <div class="svc-num">01</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">&#x2726;</div>
      <div class="svc-title">Scratch Removal</div>
      <p class="svc-desc">Surface to moderate scratch repair on doors, bumpers, and body panels.</p>
      <div class="svc-meta"><span class="svc-badge">$200&ndash;$450</span><span class="svc-badge">1.5&ndash;3 hrs</span></div>
      <div class="svc-num">02</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">&#x1F6E1;&#xFE0F;</div>
      <div class="svc-title">Scuff &amp; Scrape Repair</div>
      <p class="svc-desc">Light scuffs and paint transfer from parking lot or curb contact.</p>
      <div class="svc-meta"><span class="svc-badge">$150&ndash;$300</span><span class="svc-badge">1&ndash;2 hrs</span></div>
      <div class="svc-num">03</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">&#x1F3A8;</div>
      <div class="svc-title">Auto Body Paint</div>
      <p class="svc-desc">Full panel repaint with factory color match and clear coat blend.</p>
      <div class="svc-meta"><span class="svc-badge">$400&ndash;$750</span><span class="svc-badge">3&ndash;5 hrs</span></div>
      <div class="svc-num">04</div>
    </div>
    <div class="svc-card">
      <div class="svc-icon">&#x2699;&#xFE0F;</div>
      <div class="svc-title">Paintless Dent Repair</div>
      <p class="svc-desc">Dent removal on eligible panels &mdash; no repainting required.</p>
      <div class="svc-meta"><span class="svc-badge">$200&ndash;$500</span><span class="svc-badge">1.5&ndash;3 hrs</span></div>
      <div class="svc-num">05</div>
    </div>
    <div class="svc-card" style="background:rgba(217,38,38,0.05);border:1px dashed rgba(217,38,38,0.3);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:12px;">
      <div class="svc-title" style="font-size:22px;">Not Sure?</div>
      <p class="svc-desc" style="margin-bottom:0;">Send us a photo and we&rsquo;ll tell you exactly what your car needs and what it&rsquo;ll cost.</p>
      <a href="sms:${TEL}" class="btn-primary" style="font-size:14px;padding:12px 24px;">&#x1F4AC; Text a Photo</a>
    </div>
  </div>`;

const whySection = `
<section class="why-section reveal">
  <p class="section-tag">Why Mobile</p>
  <h2 class="section-h">WHY MOBILE REPAIR.</h2>
  <div class="why-grid">
    <div class="why-block">
      <div class="why-icon">&#x1F3E0;</div>
      <div class="why-title">No Drop-Off Required</div>
      <p class="why-desc">We come to your home or office. Your car stays where it is throughout the repair.</p>
    </div>
    <div class="why-block">
      <div class="why-icon">&#x26A1;</div>
      <div class="why-title">Same-Day When Available</div>
      <p class="why-desc">Same-day availability is possible depending on schedule and repair type. Text a photo first to check.</p>
    </div>
    <div class="why-block">
      <div class="why-icon">&#x1F4F7;</div>
      <div class="why-title">Photo-First Quoting</div>
      <p class="why-desc">Send a photo and your vehicle info. We review the damage and respond with a price range &mdash; no in-person visit needed.</p>
    </div>
  </div>
</section>`;

const howItWorksSection = (locationLabel = 'location') => `
<section style="padding:80px 48px;background:var(--bg);border-top:1px solid rgba(255,255,255,0.07);text-align:center;">
  <div class="section-tag reveal" style="justify-content:center;">How It Works</div>
  <h2 class="section-h reveal" style="font-size:clamp(32px,4vw,56px);margin-bottom:16px;">Send a Photo.<br>Get a Price.</h2>
  <p class="reveal" style="font-size:16px;color:var(--mid);max-width:480px;margin:0 auto 48px;line-height:1.75;">No estimate appointments. No shop visits. Text a few photos of the damage and we reply with a price range and next steps — usually within the hour.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);max-width:760px;margin:0 auto 40px;" class="reveal">
    <div style="background:var(--bg2);padding:36px 28px;text-align:left;">
      <div style="font-family:'Anton',sans-serif;font-size:48px;color:rgba(255,255,255,0.07);line-height:1;margin-bottom:16px;">01</div>
      <div style="font-weight:700;color:#fff;margin-bottom:8px;font-size:15px;">Text a Photo</div>
      <div style="font-size:14px;color:var(--mid);line-height:1.7;">Snap a photo of the damage and text it to ${PHONE}. No appointment needed.</div>
    </div>
    <div style="background:var(--bg2);padding:36px 28px;text-align:left;">
      <div style="font-family:'Anton',sans-serif;font-size:48px;color:rgba(255,255,255,0.07);line-height:1;margin-bottom:16px;">02</div>
      <div style="font-weight:700;color:#fff;margin-bottom:8px;font-size:15px;">Get a Price</div>
      <div style="font-size:14px;color:var(--mid);line-height:1.7;">We review the photos and reply with a price range and whether mobile repair is the right fit.</div>
    </div>
    <div style="background:var(--bg2);padding:36px 28px;text-align:left;">
      <div style="font-family:'Anton',sans-serif;font-size:48px;color:rgba(255,255,255,0.07);line-height:1;margin-bottom:16px;">03</div>
      <div style="font-weight:700;color:#fff;margin-bottom:8px;font-size:15px;">We Come to You</div>
      <div style="font-size:14px;color:var(--mid);line-height:1.7;">We come to your ${locationLabel} — home, office, or apartment — and complete the repair on-site.</div>
    </div>
  </div>
  <div class="reveal" style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;">
    <a href="sms:${TEL}" class="btn-primary">💬 Text a Photo Now</a>
    <a href="https://wa.me/18589880325?text=Hi! I need a quote for auto paint repair." target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:15px 28px;border-radius:6px;font-size:15px;font-weight:700;text-decoration:none;">WhatsApp Quote</a>
  </div>
</section>`;

// ---- CITY PAGE ----
function cityPage(c) {
  const title = `Auto Paint Repair ${c.name} (Mobile) – Same Day Service | Auto Paint Fix`;
  const desc = `Need auto paint repair in ${c.name}? We come to your home, apartment, or office — no shop drop-off. Color-matched, same-day service. Text a photo for a fast quote. ${PHONE}.`;
  const url = `${DOMAIN}/${c.slug}.html`;
  const faq = [
    { q: `How much does auto paint repair cost in ${c.name}?`, a: `Most paint and bumper repairs in ${c.name} range from $150 to $600 depending on damage severity. Text a photo for an exact quote with no commitment required.` },
    { q: `Do you come to my home in ${c.name}?`, a: `Yes. We perform all repairs on-site at your home, driveway, or workplace in ${c.name} — no shop drop-off required.` },
    { q: `How long does a mobile paint repair take?`, a: `Most cosmetic repairs take 1–3 hours on-site. Bumper repairs typically run 2–3 hours. Most jobs are completed the same day.` },
    { q: `Do you serve all of ${c.name}?`, a: `Yes. We cover all of ${c.name} including ZIP code ${c.zip} and surrounding ${c.region} neighborhoods.` }
  ];
  const ldRepair = {
    "@context":"https://schema.org","@type":["LocalBusiness","AutoRepair"],"name":"Auto Paint Fix",
    "description":`Mobile auto paint and cosmetic auto body repair in ${c.name}, CA. We come to your home, office, or apartment — no shop drop-off needed.`,
    "telephone":TEL,"url":url,"priceRange":"$$",
    "address":{"@type":"PostalAddress","addressLocality":c.name,"addressRegion":"CA","addressCountry":"US"},
    "geo":{"@type":"GeoCoordinates","latitude":c.lat,"longitude":c.lng},
    "areaServed":{"@type":"City","name":c.name},
    "openingHours":["Mo-Fr 07:00-19:00","Sa-Su 08:00-17:00"],"serviceType":"Mobile Auto Paint Repair",
    "hasOfferCatalog":{"@type":"OfferCatalog","name":"Mobile Auto Body Services","itemListElement":[
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bumper Repair"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Scratch Removal"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Dent Repair"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Auto Body Paint"}}
    ]}
  };
  const ldFaq = {
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity": faq.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))
  };
  const nearbyLinksHTML = (c.nearbyLinks || [])
    .filter(s => ALL_CITIES_BY_SLUG[s])
    .map(s => `<a href="${s}.html" style="color:var(--red);">${ALL_CITIES_BY_SLUG[s].name}</a>`)
    .join(', ');
  const neighborhoodListHTML = [c.name, ...c.chips].map(n => `<li>${n}</li>`).join('\n        ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>
  <link rel="canonical" href="${url}"/>
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${desc}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:image" content="${DOMAIN}/og-image.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${desc}"/>
  <script type="application/ld+json">${JSON.stringify(ldRepair, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(ldFaq, null, 2)}</script>${headFonts}
  ${baseStyles}
</head>
<body>
${topbarHTML(`Mobile Auto Paint Repair &nbsp;&middot;&nbsp; ${c.name} &amp; ${c.region}`)}
${navHTML(c.slug)}
<!-- PAGE HERO -->
<div class="page-hero">
  <div class="breadcrumb"><a href="index.html">Home</a> / <a href="service-area.html">Service Area</a> / ${c.name}</div>
  <div class="section-tag">${c.name}</div>
  <h1>Mobile Auto Paint Repair<br>${c.name}, CA</h1>
  <p class="page-hero-sub">${c.blurb}</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;">
    <a href="contact.html" class="btn-primary">Get a Quote</a>
    <a href="sms:${TEL}" class="btn-sms">💬 Text a Photo</a>
  </div>
  <div style="margin-top:20px;display:flex;gap:20px;flex-wrap:wrap;font-size:13px;font-weight:600;color:rgba(255,255,255,0.55);">
    <span>✔ Same-Day Service Available</span>
    <span>✔ On-Site Repair (No Drop-Off)</span>
    <span>✔ Color-Matched Paint</span>
  </div>
</div>

<!-- CORE REPAIRS -->
<section style="padding:64px 48px;background:var(--bg2);border-bottom:1px solid rgba(255,255,255,0.07);">
  <div class="section-tag reveal">Core Repairs</div>
  <h2 class="section-h reveal" style="font-size:clamp(28px,3vw,44px);margin-bottom:8px;">What ${c.name} Drivers Deal With.</h2>
  <div class="core-repairs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin-top:32px;">
${c.drivers.map(d => `    <div style="background:var(--bg2);padding:36px 28px;" class="reveal">
      <div style="font-size:28px;margin-bottom:14px;">${d.icon}</div>
      <div style="font-family:'Anton',sans-serif;font-size:20px;color:#fff;margin-bottom:10px;letter-spacing:0.02em;">${d.t}</div>
      <p style="font-size:14px;color:var(--mid);line-height:1.75;">${d.d}</p>
    </div>`).join('\n')}
  </div>
  <div style="margin-top:28px;text-align:center;" class="reveal">
    <a href="contact.html" class="btn-primary">Get a Fast Quote →</a>
  </div>
</section>

<!-- SERVICES SECTION -->
<section style="padding:88px 48px;background:var(--bg2);" class="reveal">
  <p class="section-tag">What We Fix</p>
  <h2 class="section-h">SERVICES.</h2>
  <p style="font-size:15px;color:var(--mid);max-width:540px;margin-bottom:40px;">All repairs are performed on-site at your location in ${c.name}. No towing, no rental car, no waiting room.</p>
  ${sharedSvcGrid}
</section>

<!-- LOCAL SECTION -->
<section class="local-section reveal">
  <p class="section-tag">Service Area</p>
  <h2 class="section-h">SERVING ${c.name.toUpperCase()} AND ${c.region.toUpperCase()}.</h2>
  <div class="local-grid">
    <div>
      <p style="font-size:15px;color:rgba(255,255,255,0.6);line-height:1.8;margin-bottom:20px;">We serve ${c.name}, ${c.nearby.join(', ')}, and surrounding ${c.region} communities. Most jobs happen at home driveways or office parking lots.</p>
      <p class="local-intro reveal" style="margin-top:0;">If you searched for <strong>auto paint repair near me in ${c.name}</strong> — this is exactly what we do. Whether your bumper was clipped in an apartment garage, hit in traffic, or scraped in a crowded shopping center lot, we come directly to your car.</p>
      ${nearbyLinksHTML ? `<p class="local-intro reveal">Also serving nearby areas: ${nearbyLinksHTML}.</p>` : ''}
      <p style="font-size:13px;color:var(--mid);margin-bottom:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Areas We Cover</p>
      <ul class="neighborhood-list">
        ${neighborhoodListHTML}
      </ul>
      <div style="margin-top:28px;">
        <a href="contact.html" class="btn-primary">Book in ${c.name}</a>
      </div>
    </div>
    <div class="map-wrap">
      <iframe src="https://maps.google.com/maps?q=${encodeURIComponent(c.name + ', San Diego, CA')}&t=&z=13&ie=UTF8&iwloc=&output=embed" title="${c.name}, CA map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>
${whySection}
<!-- CTA SECTION -->
<section class="cta-section reveal">
  <h2 class="cta-h">START WITH A PHOTO.</h2>
  <p class="cta-p">Text a photo of the damage with your ${c.name} location. We confirm the fit and respond as quickly as possible.</p>
  <div class="cta-btns">
    <a href="contact.html" class="cta-btn-dark">Get a Quote</a>
    <a href="sms:${TEL}" class="cta-btn-outline">&#x1F4AC; Text a Photo</a>
  </div>
</section>
${howItWorksSection(`${c.name} location`)}
<!-- FAQ SECTION -->
<section id="faq" style="padding:80px 48px;background:var(--bg2);border-top:1px solid rgba(255,255,255,0.07);">
  <div class="section-tag reveal" style="justify-content:center;margin-bottom:12px;">FAQ</div>
  <h2 class="section-h reveal" style="text-align:center;margin-bottom:48px;">Common Questions<br>About ${c.name} Auto Paint Repair.</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;max-width:960px;margin:0 auto;" class="reveal">
${faq.map(f => `    <div style="background:var(--bg3);border-radius:8px;padding:28px;border:1px solid rgba(255,255,255,0.07);">
      <div style="font-weight:700;color:#fff;margin-bottom:10px;font-size:15px;">${f.q}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.55);line-height:1.75;">${f.a}</div>
    </div>`).join('\n')}
  </div>
</section>
${footerHTML()}
${stickyAndScripts(`Mobile Auto Body &middot; ${c.name} &amp; ${c.region}`)}`;
}

// ---- SERVICE PAGE ----
function servicePage(s) {
  const url = `${DOMAIN}/${s.slug}.html`;
  const ldService = {
    "@context":"https://schema.org","@type":"Service","name":s.name,
    "provider":{"@type":"AutoRepair","name":"Auto Paint Fix","telephone":TEL,"url":DOMAIN,
      "areaServed":{"@type":"AdministrativeArea","name":"San Diego County, CA"}},
    "areaServed":{"@type":"AdministrativeArea","name":"San Diego County, CA"},
    "description":s.descSeo,"url":url,"serviceType":s.name,"offers":{"@type":"Offer","priceRange":s.priceRange}
  };
  const ldFaq = {
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity": s.faq.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))
  };
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${s.titleSeo}</title>
  <meta name="description" content="${s.descSeo}"/>
  <link rel="canonical" href="${url}"/>
  <meta property="og:title" content="${s.titleSeo}"/>
  <meta property="og:description" content="${s.descSeo}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:image" content="${DOMAIN}/og-image.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${s.titleSeo}"/>
  <meta name="twitter:description" content="${s.descSeo}"/>
  <script type="application/ld+json">${JSON.stringify(ldService, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(ldFaq, null, 2)}</script>${headFonts}
  ${baseStyles}
</head>
<body>
${topbarHTML(`Mobile ${s.name} &nbsp;&middot;&nbsp; San Diego County`)}
${navHTML(s.slug)}
<!-- PAGE HERO -->
<div class="page-hero">
  <div class="breadcrumb"><a href="index.html">Home</a> / <a href="services.html">Services</a> / ${s.name}</div>
  <div class="section-tag">${s.name}</div>
  <h1>Mobile ${s.name}<br>San Diego County</h1>
  <p class="page-hero-sub">${s.blurb}</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;">
    <a href="contact.html" class="btn-primary">Get a Quote</a>
    <a href="sms:${TEL}" class="btn-sms">💬 Text a Photo</a>
  </div>
  <div style="margin-top:20px;display:flex;gap:20px;flex-wrap:wrap;font-size:13px;font-weight:600;color:rgba(255,255,255,0.55);">
    <span>✔ ${s.priceRange}</span>
    <span>✔ ${s.timeRange} on-site</span>
    <span>✔ Color-Matched Paint</span>
  </div>
</div>

<!-- WHAT'S INCLUDED -->
<section style="padding:64px 48px;background:var(--bg2);border-bottom:1px solid rgba(255,255,255,0.07);">
  <div class="section-tag reveal">What's Included</div>
  <h2 class="section-h reveal" style="font-size:clamp(28px,3vw,44px);margin-bottom:8px;">${s.name} — What We Handle.</h2>
  <p class="reveal" style="font-size:15px;color:var(--mid);max-width:540px;margin-bottom:32px;">Every job is assessed on-site before work begins. Text a photo for a same-day estimate.</p>
  <div class="core-repairs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);">
${s.cards.map(card => `    <div style="background:var(--bg2);padding:36px 28px;" class="reveal">
      <div style="font-size:28px;margin-bottom:14px;">${card.icon}</div>
      <div style="font-family:'Anton',sans-serif;font-size:20px;color:#fff;margin-bottom:10px;letter-spacing:0.02em;">${card.t}</div>
      <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:14px;">${card.d}</p>
      <div style="font-size:13px;color:var(--red);font-weight:700;">${card.p}</div>
    </div>`).join('\n')}
  </div>
  <div style="margin-top:28px;text-align:center;" class="reveal">
    <a href="contact.html" class="btn-primary">Get a Fast Quote →</a>
  </div>
</section>

<!-- OTHER SERVICES -->
<section style="padding:88px 48px;background:var(--bg2);" class="reveal">
  <p class="section-tag">More Services</p>
  <h2 class="section-h">OTHER WORK WE DO.</h2>
  <p style="font-size:15px;color:var(--mid);max-width:540px;margin-bottom:40px;">All repairs are performed on-site across San Diego County. No towing, no rental car, no waiting room.</p>
  ${sharedSvcGrid}
</section>
${whySection}
<!-- CTA SECTION -->
<section class="cta-section reveal">
  <h2 class="cta-h">START WITH A PHOTO.</h2>
  <p class="cta-p">Text a photo of the damage with your San Diego County location. We confirm the fit and respond as quickly as possible.</p>
  <div class="cta-btns">
    <a href="contact.html" class="cta-btn-dark">Get a Quote</a>
    <a href="sms:${TEL}" class="cta-btn-outline">&#x1F4AC; Text a Photo</a>
  </div>
</section>
${howItWorksSection('San Diego County location')}
<!-- FAQ SECTION -->
<section id="faq" style="padding:80px 48px;background:var(--bg2);border-top:1px solid rgba(255,255,255,0.07);">
  <div class="section-tag reveal" style="justify-content:center;margin-bottom:12px;">FAQ</div>
  <h2 class="section-h reveal" style="text-align:center;margin-bottom:48px;">Common Questions<br>About ${s.name}.</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;max-width:960px;margin:0 auto;" class="reveal">
${s.faq.map(f => `    <div style="background:var(--bg3);border-radius:8px;padding:28px;border:1px solid rgba(255,255,255,0.07);">
      <div style="font-weight:700;color:#fff;margin-bottom:10px;font-size:15px;">${f.q}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.55);line-height:1.75;">${f.a}</div>
    </div>`).join('\n')}
  </div>
</section>
${footerHTML()}
${stickyAndScripts(`Mobile ${s.short} &middot; San Diego County`)}`;
}

// ---- UTILITY: SERVICES INDEX PAGE ----
function servicesIndexPage() {
  const url = `${DOMAIN}/services.html`;
  const title = 'Mobile Auto Paint & Body Repair Services | Auto Paint Fix San Diego';
  const desc = 'Mobile auto paint, bumper, scratch, scuff, dent, and PDR services across San Diego County. Photo-first quoting, on-site repair, color-matched paint.';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>
  <link rel="canonical" href="${url}"/>${headFonts}
  ${baseStyles}
</head>
<body>
${topbarHTML('Mobile Auto Paint Repair &nbsp;&middot;&nbsp; San Diego County')}
${navHTML('services')}
<div class="page-hero">
  <div class="breadcrumb"><a href="index.html">Home</a> / Services</div>
  <div class="section-tag">Services</div>
  <h1>Every Cosmetic Repair<br>Done On-Site.</h1>
  <p class="page-hero-sub">From a $150 scuff to a full vehicle repaint — every service we offer is performed at your location across San Diego County. Text a photo to get started.</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;">
    <a href="contact.html" class="btn-primary">Get a Quote</a>
    <a href="sms:${TEL}" class="btn-sms">💬 Text a Photo</a>
  </div>
</div>
<section style="padding:80px 48px;background:var(--bg2);" class="reveal">
  <p class="section-tag">Full Service Catalog</p>
  <h2 class="section-h">WHAT WE FIX.</h2>
  <p style="font-size:15px;color:var(--mid);max-width:540px;margin-bottom:40px;">Tap any service to see pricing, examples, and FAQs.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);">
${SERVICES.map(s => `    <a href="${s.slug}.html" class="svc-card" style="text-decoration:none;color:inherit;display:block;">
      <div class="svc-icon">${s.icon}</div>
      <div class="svc-title">${s.name}</div>
      <p class="svc-desc">${s.blurb.split('.')[0]}.</p>
      <div class="svc-meta"><span class="svc-badge">${s.priceRange}</span><span class="svc-badge">${s.timeRange}</span></div>
      <div style="margin-top:14px;font-size:13px;color:var(--red);font-weight:700;">View Details →</div>
    </a>`).join('\n')}
  </div>
</section>
${whySection}
<section class="cta-section reveal">
  <h2 class="cta-h">NOT SURE WHICH ONE?</h2>
  <p class="cta-p">Text a photo and we'll tell you what your car needs and what it'll cost.</p>
  <div class="cta-btns">
    <a href="contact.html" class="cta-btn-dark">Get a Quote</a>
    <a href="sms:${TEL}" class="cta-btn-outline">&#x1F4AC; Text a Photo</a>
  </div>
</section>
${howItWorksSection('San Diego County location')}
${footerHTML()}
${stickyAndScripts('Mobile Auto Body &middot; San Diego County')}`;
}

// ---- UTILITY: PRICING PAGE ----
function pricingPage() {
  const url = `${DOMAIN}/pricing.html`;
  const title = 'Mobile Auto Paint Repair Pricing | Auto Paint Fix San Diego';
  const desc = 'Transparent pricing for mobile auto paint, bumper, scratch, scuff, dent, and PDR repair across San Diego County. Photo-first quoting.';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>
  <link rel="canonical" href="${url}"/>${headFonts}
  ${baseStyles}
</head>
<body>
${topbarHTML('Mobile Auto Paint Repair &nbsp;&middot;&nbsp; San Diego County')}
${navHTML('pricing')}
<div class="page-hero">
  <div class="breadcrumb"><a href="index.html">Home</a> / Pricing</div>
  <div class="section-tag">Pricing</div>
  <h1>Real Pricing.<br>No Estimates Game.</h1>
  <p class="page-hero-sub">Every job is quoted from photos before we book. The price you see is the price you pay — final number confirmed at on-site inspection.</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;">
    <a href="contact.html" class="btn-primary">Get a Quote</a>
    <a href="sms:${TEL}" class="btn-sms">💬 Text a Photo</a>
  </div>
</div>
<section style="padding:80px 48px;background:var(--bg2);" class="reveal">
  <p class="section-tag">Pricing Tiers</p>
  <h2 class="section-h">WHAT YOU'LL PAY.</h2>
  <p style="font-size:15px;color:var(--mid);max-width:540px;margin-bottom:40px;">Compare our mobile pricing against typical shop quotes. We're priced lower because there's no shop overhead.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
${SERVICES.map(s => `    <div style="background:var(--bg3);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:32px 24px;">
      <div style="font-size:30px;margin-bottom:12px;">${s.icon}</div>
      <div style="font-family:'Anton',sans-serif;font-size:22px;color:#fff;letter-spacing:0.02em;margin-bottom:6px;">${s.name}</div>
      <div style="font-family:'Anton',sans-serif;font-size:36px;color:var(--red);line-height:1;margin:14px 0;">${s.priceRange}</div>
      <div style="font-size:13px;color:var(--mid);margin-bottom:18px;">${s.timeRange} on-site</div>
      <a href="${s.slug}.html" style="font-size:13px;color:var(--red);text-decoration:none;font-weight:700;">View Service →</a>
    </div>`).join('\n')}
  </div>
</section>
<section style="padding:64px 48px;background:var(--bg);" class="reveal">
  <div style="max-width:760px;margin:0 auto;text-align:center;">
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(28px,3vw,40px);color:#fff;margin-bottom:16px;letter-spacing:0.01em;">How Our Pricing Works</h2>
    <p style="font-size:15px;color:var(--mid);line-height:1.8;">All prices listed are starting points. Final cost depends on damage size, paint complexity, panel access, and color-match difficulty. We confirm the final number after seeing photos and inspecting the panel on-site. There are no surprise fees and no estimate appointment charges.</p>
  </div>
</section>
${whySection}
<section class="cta-section reveal">
  <h2 class="cta-h">GET A FIRM PRICE.</h2>
  <p class="cta-p">Text a photo of your damage. We'll respond with an exact price range — usually within the hour.</p>
  <div class="cta-btns">
    <a href="contact.html" class="cta-btn-dark">Get a Quote</a>
    <a href="sms:${TEL}" class="cta-btn-outline">&#x1F4AC; Text a Photo</a>
  </div>
</section>
${howItWorksSection('San Diego County location')}
${footerHTML()}
${stickyAndScripts('Mobile Auto Body &middot; San Diego County')}`;
}

// ---- UTILITY: CONTACT PAGE ----
function contactPage() {
  const url = `${DOMAIN}/contact.html`;
  const title = 'Get a Quote – Auto Paint Fix San Diego | Mobile Auto Body Repair';
  const desc = 'Text a photo of your damage to get a fast quote for mobile auto paint repair in San Diego. Same-day responses, no shop visit needed.';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>
  <link rel="canonical" href="${url}"/>${headFonts}
  ${baseStyles}
</head>
<body>
${topbarHTML('Mobile Auto Paint Repair &nbsp;&middot;&nbsp; San Diego County')}
${navHTML('contact')}
<div class="page-hero">
  <div class="breadcrumb"><a href="index.html">Home</a> / Contact</div>
  <div class="section-tag">Get a Quote</div>
  <h1>Text. Snap. Done.</h1>
  <p class="page-hero-sub">The fastest way to get a quote: text a photo of the damage to ${PHONE}. Most quotes come back within the hour.</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;">
    <a href="sms:${TEL}" class="btn-primary">💬 Text a Photo</a>
    <a href="tel:${TEL}" class="btn-sms">📞 Call ${PHONE}</a>
  </div>
</div>
<section style="padding:80px 48px;background:var(--bg2);" class="reveal">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;max-width:1100px;margin:0 auto;">
    <div>
      <p class="section-tag">Contact Methods</p>
      <h2 class="section-h" style="font-size:clamp(28px,3vw,40px);margin-bottom:24px;">Reach Us Three Ways.</h2>
      <div style="display:flex;flex-direction:column;gap:18px;">
        <a href="sms:${TEL}" style="text-decoration:none;background:var(--bg3);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:24px;display:flex;gap:16px;align-items:center;transition:border-color 0.2s;">
          <div style="font-size:32px;">💬</div>
          <div>
            <div style="font-family:'Anton',sans-serif;font-size:18px;color:#fff;letter-spacing:0.02em;">Text a Photo (Fastest)</div>
            <div style="font-size:14px;color:var(--mid);margin-top:4px;">${PHONE} — usually a reply within the hour</div>
          </div>
        </a>
        <a href="tel:${TEL}" style="text-decoration:none;background:var(--bg3);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:24px;display:flex;gap:16px;align-items:center;">
          <div style="font-size:32px;">📞</div>
          <div>
            <div style="font-family:'Anton',sans-serif;font-size:18px;color:#fff;letter-spacing:0.02em;">Call</div>
            <div style="font-size:14px;color:var(--mid);margin-top:4px;">${PHONE} — Mon–Fri 7am–7pm, Sat–Sun 8am–5pm</div>
          </div>
        </a>
        <a href="https://wa.me/18589880325?text=Hi! I need a quote for auto paint repair." target="_blank" rel="noopener" style="text-decoration:none;background:var(--bg3);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:24px;display:flex;gap:16px;align-items:center;">
          <div style="font-size:32px;">🟢</div>
          <div>
            <div style="font-family:'Anton',sans-serif;font-size:18px;color:#fff;letter-spacing:0.02em;">WhatsApp</div>
            <div style="font-size:14px;color:var(--mid);margin-top:4px;">Same-day responses with photos and pricing</div>
          </div>
        </a>
      </div>
    </div>
    <div>
      <p class="section-tag">What to Send</p>
      <h2 class="section-h" style="font-size:clamp(28px,3vw,40px);margin-bottom:24px;">Photos We Need.</h2>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:14px;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.6;">
        <li style="padding-left:28px;position:relative;"><span style="position:absolute;left:0;top:0;color:var(--red);font-weight:700;">1.</span>A wide shot of the damaged area (full panel)</li>
        <li style="padding-left:28px;position:relative;"><span style="position:absolute;left:0;top:0;color:var(--red);font-weight:700;">2.</span>A close-up of the damage itself</li>
        <li style="padding-left:28px;position:relative;"><span style="position:absolute;left:0;top:0;color:var(--red);font-weight:700;">3.</span>Vehicle year, make, and model</li>
        <li style="padding-left:28px;position:relative;"><span style="position:absolute;left:0;top:0;color:var(--red);font-weight:700;">4.</span>Your ZIP code or city</li>
      </ul>
      <p style="font-size:14px;color:var(--mid);margin-top:20px;line-height:1.7;">That's it. We respond with a price range and confirm whether mobile repair is the right fit.</p>
    </div>
  </div>
</section>
${whySection}
${howItWorksSection('San Diego County location')}
${footerHTML()}
${stickyAndScripts('Mobile Auto Body &middot; San Diego County')}`;
}

// ---- UTILITY: SERVICE-AREA PAGE ----
function serviceAreaPage() {
  const url = `${DOMAIN}/service-area.html`;
  const title = 'Service Area – Auto Paint Fix San Diego County | Mobile Auto Body';
  const desc = 'Mobile auto paint and body repair across San Diego County. We come to Carlsbad, Chula Vista, La Jolla, Mira Mesa, Oceanside, Poway, and 12+ more cities.';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>
  <link rel="canonical" href="${url}"/>${headFonts}
  ${baseStyles}
</head>
<body>
${topbarHTML('Mobile Auto Paint Repair &nbsp;&middot;&nbsp; San Diego County')}
${navHTML('service-area')}
<div class="page-hero">
  <div class="breadcrumb"><a href="index.html">Home</a> / Service Area</div>
  <div class="section-tag">Service Area</div>
  <h1>All of San Diego County.<br>We Come to You.</h1>
  <p class="page-hero-sub">From the coast to East County, North County to South Bay — our mobile technicians cover the entire San Diego region. Tap any city below for local details.</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;">
    <a href="contact.html" class="btn-primary">Get a Quote</a>
    <a href="sms:${TEL}" class="btn-sms">💬 Text a Photo</a>
  </div>
</div>
<section style="padding:80px 48px;background:var(--bg2);" class="reveal">
  <p class="section-tag">Cities We Serve</p>
  <h2 class="section-h">17 SAN DIEGO COMMUNITIES.</h2>
  <p style="font-size:15px;color:var(--mid);max-width:540px;margin-bottom:40px;">Don't see your city? Text us — we likely cover your area too.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);">
${NAV_CITIES.map(slug => {
  const c = ALL_CITIES_BY_SLUG[slug];
  return `    <a href="${slug}.html" class="svc-card" style="text-decoration:none;color:inherit;display:block;">
      <div style="font-family:'Anton',sans-serif;font-size:22px;color:#fff;letter-spacing:0.02em;margin-bottom:6px;">${c.name}</div>
      ${c.region ? `<div style="font-size:12px;color:var(--mid);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.08em;">${c.region}</div>` : ''}
      <div style="font-size:13px;color:var(--red);font-weight:700;">View ${c.name} →</div>
    </a>`;
}).join('\n')}
  </div>
</section>
<section style="padding:80px 48px;background:var(--bg);" class="reveal">
  <div style="max-width:1200px;margin:0 auto;">
    <p class="section-tag">Where We Are</p>
    <h2 class="section-h" style="font-size:clamp(28px,3vw,44px);">San Diego County Coverage Map.</h2>
    <div class="map-wrap" style="margin-top:32px;">
      <iframe src="https://maps.google.com/maps?q=San+Diego+County,+CA&t=&z=10&ie=UTF8&iwloc=&output=embed" title="San Diego County map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>
${whySection}
<section class="cta-section reveal">
  <h2 class="cta-h">BOOK IN YOUR CITY.</h2>
  <p class="cta-p">Text a photo with your location. We confirm the fit and schedule a same-day or next-day visit.</p>
  <div class="cta-btns">
    <a href="contact.html" class="cta-btn-dark">Get a Quote</a>
    <a href="sms:${TEL}" class="cta-btn-outline">&#x1F4AC; Text a Photo</a>
  </div>
</section>
${howItWorksSection('San Diego County location')}
${footerHTML()}
${stickyAndScripts('Mobile Auto Body &middot; San Diego County')}`;
}

// ---- WRITE FILES ----
const outDir = __dirname;
let count = 0;

CITIES.forEach(c => {
  fs.writeFileSync(path.join(outDir, `${c.slug}.html`), cityPage(c));
  count++;
  console.log(`✓ ${c.slug}.html`);
});

SERVICES.forEach(s => {
  fs.writeFileSync(path.join(outDir, `${s.slug}.html`), servicePage(s));
  count++;
  console.log(`✓ ${s.slug}.html`);
});

fs.writeFileSync(path.join(outDir, 'services.html'), servicesIndexPage()); count++; console.log('✓ services.html');
fs.writeFileSync(path.join(outDir, 'pricing.html'), pricingPage()); count++; console.log('✓ pricing.html');
fs.writeFileSync(path.join(outDir, 'contact.html'), contactPage()); count++; console.log('✓ contact.html');
fs.writeFileSync(path.join(outDir, 'service-area.html'), serviceAreaPage()); count++; console.log('✓ service-area.html');

console.log(`\nGenerated ${count} pages.`);

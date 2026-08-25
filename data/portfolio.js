// All portfolio content lives here so it's easy to edit without touching components.

export const profile = {
  name: "Gihan Danushka",
  role: "Digital Media & Technology",
  tagline:
    "Blending technology and creativity to create meaningful digital experiences that connect businesses with people.",
  location: "Colombo, Sri Lanka",
  coords: "6.9271° N / 79.8612° E",
  photo: "/images/profile.png",
  summary:
    "Tech-focused, multidisciplinary professional with 7+ years across accounting, tourism operations, and digital media. Currently Digital Media Executive at Tangerine Tours, specializing in web development, digital marketing, photography, videography, and content strategy. Holds a BSc (Hons) in Computer Science (Multimedia Technology) and a HND in General IT — a rare combination of technical depth and hands-on inbound-tourism experience, used to build digital tools that actually fit how travel businesses operate.",
  email: "gihansdanushka@gmail.com",
  phone: "+94 77 1757 382",
  address: "97/F, Weera Uditha Mawatha, Hedigama, Piliyandala, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/gihandanushka",
  linkedinLabel: "linkedin.com/in/gihandanushka",
};

export const stats = [
  { value: "7+", label: "Years experience" },
  { value: "3", label: "Web platforms shipped" },
  { value: "2", label: "Disciplines: tech + creative" },
  { value: "1", label: "Industry focus: travel" },
];

export const skillGroups = [
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Next.js"],
  },
  {
    title: "Design & Media",
    items: ["Photoshop", "Lightroom", "Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    title: "Marketing",
    items: ["Google Ads", "Meta Business Suite", "Google Analytics"],
  },
  {
    title: "Productivity",
    items: ["Excel", "Google Sheets", "Word", "Google Docs", "PowerPoint"],
  },
  {
    title: "Photography Gear",
    items: ["DSLR Cameras", "Sony A-Series", "Drones", "Action Cameras"],
  },
];

export const keySkills = [
  "Web Design & Development",
  "Digital Media Marketing & Paid Campaigns",
  "Social Media Management & Lead Generation",
  "Photography, Videography & Post-Production",
  "UI/UX Concepts & Web Maintenance",
  "Project Coordination & Team Leadership",
  "Financial Process Understanding & Cost Analysis",
  "Digital Branding & Content Strategy",
];

export const webProjects = [
  {
    id: "pelican",
    name: "Pelican Travels & Tours",
    status: "Live",
    summary:
      "A modern, fully responsive tourism website combining engaging front-end design with SEO-focused content and functionality.",
    details:
      "Built a structured tour-package system with dedicated package pages, detailed itineraries, destinations and travel guides. A backend inquiry system securely receives and delivers customer inquiries by email, supporting efficient lead management and communication.",
    tags: [
      "Next.js",
      "Front-End Development",
      "Responsive Design",
      "SEO",
      "Tour Package Management",
      "Backend Development",
      "Email Inquiry System",
    ],
    url: "https://pelicantravelsandtours.com/",
    hero: "/images/projects/pelican/hero.jpg",
    shots: [
      { src: "/images/projects/pelican/destination-guide.jpg", caption: "Destination guide — Galle" },
      { src: "/images/projects/pelican/package-listing.jpg", caption: "Package listing" },
      { src: "/images/projects/pelican/package-detail.jpg", caption: "Package detail" },
    ],
  },
  {
    id: "tangerine-vacations",
    name: "Tangerine Vacations",
    status: "Live",
    summary:
      "A clean, responsive company website built to establish a strong online presence and showcase the brand and its services.",
    details:
      "Focused on modern front-end development, SEO optimization, and a user-friendly inquiry form so potential customers can easily submit inquiries and connect with the company.",
    tags: ["Front-End Development", "Responsive Design", "SEO", "Inquiry Form Integration"],
    url: "https://tangerinevacations.com/",
    hero: "/images/projects/tangerine-vacations/hero.jpg",
    shots: [
      { src: "/images/projects/tangerine-vacations/brand-introduction.jpg", caption: "Brand introduction" },
      { src: "/images/projects/tangerine-vacations/services-overview.jpg", caption: "Services overview" },
      { src: "/images/projects/tangerine-vacations/destinations.jpg", caption: "Destinations" },
    ],
  },
];

export const webSystems = [
  {
    id: "hotel-booking",
    name: "Tangerine Group of Hotels — Booking System",
    status: "In development",
    summary:
      "A comprehensive hotel booking platform designed for a seamless online reservation experience across the Tangerine Group of Hotels.",
    details:
      "A modern, responsive front end paired with an integrated booking system and full backend infrastructure — including an administrative dashboard for managing reservations, rates and room supplements, backed by database connectivity and payment gateway integration for secure online transactions.",
    tags: [
      "Front-End Development",
      "Booking System",
      "Backend Development",
      "Admin Dashboard",
      "Database Integration",
      "Payment Gateway Integration",
    ],
    hero: "/images/projects/hotel-booking/hero.jpg",
    shots: [
      { src: "/images/projects/hotel-booking/rates-supplements.jpg", caption: "Rates & supplements panel" },
      { src: "/images/projects/hotel-booking/room-inventory.jpg", caption: "Room inventory controls" },
      { src: "/images/projects/hotel-booking/shot-4.jpg", caption: "Admin dashboard" },
    ],
  },
];

export const socialPosts = [
  { src: "/images/social/holiday-campaign.jpg", caption: "Festive campaign artwork" },
  { src: "/images/social/hotel-campaign.jpg", caption: "Hotel campaign artwork" },
  { src: "/images/social/vk-campaign.jpg", caption: "Promotional artwork" },
  { src: "/images/social/independence-day.jpg", caption: "Independence Day campaign" },
];

export const videoArtworks = [
  { src: "/images/video-artworks/tangerine-beach-hotel.jpg", caption: "Tangerine Beach Hotel — video cover" },
  { src: "/images/video-artworks/royal-palms-beach-hotel.jpg", caption: "Royal Palms Beach Hotel — video cover" },
  { src: "/images/video-artworks/grand-hotel.jpg", caption: "The Grand Hotel — video cover" },
];

export const videoProjects = [
  {
    id: "media-campaign-editing",
    title: "Media Campaign Videos",
    role: "Editing only",
    description: "Short-form campaign edits shaped for digital reach, brand messaging and audience engagement.",
    youtubeId: "-tSeWnLPSoY",
  },
  {
    id: "event-video-production",
    title: "Event Videos",
    role: "Shooting + Editing",
    description: "Live event coverage and post-production that captures energy, atmosphere and key moments in a polished format.",
    youtubeId: "S9zvafbHGWo",
  },
  {
    id: "music-video-production",
    title: "Music Videos",
    role: "Shooting + Directing",
    description: "Creative music video production focused on visual storytelling, performance and cinematic movement.",
    youtubeId: "3p6sPLDppJ8",
  },
  {
    id: "hotel-promo-videos",
    title: "Hotel Promotional Videos",
    role: "Shooting + Directing",
    description: "Brand-led hotel promos designed to highlight destination appeal, hospitality and guest experience.",
    youtubeId: "-l_qyYkCiuQ",
  },
];

export const photography = [
  { src: "/images/photography/portrait-01.jpeg", caption: "Ella, hill country" },
  { src: "/images/photography/portrait-02.jpeg", caption: "Portrait, natural light" },
  { src: "/images/photography/portrait-03.jpeg", caption: "Portrait series" },
  { src: "/images/photography/portrait-04.jpeg", caption: "Editorial portrait" },
  { src: "/images/photography/portrait-05.jpeg", caption: "Lifestyle portrait" },
  { src: "/images/photography/portrait-06.jpeg", caption: "Travel portrait" },
];

export const experience = [
  {
    company: "Tangerine Tours (Pvt) Ltd",
    location: "Colombo 03, Sri Lanka",
    role: "Digital Media Executive",
    period: "Oct 2023 — Present",
    points: [
      "Lead the company's digital media strategy, including web development, design and social media management.",
      "Manage photography, videography and video production for tourism promotions and campaigns.",
      "Plan and execute paid digital marketing campaigns (Meta & Google Ads) for lead generation.",
      "Develop and maintain responsive websites using HTML and Next.js.",
      "Collaborate with management to implement data-driven marketing solutions and digital automation.",
    ],
  },
  {
    company: "Tangerine Tours (Pvt) Ltd",
    location: "Colombo 03, Sri Lanka",
    role: "Accounts Executive",
    period: "Oct 2018 — Oct 2023",
    points: [
      "Handled full-cycle accounting functions, including costing, management reports and supplier payments.",
      "Managed financial reconciliation, tour package costing and outstanding reports.",
      "Supported operational and financial planning by coordinating with multiple departments.",
      "Ensured compliance and financial accuracy in daily tour operations.",
    ],
  },
  {
    company: "Cecil Arsecularatne & Company",
    location: "Colombo 05, Sri Lanka",
    role: "Junior Auditor",
    period: "Mar 2017 — Apr 2018",
    points: [
      "Conducted audits, analyzed company accounts and verified financial statements.",
      "Assisted senior auditors in preparing reports and performing stock verifications.",
      "Ensured adherence to accounting standards and compliance procedures.",
    ],
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Computer Science — Multimedia Technology",
    school: "Kingston University, London",
  },
  {
    degree: "Higher National Diploma in Computing — General IT",
    school: "Pearson College, London",
  },
  {
    degree: "Assured Diploma in Information Technology",
    school: "Pearson College, London",
  },
  {
    degree: "GCE Advanced Level — Commerce Stream",
    school: "Thurstan College, Colombo",
  },
  {
    degree: "GCE Ordinary Level",
    school: "Thurstan College, Colombo",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Sinhala", level: "Native" },
];

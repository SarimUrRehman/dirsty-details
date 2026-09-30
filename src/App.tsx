/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Droplets,
  Sparkles,
  Car,
  ShieldCheck,
  Sun,
  Brush,
  Truck,
  Award,
  MapPin,
  FileCheck,
  Instagram,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Camera,
} from 'lucide-react';
import { BrandLogo } from './components/BrandLogo';

// ============================================================================
// PLACEHOLDER DATA (Easy to edit for client updates)
// ============================================================================

// PLACEHOLDER: Contact details
const CONTACT_INFO = {
  phone: '0000 000 000', // PLACEHOLDER: Replace with real business phone number
  email: 'hello@dustydetailswa.com.au', // PLACEHOLDER: Replace with real business email
  instagramUrl: 'https://www.instagram.com/dustydetailswa/',
  instagramHandle: '@dustydetailswa',
};

// PLACEHOLDER: 6 Core Detailing Services (No prices, one-line descriptions)
const SERVICES = [
  {
    id: 'exterior-wash',
    title: 'Exterior Wash & Hand Dry',
    description: 'Safe pH-neutral snow foam pre-wash, two-bucket hand wash, deep wheel clean and streak-free microfibre dry.',
    icon: Droplets,
  },
  {
    id: 'interior-clean',
    title: 'Interior Deep Clean',
    description: 'Thorough cabin vacuum, steam sanitisation, trim rejuvenation, leather care and crystal-clear interior glass.',
    icon: Brush,
  },
  {
    id: 'full-detail',
    title: 'Full Detail (Inside & Out)',
    description: 'Complete interior and exterior transformation delivering a showroom-ready finish right in your driveway.',
    icon: Car,
  },
  {
    id: 'paint-polish',
    title: 'Paint Polish & Wax/Sealant',
    description: 'Gloss-enhancing machine polish paired with a durable carnauba wax or hydrophobic paint sealant for lasting shine.',
    icon: Sparkles,
  },
  {
    id: 'headlight-restoration',
    title: 'Headlight Restoration',
    description: 'Multi-stage wet sanding, machine compounding and UV-protective clear coat to restore cloudy or oxidised lenses.',
    icon: Sun,
  },
  {
    id: 'pet-hair-stain',
    title: 'Pet Hair & Stain Removal',
    description: 'Targeted upholstery extraction and specialist brushing to lift embedded pet hair, seat stains and lingering odours.',
    icon: ShieldCheck,
  },
];

// PLACEHOLDER: 4 Why Choose Us Highlights
const WHY_CHOOSE_US = [
  {
    title: 'We Come To You',
    description: 'Convenient mobile service at your home or workplace across Byford and surrounding Perth suburbs.',
    icon: Truck,
  },
  {
    title: 'Quality Products & Attention to Detail',
    description: 'Premium paint-safe wash media, pH-balanced formulas and meticulous care on every panel and trim piece.',
    icon: Award,
  },
  {
    title: 'Local Byford Business',
    description: 'Proudly local and owner-operated in Byford, dedicated to keeping our community’s vehicles looking their best.',
    icon: MapPin,
  },
  {
    title: 'Free No-Obligation Quotes',
    description: 'Honest, upfront quotes tailored to your vehicle’s size and condition with zero hidden surprises.',
    icon: FileCheck,
  },
];

// PLACEHOLDER: Servicing Suburbs List
const SERVICE_SUBURBS = [
  'Byford',
  'Mundijong',
  'Armadale',
  'Serpentine',
  'Cardup',
  'Oakford',
  'Darling Downs',
  'Jarrahdale',
];

// PLACEHOLDER: 6 Gallery Before / After Items (Replace imageSrc with real client photos when ready)
const GALLERY_ITEMS = [
  {
    id: 1,
    caption: 'Gloss Black SUV – Paint Polish & Sealant',
    tag: 'Exterior Detail',
    imageSrc: '', // PLACEHOLDER: Add "/gallery-1.jpg" when photo is available
  },
  {
    id: 2,
    caption: 'Dual-Cab 4x4 – Full Inside & Out Detail',
    tag: 'Full Detail',
    imageSrc: '', // PLACEHOLDER: Add "/gallery-2.jpg" when photo is available
  },
  {
    id: 3,
    caption: 'Family Wagon – Interior Deep Clean & Steam',
    tag: 'Interior Clean',
    imageSrc: '', // PLACEHOLDER: Add "/gallery-3.jpg" when photo is available
  },
  {
    id: 4,
    caption: 'Sports Coupe – Snow Foam Wash & Hand Dry',
    tag: 'Exterior Wash',
    imageSrc: '', // PLACEHOLDER: Add "/gallery-4.jpg" when photo is available
  },
  {
    id: 5,
    caption: 'Cloudy Lenses – Crystal Clear Headlight Restore',
    tag: 'Headlights',
    imageSrc: '', // PLACEHOLDER: Add "/gallery-5.jpg" when photo is available
  },
  {
    id: 6,
    caption: 'Rear Seats & Boot – Pet Hair & Stain Extraction',
    tag: 'Stain Removal',
    imageSrc: '', // PLACEHOLDER: Add "/gallery-6.jpg" when photo is available
  },
];

// Pure CSS Soap Bubbles Configuration for Hero Background
const HERO_BUBBLES = [
  { size: 'w-20 h-20', top: '12%', left: '7%', anim: 'animate-bubble-slow', delay: '0s' },
  { size: 'w-10 h-10', top: '24%', left: '16%', anim: 'animate-bubble-medium', delay: '1.8s' },
  { size: 'w-28 h-28', top: '62%', left: '6%', anim: 'animate-bubble-drift', delay: '0.7s' },
  { size: 'w-14 h-14', top: '76%', left: '20%', anim: 'animate-bubble-slow', delay: '3.2s' },
  { size: 'w-24 h-24', top: '16%', left: '82%', anim: 'animate-bubble-drift', delay: '1.1s' },
  { size: 'w-12 h-12', top: '36%', left: '88%', anim: 'animate-bubble-medium', delay: '2.5s' },
  { size: 'w-32 h-32', top: '64%', left: '80%', anim: 'animate-bubble-slow', delay: '0.4s' },
  { size: 'w-9 h-9', top: '48%', left: '74%', anim: 'animate-bubble-medium', delay: '4.1s' },
  { size: 'w-16 h-16', top: '10%', left: '46%', anim: 'animate-bubble-drift', delay: '2.9s' },
  { size: 'w-11 h-11', top: '82%', left: '54%', anim: 'animate-bubble-slow', delay: '1.4s' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact / Free Quote Form State (Frontend Only)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: '',
    vehicle: '',
    service: SERVICES[2].title, // Default to Full Detail (Inside & Out)
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Interactive gallery preview mode ('split' | 'after') per card
  const [activeGalleryView, setActiveGalleryView] = useState<Record<number, 'split' | 'after'>>({});

  const handleSelectServiceAndScroll = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    setFormSubmitted(false);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSuburb = (suburbName: string) => {
    setFormData((prev) => ({ ...prev, suburb: suburbName }));
    setFormSubmitted(false);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleGalleryCardView = (id: number) => {
    setActiveGalleryView((prev) => ({
      ...prev,
      [id]: prev[id] === 'after' ? 'split' : 'after',
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A1A33] text-white selection:bg-[#2E9BFF] selection:text-white">
      {/* =====================================================================
          1. STICKY NAVBAR
          Logo on left; links Home, Services, Why Us, Contact;
          "Free Quote" button on right; hamburger menu on mobile.
      ====================================================================== */}
      <header className="sticky top-0 z-50 w-full bg-[#050B16]/90 backdrop-blur-md border-b border-[#C9D6E6]/15 shadow-[0_4px_24px_rgba(5,11,22,0.75)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo on the left */}
          <a
            href="#home"
            aria-label="Dusty Details WA Home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9BFF] rounded-lg"
          >
            <BrandLogo variant="navbar" />
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm font-medium text-[#C9D6E6] hover:text-[#7FD0FF] transition-colors whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-[#C9D6E6] hover:text-[#7FD0FF] transition-colors whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-[#C9D6E6] hover:text-[#7FD0FF] transition-colors whitespace-nowrap"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[#C9D6E6] hover:text-[#7FD0FF] transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Desktop "Free Quote" CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="btn-primary-glow px-5 py-2.5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD0FF]"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-[#C9D6E6] hover:text-white hover:bg-[#0A1A33] border border-[#C9D6E6]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9BFF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden bg-[#050B16]/98 border-b border-[#C9D6E6]/20 px-4 pt-3 pb-6 space-y-2"
          >
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[#C9D6E6] hover:text-white hover:bg-[#0A1A33] transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[#C9D6E6] hover:text-white hover:bg-[#0A1A33] transition-colors"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[#C9D6E6] hover:text-white hover:bg-[#0A1A33] transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[#C9D6E6] hover:text-white hover:bg-[#0A1A33] transition-colors"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary-glow flex items-center justify-center w-full px-5 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-xs"
              >
                Free Quote
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {/* =====================================================================
            2. HERO SECTION
            Floating translucent soap-bubble circles animating slowly in background.
            Headline: "Restore Your Car's Shine, Inside & Out"
            Subtext: "Professional mobile auto detailing in Byford and surrounding suburbs. We come to you."
            Buttons: "Get a Free Quote" (primary, blue glow) & "Message Us on Instagram" (outline)
        ====================================================================== */}
        <section
          id="home"
          className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#0A1A33] via-[#071224] to-[#050B16] border-b border-[#C9D6E6]/10"
        >
          {/* Ambient Electric Blue Radial Spotlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(46,155,255,0.22)_0%,rgba(10,26,51,0.05)_55%,transparent_100%)]"
          />

          {/* Pure CSS Floating Translucent Soap-Bubble Circles */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            {HERO_BUBBLES.map((bubble, idx) => (
              <span
                key={idx}
                className={`soap-bubble ${bubble.size} ${bubble.anim}`}
                style={{
                  top: bubble.top,
                  left: bubble.left,
                  animationDelay: bubble.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Hero Logo Badge */}
            <div className="mb-8 flex justify-center">
              <BrandLogo variant="hero" />
            </div>

            {/* Hero Location Kicker */}
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#7FD0FF] mb-4">
              Byford &amp; Surrounds · Perth, Western Australia
            </p>

            {/* Hero Headline (PLACEHOLDER: Main Hero Headline) */}
            <h1
              className="font-heading font-black uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] max-w-4xl mx-auto mb-6 drop-shadow-[0_4px_24px_rgba(5,11,22,0.9)]"
              style={{ textWrap: 'balance' }}
            >
              Restore Your Car's Shine, Inside &amp; Out
            </h1>

            {/* Hero Subtext (PLACEHOLDER: Hero Subtext) */}
            <p className="text-base sm:text-lg lg:text-xl text-[#C9D6E6] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Professional mobile auto detailing in Byford and surrounding suburbs. We come to you.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="btn-primary-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD0FF]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD0FF]"
              >
                <Instagram className="w-4 h-4 text-[#7FD0FF]" />
                <span>Message Us on Instagram</span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. SERVICES SECTION (6 cards with icons)
            Exterior Wash & Hand Dry, Interior Deep Clean, Full Detail (Inside & Out),
            Paint Polish & Wax/Sealant, Headlight Restoration, Pet Hair & Stain Removal.
            One-line descriptions, no prices, each with "Enquire for a free quote".
        ====================================================================== */}
        <section
          id="services"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#050B16] to-[#0A1A33] border-b border-[#C9D6E6]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#7FD0FF] mb-2">
                Mobile Detailing Packages
              </p>
              <h2 className="font-heading font-extrabold uppercase text-2xl sm:text-4xl tracking-wide text-white mb-4">
                Our Detailing Services
              </h2>
              <p className="text-[#C9D6E6] text-sm sm:text-base leading-relaxed">
                Tailored care for daily drivers, family SUVs, 4x4s and weekend cruisers. Every service is performed on-site at your home or workplace.
              </p>
            </div>

            {/* 6 Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => {
                const IconComponent = service.icon;
                return (
                  <article
                    key={service.id}
                    className="glossy-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#2E9BFF]/15 border border-[#2E9BFF]/40 flex items-center justify-center mb-5 shadow-[0_0_16px_rgba(46,155,255,0.25)]">
                        <IconComponent className="w-6 h-6 text-[#7FD0FF]" />
                      </div>

                      <h3 className="font-heading font-bold uppercase text-lg tracking-wide text-white mb-2.5">
                        {service.title}
                      </h3>

                      {/* PLACEHOLDER: One-line service description (no prices) */}
                      <p className="text-sm text-[#C9D6E6] leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#C9D6E6]/10">
                      <button
                        type="button"
                        onClick={() => handleSelectServiceAndScroll(service.title)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#7FD0FF] hover:text-white transition-colors group cursor-pointer focus:outline-none focus-visible:underline"
                      >
                        <span>Enquire for a free quote</span>
                        <ArrowRight className="w-4 h-4 text-[#2E9BFF] transition-transform duration-150 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. WHY CHOOSE US SECTION (4 points with icons)
            We Come To You, Quality Products & Attention to Detail,
            Local Byford Business, Free No-Obligation Quotes.
        ====================================================================== */}
        <section
          id="why-us"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#0A1A33] to-[#050B16] border-b border-[#C9D6E6]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#7FD0FF] mb-2">
                The Dusty Details Difference
              </p>
              <h2 className="font-heading font-extrabold uppercase text-2xl sm:text-4xl tracking-wide text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-[#C9D6E6] text-sm sm:text-base leading-relaxed">
                Glossy finishes, reliable mobile convenience and genuine pride in every vehicle we detail.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE_US.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="glossy-card rounded-2xl p-6 sm:p-7 flex flex-col items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2E9BFF]/15 border border-[#7FD0FF]/35 flex items-center justify-center mb-5 shadow-[0_0_16px_rgba(46,155,255,0.2)]">
                      <IconComponent className="w-6 h-6 text-[#7FD0FF]" />
                    </div>
                    <h3 className="font-heading font-bold uppercase text-base sm:text-lg tracking-wide text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#C9D6E6] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. SERVICE AREA SECTION
            "Servicing Byford and surrounding suburbs" with suburb chips:
            (Byford, Mundijong, Armadale, Serpentine, Cardup, Oakford, Darling Downs, Jarrahdale)
            and note: "Not sure if we cover you? Just ask!"
        ====================================================================== */}
        <section
          id="service-area"
          className="py-20 sm:py-24 bg-[#0A1A33] border-b border-[#C9D6E6]/10"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glossy-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              {/* Subtle top highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#2E9BFF]/15 blur-3xl rounded-full"
              />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2E9BFF]/15 border border-[#7FD0FF]/40 mb-5 shadow-[0_0_18px_rgba(46,155,255,0.3)]">
                <MapPin className="w-6 h-6 text-[#7FD0FF]" />
              </div>

              <h2 className="font-heading font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-wide text-white mb-3">
                Servicing Byford and surrounding suburbs
              </h2>

              <p className="text-sm sm:text-base text-[#C9D6E6] max-w-xl mx-auto mb-8">
                Select your suburb below to pre-fill your location in our free quote request form:
              </p>

              {/* Suburb Chips (Interactive buttons that pre-fill the quote form suburb) */}
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto mb-8">
                {SERVICE_SUBURBS.map((suburb) => {
                  const isSelected = formData.suburb.toLowerCase() === suburb.toLowerCase();
                  return (
                    <button
                      key={suburb}
                      type="button"
                      onClick={() => handleSelectSuburb(suburb)}
                      className={`px-4 py-2.5 rounded-xl font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-150 cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#2E9BFF] text-white border border-[#7FD0FF] shadow-[0_0_18px_rgba(46,155,255,0.6)] -translate-y-0.5'
                          : 'bg-[#050B16]/85 text-[#C9D6E6] border border-[#C9D6E6]/30 hover:border-[#7FD0FF] hover:text-white hover:bg-[#2E9BFF]/20 hover:-translate-y-0.5 hover:shadow-[0_0_14px_rgba(46,155,255,0.35)]'
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#7FD0FF]" />
                        {suburb}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Required Note */}
              <p className="text-sm sm:text-base text-[#C9D6E6]">
                Not sure if we cover you?{' '}
                <a
                  href="#contact"
                  className="font-semibold text-[#7FD0FF] hover:text-white underline underline-offset-4 transition-colors"
                >
                  Just ask!
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. GALLERY SECTION
            3-column grid of 6 placeholder boxes labelled "Before / After photo",
            plus a "See more on Instagram" button linking to https://www.instagram.com/dustydetailswa/
        ====================================================================== */}
        <section
          id="gallery"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#050B16] to-[#0A1A33] border-b border-[#C9D6E6]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#7FD0FF] mb-2">
                Real Transformations
              </p>
              <h2 className="font-heading font-extrabold uppercase text-2xl sm:text-4xl tracking-wide text-white mb-4">
                Recent Work Gallery
              </h2>
              <p className="text-[#C9D6E6] text-sm sm:text-base leading-relaxed">
                Check out our latest transformations across Byford and Perth. Click any card to preview the finish.
              </p>
            </div>

            {/* 3-Column Grid of 6 Placeholder Boxes labelled "Before / After photo" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {GALLERY_ITEMS.map((item) => {
                const viewMode = activeGalleryView[item.id] || 'split';
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleGalleryCardView(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleGalleryCardView(item.id);
                      }
                    }}
                    aria-label={`${item.caption} - Before / After photo`}
                    className="glossy-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9BFF]"
                  >
                    {/* PLACEHOLDER PHOTO BOX: Replace with <img> when client photos are supplied */}
                    <div className="relative aspect-[4/3] w-full bg-[#050B16] overflow-hidden flex items-center justify-center border-b border-[#C9D6E6]/15">
                      {item.imageSrc ? (
                        <img
                          src={item.imageSrc}
                          alt={`${item.caption} - Before / After photo`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          {/* Interactive Split Visual Background simulating Before (Dusty) vs After (Glossy Navy/Blue) */}
                          <div className="absolute inset-0 flex">
                            {viewMode === 'split' && (
                              <div className="w-1/2 h-full bg-gradient-to-br from-[#161F30] to-[#0B111C] border-r border-[#7FD0FF]/40 flex flex-col justify-between p-3.5">
                                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#C9D6E6]/75">
                                  Before
                                </span>
                              </div>
                            )}
                            <div
                              className={`${
                                viewMode === 'split' ? 'w-1/2' : 'w-full'
                              } h-full bg-gradient-to-br from-[#0F2C59] via-[#0A1A33] to-[#050B16] flex flex-col justify-between p-3.5 items-end transition-all duration-200`}
                            >
                              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#7FD0FF]">
                                {viewMode === 'split' ? 'After' : 'Full Gloss Finish'}
                              </span>
                            </div>
                          </div>

                          {/* Center Label Box: Explicitly labelled "Before / After photo" */}
                          <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-4 rounded-xl bg-[#050B16]/85 border border-[#C9D6E6]/25 shadow-[0_0_20px_rgba(46,155,255,0.2)] group-hover:border-[#7FD0FF]/60 transition-colors">
                            <Camera className="w-6 h-6 text-[#7FD0FF] mb-2" />
                            {/* PLACEHOLDER LABEL: Keep exact label "Before / After photo" */}
                            <span className="font-heading font-bold uppercase tracking-wider text-xs sm:text-sm text-white">
                              Before / After photo
                            </span>
                            <span className="text-[11px] text-[#C9D6E6] mt-1">
                              {item.tag}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Footer Caption */}
                    <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#050B16]/60">
                      <p className="text-xs sm:text-sm font-medium text-[#C9D6E6] truncate">
                        {item.caption}
                      </p>
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#7FD0FF] shrink-0">
                        {viewMode === 'split' ? 'Split View' : 'After View'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* "See more on Instagram" Button */}
            <div className="text-center">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-xs sm:text-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD0FF]"
              >
                <Instagram className="w-4 h-4 text-[#7FD0FF]" />
                <span>See more on Instagram</span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. CONTACT / FREE QUOTE SECTION
            Form with Name, Phone, Suburb, Vehicle make/model, Service dropdown,
            Message, and "Request Free Quote" button.
            Frontend only: on submit, show "Thanks! We'll be in touch shortly."
            Beside it: Instagram link, phone placeholder "0000 000 000",
            and email placeholder "hello@dustydetailswa.com.au".
        ====================================================================== */}
        <section
          id="contact"
          className="py-20 sm:py-24 bg-gradient-to-b from-[#0A1A33] to-[#050B16]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#7FD0FF] mb-2">
                Book Your Detail
              </p>
              <h2 className="font-heading font-extrabold uppercase text-2xl sm:text-4xl tracking-wide text-white mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-[#C9D6E6] text-sm sm:text-base leading-relaxed">
                Tell us a little about your vehicle and location, and we’ll get back to you with a free, no-obligation quote.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Quote Form Column (7 cols on desktop) */}
              <div className="lg:col-span-7 glossy-card rounded-2xl p-6 sm:p-8 lg:p-10">
                {formSubmitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="py-12 px-4 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#2E9BFF]/20 border border-[#7FD0FF]/50 flex items-center justify-center mx-auto shadow-[0_0_24px_rgba(46,155,255,0.4)]">
                      <CheckCircle2 className="w-9 h-9 text-[#7FD0FF]" />
                    </div>

                    {/* Required Submission Message */}
                    <h3 className="font-heading font-extrabold uppercase text-xl sm:text-2xl text-white tracking-wide">
                      Thanks! We'll be in touch shortly.
                    </h3>

                    <p className="text-sm sm:text-base text-[#C9D6E6] max-w-md mx-auto">
                      We have received your enquiry for your{' '}
                      <span className="text-white font-medium">
                        {formData.vehicle || 'vehicle'}
                      </span>{' '}
                      ({formData.service}) and will contact you soon.
                    </p>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            suburb: '',
                            vehicle: '',
                            service: SERVICES[2].title,
                            message: '',
                          });
                        }}
                        className="btn-outline-glow px-6 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-xs cursor-pointer"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6] mb-2"
                        >
                          Name *
                        </label>
                        <input
                          id="quote-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Your full name"
                          className="w-full rounded-xl bg-[#050B16]/90 border border-[#C9D6E6]/25 px-4 py-3 text-sm text-white placeholder-[#C9D6E6]/45 focus:outline-none focus:border-[#2E9BFF] focus:ring-1 focus:ring-[#2E9BFF] transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6] mb-2"
                        >
                          Phone *
                        </label>
                        <input
                          id="quote-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="0400 000 000"
                          className="w-full rounded-xl bg-[#050B16]/90 border border-[#C9D6E6]/25 px-4 py-3 text-sm text-white placeholder-[#C9D6E6]/45 focus:outline-none focus:border-[#2E9BFF] focus:ring-1 focus:ring-[#2E9BFF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Suburb */}
                      <div>
                        <label
                          htmlFor="quote-suburb"
                          className="block text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6] mb-2"
                        >
                          Suburb *
                        </label>
                        <input
                          id="quote-suburb"
                          name="suburb"
                          type="text"
                          required
                          value={formData.suburb}
                          onChange={handleFormChange}
                          placeholder="e.g. Byford"
                          className="w-full rounded-xl bg-[#050B16]/90 border border-[#C9D6E6]/25 px-4 py-3 text-sm text-white placeholder-[#C9D6E6]/45 focus:outline-none focus:border-[#2E9BFF] focus:ring-1 focus:ring-[#2E9BFF] transition-colors"
                        />
                      </div>

                      {/* Vehicle make/model */}
                      <div>
                        <label
                          htmlFor="quote-vehicle"
                          className="block text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6] mb-2"
                        >
                          Vehicle Make / Model *
                        </label>
                        <input
                          id="quote-vehicle"
                          name="vehicle"
                          type="text"
                          required
                          value={formData.vehicle}
                          onChange={handleFormChange}
                          placeholder="e.g. Toyota Hilux / Mazda CX-5"
                          className="w-full rounded-xl bg-[#050B16]/90 border border-[#C9D6E6]/25 px-4 py-3 text-sm text-white placeholder-[#C9D6E6]/45 focus:outline-none focus:border-[#2E9BFF] focus:ring-1 focus:ring-[#2E9BFF] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label
                        htmlFor="quote-service"
                        className="block text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6] mb-2"
                      >
                        Service
                      </label>
                      <select
                        id="quote-service"
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full rounded-xl bg-[#050B16]/90 border border-[#C9D6E6]/25 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2E9BFF] focus:ring-1 focus:ring-[#2E9BFF] transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#050B16] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Custom / Multiple Services" className="bg-[#050B16] text-white">
                          Custom / Multiple Services
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="quote-message"
                        className="block text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="quote-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Any extra details about your car's condition, pet hair, stains or preferred day..."
                        className="w-full rounded-xl bg-[#050B16]/90 border border-[#C9D6E6]/25 px-4 py-3 text-sm text-white placeholder-[#C9D6E6]/45 focus:outline-none focus:border-[#2E9BFF] focus:ring-1 focus:ring-[#2E9BFF] transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary-glow w-full py-4 px-6 rounded-xl font-heading font-bold uppercase tracking-wider text-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7FD0FF]"
                    >
                      Request Free Quote
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Contact Info Column Beside Form (5 cols on desktop) */}
              <aside className="lg:col-span-5 space-y-6">
                <div className="glossy-card rounded-2xl p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="font-heading font-bold uppercase text-lg sm:text-xl tracking-wide text-white mb-2">
                      Direct Contact Details
                    </h3>
                    <p className="text-sm text-[#C9D6E6] leading-relaxed">
                      Prefer to reach out directly or send photos of your vehicle on Instagram? Get in touch anytime.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-[#C9D6E6]/15">
                    {/* Instagram Link */}
                    <a
                      href={CONTACT_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#050B16]/80 border border-[#C9D6E6]/20 hover:border-[#7FD0FF] transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#2E9BFF]/15 border border-[#2E9BFF]/40 flex items-center justify-center shrink-0">
                        <Instagram className="w-5 h-5 text-[#7FD0FF]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6]">
                          Instagram
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#7FD0FF] transition-colors truncate">
                          {CONTACT_INFO.instagramHandle}
                        </p>
                      </div>
                    </a>

                    {/* PLACEHOLDER PHONE: "0000 000 000" */}
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#050B16]/80 border border-[#C9D6E6]/20 hover:border-[#7FD0FF] transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#2E9BFF]/15 border border-[#2E9BFF]/40 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#7FD0FF]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6]">
                          Phone
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#7FD0FF] transition-colors tabular-nums">
                          {CONTACT_INFO.phone}
                        </p>
                      </div>
                    </a>

                    {/* PLACEHOLDER EMAIL: "hello@dustydetailswa.com.au" */}
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#050B16]/80 border border-[#C9D6E6]/20 hover:border-[#7FD0FF] transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#2E9BFF]/15 border border-[#2E9BFF]/40 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#7FD0FF]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#C9D6E6]">
                          Email
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#7FD0FF] transition-colors truncate">
                          {CONTACT_INFO.email}
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Mobile Detailing Requirements Note */}
                  <div className="p-4 rounded-xl bg-[#0A1A33]/70 border border-[#2E9BFF]/25 text-xs text-[#C9D6E6] leading-relaxed">
                    <span className="font-heading font-bold uppercase text-[#7FD0FF] block mb-1">
                      Mobile Service Note
                    </span>
                    We come directly to your driveway or workplace across Byford and surrounding suburbs. Just let us know if power and water access are available on-site.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          8. FOOTER
          Small logo, "© Dusty Details WA – Mobile Car Detailing Perth",
          Instagram link.
      ====================================================================== */}
      <footer className="bg-[#050B16] border-t border-[#C9D6E6]/15 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Small Logo */}
          <a
            href="#home"
            aria-label="Dusty Details WA Home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9BFF] rounded-lg"
          >
            <BrandLogo variant="footer" />
          </a>

          {/* Copyright Text */}
          <p className="text-xs sm:text-sm text-[#C9D6E6] text-center">
            © Dusty Details WA – Mobile Car Detailing Perth
          </p>

          {/* Instagram Link */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#7FD0FF] hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

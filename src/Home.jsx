import { useState, useEffect, useRef } from "react";
import image1 from "./assets/images/image1.jpeg";
import image2 from "./assets/images/image2.jpeg";
import image3 from "./assets/images/image3.jpeg";
import image4 from "./assets/images/image4.jpeg";
import image5 from "./assets/images/image5.jpeg";

import bhk1 from './assets/images/bhk1.jpeg';
import bhk2 from './assets/images/bhk2.jpeg'
import bhk3 from './assets/images/bhk3.jpeg'
import bhk4 from './assets/images/bhk4.jpeg'
import bhk5 from './assets/images/bhk5.jpeg'
import bhk6 from './assets/images/bhk6.jpeg'
import bhk7 from './assets/images/bhk7.jpeg'
import bhk8 from './assets/images/bhk8.jpeg'
import bhk9 from './assets/images/bhk9.jpeg'
import bhk10 from './assets/images/bhk10.jpeg'

import rk1 from './assets/images/rk1.jpeg'
import rk2 from './assets/images/rk2.jpeg'
import rk3 from './assets/images/rk3.jpeg'
import rk4 from './assets/images/rk4.jpeg'

import vbhk1 from "./assets/images/vbhk1.mp4";
import vbhk2 from "./assets/images/vbhk2.mp4";
import vbhk3 from "./assets/images/vbhk3.mp4";

import vrk1 from './assets/images/vrk1.mp4'
import vrk2 from './assets/images/vrk2.mp4'


/* ─── Design tokens ─────────────────────────────────────────── */
const GOLD      = "#C9A84C";
const GOLD_L    = "#F5D78E";
const GOLD_DIM  = "#8B6914";
const BLACK     = "#0A0A0A";
const GOLD_EMOJI = "grayscale(1) brightness(0.8) sepia(1) hue-rotate(-12deg) saturate(3.2)";

/* WhatsApp number that receives enquiries from the "Send Enquiry" button.
   Format: country code + number, no +, no spaces, no leading zeros. */
const WHATSAPP_NUMBER = "918368380618"; // +91 8368380618

/* ─── Responsive hook ────────────────────────────────────────── */
function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 640, isTablet: w < 1024, w };
}

/* ─── Data ───────────────────────────────────────────────────── */
const rooms = [
  {
    id: 1,
    name: "1 BHK",
    tag: "Most Popular",
    price: "₹22K",
    desc: "A complete home-like experience — fully furnished with premium amenities, private balcony, and all the comforts you need for a long or short stay.",
    features: ["Fridge","Washing Machine","AC","Couch","Table & Chair","Balcony","Almira","Bed with Mattress"],
    gradient: "linear-gradient(135deg,#1a1200 0%,#2a1f00 100%)",
    emoji: "🛏",
    highlight: true,
    // Add real URLs here when photos/video are ready. Leave empty to show "coming soon".
    fit: "contain",
    images: [bhk1,bhk2,bhk3,bhk4,bhk5,bhk6,bhk7,bhk8,bhk9,bhk10],
    video: [vbhk1,vbhk2,vbhk3],
  },
  {
    id: 2,
    name: "1 RK",
    tag: "Studio",
    price: "₹15K",
    desc: "A cosy, self-contained room with everything essential — ideal for solo traveller stays seeking comfort without compromise.",
    features: ["Fridge","Bed with Mattress","AC","Almira","Table & Chair"],
    gradient: "linear-gradient(135deg,#0d0d1a 0%,#1a1a2e 100%)",
    emoji: "🛋",
    highlight: false,
    fit: "contain",
    images: [rk1,rk2,rk3,rk4],
    video: [vrk1,vrk2],
  },
];

const amenities = [
  { icon: "❄️", label: "Air Conditioner",   desc: "Air-conditioned rooms help maintain a comfortable indoor temperature, providing relief from heat and humidity throughout the year."   },
  { icon: "🧊", label: "Refrigerator",        desc: "In every room a refrigerator is provided for convenient storage of food, beverages, and other perishable items."                },
  { icon: "👕", label: "Washing Machine",     desc: "In-room laundry (1 BHK). A washing machine is available for convenient in-house laundry, making it easy to wash and maintain clothes."      },
  { icon: "🛏", label: "Beds & Mattresses",   desc: "Beds and mattresses are provided to ensure a comfortable sleeping arrangement and make the space ready for immediate occupancy."     },
  { icon: "🔒", label: "24/7 Biometric Security",   desc: "Biometric access-controlled gates providing an additional layer of security and controlled entry for residents."    },
  { icon: "💧", label: "Purified Drinking Water",  desc: "Clean and safe drinking water is provided daily to ensure the health and well-being of residents."         },
  {icon: "🗄️", label: "Cupboard", desc: "A cupboard is provided for convenient storage of clothing, personal belongings, and everyday essentials."},
  {icon: "🛋️", label: "Couch", desc: "A couch is available for comfortable seating, providing a dedicated space for relaxation, reading, or entertaining guests."},
  {icon: "🪑", label: "Table & Chair", desc:"A table and chair are provided to support daily activities such as dining, studying, working, or organizing personal items."},
  {icon:"🔥",label:"PNG Gas Connection",desc:"A piped natural gas (PNG) connection is available for a reliable and continuous cooking fuel supply without the need for gas cylinder replacements."},
  {icon:"⚡",label:"Individual BSES Meter",desc:"Each unit is equipped with an individual BSES electricity meter, allowing residents to monitor and pay for their actual power consumption independently."},
  {icon:"🚿",label:"Geyser",desc:"A geyser is installed to provide a consistent supply of hot water for bathing and everyday household needs."},
  {icon:"📶",label:"High-Speed WiFi",desc:"High-speed WiFi is available throughout the property, ensuring reliable internet connectivity for work, streaming, and communication."},
  {icon:"🍳",label:"Gas Stove",desc:"A gas stove is provided for convenient meal preparation and everyday cooking requirements."},
  {icon:"🌤️",label:"Terrace Access",desc:"Residents have access to the terrace, offering additional open space for fresh air, relaxation, and daily use."},
  {icon:"🛗",label:"Lift",desc:"Lift access is available within the building, providing convenient movement between floors."},
  {icon:"🛠️",label:"Dedicated Caretaker",desc:"A caretaker is available to assist with property-related queries, maintenance coordination, and resident support when required."},
  {icon:"🅿️",label:"Prime Location",desc:"The property is strategically located near key amenities and transportation hubs, ensuring convenience and accessibility for residents."},
];

const galleryItems = [
  { image: image1, span: 2 },
  { image: image2, span: 1 },
  { image: image3, span: 1 },
  { image: image4, span: 2,fit:"contain" },
  { image: image5, span: 1 },
];

/* ─── Neighbourhood data (GEO) ───────────────────────────────── */
const neighbourhood = [
  {
    category: "Metro Connectivity",
    icon: "🚇",
    tagline: "Seamless access to Delhi's metro network",
    places: [
      { name: "Palam Metro Station", detail: "Magenta Line", time: "10–15 min by auto" },
      { name: "Sector 9 Metro Station", detail: "Blue Line", time: "10–15 min by auto" },
    ],
  },
  {
    category: "Dining & Restaurants",
    icon: "🍽️",
    tagline: "Popular eateries just minutes away",
    places: [
      { name: "Kali Ghata", detail: "Local favourite", time: "Nearby" },
      { name: "Prism Restaurant", detail: "Multi-cuisine", time: "Nearby" },
      { name: "Xero Degrees", detail: "Café & desserts", time: "Nearby" },
    ],
  },
  {
    category: "Fast Food & Cafés",
    icon: "☕",
    tagline: "Your go-to quick bites at your doorstep",
    places: [
      { name: "Pizza Hut", detail: "Fast food", time: "5 min walk" },
      { name: "Domino's Pizza", detail: "Fast food", time: "5 min walk" },
      { name: "Coffee Houses", detail: "Cafés", time: "5 min walk" },
    ],
  },
  {
    category: "Fitness & Gyms",
    icon: "🏋️",
    tagline: "Stay fit without the commute",
    places: [
      { name: "Gold's Gym", detail: "Premium fitness", time: "5 min walk" },
      { name: "Vault Gym", detail: "Strength & conditioning", time: "5 min walk" },
      { name: "Cult.fit", detail: "Group workouts", time: "5 min walk" },
      { name: "Athlete Gym", detail: "Sports training", time: "5 min walk" },
    ],
  },
  {
    category: "Shopping",
    icon: "🛍️",
    tagline: "Retail therapy without leaving the neighbourhood",
    places: [
      { name: "Nike", detail: "Sportswear", time: "5 min walk" },
      { name: "Cantabil", detail: "Fashion", time: "5 min walk" },
      { name: "Bata", detail: "Footwear", time: "5 min walk" },
      { name: "Reliance Trends", detail: "Apparel & lifestyle", time: "5 min walk" },
    ],
  },
];

/* ─── FAQ data ───────────────────────────────────────────────── */
const faqs = [
  {
    q: "Where exactly is Om Niramayam located?",
    a: "We are at D1/36,37, Ramphal Chowk Road, Palam Extension, Dwarka Sector 7, New Delhi. The property is well-connected — Palam Metro Station (Magenta Line) is 10–15 minutes by auto, and Sector 9 Metro Station (Blue Line) is equally accessible.",
  },
  {
    q: "What room types do you offer and what are the prices?",
    a: "We offer two room types: a fully furnished 1 BHK at ₹22,000/month — our most popular option with a private balcony, washing machine, and full furniture — and a cosy 1 RK studio at ₹15,000/month, ideal for solo stays.",
  },
  {
    q: "Are gyms and fitness centres nearby?",
    a: "Yes! Gold's Gym, Vault Gym, Cult.fit, and Athlete Gym are all within a 5-minute walk from the property. You won't need to arrange any transport to stay active.",
  },
  {
    q: "What food options are close to the property?",
    a: "The neighbourhood has excellent dining options. Kali Ghata, Prism, and Xero Degrees are popular local restaurants. For quick bites, Pizza Hut, Domino's, and several coffee houses are all within 5 minutes on foot.",
  },
  {
    q: "Is the area good for daily shopping?",
    a: "Absolutely. Nike, Cantabil, Bata, and Reliance Trends are all within a 5-minute walk, making daily errands and shopping very convenient.",
  },
  {
    q: "What security measures are in place?",
    a: "The property has 24/7 biometric gated security with access-controlled entry. A dedicated caretaker is also available for resident support and maintenance queries.",
  },
  {
    q: "Are utilities included in the rent?",
    a: "Electricity is billed separately via an individual BSES meter for each unit so you only pay for what you use. The PNG gas connection and drinking water are part of the amenities provided.",
  },
  {
    q: "Is high-speed internet available?",
    a: "Yes, high-speed WiFi is available throughout the property, suitable for remote work, streaming, and video calls.",
  },
];

/* ─── Golden particles canvas ────────────────────────────────── */
function GoldenParticles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let id;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      spd: Math.random() * 0.35 + 0.1,
      op: Math.random() * 0.55 + 0.1,
      dx: (Math.random() - 0.5) * 0.25,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.op})`;
        ctx.fill();
        p.y -= p.spd; p.x += p.dx; p.op -= 0.0007;
        if (p.y < 0 || p.op <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 5;
          p.op = Math.random() * 0.5 + 0.1;
          p.r = Math.random() * 1.6 + 0.4;
        }
      }
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} role="presentation" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }} />;
}

/* ─── Navbar ─────────────────────────────────────────────────── */
function NavBar() {
  const { isMobile } = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Rooms", "Amenities", "Neighbourhood", "Gallery", "FAQ", "Contact"];
  return (
    <nav aria-label="Primary" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: isMobile ? "14px 20px" : "16px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled || menuOpen ? "rgba(10,10,10,0.97)" : "transparent",
      borderBottom: scrolled || menuOpen ? `1px solid rgba(201,168,76,0.2)` : "none",
      backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
      transition: "background 0.4s, border-bottom 0.4s",
      flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span aria-hidden="true" style={{ fontSize: 20, filter: `drop-shadow(0 0 4px ${GOLD})` }}>ॐ</span>
        <div>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 13 : 16, fontWeight: 700, color: GOLD, letterSpacing: 2, lineHeight: 1 }}>OM NIRAMAYAM</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 9, color: GOLD_DIM, letterSpacing: 3 }}>DWARKA · NEW DELHI</div>
        </div>
      </div>

      {!isMobile && (
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: 2, color: "rgba(245,215,142,0.7)", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = GOLD_L}
              onMouseLeave={e => e.target.style.color = "rgba(245,215,142,0.7)"}>
              {item.toUpperCase()}
            </a>
          ))}
          <a href="#contact"
            style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: 2, padding: "10px 22px", border: `1px solid ${GOLD}`, color: GOLD, textDecoration: "none", transition: "all 0.25s" }}
            onMouseEnter={e => { e.target.style.background = GOLD; e.target.style.color = BLACK; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = GOLD; }}>
            BOOK NOW
          </a>
        </div>
      )}

      {isMobile && (
        <button onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ background: "none", border: `1px solid rgba(201,168,76,0.4)`, padding: "6px 10px", cursor: "pointer", color: GOLD, fontFamily: "'Cinzel',serif", fontSize: 12, letterSpacing: 1 }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {isMobile && menuOpen && (
        <div id="mobile-nav-menu" style={{ width: "100%", display: "flex", flexDirection: "column", borderTop: `1px solid rgba(201,168,76,0.12)`, marginTop: 12, paddingTop: 12, gap: 4 }}>
          {[...links, "Book Now"].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Cinzel',serif", fontSize: 12, letterSpacing: 2, color: item === "Book Now" ? GOLD : "rgba(245,215,142,0.7)", textDecoration: "none", padding: "12px 4px", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Section heading ────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 14 }}>
        <div style={{ height: 1, width: 50, background: `linear-gradient(to right,transparent,${GOLD})` }} />
        <span style={{ color: GOLD_DIM, fontSize: 10, fontFamily: "'Cinzel',serif" }}>◆</span>
        <div style={{ height: 1, width: 50, background: `linear-gradient(to left,transparent,${GOLD})` }} />
      </div>
      <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(24px,5vw,44px)", fontWeight: 400, color: GOLD_L, letterSpacing: "0.1em", margin: 0 }}>
        {children}
      </h2>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
function HeroSection() {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden", padding: isMobile ? "100px 24px 60px" : "0 24px",
      background: `radial-gradient(ellipse at 50% 30%,#1a1200 0%,${BLACK} 60%)`,
    }}>
      <GoldenParticles />
      <div aria-hidden="true" style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%", maxWidth: 720 }}>
        <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ height: 1, width: 60, background: `linear-gradient(to right,transparent,${GOLD})` }} />
          <span style={{ color: GOLD, fontSize: 9, letterSpacing: 5, fontFamily: "'Cinzel',serif" }}>DWARKA SECTOR 7 · NEW DELHI</span>
          <div style={{ height: 1, width: 60, background: `linear-gradient(to left,transparent,${GOLD})` }} />
        </div>

        <div aria-hidden="true" style={{ position: "relative", width: 100, height: 100, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: `radial-gradient(circle,rgba(201,168,76,0.25) 0%,transparent 70%)`, animation: "omPulse 2s ease-in-out infinite" }} />
          <div style={{ width: 88, height: 88, borderRadius: "50%", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", background: `radial-gradient(circle at center,#1a1200 0%,${BLACK} 100%)`, boxShadow: `0 0 28px rgba(201,168,76,0.4),0 0 56px rgba(201,168,76,0.12)`, position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 46, lineHeight: 1, filter: `drop-shadow(0 0 7px ${GOLD})` }}>ॐ</span>
          </div>
        </div>

        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(36px,9vw,84px)", fontWeight: 400, color: GOLD_L, letterSpacing: "0.1em", margin: 0, lineHeight: 1.1, textShadow: `0 0 40px rgba(201,168,76,0.25)` }}>
          Om Niramayam
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(15px,2.5vw,20px)", color: "rgba(245,215,142,0.6)", margin: isMobile ? "14px 0 10px" : "14px 0 10px", letterSpacing: 1.5 }}>
          Where every stay is a sacred homecoming
        </p>
        {/* GEO tagline */}
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(12px,1.8vw,15px)", color: "rgba(245,215,142,0.38)", margin: isMobile ? "0 0 28px" : "0 0 36px", letterSpacing: 1 }}>
          Premium furnished flats in Dwarka Sector 7 · Near Palam & Sector 9 Metro · Surrounded by top gyms, restaurants & shopping
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#rooms" style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: 3, padding: isMobile ? "14px 28px" : "15px 40px", background: `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)`, color: BLACK, textDecoration: "none", fontWeight: 700, boxShadow: `0 4px 28px rgba(201,168,76,0.3)` }}>EXPLORE ROOMS</a>
          <a href="#neighbourhood" style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: 3, padding: isMobile ? "14px 28px" : "15px 40px", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, textDecoration: "none", background: "transparent" }}>EXPLORE AREA</a>
        </div>

        <div style={{ display: "flex", gap: isMobile ? 20 : 40, justifyContent: "center", marginTop: isMobile ? 48 : 64, paddingTop: isMobile ? 32 : 44, borderTop: "1px solid rgba(201,168,76,0.12)", flexWrap: "wrap" }}>
          {[["2", "Room Types"], ["4.8★", "Guest Rating"], ["24/7", "Security"], ["5 min", "To Gyms & Shops"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 22 : 28, color: GOLD, fontWeight: 700, lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: "rgba(245,215,142,0.45)", letterSpacing: 2, marginTop: 4 }}>{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, opacity: 0.4 }}>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 4, color: GOLD }}>SCROLL</span>
        <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom,${GOLD},transparent)`, animation: "scrollLine 1.6s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

/* ─── Room Modal ─────────────────────────────────────────────── */
function RoomModal({ room, onClose, isMobile }) {
  const [activeImg, setActiveImg] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  // "photos" | "video" — the <video> element only mounts (and only starts downloading)
  // once the user actively picks this tab, instead of loading on modal open.
  const [tab, setTab] = useState("photos");
  const videoRef = useRef(null);

  const hasImages = room.images && room.images.length > 0;
  // room.video can be a single string OR an array of clips — normalize to an array either way.
  const videoList = Array.isArray(room.video) ? room.video.filter(Boolean) : (room.video ? [room.video] : []);
  const hasVideo = videoList.length > 0;

  // If there are no photos at all, default straight to the video tab.
  useEffect(() => {
    if (!hasImages && hasVideo) setTab("video");
  }, [hasImages, hasVideo]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${room.name} details`}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.86)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000, padding: isMobile ? 16 : 40,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: BLACK, border: `1px solid ${GOLD}`,
          maxWidth: 760, width: "100%", maxHeight: "90vh", overflowY: "auto",
          boxShadow: `0 0 0 1px rgba(201,168,76,0.15),0 30px 80px rgba(0,0,0,0.7),0 0 50px rgba(201,168,76,0.15)`,
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          padding: isMobile ? "22px 20px 0" : "30px 36px 0",
        }}>
          <div>
            <div style={{ display: "inline-block", padding: "4px 12px", border: "1px solid rgba(201,168,76,0.35)", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: GOLD, marginBottom: 12 }}>
              {room.tag.toUpperCase()}
            </div>
            <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 20 : 26, color: GOLD_L, margin: 0, letterSpacing: 1 }}>
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close room details"
            style={{
              background: "transparent", border: `1px solid rgba(201,168,76,0.4)`,
              color: GOLD, width: 34, height: 34, cursor: "pointer", fontSize: 16,
              lineHeight: 1, flexShrink: 0, transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = BLACK; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: isMobile ? 20 : 36 }}>

          {/* Tab strip — only shown when there's actually a choice to make */}
          {hasImages && hasVideo && (
            <div role="tablist" aria-label="Room media" style={{ display: "flex", gap: 4, marginTop: 16, marginBottom: 14 }}>
              {[["photos", "PHOTOS"], ["video", "VIDEO TOUR"]].map(([key, label]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  style={{
                    fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: 2,
                    padding: "9px 18px", cursor: "pointer",
                    background: tab === key ? `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)` : "transparent",
                    border: `1px solid ${tab === key ? GOLD : "rgba(201,168,76,0.25)"}`,
                    color: tab === key ? BLACK : "rgba(201,168,76,0.6)",
                    fontWeight: tab === key ? 700 : 400, transition: "all 0.25s",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {tab === "photos" && (
            <>
              {/* Main image display */}
              <div style={{
                width: "100%", aspectRatio: "16/9",
                background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)",
                marginTop: hasImages && hasVideo ? 0 : 16, marginBottom: 14, overflow: "hidden",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
              }}>
                {hasImages ? (
                  <img
                    src={room.images[activeImg]}
                    alt={`${room.name} photo ${activeImg + 1} of ${room.images.length}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: room.fit || "cover",
                      display: "block",
                      backgroundColor: "#000",
                    }}
                  />
                ) : (
                  <>
                    <span aria-hidden="true" style={{ fontSize: 40, opacity: 0.25, filter: GOLD_EMOJI }}>{room.emoji}</span>
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 2, color: "rgba(201,168,76,0.3)" }}>
                      PHOTOS COMING SOON
                    </span>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {hasImages && room.images.length > 1 && (
                <div role="group" aria-label={`${room.name} photo thumbnails`} style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
                  {room.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImg(i)}
                      aria-label={`Show photo ${i + 1} of ${room.images.length}`}
                      aria-pressed={activeImg === i}
                      style={{
                        width: 66, height: 66, cursor: "pointer", padding: 0,
                        border: `1px solid ${activeImg === i ? GOLD : "rgba(201,168,76,0.2)"}`,
                        opacity: activeImg === i ? 1 : 0.55, background: "none",
                        overflow: "hidden", transition: "opacity 0.25s, border-color 0.25s",
                      }}
                    >
                      <img src={img} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Video — only mounted once this tab is active, so it only downloads when requested */}
          {tab === "video" && hasVideo && (
            <div style={{ marginTop: hasImages ? 0 : 16, marginBottom: 28 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 10 }}>
                ROOM TOUR{videoList.length > 1 ? ` · CLIP ${activeVideo + 1} OF ${videoList.length}` : ""}
              </div>
              <video
                key={videoList[activeVideo]}
                ref={videoRef}
                controls
                preload="metadata"
                playsInline
                aria-label={`${room.name} video tour, clip ${activeVideo + 1} of ${videoList.length}`}
                style={{ width: "100%", aspectRatio: "16/9", border: "1px solid rgba(201,168,76,0.15)", background: "black", display: "block" }}
                src={videoList[activeVideo]}
              />
              {videoList.length > 1 && (
                <div role="group" aria-label="Video tour clips" style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  {videoList.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveVideo(i)}
                      aria-label={`Play clip ${i + 1} of ${videoList.length}`}
                      aria-pressed={activeVideo === i}
                      style={{
                        fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 1.5,
                        padding: "7px 14px", cursor: "pointer",
                        background: activeVideo === i ? `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)` : "transparent",
                        border: `1px solid ${activeVideo === i ? GOLD : "rgba(201,168,76,0.25)"}`,
                        color: activeVideo === i ? BLACK : "rgba(201,168,76,0.6)",
                        fontWeight: activeVideo === i ? 700 : 400, transition: "all 0.2s",
                      }}
                    >
                      CLIP {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "rgba(245,215,142,0.6)", lineHeight: 1.75, marginBottom: 24 }}>
            {room.desc}
          </p>

          {/* Features */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.4)", marginBottom: 10 }}>INCLUDES</div>
            <ul style={{ display: "flex", gap: 6, flexWrap: "wrap", listStyle: "none" }}>
              {room.features.map(f => (
                <li key={f} style={{ padding: "4px 11px", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 1.5, color: "rgba(201,168,76,0.65)" }}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Price + CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 20, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            <div>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: 28, fontWeight: 700, color: GOLD }}>{room.price}</span>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "rgba(201,168,76,0.4)", marginLeft: 4 }}>/month</span>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              style={{
                fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: 2, padding: "12px 26px",
                background: `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)`, border: `1px solid ${GOLD}`,
                color: BLACK, fontWeight: 700, textDecoration: "none",
              }}
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Rooms ──────────────────────────────────────────────────── */
function RoomsSection() {
  const { isMobile } = useBreakpoint();
  const [hov, setHov] = useState(null);
  const [modalRoom, setModalRoom] = useState(null);

  return (
    <section id="rooms" style={{ padding: isMobile ? "64px 20px" : "100px 48px", background: BLACK }}>
      <SectionLabel>Our Rooms</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: 28, maxWidth: isMobile ? "100%" : 900, margin: "0 auto" }}>
        {rooms.map(room => (
          <div key={room.id}
            onMouseEnter={() => setHov(room.id)} onMouseLeave={() => setHov(null)}
            style={{
              background: room.gradient,
              border: `1px solid ${hov === room.id ? GOLD : room.highlight ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.18)"}`,
              padding: isMobile ? 24 : 36,
              transition: "all 0.35s ease",
              boxShadow: hov === room.id ? `0 0 0 1px rgba(201,168,76,0.15),0 20px 55px rgba(0,0,0,0.6),0 0 35px rgba(201,168,76,0.12)` : room.highlight ? `0 4px 24px rgba(201,168,76,0.08)` : `0 4px 18px rgba(0,0,0,0.4)`,
              transform: hov === room.id ? "translateY(-5px)" : "none",
              position: "relative",
            }}>
            {room.highlight && (
              <div style={{ position: "absolute", top: 0, right: 0, background: `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)`, color: BLACK, fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 2, padding: "6px 18px", fontWeight: 700 }}>MOST POPULAR</div>
            )}
            <div style={{ display: "inline-block", padding: "4px 12px", border: "1px solid rgba(201,168,76,0.35)", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: GOLD, marginBottom: 20 }}>{room.tag.toUpperCase()}</div>
            <div style={{ width: "100%", aspectRatio: "16/9", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.08)", overflow: "hidden", marginBottom: 24 }}>
              {room.images && room.images.length > 0 ? (
                <img
                  src={room.images[0]}
                  alt={`${room.name} preview`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: room.fit || "cover", display: "block", backgroundColor: "#000" }}
                />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <span aria-hidden="true" style={{ fontSize: 40, opacity: 0.25, filter: GOLD_EMOJI }}>{room.emoji}</span>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 2, color: "rgba(201,168,76,0.3)" }}>PHOTO COMING SOON</span>
                </div>
              )}
            </div>
            <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: 22, fontWeight: 600, color: GOLD_L, margin: "0 0 10px", letterSpacing: 1 }}>{room.name}</h3>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "rgba(245,215,142,0.5)", lineHeight: 1.75, margin: "0 0 20px" }}>{room.desc}</p>
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.4)", marginBottom: 10 }}>INCLUDES</div>
              <ul style={{ display: "flex", gap: 6, flexWrap: "wrap", listStyle: "none" }}>
                {room.features.map(f => (
                  <li key={f} style={{ padding: "4px 11px", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 1.5, color: "rgba(201,168,76,0.65)" }}>{f}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
              <div>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: 28, fontWeight: 700, color: GOLD }}>{room.price}</span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "rgba(201,168,76,0.4)", marginLeft: 4 }}>/month</span>
              </div>
              <button
                onClick={() => setModalRoom(room)}
                aria-haspopup="dialog"
                aria-label={`View details for ${room.name}`}
                style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: 2, padding: "11px 22px", background: hov === room.id ? `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)` : "transparent", border: `1px solid ${GOLD}`, color: hov === room.id ? BLACK : GOLD, cursor: "pointer", transition: "all 0.3s", fontWeight: hov === room.id ? 700 : 400 }}
              >
                VIEW ROOM
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalRoom && (
        <RoomModal room={modalRoom} onClose={() => setModalRoom(null)} isMobile={isMobile} />
      )}
    </section>
  );
}

/* ─── Amenities ──────────────────────────────────────────────── */
function AmenitiesSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const [hov, setHov] = useState(null);
  const cols = isMobile ? "1fr 1fr" : isTablet ? "repeat(3,1fr)" : "repeat(6,1fr)";

  return (
    <section id="amenities" style={{ padding: isMobile ? "64px 20px" : "100px 48px", background: `linear-gradient(180deg,${BLACK} 0%,#0d0d00 50%,${BLACK} 100%)` }}>
      <SectionLabel>Curated Amenities</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: 2, maxWidth: 1100, margin: "0 auto" }}>
        {amenities.map((a, i) => (
          <div key={a.label}
            onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            style={{ padding: isMobile ? "24px 16px" : "28px 16px", background: hov === i ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.02)", border: `1px solid ${hov === i ? "rgba(201,168,76,0.28)" : "rgba(201,168,76,0.07)"}`, transition: "all 0.3s", textAlign: "center" }}>
            <div aria-hidden="true" style={{ fontSize: isMobile ? 26 : 28, marginBottom: 10, filter: GOLD_EMOJI }}>{a.icon}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 9 : 10, fontWeight: 600, color: GOLD, letterSpacing: 1, marginBottom: 5 }}>{a.label}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: "rgba(245,215,142,0.35)", lineHeight: 1.5 }}>{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Neighbourhood ──────────────────────────────────────────── */
function NeighbourhoodSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const [activeTab, setActiveTab] = useState(0);

  const cat = neighbourhood[activeTab];

  return (
    <section id="neighbourhood" style={{ padding: isMobile ? "64px 20px" : "100px 48px", background: `linear-gradient(180deg,${BLACK} 0%,#0a0900 100%)` }}>
      <SectionLabel>The Neighbourhood</SectionLabel>

      {/* Intro text — GEO rich */}
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(14px,2vw,18px)", color: "rgba(245,215,142,0.5)", textAlign: "center", maxWidth: 640, margin: "0 auto 52px", lineHeight: 1.8 }}>
        Om Niramayam sits in the heart of Dwarka Sector 7, New Delhi — one of the city's best-connected and most liveable neighbourhoods, with world-class metro access, fitness centres, restaurants, and retail all within a short walk or auto ride.
      </p>

      {/* Tab strip */}
      <div role="tablist" aria-label="Neighbourhood categories" style={{ display: "flex", gap: 4, maxWidth: 900, margin: "0 auto 36px", flexWrap: "wrap", justifyContent: "center" }}>
        {neighbourhood.map((n, i) => (
          <button key={n.category}
            role="tab"
            aria-selected={activeTab === i}
            onClick={() => setActiveTab(i)}
            style={{
              fontFamily: "'Cinzel',serif", fontSize: isMobile ? 8 : 9, letterSpacing: 2,
              padding: isMobile ? "9px 12px" : "10px 18px",
              background: activeTab === i ? `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)` : "transparent",
              border: `1px solid ${activeTab === i ? GOLD : "rgba(201,168,76,0.22)"}`,
              color: activeTab === i ? BLACK : "rgba(201,168,76,0.6)",
              cursor: "pointer", transition: "all 0.25s", fontWeight: activeTab === i ? 700 : 400,
            }}>
            <span aria-hidden="true" style={{ marginRight: 6,filter: GOLD_EMOJI,display: "inline-block" }}>{n.icon}</span>{n.category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div role="tabpanel" style={{ border: "1px solid rgba(201,168,76,0.18)", background: "rgba(201,168,76,0.02)", padding: isMobile ? 24 : 40 }}>
          <div style={{ marginBottom: 28 }}>
            <span aria-hidden="true" style={{ fontSize: 32, filter: GOLD_EMOJI }}>{cat.icon}</span>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 16 : 20, color: GOLD_L, letterSpacing: 1, marginTop: 10 }}>{cat.category}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 14, color: "rgba(245,215,142,0.4)", marginTop: 4 }}>{cat.tagline}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3,1fr)", gap: 12 }}>
            {cat.places.map((p, i) => (
              <div key={i} style={{ padding: "18px 20px", background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.1)", display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, color: GOLD, letterSpacing: 1, marginBottom: 3 }}>{p.name}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "rgba(245,215,142,0.45)", marginBottom: 6 }}>{p.detail}</div>
                  <div style={{ display: "inline-block", padding: "2px 9px", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 2, color: "rgba(201,168,76,0.55)" }}>{p.time.toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static GEO summary strip — always visible, great for crawlers */}
      <div style={{ maxWidth: 900, margin: "32px auto 0", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 2 }}>
        {[
          { label: "Metro Access", value: "2 Lines", sub: "Palam (Magenta) & Sec 9 (Blue)" },
          { label: "Gyms Nearby", value: "4+", sub: "Gold's · Vault · Cult · Athlete" },
          { label: "Restaurants", value: "10+", sub: "Kali Ghata · Prism · Xero Degrees" },
          { label: "Shops & Brands", value: "5 min", sub: "Nike · Bata · Reliance Trends" },
        ].map(s => (
          <div key={s.label} style={{ padding: "20px 16px", background: "rgba(201,168,76,0.02)", border: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 20 : 26, color: GOLD, fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 2, color: "rgba(201,168,76,0.5)", margin: "6px 0 4px" }}>{s.label.toUpperCase()}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: "rgba(245,215,142,0.3)" }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Gallery ────────────────────────────────────────────────── */
function GallerySection() {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="gallery"
      style={{
        padding: isMobile ? "64px 20px" : "100px 48px",
        background: BLACK,
      }}
    >
      <SectionLabel>Gallery</SectionLabel>

      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          {galleryItems.map((p, i) => (
            <GalleryCell
              key={i}
              p={p}
              style={{ aspectRatio: "4/3" }}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 4,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {galleryItems.map((p, i) => (
            <GalleryCell
              key={i}
              p={p}
              style={{
                aspectRatio: p.span === 2 ? "4/3" : "1/1",
                gridColumn: `span ${p.span}`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function GalleryCell({ p, style }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...style,
        border: `1px solid ${
          hov ? "rgba(201,168,76,0.45)" : "rgba(201,168,76,0.1)"
        }`,
        cursor: "pointer",
        transition: "border-color 0.3s",
        overflow: "hidden",
      }}
    >
      <img
  src={p.image}
  alt="Om Niramayam furnished flat interior"
  loading="lazy"
  style={{
    width: "100%",
    height: "100%",
    objectFit: p.fit || "cover",
    display: "block",
    transform: hov ? "scale(1.02)" : "scale(1)",
    transition: "transform 0.3s ease",
    backgroundColor: "#000", // optional
  }}
/>
    </div>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────── */
function FAQSection() {
  const { isMobile } = useBreakpoint();
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: isMobile ? "64px 20px" : "100px 48px", background: `linear-gradient(180deg,${BLACK} 0%,#0d0900 100%)` }}>
      <SectionLabel>Frequently Asked</SectionLabel>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(13px,1.8vw,17px)", color: "rgba(245,215,142,0.4)", textAlign: "center", maxWidth: 560, margin: "0 auto 52px", lineHeight: 1.8 }}>
        Everything you need to know about living at Om Niramayam — from location and pricing to amenities and daily life.
      </p>
      <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
        {faqs.map((faq, i) => {
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div key={i}
              style={{ border: `1px solid ${open === i ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.1)"}`, background: open === i ? "rgba(201,168,76,0.03)" : "transparent", transition: "all 0.3s" }}>
              <button
                id={buttonId}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={panelId}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "18px 20px" : "22px 28px", background: "none", border: "none", cursor: "pointer", gap: 16 }}>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: isMobile ? 10 : 12, letterSpacing: 1, color: open === i ? GOLD_L : "rgba(245,215,142,0.75)", textAlign: "left", lineHeight: 1.5 }}>{faq.q}</span>
                <span aria-hidden="true" style={{ color: GOLD, fontSize: 16, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s", display: "inline-block" }}>+</span>
              </button>
              {open === i && (
                <div id={panelId} role="region" aria-labelledby={buttonId} style={{ padding: isMobile ? "0 20px 20px" : "0 28px 24px", fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 14 : 16, color: "rgba(245,215,142,0.55)", lineHeight: 1.8, borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: 16 }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Embedded Map ───────────────────────────────────────────── */
function EmbeddedMap({ isMobile }) {
  return (
    <div style={{ marginTop: 32 }}>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 10 }}>LOCATION ON MAP</div>
      <div style={{ width: "100%", height: isMobile ? 220 : 280, border: "1px solid rgba(201,168,76,0.25)", overflow: "hidden", position: "relative", background: "#0d0d0d" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2, boxShadow: "inset 0 0 20px rgba(201,168,76,0.07)" }} />
        <iframe
          title="Om Niramayam Location — Dwarka Sector 7, New Delhi, near Palam Metro Station"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.514849429991!2d77.06830217549903!3d28.584327675691085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzAzLjYiTiA3N8KwMDQnMTUuMiJF!5e0!3m2!1sen!2sin!4v1781966950423!5m2!1sen!2sin"
          width="100%" height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)", display: "block" }}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 12, color: "rgba(201,168,76,0.3)", marginTop: 8, textAlign: "right" }}>
        D1/36,37 Ramphal Chowk Rd, Dwarka Sec-7, New Delhi · 10–15 min from Palam & Sector 9 Metro
      </div>
    </div>
  );
}

/* ─── Contact / Location ─────────────────────────────────────── */
function LocationSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile || isTablet ? "1fr" : "1fr 1fr";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    duration: "",
    roomType: "",
  });
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (error) setError("");
  };

  // Bounds for the check-in date picker: today .. exactly one year from today.
  const todayStr = new Date().toISOString().split("T")[0];
  const maxDateStr = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().split("T")[0];
  })();

  const roomLabels = {
    "1bhk": "1 BHK — ₹22,000/month",
    "1rk": "1 RK — ₹15,000/month",
  };

  // Accepts 10-digit Indian mobile numbers, optionally prefixed with +91 / 91 / 0,
  // and tolerates spaces or hyphens (e.g. "98765 43210", "+91-98765-43210").
  const isValidPhone = (raw) => {
    const cleaned = raw.replace(/[\s-]/g, "");
    return /^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!isValidPhone(form.phone)) return "Please enter a valid 10-digit phone number.";
    if (!form.checkin) return "Please select a check-in date.";

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkinDate = new Date(form.checkin);
    const oneYearOut = new Date(today);
    oneYearOut.setFullYear(oneYearOut.getFullYear() + 1);

    if (checkinDate < today) return "Check-in date cannot be in the past.";
    if (checkinDate > oneYearOut) return "Check-in date cannot be more than a year in advance.";

    if (!form.duration.trim()) return "Please enter the duration of stay.";
    const durationNum = Number(form.duration);
    if (!Number.isFinite(durationNum) || durationNum <= 0 || !Number.isInteger(durationNum)) {
      return "Please enter a valid duration in whole months.";
    }

    if (!form.roomType) return "Please select a room type.";

    return "";
  };

  const handleSubmit = () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const lines = [
      "New Enquiry — Om Niramayam",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.checkin ? `Check-in Date: ${form.checkin}` : null,
      form.duration ? `Duration of Stay: ${form.duration} month(s)` : null,
      form.roomType ? `Room Type: ${roomLabels[form.roomType] || form.roomType}` : null,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" style={{ padding: isMobile ? "64px 20px" : "100px 48px", background: `linear-gradient(180deg,${BLACK} 0%,#0d0900 100%)` }}>
      <SectionLabel>Find Us</SectionLabel>

      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: cols, gap: isMobile ? 36 : 48, alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 12, color: GOLD, letterSpacing: 3, marginBottom: 24 }}>CONTACT &amp; LOCATION</div>
          {[
            { icon: "📍", title: "Address", content: "D1/36,37, Ramphal Chowk Road\nPalam Extension, Dwarka Sector 7\nNew Delhi" },
            { icon: "📞", title: "Phone", content: "+91 80765 79885" },
            { icon: "🚇", title: "Metro Access", content: "Palam Station (Magenta Line) — 10–15 min by auto\nSector 9 Station (Blue Line) — 10–15 min by auto" },
          ].map(({ icon, title, content }) => (
            <div key={title} style={{ display: "flex", gap: 18, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(201,168,76,0.09)" }}>
              <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, filter: GOLD_EMOJI }}>{icon}</span>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 5 }}>{title.toUpperCase()}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "rgba(245,215,142,0.7)", lineHeight: 1.65, whiteSpace: "pre-line" }}>{content}</div>
              </div>
            </div>
          ))}
          <EmbeddedMap isMobile={isMobile} />
        </div>

        <div style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.14)", padding: isMobile ? 24 : 36 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 17, color: GOLD_L, letterSpacing: 2, marginBottom: 24 }}>Reserve Your Stay</div>

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} noValidate>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="enquiry-name" style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 7 }}>FULL NAME</label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange("name")}
                style={{ width: "100%", padding: "12px 14px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)", color: GOLD_L, fontFamily: "'Cormorant Garamond',serif", fontSize: 15, outline: "none", boxSizing: "border-box", colorScheme: "dark" }}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.18)"}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="enquiry-phone" style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 7 }}>PHONE NUMBER</label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange("phone")}
                style={{ width: "100%", padding: "12px 14px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)", color: GOLD_L, fontFamily: "'Cormorant Garamond',serif", fontSize: 15, outline: "none", boxSizing: "border-box", colorScheme: "dark" }}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.18)"}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="enquiry-checkin" style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 7 }}>CHECK-IN DATE</label>
              <input
                id="enquiry-checkin"
                name="checkin"
                type="date"
                value={form.checkin}
                min={todayStr}
                max={maxDateStr}
                onChange={handleChange("checkin")}
                style={{ width: "100%", padding: "12px 14px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)", color: GOLD_L, fontFamily: "'Cormorant Garamond',serif", fontSize: 15, outline: "none", boxSizing: "border-box", colorScheme: "dark" }}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.18)"}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="enquiry-duration" style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 7 }}>DURATION OF STAY (MONTHS)</label>
              <input
                id="enquiry-duration"
                name="duration"
                type="number"
                min="1"
                max="60"
                step="1"
                placeholder="e.g. 6"
                value={form.duration}
                onChange={handleChange("duration")}
                style={{ width: "100%", padding: "12px 14px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)", color: GOLD_L, fontFamily: "'Cormorant Garamond',serif", fontSize: 15, outline: "none", boxSizing: "border-box", colorScheme: "dark" }}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.18)"}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="enquiry-roomtype" style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.45)", marginBottom: 7 }}>ROOM TYPE</label>
              <select
                id="enquiry-roomtype"
                name="roomType"
                value={form.roomType}
                onChange={handleChange("roomType")}
                style={{ width: "100%", padding: "12px 14px", background: "#111", border: "1px solid rgba(201,168,76,0.18)", color: GOLD_L, fontFamily: "'Cormorant Garamond',serif", fontSize: 15, outline: "none", boxSizing: "border-box", cursor: "pointer" }}
                onFocus={e => e.target.style.borderColor = GOLD}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.18)"}>
                <option value="">Select a room</option>
                <option value="1bhk">1 BHK — ₹22,000/month</option>
                <option value="1rk">1 RK — ₹15,000/month</option>
              </select>
            </div>

            {error && (
              <div role="alert" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "#e08a8a", marginBottom: 16 }}>{error}</div>
            )}

            <button
              type="submit"
              style={{ width: "100%", marginTop: 8, padding: "15px", background: `linear-gradient(135deg,${GOLD} 0%,${GOLD_DIM} 100%)`, border: "none", color: BLACK, fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: 4, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 28px rgba(201,168,76,0.22)`, transition: "box-shadow 0.3s" }}
              onMouseEnter={e => e.target.style.boxShadow = `0 4px 48px rgba(201,168,76,0.5)`}
              onMouseLeave={e => e.target.style.boxShadow = `0 4px 28px rgba(201,168,76,0.22)`}>
              SEND ENQUIRY
            </button>
          </form>

          {/* Quick nearby highlights inside form area */}
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(201,168,76,0.09)" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 3, color: "rgba(201,168,76,0.35)", marginBottom: 12 }}>WHAT'S NEARBY</div>
            {[
              ["🚇", "Palam Metro (Magenta)", "10–15 min auto"],
              ["🏋️", "Gold's, Vault, Cult, Athlete Gym", "5 min walk"],
              ["🍕", "Pizza Hut, Domino's, Cafés", "5 min walk"],
              ["🛍️", "Nike, Bata, Reliance Trends", "5 min walk"],
            ].map(([icon, name, dist]) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(201,168,76,0.05)" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "rgba(245,215,142,0.5)" }}><span aria-hidden="true" style={{filter: GOLD_EMOJI}}>{icon}</span> {name}</span>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 1, color: GOLD_DIM }}>{dist}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ padding: "44px 24px", background: "#050505", borderTop: "1px solid rgba(201,168,76,0.1)", textAlign: "center" }}>
      <span aria-hidden="true" style={{ fontSize: 26, filter: `drop-shadow(0 0 5px ${GOLD})`, display: "block", marginBottom: 12 }}>ॐ</span>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 13, color: GOLD, letterSpacing: 4, marginBottom: 7 }}>OM NIRAMAYAM</div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: "rgba(245,215,142,0.27)", marginBottom: 8 }}>Dwarka Sector 7, New Delhi</div>
      {/* GEO footer text — visible to crawlers */}
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "rgba(245,215,142,0.18)", marginBottom: 16, maxWidth: 600, margin: "0 auto 16px" }}>
        Furnished flats for rent near Palam Metro Station (Magenta Line) &amp; Sector 9 Metro Station (Blue Line), Dwarka, New Delhi.
        Walking distance to Gold's Gym, Cult.fit, Pizza Hut, Domino's, Nike, and Reliance Trends.
      </div>
      <div style={{ fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: 2, color: "rgba(201,168,76,0.18)" }}>
        © {new Date().getFullYear()} OM NIRAMAYAM · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

/* ─── Root ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { overflow-x: hidden; }
        body { background: #0A0A0A; color: #F5D78E; -webkit-font-smoothing: antialiased; scroll-behavior: smooth; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #8B6914; border-radius: 2px; }
        @keyframes omPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.18); opacity: 1; }
        }
        @keyframes scrollLine {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.6) sepia(1) saturate(2) hue-rotate(10deg); }
        select option { background: #111; color: #F5D78E; }
      `}</style>
      <NavBar />
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <NeighbourhoodSection />
      <GallerySection />
      <FAQSection />
      <LocationSection />
      <Footer />
    </>
  );
}

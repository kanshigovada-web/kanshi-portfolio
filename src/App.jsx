import React, { useState } from 'react';
import { 
  Mail, 
  Terminal, 
  Layers, 
  Code2, 
  Database, 
  Radio, 
  Trophy, 
  ShieldCheck, 
  FileText, 
  Download,
  X,
  ExternalLink,
  Eye,
  Sparkles,
  Copy,
  Check,
  Send
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function App() {
  const [activeCert, setActiveCert] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const emailAddress = "kanshigovada@gmail.com";
  
  // Direct Web Gmail Compose URL (Opens Gmail in browser with pre-filled message)
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent("Software Engineering Opportunity — Govada Kanshi")}&body=${encodeURIComponent("Hi Kanshi,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding...")}`;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const projects = [
    {
      title: "LandGuard",
      subtitle: "Real-Time Landslide Risk Monitoring Platform",
      status: "Active MVP • SIH '26",
      tags: ["React", "Node.js", "Python", "GeoJSON", "Tailwind CSS"],
      description: "Event-driven telemetry dashboard visualizing live multi-sensor environmental telemetry (soil moisture, precipitation, tilt displacement) across 100+ terrain coordinates with proactive threshold alerts.",
      metrics: "Reduced sensor state streaming latency by 35% with 99.8% alert trigger reliability.",
      github: "https://github.com/kanshigovada-web",
    },
    {
      title: "VitalNexus (PulseRoute)",
      subtitle: "Dynamic Emergency Healthcare Routing Engine",
      status: "Summit Finalist",
      tags: ["Node.js", "Express", "React", "REST APIs", "Figma"],
      description: "Multi-variable emergency dispatch engine calculating optimal hospital transit corridors by weighting live traffic conditions against clinical triage severity and ICU bed availability.",
      metrics: "Maintained sub-200ms API response latency under simulated emergency surge loads.",
      github: "https://github.com/kanshigovada-web",
    },
    {
      title: "Medi-Guide",
      subtitle: "Full-Stack Healthcare Clinic Intake Portal",
      status: "Beta In-Progress",
      tags: ["React", "PostgreSQL", "Supabase", "Express", "RLS"],
      description: "End-to-end medical intake system streamlining structured patient symptom-logging workflows and secure electronic health record indexing.",
      metrics: "Normalized PostgreSQL schemas enforcing Row-Level Security (RLS) policies for complete patient data isolation.",
      github: "https://github.com/kanshigovada-web",
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      skills: ["JavaScript (ES6+)", "Python", "SQL (PostgreSQL)", "HTML5 / CSS3", "Java", "C"]
    },
    {
      title: "Frontend Engineering",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      skills: ["React.js", "Tailwind CSS", "Component Architecture", "State Management", "Responsive UI"]
    },
    {
      title: "Backend & Systems",
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Middleware Validation", "Microservices"]
    },
    {
      title: "Cloud, DB & DevOps",
      icon: <Database className="w-4 h-4 text-violet-400" />,
      skills: ["PostgreSQL", "Supabase", "Azure Blob Storage", "Git / GitHub", "Vercel", "Linux CLI"]
    }
  ];

  const achievements = [
    {
      event: "Smart India Hackathon (SIH) 2026",
      role: "Lead Prototype Developer — LandGuard",
      detail: "Architected real-time geospatial telemetry dashboard and alert threshold pipeline."
    },
    {
      event: "E-Summit 2026 (on going)",
      role: "Technical Finalist — VitalNexus",
      detail: "Presented emergency routing heuristics and multi-variable dispatch architecture."
    },
    {
      event: "Spark Hack 2026",
      role: "Team Zero Noise — Sanskriti University",
      detail: "Engineered and deployed a functional full-stack prototype in a 24-hour sprint."
    }
  ];

  const certifications = [
    {
      title: "Microsoft Applied Skills: Azure Blob & File Storage",
      id: "Credential ID: C9B46A1CC05EDBF1",
      issuer: "Microsoft",
      image: "/certificates/MS1.jpeg",
      verifyUrl: null
    },
    {
      title: "Microsoft Applied Skills: Canvas Apps with Power Apps",
      id: "Credential ID: 13500F550D7B795B",
      issuer: "Microsoft",
      image: "/certificates/MS2.jpeg",
      verifyUrl: null
    },
    {
      title: "EF SET English: C1 Advanced (68/100)",
      id: "C2 Proficient in Reading & Listening",
      issuer: "EF SET",
      image: null,
      verifyUrl: "https://cert.efset.org/2tZ9bE"
    },
    {
      title: "C Language Certification (Grade A)",
      id: "Regd: KKCC_560",
      issuer: "KKCC Info Systems",
      image: "/certificates/C_LANGUAGE_CERTIFICATE.jpeg",
      verifyUrl: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300 font-sans relative overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl opacity-70"></div>
        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] bg-indigo-500/5 blur-3xl rounded-full"></div>
      </div>

      {/* FLOATING NAVBAR */}
      <div className="fixed top-5 inset-x-0 z-40 flex justify-center px-4">
        <nav className="w-full max-w-4xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/90 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/60">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-125 transition"></span>
            <span className="font-mono text-sm font-semibold tracking-wider text-zinc-200 group-hover:text-white transition">
              GK
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
            <a href="#skills" className="hover:text-zinc-100 transition">Skills</a>
            <a href="#projects" className="hover:text-zinc-100 transition">Projects</a>
            <a href="#credentials" className="hover:text-zinc-100 transition">Credentials</a>
            <a href="#hackathons" className="hover:text-zinc-100 transition">Hackathons</a>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 text-xs font-medium text-zinc-200 hover:text-white transition shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition shadow-sm cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Contact</span>
            </button>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <header id="home" className="max-w-5xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Stack Engineer & Real-Time Architect</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Govada Kanshi
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 font-medium">
                Engineering high-performance web systems & data pipelines
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              Specialized in event-driven telemetry dashboards, multi-variable dispatch engines, and resilient REST services using React, Node.js, and Python. Proven track record turning complex technical challenges into production-ready software during competitive 24h sprints.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <button 
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
              >
                <Eye className="w-4 h-4" /> View Resume
              </button>

              <button 
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-sm font-medium transition cursor-pointer shadow-sm"
              >
                <Mail className="w-4 h-4 text-emerald-400" /> Connect via Gmail
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-3 text-xs text-zinc-500 font-mono">
              <a 
                href="https://github.com/kanshigovada-web" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition"
              >
                <GithubIcon className="w-3.5 h-3.5" /> github.com/kanshigovada-web
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/govada-kanshi/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> linkedin/govada-kanshi
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl p-1.5 bg-gradient-to-b from-zinc-700/60 via-zinc-800/40 to-transparent border border-zinc-800 shadow-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center">
                {!imgError ? (
                  <img 
                    src="/profile.jpg" 
                    alt="Govada Kanshi" 
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-zinc-500 font-mono">
                    <span className="text-4xl font-bold text-zinc-300">GK</span>
                    <span className="text-[10px] text-zinc-600 mt-2">/public/profile.jpg</span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* TECHNICAL SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">Architecture & Stack</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 hover:border-zinc-700 hover:bg-zinc-900/70 transition">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 bg-zinc-800/60 border border-zinc-700/40 rounded-lg">{cat.icon}</div>
                <h3 className="font-semibold text-zinc-200 text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-2.5 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-xs font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">Production Systems</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Engineering Work</h2>
          </div>
          <span className="text-xs text-zinc-500 font-mono">Actively In Engineering</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 flex flex-col justify-between transition group hover:bg-zinc-900/70"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {proj.status}
                  </span>
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-500 hover:text-zinc-200 transition"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-3">{proj.subtitle}</p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {proj.description}
                </p>

                <div className="p-3 bg-black/40 border border-zinc-800/60 rounded-xl mb-4">
                  <p className="text-[11px] text-zinc-400">
                    <strong className="text-zinc-300 font-medium">Outcome: </strong>{proj.metrics}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                {proj.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED CREDENTIALS */}
      <section id="credentials" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">Verifications</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Verified Credentials</h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 hidden sm:block">Click to preview document</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              onClick={() => {
                if (cert.verifyUrl && !cert.image) {
                  window.open(cert.verifyUrl, '_blank');
                } else {
                  setActiveCert(cert);
                }
              }}
              className="bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 rounded-2xl p-5 cursor-pointer transition group hover:bg-zinc-900/70"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300 transition">
                      {cert.title}
                    </p>
                    <Eye className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition" />
                  </div>
                  <p className="text-xs font-mono text-zinc-500">{cert.id}</p>
                </div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono bg-zinc-800/80 border border-zinc-700/40 px-2 py-0.5 rounded">
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HACKATHONS */}
      <section id="hackathons" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">Competitions</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Hackathons & Summits</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5">
              <p className="text-sm font-semibold text-zinc-200">{item.event}</p>
              <p className="text-xs text-emerald-400 font-mono mt-1">{item.role}</p>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-black/60 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <div>
            <p className="text-zinc-300 font-medium">Govada Kanshi • Full-Stack Software Engineer</p>
            <p className="text-zinc-600 mt-0.5">Mathura, Uttar Pradesh, India • +91 6302323336</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowContactModal(true)} 
              className="hover:text-emerald-400 transition flex items-center gap-1 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> Send Email
            </button>
            <a href="https://github.com/kanshigovada-web" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/govada-kanshi/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* RESUME VIEWER MODAL */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full h-[88vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-white">Govada Kanshi — ATS Resume</h3>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="/resume.pdf" 
                  download="Govada_Kanshi_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-xs transition"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-zinc-950 overflow-hidden p-2 rounded-b-2xl">
              <iframe 
                src="/resume.pdf#toolbar=0&navpanes=0" 
                className="w-full h-full rounded-xl border border-zinc-800/80 bg-zinc-900" 
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}

      {/* DEDICATED GMAIL / CONTACT MODAL */}
      {showContactModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-400" /> Connect Directly
                </h3>
                <p className="text-xs text-zinc-400">Reach out for opportunities or collaborations</p>
              </div>
              <button 
                onClick={() => setShowContactModal(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Email Display Card with 1-Click Copy */}
            <div className="p-3.5 bg-black/50 border border-zinc-800 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-mono text-zinc-200 font-medium select-all">{emailAddress}</p>
              </div>
              <button 
                onClick={copyEmailToClipboard}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition flex items-center gap-1.5 text-xs cursor-pointer"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Web Gmail Button */}
            <div className="space-y-3">
              <a 
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <Send className="w-4 h-4" /> Open Web Gmail Composer
              </a>

              <a 
                href={`mailto:${emailAddress}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white text-xs font-medium transition"
              >
                Open in Default Mail Client
              </a>
            </div>

            <p className="text-[11px] text-center text-zinc-500 font-mono">
              Usually replies within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* CERTIFICATE PREVIEW MODAL */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full p-5 shadow-2xl relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">{activeCert.title}</h3>
                <p className="text-xs font-mono text-zinc-400">{activeCert.id}</p>
              </div>
              <button 
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black/80 border border-zinc-800 flex items-center justify-center max-h-[70vh]">
              {activeCert.image ? (
                <img 
                  src={activeCert.image} 
                  alt={activeCert.title} 
                  className="w-full h-auto object-contain max-h-[65vh]"
                />
              ) : (
                <div className="p-12 text-center space-y-3">
                  <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
                  <p className="text-sm text-zinc-300">Online Verifiable Credential</p>
                  <a 
                    href={activeCert.verifyUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline"
                  >
                    Open Official Verification Record <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-1 text-xs text-zinc-400 font-mono">
              <span>Issuer: {activeCert.issuer}</span>
              <button 
                onClick={() => setActiveCert(null)}
                className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
import { useState } from "react";
import { ArrowRight, Mail, Phone, Download, TrendingUp, Database, Cpu, LineChart, Sparkles, Users, Clock, ArrowUpRight, Menu, X } from "lucide-react";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.39-1.25.71-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Expertise", id: "expertise" },
    { label: "Leadership", id: "leadership" },
    { label: "Insights", id: "blog" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "$18M", label: "Annual Enterprise Value" },
    { value: "3", label: "Years Leading Teams" },
    { value: "6", label: "Models Mentored to Production" },
  ];

  const expertise = [
    {
      icon: LineChart,
      title: "Forecasting That Drives Balance-Sheet Decisions",
      desc: "I build the forecasting backbone Treasury and finance leaders rely on for capital and liquidity planning — turning loan-level uncertainty into decisions leadership can act on.",
      tags: ["SARIMAX", "Survival Analysis", "Cohort Modelling"],
    },
    {
      icon: TrendingUp,
      title: "Pricing Strategy That Protects Margin",
      desc: "I find the revenue hiding in flat pricing — segmenting customers by sensitivity and value, then optimizing price to grow margin without losing volume or trust.",
      tags: ["Segmentation", "Elasticity Modelling", "LP / MIP Optimization"],
    },
    {
      icon: Database,
      title: "Proof Before Scale",
      desc: "Before any initiative scales, I make sure it actually works — rigorous experimentation that separates real impact from noise, then targeted personalization to act on what's proven.",
      tags: ["A/B Testing", "Causal Inference", "Propensity Modelling"],
    },
    {
      icon: Cpu,
      title: "Operationalizing GenAI Beyond the Pilot",
      desc: "I take agentic AI from proof-of-concept to something a business actually runs on — architecting multi-agent systems that scale judgment, not just automate tasks.",
      tags: ["Multi-Agent Systems", "LangChain", "Ollama"],
    },
  ];

  const projects = [
    {
      title: "GIC Price-Sensitivity Segmentation",
      tag: "Pricing Strategy",
      summary: "Identified that flat pricing was leaving margin on the table, built the business case, and led the segmentation redesign that's now embedded in how GIC pricing runs.",
      details: [
        "Opportunity: spotted that uniform pricing was overcharging price-sensitive, high-LTV clients — a churn risk hiding inside an averaged metric",
        "Influence: built the roadmap and business case, and owned the core KPIs used to evaluate the redesign with stakeholders",
        "Build: co-developed a tree-based panel model to segment customers by price sensitivity and value, then redesigned the pricing optimization model around it",
        "Institutionalize: validated via A/B testing with causal inference; the segmentation now runs as the standard input to pricing decisions, delivering $4.6M in incremental value and a 6% margin improvement with no volume change",
      ],
    },
    {
      title: "Mortgage Volume Forecaster",
      tag: "Time Series / ALM",
      summary: "Saw that balance-sheet planning was reactive to prepayment volatility it couldn't see coming, and built the forecasting framework Treasury now plans around.",
      details: [
        "Opportunity: identified that ALM and balance-sheet planning lacked a reliable forward view on mortgage prepayments and payoffs, leaving funding decisions reactive",
        "Influence: worked with Treasury stakeholders to define the accuracy and horizon the forecast actually needed to support, rather than optimizing for backtest metrics alone",
        "Build: combined SARIMAX, model selection, and cohort/time-series techniques to forecast prepayments and payoffs with 93% accuracy over a 6-month horizon",
        "Institutionalize: extended the same framework to credit card LTV and PCL forecasting for P&L planning — turning a single model into a reusable forecasting pattern across products",
      ],
    },
    {
      title: "Flow-of-Funds Behavioural Analytics",
      tag: "Deposits / FHSA",
      summary: "Noticed that aggregate flow data was masking real attrition and risk signals, and pioneered the analytical lens now used across FHSA and deposit products.",
      details: [
        "Opportunity: recognized that without separating internal from external money movement, deposit and FHSA risk signals were getting averaged away and going unseen",
        "Influence: introduced the framework to stakeholders managing deposit and FHSA strategy as a new lens for risk they didn't previously have visibility into",
        "Build: designed flow-of-funds analytics distinguishing internal vs. external movement, surfacing behavioural risk drivers, attrition signals, and new-money patterns",
        "Institutionalize: adopted as the standard analytical lens across FHSA and broader deposit products, not a one-time analysis",
      ],
    },
    {
      title: "Multi-Agent PoC for Customer Primacy",
      tag: "Agentic AI",
      summary: "Saw agentic AI as an unaddressed lever for deposit growth, mobilized a cross-functional team with no formal mandate, and took it from idea to a working PoC.",
      details: [
        "Opportunity: identified customer primacy and deposit growth as underserved by existing single-model approaches, and made the case for a multi-agent architecture instead",
        "Influence: coordinated a cross-functional team across roles with no direct reporting line, building enough buy-in to mobilize the effort without a formal mandate",
        "Build: led the design of the multi-agent architecture targeting customer primacy and deposit growth, from problem decomposition through working PoC",
        "Institutionalize: placed 3rd in Scotiabank's Agentic AI hackathon, establishing agentic AI as a credible internal pattern that later extended into the TMLS Copilot agent work",
      ],
    },
    {
      title: "TMLS Conference Copilot Agent",
      tag: "Agentic AI",
      summary: "Saw conference learnings going nowhere after the event ended, and mobilized co-attendees to build a shared agent instead of letting that value disappear.",
      details: [
        "Opportunity: noticed that valuable TMLS conference learnings stayed siloed with whoever attended each talk, with no mechanism to compound across the group",
        "Influence: mobilized cross-functional Scotiabank co-attendees — again with no formal mandate — to commit time to building a shared tool rather than individually-held notes",
        "Build: built a Microsoft 365 Copilot agent to synthesize multi-attendee conference notes into personalized, context-aware summaries",
        "Institutionalize: extended agentic AI from an internal hackathon PoC into a live, real-world use case the group actually adopted",
      ],
    },
    {
      title: "Off-Us Investment Outflow Propensity Model",
      tag: "Propensity Modelling",
      summary: "Led development of a production-grade propensity model identifying customers at risk of moving investments off-platform.",
      details: [
        "Built a production-grade propensity model for off-us investment outflow risk",
        "Targeted at-risk customers through marketing campaign integration",
        "Yielded a 15% decrease in outflows in the three months following campaign launch",
      ],
    },
    {
      title: "GCP Cloud Migration",
      tag: "MLOps / Platform",
      summary: "Led the team's migration of the modelling workflow to cloud-native GCP pipelines, strengthening scalability and reliability.",
      details: [
        "Migrated modelling workflows to GCP-native pipelines (BigQuery, Composer, Workstation)",
        "Strengthened scalability, model reliability, and process efficiency",
        "Established a repeatable, productized modelling lifecycle for the team",
      ],
    },
  ];

  const posts = [
    // {
    //   title: "Why Most 'Next Best Action' Systems Fail Before the Model Even Runs",
    //   teaser: "The biggest NBA failures aren't modelling failures — they're decomposition failures. Here's the framework I use to get the problem right before touching a single algorithm.",
    //   tag: "ML Architecture",
    //   readTime: "6 min read",
    // },
    // {
    //   title: "What GIC Pricing Taught Me About Price-Sensitive Customers",
    //   teaser: "Not every price-sensitive customer is a low-value one. The segments that look the riskiest on a margin report are often the ones worth protecting most.",
    //   tag: "Pricing Strategy",
    //   readTime: "5 min read",
    // },
    // {
    //   title: "Stop Saying You 'Helped' — A Career Note for Quant Analysts",
    //   teaser: "Under-claiming language quietly caps senior analytical talent below the level they're operating at. A practical guide to describing your work the way it actually happened.",
    //   tag: "Career",
    //   readTime: "4 min read",
    // },
    {
      title: "Estimate the Value Before You Build: A Practitioner's Case for Benefit Estimation in Analytics",
      teaser: "Estimating the economic value of a sound model moves analytics teams from a cost line in the budget to a strategic lever in enterprise planning.",
      tag: "ROI Estimation",
      readTime: "7 min read",
      url: "https://datadecisionsanddollars.substack.com/p/estimate-the-value-before-you-build",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-semibold text-lg tracking-tight text-white">
            PA<span className="text-blue-400">.</span>
          </button>
          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-zinc-300 hover:text-blue-400 transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <button className="md:hidden text-zinc-300" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-zinc-950 border-t border-zinc-800/60 px-6 py-4 gap-4">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-sm text-zinc-300 hover:text-blue-400">
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="hero" className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Ph.D. | AI/ML Builder &amp; Enabler</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">Priya Alagarsamy</h1>
          <h2 className="text-xl md:text-2xl text-zinc-300 font-light mb-8 max-w-2xl">
            I build — and enable others to build — repeatable analytical capabilities that translate into scalable financial results.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
                <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{s.value}</p>
                <p className="text-xs text-zinc-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Ph.D. in Finance and Business Economics. I lead AI/ML programs end to end — from spotting the opportunity to building the model to making it stick as business-as-usual.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("resume")}
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              View Resume <Download size={16} />
            </button>
            <button onClick={() => scrollTo("contact")} className="border border-zinc-700 hover:border-blue-400 hover:text-blue-400 font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Get in Touch <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h3 className="text-3xl font-bold text-white mb-8">From systems engineering to academic research to applied AI/ML</h3>
          <div className="text-zinc-300 leading-relaxed space-y-5 text-lg">
            <p>I lead the design, build, and operationalization of AI/ML models — pricing optimization, time-series forecasting, propensity modelling, and agentic AI — that translate strategic priorities into production-grade, repeatable analytics products.</p>
            <p>At Scotiabank, I've led the redesign of GIC pricing optimization, built mortgage and credit card forecasting frameworks used in balance-sheet and P&L planning, and led a cross-functional team to a 3rd place finish in the bank's Agentic AI hackathon. My path — from systems engineering, through a Ph.D. in Finance at the University of Washington, into industry AI/ML — has repeatedly forced me to unlearn, relearn, and rebuild frameworks, and it's shaped how I approach ambiguity.</p>
            <p>I'm currently focused on Director-level analytics leadership roles, with a parallel build toward fractional advisory work for non-profit organizations that need senior quantitative judgment without a full-time hire.</p>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-24 px-6 border-t border-zinc-800/60 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Core Expertise</p>
          <h3 className="text-3xl font-bold text-white mb-12">Where I create the most value</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                <e.icon className="text-blue-400 mb-4" size={28} />
                <h4 className="text-lg font-semibold text-white mb-2">{e.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Python", "SQL", "SAS", "GCP / BigQuery", "PySpark", "TensorFlow", "LangChain", "Ollama", "Optimization (LP/MIP)", "Causal Inference"].map((t) => (
              <span key={t} className="text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 px-6 border-t border-zinc-800/60 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Leadership</p>
          <h3 className="text-3xl font-bold text-white mb-4">A few principles I lead by</h3>
          <p className="text-zinc-400 mb-12 max-w-xl">The full philosophy is something I'd rather walk you through in conversation.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
              <Users className="text-blue-400 mb-4" size={26} />
              <h4 className="text-base font-semibold text-white mb-3">Coaching to ownership</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Six predictive models mentored into production, $1M+ in retention value per wave. I hand over ownership deliberately, once trust is earned.</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
              <Sparkles className="text-blue-400 mb-4" size={26} />
              <h4 className="text-base font-semibold text-white mb-3">Precision with purpose</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Every model I build ties back to a decision that matters — and to a team that feels safe enough to question it.</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
              <TrendingUp className="text-blue-400 mb-4" size={26} />
              <h4 className="text-base font-semibold text-white mb-3">Building toward Director</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Scaling a high-performing analytics team with succession in mind, and contributing to published methodology in financial analytics. Currently completing CFA Level III.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section id="blog" className="py-24 px-6 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Thought Leadership</p>
          <h3 className="text-3xl font-bold text-white mb-3">Insights &amp; perspectives</h3>
          <p className="text-zinc-400 mb-12 max-w-2xl">Writing on ML system design, pricing strategy, and the realities of building a senior analytics career.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.title} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-blue-500/50 transition-colors">
                <span className="inline-block text-xs font-medium text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full mb-4 w-fit">{post.tag}</span>
                <h4 className="text-base font-semibold text-white mb-3 leading-snug">{post.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{post.teaser}</p>
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 border-t border-zinc-800">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <a href={post.url || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                    Read <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs mt-8 italic">More posts coming soon — this section is ready for your published articles.</p>
        </div>
      </section>


      <section id="projects" className="py-24 px-6 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Featured Work</p>
          <h3 className="text-3xl font-bold text-white mb-12">Case studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <button key={p.title} onClick={() => setActiveProject(i)} className="text-left bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors group">
                <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">{p.tag}</span>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.summary}</p>
                <span className="text-sm text-zinc-500 flex items-center gap-1 group-hover:text-blue-400 transition-colors">Read more <ArrowUpRight size={14} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeProject !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setActiveProject(null)}>
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-lg w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveProject(null)} className="absolute top-5 right-5 text-zinc-500 hover:text-white">
              <X size={20} />
            </button>
            <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">{projects[activeProject].tag}</span>
            <h4 className="text-xl font-semibold text-white mb-4">{projects[activeProject].title}</h4>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{projects[activeProject].summary}</p>
            <ul className="space-y-2">
              {projects[activeProject].details.map((d, i) => (
                <li key={i} className="text-sm text-zinc-300 flex gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <section id="resume" className="py-24 px-6 border-t border-zinc-800/60 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Resume</p>
          <h3 className="text-3xl font-bold text-white mb-6">A snapshot of my career</h3>
          <p className="text-zinc-400 mb-3 max-w-xl mx-auto">Ph.D., Finance &amp; Business Economics — University of Washington (Foster School of Business)</p>
          <p className="text-zinc-500 text-sm mb-10 max-w-xl mx-auto">Senior Manager / Senior Data Scientist, Pricing &amp; Advanced Analytics Modeling — Scotiabank</p>
          <a href="/CV_Priya_Alagarsamy_Jun2026.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
            View Resume <Download size={16} />
          </a>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 border-t border-zinc-800/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h3 className="text-3xl font-bold text-white mb-4">Let's work together</h3>
          <p className="text-zinc-400 mb-10">Open to Director-level analytics leadership roles and select fractional engagements in non-profits.</p>
          <div className="flex justify-center gap-5 mb-10">
            <a href="mailto:kothai.alagarsamy@gmail.com" className="bg-zinc-900 border border-zinc-800 hover:border-blue-400 p-4 rounded-full transition-colors" title="kothai.alagarsamy@gmail.com">
              <Mail size={20} className="text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/priya-alagarsamy/" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-zinc-800 hover:border-blue-400 p-4 rounded-full transition-colors" title="LinkedIn">
              <LinkedinIcon className="text-blue-400" style={{ width: 20, height: 20 }} />
            </a>
            <a href="https://github.com/priyakal" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-zinc-800 hover:border-blue-400 p-4 rounded-full transition-colors" title="GitHub — actively being updated">
              <GithubIcon className="text-blue-400" style={{ width: 20, height: 20 }} />
            </a>
            <a href="tel:+16479177507" className="bg-zinc-900 border border-zinc-800 hover:border-blue-400 p-4 rounded-full transition-colors" title="(647) 917-7507">
              <Phone size={20} className="text-blue-400" />
            </a>
          </div>
          <p className="text-zinc-500 text-sm">Oakville, ON, Canada</p>
          <p className="text-zinc-600 text-xs mt-2">GitHub repos are being updated.</p>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-zinc-600 text-sm border-t border-zinc-800/60">
        © 2026 Priya Alagarsamy. Built with intention.
      </footer>
    </div>
  );
}
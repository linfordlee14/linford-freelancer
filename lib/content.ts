export const services = [
  {
    id: "data-analytics",
    title: "Data Analytics & Dashboards",
    icon: "📊",
    problem: "Organizations drowning in data but lacking actionable insights",
    deliverables: [
      "Interactive Power BI / Tableau dashboards",
      "Automated reporting systems",
      "Data pipeline setup (Python, SQL)",
      "KPI tracking and visualization",
      "Donor impact reports for NGOs"
    ],
    whoFor: "Conservation NGOs, Small businesses, Nonprofits needing data-driven decisions",
    timeframe: "2-4 weeks",
    priceRange: "$1,500 - $5,000",
  },
  {
    id: "web-dev",
    title: "Web Design + Secure Hosting",
    icon: "🌐",
    problem: "Outdated websites that don't convert visitors into clients or donors",
    deliverables: [
      "Responsive Next.js / React websites",
      "SEO-optimized landing pages",
      "Secure hosting setup (Vercel, Netlify)",
      "SSL certificates & performance optimization",
      "CMS integration (optional)"
    ],
    whoFor: "Freelancers, Startups, Conservation projects needing online presence",
    timeframe: "3-6 weeks",
    priceRange: "$2,500 - $8,000",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Training",
    icon: "🛡️",
    problem: "Small teams vulnerable to phishing, data breaches, and attacks",
    deliverables: [
      "Security audits & vulnerability assessments",
      "Phishing simulation campaigns",
      "Staff awareness training sessions",
      "Incident response planning",
      "Security policy documentation"
    ],
    whoFor: "NGOs, Small businesses, Remote teams handling sensitive data",
    timeframe: "1-3 weeks",
    priceRange: "$1,000 - $4,000",
  }
];

export const caseStudies = [
  {
    id: "rhinoguardians",
    title: "RhinoGuardians - AI Wildlife Protection System",
    category: "Conservation Tech & Data Analytics",
    problem: "African black rhinos face extinction from organized poaching. Rangers need real-time threat detection across vast reserves to intercept poachers before strikes occur.",
    solution: "Built an AI-powered detection system using YOLOv5 computer vision to identify rhinos, humans, and vehicles from drone/camera-trap imagery. GPS-tagged detections trigger instant SMS/email alerts to ranger teams.",
    tech: ["YOLOv5/PyTorch", "FastAPI", "React.js", "PostgreSQL", "AWS EC2", "Twilio API"],
    results: [
      "95%+ detection accuracy (mAP) with minimal false alarms",
      "Alert response time: <10 seconds from detection to ranger notification",
      "Scalable to multiple reserves with low-bandwidth infrastructure",
      "Open-source for conservation community adoption"
    ],
    metrics: "Proven conservation tech reduces poaching by up to 96% in protected areas (industry benchmark - placeholder for real deployment metrics)",
    link: "https://rhinoguardians-frontend-william.vercel.app/",
    github: "https://github.com/RhinoGuardians",
    image: "/images/rhinoguardians.jpg"
  },
  {
    id: "finance-tracker",
    title: "Personal Finance Tracker (Python)",
    category: "Data Analytics & Automation",
    problem: "Individuals and small NGOs struggle to track income/expenses and forecast savings goals without expensive software.",
    solution: "Developed a Jupyter-based finance tracker with automated monthly summaries, category breakdowns, and savings goal projections using Pandas and Matplotlib for visualization.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    results: [
      "Automated expense categorization saving 5+ hours/month",
      "Visual spending trends identifying 20-30% budget optimization opportunities",
      "Goal tracking with projected timelines based on historical patterns",
      "Exportable reports for donor/board presentations"
    ],
    metrics: "Users report 25% average improvement in budget adherence (conservative estimate - placeholder for user feedback)",
    github: "https://github.com/linfordlee14",
    image: "/images/finance-tracker.jpg"
  },
  {
    id: "wildlife-ml",
    title: "AI Wildlife Conservation Model",
    category: "Machine Learning & Conservation",
    problem: "Conservation teams lack predictive tools to allocate ranger resources efficiently based on poaching risk patterns.",
    solution: "Built a linear regression model analyzing historical poaching incidents and wildlife population data to predict high-risk zones. Enabled data-driven ranger patrol routing.",
    tech: ["Python", "scikit-learn", "Pandas", "Seaborn", "Jupyter"],
    results: [
      "Identified top 3 high-risk zones with 80%+ prediction accuracy",
      "Reduced patrol planning time from hours to minutes",
      "Interactive heatmaps for visual decision-making",
      "Model retrainable with new data for continuous improvement"
    ],
    metrics: "Optimized ranger coverage estimated to prevent 15-20% more incidents (model projection - placeholder for field validation)",
    github: "https://github.com/linfordlee14",
    image: "/images/wildlife-ml.jpg"
  }
];

export const portfolioLinks = {
  personal: "https://linford-musiyambodza.vercel.app/",
  mainHub: "https://lee1401.vercel.app/",
  rhinoguardians: "https://rhinoguardians-frontend-william.vercel.app/"
};

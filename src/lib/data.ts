export const profile = {
  name: "Prajwal Ravi Devadiga",
  initials: "PRD",
  role: "AI & ML Engineer",
  tagline: "Building intelligent systems — from anomaly detection to immersive web experiences.",
  location: "Karnataka, India",
  email: "prajwalrd011@gmail.com",
  phone: "+91 8073633169",
  github: "https://github.com/Prajwal-Rd-bond",
  linkedin: "https://www.linkedin.com/in/prajwal-r-devadiga-0b1357301",
  resumeNote:
    "AI & ML undergraduate with experience in anomaly detection, deep learning, computer vision, and interactive web applications through academic and industry projects. Skilled in Python, TensorFlow, Streamlit, React, and predictive analytics with a strong interest in AI engineering and intelligent systems.",
};

export const education = {
  school: "N.M.A.M. Institute of Technology (Nitte)",
  degree: "B.Tech in Artificial Intelligence and Machine Learning",
  period: "Expected September 2027",
  coursework: ["Machine Learning", "Deep Learning", "NLP", "Data Mining", "DSA", "OOP"],
};

export const experience = [
  {
    role: "Software Development Intern",
    org: "Dumat — Founding Team, Abu Dhabi (Remote)",
    period: "Summer 2026",
    points: [
      "Worked on the frontend for an early-stage UAE startup's mobile app as part of the founding team.",
      "Built bilingual English/Arabic screens with full right-to-left (RTL) layout support.",
      "Developed features in React Native, collaborating directly with the founder and fellow team members.",
      "Shipped features end to end against a documented product spec.",
    ],
  },
  {
    role: "Junior Associate Engineer Intern",
    org: "Kent PLC, Abu Dhabi",
    period: "Summer 2025",
    points: [
      "Built ML-based instrumentation anomaly detection systems for refinery on-site units.",
      "Developed KIAD using Isolation Forest and LOF models for predictive maintenance.",
      "Designed KPI dashboards, trend charts, anomaly reports, and monitoring visualizations using Streamlit and Plotly.",
      "Improved anomaly detection accuracy by optimizing contamination rates and rolling window logic.",
    ],
  },
];

export const projects = [
  { title: "PharmaGuard", subtitle: "Human-in-the-loop drug-safety review", category: "LLM / RAG", description: "A traceable AI review pipeline connecting retrieval, extraction and human approval. Research prototype with synthetic cases and simulated regulatory gateways.", tags: ["FastAPI", "Qdrant", "React", "LLM pipelines"], url: "https://github.com/Prajwal-Rd-bond/pharmaguard" },
  { title: "Multimodal Medical Imaging", subtitle: "Interpretable computer vision", category: "VISION", description: "Chest X-ray and dermoscopy research with DenseNet121, Grad-CAM, calibration and out-of-distribution experiments. Research demonstration, not a diagnostic tool.", tags: ["PyTorch", "DenseNet121", "Grad-CAM", "FastAPI"], url: "https://github.com/Prajwal-Rd-bond/multimodal-medical-imaging-assistant" },
  { title: "FlyRank ML Workspace", subtitle: "Search data, embeddings & intent", category: "APPLIED ML", description: "Internship learning workspace for data wrangling, embeddings, clustering and search intent. Includes attributed starter and reference material.", tags: ["Python", "Embeddings", "Clustering"], url: "https://github.com/Prajwal-Rd-bond/flyrank-ml-internship-starter" },
  { title: "Astral Explorer", subtitle: "An interactive journey through space", category: "CREATIVE WEB", description: "A 3D solar-system experience exploring orbital movement, dynamic lighting and cinematic camera interactions in the browser.", tags: ["React", "Three.js", "React Three Fiber"], url: "https://github.com/Prajwal-Rd-bond/astral-react" },
];

export const skills = [
  { category: "Programming", items: ["Python", "C++"] },
  { category: "ML / AI", items: ["TensorFlow", "OpenCV", "Streamlit", "NLP", "Computer Vision", "YOLO"] },
  { category: "Frontend", items: ["React", "React Native", "React Three Fiber", "Three.js"] },
  { category: "Technologies", items: ["Machine Learning", "Deep Learning", "Data Analysis", "Anomaly Detection"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "Tools", items: ["VS Code", "Jupyter Notebook", "GitHub", "Google Colab", "Power BI"] },
];

export const certifications = [
  { name: "TensorFlow for Deep Learning Bootcamp", issuer: "Udemy", year: "2026" },
  { name: "Cloud Computing Fundamentals", issuer: "IBM SkillsBuild", year: "2025" },
  { name: "Modernize Infrastructure and Applications with Google Cloud", issuer: "SkillUp", year: "2025" },
  { name: "Computer Networks and Internet Protocol (Elite)", issuer: "NPTEL, IIT Kharagpur", year: "2026" },
];

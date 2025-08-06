  const education = [
    
    {
      school: "Arizona State University ",
      degree: "Master of Computer Science ",
      years: "2024 March – 2025 March",
      details: "Specialized in Machine Learning, Big Data Analytics, and real-world AI deployment."
    },
    {
      school: "University of Georgia",
      degree: "Master of Landscape Architecture",
      years: "2009 – 2012",
      details: "Specialized in Environmental Design, Visual Communication, and High-end Residential Design."
    }
  ];

  const projects = [
    // AI Projects
    {
      title: "Baseball Batting Gesture Analysis",
      description: "Built a real-time baseball gesture recognition system using MediaPipe and PyTorch, deployed on NVIDIA Jetson.",
      tech: ["Python", "PyTorch", "MediaPipe", "NVIDIA Jetson"],
      image: "src/assets/images/baseball.png",
      link: "https://github.com/wenliu04/batcoach-ai",
      category: "AI",
      skills: ["Python", "PyTorch", "MediaPipe", "NVIDIA Jetson"],
    },
    {
      title: "Gesture Recognition for Smart Home Control",
      description: "Created lightweight gesture classification pipeline to trigger smart-home actions via mobile device.",
      tech: ["MediaPipe", "Kotlin", "Python", "Android"],
      image: "src/assets/images/gesture-recognition.png",
      link: "https://github.com/yourrepo/gesture-recognition",
      category: "AI",
      skills: ["MediaPipe", "Kotlin", "Python",  "Android"],
    },
    {
      title: "Robot Collision Prediction Neural Network",
      description: "Built and trained a custom neural network to predict collisions in a simulated robot navigation task. Collected real-world sensor-action data, developed a PyTorch DataLoader pipeline, and deployed the model to enable autonomous navigation with collision avoidance.",
      tech: ["PyTorch", "Python"],
      image: "/images/plant-ai.jpg",
      link: "https://github.com/yourrepo/plant-recognition",
      category: "AI",
      skills: ["PyTorch", "Python"],
      
    },
    {
      title: "Robot Collision Prediction Neural Network",
      description: "Developed a PyTorch model and frontend UI to classify landscape plants using leaf images.",
      tech: ["PyTorch", "React", "OpenCV", "Django"],
      image: "/images/plant-ai.jpg",
      link: "https://github.com/yourrepo/plant-recognition",
      category: "AI",
      skills: ["Colab", "DPR", "GPT-2", "RAG"],
      
    },
    // Backend Projects
    {
      title: "Little Lemon Restaurant",
      image: "src/assets/images/LittleLemon.png",
      description:
        "A full-featured RESTful API built with Django and DRF, supporting reservations, menu items, and user roles with JWT authentication.",
      tech: ["Django", "Git", "VS Code", "React", "PostgreSQL", "HTML/CSS", "Python"],
      link: "https://github.com/wenliu04/LittleLemon",
      category: "Full Stack",
      skills: ["Django", "Git", "VS Code", "React", "PostgreSQL", "HTML/CSS", "Python"],
    },
    {
      title: "Personal Portfolio",
      image: "/src/assets/images/PersonalPortfolio.png",
      description:
        "Implemented a credit scorecard system using SAS with logistic regression, WOE/IV transformation, and binning techniques for risk modeling.",
      tech: ["JavaScript","Django", "Git", "VS Code", "React", "PostgreSQL", "HTML/CSS", "Python"],
      link: "https://github.com/wenliu04/Portfolio-site",
      category: "Full Stack",
      skills: ["JavaScript", "Django", "Git", "VS Code", "React", "PostgreSQL", "HTML/CSS", "Python"],
    },
    {
      title: "PlantID Web App",
      image: "/src/assets/images/PlantID.png",
      description:
        "A web application for classifying plants based on images using a deep learning model.",
      tech: ["Django", "React", "TensorFlow", "OpenCV"],
      link: "https://github.com/yourname/plantid-web-app",
      category: "Full Stack",
      skills: ["Django", "React", "TensorFlow", "OpenCV"],
    },
    // Landscape Design Projects
    {
      title: "Desert Backyard Oasis",
      image: "/images/desert-backyard.png",
      description:
        "A 40ft x 100ft Las Vegas backyard redesigned with drought-tolerant plants, 3D visualized outdoor kitchen, firepit, and pool.",
      tech: ["AutoCAD", "SketchUp", "Planting Design", "3D Modeling"],
      link: "https://github.com/yourname/desert-backyard",
      category: "Landscape",
    },
    {
      title: "Campus Green Infrastructure Plan",
      image: "/images/green-campus.png",
      description:
        "Sustainable landscape plan integrating stormwater management and native species for a university campus.",
      tech: ["GIS", "Hydrology", "Ecological Design"],
      link: "https://github.com/yourname/green-campus",
      category: "Landscape",
    },
    {
      title: "AI Plant Selector Tool",
      image: "/images/plant-selector.png",
      description:
        "Developed a machine-learning based tool that recommends suitable plants by region, using a custom-trained PlantCV model.",
      tech: ["AI", "PlantCV", "Jetson Nano", "Python"],
      link: "https://github.com/yourname/plant-selector",
      category: "Landscape",
    }

  ];

  const skillSets = {
  "AI Developer": {
    Languages: [
      { name: "Python", icon: "fa-python", prefix: "fab", color: "text-blue-500" },
      { name: "Clingo", icon: "fa-brain", prefix: "fas", color: "text-pink-500" },
      { name: "Kotlin", icon: "fa-android", prefix: "fab", color: "text-green-700" },
    ],
    Frameworks: [
      { name: "PyTorch", icon: "fa-fire", prefix: "fas", color: "text-red-500" },
      { name: "TensorFlow", icon: "fa-brain", prefix: "fas", color: "text-orange-600" },
      { name: "MediaPipe", icon: "fa-video", prefix: "fas", color: "text-pink-600" },
    ],
    Tools: [
      { name: "Jupyter", icon: "fa-book", prefix: "fas", color: "text-orange-400" },
      { name: "Colab", icon: "fa-google", prefix: "fab", color: "text-yellow-500" },
      { name: "NVIDIA Jetson", icon: "fa-microchip", prefix: "fas", color: "text-green-500" },
      { name: "Android", icon: "fa-android", prefix: "fab", color: "text-green-700" },
    ],
  },
  "Full Stack Engineer": {
    Languages: [
      { name: "JavaScript", icon: "fa-js", prefix: "fab", color: "text-yellow-400" },
      { name: "SQL", icon: "fa-database", prefix: "fas", color: "text-green-600" },
      { name: "Python", icon: "fa-python", prefix: "fab", color: "text-blue-500" },
      { name: "HTML/CSS", icon: "fa-html5", prefix: "fab", color: "text-orange-500" },
    ],
    Frameworks: [
      { name: "Django", icon: "fa-python", prefix: "fab", color: "text-green-700" },
      { name: "PostgreSQL", icon: "fa-database", prefix: "fas", color: "text-indigo-700" },
      { name: "React", icon: "fa-react", prefix: "fab", color: "text-blue-500" },
    ],
    Tools: [
      { name: "Git", icon: "fa-git-alt", prefix: "fab", color: "text-red-600" },
      { name: "VS Code", icon: "fa-code", prefix: "fas", color: "text-blue-500" },
    ],
  },
  "Landscape Designer": {
   
    Tools: [
      { name: "Photoshop", icon: "fa-image", prefix: "fas", color: "text-blue-600" },
      { name: "SketchUp", icon: "fa-cube", prefix: "fas", color: "text-green-700" },
      { name: "AutoCAD", icon: "fa-drafting-compass", prefix: "fas", color: "text-yellow-600" },
      { name: "Structure Studio", icon: "fa-cube", prefix: "fas", color: "text-purple-600" },
    ]
  },
};

  export {
    education,
    projects,
    skillSets
  };
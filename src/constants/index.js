export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  // {
  //   id: 4,
  //   name: 'Contact',
  //   href: '#contact',
  // },
];

export const skillsData = [
  "Python",
  "Pandas",
  "Numpy",
  "Langchain",
  "Node.js",
  "Express.js",
  "MongoDB",
  "React.js",
  "Rest APIs",
  "SQL",
  "Financial Data Analysis",
  "C++",
  "Java",
  "Git",
];

export const myProjects = [
  {
    title: 'Cloth Simulation',
    desc: 'A real-time simulation of cloth dynamics using C++ and ',
    subdesc: 'Implemented using a custom physics engine using Spring Mass Model',
    github: 'https://github.com/Dd1235/Simulations/tree/main/cloth_verlet', 
    texture: '/assets/Cloth.mov',
    
    technologies: ['C++', 'SFML', 'Physics Engine'],
  },
  {
    title: 'Pidilite Financial Analysis',
    desc: 'A detailed financial statement analysis of Pidilite Industries using Python and Pandas to extract actionable insights.',
    subdesc: 'This project focuses on analyzing key financial metrics, trends, and ratios, helping stakeholders make data-driven decisions.',
    github: 'https://github.com/Dd1235/PIDILITE_Analysis', 
    texture: '/assets/pidilite.mov', 
    
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
  },
  {
    title: 'NGO Prototype',
    desc: 'A scalable backend system for an NGO prototype.',
    subdesc: 'Worked in a team of 2. Designed and implemented using Express.JS and MongoDB, with RESTful APIs to handle data and enable seamless integration with a frontend.',
    github: 'https://github.com/Dd1235/Hacknite2024', 
    texture: '/assets/edureach.mov', 
    
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    spherePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    torusPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    sinPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 5, 0] : isTablet ? [-12, 7, 0] :  [-15, 4, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

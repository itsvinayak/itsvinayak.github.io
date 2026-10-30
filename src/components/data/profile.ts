export interface Project {
  title: string;
  description: string;
  // Shown only when provided.
  link?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date?: string;
  expires?: string;
  link?: string;
}

export const linkedInProfileUrl = 'https://www.linkedin.com/in/itsvinayak/';
export const linkedInCertificationsUrl = `${linkedInProfileUrl}details/certifications/`;

export const CertificatesData: Certificate[] = [
  {
    name: 'Java Multithreading - Concurrency, Parallelism & Performance',
    issuer: 'Udemy',
    date: 'Oct 2026',
    link: 'http://ude.my/UC-7ccaaa36-777f-47b8-9d97-f0d253ecf21c',
  },
  {
    name: 'Pratishthan Hackathon 1.0 2025 Volunteer',
    issuer: 'Pratishthan Software Ventures Pvt. Ltd',
    date: 'Feb 2025',
    expires: 'Feb 2026',
    link: 'https://pratishthanventures.com/hackathon-2025/volunteer-vinayak/',
  },
  {
    name: 'Fundamentals of Backend Engineering',
    issuer: 'Udemy',
    date: 'Oct 2024',
    link: 'https://www.udemy.com/certificate/UC-62954b3a-fc52-41e9-a956-a4b66937203a/',
  },
  {
    name: 'Ansible for the Absolute Beginner - Hands-On - DevOps',
    issuer: 'Udemy',
    date: 'Jan 2024',
    link: 'https://www.udemy.com/certificate/UC-89bf9960-1713-4c98-a3cd-961302b94baf/',
  },
  {
    name: 'The Complete Guide to Becoming a Software Architect',
    issuer: 'Udemy',
    date: 'May 2023',
    link: 'https://www.udemy.com/certificate/UC-5f441d7e-938b-4c5b-92d0-4b17c94a8f17/',
  },
  {
    name: 'Linux Tmux',
    issuer: 'Udemy',
    date: 'Oct 2022',
    link: 'https://www.udemy.com/certificate/UC-e7a33c9f-3376-4eb3-a709-ecfd8862def3/',
  },
  {
    name: 'Blockchain A-Z™: Learn How To Build Your First Blockchain',
    issuer: 'Udemy',
    date: 'Oct 2022',
    link: 'https://www.udemy.com/certificate/UC-b1986249-5eeb-4828-82ed-e1ecb47e8bb7/',
  },
  {
    name: 'Linux Bash Scripting',
    issuer: 'Udemy',
    date: 'Oct 2022',
    link: 'https://www.udemy.com/certificate/UC-47eb62bc-9ea4-4fef-b26f-03bd76986ed0/',
  },
  {
    name: 'Docker & Kubernetes: The Practical Guide',
    issuer: 'Udemy',
    date: 'Sep 2022',
    link: 'https://www.udemy.com/certificate/UC-a0170dc9-e051-4e9a-ac9b-adbcc4748663/',
  },
  {
    name: 'RU301: Running Redis at Scale',
    issuer: 'Redis',
    date: 'Jul 2022',
    link: 'https://university.redis.com/certificates/237730ef1fcf4a9cafc5f76fcb0f977f',
  },
  {
    name: 'RU102JS: Redis for JavaScript Developers',
    issuer: 'Redis',
    date: 'Jul 2022',
    link: 'https://university.redis.com/certificates/de494fe9f81e4f5b8e9a52d0ca17ee19',
  },
  {
    name: 'Back End Development and APIs',
    issuer: 'freeCodeCamp',
    date: 'Nov 2021',
    link: 'https://freecodecamp.org/certification/itsvinayak/back-end-development-and-apis',
  },
  {
    name: 'Java programming',
    issuer: 'Great Learning',
    date: 'Sep 2021',
    link: 'https://olympus1.greatlearning.in/course_certificate/UHSUCOVJ',
  },
  {
    name: 'SQL & PostgreSQL for Beginners: Become an SQL Expert',
    issuer: 'Udemy',
    date: 'Aug 2021',
    link: 'https://www.udemy.com/certificate/UC-147536a7-5f11-4823-91a2-ed5dcb72ccc8/',
  },
  {
    name: 'Getting started with MySQL command line',
    issuer: 'Cognitive Class',
    date: 'Aug 2021',
    link: 'https://courses.cognitiveclass.ai/certificates/79a5de82241e45c3a7085f74e66ce64c',
  },
  {
    name: 'AWS S3 Basics',
    issuer: 'Coursera',
    date: 'Aug 2021',
    link: 'https://www.coursera.org/account/accomplishments/certificate/2Y43DL3S6SCC',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google',
    date: 'Aug 2021',
    link: 'https://www.coursera.org/account/accomplishments/certificate/8ED2TPDUCC59',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Coursera',
    date: 'Aug 2021',
    link: 'https://www.coursera.org/account/accomplishments/certificate/8ED2TPDUCC59',
  },
  {
    name: 'Node-RED: basics to bots',
    issuer: 'Cognitive Class',
    date: 'Jun 2021',
    link: 'https://courses.cognitiveclass.ai/certificates/41298d11ede945278a659eb023f980d0',
  },
  {
    name: 'Selenium WebDriver With Python 3.x - Novice To Ninja',
    issuer: 'Udemy',
    date: 'Apr 2021',
    link: 'https://www.udemy.com/certificate/UC-41f285a8-f432-4ab4-a987-704bd56ae566/',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Apr 2021',
    link: 'https://freecodecamp.org/certification/itsvinayak/javascript-algorithms-and-data-structures',
  },
  {
    name: 'Chegg',
    issuer: 'Chegg India',
    link: 'https://cheggindia.teachable.com/courses/1368929/certificate?certificate_first_issued=true',
  },
  {
    name: 'Corporate Sales Manager',
    issuer: 'Aspiring Minds',
    date: 'Dec 2020',
    expires: 'Dec 2021',
    link: 'https://www.myamcat.com/certificate/12041330/corporate-sales-manager/266',
  },
  {
    name: 'Data Processing Specialist',
    issuer: 'Aspiring Minds',
    date: 'Dec 2020',
    expires: 'Dec 2021',
    link: 'https://www.myamcat.com/certificate/12041330/data-processing-specialist/211',
  },
  {
    name: 'Software Development Trainee',
    issuer: 'Aspiring Minds',
    link: 'https://www.myamcat.com/certificate/12041330/software-development-trainee/166',
  },
  {
    name: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'Jul 2020',
    link: 'https://www.hackerrank.com/certificates/691be2a100ee',
  },
  {
    name: 'JavaScript Essentials',
    issuer: 'Udemy',
    date: 'May 2020',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-06e3dd84-20a0-40ac-8713-ed551a696cda.pdf',
  },
  {
    name: 'Modern React with Redux',
    issuer: 'Udemy',
    date: 'May 2020',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6546dd08-7f23-4f1d-8e4d-358ca2a6a046.pdf',
  },
  {
    name: 'How Google does Machine Learning',
    issuer: 'Coursera',
    date: 'Feb 2020',
    link: 'https://www.coursera.org/account/accomplishments/verify/2MYDXHFZJCNR',
  },
  {
    name: 'Python Data Structures',
    issuer: 'Coursera',
    date: 'Nov 2018',
    link: 'https://www.coursera.org/account/accomplishments/verify/S8E2EAHMGUP6',
  },
  {
    name: 'Responsive Website Basics: Code with HTML, CSS, and JavaScript',
    issuer: 'Coursera',
    date: 'Oct 2018',
    link: 'https://www.coursera.org/account/accomplishments/verify/UZTJZ7FV2VGW',
  },
  {
    name: 'Using Python to Access Web Data',
    issuer: 'Coursera',
    date: 'Sep 2018',
    link: 'https://www.coursera.org/account/accomplishments/records/V9PCXRM5XJHT',
  },
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    date: 'Jul 2018',
    link: 'https://www.coursera.org/account/accomplishments/verify/XN9CLPAC263M',
  },
];

export const ProjectsData: Project[] = [
  {
    title: 'NACH payment system',
    description:
      'Designed and implemented the NACH payment system at Pratishthan Software Ventures.',
  },
  {
    title: 'SEPA payments (EBRT1, EBSDD, EBSCT)',
    description:
      'Built SEPA payment products, from design through deployment, while leading the team.',
  },
  {
    title: 'BOOK, QCBRTP and UAERTP payments',
    description: 'Delivered regional payment products as a team lead.',
  },
  {
    title: 'Finacle OE Payments backend (HKFPS)',
    description:
      'Backend for the Hong Kong Faster Payment System, including Foreign Exchange enablement and bulk database inserts across the Transaction Handler, inbound and outbound microservices.',
  },
  {
    title: 'ACH products',
    description: 'Development and integration of ACH payment products.',
  },
  {
    title: 'Vessel data web scraper and ELT pipeline',
    description:
      'Scraped vessel data and built an ELT pipeline with singer.io and Airflow at Metaorigin Labs.',
    link: 'https://example.com/projects/vessel-data-pipeline',
  },
  {
    title: 'Music subtitle generator',
    description: 'Flask based full stack website for generating subtitles from music audio.',
    link: 'https://example.com/projects/music-subtitle-generator',
  },
  {
    title: 'Digital asset management (s3-dam)',
    description:
      'Django based asset management with Mayan EDMS and django-photologue, tested with Docker, Git and Travis CI.',
    link: 'https://example.com/projects/s3-dam',
  },
];

export const SkillsData = [
  {
    category: 'Backend & Architecture',
    items: [
      'Backend engineering',
      'Distributed systems',
      'Microservices',
      'REST APIs',
      'Payment processing',
      'Performance optimization',
    ],
  },
  {
    category: 'Languages & Frameworks',
    items: ['Java', 'Node.js', 'Python', 'Django', 'Flask', 'React'],
  },
  {
    category: 'Data & Messaging',
    items: ['RabbitMQ', 'Redis', 'MongoDB', 'Airflow'],
  },
  {
    category: 'Tooling',
    items: ['Docker', 'Git', 'Bash'],
  },
];

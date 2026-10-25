
export const projects = [
  // PROJECT 1 — HAUNTRA
  {
    slug: 'hauntra',
    title: 'HAUNTRA',
    category: 'Game Development',
    summary: 'A horror survival game set in a haunted mansion.',
    tech: ['Unity', 'Blender', 'C#', 'Python', 'Canva', 'Audacity'],

    image: '/images/hauntra.png',
    imageAlt: 'HAUNTRA cover page',

    overview:
      'HAUNTRA is a horror survival game where players explore an abandoned mansion, solve puzzles, uncover its dark secrets, and survive supernatural threats to escape alive.',
    objective:
      'Create an immersive horror game that challenges players to explore, solve puzzles, and survive.',
    description:
      'Players are trapped in an abandoned house and must find a way to escape while avoiding the ghostly presence that haunts it.',
    role: 'Game Developer',

    repoUrl: 'https://namme123.itch.io/hauntra',
  },

  // PROJECT 2 — HUNTED ESCAPE
  {
    slug: 'hunted-escape',
    title: 'HUNTED ESCAPE',
    category: 'Game Development',
    summary: 'A horror escape game set in a maze.',
    tech: ['HTML', 'CSS', 'JavaScript'],

    image: '/images/hunted.png',
    imageAlt: 'HUNTED ESCAPE cover page',

    overview:
      'HUNTED ESCAPE is a horror escape game where players explore a haunted house and try to survive.',
    objective:
      'Create an engaging escape game with puzzles and a suspenseful atmosphere.',
    description:
      'Players must solve puzzles and avoid the ghostly presence to find a way out of the house.',
    role: 'Developer',

    repoUrl: 'https://jemjem56.github.io/EVD_SEMI_HuntedEscape/',
  },

  // PROJECT 3 — FRESHWAVE
  {
    slug: 'freshwave',
    title: 'FRESHWAVE',
    category: 'Web Application',
    summary: 'A modern web application designed to provide users with a clean, intuitive, and responsive online experience for laundry services.',
    tech: ['Python', 'Django', 'Rest API', 'Bootsrap', 'PostgreSQL', 'SMTP', 'SMS API'],

    image: '/images/Freshwave.png',
    imageAlt: 'Freshwave main page',

    overview: 'Freshwave is a laundry management web application designed to help laundry business owners streamline their daily operations. It provides a digital approach to managing laundry transactions and business records, reducing the need for manual documentation.',
    objective: 'The main objective of Freshwave is to simplify and automate laundry shop operations by minimizing manual record-keeping, improving the organization of business information, and helping owners manage their workflow more efficiently.',
    description: 'Freshwave is designed to make laundry business management more convenient by digitizing routine tasks and organizing important business records in one platform. The application aims to reduce paperwork, minimize recording errors, and improve workflow efficiency, allowing laundry owners to focus more on their services and customers.',
    role: 'Full-Stack Developer',

    repoUrl: 'https://github.com/jemjem56/Freshwave_System',
  },

  // PROJECT 4 — WASHKA
  {
    slug: 'washka',
    title: 'WASHKA',
    category: 'Web Application',
    summary: 'A digital laundry solution that connects customer service with organized shop operations through a simple and accessible web interface.',
    tech: ['HTML', 'CSS', 'MySQL', 'JavaScript', 'PHP'],

    image: '/images/Washka.png',
    imageAlt: 'Washka main page', 
    
    overview: 'Washka is a web-based system developed to support the daily activities of laundry businesses. It brings essential laundry records and operational tasks into a centralized platform, making information easier to access, track, and maintain.',
    objective: 'To develop a practical laundry management solution that improves record organization, simplifies transaction monitoring, and supports a more systematic approach to handling customer orders.',
    description: 'The system provides a digital workspace for managing laundry-related information and monitoring service progress. Its website interface introduces customers to the laundry service, while its management features help organize business records and reduce reliance on handwritten documentation. Washka aims to make routine tasks more manageable and provide a smoother workflow for laundry shop operations.',
    role: 'Full-Stack Developer',

    repoUrl: 'https://github.com/jemjem56/Washa-Laundry_System',    
  }
]

export const getProject = (slug) =>
  projects.find((project) => project.slug === slug)

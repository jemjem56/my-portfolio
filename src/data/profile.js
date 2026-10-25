// EDIT THIS FILE to personalise the site. Values starting with "[" are placeholders.
export const profile = {
  name: 'James Bonghanoy Panugaling',
  firstName: 'James',
  middleName: 'Bonghanoy',
  lastName: 'Panugaling',
  monogram: 'JP',
  title: 'Aspiring Software Developer',
  shortIntro: 'Student developer based in Cebu City, Philippines.',
  headline:
    'A student developer driven by curiosity, creativity, and a passion for building clean, user-friendly digital experiences. Always learning, always creating, and turning ideas into reality.',
  location: 'Lamacan, Babag, Cebu City, Philippines',
  email: 'jamespanugaling16@gmail.com',
  github: 'https://github.com/jemjem56',
  linkedin: 'https://www.linkedin.com/in/james-panugaling-46b323409/',
  photo: '/images/Home.png', // file lives in public/images/
  photo1: '/images/portrait.png', // file lives in public/images/
  photo2: '/images/hauntra.jpg', // file lives in public/images/
  photo3: '/images/hunted.png', // file lives in public/images/
  photoAlt: 'James Panugaling in a dark formal suit and tie',
  photoAlt1: 'James Panugaling in a casual setting',
  photoAlt2: 'Picture of Hauntra',
  photoAlt3: 'Picture of Hunted Escape',

  resume: '/resume.pdf', // file lives in public/
  resumeFileName: 'James-Panugaling-Resume.pdf',
  focus: ['Curiosity', 'Clean, user-friendly design'], // floating hero labels (from your bio)
  approach: [
    'Stay curious and keep learning.',
    'Build clean, user-friendly interfaces.',
    'Turn ideas into working products.',
  ],
  education: [
    { school: 'Cebu Eastern College, Inc', program: 'Bachelor of Science in Information Technology', years: '4th Year' },
  ],
  interests: 'Software development, Backend Development, responsive website design, and game development using Unity and Blender.',
  goals: 'My goal is to become a skilled developer who creates user-friendly, visually appealing, and functional digital experiences. I aim to continuously improve my programming and design skills while building projects that demonstrate my creativity, problem-solving abilities, and technical knowledge.',
  // Only list tools you genuinely use. Empty groups show a placeholder.
  
skills: [
  {
    group: 'Frontend Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    group: 'UI/UX Design',
    items: ['Responsive Design', 'Wireframing', 'Prototyping', 'UI Design', 'Figma', 'Framer'],
  },
  {
    group: 'Programming Languages',
    items: ['JavaScript', 'Python', 'C#', 'Java', 'SQL', 'PHP', 'C++', 'Django', 'Rest API'],
  },
  {
    group: 'Tools and Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Unity', 'Blender', 'Canva', 'Audacity'],
  },
],

}

export const isReal = (v) => typeof v === 'string' && v.trim() !== '' && !v.trim().startsWith('[')

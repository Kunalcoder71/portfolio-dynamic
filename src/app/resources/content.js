import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kunal",
  lastName: "Rajak",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/gallery/123.jpg",
  email: "kunalrajak979@gmail.com",
  location: "Asia/Kolkata", // Correct IANA time zone for Kolkata
  languages: ["English", "Hindi", "Bengali"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about web development, technology trends, and share my thoughts on creative engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kunalcoder71",
  },
  {
    name: "X",
    icon: "x",
    link: "", // You can add your Twitter/X link here if you have one
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.name}, a passionate Web Developer crafting beautiful and functional user experiences.
      <br /> Always learning, always building.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Hide calendar unless you want to add a real booking link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello! I'm {person.name}, a Kolkata-based Web Developer passionate about creating clean, responsive, and impactful web applications. 
        I love working at the intersection of technology and creativity.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2022 - Present",
        role: "Web Developer",
        achievements: [
          <>Developed responsive websites using modern web technologies like React.js, Node.js, and Tailwind CSS.</>,
          <>Collaborated with clients to transform ideas into reality and improve their online presence.</>,
        ],
        images: [],
      },
      {
        company: "Self Projects",
        timeframe: "2021 - 2022",
        role: "Frontend Developer",
        achievements: [
          <>Built several personal and freelance projects to strengthen frontend development skills.</>,
          <>Focused on accessibility, performance, and responsive design.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Swami Vivekananda University",
        description: <>Pursuing Computer Science Engineering.</>,
      },
      {
        name: "Self Learning",
        description: <>Learning Full-Stack Web Development with a focus on frontend technologies.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "HTML, CSS, JavaScript",
        description: <>Building beautiful, responsive UIs with strong fundamentals.</>,
        images: [],
      },
      {
        title: "React.js",
        description: <>Creating dynamic SPAs and interactive frontends using React.</>,
        images: [],
      },
      {
        title: "Node.js",
        description: <>Backend development with Node.js and Express.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Web Development and Tech...",
  description: `Read what ${person.name} has been exploring recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Development projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A collection of my favorite moments and inspirations.`,
  images: [
    {
      src: "/images/gallery/123.jpg",
      alt: "image",
      orientation: "vertical",
    },
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

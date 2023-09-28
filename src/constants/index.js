import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  docker,
  springBoot,
  jsp,
  mysql,
  thymeleaf,
  postgresql,
  microservices,
  hibernate,
  aws,
  digitalocean,
  foss,
  gdsc,
  techBlog,
  contactManager,
  whatsapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Spring Boot Developer",
    icon: springBoot,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "spring boot",
    icon: springBoot,
  },
  {
    name: "jsp",
    icon: jsp,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "microservices",
    icon: microservices,
  },
  {
    name: "hibernate",
    icon: hibernate,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "digitalocean",
    icon: digitalocean,
  },
];

const experiences = [
  {
    title: "Backend Facilitator",
    company_name: "Google DSC FETJU",
    icon: gdsc,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Leading backend development efforts for web applications using Spring Boot.",
      "Optimizing database queries and improving server performance.",
      "Integrating third-party APIs to enhance application functionality.",
    ],
  },
  {
    title: "Technical Officer",
    company_name: "FOSS",
    icon: foss,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Managing technical aspects of open-source projects and contributing code.",
      "Implementing best practices for software development and version control.",
      "Troubleshooting and resolving technical issues in collaboration with the community.",
      "Promoting open-source initiatives through advocacy and educational events.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Whatsapp Clone",
    description:
      "A real-time messaging application that replicates the functionality of WhatsApp, allowing users to send text messages, images, videos, and documents to their contacts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "white-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/dipenbhat557/Whatsapp-clone",
  },
  {
    name: "Tech Blog",
    description:
      "A blogging platform where users can write and publish articles on various technology topics, read articles from other authors, and engage in discussions through comments.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "servlet",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: techBlog,
    source_code_link: "https://github.com/dipenbhat557/TechBlog",
  },
  {
    name: "Contact Manager",
    description:
      "An application for managing and organizing contacts, including features for adding, editing, and deleting contacts, as well as searching for specific contacts.",
    tags: [
      {
        name: "thymeleaf",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: contactManager,
    source_code_link: "https://github.com/dipenbhat557/Smart-Contact-Manager",
  },
];

export { services, technologies, experiences, testimonials, projects };

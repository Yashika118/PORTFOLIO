import Project1 from "../projects/Project1.png";
import Project2 from "../projects/Project2.png";
import Project3 from "../projects/Project3.png";
import Project4 from "../projects/Project4.png";
import Project5 from "../projects/Project5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = "I am Yashika, an aspiring software developer with a strong foundation in full-stack web development and hands-on experience in building innovative and efficient applications. I have worked on projects like Schedulify, a CPU scheduling algorithm simulator; Breeze Talk, a real-time chat application; and Cocktail Creator, a dynamic recipe search tool. Proficient in technologies such as JavaScript, React, Node.js, MongoDB, and PostgreSQL, I excel at creating secure, user-friendly, and scalable applications. Beyond technical expertise, I also take pride in my leadership role as the PR Head of Pratibimb – The Dramatics and Filmmaking Society. Passionate about problem-solving and continuous learning, I am dedicated to delivering impactful solutions through technology.";

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior Software Developer",
    company: "Growth Marketers",
    description: `Developed CRM modules using JavaScript, React, and Node.js with Express, ensuring smooth data flow and efficient communication between system components. Integrated Google OAuth for secure authentication, enhancing user trust and safeguarding sensitive information. Performed rigorous testing and debugging to ensure software quality and reliability. Optimized data storage and retrieval processes using PostgreSQL and SQL Server, ensuring high performance and scalability. Leveraged GitHub for version control, enabling seamless collaboration, efficient code management, and streamlined tracking of changes throughout the development lifecycle.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Library Management System",
    image: Project5,
    website:"https://library-management-system-7vtt.onrender.com",
    description:
      "Developed a full-stack web application using Node.js, Express, React for librabry management system",
    technologies: ["HTML", "Tailwind css", "Node.js", "Express","Axios", "Daisyui","React", "MongoDB"],
  },
  {
    title: "Schedulify",
    image: Project1,
    website:"https://schedulify-nine.vercel.app",
    description:
      "Developed a web-based application to simulate and visualize various CPU scheduling algorithms, including FCFS, SJF, Round Robin, and Priority Scheduling. Designed an intuitive user interface to ensure a seamless user experience and enable efficient comparison of algorithm performance. Implemented these scheduling algorithms from scratch, leveraging in-depth knowledge of operating systems concepts and algorithms.",
    technologies: ["Javascript","HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Breeze Talk",
    image: Project2,
    website:"https://breeze-talk.onrender.com",
    description:
      "Developed a full-stack real-time chat application using React with Vite, Tailwind CSS, and Daisy UI, delivering a responsive user interface for an enhanced user experience. Integrated Socket.io to enable real-time, bi-directional communication, ensuring seamless and instant data updates between the client and server. Implemented secure user authentication and password hashing using bcrypt, JWT, and MongoDB. Integrated Cloudinary for efficient media management and Axios for streamlined API interactions and data fetching.",
    technologies: ["React", "Javascript", "MongoDB", "Node.js"],
  },
  {
    title: "Book Store",
    image: Project4,
    website:"https://bookstore-1-5n5x.onrender.com",
    description:
    "Developed a web application using React",
    technologies: ["HTML", "Tailwind css","MongoDB","Node.js","Express", "Daisyui", "React"],
  },
  {
    title: "Cocktail Creator",
    image: Project3,
    website:"https://cocktail-capstone-project.onrender.com",
    description:
      "Developed a web application using Node.js, Express, and EJS to display drink recipes and information dynamically. Integrated Axios to fetch data from an external API, enabling access to comprehensive cocktail recipes and detailed ingredient information. Designed an intuitive user interface to render real-time data, ensuring a smooth and engaging user experience. Implemented search functionality, allowing users to find cocktails by name or ingredient, enhancing accessibility and usability of the application.",
    technologies: ["HTML", "CSS", "Node.js", "Bootstrap","Axios"],
  },
  

];

export const CONTACT = {
  phoneNo: "+91 9310045084 ",
  email: "kumariyashika78@gmail.com",
};
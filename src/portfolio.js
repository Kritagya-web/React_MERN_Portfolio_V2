/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kritagya's Portfolio",
  description:
    "Passionate about crafting scalable, sustainable systems that drive impact.",
  og: {
    title: "Kritagya Kumra Portfolio",
    type: "website",
    url: "http://kritagyakumra.netlify.com/",
  },
};

//Home Page
const greeting = {
  title: "Kritagya Kumra",
  logo_name: "KritagyaKumra",
  nickname: "Kritagya-web",
  subTitle:
    "Passionate about crafting scalable, sustainable systems that drive impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kxk5WS9WHZjbll8SIj5gS-v5rNZuucrl/view?usp=sharing",
  portfolio_repository:
    "https://github.com/Kritagya-web/Kritagya_React_Portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Kritagya-web",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kritagya-kumra-bba9b41b6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kritagyakumra@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/kritagya.kumra",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kritagyakumra/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F28C28",
      },
      profileLink: "https://leetcode.com/Kritagya7777/",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/kritagyakumra",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@kritagya6",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/kritagyakumra",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#F28C28",
      },
      profileLink:
        "https://www.codingninjas.com/codestudio/profile/34a33414-da35-4b62-ab67-1507226c6539",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "California State University, Los Angeles",
      subtitle: "Master's in Computer Science (MSCS)",
      logo_path: "calstatela.png",
      alt_name: "California State University, Los Angeles",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Built projects in algorithms, networks, security, AI, and full-stack (MERN & Svelte). ",
        "⚡ Skilled in penetration testing, distributed systems, and cloud technologies.",
        "⚡ Developed full-stack apps at Gannon University & led AI projects at HeadStarter AI, winning a Hackathon.",
        "⚡ Led IT solutions at CSULA-ITS, resolving network & software issues, improving the Get Portal & website.",
        "⚡ AWS CCP certified, with expertise in AI, full-stack, and cloud development.",
      ],
      website_link: "https://www.calstatela.edu/",
    },
    {
      title: "Guru Nanak Dev University, Amritsar",
      subtitle: "B.Tech Computer Science & Engineering",
      logo_path: "gndu_logo.png",
      alt_name: "GNDU Main Campus, Amritsar",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Mastered Software Engineering fundamentals (OOPs, DBMS, OS, Cloud, etc.). ",
        "⚡ Built projects in ML, DS, Python, Java, ReactJS, Full Stack Development.  ",
        "⚡ Gained leadership and teamwork skills through Hackathons and open-source contributions.  ",
        "⚡ Secured internship at KPMG in Gurugram for outstanding university performance.",
      ],
      website_link: "https://online.gndu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "AWS CCP",
      logo_path: "aws_ccp_exam.png",
      certificate_link:
        "https://www.credly.com/badges/2f86b061-fff8-4d02-9f63-8de91cd3fb33/public_url",
      alt_name: "AWS",
      color_code: "#FFFFFF",
    },
    {
      title:
        "6 Months Internship Python for Data Science and Research Methodologies",
      subtitle: "UI Educon",
      logo_path: "uieducon.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1JcX7ul4ErPlomj8LI2EbA3sMi8-io7cw/view?usp=sharing",
      alt_name: "Data Science",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine Learning A-Z™: Python & R in Data Science [2022]",
      subtitle:
        "- Kirill Eremenko, Hadelin de Ponteves, Ligency I Team, Ligency Team",
      logo_path: "Udemy_logo.png",
      certificate_link: "",
      alt_name: "Machine Learning",
      color_code: "#E5AA70",
    },
    {
      title: "Machine Learning & Deep Learning in Python & R",
      subtitle: "- Start-Tech Academy",
      logo_path: "Udemy_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#EADDCA",
    },
    {
      title: "React 17",
      subtitle: "- Sameer Buna",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1CBTGevGlv1tlHv67G1QbB-eZ-OdLnVG-/view?usp=sharing",
      alt_name: "React",
      color_code: "#000",
    },
    {
      title: "Unleashing Data Science and AI",
      subtitle: "- Bharati Vidyapeeth University College Of Engineering, Pune",
      logo_path: "bvicam_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sLlCOsVFL38w2gOpWpr3LABJke_oHs3x/view?usp=sharing",
      alt_name: "BVICAM",
      color_code: "#FFF",
    },
    {
      title: "Oracle Database: Introduction to SQL",
      subtitle: "- Oracle University",
      logo_path: "Oracle_Logo_1.png",
      certificate_link:
        "https://drive.google.com/file/d/1DXFVhBlTTn6tx5YiQAM2bKqx7wj-hk8X/view?usp=sharing",
      alt_name: "Oracle",
      color_code: "#DE3163",
    },
    {
      title: "Programming in Java",
      subtitle: "- NIIT Amritsar",
      logo_path: "niit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17YzW5qo2Zbit4vsoqg3XzB3Hu9qvZ9_0/view?usp=sharing",
      alt_name: "JAVA",
      color_code: "#FFF",
    },
    {
      title: "Building Websites with HTML, CSS, and JavaScript",
      subtitle: "- Craig Shoemaker",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1co529E0182WYglbvMnNuyHCHhu2_5wUr/view?usp=sharing",
      alt_name: "Website Building",
      color_code: "#000",
    },
    {
      title: "Data Structures Workshop",
      subtitle: "- Coding Blocks",
      logo_path: "coding-blocks_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hBZMo9oc7C06ylINAbmxPTuGYBCqgrfv/view?usp=sharing",
      alt_name: "Data Structures",
      color_code: "#FFF",
    },
    {
      title: "Getting Started with Programming in Java 11",
      subtitle: "- Jim Wilson",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1jZNt4tFgBd0PI6b1yKhTKrBZP-twfOCy/view?usp=sharing",
      alt_name: "Pluralsight",
      color_code: "#000",
    },
    {
      title: "Certification in Python 3",
      subtitle: "- VMM Education",
      logo_path: "vmm-education_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Txhs4Nmp7VhwAL0ZesKvg7I8ZZotyF4_/view?usp=sharing",
      alt_name: "Python 3",
      color_code: "#FFF",
    },
    {
      title: "Learn To Create AI Assistant (JARVIS) With Python",
      subtitle: "- Arbaz Khan",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5f783ff9-d6e4-42d0-bbbc-0131e802560d/",
      alt_name: "AI",
      color_code: "#89CFF0",
    },
    {
      title: "Certification in C and C++",
      subtitle: "- VMM Education",
      logo_path: "vmm-education_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1soLzGtwCKnn2OBnM29NuT-6-My0YMjp5/view?usp=sharing",
      alt_name: "C/C++",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Worked with KPMG and startups as a Software Engineer, Full Stack Developer, and DevOps Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full Time",
      experiences: [
        {
          title: "Analyst",
          company: "KPMG Assurance and Consulting Services LLP.",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "July 2022 - July 2023",
          location: "Gurugram,India",
          description:
            "Interned at KPMG India, contributing to UI/UX, data analytics, and full-stack development across projects like Revenue Assurance (INCUBES Highways), Governance & Operations Tool, Audit Automation Tool.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Part Time",
      experiences: [
        {
          title: "Intern Software Developer",
          company: "KPMG Assurance and Consulting Services LLP.",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "Jan 2022 - July 2022",
          location: "Gurugram,India",
          description:
            "KPMG India is a leading provider of risk, financial, and advisory services. During my internship, I contributed to three projects in UI/UX design, data analytics, and full-stack development.",
          color: "#0071C5",
        },
        {
          title: "Junior Software Developer",
          company: "Gannon University Institutional Review Board (GUIRB)",
          company_url: "https://www.submitirb.com/",
          logo_path: "gannon.png",
          duration: "July 2023 - Present",
          location: "Erie, PA",
          description:
            "Collaborated on the IRB Tool, enhancing UI/UX and developing front-end and back-end modules, including GPT integration, template generation, and the full research process.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern Software Developer",
          company: "KPMG Assurance and Consulting Services LLP.",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "Jan 2022 - July 2022",
          location: "Gurugram,India",
          description:
            "Interned at KPMG India, contributing to UI/UX, data analytics, and full-stack development across projects like Revenue Assurance (INCUBES Highways), Governance & Operations Tool, Audit Automation Tool.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Projects worked on during my Internship",
      experiences: [
        {
          title: "Revenue Assurance in Toll Operations",
          company: "IN-Cube-Highways",
          company_url: "https://www.cubehighways.com/",
          logo_path: "cube_highways_logo.jpg",
          duration: "Jan 2022 - Feb 2022",
          location: "Gurugram,India",
          description:
            "Worked on complicated SQL queries to identify inconsistencies through KPIs to solve the problems Toll data.",
          color: "#4285F4",
        },
        {
          title: "Governance and Operations Tool UI-UX development",
          company: "KPMG Internal Project",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "March 2022 - June 2022",
          location: "Gurugram,India",
          description:
            "Collaborated to modernize the tool for branch-wide project monitoring, adding features like scheduled meetings, issue/task graphs, and follow-up emails to managers.",
          color: "#D83B01",
        },
        {
          title:
            "Audit-Automation Tool (Initiative Built for the KPMG network)",
          company: "KPMG Internal Project",
          company_url: "https://home.kpmg/in/en/home.html",
          logo_path: "KPMG-Logo.jpg",
          duration: "April 2022 - July 2022",
          location: "Gurugram,India",
          description:
            "Created parts of the Front and Back end with key features like Template Generation, Step-by-step deadlines, and Follow-up automation.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Leveraged cutting-edge technologies like DS, ML, MERN, DevOps, and Python in my projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_kritagya.jpeg",
    description:
      "Get in touch to collaborate on innovative projects or discuss opportunities in DS, ML, MERN, DevOps, and Python. Let’s build something impactful.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Dedicated to creating impactful lessons that empower individuals, cultivate leadership, and drive personal transformation. A blog sharing these insights will be launched soon.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Los Angeles, CA, United States",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/FDy2DPdixRukiecGA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (209) 302-9945",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};

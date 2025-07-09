import { Metadata } from "next";
import About from "./AboutPage";
import metaData from "@/data/metadata.json";
import Ranju from "../../public/mdranju.jpg";
export const metadata: Metadata = {
  title: {
    default: "About",
    template: `%s - ${"About"}`,
  },
  description:
    "Hi, I’m B Yuvaraj — a passionate Full Stack Developer from Chennai, India, with over one year of hands-on experience crafting scalable, modern web applications. I began my journey into software development after completing my Bachelor of Science in Agriculture Engineering from PDM University, New Delhi, and have since transitioned into building dynamic, user-centric digital products. My expertise spans both front-end and back-end development, allowing me to deliver complete end-to-end solutions. I specialize in Java, TypeScript, JavaScript, and have strong command over frameworks and technologies like React.js, NestJS, Node.js, Spring Boot, and AWS. Throughout my freelance and professional projects, I have developed and deployed various applications — from comprehensive export-import management systems and e-commerce platforms to food ordering websites — optimizing UI/UX and backend performance to meet real-world business needs. I’m deeply committed to writing clean, efficient code, integrating secure authentication, and deploying scalable cloud solutions. My goal is to build digital experiences that are not only visually appealing but also robust, secure, and impactful. When I’m not coding, I enjoy exploring new technologies and continuously expanding my skill set to stay ahead in the rapidly evolving tech landscape.",
  keywords: metaData.keywords,
  openGraph: {
    title: "About Page",
    description:
      "Hi, I’m B Yuvaraj — a passionate Full Stack Developer from Chennai, India, with over one year of hands-on experience crafting scalable, modern web applications. I began my journey into software development after completing my Bachelor of Science in Agriculture Engineering from PDM University, New Delhi, and have since transitioned into building dynamic, user-centric digital products. My expertise spans both front-end and back-end development, allowing me to deliver complete end-to-end solutions. I specialize in Java, TypeScript, JavaScript, and have strong command over frameworks and technologies like React.js, NestJS, Node.js, Spring Boot, and AWS. Throughout my freelance and professional projects, I have developed and deployed various applications — from comprehensive export-import management systems and e-commerce platforms to food ordering websites — optimizing UI/UX and backend performance to meet real-world business needs. I’m deeply committed to writing clean, efficient code, integrating secure authentication, and deploying scalable cloud solutions. My goal is to build digital experiences that are not only visually appealing but also robust, secure, and impactful. When I’m not coding, I enjoy exploring new technologies and continuously expanding my skill set to stay ahead in the rapidly evolving tech landscape.",
    images: [
      {
        url: metaData.imageOfRanju,

        alt: "About Page",
      },
    ],

    siteName: "About Page",
    type: "website",
    url: "#",
  },
  twitter: {
    title: "About Page",
    description:
      "Hi, I’m B Yuvaraj — a passionate Full Stack Developer from Chennai, India, with over one year of hands-on experience crafting scalable, modern web applications. I began my journey into software development after completing my Bachelor of Science in Agriculture Engineering from PDM University, New Delhi, and have since transitioned into building dynamic, user-centric digital products. My expertise spans both front-end and back-end development, allowing me to deliver complete end-to-end solutions. I specialize in Java, TypeScript, JavaScript, and have strong command over frameworks and technologies like React.js, NestJS, Node.js, Spring Boot, and AWS. Throughout my freelance and professional projects, I have developed and deployed various applications — from comprehensive export-import management systems and e-commerce platforms to food ordering websites — optimizing UI/UX and backend performance to meet real-world business needs. I’m deeply committed to writing clean, efficient code, integrating secure authentication, and deploying scalable cloud solutions. My goal is to build digital experiences that are not only visually appealing but also robust, secure, and impactful. When I’m not coding, I enjoy exploring new technologies and continuously expanding my skill set to stay ahead in the rapidly evolving tech landscape.",
    images: [
      {
        url: metaData.imageOfRanju,

        alt: "About Page",
      },
    ],
    card: "summary_large_image",
    site: "@Yuvaraj",
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;

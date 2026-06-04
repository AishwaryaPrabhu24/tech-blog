import ai from "../assets/ai.jpg";

import cloud from "../assets/Cloud.jpg";
import react from "../assets/react.jpg";
import web from "../assets/web.jpg";

import gemini from "../assets/gemini.jpg";
import programming from "../assets/programming.jpg";
import bigdata from "../assets/bigdata.jpg";

import robotics from "../assets/robotics.jpg";
import cyber from "../assets/cyber.jpg";
import hacking from "../assets/hacking.jpg";
import quantum from "../assets/quantum.jpg";


export const blogs = [
  {
    id: 1,
    route: "/blogdetails",
    title: "The Future of Artificial Intelligence",
    category: "AI",
    image: ai,
    content: {
      intro: {
        title: "The age of intelligent machines is here",
        text:
          "Artificial intelligence is no longer science fiction. It is embedded in search engines, medical diagnostics, financial systems, and creative tools."
      },
      quote:
        "AI will not replace humans — but humans who use AI will replace those who don't.",
      stats: [
        "$1.8T projected AI market by 2030",
        "300M jobs impacted globally",
        "97% businesses adopting AI"
      ]
    }
  },

  {
    id: 2,
    route: "/GeminiDetails",
    title: "ChatGPT vs Gemini: Which AI is Better?",
    category: "AI",
    image: gemini,
    content: "A detailed comparison of modern AI assistants."
  },

  {
    id: 3,
    route: "/ComputingDetails",
    title: "The Rise of Edge Computing",
    category: "Cloud",
    image: cloud,
    content: "Why companies are moving computing closer to users."
  },

  {
    id: 4,
    route: "/CyberDetails",
    title: "Cybersecurity Threats in 2026",
    category: "Cyber Security",
    image: cyber,
    content: "Learn about the latest cyber threats and attacks."
  },

  {
    id: 5,
    route: "/HackingDetails",
    title: "Ethical Hacking: A Beginner's Guide",
    category: "Cyber Security",
    image: hacking,
    content: "An introduction to ethical hacking and penetration testing."
  },

  {
    id: 6,
    route: "/BigDataDetails",
    title: "How Netflix Uses Big Data",
    category: "Data Science",
    image: bigdata,
    content: "Learn how Netflix leverages data for recommendations."
  },

  {
    id: 7,
    route: "/RoboticsDetails",
    title: "Future of Robotics and Automation",
    category: "Robotics",
    image: robotics,
    content: "The next generation of intelligent machines."
  },

  {
    id: 8,
    route: "/ProgrammingDetails",
    title: "Top Programming Languages in 2026",
    category: "Programming",
    image: programming,
    content: "The most in-demand languages for developers."
  },

  {
    id: 9,
    route: "/WebDevDetails",
    title: "Modern Web Development Trends",
    category: "Web Development",
    image: web,
    content:
      "Explore React, Next.js, TypeScript and modern frontend tools."
  },

  {
    id: 10,
    route: "/QuantumDetails",
    title: "Quantum Computing Explained Simply",
    category: "Emerging Tech",
    image: quantum,
    content: "Understand the basics of quantum computers."
  }
];
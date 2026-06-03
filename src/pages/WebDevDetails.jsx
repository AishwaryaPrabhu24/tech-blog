import { useState } from "react";
import "./BlogDetails.css";
import web from "../assets/web.jpg";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6
    }
  })
};


const WebDevDetails = () => {
  // ✅ reactions state
  const [reactions, setReactions] = useState({
    heart: 0,
    like: 0,
    sad: 0,
    cry: 0,
  });

  // ✅ handle reaction click
  const handleReaction = (type) => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // ✅ share functions
  const handleWhatsAppShare = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
  };

  const handleLinkedInShare = () => {
    const url = window.location.href;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="page">

      <h1 className="title">
        Modern Web Development Trends
      </h1>
      <ScrollReveal>
      <img
        src={web}
        alt="Modern Web Development"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Web development has evolved rapidly over the past decade, transforming
        from simple static websites into highly interactive, scalable, and
        performance-driven applications. Modern web applications are expected to
        deliver fast loading times, seamless user experiences, responsive
        interfaces, and strong security. To meet these expectations, developers
        increasingly rely on powerful frameworks, modern programming languages,
        and advanced development tools. Technologies such as React, Next.js,
        TypeScript, and modern frontend ecosystems are shaping the future of web
        development and helping businesses build high-quality digital experiences.
      </p>

      <p className="quote">
        “Modern web development is not just about building websites—it is about creating fast, intelligent, and engaging digital experiences.”
      </p>

      <h2 className="h2">The Evolution of Web Development</h2>

      <p className="para">
        Early websites were primarily static and focused on displaying
        information. Today, web applications support real-time communication,
        e-commerce, cloud integration, Artificial Intelligence features, and
        complex business operations. The rise of modern JavaScript frameworks
        and cloud technologies has enabled developers to create applications
        that rival traditional desktop software in functionality and performance.
      </p>

      <h2 className="h2">Popular Frontend Technologies</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>⚛️ React</h3>
          <p>
            A popular JavaScript library used for building
            interactive and reusable user interfaces.
          </p>
        </div>

        <div className="industry-card">
          <h3>▲ Next.js</h3>
          <p>
            A React framework that provides server-side
            rendering, routing, and performance optimization.
          </p>
        </div>

        <div className="industry-card">
          <h3>📘 TypeScript</h3>
          <p>
            A strongly typed version of JavaScript that
            improves code quality and maintainability.
          </p>
        </div>

        <div className="industry-card">
          <h3>🎨 Tailwind CSS</h3>
          <p>
            A utility-first CSS framework that helps create
            modern and responsive user interfaces quickly.
          </p>
        </div>

      </div>

      </ScrollReveal>

      <h2 className="h2">Why React Remains Popular</h2>

      <p className="para">
        React continues to dominate frontend development because of its
        component-based architecture, large ecosystem, and strong community
        support. Developers can create reusable components, manage application
        state efficiently, and build highly interactive interfaces. React is
        widely adopted by startups and large enterprises alike, making it one
        of the most valuable skills for modern web developers.
      </p>

      <h2 className="h2">Emerging Development Trends</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>☁️ Cloud-Native Apps</h3>
          <p>
            Applications designed specifically for cloud
            platforms with scalability and flexibility.
          </p>
        </div>

        <div className="industry-card">
          <h3>📱 Progressive Web Apps</h3>
          <p>
            PWAs provide app-like experiences directly
            through web browsers without installation.
          </p>
        </div>

        <div className="industry-card">
          <h3>🤖 AI Integration</h3>
          <p>
            AI-powered features such as chatbots, content
            generation, and smart recommendations.
          </p>
        </div>

        <div className="industry-card">
          <h3>⚡ Serverless Computing</h3>
          <p>
            Developers can build applications without
            managing traditional server infrastructure.
          </p>
        </div>

      </div>

      </ScrollReveal>

      <h2 className="h2">Development Tools and Productivity</h2>

      <p className="para">
        Modern developers use tools such as Vite, GitHub, Docker, VS Code,
        and CI/CD platforms to improve productivity and streamline workflows.
        These tools enable faster development cycles, efficient collaboration,
        automated testing, and reliable deployment processes. The combination
        of modern frameworks and powerful development environments helps teams
        deliver applications more quickly and efficiently.
      </p>

      <h2 className="h2">Importance of Performance and Security</h2>

      <p className="para">
        Users expect websites to load instantly and operate smoothly across all
        devices. Performance optimization techniques such as code splitting,
        lazy loading, image optimization, and caching play a critical role in
        delivering exceptional user experiences. At the same time, developers
        must prioritize security by implementing authentication, data protection,
        and secure coding practices to safeguard users and applications.
      </p>

      <h2 className="h2">The Future of Web Development</h2>

      <p className="para">
        The future of web development will continue to be influenced by
        Artificial Intelligence, automation, WebAssembly, and cloud computing.
        Applications will become more intelligent, responsive, and personalized.
        Developers who stay updated with modern frameworks, programming
        languages, and emerging technologies will be well-positioned to build
        the next generation of digital experiences.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        Modern web development is driven by innovation, performance, and user
        experience. Technologies such as React, Next.js, TypeScript, and
        advanced frontend tools have transformed how applications are built and
        deployed. As technology continues to evolve, web developers must embrace
        new trends and continuously learn to remain competitive in the rapidly
        changing digital landscape.
      </p>

      {/* ===================== REACTIONS ===================== */}
      <div className="reaction-box">
        <h3>React to this article</h3>

        <div className="reactions">
          <button onClick={() => handleReaction("heart")}>
            ❤️ {reactions.heart}
          </button>

          <button onClick={() => handleReaction("like")}>
            👎 {reactions.like}
          </button>

          <button onClick={() => handleReaction("sad")}>
            😢 {reactions.sad}
          </button>

          <button onClick={() => handleReaction("cry")}>
            😭 {reactions.cry}
          </button>
        </div>
      </div>

      {/* ===================== SHARE ===================== */}
      <div className="share-box">
        <h3>Share this article</h3>

        <div className="share-buttons">
          <button onClick={handleWhatsAppShare}>
            📱 WhatsApp
          </button>

          <button onClick={handleLinkedInShare}>
            💼 LinkedIn
          </button>

          <button onClick={handleCopyLink}>
            🔗 Copy Link
          </button>
        </div>
      </div>

    </div>
  );
};

export default WebDevDetails;
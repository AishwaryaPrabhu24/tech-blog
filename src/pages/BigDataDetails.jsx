import { useState } from "react";
import "./BlogDetails.css";
import bigdata from "../assets/bigdata.jpg";
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


const BigDataDetails = () => {
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
        How Netflix Uses Big Data
      </h1>
      <ScrollReveal>
      <img
        src={bigdata}
        alt="Netflix Big Data"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Netflix is one of the world's largest streaming platforms, serving millions
        of users across different countries and devices. Behind its success lies the
        powerful use of Big Data, which helps the company understand user behavior,
        personalize recommendations, optimize content delivery, and improve customer
        satisfaction. Every click, search, pause, rewind, and viewing preference
        generates valuable data that Netflix analyzes to provide a highly customized
        entertainment experience. By leveraging advanced analytics and machine
        learning technologies, Netflix transforms massive volumes of data into
        actionable insights that drive business growth and user engagement.
      </p>

      <p className="quote">
        “Data is not just information for Netflix — it is the foundation of every recommendation, decision, and viewing experience.”
      </p>

      <h2 className="h2">What is Big Data?</h2>

      <p className="para">
        Big Data refers to extremely large and complex datasets that cannot be
        processed efficiently using traditional methods. It includes structured,
        semi-structured, and unstructured data generated from multiple sources.
        Companies use Big Data technologies to collect, store, process, and analyze
        information in real time. Netflix handles billions of user interactions
        daily, making Big Data an essential component of its operations and decision-making
        processes.
      </p>

      <h2 className="h2">How Netflix Collects Data</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>▶️ Viewing History</h3>
          <p>
            Netflix tracks what users watch, how long they watch,
            and which content they complete or abandon.
          </p>
        </div>

        <div className="industry-card">
          <h3>🔍 Search Activity</h3>
          <p>
            Search queries help Netflix understand user interests
            and improve content recommendations.
          </p>
        </div>

        <div className="industry-card">
          <h3>📱 Device Usage</h3>
          <p>
            Data from smartphones, tablets, TVs, and computers
            helps optimize streaming experiences.
          </p>
        </div>

        <div className="industry-card">
          <h3>⭐ Ratings & Preferences</h3>
          <p>
            User ratings and interactions help personalize
            recommendations and content suggestions.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Recommendation System</h2>

      <p className="para">
        Netflix's recommendation engine is one of its most valuable technologies.
        Machine learning algorithms analyze user behavior, viewing patterns, and
        content similarities to suggest movies and shows that users are likely to
        enjoy. These personalized recommendations significantly increase engagement
        and help users discover content that matches their interests. A large
        percentage of content watched on Netflix originates from recommendation
        algorithms rather than direct searches.
      </p>

      <h2 className="h2">Applications of Big Data at Netflix</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🎬 Content Creation</h3>
          <p>
            Viewing data helps Netflix decide which original
            shows and movies should be produced.
          </p>
        </div>

        <div className="industry-card">
          <h3>📊 User Personalization</h3>
          <p>
            Personalized homepages and recommendations
            improve user engagement and satisfaction.
          </p>
        </div>

        <div className="industry-card">
          <h3>⚡ Streaming Optimization</h3>
          <p>
            Data analytics helps ensure smooth streaming
            quality across different devices and networks.
          </p>
        </div>

        <div className="industry-card">
          <h3>📈 Business Decisions</h3>
          <p>
            Big Data supports strategic planning, customer
            retention, and market expansion decisions.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Benefits of Big Data</h2>

      <p className="para">
        The use of Big Data provides numerous benefits for Netflix. It improves
        customer experience through personalization, reduces content discovery
        time, increases viewer engagement, and enhances customer retention.
        Data-driven decision-making also enables Netflix to invest more effectively
        in content production while minimizing business risks. By understanding
        audience preferences, Netflix can create content that resonates with
        viewers across different regions and cultures.
      </p>

      <h2 className="h2">Challenges and Privacy Concerns</h2>

      <p className="para">
        While Big Data offers significant advantages, it also presents challenges.
        Managing massive datasets requires advanced infrastructure, storage systems,
        and analytics platforms. Privacy and data security are equally important,
        as companies must protect user information and comply with data protection
        regulations. Netflix continuously works to maintain user trust by ensuring
        responsible data collection and secure handling of customer information.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        Netflix demonstrates how Big Data can transform an industry through
        personalization, predictive analytics, and intelligent decision-making.
        By analyzing billions of data points, the company delivers highly relevant
        content recommendations, improves streaming performance, and develops
        successful original programming. As data technologies continue to evolve,
        Big Data will remain a critical factor in Netflix's ability to innovate,
        compete, and provide exceptional entertainment experiences to users around
        the world.
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

export default BigDataDetails;
import { useState } from "react";
import "./BlogDetails.css";
import gemini from "../assets/gemini.jpg";
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


const GeminiDetails = () => {
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
        ChatGPT vs Gemini: Which AI is Better?
      </h1>
      <ScrollReveal>
      <img
        src={gemini}
        alt="ChatGPT vs Gemini"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Artificial Intelligence assistants have become essential tools for students, developers,
        researchers, and businesses. Among the most popular AI models today are ChatGPT and Gemini.
        Both platforms are designed to help users generate content, answer questions, solve problems,
        write code, and enhance productivity. While ChatGPT, developed by OpenAI, is known for its
        conversational abilities and strong reasoning capabilities, Gemini, developed by Google,
        leverages deep integration with Google's ecosystem and advanced multimodal capabilities.
        As AI technology continues to evolve, choosing the right assistant depends on factors such
        as accuracy, creativity, ecosystem integration, and user requirements.
      </p>

      <p className="quote">
        “The best AI assistant is not the one with the most features — it is the one that helps you achieve your goals most effectively.”
      </p>

      <h2 className="h2">Introduction to Modern AI Assistants</h2>

      <p className="para">
        ChatGPT and Gemini represent the latest generation of large language models capable of
        understanding natural language, generating human-like responses, and assisting with a wide
        variety of tasks. Both systems have evolved beyond simple chatbots and now serve as powerful
        productivity tools for learning, research, content creation, coding, and business workflows.
        Their growing popularity demonstrates how AI is becoming an integral part of everyday life.
      </p>

      <h2 className="h2">Feature Comparison</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>💬 ChatGPT</h3>
          <p>
            Excellent conversational abilities, coding assistance,
            content creation, and reasoning capabilities.
          </p>
        </div>

        <div className="industry-card">
          <h3>✨ Gemini</h3>
          <p>
            Strong integration with Google services, multimodal
            understanding, and real-time productivity tools.
          </p>
        </div>

        <div className="industry-card">
          <h3>🧠 Reasoning</h3>
          <p>
            Both models offer advanced reasoning capabilities for
            problem-solving, learning, and analysis.
          </p>
        </div>

        <div className="industry-card">
          <h3>📊 Productivity</h3>
          <p>
            AI assistants help users save time by automating tasks,
            generating content, and organizing information.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Coding and Development</h2>

      <p className="para">
        Developers frequently use AI assistants for coding support. ChatGPT is widely recognized
        for generating code, explaining programming concepts, debugging applications, and assisting
        with software architecture. Gemini also offers strong coding capabilities and integrates
        effectively with Google Cloud services and developer tools. Both platforms can significantly
        improve development speed and learning efficiency for programmers.
      </p>

      <h2 className="h2">Strengths and Limitations</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>✅ ChatGPT Strengths</h3>
          <p>
            Strong conversational flow, detailed explanations,
            creative writing, and coding support.
          </p>
        </div>

        <div className="industry-card">
          <h3>✅ Gemini Strengths</h3>
          <p>
            Deep Google integration, multimodal features,
            and productivity-focused capabilities.
          </p>
        </div>

        <div className="industry-card">
          <h3>⚠️ Limitations</h3>
          <p>
            Both AI systems may occasionally generate incorrect
            information and require fact verification.
          </p>
        </div>

        <div className="industry-card">
          <h3>🔒 Privacy</h3>
          <p>
            Users should understand data handling policies and
            use AI responsibly when sharing information.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Which AI Should You Choose?</h2>

      <p className="para">
        The choice between ChatGPT and Gemini ultimately depends on individual requirements.
        Users who prioritize conversational intelligence, coding support, and detailed explanations
        may prefer ChatGPT. Those deeply invested in the Google ecosystem and seeking seamless
        integration with Google services may find Gemini more beneficial. Both platforms continue
        to improve rapidly, making them powerful tools for students, professionals, and businesses.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        ChatGPT and Gemini are among the most advanced AI assistants available today. Each platform
        offers unique strengths and capabilities that can enhance productivity, learning, and
        innovation. Rather than viewing them as competitors, many users benefit from leveraging
        both tools for different purposes. As AI technology continues to evolve, these assistants
        will play an increasingly important role in shaping the future of work, education, and
        digital experiences.
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

export default GeminiDetails;
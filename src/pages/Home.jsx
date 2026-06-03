import Hero from "../components/Hero";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

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


function Home() {
  return (
    <>
      <Hero />
      <div className="category-bar">
        <p>Programming</p>
        <p>AI</p>
        <p>Cloud Computing</p>
        <p>Web Development</p>
      </div>
    <ScrollReveal>

      <section className="featured-blog">
        <div className="featured-image">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
          />
        </div>

        <div className="featured-content">
          <h2>{blogs[0].title}</h2>

          <p>
            Explore the latest trends in Artificial Intelligence,
            Programming, Cloud Computing, Cyber Security,
            Data Science, and Modern Web Development through
            insightful articles and industry updates.
          </p>

         <Link to={blogs[0].route} className="featured-read-link">
  Read Full Story →
</Link>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal> 
      <section className="blog-grid">
        {blogs.slice(1).map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </section>
      </ScrollReveal>
    </>
  );
}

export default Home;
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img
        src={blog.image}
        alt={blog.title}
      />

      <div className="blog-content">
        <h3>{blog.title}</h3>

        <p>
          {typeof blog.content === "string"
            ? blog.content.substring(0, 90)
            : blog.content.intro.text.substring(0, 90)}
          ...
        </p>

        <Link
          to={blog.route}
          className="read-more"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
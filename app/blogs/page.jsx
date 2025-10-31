"use client";
import React from "react";

// Sample blog data
const blogs = [
  {
    title: "How to Grow Your Business 🚀",
    desc: "Tips and tricks to boost your business organically and effectively.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60",
    link: "#",
  },
  {
    title: "Top Digital Marketing Trends 2025 🔥",
    desc: "Stay ahead with the latest digital marketing strategies reshaping industries.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    link: "#",
  },
  {
    title: "Mastering Personal Branding 💼",
    desc: "Learn how to create a personal brand that attracts opportunities.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    link: "#",
  },
  {
    title: "AI in Marketing 🤖",
    desc: "Explore how artificial intelligence is transforming marketing strategies.",
    image: "https://images.unsplash.com/photo-1581091012184-7e4f1c1540cb?auto=format&fit=crop&w=800&q=60",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="glow-portfolio">
      <h1 className="glow-title">📰 Our Blog</h1>
      <p className="glow-subtitle">
        Stay updated with the latest articles, insights, and trends from our experts.
      </p>

      <div className="glow-card-container">
        {blogs.map((blog, index) => (
          <div key={index} className="glow-card">
            <img src={blog.image} alt={blog.title} />
            <div className="glow-card-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <a href={blog.link} style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "#60a5fa",
                color: "#1f2937",
                textDecoration: "none",
                fontWeight: "500",
                transition: "background 0.3s"
              }}>
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Glow CSS */}
      <style jsx>{`
        .glow-portfolio {
          text-align: center;
          padding: 60px 20px;
          background: #111827;
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
        }

        .glow-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #60a5fa;
        }

        .glow-subtitle {
          color: #cbd5e1;
          margin-bottom: 40px;
        }

        .glow-card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          justify-items: center;
        }

        .glow-card {
          background: #1f2937;
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 280px;
          text-align: center;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          border: 4px solid transparent;
          animation: glowBorder 3s linear infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glow-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.8);
        }

        .glow-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .glow-card-content {
          padding: 15px 10px;
        }

        .glow-card-content h3 {
          margin: 10px 0 5px;
          color: #60a5fa;
        }

        .glow-card-content p {
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        @keyframes glowBorder {
          0% { border-color: red; box-shadow: 0 0 20px red; }
          33% { border-color: blue; box-shadow: 0 0 20px blue; }
          66% { border-color: green; box-shadow: 0 0 20px green; }
          100% { border-color: red; box-shadow: 0 0 20px red; }
        }
      `}</style>
    </div>
  );
}

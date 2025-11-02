"use client"; // allows interactivity like onClick


import Link from "next/link";


export default function Home() {
  
 

  return (
    <html lang="en">
      <head>
        <title>Dream Digital Marketing Agency</title>
        <meta
          name="description"
          content="Your trusted partner for growing your brand online 🚀"
        />
      </head>

      <body>
        {/* 🌐 Navbar */}
       <nav className="navbar">
  <div className="container">
    <div className="navbar-brand">Dream Digital Marketing</div>

    {/* ✅ Mobile Toggle */}
    <input type="checkbox" id="menu-toggle" className="menu-toggle" />
    <label htmlFor="menu-toggle" className="hamburger">☰</label>

    <div className="nav-links">
      <button className="nav-btn" onClick={() => (location.href = "#home")}>Home</button>
      <button className="nav-btn" onClick={() => (location.href = "#about")}>About Us</button>
      <button className="nav-btn" onClick={() => (location.href = "#services")}>Services</button>

      <Link href="/blogs"><button className="nav-btn">Blog</button></Link>

      <button className="nav-btn" onClick={() => (location.href = "#portfolio")}>Portfolio</button>
      <button className="nav-btn" onClick={() => (location.href = "#testimonials")}>Testimonials</button>
      <button className="nav-btn" onClick={() => (location.href = "#contact")}>Contact Us</button>
    </div>
  </div>
</nav>


        {/* 🦋 Hero Section */}
        <section className="hero" id="home">
          <div className="overlay"></div>
          <div className="content">
            <h1 className="animated-text">Sales Journey Starts Here </h1>
            <p>
             
            </p>
            <a 
  href="https://www.facebook.com/profile.php?id=61582588652588" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn btn-custom scroll-animate">
    Explore Us
  </button>
</a>
          </div>
        </section>

        {/* 🧭 Services Section */}
        <section className="services container" id="services">
  <h2 className="section-title">Our Core Services</h2>
  <div className="services-grid">
    <div className="card">
      <div className="icon">🎯</div>
      <h3>Digital Marketing Solutions</h3>
      <p>Personalized strategies to help businesses grow through SEO, social media, and performance-driven campaigns.</p>
    </div>

    <div className="card">
      <div className="icon">📈</div>
      <h3>Campaign Management</h3>
      <p>End-to-end management of your digital marketing campaigns to ensure maximum reach and results.</p>
    </div>

    <div className="card">
      <div className="icon">💼</div>
      <h3>Marketing Consultation</h3>
      <p>Guiding businesses to choose the right digital strategies for sustainable growth and long-term success.</p>
    </div>

    <div className="card">
      <div className="icon">🌐</div>
      <h3>End-to-End Marketing Support</h3>
      <p>Handling everything from strategy implementation to performance tracking for maximum results.</p>
    </div>
  </div>
</section>




<section className="glow-portfolio">
<h2
  className="glow-title"
  style={{
    color: '#00ced1', // Dark Turquoise - fresh and vibrant
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold'
  }}
>
  Our Portfolio
</h2>

<p 
  className="glow-subtitle" 
  style={{ color: '#33c1ff', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
>
  Check out our amazing projects ✨
</p>

  <div className="glow-card-container">
    <div className="glow-card">
    <img src="/images/p1.jpg" alt="Project" className="footer-img" />

      <div className="glow-card-content">
        <h3>Social Media Campaign</h3>
        <p>Boosted client reach by 300% Using Vertical scaling strategy.</p>
      </div>
    </div>

    <div className="glow-card">
      <img src="/images/p2.jpg" alt="Project2" className="footer-img" />
      <div className="glow-card-content">
        <h3>Brand Identity Design</h3>
        <p> Branding for Services / Edu / Products brands.</p>
      </div>
    </div>

    <div className="glow-card">
     <img src="/images/p3.jpg" alt="Project3" className="footer-img" />
      <div className="glow-card-content">
        <h3>SEO Optimization </h3>
        <p>Ranked websites on Google’s first page within weeks.</p>
      </div>
    </div>

    <div className="glow-card">
     <img src="/images/p4.jpg" alt="Project4" className="footer-img" />
      <div className="glow-card-content">
        <h3>Paid Ads Management</h3>
        <p>Generated 10x ROI through Facebook & Google Ads.</p>
      </div>
    </div>
  </div>
</section>




<section className="testimonial-section">
  <h2 className="testimonial-title">What Our Clients Say</h2>
  <p className="testimonial-subtitle">Sharing success stories and our work ✨</p>

  <div className="testimonial-container">

    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"Our page finally started getting real clients after their Meta ads vertical strategy and consistent social media handling — game changer!"</p>
        <h4>— Santosh Sah</h4>
        <span>CEO, R.J UPVC </span>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"They built our website and boosted our Google ranking — now customers find us instead of us finding them!"</p>
        <h4>— Professor DK lama </h4>
        <span>Founder, SunShine Study Abroad </span>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"Their video edits and graphics elevated our brand look instantly — super clean, modern, and eye-catching work!"</p>
        <h4>— Michael Smith</h4>
        <span>Marketing Head, AdVentures </span>
      </div>
    </div>

  </div>
</section>






<section className="team-section">
  <h2 className="team-title">Meet Our Team</h2>
  <p className="team-subtitle">The experts behind Dream Digital Marketing ✨</p>

  <div className="team-container">
    {/* Team Member 1 */}
    <div className="team-card">
      <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80" alt="Team Member 1" />
      <div className="team-content">
        <h3> Sanjay Kumar </h3>
        <p>CEO & Founder</p>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="team-card">
<img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80"
     alt="Team Member Avatar" />

      <div className="team-content">
        <h3> Asish Pokhrel </h3>
        <p>Head of Marketing</p>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="team-card">
<img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80" alt="Nepali man professional 5" />
 <div className="team-content">
        <h3>Freelancers </h3>
        <p>SEO Specialist</p>
      </div>
    </div>

    {/* Team Member 4 */}
    <div className="team-card">
<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Professional man portrait 6" />
    <div className="team-content">
        <h3> Joya </h3>
        <p>Social Media Manager</p>
      </div>
    </div>
  </div>
</section>





        {/* 🧭 Call to Action */}
        <section className="cta">
          <h2>Ready to Grow Your Brand? 🚀</h2>
          <p>
            Join countless businesses that boosted their online presence and
            achieved real results with Dream Digital Marketing Agency.
          </p>
          <button className="btn btn-custom"
           onClick={() => window.open("https://wa.me/9779824804400?text=Hello%2C%20I%20want%20a%20free%20consultation", "_blank")}>
          Get Free Consultation</button>
        </section>

        {/* 🌍 Footer */}
        <footer className="footer" id="contact">
          <div className="footer-container">
            <div>
              <h5>Dream Digital Marketing Agency</h5>
              <p>
                Helping businesses achieve remarkable growth, stronger online
                presence, and measurable results.
              </p>
            </div>

            <div>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5>Contact</h5>
              <ul>
                <li>📍 KTM, Nepal</li>
                <li>
                  📧{" "}
                  <a href="mailto:sanjaystyle8@gmail.com">
                    sanjaystyle8@gmail.com
                  </a>
                </li>
                <li>
                  📧{" "}
                  <a
                    href="ddmagency7777@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ddmagency7777@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="footer-bottom">
            © 2025 Dream Digital Marketing Agency. All rights reserved.
          </p>
        </footer>

        {/* 💅 Embedded Styles */}
        <style jsx>{`
          body {
            margin: 0;
            font-family: "Poppins", sans-serif;
            background: linear-gradient(120deg, #e0f7fa, #f3e5f5, #fffde7);
            background-size: 300% 300%;
            animation: gradientFlow 15s ease infinite;
            color: #333;
          }

          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Navbar */
          .navbar {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(15px);
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            border-radius: 0 0 20px 20px;
            transition: background 0.4s ease;
          }

          .navbar-brand {
            font-weight: 800;
            font-size: 1.6em;
            color: white;
            text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
          }

          .nav-links {
            display: flex;
            gap: 1rem;
          }

          .nav-btn {
            background: transparent;
            border: 2px solid #38bdf8;
            color: white;
            padding: 0.5rem 1.2rem;
            border-radius: 25px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
  


          .navbar .container {
  
          display: flex;
         justify-content: space-between; /* brand on left, nav buttons on right */
         align-items: center;
         width: 100%;
         max-width: 1200px;
         margin: 0 auto;
          }


          .nav-btn:hover {
            background: #38bdf8;
            color: #0f172a;
            transform: translateY(-2px);
          }

          /* Hero Section */
          .hero {
            height: 100vh;
            background: linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.7)
              ),
              url("/images/home.png") center/cover no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
          }

          .animated-text {
            font-size: 3.2rem;
            font-weight: 900;
            background: linear-gradient(90deg, #ff6ec7, #6c63ff, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .btn-custom {
            margin-top: 25px;
            padding: 14px 40px;
            font-size: 1.15rem;
            font-weight: 600;
            color: white;
            border: none;
            border-radius: 50px;
            background: linear-gradient(135deg, #6c63ff, #4ecdc4);
            cursor: pointer;
            transition: all 0.4s ease;
          }

          .btn-custom:hover {
            transform: scale(1.07);
            background: linear-gradient(135deg, #4ecdc4, #ff6ec7);
          }
              
          /* ✅ Hamburger Toggle (Mobile) */
.menu-toggle {
  display: none;
}

.hamburger {
  font-size: 28px;
  color: white;
  cursor: pointer;
  display: none;
}

/* ✅ Mobile Navbar Styles */
@media (max-width: 768px) {

  .nav-links {
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    display: none;
    flex-direction: column;
    padding: 20px 0;
    gap: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    border-radius: 0 0 15px 15px;
  }

  .menu-toggle:checked ~ .nav-links {
    display: flex;
  }

  .hamburger {
    display: block;
  }

  .nav-btn {
    width: 80%;
    margin: 0 auto;
    padding: 0.8rem;
    text-align: center;
    font-size: 1rem;
  }

  .navbar {
    padding: 1rem;
  }

  .navbar-brand {
    font-size: 1.3rem;
  }
}









          .services {
  background: #ffffff;
  color: #002b80;
  text-align: center;
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #002b80;
  margin-bottom: 50px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.card {
  background: #ffffff;
  border: 2px solid transparent;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 43, 128, 0.1);
  padding: 30px 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 43, 128, 0.25);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 15px;
  padding: 2px;
  background: linear-gradient(
    90deg,
    #007bff,
    #00c6ff,
    #007bff,
    #00c6ff
  );
  background-size: 300% 300%;
  animation: glowing-border 4s linear infinite;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
}

@keyframes glowing-border {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

h3 {
  color: #002b80;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

p {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.6;
}





.glow-portfolio {
  text-align: center;
  padding: 60px 20px;
}

.glow-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.glow-subtitle {
  color: #cbd5e1;
  margin-bottom: 40px;
}

/* Card Container */
.glow-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Card */
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
  transition: transform 0.3s ease;
}

.glow-card:hover {
  transform: translateY(-10px);
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

/* Glowing border animation */
@keyframes glowBorder {
  0% {
    border-color: red;
    box-shadow: 0 0 20px red;
  }
  33% {
    border-color: blue;
    box-shadow: 0 0 20px blue;
  }
  66% {
    border-color: green;
    box-shadow: 0 0 20px green;
  }
  100% {
    border-color: red;
    box-shadow: 0 0 20px red;
  }
}










/* Section base */
.testimonial-section {
  padding: 80px 20px;
  background: #0f172a;
  color: #fff;
  text-align: center;
}

.testimonial-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.testimonial-subtitle {
  color: #94a3b8;
  margin-bottom: 50px;
}

/* Testimonial container */
.testimonial-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Testimonial card */
.testimonial-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 255, 255, 0.3);
}

/* Testimonial image */
.testimonial-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.testimonial-card:hover img {
  transform: scale(1.05);
}

/* Testimonial content */
.testimonial-content {
  padding: 20px;
}

.testimonial-content p {
  font-size: 0.95rem;
  color: #cbd5e1;
  margin-bottom: 10px;
}

.testimonial-content h4 {
  font-size: 1.1rem;
  color: #60a5fa;
  margin-bottom: 5px;
}

.testimonial-content span {
  font-size: 0.85rem;
  color: #94a3b8;
}











/* Team Section */
.team-section {
  padding: 80px 20px;
  background: #0f172a;
  color: #fff;
  text-align: center;
}

.team-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.team-subtitle {
  color: #94a3b8;
  margin-bottom: 50px;
}

/* Team Cards Container */
.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Team Card */
.team-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  max-width: 280px;
  text-align: center;
  border: 4px solid transparent;
  animation: teamGlow 3s linear infinite;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 255, 255, 0.3);
}

.team-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
  border-bottom: 1px solid #475569;
}

.team-card:hover img {
  transform: scale(1.05);
}

/* Team Content */
.team-content {
  padding: 15px;
}

.team-content h3 {
  margin: 10px 0 5px;
  color: #60a5fa;
}

.team-content p {
  font-size: 0.95rem;
  color: #cbd5e1;
}

/* Animated glowing border */
@keyframes teamGlow {
  0% {
    border-color: red;
    box-shadow: 0 0 20px red;
  }
  33% {
    border-color: blue;
    box-shadow: 0 0 20px blue;
  }
  66% {
    border-color: green;
    box-shadow: 0 0 20px green;
  }
  100% {
    border-color: red;
    box-shadow: 0 0 20px red;
  }
}


.cta {
  background: #f7f9ff; /* light white/blue tint for contrast */
  text-align: center;
  padding: 80px 20px;
  border-radius: 15px;
  margin: 60px auto;
  max-width: 1000px;
  box-shadow: 0 8px 30px rgba(0, 43, 128, 0.1);
  transition: all 0.3s ease;
}

.cta {
  padding: 80px 20px;
  background: #0f172a; /* dark background matching portfolio/team sections */
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #60a5fa; /* light blue heading to match glowing theme */
  margin-bottom: 20px;
}

.cta p {
  font-size: 1.1rem;
  color: #cbd5e1; /* light text color to fit dark theme */
  line-height: 1.6;
  margin-bottom: 35px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta .btn-custom {
  background: linear-gradient(135deg, #f87171, #60a5fa, #34d399); /* animated-like multi-color glow gradient */
  color: #ffffff;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4); /* glow effect */
  transition: all 0.4s ease;
}

.cta .btn-custom:hover {
  background: linear-gradient(135deg, #60a5fa, #34d399, #f87171);
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 30px rgba(96, 165, 250, 0.6); /* stronger glow on hover */
}



   /* Footer */
.footer {
  background: #0f172a; /* dark background matching portfolio/team */
  color: #cbd5e1; /* light text for readability */
  padding: 50px 20px;
  text-align: center;
  position: relative;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-container a {
  color: #60a5fa; /* glowing blue accent for links */
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-container a:hover {
  color: #34d399; /* green glow on hover */
}

.footer h4 {
  color: #60a5fa;
  margin-bottom: 10px;
}

.footer p,
.footer li {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
  color: #94a3b8; /* lighter gray for less emphasis */
}

/* Optional glowing effect on footer links */
.footer-container a::after {
  content: '';
  display: block;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, #f87171, #60a5fa, #34d399);
  transition: width 0.3s ease;
}

.footer-container a:hover::after {
  width: 100%;
}

        `}</style>
      </body>
    </html>
  );

}
"use client";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-main">
        <div className="section-header-full" style={{ marginBottom: "3rem" }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-desc">
            Whether you&apos;re looking to scale cloud infrastructure, modernize your DevOps practices,
            or need an experienced engineer to join your team - I&apos;d love to hear from you.
          </p>
        </div>

        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h3 className="contact-info-title">Get in Touch</h3>
          <p className="contact-info-desc">
            I&apos;m currently open to full-time roles and contract engagements. Feel free to reach
            out via email or connect with me on LinkedIn. I typically respond within 24 hours.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4.5h12a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V6A1.5 1.5 0 0 1 3 4.5z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16.5 6l-7.5 5.25L1.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <a href="mailto:prathapece1234@gmail.com" className="contact-item-value" style={{ textDecoration: "none", color: "inherit" }}>
                  prathapece1234@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 3h2.25l1.125 2.813L5.625 7.125a10.125 10.125 0 0 0 5.25 5.25l1.313-1.5L15 12v2.25A1.5 1.5 0 0 1 13.5 15.75C6.675 15.75 2.25 11.325 2.25 4.5A1.5 1.5 0 0 1 3.75 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <a href="tel:+916380353181" className="contact-item-value" style={{ textDecoration: "none", color: "inherit" }}>
                  +91 6380353181
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1.5A7.5 7.5 0 1 1 1.5 9 7.5 7.5 0 0 1 9 1.5z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 4.5V9l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Availability</div>
                <div className="contact-item-value">Open to Opportunities</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1.5A5.25 5.25 0 0 0 3.75 6.75c0 3 3.75 9.75 5.25 9.75s5.25-6.75 5.25-9.75A5.25 5.25 0 0 0 9 1.5z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Tiruvannamalai, Tamil Nadu, India</div>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="social-linkedin"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="social-github"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const cloudPillsLeft = [
  { icon: "☁️", label: "AWS" },
  { icon: "🔷", label: "GCP" },
  { icon: "⚙️", label: "Terraform" },
];

const cloudPillsRight = [
  { icon: "🐳", label: "Kubernetes" },
  { icon: "🔄", label: "Argo CD" },
  { icon: "📊", label: "Prometheus" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll(".animate-fade-up, .animate-fade-in").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="hero" ref={heroRef}>
      <div className="container-main" style={{ width: "100%" }}>
        <div className="hero-grid">
          {/* Text Content */}
          <div>
            <div className="hero-badge animate-fade-up">
              <span className="dot" />
              Open to Opportunities · Tiruvannamalai, Tamil Nadu
            </div>
            <h1 className="hero-title animate-fade-up delay-100">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Prathap S</span>
            </h1>
            <p className="hero-subtitle animate-fade-up delay-200">
              Cloud &amp; DevOps Engineer - AWS &amp; GCP
            </p>
            <p className="hero-desc animate-fade-up delay-300">
              Results-driven engineer with <strong>5+ years</strong> designing, automating, and
              operating enterprise cloud platforms across <strong>AWS, GCP</strong>, and private
              cloud. Expert in Kubernetes platform engineering, GitOps, Infrastructure as Code,
              CI/CD automation, DevSecOps, and production SRE best practices.
            </p>
            <div className="hero-actions animate-fade-up delay-400">
              <a href="#projects" className="btn-primary" id="hero-view-work">
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary" id="hero-contact">
                Get in Touch
              </a>
            </div>

            <div className="hero-stats animate-fade-up delay-500">
              <div>
                <div className="hero-stat-num">5<span>+</span></div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div>
                <div className="hero-stat-num">2</div>
                <div className="hero-stat-label">Cloud Platforms</div>
              </div>
              <div>
                <div className="hero-stat-num">99<span>%</span></div>
                <div className="hero-stat-label">Uptime SLAs</div>
              </div>
              <div>
                <div className="hero-stat-num">70<span>%</span></div>
                <div className="hero-stat-label">Deploy Time Cut</div>
              </div>
            </div>
          </div>

          {/* Avatar + Floating Pills */}
          <div className="hero-image-wrap animate-fade-in delay-300">
            <div className="hero-cloud-pills left">
              {cloudPillsLeft.map((p) => (
                <div key={p.label} className="cloud-pill">
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-avatar-ring">
              <div className="hero-avatar-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="prathap.jpg"
                  alt="Prathap S - Cloud & DevOps Engineer"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>

            <div className="hero-cloud-pills right">
              {cloudPillsRight.map((p) => (
                <div key={p.label} className="cloud-pill">
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

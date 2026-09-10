const experiences = [
  {
    company: "XIUS CORP Pvt Ltd - Hyderabad",
    role: "Cloud Engineer & Linux System Administrator",
    date: "Dec 2024 - Present",
    description:
      "Architect and maintain high-availability AWS multi-account environments (AWS Organizations, EC2, VPC, IAM, CloudWatch, AWS Backup), sustaining 99.9% production uptime. Led end-to-end VMware vSphere to GCP migration achieving zero data loss. Manage Amazon EKS clusters end-to-end with GitOps via Argo CD, Helm, and Argo Rollouts. Implemented Kubernetes autoscaling (HPA & Karpenter). Built production observability with Prometheus, Grafana, Alertmanager, CloudWatch, and OpsRamp. Owned Proxmox VE and Virtuozzo private cloud (100+ VMs) full lifecycle. Reduced deployment time by 70% through CI/CD automation using Jenkins, GitHub Actions, Terraform, and Ansible. Cut manual effort by 60% via Bash/Shell scripting and AWS Patch Manager.",
    tags: [
      "AWS EKS", "GCP", "Argo CD", "Terraform", "Ansible", "Jenkins",
      "GitHub Actions", "Prometheus", "Grafana", "Proxmox VE", "Virtuozzo", "Karpenter",
    ],
  },
  {
    company: "Plintron Mobility Solutions Pvt Ltd - Chennai",
    role: "Cloud Engineer",
    date: "Jul 2021 - Dec 2024",
    description:
      "Sustained 99.9% SLA compliance for AWS-hosted telecom BSS/OSS platforms (billing, mediation, charging) serving multiple MVNO clients. Designed secure multi-tenant AWS environments using IAM policies, VPC segmentation, Route 53, Security Groups, and KMS encryption. Reduced operational overhead by ~65% through IaC (Terraform), Ansible automation, and scripting. Configured 3-tier production architectures (Nginx, Tomcat, Oracle, PostgreSQL). Enforced compliance using auditd, rsyslog, logrotate, and CloudTrail. Managed Jenkins CI/CD pipelines with Git, Docker, and Terraform. Led critical incident recovery with RCA and post-incident documentation.",
    tags: [
      "AWS", "Terraform", "Ansible", "Jenkins", "Docker", "IAM",
      "VPC", "KMS", "PostgreSQL", "Oracle", "Linux Admin", "CloudTrail",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-main">
        <div className="section-header">
          <div>
            <p className="section-label">Career</p>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <p className="section-desc">
            5+ years of progressive cloud and DevOps engineering across telecom, enterprise SaaS,
            and private cloud — designing resilient infrastructure for production workloads at scale.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <p className="timeline-company">{exp.company}</p>
                    <h3 className="timeline-role">{exp.role}</h3>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="timeline-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: "3rem" }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Education</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            <div className="timeline-card" style={{ marginBottom: 0 }}>
              <p className="timeline-company">Anna University, Tindivannam, Tamil Nadu</p>
              <h3 className="timeline-role" style={{ fontSize: "1rem" }}>B.E. Electronics &amp; Communication Engineering</h3>
              <span className="timeline-date" style={{ display: "inline-block", marginTop: "0.5rem" }}>2016 – 2020</span>
            </div>
            <div className="timeline-card" style={{ marginBottom: 0 }}>
              <p className="timeline-company">Dominic Savio Hr. Sec. School, Chetpet</p>
              <h3 className="timeline-role" style={{ fontSize: "1rem" }}>Higher Secondary Certificate (12th)</h3>
              <span className="timeline-date" style={{ display: "inline-block", marginTop: "0.5rem" }}>2016</span>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div style={{ marginTop: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "1.25rem" }}>Awards &amp; Recognition</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            <div className="skill-category" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div className="skill-cat-icon" style={{ background: "rgba(251,191,36,0.15)", flexShrink: 0 }}>🏆</div>
              <div>
                <h3 className="skill-cat-title" style={{ marginBottom: "0.375rem" }}>Management Appreciation</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  Independently delivered critical infrastructure projects on time with strong ownership and self-driven execution under tight deadlines.
                </p>
              </div>
            </div>
            <div className="skill-category" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div className="skill-cat-icon" style={{ background: "rgba(37,99,235,0.1)", flexShrink: 0 }}>⭐</div>
              <div>
                <h3 className="skill-cat-title" style={{ marginBottom: "0.375rem" }}>Star Performer</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  Recognised for consistent excellence in cloud operations, DevOps, automation, and production support — reflecting sustained impact across all deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

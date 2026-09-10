const skillCategories = [
  {
    title: "Amazon Web Services",
    icon: "☁️",
    color: "rgba(255,153,0,0.12)",
    skills: [
      "EC2 & Auto Scaling", "EKS", "VPC & Route53", "IAM & IAM Governance",
      "RDS", "CloudWatch", "CloudFront & WAF", "SNS & SES",
      "EBS, EFS & S3", "ECR", "SSM & Patch Manager", "AWS Backup",
      "CloudTrail", "AWS KMS", "Secrets Manager", "Cost Explorer",
    ],
  },
  {
    title: "Google Cloud Platform",
    icon: "🔷",
    color: "rgba(66,133,244,0.12)",
    skills: [
      "Compute Engine", "GKE", "Cloud Storage", "Cloud DNS",
      "Cloud Armor", "Cloud IAM", "Cloud KMS", "Backup & DR",
      "GCP Migrate to VMs", "Cloud Monitoring", "Cloud Logging",
      "Cloud Trace", "VPC", "Pub/Sub",
    ],
  },
  {
    title: "Kubernetes & Containers",
    icon: "🐳",
    color: "rgba(37,99,235,0.1)",
    skills: [
      "Amazon EKS", "GKE", "Kubernetes (K8s)", "Helm & Kustomize",
      "Argo CD & GitOps", "Argo Rollouts", "RBAC & Namespaces",
      "HPA & Karpenter", "Ingress Controllers", "Cluster Autoscaler",
      "Docker", "Velero (K8s backup)", "Node Constraint Mgmt",
    ],
  },
  {
    title: "IaC & Automation",
    icon: "⚙️",
    color: "rgba(124,58,237,0.1)",
    skills: [
      "Terraform & Modules", "Ansible & Playbooks",
      "CloudFormation", "Bash / Shell Scripting",
      "Cron Jobs", "Python Scripting",
    ],
  },
  {
    title: "CI/CD & GitOps",
    icon: "🔄",
    color: "rgba(16,185,129,0.1)",
    skills: [
      "GitHub Actions", "Jenkins", "Argo CD",
      "Git & GitHub", "Bitbucket", "GitOps Workflows",
      "Blue/Green & Canary Deployments", "Zero-Downtime Deployments",
    ],
  },
  {
    title: "Observability & SRE",
    icon: "📊",
    color: "rgba(245,101,101,0.1)",
    skills: [
      "Prometheus & Alertmanager", "Grafana Dashboards",
      "Amazon CloudWatch", "OpsRamp",
      "OTEL / OpenTelemetry", "AWS X-Ray",
      "Google Cloud Monitoring", "Google Cloud Logging",
      "Google Cloud Trace", "SLI/SLO Definitions",
    ],
  },
  {
    title: "Security & DevSecOps",
    icon: "🔒",
    color: "rgba(139,92,246,0.1)",
    skills: [
      "IAM Governance & MFA", "AWS KMS / GCP KMS", "AWS Secrets Manager",
      "SSL/TLS Lifecycle", "SSH Hardening", "SELinux & auditd",
      "AWS WAF", "Kubernetes RBAC", "Network Policies",
      "AWS CloudTrail", "Google Cloud Audit Logs",
    ],
  },
  {
    title: "Linux, Networking, Storage & Virtualization",
    icon: "🖥️",
    color: "rgba(251,191,36,0.1)",
    skills: [
      "RHEL, Ubuntu, CentOS, Amazon Linux", "LVM & Filesystem Mgmt",
      "Kernel Tuning (sysctl)", "systemd & Package Mgmt",
      "VPC, DNS, TCP/IP, NFS, VPN", "Load Balancers & Firewalls",
      "PostgreSQL & Oracle", "AWS RDS",
      "AWS Backup, EBS, EFS, S3", "Veeam & Velero",
      "VMware vSphere", "Proxmox VE", "Virtuozzo (OpenStack)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container-main">
        <div className="section-header-full">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-desc">
            A comprehensive toolkit across cloud platforms, container orchestration, infrastructure
            automation, observability, and security — built over 5+ years of hands-on enterprise
            production engineering.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: cat.color }}>
                  {cat.icon}
                </div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

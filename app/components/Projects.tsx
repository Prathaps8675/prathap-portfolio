const projects = [
  {
    icon: "🌐",
    iconBg: "rgba(37,99,235,0.1)",
    title: "TuneTalk & Newco - BSS/OSS Cloud Platform on AWS",
    client: "XIUS CORP",
    description:
      "Designed and maintained AWS multi-account infrastructure hosting BSS/OSS platforms (billing, mediation, charging) for two MVNO clients using VPC, Amazon EKS, EC2, ALB, CloudFront, IAM, and Route 53. Enforced multi-tenant data isolation via VPC segmentation, IAM boundary policies, KMS encryption, and WAF. Built CI/CD pipelines with Jenkins, GitHub Actions, and Argo CD enabling zero-downtime deployments with automated rollback. Managed EKS clusters with Helm, RBAC, ingress, node auto-scaling, and security patching.",
    tags: ["AWS EKS", "Argo CD", "Argo Rollouts", "HPA & Karpenter", "Jenkins", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
  },
  {
    icon: "☁️",
    iconBg: "rgba(59,130,246,0.1)",
    title: "VMware vSphere to GCP Cloud Migration",
    client: "XIUS CORP",
    description:
      "Led the full migration of VMware vSphere workloads from Equinix Metal (EOL data centre) to Google Cloud Platform, designing the target cloud architecture and network topology from scratch. Conducted workload dependency analysis, capacity planning, and migration scheduling to minimise downtime. Used GCP Migrate to VMs for production cutovers with zero data loss. Provisioned GCP environment via Terraform (Compute Engine, VPC, Cloud DNS, Cloud Armor, IAM, Backup & DR). Established post-migration observability with Prometheus, Grafana, and GCP Cloud Monitor.",
    tags: ["GCP", "Terraform", "GCP Migrate to VMs", "Compute Engine", "Cloud DNS", "Cloud Armor", "Prometheus", "Grafana"],
  },
  {
    icon: "📡",
    iconBg: "rgba(245,101,101,0.1)",
    title: "Lycamobile - AWS BSS/OSS Security & Compliance",
    client: "Plintron Mobility Solutions",
    description:
      "Managed AWS production servers for Lycamobile's BSS/OSS platform — IAM least-privilege policies, KMS encryption, network segmentation, and security group governance across multi-account environments. Implemented compliance and audit controls (auditd, CloudTrail, rsyslog) to maintain immutable audit logs. Hardened Linux servers hosting billing and mediation services through SSH key management, sudo policies, SELinux enforcement, and regular compliance reviews. Performed proactive performance monitoring and production troubleshooting to prevent service or data loss.",
    tags: ["AWS", "IAM Governance", "KMS", "CloudTrail", "auditd", "SELinux", "SSH Hardening", "Linux Admin"],
  },
  {
    icon: "🔒",
    iconBg: "rgba(139,92,246,0.1)",
    title: "Freedom & Proxmox VE Private Cloud Platform",
    client: "XIUS CORP",
    description:
      "Provisioned and administered 100+ Linux virtual machines on a large-scale Virtuozzo (OpenStack-based) private cloud for the Freedom platform, managing tenant isolation, resource quotas, storage, and networking. Automated VM provisioning, configuration management, patching, and decommissioning using Ansible Playbooks and Shell scripting. Managed Oracle Database and PostgreSQL instances aligned with enterprise RTO/RPO requirements. Integrated API-based monitoring with OpsRamp for real-time health checks and alerting. In parallel, owned the full Proxmox VE lifecycle for a Telecom IMS platform — bare-metal installation, HA cluster design, shared storage setup (SAN/iSCSI/NFS), VM provisioning, and IMS workload validation from PoC through production go-live with full DR testing.",
    tags: ["Virtuozzo", "Proxmox VE", "Ansible", "Oracle DB", "PostgreSQL", "OpsRamp", "Bare Metal", "HA Clustering", "SAN / iSCSI", "Linux Admin", "Telecom IMS", "Backup & DR"],
  },
  {
    icon: "🔄",
    iconBg: "rgba(251,191,36,0.1)",
    title: "Amazon EKS GitOps Platform",
    client: "XIUS CORP",
    description:
      "Implemented and managed a production-grade GitOps platform on Amazon EKS using Argo CD, Helm, ApplicationSets, and Argo Rollouts for automated Kubernetes application delivery. Designed progressive canary deployments with automated promotion and rollback strategies to reduce deployment risk and production downtime. Managed EKS control plane and managed node group upgrades, Kubernetes version upgrades, add-on lifecycle management, and Helm chart upgrades with minimal service disruption. Implemented HPA and Karpenter for dynamic pod and node autoscaling based on workload requirements. Configured Kubernetes RBAC, IAM integration, secrets management, and workload-level access controls. Built end-to-end observability using Prometheus, Grafana, and Alertmanager with SLI/SLO-based alerting, dashboards, and proactive incident detection.",
    tags: ["AWS EKS", "ArgoCD", "Argo Rollouts", "Helm", "Karpenter", "Prometheus", "Grafana", "Terraform", "GitHub"],
  },
  {
    icon: "🏗️",
    iconBg: "rgba(14,165,233,0.1)",
    title: "Enterprise Application on GCP",
    client: "XIUS CORP",
    description:
      "Designed, provisioned, and managed a production-ready GKE platform for Java-based microservices on Google Cloud Platform, supporting Dev, QA, and Production environments. Built VPC-native GKE clusters using Terraform with private networking, subnet design, secondary IP ranges, firewall rules, Cloud NAT, and controlled ingress/egress connectivity. Implemented GCP IAM, service accounts, Kubernetes RBAC, and Workload Identity Federation to provide secure workload-level access to Google Cloud resources without storing long-lived credentials. Developed GitOps-based application delivery using Helm and Argo CD with environment-specific configurations, automated synchronization, deployment strategies, and rollback capabilities. Integrated GitHub, Cloud Build, Artifact Registry, and CI/CD pipelines for automated build, image publishing, security scanning, and deployment. Implemented HPA and cluster autoscaling for efficient resource utilization and application scalability. Established complete observability using Cloud Monitoring, Cloud Logging, and Managed Service for Prometheus with dashboards, metrics, logs, alerts, and SLI/SLO monitoring.",
    tags: ["GCP", "GKE", "Terraform", "Helm", "ArgoCD", "GitHub", "Cloud Build", "Artifact Registry", "Prometheus", "IAM", "Workload Identity"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container-main">
        <div className="section-header-full">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Key Projects</h2>
          <p className="section-desc">
            Real-world cloud infrastructure and DevOps projects delivered in production - spanning
            multi-cloud migrations, Kubernetes platforms, private cloud, and enterprise-grade security.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-icon" style={{ background: p.iconBg }}>{p.icon}</div>
              <div style={{ marginBottom: "0.375rem" }}>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--accent-blue)",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}>
                  {p.client}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

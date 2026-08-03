export const profile = {
  name: "Nikhitha Somineni",
  role: "DevOps Engineer",
  location: "Irving, TX",
  email: "nikhithas257@gmail.com",
  phone: "+1 (913) 636-9429",
  linkedin: "https://www.linkedin.com/in/nikhitha-somineni-630469207",
  github: "https://github.com/Nikhithas476",
  years: 5,
};

export const heroCommands = [
  { cmd: "kubectl get engineer --name nikhitha", out: "READY  5+ yrs  AWS · Azure · K8s" },
  { cmd: "terraform apply -auto-approve", out: "Apply complete! Resources: ∞ added" },
  { cmd: "helm status career", out: "STATUS: deployed  REVISION: 5" },
];

export const pipeline = [
  { id: "code", label: "Code", icon: "{ }" },
  { id: "build", label: "Build", icon: "▣" },
  { id: "test", label: "Test", icon: "✓" },
  { id: "scan", label: "Scan", icon: "◎" },
  { id: "deploy", label: "Deploy", icon: "▲" },
  { id: "monitor", label: "Monitor", icon: "◉" },
];

export const metrics = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 41, suffix: "→18", label: "MTTR Minutes Cut" },
  { value: 4, suffix: "", label: "CI/CD Platforms" },
  { value: 3, suffix: "", label: "Certifications" },
];

export const skillGroups = [
  { name: "Cloud", level: 95, items: ["AWS EC2 · VPC · SSM", "Azure VM · VNet · Key Vault"] },
  { name: "Containers", level: 92, items: ["Kubernetes", "Docker", "Helm", "Ingress"] },
  { name: "CI / CD", level: 90, items: ["Jenkins", "Azure DevOps", "GitHub Actions", "GitLab CI"] },
  { name: "IaC", level: 93, items: ["Terraform", "CloudFormation", "ARM Templates"] },
  { name: "Observability", level: 88, items: ["Prometheus", "Grafana", "Datadog", "ELK"] },
  { name: "Scripting", level: 85, items: ["Python", "Bash", "PowerShell"] },
];

/*
 * Experience is rendered as a visual dashboard, not bullets — tune these
 * numbers/labels per JD and the visualization updates itself.
 *   focus  → horizontal "where the time went" bars (pct sums to ~100)
 *   stats  → big impact tiles (value is free text: "41→18", "24×7", …)
 *   stack  → chips of the tools this role touched
 */
export const experience = [
  {
    company: "FedEx",
    role: "DevOps Engineer",
    place: "Nashville, TN",
    period: "May 2024 — Present",
    focus: [
      { area: "Infrastructure & IaC", pct: 30 },
      { area: "CI/CD & Release", pct: 25 },
      { area: "Kubernetes Delivery", pct: 20 },
      { area: "Observability", pct: 15 },
      { area: "Automation & AI Ops", pct: 10 },
    ],
    stats: [
      { value: "41→18", label: "MTTR minutes" },
      { value: "4", label: "Environments" },
      { value: "24×7", label: "Network Ops" },
    ],
    stack: [
      "Terraform", "AWS", "Kubernetes", "Helm",
      "Jenkins", "GitHub Actions", "Prometheus", "Datadog",
    ],
  },
  {
    company: "Piersoft Technologies",
    role: "Cloud Engineer",
    place: "Hyderabad, India",
    period: "Jun 2019 — Jul 2022",
    focus: [
      { area: "Azure & Linux Ops", pct: 30 },
      { area: "ARM Templates / IaC", pct: 25 },
      { area: "Networking & TLS", pct: 20 },
      { area: "Monitoring & Alerts", pct: 15 },
      { area: "Access & Security", pct: 10 },
    ],
    stats: [
      { value: "3+", label: "Years Prod Ops" },
      { value: "AUTO", label: "TLS Renewal" },
      { value: "24×7", label: "Azure Monitor" },
    ],
    stack: [
      "Azure", "ARM", "Nginx", "Entra ID",
      "Key Vault", "Log Analytics", "GitLab CI", "Bash",
    ],
  },
];

export const certs = [
  "Azure DevOps Engineer Expert",
  "Azure Administrator Associate",
  "Certified Kubernetes Administrator (CKA)",
];

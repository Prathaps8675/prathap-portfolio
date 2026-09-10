import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prathap S | Cloud & DevOps Engineer — AWS & GCP",
  description:
    "Prathap S is a results-driven Cloud & DevOps Engineer with 5+ years of experience designing, automating, and operating enterprise cloud platforms across AWS, GCP, and private cloud environments. Expert in Kubernetes, Terraform, CI/CD, GitOps, and DevSecOps.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "GCP",
    "Google Cloud",
    "Kubernetes",
    "Amazon EKS",
    "Terraform",
    "CI/CD",
    "GitOps",
    "ArgoCD",
    "Linux System Administrator",
    "Prathap S",
    "Tiruvannamalai",
  ],
  authors: [{ name: "Prathap S" }],
  icons: {
    icon: "/prathap-portfolio/favicon.jpg",
    apple: "/prathap-portfolio/favicon.jpg",
  },
  openGraph: {
    title: "Prathap S | Cloud & DevOps Engineer — AWS & GCP",
    description:
      "5+ years engineering enterprise cloud platforms on AWS & GCP — Kubernetes, Terraform, GitOps, DevSecOps, and production SRE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

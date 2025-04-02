'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon, 
  CloudIcon, 
  CpuChipIcon, 
  LockClosedIcon 
} from "@heroicons/react/24/outline";
import Icon from "tech-stack-icons";

// Define the tech data including icons
const techData = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces with modern web technologies.",
    link: "#",
    icon: <CodeBracketIcon className="w-10 h-10 text-blue-500" />,
    technologies: (
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        <div className="flex flex-col items-center">
          <Icon name="reactjs" className="w-8 h-8" />
          <span className="text-xs mt-1">React</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="nextjs" className="w-8 h-8" />
          <span className="text-xs mt-1">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="redux" className="w-8 h-8" />
          <span className="text-xs mt-1">Redux</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="tailwindcss" className="w-8 h-8" />
          <span className="text-xs mt-1">Tailwind</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="typescript" className="w-8 h-8" />
          <span className="text-xs mt-1">TypeScript</span>
        </div>
      </div>
    )
  },
  {
    title: "Backend",
    description: "Developing robust server-side applications and APIs with secure authentication.",
    link: "#",
    icon: <ServerIcon className="w-10 h-10 text-green-500" />,
    technologies: (
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        <div className="flex flex-col items-center">
          <Icon name="nodejs" className="w-8 h-8" />
          <span className="text-xs mt-1">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          {/* <Icon name="express" className="w-8 h-8" /> */}
          <span className="text-xs mt-1">Express</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="nestjs" className="w-8 h-8" />
          <span className="text-xs mt-1">NestJS</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="graphql" className="w-8 h-8" />
          <span className="text-xs mt-1">GraphQL</span>
        </div>
        <div className="flex flex-col items-center">
          {/* <Icon name="socketio" className="w-8 h-8" /> */}
          <span className="text-xs mt-1">Socket.io</span>
        </div>
      </div>
    )
  },
  {
    title: "Databases",
    description: "Working with both SQL and NoSQL databases for efficient data storage and retrieval.",
    link: "#",
    icon: <CircleStackIcon className="w-10 h-10 text-yellow-500" />,
    technologies: (
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        <div className="flex flex-col items-center">
          <Icon name="mongodb" className="w-8 h-8" />
          <span className="text-xs mt-1">MongoDB</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="postgresql" className="w-8 h-8" />
          <span className="text-xs mt-1">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="redis" className="w-8 h-8" />
          <span className="text-xs mt-1">Redis</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="mysql" className="w-8 h-8" />
          <span className="text-xs mt-1">MySQL</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="firebase" className="w-8 h-8" />
          <span className="text-xs mt-1">Firebase</span>
        </div>
      </div>
    )
  },
  {
    title: "DevOps & Cloud",
    description: "Implementing CI/CD pipelines and deploying applications to cloud platforms.",
    link: "#",
    icon: <CloudIcon className="w-10 h-10 text-purple-500" />,
    technologies: (
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        <div className="flex flex-col items-center">
          <Icon name="docker" className="w-8 h-8" />
          <span className="text-xs mt-1">Docker</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="kubernetes" className="w-8 h-8" />
          <span className="text-xs mt-1">Kubernetes</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="aws" className="w-8 h-8" />
          <span className="text-xs mt-1">AWS</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="github" className="w-8 h-8" />
          <span className="text-xs mt-1">GitHub</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="netlify" className="w-8 h-8" />
          <span className="text-xs mt-1">Netlify</span>
        </div>
      </div>
    )
  },
  {
    title: "System Design",
    description: "Architecting scalable systems with efficient communication between components.",
    link: "#",
    icon: <CpuChipIcon className="w-10 h-10 text-red-500" />,
    technologies: (
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        <div className="flex flex-col items-center">
          {/* <Icon name="kafka" className="w-8 h-8" /> */}
          <span className="text-xs mt-1">Kafka</span>
        </div>
        <div className="flex flex-col items-center">
          {/* <Icon name="terraform" className="w-8 h-8" /> */}
          <span className="text-xs mt-1">Terraform</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="grafana" className="w-8 h-8" />
          <span className="text-xs mt-1">Grafana</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="jest" className="w-8 h-8" />
          <span className="text-xs mt-1">Jest</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="linux" className="w-8 h-8" />
          <span className="text-xs mt-1">Linux</span>
        </div>
      </div>
    )
  },
  {
    title: "Security",
    description: "Implementing security best practices to protect applications from threats.",
    link: "#",
    icon: <LockClosedIcon className="w-10 h-10 text-gray-500" />,
    technologies: (
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        <div className="flex flex-col items-center">
          <Icon name="auth0" className="w-8 h-8" />
          <span className="text-xs mt-1">Auth0</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="json" className="w-8 h-8" />
          <span className="text-xs mt-1">JWT</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="swagger" className="w-8 h-8" />
          <span className="text-xs mt-1">OAuth</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="vscode" className="w-8 h-8" />
          <span className="text-xs mt-1">Vault</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="cloudflare" className="w-8 h-8" />
          <span className="text-xs mt-1">Let&apos;s Encrypt</span>
        </div>
      </div>
    )
  }
];

export default function TechStack() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
      <HoverEffect 
        items={techData.map(item => ({
          title: item.title,
          description: item.description,
          link: item.link,
          icon: item.icon,
          technologies: item.technologies
        }))} 
        className="max-w-7xl mx-auto px-4" 
      />
    </div>
  );
} 
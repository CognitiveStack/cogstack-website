import Link from "next/link";
import { ExternalLink } from "lucide-react";

const technologies = [
  { name: "Neo4j", category: "Graph" },
  { name: "ClickHouse", category: "Analytics" },
  { name: "Qdrant", category: "Vector" },
  { name: "Supabase", category: "Relational" },
  { name: "Docker", category: "Container" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "LangChain", category: "AI Framework" },
  { name: "n8n", category: "Automation" },
  { name: "Caddy", category: "Proxy" },
  { name: "Flowise", category: "AI Builder" },
  { name: "LangGraph", category: "AI Agents" },
  { name: "Cloudflare", category: "Edge" },
];

export function TechStack() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Battle-tested tools for production AI systems
          </p>
        </div>

        {/* Technology grid */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center rounded-lg border border-border bg-background p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Caption and CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground">
            33+ integrated services in production
          </p>
          <p className="mt-2 text-muted-foreground">
            See our infrastructure:{" "}
            <Link
              href="https://github.com/mindset-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              github.com/mindset-dev
              <ExternalLink className="h-3 w-3" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

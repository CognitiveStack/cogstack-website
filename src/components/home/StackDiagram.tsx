"use client";

import { useState } from "react";
import { Globe, Container, Brain, Database } from "lucide-react";

const layers = [
  {
    id: "edge",
    name: "Edge & Routing",
    icon: Globe,
    color: "bg-blue-500",
    technologies: ["Cloudflare", "Caddy"],
    description:
      "Global edge network and intelligent routing for low-latency access worldwide.",
  },
  {
    id: "orchestration",
    name: "Orchestration",
    icon: Container,
    color: "bg-purple-500",
    technologies: ["Kubernetes", "Docker"],
    description:
      "Container orchestration and service mesh for scalable, resilient deployments.",
  },
  {
    id: "cognitive",
    name: "Cognitive Systems",
    icon: Brain,
    color: "bg-accent",
    technologies: ["LangChain", "LangGraph", "n8n", "Flowise"],
    description:
      "AI orchestration frameworks and workflow automation for intelligent processing.",
  },
  {
    id: "memory",
    name: "Memory Fabric",
    icon: Database,
    color: "bg-primary",
    technologies: ["Supabase", "Qdrant", "Neo4j", "ClickHouse"],
    description:
      "Multi-modal data layer: relational, vector, graph, and time-series databases.",
  },
];

export function StackDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Cognitive Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four integrated layers that power production-grade AI systems
          </p>
        </div>

        {/* Stack visualization */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-3">
            {layers.map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;

              return (
                <div
                  key={layer.id}
                  className={`group relative cursor-pointer rounded-lg border-2 transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-background shadow-lg"
                      : "border-border bg-background/50 hover:border-primary/50 hover:bg-background"
                  }`}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className="flex items-center gap-4 p-4 sm:p-6">
                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${layer.color} text-white`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {layer.name}
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expanded description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-4 pb-4 text-sm text-muted-foreground sm:px-6">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connection lines */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Hover over each layer to learn more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

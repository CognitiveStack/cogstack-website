import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Plug, Layers } from "lucide-react";

const services = [
  {
    title: "AI Infrastructure",
    description:
      "Multi-database cognitive architectures that combine vector, graph, time-series, and relational data for comprehensive AI systems.",
    icon: Database,
  },
  {
    title: "MCP Servers",
    description:
      "Custom Model Context Protocol servers for enterprise integrations. Connect AI to Revit, SAGE, ERP systems, and proprietary tools.",
    icon: Plug,
  },
  {
    title: "Full Platform",
    description:
      "End-to-end AI transformation from architecture design to production deployment. Workflow automation, custom agents, and intelligent assistants.",
    icon: Layers,
  },
];

export function WhatWeBuild() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Production-ready AI infrastructure, not prototypes
          </p>
        </div>

        {/* Service cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

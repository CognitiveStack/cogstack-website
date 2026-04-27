import Link from "next/link";
import { Database, Plug, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const products: Product[] = [
  {
    title: "AI Infrastructure",
    description:
      "Multi-database cognitive architectures that combine vector, graph, time-series, and relational data into a unified AI backbone purpose-built for enterprise workloads.",
    features: [
      "Vector, graph, time-series, and relational databases in one architecture",
      "Self-hosted deployments for full data sovereignty",
      "Designed for production scale from day one",
      "Modular — adopt one layer or the full stack",
    ],
    icon: Database,
  },
  {
    title: "MCP Servers",
    description:
      "Custom Model Context Protocol servers that connect large language models directly to your enterprise systems, eliminating the integration barrier between AI and your existing tools.",
    features: [
      "Connectors for Revit, SAGE, ERP, and proprietary tools",
      "Secure, auditable access layer between AI and internal APIs",
      "Streaming and batch modes supported",
      "Extendable to any REST, GraphQL, or database interface",
    ],
    icon: Plug,
  },
  {
    title: "Full Platform",
    description:
      "End-to-end AI transformation: from architecture design through to production deployment. We deliver workflow automation, custom agents, and intelligent assistants as a complete solution.",
    features: [
      "Workflow automation replacing manual, repetitive processes",
      "Custom AI agents trained on your domain knowledge",
      "Intelligent assistants integrated into existing tools",
      "Ongoing support and iteration post-deployment",
    ],
    icon: Layers,
  },
];

export function ProductList(): React.JSX.Element {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.title}
                  className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Build?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and we&apos;ll design the right stack for your needs.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

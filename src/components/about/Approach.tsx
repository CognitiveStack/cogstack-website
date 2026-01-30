import Link from "next/link";
import { Shield, Server, Layers, ExternalLink } from "lucide-react";

const principles = [
  {
    title: "Production-Grade",
    description:
      "No prototypes that fail at scale. Every system we build is designed for real workloads, real data volumes, and real enterprise requirements from day one.",
    icon: Shield,
  },
  {
    title: "Self-Hosted Option",
    description:
      "Data sovereignty matters. We offer fully self-hosted deployments so your sensitive data never leaves your infrastructure. No vendor lock-in.",
    icon: Server,
  },
  {
    title: "Full-Stack Integration",
    description:
      "Not point solutions. We architect complete systems where vector search, graph relationships, time-series analytics, and relational data work together seamlessly.",
    icon: Layers,
  },
];

export function Approach() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don&apos;t just implement AI — we architect the foundation that
            makes it work.
          </p>

          {/* Principles */}
          <div className="mt-12 space-y-8">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div key={principle.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* GitHub link */}
          <div className="mt-12 rounded-lg border border-border bg-background p-6">
            <h3 className="text-lg font-semibold text-foreground">
              See the Code
            </h3>
            <p className="mt-2 text-muted-foreground">
              We believe in transparency. Explore our infrastructure and
              templates on GitHub.
            </p>
            <Link
              href="https://github.com/mindset-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
            >
              github.com/mindset-dev
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

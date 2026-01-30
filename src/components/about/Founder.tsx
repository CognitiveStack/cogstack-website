import { User } from "lucide-react";

export function Founder() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Founder
          </h2>

          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row">
            {/* Photo placeholder */}
            <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <User className="h-16 w-16 text-primary" />
            </div>

            {/* Bio content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground">
                Charles Vosloo
              </h3>
              <p className="mt-1 text-lg text-primary">
                Founder & Lead Engineer
              </p>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  With a background spanning DevOps engineering to AI
                  infrastructure architecture, I&apos;ve spent years building
                  and integrating complex systems that actually work in
                  production.
                </p>
                <p>
                  Today, I run a self-hosted environment with{" "}
                  <span className="font-medium text-foreground">
                    33+ integrated services
                  </span>{" "}
                  — from vector databases to workflow automation — proving that
                  sophisticated AI infrastructure doesn&apos;t require massive
                  cloud bills or vendor lock-in.
                </p>
                <p>
                  Based in Johannesburg, I focus on helping South African
                  enterprises deploy AI systems that are production-grade from
                  day one. No prototypes that fail at scale. No demos that
                  can&apos;t handle real data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

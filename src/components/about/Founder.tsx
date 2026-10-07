import Image from "next/image";

export function Founder() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
          The Founder
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Headshot */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <Image
                  src="/images/charles-headshot.png"
                  alt="Charles Vosloo"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Charles Vosloo
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Founder & Lead Engineer
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  My background is in DevOps engineering — Kubernetes, containers and
                  distributed systems — and I&apos;ve spent years building and integrating
                  complex systems that actually work in production.
                </p>

                <p>
                  Today I run CogStack&apos;s self-hosted AI stack: <strong>33+ integrated services</strong>,
                  from vector databases to workflow automation — proving that sophisticated AI
                  infrastructure doesn&apos;t require massive cloud/SaaS spend or vendor lock-in.
                </p>

                <p>
                  More recently I&apos;ve been bringing that same infrastructure thinking to
                  architecture, engineering and construction (AEC) — working as a BIM Manager and
                  building AI-assisted, automated BIM workflows as an Autodesk Developer Network
                  member.
                </p>

                <p>
                  Based in Johannesburg, I help South African enterprises deploy AI systems that
                  are production-grade from day one. No prototypes that fail at scale. No demos
                  that can&apos;t handle real data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

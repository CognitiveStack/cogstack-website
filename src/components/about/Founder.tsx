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
                  With a background spanning DevOps engineering to AI infrastructure, distributes
                  systems, and architecting and integrating complex systems that actually work in
                  production.
                </p>

                <p>
                  Today, I run a self-hosted environment with <strong>33+ integrated services</strong> — from vector
                  databases to workflow automation — proving that sophisticated AI infrastructure
                  doesn&apos;t require massive cloud/SaaS or vendor lock in.
                </p>

                <p>
                  Based in Johannesburg, I focus on helping South African enterprises deploy AI
                  systems that run production-grade from day one. No prototypes that fall at scale. No
                  demos that can&apos;t handle real data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

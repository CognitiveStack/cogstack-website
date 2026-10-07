import Image from "next/image";

export function Partner() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
          Strategic Partner
        </h2>
        
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Headshot */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <Image
                  src="/images/claire-headshot.png"
                  alt="Claire Shuttleworth"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Claire Shuttleworth
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Partner — Tender Intelligence Platform (CTIS)
              </p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Claire is CogStack&apos;s partner on the Tender Intelligence Platform at
                  tender.cogstack.co.za. She bridges business, domain and technical
                  perspectives — translating complex needs into clear, build-ready solution
                  designs so teams deliver the right solution, not just a technically correct one.
                </p>

                <p>
                  Much of her career has been in healthcare, where complexity is high and impact
                  is human. She works closely with developers, analysts and stakeholders —
                  challenging assumptions, reducing ambiguity and supporting strong engineering
                  decisions. For Claire, AI is one tool among many: valuable where it genuinely
                  improves decisions and outcomes, and always part of a wider system of people,
                  processes, data and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

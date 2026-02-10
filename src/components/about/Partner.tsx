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
                Strategic Partnerships Lead, Shuttleworth Academy
              </p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Claire brings years of IT experience to forge strategic collaborations between 
                  business and emerging technology. She specializes in identifying AI-powered 
                  solutions that deliver tangible value in government procurement and business intelligence.
                </p>
                
                <p>
                  Her partnership with CogStack demonstrates practical AI applications through the 
                  Tender Intelligence System (TTIS), helping organizations navigate digital transformation 
                  with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

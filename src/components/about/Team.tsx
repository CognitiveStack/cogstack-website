import Image from "next/image";

const team = [
  {
    name: "Charles Vosloo",
    title: "Founder & CEO",
    image: "/images/charles-headshot.png",
    bio: `Charles is the founder of CogStack, bringing over a decade of experience in 
    DevOps engineering and AI infrastructure. With deep expertise in JavaScript, TypeScript, 
    Python, and containerization technologies, he specializes in building sophisticated 
    AI-native systems. Charles leads CogStack's mission to deliver full-stack AI intelligence 
    solutions, including the innovative TTIS (Tender Intelligence System) that transforms 
    government procurement processes.`,
  },
  {
    name: "Claire Shuttleworth",
    title: "Strategic Partnerships Lead, Shuttleworth Academy",
    image: "/images/claire-headshot.png",
    bio: `Claire Shuttleworth serves as Strategic Partnerships Lead at Shuttleworth Academy, 
    where she leverages her extensive IT background to forge innovative collaborations at the 
    intersection of business strategy and emerging technology.
    
    With years of experience in the IT sector, Claire brings deep technical understanding 
    combined with strategic business acumen. She specializes in identifying and implementing 
    AI-powered solutions that deliver tangible value, particularly in areas where traditional 
    processes can be transformed through intelligent automation.
    
    Claire's partnership with CogStack has been instrumental in demonstrating the practical 
    applications of AI in government procurement and business intelligence. Her work on the 
    Tender Intelligence System (TTIS) showcases her ability to bridge cutting-edge technology 
    with real-world business needs, helping organizations navigate digital transformation with 
    confidence and clarity.`,
  },
];

export function Team() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the people building the future of AI infrastructure in South Africa
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg"
              >
                {/* Headshot */}
                <div className="mb-6 flex justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-primary/10 transition-all group-hover:ring-4 group-hover:ring-primary/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-primary">
                    {member.title}
                  </p>
                  <p className="mt-6 whitespace-pre-line text-left text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import { Founder } from "@/components/about/Founder";
import { Approach } from "@/components/about/Approach";

export const metadata: Metadata = {
  title: "About | CogStack",
  description:
    "Learn about CogStack and founder Charles Vosloo. We build production-grade AI infrastructure for South African enterprises.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About CogStack
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Building the infrastructure layer that makes AI actually work in
              production.
            </p>
          </div>
        </div>
      </section>

      <Founder />
      <Approach />
    </>
  );
}

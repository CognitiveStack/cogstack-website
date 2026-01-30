import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | CogStack",
  description:
    "Get in touch with CogStack. Let's discuss how we can build production-grade AI infrastructure for your enterprise.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to build production-grade AI infrastructure? Let&apos;s talk
              about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-4 text-muted-foreground">
                I&apos;m always interested in discussing new projects and
                opportunities. Reach out and let&apos;s see how we can work
                together.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a
                      href="mailto:charles@cogstack.co.za"
                      className="text-muted-foreground hover:text-primary"
                    >
                      charles@cogstack.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">GitHub</h3>
                    <a
                      href="https://github.com/mindset-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      github.com/mindset-dev
                    </a>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="mt-10 rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Response time:
                  </span>{" "}
                  I typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Send a Message
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

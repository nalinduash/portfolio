import { Button } from "@/components/ui/button";
import { contactLinks } from "@/data/content";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Contact Me
        </h2>
        <p className="mb-8 text-muted-foreground">
          Feel free to reach out through any of these platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {contactLinks.map((link) => (
            <Button key={link.label} variant="outline" size="lg" asChild>
              <a href={link.url} target="_blank">
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

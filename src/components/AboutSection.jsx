import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { aboutContent } from "@/data/content";

export function AboutSection() {
  const { heading, description } = aboutContent;

  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
          {heading}
        </h2>

        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle>Who I Am</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

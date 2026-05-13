import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ title, description, url, image, techStack }) {
  return (
    <Card className="flex flex-col">
      <img
        src={image}
        alt={`Image of ${title}`}
        className="aspect-video w-full rounded-t-xl object-cover"
      />

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          <a href={url} target="_blank">
            <ExternalLink className="mr-1.5 size-3.5" />
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certificates } from "@/data/content";

export function CertificatesSection() {
  return (
    <section id="certificates" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Certificates
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Card key={cert.title}>
              <CardContent className="flex flex-col gap-2">
                <p className="text-sm font-medium">{cert.title}</p>
                <Badge variant="outline" className="w-fit">
                  {cert.issuer}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

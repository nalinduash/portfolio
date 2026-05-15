import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillGroup({ title, items }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => {
            const Icon = skill.icon;
            return (
              <Badge key={skill.name} variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5">
                {Icon && <Icon className="size-3.5" />}
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

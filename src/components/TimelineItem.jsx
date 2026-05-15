import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

export function TimelineItem({ title, place, period, summary, details }) {
  const [open, setOpen] = useState(false);
  const hasDetails = details && details.length > 0;

  return (
    <div className="relative pl-8">
      {/* Dot on the timeline line */}
      <span className="absolute left-[-7px] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className="group flex w-full flex-col cursor-pointer gap-1 text-left"
          disabled={!hasDetails}
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold">{title}</h3>
            <Badge variant="outline">{period}</Badge>
          </div>

          <p className="text-sm text-muted-foreground">{place}</p>
          <p className="text-sm font-medium">{summary}</p>

          {hasDetails && (
            <ChevronDown
              className="mt-1 size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
            />
          )}
        </CollapsibleTrigger>

        {hasDetails && (
          <CollapsibleContent>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CollapsibleContent>
        )}
      </Collapsible>
    </div>
  );
}

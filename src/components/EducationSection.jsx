import { TimelineItem } from "@/components/TimelineItem";
import { education } from "@/data/content";

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
          Education
        </h2>

        <div className="mx-auto max-w-2xl border-l-2 border-border space-y-8">
          {education.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              place={item.place}
              period={item.period}
              summary={item.summary}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

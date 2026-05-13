import { SkillGroup } from "@/components/SkillGroup";
import { skillGroups } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
          Skills
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

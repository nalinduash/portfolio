import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { heroContent } from "@/data/content";
import profileImage from "@/assets/profile.png";

export function HeroSection() {
  const { greeting, name, title, description } = heroContent;

  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-[calc(100vh-57px)]"
    >
      <div className="flex mx-auto max-w-8xl flex-col items-center gap-10 md:flex-row md:gap-24">
        {/* Profile image */}
        <div className="flex shrink-0 justify-center">
          <Avatar className="size-48 sm:size-56 md:size-64 lg:size-72">
            <AvatarImage src={profileImage} alt={`Photo of ${name}`} />
            <AvatarFallback className="text-4xl">NA</AvatarFallback>
          </Avatar>
        </div>

        {/* Introduction text */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-base text-muted-foreground sm:text-lg">
            {greeting}
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="text-lg font-medium text-primary sm:text-xl">
            {title}
          </p>
          <p className="max-w-lg text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

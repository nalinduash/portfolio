import { ModeToggle } from "@/components/mode-toggle";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        <ModeToggle />
      </div>
    </header>
  );
}
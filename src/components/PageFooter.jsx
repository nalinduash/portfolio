import { Separator } from "@/components/ui/separator";

export function PageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <Separator />
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

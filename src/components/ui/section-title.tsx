
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  center = true,
  className
}: SectionTitleProps) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-2 md:gap-3 mb-8",
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
        {title}
      </h2>
      {
        subtitle && (
          <p className={cn("text-muted-foreground max-w-3xl text-xl ", center && "text-center")}>
            {subtitle}
          </p>
        )
      }
    </div>
  );
}

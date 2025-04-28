import { cn } from "@/lib/utils";

export const PlaceCard = ({
    name,
    position,
    image,
    description
}: {
    name: string;
    position: number[];
    image: string;
    description: string;
}) => {
    return (
        <figure
            className={cn(
                "relative max-h-52 h-full md:w-64 w-44 cursor-pointer overflow-hidden rounded-xl border p-0",
                // light styles
                "border-german-red/[.1] bg-german-red/[.01] hover:bg-german-red/[.05]",
                // dark styles
                "dark:border-german-gold/[.1] dark:bg-german-border-german-gold/[.10] dark:hover:bg-german-border-german-gold/[.15]",
            )}
        >
            <div className="relative md:w-64 w-44 h-full" title={description}>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <figcaption className="text-base md:text-lg font-bold bg-german-black/50 text-center text-german-gold">
                    {name}
                </figcaption>
            </div>
        </figure>
    );
};
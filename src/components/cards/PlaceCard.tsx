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
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-0",
                // light styles
                "border-german-red/[.1] bg-german-red/[.01] hover:bg-german-red/[.05]",
                // dark styles
                "dark:border-german-gold/[.1] dark:bg-german-border-german-gold/[.10] dark:hover:bg-german-border-german-gold/[.15]",
            )}
        >
            <div className="w-64 h-full">
                <img src={image} alt={name} className="w-full h-full" />
            </div>
            <div className="flex flex-row items-center gap-2">
                {/* <img className="rounded-full" width="32" height="32" alt="" src={image} /> */}
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};
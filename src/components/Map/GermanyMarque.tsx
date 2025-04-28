import { cn } from "@/lib/utils";
import { Marquee } from "../magic-ui/Marquee";
import { places } from "@/utils/mocks/mock";
import { PlaceCard } from '../cards/PlaceCard';

const firstRow = places.slice(0, places.length / 2);
const secondRow = places.slice(places.length / 2);


export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:35s]">
        {firstRow.map((review) => (
          <PlaceCard key={review.name} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((review) => (
          <PlaceCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

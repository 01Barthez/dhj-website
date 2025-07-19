import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  bgColor: string;
  iconColor: string;
}

export const ContactCard = memo(({ icon, title, content, link, bgColor, iconColor }: ContactCardProps) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={title.toLowerCase()}
  >
    <Card className="overflow-hidden border-none bg-card shadow-lg dark:shadow-sm dark:shadow-white">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className={`h-12 w-12 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-foreground/80">{content}</p>
      </CardContent>
    </Card>
  </Link>
));

ContactCard.displayName = 'ContactCard'; 
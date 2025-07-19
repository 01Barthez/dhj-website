import { Card, CardContent } from '@/components/ui/card';

export function MapSection() {
  return (
    <section className="shadow-sm p-6 rounded overflow-hidden shadow-german-gold">
      <Card className="border-none shadow-xl">
        <CardContent className="">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2122.384822476309!2d11.554148185019468!3d3.8791264690999006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTInNDUuMCJOIDExwrAzMycxOS4zIkU!5e0!3m2!1sfr!2scm!4v1746989409866!5m2!1sfr!2scm" 
            style={{ border: 0, width: "100%", height: "500px" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Centre Allemand DHJ"
          />
        </CardContent>
      </Card>
    </section>
  );
} 
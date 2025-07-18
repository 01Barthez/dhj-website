import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Facebook, Linkedin, Twitter, Copy, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { blogPosts } from '@/data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const { toast } = useToast();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const foundPost = blogPosts.find(post => post.id === id);
      if (foundPost) {
        setPost(foundPost);
      } else {
        setPost(null);
      }
      setLoading(false);
    } else {
      setPost(null);
      setLoading(false);
    }
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Lien copié !",
        description: "Le lien de l'article a été copié dans votre presse-papiers.",
      });
    }
  };

  if (!loading && !post) {
    return <Navigate to="/blog" replace />;
  }
  if (loading) {
    return <div style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chargement...</div>;
  }

  // Trouver les articles connexes si post.relatedPosts existe
  const relatedPosts = post.relatedPosts ? post.relatedPosts.map((relatedId: string) => {
    const related = blogPosts.find(p => p.id === relatedId);
    if (related) {
      return {
        id: related.id,
        title: related.title,
        excerpt: related.excerpt,
        image: related.image,
        category: related.category
      };
    }
    return null;
  }).filter(Boolean) : [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-white">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('fr-FR')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Button asChild variant="outline" size="sm">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Link>
            </Button>
            <div className="relative group">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="mr-2 h-4 w-4" />
                Partager
              </Button>
              <div className="absolute right-0 mt-0 z-10 hidden group-hover:block bg-white border rounded shadow-lg p-2 min-w-[200px]">
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" /> Facebook
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    <MessageCircle className="h-4 w-4 text-green-500" /> WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" /> LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    <Twitter className="h-4 w-4 text-blue-400" /> X (Twitter)
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast({
                        title: "Lien copié !",
                        description: "Le lien de l'article a été copié dans votre presse-papiers.",
                      });
                    }}
                    className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded w-full text-left"
                  >
                    <Copy className="h-4 w-4 text-gray-500" /> Copier le lien
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground/90 prose-ul:text-foreground/90 prose-ol:text-foreground/90 prose-strong:text-foreground prose-a:text-german-red hover:prose-a:text-german-red/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 mb-16"
          >
            <Card className="bg-gradient-to-r from-german-red/5 to-german-gold/5 border-german-red/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/images/CEO-DHJ_Denis_Magloire.png"
                      alt="Denis Magloire"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Denis Magloire</h3>
                    <p className="text-foreground/80 mb-4">
                      Directeur et fondateur du Deutsches Haus Jaounde. Expert en pédagogie de l'allemand 
                      avec plus de 10 ans d'expérience dans l'accompagnement d'étudiants vers l'excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button asChild size="sm">
                        <Link to="/tarifs">
                          Découvrir nos formations
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">
                          Nous contacter
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t pt-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                Articles recommandés
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost: any, index: number) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{relatedPost.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold line-clamp-2 mb-3 hover:text-german-red transition-colors">
                          <Link to={`/blog/${relatedPost.id}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-foreground/70 line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${relatedPost.id}`}>
                            Lire l'article
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-german-red/10 to-german-gold/10 border-german-red/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Prêt à commencer votre apprentissage de l'allemand ?
                </h3>
                <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
                  Rejoignez des centaines d'étudiants qui ont choisi DHJ pour réaliser leurs rêves. 
                  Nos formations adaptées vous mèneront vers la réussite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/tarifs">
                      Voir nos formations
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
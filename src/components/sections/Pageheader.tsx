import { Badge } from '@/components/ui/badge';

export default function PageHeaderWithDescription() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Optional Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Premium Accommodations
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Authentic Local Experiences in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Handpicked Properties
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Immerse yourself in carefully curated vacation rentals that showcase the true character
            of each destination. From cozy urban lofts to secluded countryside retreats, every
            property tells a unique story.
          </p>
        </div>
      </div>
    </section>
  );
}

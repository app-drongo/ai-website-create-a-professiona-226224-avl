import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Bed,
  Bath,
  Square,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Tv,
  AirVent,
  Utensils,
} from 'lucide-react';

export default function PropertyGallery() {
  const galleries = [
    {
      id: 1,
      title: 'Downtown Executive Studio',
      location: 'Financial District',
      mainImage:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 650 },
      price: '$89/night',
      amenities: ['Wifi', 'Kitchen', 'AC', 'TV'],
    },
    {
      id: 2,
      title: 'Riverside Two-Bedroom Apartment',
      location: 'Riverside Heights',
      mainImage:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 1, sqft: 950 },
      price: '$129/night',
      amenities: ['Wifi', 'Kitchen', 'Parking', 'TV', 'AC'],
    },
    {
      id: 3,
      title: 'Historic District One-Bedroom',
      location: 'Old Town Quarter',
      mainImage:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 750 },
      price: '$99/night',
      amenities: ['Wifi', 'Kitchen', 'TV', 'AC'],
    },
    {
      id: 4,
      title: 'Modern Loft with City Views',
      location: 'Arts District',
      mainImage: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 850 },
      price: '$119/night',
      amenities: ['Wifi', 'Kitchen', 'AC', 'TV', 'Parking'],
    },
    {
      id: 5,
      title: 'Family Two-Bedroom Suite',
      location: 'Maple Grove Residential',
      mainImage:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1100 },
      price: '$149/night',
      amenities: ['Wifi', 'Kitchen', 'Parking', 'TV', 'AC'],
    },
    {
      id: 6,
      title: 'Cozy Garden Studio',
      location: 'Greenwood Neighborhood',
      mainImage: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 550 },
      price: '$79/night',
      amenities: ['Wifi', 'Kitchen', 'TV', 'AC'],
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi':
        return <Wifi className="size-3" />;
      case 'Kitchen':
        return <Utensils className="size-3" />;
      case 'Parking':
        return <Car className="size-3" />;
      case 'TV':
        return <Tv className="size-3" />;
      case 'AC':
        return <AirVent className="size-3" />;
      default:
        return <Coffee className="size-3" />;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Vacation Rental Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through detailed photo galleries of our 6 professionally managed apartments, each
            uniquely designed for your perfect stay
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/90 backdrop-blur-sm hover:bg-background"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm hover:bg-background"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="size-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="size-4" />
                    <span>
                      {property.specs.beds} bed{property.specs.beds > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-4" />
                    <span>
                      {property.specs.baths} bath{property.specs.baths > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="size-4" />
                    <span>{property.specs.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-xs text-muted-foreground"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1">
                  {property.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${property.title} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button className="w-full mt-4" variant="outline">
                  View Details & Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Ready to Book Your Perfect Stay?
          </h3>
          <p className="text-muted-foreground mb-4">
            All properties include full kitchens, free WiFi, and professional cleaning between stays
          </p>
          <Button size="lg" className="gap-2">
            Check Availability
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

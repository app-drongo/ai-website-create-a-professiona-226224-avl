import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Home,
  Coffee,
  ShoppingBag,
  Train,
  Utensils,
  Trees,
  Wifi,
  Car,
  Star,
} from 'lucide-react';

export default function PropertyMap() {
  const properties = [
    {
      id: 1,
      name: 'Downtown Loft Studio',
      price: '$89/night',
      type: 'Studio',
      rating: 4.9,
      reviews: 47,
      lat: 34.0522,
      lng: -118.2437,
      available: true,
    },
    {
      id: 2,
      name: 'Riverside 1BR Apartment',
      price: '$125/night',
      type: '1 Bedroom',
      rating: 4.8,
      reviews: 32,
      lat: 34.0622,
      lng: -118.2537,
      available: true,
    },
    {
      id: 3,
      name: 'Garden District 2BR',
      price: '$165/night',
      type: '2 Bedroom',
      rating: 4.9,
      reviews: 28,
      lat: 34.0422,
      lng: -118.2337,
      available: false,
    },
    {
      id: 4,
      name: 'Historic District Studio',
      price: '$95/night',
      type: 'Studio',
      rating: 4.7,
      reviews: 41,
      lat: 34.0722,
      lng: -118.2637,
      available: true,
    },
    {
      id: 5,
      name: 'Uptown 2BR Suite',
      price: '$185/night',
      type: '2 Bedroom',
      rating: 5.0,
      reviews: 19,
      lat: 34.0322,
      lng: -118.2237,
      available: true,
    },
    {
      id: 6,
      name: 'Central Park 1BR',
      price: '$135/night',
      type: '1 Bedroom',
      rating: 4.8,
      reviews: 35,
      lat: 34.0522,
      lng: -118.2737,
      available: false,
    },
  ];

  const amenities = [
    { icon: Coffee, name: 'Cafés & Coffee', count: 24 },
    { icon: Utensils, name: 'Restaurants', count: 67 },
    { icon: ShoppingBag, name: 'Shopping Centers', count: 12 },
    { icon: Train, name: 'Public Transit', count: 8 },
    { icon: Trees, name: 'Parks & Recreation', count: 15 },
    { icon: Car, name: 'Parking Available', count: 6 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prime Locations Across the City
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All Local Stays apartments are strategically located near top attractions, dining, and
            transportation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=750&fit=crop"
                    alt="City map overview"
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>

                {/* Property Location Markers */}
                <div className="absolute inset-0">
                  {/* Downtown Loft Studio */}
                  <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p className="text-sm font-semibold">Downtown Loft Studio</p>
                          <p className="text-xs text-muted-foreground">$89/night • ⭐ 4.9</p>
                          <Badge className="text-xs mt-1">Available</Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Riverside 1BR */}
                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p className="text-sm font-semibold">Riverside 1BR</p>
                          <p className="text-xs text-muted-foreground">$125/night • ⭐ 4.8</p>
                          <Badge className="text-xs mt-1">Available</Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Garden District 2BR - Booked */}
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-muted-foreground hover:bg-muted-foreground/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p className="text-sm font-semibold">Garden District 2BR</p>
                          <p className="text-xs text-muted-foreground">$165/night • ⭐ 4.9</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            Booked
                          </Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Historic District Studio */}
                  <div className="absolute top-1/4 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>

                  {/* Uptown 2BR Suite */}
                  <div className="absolute bottom-1/4 left-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Home className="size-6" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg backdrop-blur-sm">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-primary rounded-full shadow-sm" />
                      <span className="font-medium">Available Now</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-muted-foreground rounded-full" />
                      <span className="font-medium">Currently Booked</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Property Listings Sidebar */}
          <div className="space-y-6">
            {/* Available Properties */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Our Properties
                </h3>
                <div className="space-y-4">
                  {properties.map(property => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1">{property.name}</p>
                        <p className="text-xs text-muted-foreground mb-2">{property.type}</p>
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="size-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{property.rating}</span>
                          <span className="text-muted-foreground">({property.reviews})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm mb-1">{property.price}</p>
                        <Badge
                          variant={property.available ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {property.available ? 'Available' : 'Booked'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Amenities */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4">Neighborhood Highlights</h3>
                <div className="space-y-4">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <amenity.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </div>
                      <Badge variant="outline" className="font-semibold">
                        {amenity.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                View All Properties
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

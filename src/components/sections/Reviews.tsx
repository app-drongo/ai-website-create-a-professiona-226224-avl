import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award } from 'lucide-react';

export default function PropertyReviews() {
  const reviews = [
    {
      id: 1,
      author: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 days ago',
      property: 'Downtown Executive Studio',
      verified: true,
      helpful: 12,
      title: 'Perfect for business travelers',
      content:
        "Stayed here for a week-long business trip and couldn't have asked for better. The studio is impeccably clean, modern, and has everything needed for extended stays. Walking distance to the financial district and excellent restaurants. The host was incredibly responsive and even provided local business recommendations.",
      pros: ['Prime downtown location', 'Business-ready amenities', 'Exceptional cleanliness'],
      stayDate: 'November 2024',
    },
    {
      id: 2,
      author: 'James Mitchell',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 week ago',
      property: 'Riverside 2-Bedroom Apartment',
      verified: true,
      helpful: 28,
      title: 'Outstanding family accommodation',
      content:
        'Brought my family of four for a long weekend and this apartment exceeded every expectation. Spacious bedrooms, fully equipped kitchen, and the riverside location was magical. Kids loved watching boats from the balcony. The apartment felt like a luxury home away from home.',
      pros: ['Spacious family layout', 'Stunning river views', 'Kid-friendly setup'],
      stayDate: 'November 2024',
    },
    {
      id: 3,
      author: 'Sophie Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Historic District 1-Bedroom',
      verified: true,
      helpful: 19,
      title: 'Charming and perfectly located',
      content:
        'This apartment captures the perfect blend of historic charm and modern comfort. Located in the heart of the historic district, we could walk to museums, galleries, and the best local cafes. The apartment itself is beautifully furnished with thoughtful touches throughout.',
      pros: [
        'Historic neighborhood charm',
        'Walking distance to attractions',
        'Beautifully decorated',
      ],
      stayDate: 'October 2024',
    },
    {
      id: 4,
      author: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 4,
      date: '3 weeks ago',
      property: 'Garden View Studio',
      verified: true,
      helpful: 15,
      title: 'Peaceful retreat in the city',
      content:
        'Needed a quiet place to work remotely for two weeks and this studio was perfect. The garden view is incredibly peaceful, and the workspace setup is ideal for productivity. Only minor suggestion would be a larger coffee maker for longer stays, but otherwise fantastic.',
      pros: ['Quiet garden setting', 'Great for remote work', 'Peaceful atmosphere'],
      stayDate: 'October 2024',
    },
    {
      id: 5,
      author: 'Lisa Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Modern 2-Bedroom Loft',
      verified: true,
      helpful: 33,
      title: 'Luxury living at its finest',
      content:
        'Celebrated our anniversary here and it was absolutely perfect. The loft is stunning with high ceilings, modern amenities, and a gourmet kitchen that made cooking romantic dinners a joy. The rooftop access was an unexpected bonus for evening wine. Will definitely return!',
      pros: ['Luxury finishes', 'Gourmet kitchen', 'Rooftop access'],
      stayDate: 'October 2024',
    },
    {
      id: 6,
      author: 'Robert Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Cozy 1-Bedroom Retreat',
      verified: true,
      helpful: 21,
      title: 'Home away from home',
      content:
        "Extended my business trip by a few days just to enjoy more time in this wonderful apartment. The neighborhood is residential and quiet, perfect for unwinding after busy days. The apartment has every comfort you could want, and the host's attention to detail is remarkable.",
      pros: ['Quiet residential area', 'Exceptional host attention', 'All comforts provided'],
      stayDate: 'September 2024',
    },
  ];

  const stats = {
    average: 4.9,
    total: 247,
    distribution: [
      { stars: 5, count: 198 },
      { stars: 4, count: 38 },
      { stars: 3, count: 8 },
      { stars: 2, count: 2 },
      { stars: 1, count: 1 },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Guest Reviews & Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Local Stays apartments exceptional through our guests' authentic
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map(item => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-green-600" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Direct booking guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="size-4 text-primary" />
                    <span>24/7 guest support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="size-4" />
                  All Properties
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Apartment Type
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Rating
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map(review => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs gap-1">
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property Badge */}
                  <Badge variant="outline" className="mb-3">
                    {review.property}
                  </Badge>

                  {/* Review Content */}
                  <h5 className="font-semibold mb-2">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="gap-1 bg-primary/10 text-primary"
                        >
                          <Check className="size-3" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="size-4" />
                      Host Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" className="px-8">
                View All {stats.total} Reviews
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                See reviews from all Local Stays properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { 
  ArrowRight, 
  MapPin, 
  Wind, 
  Flame, 
  Coffee, 
  Wifi, 
  Star,
  Check,
  GlassWater,
  BookOpen,
  Music
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [date, setDate] = useState<DateRange | undefined>();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const images = [
    { src: "/bedroom.png", alt: "Master bedroom with mountain views" },
    { src: "/hot-tub.png", alt: "Cedar hot tub under the stars" },
    { src: "/kitchen.png", alt: "Chef's kitchen with butcher block" },
    { src: "/fire-pit.png", alt: "Evening fire pit glowing" },
    { src: "/landscape.png", alt: "Julian CA morning mist" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation (floating) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-serif text-2xl tracking-widest uppercase">SALT & SKY</div>
        <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-none tracking-widest uppercase text-xs px-6">
          Book Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero-cabin.png")' }}
        />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.p variants={fadeInUp} className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Julian, California</motion.p>
          <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-8">
            Silence is<br/>the rarest luxury.
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-widest uppercase px-8 py-6 text-sm" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Reserve Your Escape
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* The Experience */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              A private wilderness compound designed for those who seek the extraordinary.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              At 4,200 feet elevation, where towering pines meet obsidian-dark skies, Salt & Sky is a cinematic escape. Wake up to cedar-scented air and mountain mist. Spend the day exploring historic gold rush trails, and end the night submerged in a cedar hot tub beneath the Milky Way.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 text-sm tracking-widest uppercase text-primary border-b border-primary/20 pb-4 inline-flex">
                <MapPin className="w-4 h-4" /> 90 minutes from San Diego & LA
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="relative aspect-[4/5] overflow-hidden">
            <img src="/landscape.png" alt="Julian mountain fog" className="object-cover w-full h-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-12 bg-card">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
          <h2 className="font-serif text-3xl md:text-4xl">The Property</h2>
          <div className="text-sm tracking-widest uppercase text-muted-foreground">Swipe to explore</div>
        </div>
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {images.map((img, i) => (
              <div key={i} className="flex-[0_0_85%] md:flex-[0_0_60%] min-w-0 pl-4 md:pl-8 first:pl-6 md:first:pl-12">
                <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground font-serif italic">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Restrained Luxury</h2>
          <p className="text-muted-foreground text-lg">Every detail considered. Nothing superfluous.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Wind, title: "Cedar Hot Tub", desc: "Private outdoor soaking under the dark sky reserve." },
            { icon: Flame, title: "Wood-Burning Hearth", desc: "A colossal stone fireplace stocked with split oak." },
            { icon: Coffee, title: "Chef's Kitchen", desc: "Professional range, butcher block, morning espresso." },
            { icon: Music, title: "Sonos Sound", desc: "Architectural audio integrated throughout the cabin." },
            { icon: Wifi, title: "Starlink WiFi", desc: "High-speed connection if you must remain plugged in." },
            { icon: GlassWater, title: "Curated Bar", desc: "Complimentary local spirits and artisan mixers." },
            { icon: Star, title: "Stargazing Deck", desc: "Unobstructed views of the Milky Way galaxy." },
            { icon: BookOpen, title: "Parchment Library", desc: "A collection of design, art, and nature volumes." },
          ].map((item, i) => (
            <div key={i} className="group">
              <item.icon className="w-8 h-8 text-primary mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-24 bg-card border-y border-border px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Skip the Platform Fees</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Booking directly with us means cutting out Airbnb and VRBO entirely. You save 15-18% on arbitrary service fees, while securing exclusive perks reserved only for direct guests.
              </p>
              <ul className="space-y-4">
                {[
                  "Save up to 18% on platform service fees",
                  "Direct, priority communication with the host",
                  "Complimentary late checkout (when available)",
                  "Welcome bottle of Julian apple wine"
                ].map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 md:p-10 border border-border">
              <h3 className="font-serif text-2xl mb-6 text-center">Cost Comparison</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-muted-foreground pb-4 border-b border-border">
                  <span>Base Rate (2 nights)</span>
                  <span>$850</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground pb-4 border-b border-border">
                  <span>Cleaning Fee</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between items-center text-destructive pb-4 border-b border-border line-through opacity-70">
                  <span>Airbnb Service Fee (15%)</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between items-center font-serif text-2xl text-primary pt-2">
                  <span>Direct Total</span>
                  <span>$1,000</span>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground italic">You save $150 by booking here.</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Location */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[3/4] overflow-hidden">
            <img src="/landscape.png" alt="Julian CA Landscape" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="font-serif text-2xl mb-2 text-white">Julian, California</div>
              <div className="text-sm tracking-widest uppercase text-white/70">Elevation 4,235 ft</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Historic & Untamed</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A former gold rush town surrounded by oak and pine forests, Julian offers a distinct four-season climate rare in Southern California. Just 90 minutes from San Diego, yet completely removed from the city's frantic pace.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl mb-2 text-primary">To Do</h3>
                <p className="text-muted-foreground">Hike the Volcan Mountain summit trail for panoramic views to the Pacific, paddle Cuyamaca Lake, or spend the evening stargazing in one of California's few designated Dark Sky communities.</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2 text-primary">To Eat</h3>
                <p className="text-muted-foreground">Beyond the famous apple pie, enjoy farm-to-table dining at Jeremy's on the Hill, natural wines at Menghini Winery, and hard cider tasting at Julian Hard Cider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl">The Guestbook</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "The pictures don't do it justice. The absolute silence, the smell of cedar, the way the light hits the living room in the morning... unmatched.", author: "Sarah & James, Los Angeles" },
            { quote: "We've stayed at luxury resorts all over the world, but this cabin offered a level of privacy and soul that you just can't manufacture. The hot tub under the stars was transcendent.", author: "Michael T., New York" },
            { quote: "Finally, a mountain rental that doesn't feel like a dusty cabin. Immaculate design, incredible host communication, and the beds are like sleeping on clouds.", author: "Elena R., San Diego" }
          ].map((review, i) => (
            <div key={i} className="p-8 border border-border bg-card/50 hover:bg-card transition-colors duration-300">
              <div className="flex gap-1 mb-6 text-primary">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6">"{review.quote}"</p>
              <div className="text-sm tracking-widest uppercase text-muted-foreground">— {review.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 md:py-32 bg-background px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Secure Your Dates</h2>
              <p className="text-muted-foreground text-lg mb-10">Select your ideal window for a mountain escape. We review all direct booking requests within 2 hours.</p>
              
              <div className="bg-card border border-border p-6 rounded-md">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={setDate}
                  className="mx-auto"
                  classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground",
                  }}
                />
              </div>
            </div>

            <div>
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-card border border-border">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl mb-4">Request Received</h3>
                  <p className="text-muted-foreground">Thank you. We will confirm your dates and send a secure payment link within 2 hours.</p>
                  <Button variant="outline" className="mt-8 rounded-none uppercase tracking-widest text-xs" onClick={() => setFormState("idle")}>
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm tracking-widest uppercase text-muted-foreground">First Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm tracking-widest uppercase text-muted-foreground">Last Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm tracking-widest uppercase text-muted-foreground">Email</label>
                    <input required type="email" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="jane@example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm tracking-widest uppercase text-muted-foreground">Guests</label>
                      <select required className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm tracking-widest uppercase text-muted-foreground">Selected Dates</label>
                      <div className="py-3 border-b border-border text-foreground">
                        {date?.from ? (
                          date.to ? (
                            <>{format(date.from, "LLL dd")} - {format(date.to, "LLL dd, y")}</>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span className="text-muted-foreground">Select on calendar</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm tracking-widest uppercase text-muted-foreground">Message (Optional)</label>
                    <textarea rows={3} className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="Tell us a bit about your trip..." />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-widest uppercase py-6 text-sm flex items-center justify-center gap-2"
                    disabled={formState === "submitting" || !date?.from}
                  >
                    {formState === "submitting" ? "Sending..." : "Submit Inquiry"} <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">Frequently Asked</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Is the cabin dog friendly?", a: "To preserve the pristine condition of the hardwood floors and luxury linens, we do not allow pets of any kind." },
              { q: "Do I need a 4x4 vehicle to reach the property?", a: "While the roads are paved, we do receive snow in the winter months (Dec-Feb). During snow storms, chains or a 4WD vehicle are required by highway patrol." },
              { q: "How fast is the WiFi?", a: "We run Starlink satellite internet, averaging 100-150 Mbps download speeds, sufficient for remote work and video calls." },
              { q: "What is the cancellation policy?", a: "Full refund for cancellations made within 48 hours of booking. 50% refund for cancellations made at least 14 days before check-in. No refunds for cancellations made within 14 days of check-in." },
              { q: "Is there cell service?", a: "Cell service is notoriously spotty in Julian. However, our Starlink WiFi supports Wi-Fi calling perfectly." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-xl hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl tracking-widest uppercase mb-2">SALT & SKY</div>
            <p className="text-muted-foreground text-sm">Julian, California</p>
          </div>
          <div className="flex gap-8 text-sm tracking-widest uppercase text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="mailto:hello@saltandsky.com" className="hover:text-primary transition-colors">Email</a>
            <a href="#booking" className="hover:text-primary transition-colors">Book</a>
          </div>
        </div>
        <div className="mt-16 text-center text-xs text-muted-foreground uppercase tracking-widest opacity-50">
          © {new Date().getFullYear()} Salt & Sky Cabin. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

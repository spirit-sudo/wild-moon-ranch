import { useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import {
  ArrowRight,
  MapPin,
  Flame,
  Waves,
  Wifi,
  Star,
  Check,
  Mountain,
  Dumbbell,
  Sun,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [date, setDate] = useState<DateRange | undefined>();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    { src: "/aerial-dusk.jpg", alt: "Dusk aerial view over Cuyamaca Lake and the mountains" },
    { src: "/bedroom2.jpg", alt: "Western-inspired bedroom with Navajo pillows and dark wood" },
    { src: "/side-deck.jpg", alt: "Side deck at golden hour with mountain vista" },
    { src: "/dog-wine.jpg", alt: "Relaxing on the swing with wine and mountain views" },
    { src: "/deck-hottub.jpg", alt: "The full property at sunset — decks, hottub, and mountain backdrop" },
    { src: "/record-fireplace.jpg", alt: "Vinyl and wine by the fireplace" },
    { src: "/bathtub.jpg", alt: "Candlelit bathtub with open book and wildflowers" },
    { src: "/swing-dawn.jpg", alt: "Porch swing at dawn overlooking the layered mountains" },
    { src: "/aerial-courts.png", alt: "Aerial sunset view with private tennis court and the cabin" },
    { src: "/gazebo.jpg", alt: "Gazebo and pond overlooking the mountain valley" },
    { src: "/hottub-path.jpg", alt: "Cedar hot tub from the stone path at golden hour" },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border">
        <div className="font-serif text-xl tracking-wide">Salt & Sky</div>
        <div className="flex items-center gap-4">
          <button onClick={scrollToBooking} className="text-sm px-5 py-2 border border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <img src="/aerial-dusk.jpg" alt="Dusk aerial view over Cuyamaca Lake and the mountains" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-5xl">
          <motion.p variants={fadeUp} className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">
            15884 N Peak Road, Julian, California
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-8">
            The silence<br />you didn't know<br />you needed.
          </motion.h1>
          <motion.div variants={fadeUp}>
            <button onClick={scrollToBooking} className="bg-foreground text-background hover:bg-foreground/80 transition-colors px-8 py-3.5 text-sm tracking-widest uppercase">
              Reserve Your Dates
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Tagline — text only */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
            A private mountain compound at 4,200 feet elevation. Where the air is thin, the views are endless, and the only thing on your schedule is sunset.
          </motion.p>
        </motion.div>
      </section>

      {/* Curated Photo Pair */}
      <section className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group"
            onClick={() => setLightbox(3)}
          >
            <img src="/bathtub.jpg" alt="Candlelit bathtub with open book and wildflowers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 aspect-[3/4] overflow-hidden rounded-sm cursor-pointer group"
            onClick={() => setLightbox(1)}
          >
            <img src="/side-deck.jpg" alt="Side deck at golden hour" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>
      </section>

      {/* Property Story */}
      <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-6">The Property</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Every window is a painting. Every sunset, a private show.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
              Perched on N Peak Road with unobstructed views across the Laguna Mountains, this is not a rental — it is a destination. The kind of place where you forget to check your phone because the light on the ridges is doing something you've never seen before.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-10">
              The deck stretches the full width of the house. Adirondack chairs face west. The cedar soaking tub steams at the edge of the hillside. At night, the sky is so dark you can trace the Milky Way.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm tracking-wide text-foreground">
              <MapPin className="w-4 h-4" /> 90 minutes from San Diego & downtown LA
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <img src="/hottub-path.jpg" alt="Cedar hot tub from the stone path at golden hour" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">What you get</p>
          <h2 className="font-serif text-4xl md:text-5xl">Everything. Nothing extra.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {[
            { icon: Waves, title: "Cedar Soaking Tub", desc: "Hot tub carved from western red cedar, positioned at the property edge with full mountain panorama. Soak under stars you can actually see." },
            { icon: Dumbbell, title: "Pickleball Court", desc: "Full regulation court on the property. A volley at 4,200 feet with mountain views beats any indoor club." },
            { icon: Sun, title: "Sunset Deck", desc: "Wraparound deck with Adirondack chairs, bar-height seating, and a porch swing. Every seat faces west." },
            { icon: Flame, title: "Indoor Fireplace", desc: "Wood-burning hearth for the winter months. Stocked with oak. The cabin glows differently when it's lit." },
            { icon: Wifi, title: "Starlink WiFi", desc: "Rural-grade satellite internet at 100+ Mbps. Work remotely if you must. Stream flawlessly when you unwind." },
            { icon: Mountain, title: "Dark Sky Views", desc: "Minimal light pollution. On clear nights the Milky Way is visible to the naked eye. Bring a tripod." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            >
              <item.icon className="w-6 h-6 text-foreground mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-bleed single photo */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <img src="/gazebo.jpg" alt="Gazebo and pond overlooking the mountain valley" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <div className="font-serif text-2xl md:text-3xl text-white mb-1">Julian, California</div>
          <div className="text-xs tracking-[0.25em] uppercase text-white/60">Elevation 4,235 ft</div>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">The smarter choice</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Skip the platform. Keep the money.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Booking directly means no Airbnb service fees, no VRBO markup, and no algorithmic pricing. You get the best rate, direct communication with us, and perks that don't exist on any listing platform.
              </p>
              <ul className="space-y-5">
                {[
                  "Save up to 18% by avoiding platform service fees",
                  "Direct host contact from inquiry to checkout",
                  "Complimentary late checkout when available",
                  "Priority rebooking for return guests",
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border p-8 md:p-12 rounded-sm">
              <h3 className="font-serif text-2xl mb-8 text-center">Cost Comparison</h3>
              <div className="space-y-5 mb-8">
                <div className="flex justify-between items-center text-muted-foreground pb-4 border-b border-border">
                  <span className="text-sm">Base rate (2 nights)</span>
                  <span className="font-medium">$850</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground pb-4 border-b border-border">
                  <span className="text-sm">Cleaning fee</span>
                  <span className="font-medium">$150</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground/50 pb-4 border-b border-border line-through">
                  <span className="text-sm">Airbnb service fee (15%)</span>
                  <span className="font-medium">$150</span>
                </div>
                <div className="flex justify-between items-center font-serif text-2xl pt-2">
                  <span>Your total</span>
                  <span>$1,000</span>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                You keep $150 in your pocket by booking here.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <img src="/bedroom2.jpg" alt="Western-inspired bedroom with Navajo pillows and dark wood" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">The Location</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Historic. Untamed. Yours for the weekend.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Julian is a former gold rush mountain town surrounded by Cleveland National Forest. It is one of the few places in Southern California with true four-season weather, dark skies, and a pace of life that forces you to slow down.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-2">Explore</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Hike Volcan Mountain for panoramic views to the Pacific. Paddle Cuyamaca Lake. Visit the gold mines. Or simply do nothing on the porch swing.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Eat & Drink</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Julian apple pie at Mom's Pies, farm-to-table at Jeremy's on the Hill, hard cider at Julian Hard Cider, and natural wines at Menghini Winery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">Guestbook</p>
          <h2 className="font-serif text-4xl md:text-5xl">What guests say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "The view from the deck at sunset is the most beautiful thing I have ever seen from a rental property. The cedar hot tub at night is transcendent.", author: "Sarah M., Los Angeles" },
            { quote: "We played pickleball at golden hour, soaked in the tub under a sky full of stars, and did not open a laptop for three days. Exactly what we needed.", author: "David & Rachel, San Diego" },
            { quote: "The property photographs don't prepare you for how dramatic the light is in person. Every hour the mountain ridges change color. You never want to go inside.", author: "James K., Phoenix" },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="p-8 md:p-10 border border-border bg-card hover:shadow-sm transition-shadow duration-500 rounded-sm"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-foreground fill-foreground" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-8">&ldquo;{review.quote}&rdquo;</p>
              <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{review.author}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-20 border-t border-border">
        <div className="px-6 md:px-12 mb-10 flex justify-between items-end">
          <div>
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-2">Gallery</p>
            <h2 className="font-serif text-3xl md:text-4xl">See it for yourself</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {galleryImages.map((img, i) => (
              <div key={i} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-3 md:pl-4 first:pl-6 md:first:pl-12">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-28 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">Availability</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Secure your dates</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We respond to all direct booking inquiries within two hours. Select your dates, tell us a bit about your trip, and we'll handle the rest.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="bg-card border border-border p-6 rounded-sm">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={setDate}
                  className="mx-auto"
                  classNames={{
                    day_selected: "bg-foreground text-background hover:bg-foreground hover:text-background",
                    day_today: "bg-muted text-foreground",
                  }}
                />
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-3 h-3 bg-foreground rounded-full" />
                <span>Selected dates</span>
                <div className="w-3 h-3 bg-muted rounded-full ml-4" />
                <span>Today</span>
              </div>
            </div>
            <div>
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-card border border-border rounded-sm">
                  <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
                    <Check className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl mb-4">Request received</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you. We will confirm your dates and send a secure payment link within two hours.
                  </p>
                  <Button variant="outline" className="mt-8 rounded-none uppercase tracking-widest text-xs" onClick={() => setFormState("idle")}>
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">First Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted-foreground/40" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Last Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted-foreground/40" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Email</label>
                    <input required type="email" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted-foreground/40" placeholder="jane@example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Guests</label>
                      <select required className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-foreground transition-colors text-foreground appearance-none">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Selected Dates</label>
                      <div className="py-3 border-b border-border text-foreground text-sm">
                        {date?.from ? (
                          date.to ? (
                            <>{format(date.from, "LLL dd")} — {format(date.to, "LLL dd, y")}</>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span className="text-muted-foreground">Pick dates on calendar</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Message</label>
                    <textarea rows={3} className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder:text-muted-foreground/40 resize-none" placeholder="Tell us about your trip..." />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-foreground text-background hover:bg-foreground/80 rounded-none tracking-[0.15em] uppercase py-6 text-sm flex items-center justify-center gap-2"
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
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-xs mb-4">FAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Is the property pet-friendly?", a: "To preserve the condition of the home and the surrounding landscape, we do not allow pets. Service animals are welcome per ADA requirements." },
              { q: "Do I need a 4x4 to get there?", a: "The road is paved all the way to the property. During winter storms (December through February), Caltrans may require chains or 4WD/AWD on the mountain highways." },
              { q: "How fast is the internet?", a: "Starlink satellite internet averages 100–150 Mbps download. It's sufficient for video calls, streaming, and remote work — though we encourage you to disconnect." },
              { q: "What is the cancellation policy?", a: "Full refund for cancellations within 48 hours of booking. 50% refund for cancellations at least 14 days before check-in. No refund within 14 days of arrival." },
              { q: "Is there cell service?", a: "Cell reception is spotty in the mountains. Wi-Fi calling works perfectly through Starlink. We recommend downloading maps and music before arrival." },
              { q: "How many people can the property accommodate?", a: "The cabin sleeps up to 6 guests across 3 bedrooms. The pickleball court, deck, and hot tub comfortably handle groups of this size." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg hover:text-muted-foreground transition-colors py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
            <div>
              <div className="font-serif text-2xl tracking-wide mb-2">Salt & Sky</div>
              <p className="text-background/50 text-sm">15884 N Peak Road, Julian, CA 92036</p>
            </div>
            <div className="flex gap-8 text-xs tracking-[0.15em] uppercase text-background/50">
              <a href="#" className="hover:text-background transition-colors">Instagram</a>
              <a href="mailto:hello@saltandsky.com" className="hover:text-background transition-colors">Email</a>
              <button onClick={scrollToBooking} className="hover:text-background transition-colors">Book</button>
            </div>
          </div>
          <div className="text-center text-[11px] text-background/30 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Salt & Sky. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white text-sm tracking-widest uppercase">Close</button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === 0 ? galleryImages.length - 1 : lightbox - 1); }}>
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} className="max-w-full max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === galleryImages.length - 1 ? 0 : lightbox + 1); }}>
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">{lightbox + 1} / {galleryImages.length}</div>
        </div>
      )}
    </div>
  );
}

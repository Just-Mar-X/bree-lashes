import { useState } from "react"

const WHATSAPP_NUMBER = "254118725240"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Briee! I'd like to book a cluster lash set (KSh 550). Could you share your available times?"
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

function IconSparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4M22 4h-4" />
      <circle cx={4} cy={20} r={2} />
    </svg>
  )
}
function IconHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  )
}
function IconMapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx={12} cy={10} r={3} />
    </svg>
  )
}
function IconMessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  )
}
function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  )
}
function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

const styles = [
  {
    id: "long-short",
    title: "Long & Short Clusters",
    desc: "Mixed lengths layered for texture and fullness — soft at the inner corner, longer through the middle and outer lash line.",
    img: "/assets/style-long-short-CV3iuISA.jpg",
  },
  {
    id: "cat-eye",
    title: "Cat Eye Style",
    desc: "Longer clusters weighted toward the outer corner for a lifted, elongated eye.",
    img: "/assets/style-cat-eye-Bc3On_zV.jpg",
  },
  {
    id: "classic",
    title: "Classic Style",
    desc: "Even, uniform clusters that follow your natural lash line for a clean, polished finish.",
    img: "/assets/style-classic-CpurG3T6.jpg",
  },
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [form, setForm] = useState({ name: "", style: "Long & Short Clusters", location: "Kilifi", date: "" })

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi Briee! I'm ${form.name || "interested"} — I'd like to book a ${form.style} set (KSh 550) in ${form.location}${form.date ? ` on ${form.date}` : ""}. Are you available?`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="min-w-0">
            <span className="block truncate font-display text-xl tracking-tight sm:text-2xl">Lashes by Briee</span>
            <span className="eyebrow mt-0.5 block text-[0.6rem]">Cluster lashes · Kilifi &amp; Mombasa</span>
          </a>

          <nav aria-label="Main" className="hidden shrink-0 items-center gap-8 md:flex">
            <a href="#" className="text-xs uppercase tracking-[0.18em] text-rose">Home</a>
            <a href="#styles" className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-rose">Styles</a>
            <a href="#about" className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-rose">About</a>
            <a href="#book" className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-rose">Book</a>
          </nav>

          <button
            type="button"
            className="shrink-0 p-2 text-foreground md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4 5h16M4 12h16M4 19h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav id="mobile-nav" className="border-t border-border bg-background px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a onClick={() => setMobileOpen(false)} href="#" className="text-sm uppercase tracking-[0.16em] text-rose">Home</a>
              <a onClick={() => setMobileOpen(false)} href="#styles" className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Styles</a>
              <a onClick={() => setMobileOpen(false)} href="#about" className="text-sm uppercase tracking-[0.16em] text-muted-foreground">About</a>
              <a onClick={() => setMobileOpen(false)} href="#book" className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Book</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary mt-2">
                <IconMessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-sand/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-24">
            <div className="fade-up">
              <p className="eyebrow inline-flex items-center gap-2">
                <IconSparkles className="h-3.5 w-3.5 text-rose" /> Cluster lashes
              </p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">Lashes that speak confidence.</h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Enhance your eyes. Embrace your beauty. Soft, lightweight cluster sets applied with care and finished to suit the shape of your eye.
              </p>

              <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y border-border py-4">
                <span className="font-display text-4xl">KSh 550</span>
                <span className="text-sm text-muted-foreground">per full cluster set</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary">
                  <IconMessageCircle className="h-4 w-4" /> Book your set
                </a>
                <a href="#styles" className="btn-base btn-outline">
                  Explore styles <IconArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <IconMapPin className="h-4 w-4 text-rose" /> Serving Kilifi &amp; Mombasa, Kenya
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-accent lg:block" />
              <div className="overflow-hidden bg-blush shadow-lift">
                <img
                  alt="Close-up of an eye wearing a full, softly layered cluster lash set"
                  width={1200}
                  height={1504}
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                  src="/assets/hero-lashes-Bq3Gj_x5.jpg"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b border-r border-accent lg:block" />
            </div>
          </div>
        </section>

        {/* Featured Styles */}
        <section id="styles" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="eyebrow">Featured styles</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Three ways to wear them</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every set is KSh 550. Choose the shape you like, or tell me what you have in mind and we'll decide together at your appointment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {styles.map((s) => (
              <article
                key={s.id}
                className="group flex flex-col border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="aspect-[4/5] overflow-hidden bg-blush">
                  <img
                    alt={`${s.title} cluster lashes`}
                    width={912}
                    height={1104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src={s.img}
                    onError={(e) => {
                      const t = e.currentTarget
                      t.style.display = "none"
                      const fallback = t.nextElementSibling as HTMLElement | null
                      if (fallback) fallback.classList.remove("hidden")
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-blush to-secondary p-8 text-center">
                    <p className="font-display text-2xl opacity-60">{s.title}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm tracking-wide">KSh 550</span>
                    <a href="#book" className="text-xs uppercase tracking-[0.16em] text-rose transition-opacity hover:opacity-70">
                      Book this set
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Briee */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="eyebrow">Why Briee</p>
            <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Careful work, honest pricing, lashes that suit you.</h2>
            <dl className="mt-12 grid gap-10 sm:grid-cols-3">
              <div>
                <IconHeart className="h-5 w-5 text-rose" />
                <dt className="mt-4 font-display text-2xl">Applied with patience</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Clusters are placed one at a time and shaped around your natural lash line — never rushed.
                </dd>
              </div>
              <div>
                <IconSparkles className="h-5 w-5 text-rose" />
                <dt className="mt-4 font-display text-2xl">One clear price</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every cluster set is KSh 550. No add-on charges, no surprises when you arrive.
                </dd>
              </div>
              <div>
                <IconMapPin className="h-5 w-5 text-rose" />
                <dt className="mt-4 font-display text-2xl">Close to home</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Appointments available across Kilifi and Mombasa — message to confirm the closest option.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">About Briee</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Made for the everyday glam</h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I'm Briee — I started Lashes by Briee because I wanted affordable lashes that still feel soft, natural and properly done.
                  Every set is applied by hand, cleaned and shaped to your eye, not just stuck on.
                </p>
                <p>
                  Whether you want subtle length for work or a fuller cat-eye for the weekend, we pick the style together at your appointment.
                  No heavy glue, no uncomfortable strips — just lightweight clusters that lift your whole look.
                </p>
                <p className="font-medium text-foreground">
                  Based in Kilifi, mobile in Mombasa. All sets KSh 550.
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary">
                  <IconMessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a href="#book" className="btn-base btn-outline">Book now</a>
              </div>
            </div>
            <div className="overflow-hidden bg-blush">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
                alt="Briee applying lashes"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Book / CTA */}
        <section id="book" className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div className="text-left lg:sticky lg:top-28">
                <p className="eyebrow">Ready when you are</p>
                <h2 className="mt-4 text-4xl sm:text-5xl">Book your lashes</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Send a message with your preferred style, date and whether you're in Kilifi or Mombasa, and I'll confirm your slot.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-primary">
                    <IconMessageCircle className="h-4 w-4" /> WhatsApp 0118 725 240
                  </a>
                  <a href="tel:+254118725240" className="btn-base btn-outline">
                    <IconPhone className="h-4 w-4" /> Call
                  </a>
                </div>

                <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <IconMapPin className="h-4 w-4 text-rose" /> Kilifi &amp; Mombasa — flexible locations
                </p>
              </div>

              <form onSubmit={handleBook} className="border border-border bg-card p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-2xl">Quick booking form</h3>
                <p className="mt-2 text-sm text-muted-foreground">Fills a WhatsApp message — no account needed.</p>

                <div className="mt-6 grid gap-4">
                  <label className="grid gap-1.5">
                    <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Your name</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Briee"
                      className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
                    />
                  </label>

                  <label className="grid gap-1.5">
                    <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Style</span>
                    <select
                      value={form.style}
                      onChange={(e) => setForm({ ...form, style: e.target.value })}
                      className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
                    >
                      <option>Long &amp; Short Clusters</option>
                      <option>Cat Eye Style</option>
                      <option>Classic Style</option>
                      <option>Help me choose at appointment</option>
                    </select>
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5">
                      <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Location</span>
                      <select
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
                      >
                        <option>Kilifi</option>
                        <option>Mombasa</option>
                      </select>
                    </label>

                    <label className="grid gap-1.5">
                      <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Preferred date</span>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
                      />
                    </label>
                  </div>

                  <button type="submit" className="btn-base btn-primary mt-2 w-full">
                    <IconMessageCircle className="h-4 w-4" /> Send on WhatsApp — KSh 550
                  </button>

                  <p className="text-center text-xs text-muted-foreground">You’ll be redirected to WhatsApp to confirm.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-display text-2xl">Lashes by Briee</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Enhance your eyes. Embrace your beauty.</p>
            </div>

            <div>
              <h2 className="eyebrow">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="tel:+254118725240" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-rose">
                    <IconPhone className="h-4 w-4 shrink-0" /> 0118 725 240
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-rose"
                  >
                    <IconMessageCircle className="h-4 w-4 shrink-0" /> Book on WhatsApp
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-muted-foreground">
                  <IconMapPin className="h-4 w-4 shrink-0" /> Kilifi &amp; Mombasa, Kenya
                </li>
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Explore</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="text-muted-foreground transition-colors hover:text-rose">Home</a></li>
                <li><a href="#styles" className="text-muted-foreground transition-colors hover:text-rose">Lash styles</a></li>
                <li><a href="#about" className="text-muted-foreground transition-colors hover:text-rose">About Briee</a></li>
                <li><a href="#book" className="text-muted-foreground transition-colors hover:text-rose">Book an appointment</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Lashes by Briee</p>
            <p>Cluster lashes — KSh 550 per set</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

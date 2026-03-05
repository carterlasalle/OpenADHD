import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community & Support | OpenADHD",
  description:
    "Find your ADHD community. Connect with online groups, professional organizations, support services, and resources for people living with ADHD.",
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const stats = [
  { value: "10%", label: "of adults have ADHD worldwide" },
  { value: "80%", label: "feel less alone after joining a community" },
  { value: "3×", label: "more likely to stick with strategies with peer support" },
];

const redditCommunities = [
  {
    name: "r/ADHD",
    members: "1.8M+ members",
    description: "General ADHD discussion, tips, and support",
    url: "https://reddit.com/r/ADHD",
  },
  {
    name: "r/adhdwomen",
    members: "400K+ members",
    description: "ADHD support specifically for women",
    url: "https://reddit.com/r/adhdwomen",
  },
  {
    name: "r/ADHDmemes",
    members: "700K+ members",
    description: "Humor and relatability — sometimes laughter is the best medicine",
    url: "https://reddit.com/r/ADHDmemes",
  },
  {
    name: "r/ADHD_Programmers",
    members: "100K+ members",
    description: "For developers with ADHD",
    url: "https://reddit.com/r/ADHD_Programmers",
  },
  {
    name: "r/AdultADHD",
    members: "50K+ members",
    description: "Focus on adult diagnosis and management",
    url: "https://reddit.com/r/AdultADHD",
  },
];

const discordServers = [
  {
    name: "ADHD Discord",
    description: "Active voice chats, study rooms, and social events",
  },
  {
    name: "How to ADHD Discord",
    description: "Based on the popular YouTube channel",
  },
  {
    name: "Body Doubling Discord",
    description: "Virtual coworking sessions to help you stay on task",
  },
];

const facebookGroups = [
  {
    name: "ADHD Adults",
    description: "Large, supportive group for adults with ADHD",
  },
  {
    name: "ADHD Parents",
    description: "For parents with ADHD or parents of children with ADHD",
  },
];

const youtubeChannels = [
  {
    name: "How to ADHD",
    creator: "Jessica McCabe",
    description: "Amazing educational content that makes ADHD understandable",
    url: "https://www.youtube.com/@HowtoADHD",
  },
  {
    name: "Dr. Russell Barkley",
    creator: "Leading ADHD researcher",
    description: "In-depth lectures on ADHD science and management",
    url: "https://www.youtube.com/@RussellBarkley",
  },
  {
    name: "ADHD Jesse",
    creator: "Jesse J. Anderson",
    description: "Personal stories, strategies, and relatable content",
    url: "https://www.youtube.com/@ADHDJesse",
  },
  {
    name: "Dr. Tracey Marks",
    creator: "Psychiatrist",
    description: "Mental health education with clear, practical advice",
    url: "https://www.youtube.com/@DrTraceyMarks",
  },
];

const podcasts = [
  {
    name: "ADHD Essentials",
    description: "Practical strategies for everyday challenges",
    emoji: "🎧",
  },
  {
    name: "Hacking Your ADHD",
    description: "Tips and tricks for working with your ADHD brain",
    emoji: "🧩",
  },
  {
    name: "ADHD reWired",
    description: "Science-based approaches to thriving with ADHD",
    emoji: "🔬",
  },
  {
    name: "Translating ADHD",
    description: "For couples and relationships affected by ADHD",
    emoji: "💑",
  },
];

const organizations = [
  {
    name: "CHADD",
    fullName: "Children and Adults with ADHD",
    url: "https://chadd.org",
    description:
      "The leading nonprofit for people affected by ADHD. Local chapters, expert webinars, educational resources, and advocacy.",
    offers: ["Local chapters", "Webinars", "Resources", "Advocacy"],
    color: "var(--accent-coral)",
  },
  {
    name: "ADDA",
    fullName: "Attention Deficit Disorder Association",
    url: "https://add.org",
    description:
      "Focused specifically on adults with ADHD. Offers virtual support groups, conferences, and professional directories.",
    offers: ["Virtual support groups", "Conferences", "Professional directory"],
    color: "var(--accent-teal)",
  },
  {
    name: "ADDitude Magazine",
    fullName: "ADDitude",
    url: "https://additudemag.com",
    description:
      "The leading media outlet for ADHD and LD information. Articles, webinars, expert advice, and downloadable guides.",
    offers: ["Articles", "Free webinars", "Expert Q&A", "Downloadable guides"],
    color: "var(--accent-amber)",
  },
  {
    name: "ADHD Foundation",
    fullName: "ADHD Foundation (UK)",
    url: "https://adhdfoundation.org.uk",
    description:
      "The UK's leading ADHD charity. Offers training, resources, and neurodiversity advocacy across the United Kingdom.",
    offers: ["Training", "Resources", "UK advocacy"],
    color: "var(--accent-lavender)",
  },
  {
    name: "CADDRA",
    fullName: "Canadian ADHD Resource Alliance",
    url: "https://caddra.ca",
    description:
      "Canada's leading ADHD organization for medical professionals and patients. Evidence-based guidelines and resources.",
    offers: ["Clinical guidelines", "Professional resources", "Patient info"],
    color: "var(--accent-pink)",
  },
];

const supportServices = [
  {
    emoji: "🎯",
    title: "ADHD Coaches",
    description:
      "ADHD coaches help you build systems, develop strategies, and stay accountable. They understand how the ADHD brain works and tailor approaches to your strengths.",
    action: "Find a Coach",
    actionUrl: "https://add.org/professional-directory/",
    color: "var(--accent-coral)",
  },
  {
    emoji: "🧠",
    title: "Therapists",
    description:
      "ADHD-specialized therapists can help with emotional regulation, self-esteem, anxiety, and building coping strategies. CBT is particularly effective for ADHD.",
    action: "Search Directory",
    actionUrl: "https://www.psychologytoday.com/us/therapists/adhd",
    color: "var(--accent-lavender)",
  },
  {
    emoji: "🤝",
    title: "Support Groups",
    description:
      "Both in-person and virtual support groups offer a safe space to share experiences and learn from others. CHADD and ADDA both host regular groups.",
    action: "Find a Group",
    actionUrl: "https://chadd.org/support-groups/",
    color: "var(--accent-teal)",
  },
  {
    emoji: "👥",
    title: "Peer Support & Body Doubling",
    description:
      "Working alongside others — even virtually — can dramatically boost focus. Services like Focusmate and Flown connect you with accountability partners.",
    action: "Try Focusmate",
    actionUrl: "https://www.focusmate.com",
    color: "var(--accent-amber)",
  },
];

const books = [
  {
    title: "Driven to Distraction",
    author: "Edward M. Hallowell & John J. Ratey",
    description:
      "The groundbreaking classic that brought ADHD into mainstream understanding. A must-read for anyone starting their ADHD journey.",
  },
  {
    title: "Taking Charge of Adult ADHD",
    author: "Russell A. Barkley",
    description:
      "A practical, science-based guide from one of the world's foremost ADHD researchers. Full of concrete strategies.",
  },
  {
    title: "You Mean I'm Not Lazy, Stupid or Crazy?!",
    author: "Kate Kelly & Peggy Ramundo",
    description:
      "Written by two women with ADHD, this warm and witty book covers everything from diagnosis to daily life management.",
  },
  {
    title: "Delivered from Distraction",
    author: "Edward M. Hallowell & John J. Ratey",
    description:
      "The follow-up to Driven to Distraction, with updated research, new stories, and an emphasis on ADHD strengths.",
  },
  {
    title: "The ADHD Effect on Marriage",
    author: "Melissa Orlov",
    description:
      "Essential reading for couples where one or both partners have ADHD. Practical advice for strengthening your relationship.",
  },
  {
    title: "Smart but Stuck",
    author: "Thomas E. Brown",
    description:
      "Explores how intelligent people with ADHD get \"stuck\" and offers insights into the emotional side of executive function challenges.",
  },
];

const crisisResources = [
  {
    name: "988 Suicide & Crisis Lifeline",
    action: "Call or text 988",
    description: "Free, confidential, 24/7 support in the US",
    emoji: "📞",
  },
  {
    name: "Crisis Text Line",
    action: "Text HOME to 741741",
    description: "Free crisis counseling via text message",
    emoji: "💬",
  },
  {
    name: "International Association for Suicide Prevention",
    action: "Visit iasp.info/resources/Crisis_Centres",
    description: "Find crisis centers in your country",
    emoji: "🌍",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────────────────────────────── */

export default function CommunityPage() {
  return (
    <>
      {/* ================================================================
          1. HERO
          ================================================================ */}
      <section className="relative overflow-hidden pb-10 pt-24 md:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
          style={{ background: "var(--accent-lavender)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-coral)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="animate-fade-in-up mb-4 text-lg font-semibold text-accent-coral">
            💛 You&apos;re Not Alone
          </p>
          <h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Find Your{" "}
            <span className="gradient-text">Community</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            You&apos;re not alone. Connect with millions of people who
            understand what it&apos;s like to live with ADHD. Find support,
            share experiences, and grow together.
          </p>
        </div>
      </section>

      {/* ================================================================
          2. WHY COMMUNITY MATTERS
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="animate-fade-in-up glass-card rounded-3xl p-8 md:p-12">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              Why Community{" "}
              <span className="gradient-text">Matters</span> 🧡
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-text-secondary">
              ADHD can feel incredibly isolating. You might spend years thinking
              you&apos;re &ldquo;lazy,&rdquo; &ldquo;unmotivated,&rdquo; or
              &ldquo;just not trying hard enough.&rdquo; Finding others who{" "}
              <em>get it</em> changes everything. The moment you hear someone
              describe your exact experience — the time blindness, the
              hyperfocus rabbit holes, the emotional intensity — something
              clicks. <strong>You&apos;re not broken. You never were.</strong>
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/40 px-6 py-5 text-center"
                >
                  <p className="gradient-text text-3xl font-extrabold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. ONLINE COMMUNITIES
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--accent-teal)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-4xl">
            🌐 Online{" "}
            <span className="gradient-text">Communities</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            The internet is full of amazing ADHD communities. Here are the best
            places to connect, learn, and feel understood.
          </p>

          {/* ── Reddit ────────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg"
                style={{ background: "var(--accent-coral)", color: "#fff" }}
              >
                📣
              </span>
              Reddit Communities
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {redditCommunities.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover-lift flex flex-col rounded-2xl p-5"
                >
                  <p className="text-lg font-bold" style={{ color: "var(--accent-coral)" }}>
                    {sub.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-text-secondary">
                    {sub.members}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {sub.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* ── Discord ──────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg"
                style={{ background: "var(--accent-lavender)", color: "#fff" }}
              >
                💬
              </span>
              Discord Servers
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {discordServers.map((server) => (
                <div
                  key={server.name}
                  className="glass-card hover-lift rounded-2xl p-5"
                >
                  <p className="text-lg font-bold" style={{ color: "var(--accent-lavender)" }}>
                    {server.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {server.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Facebook ─────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg"
                style={{ background: "var(--accent-teal)", color: "#fff" }}
              >
                👥
              </span>
              Facebook Groups
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {facebookGroups.map((group) => (
                <div
                  key={group.name}
                  className="glass-card hover-lift rounded-2xl p-5"
                >
                  <p className="text-lg font-bold" style={{ color: "var(--accent-teal)" }}>
                    {group.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── YouTube ──────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg"
                style={{ background: "var(--accent-pink)", color: "#fff" }}
              >
                🎥
              </span>
              YouTube Channels
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {youtubeChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover-lift flex flex-col rounded-2xl p-5"
                >
                  <p className="text-lg font-bold" style={{ color: "var(--accent-pink)" }}>
                    {channel.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-text-secondary">
                    {channel.creator}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {channel.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* ── Podcasts ─────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg"
                style={{ background: "var(--accent-amber)", color: "#fff" }}
              >
                🎙️
              </span>
              Podcasts
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {podcasts.map((pod) => (
                <div
                  key={pod.name}
                  className="glass-card hover-lift flex items-start gap-4 rounded-2xl p-5"
                >
                  <span className="text-2xl">{pod.emoji}</span>
                  <div>
                    <p className="text-lg font-bold" style={{ color: "var(--accent-amber)" }}>
                      {pod.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {pod.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. PROFESSIONAL ORGANIZATIONS
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-40 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "var(--accent-amber)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-4xl">
            🏛️ Professional{" "}
            <span className="gradient-text">Organizations</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            These established organizations provide evidence-based resources,
            advocacy, and support for people with ADHD around the world.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org) => (
              <div
                key={org.name}
                className="glass-card hover-lift flex flex-col rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold text-white"
                    style={{ background: org.color }}
                  >
                    {org.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-lg font-bold">{org.name}</p>
                    <p className="text-xs text-text-secondary">
                      {org.fullName}
                    </p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {org.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {org.offers.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/50 px-2.5 py-0.5 text-xs font-semibold text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
                  style={{ background: org.color }}
                >
                  Visit {org.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. SUPPORT SERVICES
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-4xl">
            🛟 Support{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Professional support can be transformative. Here are the types of
            help available and how to find them.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {supportServices.map((service) => (
              <div
                key={service.title}
                className="glass-card hover-lift flex flex-col rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{service.emoji}</span>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <a
                  href={service.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
                  style={{ background: service.color }}
                >
                  {service.action} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          6. BOOKS & LEARNING
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "var(--accent-lavender)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-4xl">
            📚 Books &amp;{" "}
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            These books have helped millions of people understand ADHD — and
            themselves. Start with any one of them.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.title}
                className="glass-card hover-lift flex flex-col rounded-2xl p-6"
              >
                <p className="text-lg font-bold leading-snug">
                  📖 {book.title}
                </p>
                <p className="mt-1 text-xs font-semibold text-accent-coral">
                  by {book.author}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          7. CRISIS RESOURCES
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="glass-card rounded-3xl p-8 md:p-12"
            style={{
              borderLeft: "4px solid var(--accent-pink)",
            }}
          >
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              🆘 Crisis{" "}
              <span className="gradient-text">Resources</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-text-secondary">
              If you&apos;re in crisis, <strong>you&apos;re not alone</strong>.
              ADHD can come with intense emotions, burnout, and overwhelm. It is
              <strong> always okay to ask for help</strong>.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {crisisResources.map((resource) => (
                <div
                  key={resource.name}
                  className="rounded-2xl bg-white/40 p-5 text-center"
                >
                  <span className="text-3xl">{resource.emoji}</span>
                  <p className="mt-2 text-sm font-bold">{resource.name}</p>
                  <p
                    className="mt-1 text-base font-extrabold"
                    style={{ color: "var(--accent-pink)" }}
                  >
                    {resource.action}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm font-semibold text-text-secondary">
              💛 You matter. Your struggles are valid. Help is available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          8. JOIN THE OPENADHD COMMUNITY CTA
          ================================================================ */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--accent-coral)" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="animate-fade-in-up text-3xl font-extrabold md:text-4xl">
            🚀 Join the{" "}
            <span className="gradient-text">OpenADHD</span> Community
          </h2>
          <p className="animate-fade-in-up delay-100 mt-4 text-lg leading-relaxed text-text-secondary">
            OpenADHD is open source and community-driven. You can contribute
            your tips, share resources, improve the code, or simply spread the
            word. Every contribution helps someone with ADHD feel less alone.
          </p>

          <div className="animate-fade-in-up delay-200 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/OpenADHD/OpenADHD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent-coral px-8 py-3.5 text-base font-bold text-white transition-transform hover:scale-105"
            >
              ⭐ Star on GitHub
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-accent-coral px-8 py-3.5 text-base font-bold text-accent-coral transition-transform hover:scale-105"
            >
              💡 Share Your Tips
            </Link>
          </div>

          <div className="animate-fade-in-up delay-300 mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { emoji: "🛠️", text: "Contribute code" },
              { emoji: "📝", text: "Share your tips" },
              { emoji: "📢", text: "Spread the word" },
            ].map((item) => (
              <div
                key={item.text}
                className="glass-card hover-lift rounded-xl px-4 py-3 text-center"
              >
                <span className="text-xl">{item.emoji}</span>
                <p className="mt-1 text-sm font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

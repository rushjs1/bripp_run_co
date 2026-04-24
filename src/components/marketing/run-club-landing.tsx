import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Beef,
  Beer,
  BadgeCheck,
  Droplets,
  Flame,
  Footprints,
  MapPin,
  MapPinned,
  MessageCircle,
  Route,
  Sparkles,
  Utensils,
  Waves,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Monon Place start",
    icon: MapPin,
  },
  {
    title: "Broad Ripple Monon",
    icon: Route,
  },
  {
    title: "Pool clause",
    icon: Waves,
  },
  {
    title: "Beers by committee",
    icon: Beer,
  },
];

const runNotes = [
  "Meet near Monon Place, pretend we all stretched, then roll out.",
  "Usually the Monon Trail through Broad Ripple, at a pace that keeps everyone in the conversation.",
  "Conversational means conversational. Hero workouts can happen somewhere else.",
  "Nobody gets dropped, unless they are sprinting to claim the first patio table.",
];

const routeDetails = [
  ["Meet", "Monon Place"],
  ["Route", "Broad Ripple Monon Trail"],
  ["Pace", "Conversational"],
  ["Finish", "Together"],
];

const venues = [
  {
    name: "Half Liter BBQ",
    detail:
      "Smoked meat, picnic tables, and the easiest yes after sweaty miles.",
    badge: "BBQ",
    icon: Beef,
  },
  {
    name: "Fat Dan's",
    detail:
      "Wings, cold drinks, and the sports bar energy your calves requested.",
    badge: "wings",
    icon: Utensils,
  },
  {
    name: "The Bulldog",
    detail:
      "A Broad Ripple standby when the plan is simple: sit down and recover.",
    badge: "patio",
    icon: Beer,
  },
  {
    name: "Kilroy's",
    detail:
      "The chaos option, usually suggested by someone who ran one mile too fast.",
    badge: "chaos option",
    icon: Sparkles,
  },
];

const collagePhotos = [
  {
    src: "/images/broad-ripple-bridge.jpg",
    label: "Monon miles",
    caption: "The bridge stretch where everybody suddenly has a story.",
    alt: "The red Monon Trail bridge surrounded by trees in Broad Ripple.",
    icon: Route,
  },
  {
    src: "/images/broad-ripple-love.webp",
    label: "Broad Ripple note",
    caption: "Love mural sighting. Counts as neighborhood speed work.",
    alt: "A Broad Ripple mural spelling love on a white wall.",
    icon: MapPin,
  },
  {
    src: "/images/half-liter-bbq.jpg",
    label: "Post-run beers",
    caption: "Half Liter is the reliable answer to what now.",
    alt: "Half Liter BBQ patio with people sitting outside.",
    icon: Beer,
  },
];

export function RunClubLanding() {
  return (
    <main className="isolate overflow-hidden bg-sand text-forest vintage-noise">
      <HeroSection />
      <FeatureStrip />
      <AboutSection />
      <RouteSection />
      <PostRunPlans />
      <HotDayClause />
      <PhotoCollageSection />
      <FinalCta />
      <BrandFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-dvh overflow-hidden border-b-4 border-forest bg-cream">
      <Image
        src="/brand/broad-ripple-run-co-spec.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-12 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--sand)_0%,rgb(239_229_216_/_0.9)_43%,rgb(239_229_216_/_0.58)_100%)]" />

      <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col px-5 py-5 sm:px-8">
        <header className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logos/icon_mark.png"
              alt=""
              width={198}
              height={201}
              priority
              className="size-12 drop-shadow-[4px_4px_0_var(--orange)]"
            />
            <div className="flex flex-col gap-0.5">
              <Image
                src="/brand/logos/Wordmark.png"
                alt="Broad Ripple Run Co."
                width={509}
                height={132}
                priority
                className="h-6 w-auto sm:h-7"
              />
              <p className="font-mono text-sm text-olive sm:text-xs">
                Indianapolis, IN
              </p>
            </div>
          </div>
          <Badge className="hidden h-auto rounded-md border-2 border-forest bg-cream px-3 py-1 font-mono text-base font-medium text-forest sm:inline-flex sm:text-sm">
            Est. 2026
          </Badge>
        </header>

        <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[11fr_9fr] lg:py-10">
          <div className="max-w-[67ch]">
            <Badge className="mb-5 h-auto rounded-md border-2 border-orange bg-orange px-3 py-1 font-mono text-base font-medium text-cream shadow-[3px_3px_0_var(--forest)] sm:text-sm">
              Casual Monon run crew
            </Badge>
            <h1 className="font-heading text-5xl font-semibold text-balance sm:text-7xl lg:text-8xl">
              Start at Monon Place. Run the Monon. End with beers.
            </h1>
            <p className="mt-5 max-w-[57ch] text-xl text-pretty text-olive sm:text-lg">
              A casual Broad Ripple run crew built around easy miles, hot-day
              pool dips, and post-run hangs at Half Liter, Fat Dan&apos;s, The
              Bulldog, or Kilroy&apos;s.
            </p>
            <p className="mt-5 max-w-[58ch] text-base/7 text-pretty text-forest/85 sm:text-sm/6">
              No dues, no clipboard, no mysterious tempo workout. Just friends
              leaving from the same spot, running the neighborhood trail, and
              letting the group chat decide where the first round happens.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-lg border-2 border-forest bg-forest px-4 text-base font-semibold text-cream shadow-[4px_4px_0_var(--orange)] hover:-translate-y-0.5 hover:bg-forest/95 sm:h-10 sm:text-sm">
                <Footprints data-icon="inline-start" className="size-4" />
                Join the next run
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-lg border-2 border-forest bg-cream px-4 text-base font-semibold text-forest shadow-[4px_4px_0_var(--sage)] hover:-translate-y-0.5 hover:bg-sand sm:h-10 sm:text-sm"
              >
                <Beer data-icon="inline-start" className="size-4" />
                Suggest a beer stop
              </Button>
            </div>
          </div>

          <HeroPhotoStack />
        </div>
      </div>
    </section>
  );
}

function HeroPhotoStack() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <PhotoFrame
        src="/images/monon-trail-01.webp"
        label="Broad Ripple Monon"
        caption="The usual ribbon of shade, bridges, and questionable pace discipline."
        alt="The Monon Trail bridge over water in Broad Ripple."
        icon={MapPinned}
        imageClassName="aspect-[4/5] sm:aspect-[5/6]"
        labelSide="left"
        priority
      />
      <Image
        src="/brand/logos/Badgemark.png"
        alt=""
        width={260}
        height={265}
        className="pointer-events-none absolute -right-6 -top-10 z-20 hidden size-32 rotate-[8deg] drop-shadow-[4px_4px_0_var(--forest)] sm:block lg:-right-10 lg:-top-14 lg:size-44"
      />
      <div className="absolute -bottom-8 -left-5 hidden w-48 sm:block">
        <MiniPhoto
          src="/images/half-liter-bbq.jpg"
          label="Post-run beers"
          alt="Half Liter BBQ patio after a run."
          icon={Beer}
        />
      </div>
    </div>
  );
}

function FeatureStrip() {
  return (
    <section className="bg-forest py-5 text-cream">
      <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={[
                "flex items-center gap-4 border-cream/30 py-4",
                index > 0 ? "border-t sm:border-t-0 sm:border-l sm:pl-6" : "",
                index === 2 ? "sm:border-l-0 lg:border-l" : "",
                index > 1 ? "sm:border-t lg:border-t-0" : "",
              ].join(" ")}
            >
              <Icon
                className="size-6 shrink-0 stroke-cream"
                aria-hidden="true"
              />
              <p className="font-heading text-2xl font-semibold sm:text-xl">
                {feature.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[4fr_3fr]">
        <div>
          <Badge className="h-auto rounded-md border-2 border-forest bg-cream px-3 py-1 font-mono text-base font-medium text-forest sm:text-sm">
            Broad Ripple / Monon Place
          </Badge>
          <h2 className="mt-5 max-w-[13ch] font-heading text-5xl font-semibold text-balance sm:text-6xl">
            Easy miles with your new favorite crew.
          </h2>
          <p className="mt-6 max-w-[64ch] text-base/7 text-pretty text-forest/85 sm:text-sm/6">
            Broad Ripple Run Co. is less formal club, more recurring group-chat
            idea that made it onto a calendar. We start around Monon Place, hop
            onto the trail, and keep the run friendly enough that everyone can
            still argue about the beer stop.
          </p>
        </div>

        <Card className="rounded-lg border-3 border-forest bg-cream py-0 shadow-[8px_8px_0_var(--sage)]">
          <CardHeader className="border-b-3 border-forest bg-orange px-5 py-4 text-cream">
            <CardTitle className="font-heading text-3xl font-semibold">
              Group Chat Rules
            </CardTitle>
            <CardDescription className="text-base text-cream/90 sm:text-sm">
              The practical stuff, but not too practical.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <ul role="list" className="grid gap-4">
              {runNotes.map((item) => (
                <li key={item} className="flex gap-3 text-base/7 sm:text-sm/6">
                  <BadgeCheck
                    className="mt-1 size-4 shrink-0 stroke-orange"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function RouteSection() {
  return (
    <section className="border-y-4 border-forest bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[5fr_4fr]">
        <div className="relative">
          <PhotoFrame
            src="/images/monon-place-start.jpeg"
            label="Monon Place Start"
            caption="Typical meet-up energy: shoes tied, watches confused, someone still upstairs."
            alt="A sunny Monon Trail bridge near Broad Ripple."
            icon={Footprints}
            imageClassName="aspect-[4/5] sm:aspect-[6/5]"
          />
          <RouteOverlayCard />
        </div>

        <div className="flex flex-col justify-center">
          <Badge className="h-auto w-fit rounded-md border-2 border-orange bg-orange px-3 py-1 font-mono text-base font-medium text-cream sm:text-sm">
            The usual route
          </Badge>
          <h2 className="mt-5 max-w-[12ch] font-heading text-5xl font-semibold text-balance sm:text-6xl">
            Monon Place to the Broad Ripple Monon.
          </h2>
          <p className="mt-6 max-w-[58ch] text-base/7 text-pretty text-forest/85 sm:text-sm/6">
            We keep it local: start at Monon Place, slide onto the Monon Trail
            through Broad Ripple, and turn around whenever the group has earned
            a drink, a snack, or both.
          </p>
          <div className="mt-8 grid gap-3">
            {routeDetails.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[7rem_1fr] items-center gap-3 rounded-lg border-2 border-forest bg-sand p-4 shadow-[4px_4px_0_var(--cream)]"
              >
                <p className="font-mono text-base text-olive sm:text-sm">
                  {label}
                </p>
                <p className="font-heading text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteOverlayCard() {
  return (
    <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-lg border-3 border-cream bg-forest/95 p-4 text-cream shadow-[6px_6px_0_var(--orange)] backdrop-blur-sm sm:left-auto sm:w-72">
      <div className="flex items-center gap-2">
        <MapPinned className="size-4 stroke-orange" aria-hidden="true" />
        <p className="font-mono text-base sm:text-sm">Route card</p>
      </div>
      <p className="mt-2 font-heading text-3xl font-semibold">
        Meet. Run. Finish together.
      </p>
    </div>
  );
}

function PostRunPlans() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge className="h-auto rounded-md border-2 border-forest bg-cream px-3 py-1 font-mono text-base font-medium text-forest sm:text-sm">
              Post-run plans
            </Badge>
            <h2 className="mt-5 max-w-[13ch] font-heading text-5xl font-semibold text-balance sm:text-6xl">
              The finish line is probably a table.
            </h2>
          </div>
          <p className="max-w-[50ch] text-base/7 text-pretty text-forest/80 sm:text-sm/6">
            The route is predictable. The hangout is democratic, emotional, and
            heavily influenced by who mentions fries first.
          </p>
        </div>

        <Separator className="my-8 h-1 bg-forest" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {venues.map((venue) => {
            const Icon = venue.icon;

            return (
              <Card
                key={venue.name}
                className="rounded-lg border-3 border-forest bg-cream py-0 shadow-[6px_6px_0_var(--sage)] transition-transform hover:-translate-y-1 hover:shadow-[7px_7px_0_var(--orange)]"
              >
                <CardContent className="px-5 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-11 place-items-center rounded-md border-2 border-forest bg-forest text-cream shadow-[3px_3px_0_var(--orange)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <Badge className="h-auto rounded-md border-2 border-orange bg-sand px-2 py-1 font-mono text-base font-medium text-orange sm:text-sm">
                      {venue.badge}
                    </Badge>
                  </div>
                  <h3 className="mt-5 font-heading text-3xl font-semibold">
                    {venue.name}
                  </h3>
                  <p className="mt-2 text-base/7 text-forest/80 sm:text-sm/6">
                    {venue.detail}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HotDayClause() {
  return (
    <section className="border-y-4 border-forest bg-forest py-20 text-cream sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[4fr_3fr] lg:items-center">
        <div>
          <Badge className="h-auto rounded-md border-2 border-cream bg-forest px-3 py-1 font-mono text-base font-medium text-cream sm:text-sm">
            Hot day clause
          </Badge>
          <h2 className="mt-5 max-w-[13ch] font-heading text-5xl font-semibold text-balance sm:text-6xl">
            If it&apos;s brutally hot, we&apos;re jumping in the pool first.
          </h2>
          <p className="mt-6 max-w-[57ch] text-base/7 text-pretty text-cream/85 sm:text-sm/6">
            Quick reset at Monon Place, then beers. Hydration comes in many
            forms.
          </p>
        </div>

        <Card className="relative rounded-lg border-3 border-cream bg-sand py-0 text-forest shadow-[10px_10px_0_var(--orange)]">
          <CardContent className="relative min-h-80 overflow-hidden px-5 py-5">
            <div className="absolute inset-0 vintage-noise opacity-60" />
            <div className="absolute -right-10 top-6 size-36 rounded-full border-4 border-orange bg-cream" />
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-forest" />
            <svg
              viewBox="0 0 420 190"
              className="absolute bottom-12 left-0 right-0 h-40 w-full"
              aria-hidden="true"
            >
              <path
                d="M-20 70 C42 18 96 122 158 70 C220 18 274 122 336 70 C398 18 452 122 514 70"
                fill="none"
                stroke="#e8d6bd"
                strokeLinecap="round"
                strokeWidth="18"
              />
              <path
                d="M-20 122 C42 70 96 174 158 122 C220 70 274 174 336 122 C398 70 452 174 514 122"
                fill="none"
                stroke="#bd5523"
                strokeLinecap="round"
                strokeWidth="12"
              />
            </svg>
            <div className="relative flex h-full min-h-70 flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-14 place-items-center rounded-lg border-3 border-forest bg-cream shadow-[4px_4px_0_var(--orange)]">
                  <Droplets
                    className="size-7 stroke-orange"
                    aria-hidden="true"
                  />
                </div>
                <Badge className="h-auto rounded-md border-2 border-forest bg-orange px-3 py-1 font-mono text-base font-medium text-cream sm:text-sm">
                  pool dip
                </Badge>
              </div>
              <div className="rounded-lg border-3 border-cream bg-forest p-4 text-cream">
                <div className="flex items-center gap-2">
                  <Flame className="size-4 stroke-orange" aria-hidden="true" />
                  <p className="font-mono text-base sm:text-sm">
                    Weather policy
                  </p>
                </div>
                <p className="mt-2 font-heading text-3xl font-semibold">
                  Sweat, splash, patio. In that order.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function PhotoCollageSection() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge className="h-auto rounded-md border-2 border-orange bg-orange px-3 py-1 font-mono text-base font-medium text-cream sm:text-sm">
              Broad Ripple roll
            </Badge>
            <h2 className="mt-5 max-w-[12ch] font-heading text-5xl font-semibold text-balance sm:text-6xl">
              Proof this is a real neighborhood thing.
            </h2>
          </div>
          <p className="max-w-[50ch] text-base/7 text-pretty text-forest/80 sm:text-sm/6">
            A little lookbook of the stuff that makes the run feel like ours:
            the bridges, the murals, the patio negotiations, the oddly specific
            start point.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[7fr_4fr]">
          <PhotoFrame
            src={collagePhotos[0].src}
            label={collagePhotos[0].label}
            caption={collagePhotos[0].caption}
            alt={collagePhotos[0].alt}
            icon={collagePhotos[0].icon}
            imageClassName="aspect-[5/4] lg:aspect-[7/5]"
          />
          <div className="grid gap-8">
            {collagePhotos.slice(1).map((photo) => (
              <PhotoFrame
                key={photo.src}
                src={photo.src}
                label={photo.label}
                caption={photo.caption}
                alt={photo.alt}
                icon={photo.icon}
                imageClassName="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-forest py-16 text-cream sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="h-auto rounded-md border-2 border-cream bg-forest px-3 py-1 font-mono text-base font-medium text-cream sm:text-sm">
              Next run
            </Badge>
            <h2 className="mt-5 font-heading text-5xl font-semibold text-balance sm:text-6xl">
              Text the group chat. We&apos;ll figure out the pace.
            </h2>
            <p className="mt-4 max-w-[54ch] text-base/7 text-pretty text-cream/85 sm:text-sm/6">
              Bring shoes, bring a friend, bring a very strong opinion about
              where we should go after.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              variant="secondary"
              className="h-12 w-full rounded-lg border-2 border-cream bg-cream px-4 text-base font-semibold text-forest shadow-[4px_4px_0_var(--orange)] hover:-translate-y-0.5 hover:bg-sand sm:h-10 sm:w-auto sm:text-sm"
            >
              <MessageCircle data-icon="inline-start" className="size-4" />
              Join the next run
            </Button>
            <Button
              variant="outline"
              className="h-12 w-full rounded-lg border-2 border-cream bg-forest px-4 text-base font-semibold text-cream shadow-[4px_4px_0_var(--orange)] hover:-translate-y-0.5 hover:bg-forest/90 sm:h-10 sm:w-auto sm:text-sm"
            >
              <Beer data-icon="inline-start" className="size-4" />
              Suggest a beer stop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandFooter() {
  return (
    <footer className="border-t-4 border-forest bg-sand py-16 text-forest vintage-noise sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8">
        <Image
          src="/brand/logos/main_logo.png"
          alt="Broad Ripple Run Co. — Run Club, Est. 2026, Indianapolis, IN"
          width={897}
          height={615}
          className="h-auto w-64 drop-shadow-[6px_6px_0_var(--sage)] sm:w-96"
        />
        <p className="max-w-[52ch] text-base/7 text-pretty text-olive sm:text-sm/6">
          A friendly Broad Ripple run crew. Monon Place, Monon Trail, whichever
          patio has the nearest cold drink.
        </p>
        <div className="flex flex-col items-center gap-1">
          <p className="font-mono text-base text-olive sm:text-sm">
            © 2026 Broad Ripple Run Co.
          </p>
          <p className="font-mono text-sm text-olive/80 sm:text-xs">
            Run soft. Hang hard.
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhotoFrame({
  src,
  label,
  caption,
  alt,
  icon: Icon,
  imageClassName,
  labelSide = "right",
  priority = false,
}: {
  src: string;
  label: string;
  caption: string;
  alt: string;
  icon: LucideIcon;
  imageClassName: string;
  labelSide?: "left" | "right";
  priority?: boolean;
}) {
  return (
    <figure className="relative rounded-lg border-4 border-forest bg-forest p-2 shadow-[10px_10px_0_var(--orange)]">
      <div
        className={[
          "pointer-events-none absolute -top-3 z-20 rounded-md border-2 border-forest bg-cream px-3 py-1 font-mono text-base font-medium text-forest shadow-[3px_3px_0_var(--orange)] sm:text-sm",
          labelSide === "left" ? "-left-3" : "-right-3",
        ].join(" ")}
      >
        <span className="flex items-center gap-2">
          <Icon className="size-4 stroke-orange" aria-hidden="true" />
          {label}
        </span>
      </div>
      <div
        className={[
          "relative overflow-hidden rounded-md bg-sand",
          imageClassName,
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(232_214_189_/_0.16),transparent_38%),linear-gradient(180deg,transparent_58%,rgb(19_63_50_/_0.55))]" />
        <TrailLineOverlay />
      </div>
      <figcaption className="rounded-b-md bg-cream px-4 py-3 text-base/7 text-forest sm:text-sm/6">
        {caption}
      </figcaption>
    </figure>
  );
}

function MiniPhoto({
  src,
  label,
  alt,
  icon: Icon,
}: {
  src: string;
  label: string;
  alt: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-lg border-3 border-forest bg-cream p-2 shadow-[6px_6px_0_var(--orange)] rotate-[-3deg]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="14rem"
          className="object-cover"
        />
      </div>
      <div className="mt-2 flex items-center gap-2 px-1 font-mono text-base text-forest sm:text-sm">
        <Icon className="size-4 stroke-orange" aria-hidden="true" />
        {label}
      </div>
    </div>
  );
}

function TrailLineOverlay() {
  return (
    <svg
      viewBox="0 0 220 120"
      className="pointer-events-none absolute bottom-3 right-3 h-20 w-32 opacity-80"
      aria-hidden="true"
    >
      <path
        d="M16 104 C54 78 36 45 78 44 C118 43 104 82 146 72 C174 65 171 28 205 19"
        fill="none"
        stroke="#e8d6bd"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M16 104 C54 78 36 45 78 44 C118 43 104 82 146 72 C174 65 171 28 205 19"
        fill="none"
        stroke="#bd5523"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

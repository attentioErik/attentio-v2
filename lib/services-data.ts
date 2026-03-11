// ─────────────────────────────────────────────
//  ATTENTIO — Service Page Content Data
//  Language: Norwegian (Bokmål)
// ─────────────────────────────────────────────

export interface ServiceFeature {
  icon: string
  title: string
  text: string
}

export interface ServiceStep {
  num: string
  title: string
  text: string
  chip: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface ServiceData {
  slug: string
  emoji: string
  meta: {
    title: string
    description: string
  }
  hero: {
    tag: string
    /** May contain <em> tags for italic accent */
    h1: string
    intro: string
  }
  features: {
    tag: string
    /** May contain <em> tags */
    title: string
    items: ServiceFeature[]
  }
  process: {
    tag: string
    /** May contain <em> tags */
    title: string
    steps: ServiceStep[]
  }
  benefits: {
    tag: string
    title: string
    items: ServiceFeature[]
  }
  faq: {
    title: string
    items: FAQItem[]
  }
}

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────

const services: ServiceData[] = [
  // ── 1. AI & Automatisering ──────────────────
  {
    slug: 'ai-automation',
    emoji: '🤖',
    meta: {
      title: 'AI & Automatisering | Effektiviser bedriften',
      description:
        'Vi hjelper bedrifter med å ta i bruk AI og automatisering – fra prosesskartlegging til implementering. Finn flaskehalsene, fjern det manuelle, og jobb smartere.',
    },
    hero: {
      tag: 'AI & Automatisering',
      h1: 'Vi hjelper deg å jobbe <em>smartere</em> – ikke hardere',
      intro:
        'Vi kartlegger bedriften din, finner flaskehalsene og implementerer AI og automatisering som faktisk gjør hverdagen enklere. Fra tunge prosesser til smarte arbeidsflyter.',
    },
    features: {
      tag: 'Hva vi gjør',
      title: 'Fra kartlegging til <em>ferdig implementering</em>',
      items: [
        {
          icon: '🔍',
          title: 'Prosesskartlegging',
          text: 'Vi går gjennom arbeidsflyten din, identifiserer flaskehalser og finner ut hvor tid og ressurser forsvinner – helt konkret.',
        },
        {
          icon: '⚡',
          title: 'Automatisering av arbeidsflyt',
          text: 'Vi fjerner det manuelle arbeidet – kobler systemer, automatiserer oppgaver og lar verktøyene dine snakke sammen.',
        },
        {
          icon: '🔗',
          title: 'AI-integrasjoner',
          text: 'Vi kobler AI til eksisterende systemer – CRM, ERP, e-post, prosjektverktøy – slik at alt flyter sømløst.',
        },
        {
          icon: '🤖',
          title: 'AI-chatbot og agenter',
          text: 'Trenger du en chatbot? Vi bygger skreddersydde løsninger som håndterer kundedialog, leadgenerering og support.',
        },
        {
          icon: '📊',
          title: 'Rapportering og innsikt',
          text: 'Automatiser rapporter og dashboards. Se nøyaktig hva som fungerer og hva som kan forbedres – uten manuell innsats.',
        },
        {
          icon: '🧠',
          title: 'Rådgivning og strategi',
          text: 'Vi hjelper deg å forstå hvilke AI-løsninger som gir mest verdi for din bedrift – før du investerer en krone.',
        },
      ],
    },
    process: {
      tag: 'Slik gjør vi det',
      title: 'Fra møte til <em>ferdig løsning</em>',
      steps: [
        {
          num: '01',
          title: 'Kartleggingsmøte',
          text: 'Vi setter oss ned med deg, forstår hverdagen din og identifiserer hvor AI og automatisering kan gjøre størst forskjell.',
          chip: 'Gratis innledende møte',
        },
        {
          num: '02',
          title: 'Analyse og forslag',
          text: 'Vi lager en konkret plan med prioriterte tiltak – hva som bør automatiseres, hvilke verktøy som trengs og forventet effekt.',
          chip: '1–2 uker',
        },
        {
          num: '03',
          title: 'Implementering',
          text: 'Vi bygger, kobler og setter opp løsningene. Alt testes grundig sammen med teamet ditt før det settes i drift.',
          chip: '2–6 uker',
        },
        {
          num: '04',
          title: 'Oppfølging og optimalisering',
          text: 'Vi følger opp at alt fungerer, justerer basert på faktisk bruk og hjelper deg med å skalere løsningen over tid.',
          chip: 'Løpende samarbeid',
        },
      ],
    },
    benefits: {
      tag: 'Hva du får igjen',
      title: 'Konkrete resultater – ikke bare teknologi',
      items: [
        {
          icon: '⏰',
          title: 'Spar titalls timer hver uke',
          text: 'Fjern manuelle, repetitive oppgaver og la teamet fokusere på arbeid som faktisk skaper verdi for bedriften.',
        },
        {
          icon: '💰',
          title: 'Lavere driftskostnader',
          text: 'Automatisering reduserer behovet for manuell innsats – uten å miste kvalitet eller kontroll.',
        },
        {
          icon: '📈',
          title: 'Raskere gjennomløp',
          text: 'Oppgaver som tok timer gjøres på sekunder. Kunder får raskere svar, rapporter lages automatisk, og prosesser flyter.',
        },
        {
          icon: '🚀',
          title: 'Skaler uten å ansette',
          text: 'Vekst trenger ikke bety flere ansatte. Med riktig automatisering håndterer du mer – uten å øke lønnskostnadene.',
        },
      ],
    },
    faq: {
      title: 'Vanlige spørsmål om AI & Automatisering',
      items: [
        {
          q: 'Hva slags bedrifter passer dette for?',
          a: 'Alle bedrifter som bruker tid på manuelle, repetitive oppgaver kan ha nytte av automatisering. Vi jobber med alt fra små bedrifter til større organisasjoner.',
        },
        {
          q: 'Må vi bytte ut systemene vi allerede bruker?',
          a: 'Nei. Vi bygger på det dere allerede har. Poenget er å koble verktøyene sammen og la AI gjøre jobben imellom – ikke å erstatte hele techstacken.',
        },
        {
          q: 'Hvor lang tid tar det å komme i gang?',
          a: 'Et kartleggingsmøte tar under en time. Derfra lager vi en plan. Enklere automatiseringer settes opp på dager, mer komplekse løsninger tar 2–6 uker.',
        },
        {
          q: 'Hva koster det?',
          a: 'Prisen avhenger av omfang og kompleksitet. Vi tilbyr alt fra enkle automasjonsoppsett til løpende samarbeid med videreutvikling. Kartleggingsmøtet er gratis og uforpliktende.',
        },
        {
          q: 'Tilbyr dere også AI-chatbot?',
          a: 'Ja, vi har en dedikert AI-chatbot-løsning som kan settes opp på noen timer. Chatboten svarer kunder, kvalifiserer leads og jobber for deg 24/7.',
        },
      ],
    },
  },

  // ── 2. Web & App ────────────────────────────
  {
    slug: 'web-app-nettside',
    emoji: '🌐',
    meta: {
      title: 'Web & App | Konverteringsdrevne nettsider',
      description:
        'Vi designer og bygger raske, SEO-optimaliserte nettsider og skreddersydde apper. Ingen maler – alt bygget for konvertering fra dag én. Bergen-basert tech-byrå.',
    },
    hero: {
      tag: 'Web & App',
      h1: 'Nettsider og apper som <em>faktisk konverterer</em>',
      intro:
        'En nettside er ikke et visittkort – den er din beste selger. Vi bygger digitale løsninger med én hensikt: å gjøre besøkende til betalende kunder.',
    },
    features: {
      tag: 'Hva vi leverer',
      title: 'Teknologi og design <em>i verdensklasse</em>',
      items: [
        {
          icon: '⚡',
          title: 'Lynrask ytelse',
          text: 'Core Web Vitals optimert for høyeste søkeranking. Siden lastes på under 1 sekund – fordi hastighet er konvertering.',
        },
        {
          icon: '🏗️',
          title: 'Skreddersydd design',
          text: 'Ingen maler, ingen Squarespace. Alt designes og bygges fra bunnen av for å reflektere din merkevare og dine mål.',
        },
        {
          icon: '🔍',
          title: 'SEO-arkitektur',
          text: 'Teknisk SEO innbakt fra start: semantisk HTML, schema markup, sitemap, intern lenkestruktur og crawlabilitet.',
        },
        {
          icon: '📱',
          title: 'Mobile-first design',
          text: 'Over 60 % av trafikken er mobil. Vi designer alltid for mobil først og skalerer opp – ikke det omvendte.',
        },
        {
          icon: '🛒',
          title: 'Konverteringsoptimert UX',
          text: 'Hvert element, hvert CTA og hvert steg i brukerreisen er designet for å redusere friksjon og øke konverteringen.',
        },
        {
          icon: '🔧',
          title: 'Skalerbar teknologi',
          text: 'Vi bygger med Next.js, React og moderne stack. Løsningen din er klar for vekst – uten dyr refaktorisering senere.',
        },
      ],
    },
    process: {
      tag: 'Slik gjør vi det',
      title: 'Fra brief til lansering – <em>strukturert og transparent</em>',
      steps: [
        {
          num: '01',
          title: 'Discovery & strategi',
          text: 'Vi forstår din bedrift, konkurrenter, målgruppe og konverteringsmål. Du får en konkret teknisk og visuell strategi.',
          chip: 'Gratis innledende møte',
        },
        {
          num: '02',
          title: 'UI/UX design',
          text: 'Wireframes, prototyper og visuelle design presenteres og godkjennes av deg. Ingen overraskelser ved levering.',
          chip: '1–3 uker',
        },
        {
          num: '03',
          title: 'Utvikling',
          text: 'Frontbuild med fokus på hastighet, tilgjengelighet og SEO. Du kan følge progresjon i sanntid via privat preview-link.',
          chip: '2–6 uker',
        },
        {
          num: '04',
          title: 'Testing & lansering',
          text: 'Grundig QA på alle enheter og nettlesere. SEO-sjekk, ytelsetest og tilgjengelighetsaudit. Deretter lansering.',
          chip: 'Inkl. i prosjektet',
        },
      ],
    },
    benefits: {
      tag: 'Hva du får igjen',
      title: 'Resultater som vises på bunnlinjen',
      items: [
        {
          icon: '📈',
          title: 'Høyere konverteringsrate',
          text: 'Skreddersydde løsninger konverterer gjennomsnittlig 40 % bedre enn malbaserte nettsider. Investering med målbar avkastning.',
        },
        {
          icon: '🔍',
          title: 'Bedre søkeranking',
          text: 'Teknisk SEO fra dag én gir raskere rangering. Mange av våre kunder ser topp 3-posisjon på relevante søkeord innen 6 måneder.',
        },
        {
          icon: '🚀',
          title: 'Lav bounce rate',
          text: 'Rask lastetid og intuitiv navigasjon holder besøkende på siden. Lavere bounce rate gir mer tid til å konvertere.',
        },
        {
          icon: '🔧',
          title: 'Enkel å administrere',
          text: 'Vi leverer med CMS og admin-panel tilpasset din bedrift. Du oppdaterer innhold selv – uten å trenge utvikler.',
        },
      ],
    },
    faq: {
      title: 'Vanlige spørsmål om Web & App',
      items: [
        {
          q: 'Bygger dere fra bunnen eller bruker dere maler?',
          a: 'Vi bygger alltid fra bunnen av. Ingen WordPress-maler, Squarespace eller Wix. Hvert prosjekt starter med en blank skjerm og dine spesifikke mål.',
        },
        {
          q: 'Hva er typisk leveringstid?',
          a: 'En standard landingsside eller bedriftsnettside tar 3–5 uker. En fullverdig nettbutikk tar 6–10 uker. Komplekse webapper og SaaS-produkter tar 3–6 måneder.',
        },
        {
          q: 'Inkluderer dere hosting og vedlikehold?',
          a: 'Ja, vi tilbyr hosting, SSL og løpende teknisk vedlikehold som tilleggsabonnement. Du får alltid anbefaling på riktig hostingoppsett for ditt behov.',
        },
        {
          q: 'Hva med CMS – kan vi oppdatere innholdet selv?',
          a: 'Absolutt. Vi leverer med et intuitivt CMS (Webflow, Sanity eller tilpasset admin) slik at du kan oppdatere tekst, bilder og sider uten teknisk kunnskap.',
        },
        {
          q: 'Kan dere ta over en eksisterende nettside?',
          a: 'Ja, vi gjør gjerne audit av eksisterende løsninger og kan enten optimalisere det som er der eller bygge nytt basert på hva som er mest lønnsomt for deg.',
        },
      ],
    },
  },

  // ── 3. Digital markedsføring ────────────────
  {
    slug: 'digital-markedsforing',
    emoji: '📈',
    meta: {
      title: 'Digital markedsføring | SEO, Google Ads & Meta Ads',
      description:
        'AI-drevet SEO, Google Ads og Meta-annonsering med tydelig ROI. Vi gir deg kunder, ikke klikk. Transparent rapportering og datadrevne beslutninger.',
    },
    hero: {
      tag: 'Digital markedsføring',
      h1: 'Markedsføring som gir <em>målbar vekst</em>',
      intro:
        'Det finnes tusenvis av digitale markedsføringsbyrå. Vi er byrået som faktisk viser deg hva pengene dine gir tilbake – med transparent data og AI-drevet optimalisering.',
    },
    features: {
      tag: 'Hva vi leverer',
      title: 'Alle kanalene du trenger – <em>under ett tak</em>',
      items: [
        {
          icon: '🔍',
          title: 'SEO & innholdsmarkedsføring',
          text: 'Teknisk SEO, keyword research, redaksjonelt innhold og linkbygging. En strategi som bygger organisk synlighet over tid.',
        },
        {
          icon: '🎯',
          title: 'Google Ads',
          text: 'Søke-, display- og Performance Max-kampanjer optimert for lavest mulig CPA og høyest mulig ROAS. Alltid datadrevet.',
        },
        {
          icon: '📱',
          title: 'Meta Ads',
          text: 'Facebook og Instagram-annonsering med presisjonsmålretting, kreativt innhold og kontinuerlig A/B-testing.',
        },
        {
          icon: '📧',
          title: 'E-postautomatisering',
          text: 'Drip-kampanjer, nurture-sekvenser og re-engagementflows som selger og pleier relasjoner – mens du sover.',
        },
        {
          icon: '📊',
          title: 'Analytics & rapportering',
          text: 'Google Analytics 4, Search Console og custom dashboards. Månedlig transparent rapport med KPIer, kostnader og anbefalinger.',
        },
        {
          icon: '🤖',
          title: 'AI-drevet innholdsproduksjon',
          text: 'Skaler innholdsmarkedsføringen med AI-assistert produksjon av bloggartikler, annonsekopier og landingssider.',
        },
      ],
    },
    process: {
      tag: 'Slik gjør vi det',
      title: 'En datadrevet prosess <em>fra dag én</em>',
      steps: [
        {
          num: '01',
          title: 'Markedsanalyse & keyword research',
          text: 'Vi kartlegger konkurranselandskapet, analyserer søkevolum og identifiserer de mest lønnsomme mulighetene for din bransje.',
          chip: 'Gratis analyse',
        },
        {
          num: '02',
          title: 'Strategi & budsjettallokering',
          text: 'Prioritert markedsplan med kanalfordeling, budsjettanbefaling og forventede resultater – alt dokumentert og godkjent av deg.',
          chip: '1 uke',
        },
        {
          num: '03',
          title: 'Kampanjeoppsett & kreativproduksjon',
          text: 'Annonsekopier, visuelle kreativer, landingssider og kampanjestruktur rigges for maksimal relevans og Quality Score.',
          chip: '1–2 uker',
        },
        {
          num: '04',
          title: 'Optimalisering & skalering',
          text: 'Løpende testing, bud-optimalisering og A/B-testing. Vi skalerer budsjettet til det som beviseleg fungerer.',
          chip: 'Løpende samarbeid',
        },
      ],
    },
    benefits: {
      tag: 'Hva du får igjen',
      title: 'Resultater du kan se i regnskapet',
      items: [
        {
          icon: '🔍',
          title: 'Organisk vekst på 3–6 måneder',
          text: 'Med riktig SEO-strategi ser de fleste kunder synlig rangeringsvekst innen 3–6 måneder. Organisk trafikk som varer.',
        },
        {
          icon: '💰',
          title: '3–5× ROAS på betalte kanaler',
          text: 'Gjennomsnittlig avkastning på annonsekroner hos våre kunder. Vi optimaliserer til det fungerer – ikke til kontrakten utløper.',
        },
        {
          icon: '📊',
          title: '100 % transparent rapportering',
          text: 'Månedlig rapport med alle KPIer, kostnader og neste steg. Du eier dataene dine og vet alltid hva du betaler for.',
        },
        {
          icon: '🤖',
          title: 'AI-fordel på konkurrentene',
          text: 'Vi bruker AI til analyser, budgivning og innhold – noe som gir raskere optimaliseringsloop og lavere kostnad per konvertering.',
        },
      ],
    },
    faq: {
      title: 'Vanlige spørsmål om Digital markedsføring',
      items: [
        {
          q: 'Hvor raskt ser vi resultater fra SEO?',
          a: 'SEO er et langsiktig spill – de fleste ser merkbar rangeringsvekst etter 3–6 måneder med konsekvent arbeid. Google Ads gir derimot umiddelbar trafikk fra dag én.',
        },
        {
          q: 'Hva er minimumsbudsjettet for Google Ads?',
          a: 'Vi anbefaler minimum 5 000–10 000 kr/mnd i annonsekostnader for å samle nok data for meningsfull optimalisering. Byråhonorar kommer i tillegg.',
        },
        {
          q: 'Inkluderer dere innholdsproduksjon?',
          a: 'Ja, vi produserer SEO-optimaliserte bloggartikler, landingssider, annonsekopier og e-postsekvenser som en del av retaineren.',
        },
        {
          q: 'Bruker dere AI i markedsføringen?',
          a: 'Absolutt. Vi bruker AI til keyword clustering, innholdsproduksjon, bud-optimalisering og prediktiv analyse. Det gir raskere resultater til lavere kostnad.',
        },
        {
          q: 'Binder vi oss til lang kontrakt?',
          a: 'Vi har løpende kontrakter med 1 måneds oppsigelse. Vi tror på å beholde kunder med resultater, ikke på lange bindingstider.',
        },
      ],
    },
  },

  // ── 4. Video & Foto ─────────────────────────
  {
    slug: 'video-foto',
    emoji: '🎬',
    meta: {
      title: 'Video & Foto | Promo, Reels & Dronefilm',
      description:
        'Profesjonell videoproduksjon, reels, dronefilm og produktfoto som konverterer på sosiale medier. Vi produserer innhold som stopper scrollingen og bygger merkevaren din.',
    },
    hero: {
      tag: 'Video & Foto',
      h1: 'Visuelt innhold som <em>stopper scrollingen</em>',
      intro:
        'I en verden der oppmerksomheten varer i sekunder, er visuelt innhold av høy kvalitet ikke en luksus – det er nødvendig. Vi produserer innhold som faktisk fungerer.',
    },
    features: {
      tag: 'Hva vi leverer',
      title: 'Full produksjonskapabilitet – <em>én leverandør</em>',
      items: [
        {
          icon: '🎬',
          title: 'Promovideo & brandfilm',
          text: 'Høykvalitets filmfortelling som kommuniserer merkevaren din på 30–120 sekunder. For nettside, annonser og presentasjoner.',
        },
        {
          icon: '📱',
          title: 'Social content & reels',
          text: 'Kortvideoer og reels optimalisert for TikTok, Instagram Reels og YouTube Shorts. Formatert og klippet for maksimal organisk rekkevidde.',
        },
        {
          icon: '🚁',
          title: 'Dronefilm & luftfoto',
          text: 'Sertifisert droneoperatør for spektakulær luftfotografering av eiendommer, arrangementer og landskap.',
        },
        {
          icon: '📸',
          title: 'Produktfoto & interiørfoto',
          text: 'Stilrene produktbilder for nettbutikk, kataloger og sosiale medier. Konsistent visuell profil på tvers av alle flater.',
        },
        {
          icon: '🎭',
          title: 'Reklameproduksjon',
          text: 'Video- og fotoannonser produsert for konvertering. Vi tenker på plassering, format og CTA allerede under produksjonen.',
        },
        {
          icon: '✂️',
          title: 'Post-produksjon',
          text: 'Profesjonell klipping, fargekorrigering, lydmiks og animert grafikk. Levert i alle formater og størrelser du trenger.',
        },
      ],
    },
    process: {
      tag: 'Slik gjør vi det',
      title: 'Fra konsept til ferdig innhold – <em>sømløst</em>',
      steps: [
        {
          num: '01',
          title: 'Konsept & moodboard',
          text: 'Vi definerer estetikk, format, budskap og målgruppe. Du godkjenner konseptet før vi starter produksjonen.',
          chip: 'Kreativ briefing',
        },
        {
          num: '02',
          title: 'Planlegging & preproduksjon',
          text: 'Lokasjon, utstyr, cast, storyboard og callsheet. Vi håndterer all logistikk slik at produksjonsdagen går knirkefritt.',
          chip: '3–7 dager',
        },
        {
          num: '03',
          title: 'Filming & fotografering',
          text: 'Produksjonsdagen gjennomføres profesjonelt med høykvalitetsutstyr. Vi jobber effektivt og respekterer tidsplanen.',
          chip: 'Produksjonsdag',
        },
        {
          num: '04',
          title: 'Post-produksjon & levering',
          text: 'Klipping, fargekorrigering, lyddesign og grafikk. Du mottar en første versjon og to runder med revisjoner.',
          chip: '5–10 virkedager',
        },
      ],
    },
    benefits: {
      tag: 'Hva du får igjen',
      title: 'Innhold med dokumentert effekt',
      items: [
        {
          icon: '📈',
          title: 'Video øker konverteringen',
          text: 'Landingssider med video konverterer opptil 80 % bedre enn uten. Investeringen betaler seg ofte i første kampanje.',
        },
        {
          icon: '🔁',
          title: '3× organisk rekkevidde',
          text: 'Reels og kortvideoer gir gjennomsnittlig 3× organisk rekkevidde sammenlignet med statiske innlegg på samme konto.',
        },
        {
          icon: '✈️',
          title: 'Dronefilm skaper wow-effekt',
          text: 'Luftfotografering gir umiddelbar prestisje og profesjonalitet. Spesielt effektivt for eiendom, hotell og eventmarkedsføring.',
        },
        {
          icon: '🎯',
          title: 'Innhold for alle kanaler',
          text: 'Vi leverer i alle formater: 9:16 for stories, 1:1 for feed, 16:9 for YouTube og web. Én produksjon, alle plattformer.',
        },
      ],
    },
    faq: {
      title: 'Vanlige spørsmål om Video & Foto',
      items: [
        {
          q: 'Hva er en typisk produksjonsdag?',
          a: 'En standard produksjonsdag på 6–8 timer dekker typisk 2–4 videokonsepter eller et komplett produktfotosett. Vi tilpasser alltid til prosjektets omfang.',
        },
        {
          q: 'Hva trenger vi å stille med?',
          a: 'Du stiller med lokasjon, produkt og evt. menneskelige deltakere. Vi tar med alt annet: kamera, lys, lydrigg, drone og team.',
        },
        {
          q: 'Leverer dere råmateriale?',
          a: 'Vi inkluderer alltid redigerte og ferdige filer. Råfiler (logger) kan leveres etter avtale mot ekstra kostnad, og lagres i 6 måneder etter produksjon.',
        },
        {
          q: 'Kan dere produsere innhold regelmessig?',
          a: 'Ja, vi tilbyr månedlige innholdspakker for bedrifter som ønsker jevnlig produksjon til sosiale medier og markedsføring.',
        },
        {
          q: 'Produserer dere på Vestlandet og resten av Norge?',
          a: 'Vi er basert i Bergen/Øygarden og opererer primært på Vestlandet, men tar på oppdrag over hele landet for de riktige prosjektene.',
        },
      ],
    },
  },

  // ── 5. Branding & Design ────────────────────
  {
    slug: 'branding-design',
    emoji: '🎨',
    meta: {
      title: 'Branding & Grafisk Design | Visuell identitet',
      description:
        'Logo, visuell profil og brandstrategi som gjør bedriften din uforglemmelig. Vi bygger merkevarer med mening – fra strategisk fundament til komplett design system.',
    },
    hero: {
      tag: 'Branding & Design',
      h1: 'En merkevare som <em>gjør varig inntrykk</em>',
      intro:
        'En sterk merkevare er ikke hva du sier om deg selv – det er hva folk tenker på når de hører navnet ditt. Vi hjelper deg å forme det inntrykket, fra strategi til piksel.',
    },
    features: {
      tag: 'Hva vi leverer',
      title: 'Merkevarebygging fra <em>fundament til overflate</em>',
      items: [
        {
          icon: '🎨',
          title: 'Logo & visuell identitet',
          text: 'Unikt logodesign og komplett visuell profil som reflekterer hvem dere er og hva dere tror på. Tidløst, ikke trendy.',
        },
        {
          icon: '📖',
          title: 'Brand guidelines',
          text: 'Detaljert stilmanual for konsekvent bruk av merkevaren. Farger, typografi, ikonografi, tone of voice og brukseksempler.',
        },
        {
          icon: '🖋️',
          title: 'Typografi & fargeprofil',
          text: 'Gjennomtenkt typografisystem og fargepalett med psykologisk forankring. Kombinasjoner som kommuniserer riktig til din målgruppe.',
        },
        {
          icon: '📦',
          title: 'Emballasje & profilert materiell',
          text: 'Forpakning, visittkort, brosjyrer og roll-ups. Print-klar design optimalisert for profesjonelt trykk.',
        },
        {
          icon: '🌐',
          title: 'Digital branding',
          text: 'Konsistent merkevare på nettside, sosiale medier, e-post og digitale annonser. Design som fungerer i alle digitale kontekster.',
        },
        {
          icon: '🧩',
          title: 'Design system',
          text: 'Skalerbart komponentbibliotek for digitale produkter. Ensartet visuelt språk på tvers av alle plattformer og team.',
        },
      ],
    },
    process: {
      tag: 'Slik gjør vi det',
      title: 'Strategisk forankret – <em>visuelt realisert</em>',
      steps: [
        {
          num: '01',
          title: 'Brand discovery',
          text: 'Vi kartlegger verdier, målgruppe, posisjon og konkurrenter. Strategisk fundament for all videre kreativ utvikling.',
          chip: 'Gratis discovery-samtale',
        },
        {
          num: '02',
          title: 'Strategisk fundament',
          text: 'Tone of voice, budskapsarkitektur og posisjonering dokumenteres. Du vet nøyaktig hva merkevaren din står for.',
          chip: '1–2 uker',
        },
        {
          num: '03',
          title: 'Visuell utvikling',
          text: 'Logoalternativer, fargepaletter og typografi presenteres i tre konseptretninger. Du velger og vi raffinerer.',
          chip: '2–3 uker',
        },
        {
          num: '04',
          title: 'Finalisering & leveranse',
          text: 'Komplett brand kit – logo i alle formater, guidelines og eventuelle print/digitale filer – leveres og overtas av deg.',
          chip: 'Inkl. i prosjektet',
        },
      ],
    },
    benefits: {
      tag: 'Hva du får igjen',
      title: 'Merkevare er din viktigste investering',
      items: [
        {
          icon: '💰',
          title: '20 % høyere betalingsvilje',
          text: 'Studier viser at kunder betaler opptil 20 % mer for produkter fra merkevarer de kjenner og stoler på. Branding lønner seg.',
        },
        {
          icon: '🧠',
          title: 'Sterkere gjenkjenning',
          text: 'Konsistent visuell identitet bygger gjenkjenning over tid. Når folk tenker på din bransje, tenker de på deg.',
        },
        {
          icon: '🤝',
          title: 'Økt troverdighet',
          text: 'Profesjonell merkevare kommuniserer at dere er seriøse, etablerte og pålitelige – fra første kontaktpunkt.',
        },
        {
          icon: '📈',
          title: 'Fremtidssikret design system',
          text: 'Et godt design system skalerer med bedriften uten at identiteten svekkes. Konsistent på tvers av alle flater, alltid.',
        },
      ],
    },
    faq: {
      title: 'Vanlige spørsmål om Branding & Design',
      items: [
        {
          q: 'Hva er forskjellen på logodesign og visuell identitet?',
          a: 'En logo er ett element. Visuell identitet er hele det visuelle systemet: logo, fargepalett, typografi, ikonografi, foto-stil og retningslinjer for bruk. Vi leverer alltid komplett identitet, ikke bare én logo.',
        },
        {
          q: 'Leverer dere komplette brand kits?',
          a: 'Ja. Du får logo i AI, EPS, SVG og PNG-format, fullstendige brand guidelines som PDF, fargepaletter med alle koderverdier (HEX, RGB, CMYK) og typografifilene.',
        },
        {
          q: 'Kan dere redesigne en eksisterende merkevare?',
          a: 'Absolutt. Vi gjør en grundig brand audit og identifiserer hva som fungerer og hva som ikke gjør det, før vi anbefaler evolusjon eller revo lusjon av identiteten.',
        },
        {
          q: 'Arbeider dere i Figma eller Adobe?',
          a: 'Primært i Figma for digitale design og design system, og Adobe Illustrator/InDesign for print og identitetsfiler. Du mottar arbeidsfiler i begge formater.',
        },
        {
          q: 'Inkluderer dere nettside-design?',
          a: 'Brand-prosjekter kan utvides til å inkludere nettside-design og web-utvikling. Vi anbefaler å starte med identiteten og deretter bygge nettsiden i forlengelsen av den.',
        },
      ],
    },
  },

  // ── 6. 3D-scanning ──────────────────────────
  {
    slug: '3d-scanning',
    emoji: '📐',
    meta: {
      title: '3D-scanning | Digitale tvillinger for eiendom',
      description:
        'attentioExplore leverer fotorealistiske 3D-turer for eiendommer, hoteller og næringslokaler. La kunder og gjester utforske lokalet ditt fra sofaen – 24/7.',
    },
    hero: {
      tag: '3D-scanning',
      h1: 'Opplev eiendommen din som en <em>digital tvilling</em>',
      intro:
        'attentioExplore gir potensielle kjøpere, leietakere og gjester muligheten til å vandre gjennom lokalet ditt fra skjermen. Immersiv, fotorealistisk og tilgjengelig 24/7.',
    },
    features: {
      tag: 'Hva vi leverer',
      title: 'Teknologi som <em>setter eiendommen din i sentrum</em>',
      items: [
        {
          icon: '🏠',
          title: 'Eiendomsvisualisering',
          text: 'Fullstendig, fotorealistisk 3D-tur av bolig eller næringseiendom. Potensielle kjøpere og leietakere kan utforske hvert rom i detalj.',
        },
        {
          icon: '🏨',
          title: 'Hotell & reiseliv',
          text: 'Imponér gjester med en immersiv romopplevelse lenge før ankomst. Vis frem lobby, restauranter, treningsrom og alle fasiliteter.',
        },
        {
          icon: '📐',
          title: 'Nøyaktig plantegning',
          text: 'Automatisk genererte plantegninger med nøyaktige arealangivelser. Perfekt for teknisk dokumentasjon og markedsføring.',
        },
        {
          icon: '🌐',
          title: 'Integreres overalt',
          text: 'Embeddes sømløst på nettside, Finn.no, Airbnb, sosiale medier og i presentasjoner. Én lenke – alle plattformer.',
        },
        {
          icon: '🎯',
          title: 'Høyere konvertering',
          text: 'Virtuelle turer øker engasjementet og filtrerer ut uinteresserte – du får færre, men mer kvalifiserte visninger.',
        },
        {
          icon: '📱',
          title: 'VR- og mobilkompatibel',
          text: 'Støtter VR-headset for total immersjonsopplevelse. Fungerer perfekt på alle mobiler, nettbrett og datamaskiner.',
        },
      ],
    },
    process: {
      tag: 'Slik gjør vi det',
      title: 'Ferdig 3D-tur på <em>2–5 virkedager</em>',
      steps: [
        {
          num: '01',
          title: 'Bestilling & planlegging',
          text: 'Vi avtaler tidspunkt, diskuterer omfang og gir deg forberedelsestips for å sikre best mulig resultat.',
          chip: 'Rask respons',
        },
        {
          num: '02',
          title: 'Scanning på stedet',
          text: 'Vårt team scanner eiendommen med Matterport Pro3-kamera. En gjennomsnittlig leilighet tar 1–2 timer.',
          chip: '1–4 timer',
        },
        {
          num: '03',
          title: '3D-prosessering & etterbehandling',
          text: 'Modellen prosesseres, optimaliseres og eventuell informasjon og merking legges til.',
          chip: '1–3 virkedager',
        },
        {
          num: '04',
          title: 'Levering & publisering',
          text: 'Du mottar ferdig 3D-tur med delingslenke, embed-kode og tilgang til din personlige portal.',
          chip: 'Klar til bruk',
        },
      ],
    },
    benefits: {
      tag: 'Hva du får igjen',
      title: 'Data som taler for 3D-scanning',
      items: [
        {
          icon: '📈',
          title: '49 % høyere konvertering',
          text: 'Eiendomsannonser med 3D-tur genererer gjennomsnittlig 49 % fler forespørsler enn uten, ifølge Matterport-studier.',
        },
        {
          icon: '🏃',
          title: 'Færre unødvendige visninger',
          text: 'Kvalifiser interessenter digitalt. Reduser antall fysiske visninger med opptil 40 % – og øk kvaliteten på dem som gjennomføres.',
        },
        {
          icon: '⏰',
          title: 'Tilgjengelig 24/7',
          text: 'Potensielle kjøpere og gjester kan utforske eiendommen din på alle tider – uten at du trenger å være til stede.',
        },
        {
          icon: '🏆',
          title: 'Differensier deg',
          text: 'Vis frem eiendommen med teknologi de færreste bruker ennå. Stå ut fra mengden og posisjonér deg som en seriøs aktør.',
        },
      ],
    },
    faq: {
      title: 'Vanlige spørsmål om 3D-scanning',
      items: [
        {
          q: 'Hvilken teknologi bruker dere?',
          a: 'Vi bruker Matterport Pro3-kamera, bransjens ledende løsning for fotorealistisk 3D-modellering. Det gir overlegen bildekvalitet og nøyaktige målinger.',
        },
        {
          q: 'Hvor lang tid tar en scanning?',
          a: 'En gjennomsnittlig 2-roms leilighet tar 1–2 timer. Et stort hus eller næringslokale kan ta 3–6 timer. Store eiendommer kan fordeles over to dager.',
        },
        {
          q: 'Kan vi bruke 3D-turen på Finn.no?',
          a: 'Ja, Matterport-lenker kan legges direkte inn på Finn.no, Eiendomsmeglernes plattform, din nettside og alle sosiale medier.',
        },
        {
          q: 'Inkluderer dere plantegning?',
          a: 'Ja, alle 3D-skanninger inkluderer automatisk generert plantegning med nøyaktige arealmål. Dette kan brukes direkte i markedsmateriell.',
        },
        {
          q: 'Hvor lenge er 3D-turen tilgjengelig?',
          a: 'Med våre abonnementsplaner er turen tilgjengelig så lenge du ønsker. Vi tilbyr også engangshosting i 12 måneder for kortsiktige behov som boligsalg.',
        },
      ],
    },
  },
]

// ─────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────

export function getAllServices(): ServiceData[] {
  return services
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

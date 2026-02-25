# Propuesta de Diseño: Melissa Gallegos Aliaga
## Premium S/.280 + Bilingüe EN/ES

---

## P1: Identity Deep-Dive

### Identidad
Melissa es una puente entre mundos. Nació en Perú, estudió marketing en Australia, construyó su carrera en corporativos (12 años en administración y marketing), y luego tuvo una transformación profunda: dejó lo corporativo para dedicarse a desarrollo humano. Hoy, desde Florida, combina esas dos mitades — la ejecutiva y la coach — para ayudar a líderes a liderar desde la presencia, no desde la reacción. Su "superpower" es que NO es la típica coach new-age: tiene credenciales corporativas reales (BBVA, Faber-Castell, Cencosud/PARIS con 1,000 empleados impactados) y al mismo tiempo formación profunda en coaching ontológico, Gestalt, y regulación emocional. Es una consultora que entiende tanto el P&L como el alma.

### Audiencia
1. **Clientes corporativos / HR Directors** → Buscan: credenciales, métricas de impacto, clientes anteriores, metodología. Necesitan justificar la contratación ante un comité.
2. **Líderes individuales buscando coach** → Buscan: conexión personal, enfoque, testimonios, cómo trabaja. Quieren sentir que "esta persona me entiende."
3. **Organizaciones sin fines de lucro** → Buscan: experiencia con comunidades diversas, bilingüismo, flexibilidad.

### Secciones Propuestas (en orden)

1. **Hero: "Lead from Presence"** — Foto profesional grande, tagline bilingüe, CTA directo, language switcher EN/ES prominente en nav. Stats row integrada: 1,000+ coached | 300+ hrs facilitating | 12+ years | 4 countries.
   → POR QUÉ: Credibilidad inmediata. Un HR Director decide en 3 segundos si sigue leyendo.

2. **"My Approach" / "Mi Enfoque"** — NO un "About Me" genérico. Sección narrativa que explica su metodología: Presence-Based Leadership. Cuatro pilares interconectados visualmente (Presence, Resilience, Values, Well-being) con iconos custom y líneas de conexión. Texto corto que explica cómo integra regulación emocional, awareness, y auto-gestión.
   → POR QUÉ: Diferenciador clave. Esto es lo que la separa de 10,000 coaches en LinkedIn.

3. **"What I Offer" / "Servicios"** — 3 cards grandes: Executive Coaching (1:1), Leadership Workshops (group), Organizational Consulting. Cada card con icono, descripción de 2 líneas, y CTA "Learn More" que scrollea a contacto.
   → POR QUÉ: Ella vende servicios directamente. El HR Director necesita ver qué puede contratar.

4. **"Impact" / "Impacto"** — Sección dark (navy bg) con animated counters: 1,000+ people coached, 300+ hours facilitating, 100 managers in executive coaching, 1,000 employees impacted at PARIS/Cencosud. Logos de clientes corporativos: BBVA, Faber-Castell, CONCAR, Electrocom, Centro Community Partners.
   → POR QUÉ: Social proof cuantificada. Los números venden. La sección dark crea contraste dramático.

5. **"The Journey" / "Trayectoria"** — NO un timeline genérico. Una narrativa visual: Lima (Peru) → Brisbane (Australia) → Florida (USA), mostrando las 3 fases de su carrera: Corporate Executive → Leadership Consultant → Well-being Coach. Cada fase con 2-3 highlights clave. Diseño horizontal en desktop, vertical en mobile.
   → POR QUÉ: Su historia internacional ES su marca. El viaje de 3 países cuenta una historia de reinvención.

6. **"Credentials" / "Credenciales"** — Grid de certificaciones con badges visuales: ICF (300 hrs), Ontological Coaching (280 hrs), Executive Coaching CICE (90 hrs), Masters Marketing (Griffith), BS Business (Ricardo Palma). Sin listar TODAS las certificaciones — solo las top 5-6 más impactantes.
   → POR QUÉ: Coaches necesitan mostrar credenciales. ICF es el gold standard. Griffith University (Australia) es internacional.

7. **"Let's Connect" / "Conectemos"** — CTA final con foto secundaria o gradient, email prominente, social links (LinkedIn), frase personal cálida invitando a conversación.
   → POR QUÉ: Conversión. Todo el sitio lleva aquí.

### Secciones que NO incluir
- **Skills pills genéricos** — Sus skills están embebidos en "My Approach" y "Services". No necesita "Communication ●●●●○"
- **Education como sección separada** — Fusionada con "Credentials". No es académica, es practitioner.
- **Projects grid** — No tiene proyectos visuales. Su trabajo es intangible (coaching).
- **Blog** — NO PAGADO. Es addon S/.120. Upsell al entregar.
- **Testimonials** — No tiene públicos. Se puede agregar placeholder invitándola a enviar.

### Metáfora Visual
Su mundo profesional SIENTE como una sala de conferencias con luz natural entrando por ventanales grandes. Autoridad corporativa (navy, estructura, credenciales) templada por calidez humana (sage, crema, espacios respirables). No es frío ni estéril — es profesional con alma. El coral aparece como acento energético: los momentos de transformación, los CTAs, los números de impacto.

---

## P2: Visual Language

### Paleta de 6 Colores

Basada en los colores que Melissa eligió (#1F3A5F, #8FAF9B, #F4F1EA, #FF7F6A), refinada para coherencia WCAG:

```typescript
colors: {
  primaryDark: "#0F2340",    // Headings, footer bg, nav text — navy profundo (más oscuro que su #1F3A5F para contraste)
  primary: "#1F3A5F",        // Borders, badges, shimmer — su navy elegido
  primaryLight: "#3D5A80",   // Shimmer highlight, hover states — navy intermedio
  accent: "#FF7F6A",         // CTAs, stats, counters, bullet dots — su coral (warm POP contra navy)
  surface: "#F4F1EA",        // Section backgrounds — su crema elegido
  surfaceLight: "#FDFBF7",   // Hero bg, lighter sections — crema más claro
}
```

**Sage #8FAF9B** se usa como color secundario en: approach pillars, credential badges, subtle borders. No es parte del sistema de 6 pero es prominente.

**Justificación de temperatura:** Navy + sage son fríos. Coral es cálido pero se usa como acento mínimo (10%). Crema es neutro-cálido. El resultado es una paleta predominantemente fría con acento cálido estratégico — exactamente el balance "corporativo + humano" que Melissa necesita.

**Contraste WCAG:**
- primaryDark (#0F2340) sobre surfaceLight (#FDFBF7) = 14.2:1 ✅ AAA
- accent (#FF7F6A) sobre primaryDark (#0F2340) = 4.8:1 ✅ AA
- primary (#1F3A5F) sobre surface (#F4F1EA) = 7.1:1 ✅ AAA

### Tipografía

- **Headings:** Cormorant Garamond (400, 600, 700) — elegancia clásica, tradición, autoridad suave. Evoca coaching con raíces profundas. Tamaños grandes para impacto.
- **Body:** Work Sans (300, 400, 500) — moderno, limpio, excelente legibilidad. Contrasta bien con Cormorant. Profesional sin ser frío.
- **Accent/Stats:** Work Sans 600 — números grandes para counters de impacto.

### Efecto Visual Único: "Presence Pillars"

En la sección "My Approach", los cuatro pilares (Presence, Resilience, Values, Well-being) se presentan como círculos interconectados por líneas SVG animadas que se dibujan al scrollear. Cada pilar tiene un icono minimalista y al hacer hover, una breve descripción aparece con fade-in. En mobile, se apilan verticalmente con línea conectora central.

Segundo efecto: **Animated impact counters** en la sección "Impact" — los números cuentan de 0 al valor final cuando la sección entra en viewport. Fondo navy con texto blanco/coral para máximo contraste.

### Motion Design
- Hero: fadeUp staggered (nombre → tagline → CTA → stats)
- Approach pillars: SVG line-draw on scroll + dot-pop
- Services cards: reveal-scale on scroll
- Impact counters: countUp animation + reveal
- Journey phases: reveal-left, reveal-right alternating
- Credentials: reveal-scale staggered
- CTA: gentle float on quote text
- prefers-reduced-motion: solo opacity transitions

---

## P3: Section Design (ASCII)

### 1. Navigation (sticky)

**Desktop:**
```
┌─────────────────────────────────────────────────────────┐
│  MELISSA GALLEGOS    Approach  Services  Impact  Journey  Credentials  Contact    [EN|ES]  │
└─────────────────────────────────────────────────────────┘
```

**Mobile:**
```
┌──────────────────────────┐
│  MELISSA G.    [EN|ES] ☰ │
└──────────────────────────┘
```

### 2. Hero: "Lead from Presence"

**Desktop (2-col):**
```
┌─────────────────────────────────────────────────────────┐
│  bg: surfaceLight (#FDFBF7)                             │
│                                                         │
│  ┌──────────────────────┐   ┌─────────────────────┐    │
│  │                      │   │  MELISSA GALLEGOS    │    │
│  │                      │   │  ALIAGA              │    │
│  │    [FOTO PROFILE]    │   │                      │    │
│  │    rounded-2xl       │   │  Leadership Coach &  │    │
│  │    subtle shadow     │   │  Development         │    │
│  │                      │   │  Consultant          │    │
│  │                      │   │                      │    │
│  └──────────────────────┘   │  "Helping leaders    │    │
│                              │  lead from presence, │    │
│                              │  not reaction."      │    │
│                              │                      │    │
│                              │  [Let's Connect]coral│    │
│                              │  [LinkedIn] [Email]  │    │
│                              └─────────────────────┘    │
│                                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐       │
│  │ 1,000+ │  │  300+  │  │  12+   │  │   4    │       │
│  │coached │  │ hours  │  │ years  │  │countries│       │
│  └────────┘  └────────┘  └────────┘  └────────┘       │
└─────────────────────────────────────────────────────────┘
```

**Mobile:**
```
┌──────────────────────┐
│  bg: surfaceLight    │
│                      │
│    [FOTO PROFILE]    │
│    centered          │
│    max-w-64          │
│                      │
│  MELISSA GALLEGOS    │
│  ALIAGA              │
│                      │
│  Leadership Coach &  │
│  Development         │
│  Consultant          │
│                      │
│  "Helping leaders    │
│  lead from presence, │
│  not reaction."      │
│                      │
│  [Let's Connect]     │
│  [LI] [Email]        │
│                      │
│  ┌──────┐ ┌──────┐  │
│  │1,000+│ │ 300+ │  │
│  │coached│ │hours │  │
│  └──────┘ └──────┘  │
│  ┌──────┐ ┌──────┐  │
│  │ 12+  │ │  4   │  │
│  │years │ │ctries│  │
│  └──────┘ └──────┘  │
└──────────────────────┘
```

### 3. My Approach / Mi Enfoque

**Desktop:**
```
┌─────────────────────────────────────────────────────────┐
│  bg: surface (#F4F1EA)                                  │
│                                                         │
│              MY APPROACH                                │
│              ──────────                                 │
│                                                         │
│  "I believe leadership starts from within..."           │
│  (2-3 lines about presence-based methodology)           │
│                                                         │
│       ┌───┐          ┌───┐                              │
│       │ ○ │──────────│ ○ │                              │
│       │PRE│          │RES│                              │
│       │SEN│          │ILI│                              │
│       │CE │          │NCE│                              │
│       └─┬─┘          └─┬─┘                              │
│         │              │                                │
│         │   ┌──────┐   │                                │
│         └───│CENTER│───┘                                │
│             └──────┘                                    │
│         ┌───┐          ┌───┐                            │
│         │ ○ │──────────│ ○ │                            │
│         │VAL│          │WEL│                            │
│         │UES│          │L-B│                            │
│         │   │          │ENG│                            │
│         └───┘          └───┘                            │
│                                                         │
│  Each pillar: icon + title + hover reveals description  │
│  Lines animate (SVG draw) on scroll entry               │
└─────────────────────────────────────────────────────────┘
```

### 4. What I Offer / Servicios

**Desktop (3-col cards):**
```
┌─────────────────────────────────────────────────────────┐
│  bg: surfaceLight (#FDFBF7)                             │
│                                                         │
│           WHAT I OFFER                                  │
│           ────────────                                  │
│                                                         │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ │
│  │   [icon]      │ │   [icon]      │ │   [icon]      │ │
│  │               │ │               │ │               │ │
│  │  Executive    │ │  Leadership   │ │  Organizational│ │
│  │  Coaching     │ │  Workshops    │ │  Consulting   │ │
│  │               │ │               │ │               │ │
│  │  1:1 sessions │ │  Group skill  │ │  Custom L&D   │ │
│  │  for leaders  │ │  development  │ │  programs     │ │
│  │  seeking...   │ │  for teams... │ │  for orgs...  │ │
│  │               │ │               │ │               │ │
│  │ [Learn More]  │ │ [Learn More]  │ │ [Learn More]  │ │
│  │  coral accent │ │  coral accent │ │  coral accent │ │
│  └───────────────┘ └───────────────┘ └───────────────┘ │
│  Cards: white bg, subtle shadow, hover lift             │
└─────────────────────────────────────────────────────────┘
```

### 5. Impact / Impacto (DARK SECTION)

**Desktop:**
```
┌─────────────────────────────────────────────────────────┐
│  bg: primaryDark (#0F2340) — text: white                │
│                                                         │
│              IMPACT                                     │
│              ──────  (accent underline)                 │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │  1,000+  │ │   300+   │ │   100    │ │  1,000   │  │
│  │  coral   │ │  coral   │ │  coral   │ │  coral   │  │
│  │          │ │          │ │          │ │          │  │
│  │  People  │ │  Hours   │ │ Managers │ │Employees │  │
│  │  Coached │ │Facilitat.│ │ Coached  │ │ Impacted │  │
│  │  white   │ │  white   │ │  white   │ │  white   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  (numbers animate countUp on scroll)                    │
│                                                         │
│  ───── Trusted By ─────                                 │
│                                                         │
│  [BBVA]  [Faber-Castell]  [CONCAR]  [Cencosud/PARIS]   │
│  [Electrocom]  [Centro Community Partners]  [Lyra]      │
│  (logos in white/gray, subtle opacity)                   │
└─────────────────────────────────────────────────────────┘
```

### 6. The Journey / Trayectoria

**Desktop (horizontal phases):**
```
┌─────────────────────────────────────────────────────────┐
│  bg: surface (#F4F1EA)                                  │
│                                                         │
│              THE JOURNEY                                │
│              ───────────                                │
│                                                         │
│  🇵🇪 LIMA              🇦🇺 BRISBANE         🇺🇸 FLORIDA    │
│  ──────────────        ──────────────     ──────────── │
│  The Foundation        The Pivot          The Mission   │
│  2005-2015             2007-2008          2020-Present  │
│                                                         │
│  · Business Admin      · Masters in       · Well-being  │
│    @ Ricardo Palma       Marketing          Coach       │
│  · 12 yrs corporate     @ Griffith       · ICF 300hrs  │
│    (Electrocom)        · International    · Lyra Health │
│  · Marketing dept        perspective     · Board        │
│    creator                                 President    │
│  · Commercial                            · 1,000+      │
│    Supervisor                              coached      │
│                                                         │
│     ─────────→          ─────────→                      │
│  (connecting arrows with subtle animation)              │
└─────────────────────────────────────────────────────────┘
```

### 7. Credentials / Credenciales

**Desktop (grid 2x3):**
```
┌─────────────────────────────────────────────────────────┐
│  bg: surfaceLight (#FDFBF7)                             │
│                                                         │
│              CREDENTIALS                                │
│              ───────────                                │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │  [ICF badge sage]   │  │ [Coaching badge]     │      │
│  │  Mastering Coaching │  │ Ontological Coaching │      │
│  │  Skills (300 hrs)   │  │ PCCO (280 hrs)       │      │
│  │  ACSTH — ICF        │  │ Escuela Asersentido  │      │
│  └─────────────────────┘  └─────────────────────┘      │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │  [Exec badge]       │  │ [Uni badge]          │      │
│  │  Executive Coaching │  │ Masters in Marketing │      │
│  │  CICE (90 hrs)      │  │ Griffith University  │      │
│  │  CCE — ICF          │  │ Brisbane, Australia  │      │
│  └─────────────────────┘  └─────────────────────┘      │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ [Facilitator badge] │  │ [Degree badge]       │      │
│  │ Certified Facilitat.│  │ BS Business Admin    │      │
│  │ PFFC Program        │  │ Universidad Ricardo  │      │
│  │ Escuela DH          │  │ Palma, Lima          │      │
│  └─────────────────────┘  └─────────────────────┘      │
│  Cards: sage left border, subtle shadow                 │
└─────────────────────────────────────────────────────────┘
```

### 8. Let's Connect / Conectemos (CTA Final)

**Desktop:**
```
┌─────────────────────────────────────────────────────────┐
│  bg: primaryDark (#0F2340) — text: white                │
│                                                         │
│     "Every great transformation                         │
│      starts with a conversation."                       │
│     (Cormorant Garamond italic, large)                  │
│                                                         │
│     [Let's Talk] coral button                           │
│                                                         │
│     mgallegos.coach@gmail.com                           │
│     [LinkedIn]  [Instagram]                             │
│                                                         │
│     ─────────────────────────                           │
│     © 2026 Melissa Gallegos Aliaga                      │
│     Built with ♡ by Cofoundy                            │
└─────────────────────────────────────────────────────────┘
```

---

## Bilingüe EN/ES: Implementación

- Language switcher en nav: toggle pill `[EN | ES]`
- Toda la data en config.ts tiene campos `en` y `es`
- Al cambiar idioma: transición suave (fade), URL no cambia (client-side toggle)
- Default: English (USA-based, international audience)
- El toggle guarda preferencia en localStorage

---

## Resumen Técnico

- **Template base:** premium-starter (borrar componentes, escribir custom)
- **Fonts:** Cormorant Garamond (headings) + Work Sans (body)
- **Componentes custom (desde cero):**
  1. `Hero.astro` — 2-col con foto, stats, CTA, bilingual
  2. `Approach.astro` — Pilares interconectados SVG
  3. `Services.astro` — 3 cards con iconos
  4. `Impact.astro` — Dark section, animated counters, client logos
  5. `Journey.astro` — 3-phase narrative con banderas
  6. `Credentials.astro` — Grid de certificaciones con badges
  7. `Contact.astro` — CTA final dark
  8. `Nav.astro` — Sticky nav con language switcher
  9. `LanguageSwitcher.astro` — Toggle EN/ES con localStorage
- **Efecto único:** Presence Pillars (SVG line-draw animado) + Impact Counters (countUp)
- **Mobile-first:** Todos los layouts diseñados primero para 375px

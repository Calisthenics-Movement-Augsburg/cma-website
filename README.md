# CMA Webseite

Website für **Calisthenics Movement Augsburg e.V.**

Die Seite basiert auf **Astro** und ist als statische Website aufgebaut. Inhalte können perspektivisch über ein Git-basiertes CMS gepflegt werden.

## Voraussetzungen

Installiere zuerst:

* [Node.js](https://nodejs.org/) Version 20 oder neuer
* npm, wird mit Node.js installiert
* Git

Prüfe die Installation:

```bash
node --version
npm --version
git --version
```

## Projekt klonen

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

Beispiel:

```bash
git clone https://github.com/<user>/<repo>.git
cd <repo>
```

## Abhängigkeiten installieren

```bash
npm install
```

## Entwicklungsserver starten

```bash
npm run dev
```

Danach ist die Website standardmäßig hier erreichbar:

```txt
http://localhost:4321
```

Astro zeigt die lokale Adresse auch direkt im Terminal an.

## Wichtige npm-Skripte

```bash
npm run dev
```

Startet den lokalen Entwicklungsserver.

```bash
npm run build
```

Erstellt die produktionsfertige statische Website im Ordner `dist/`.

```bash
npm run preview
```

Startet eine lokale Vorschau des fertigen Builds.

```bash
npm run astro
```

Führt Astro-CLI-Befehle aus.

## Projektstruktur

```txt
.
├── public/
│   ├── downloads/
│   ├── images/
│   └── logo.png
│
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── SmallHeader.astro
│   │   ├── ThemeToggle.astro
│   │   └── ...
│   │
│   ├── content/
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── downloads.astro
│   │   ├── faq.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   └── ...
│   │
│   └── styles/
│       └── ...
│
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── README.md
```

## Seiten bearbeiten

Die wichtigsten Seiten liegen unter:

```txt
src/pages/
```

Typische Seiten:

```txt
src/pages/index.astro
src/pages/downloads.astro
src/pages/faq.astro
src/pages/impressum.astro
src/pages/datenschutz.astro
```

Wiederverwendbare UI-Bausteine liegen unter:

```txt
src/components/
```

Globale Layout-Struktur liegt unter:

```txt
src/layouts/
```

## Bilder, PDFs und statische Dateien

Statische Dateien liegen im Ordner:

```txt
public/
```

Alles in `public/` ist später direkt über die Website erreichbar.

Beispiele:

```txt
public/logo.png
```

ist erreichbar unter:

```txt
/logo.png
```

```txt
public/downloads/vereinssatzung.pdf
```

ist erreichbar unter:

```txt
/downloads/vereinssatzung.pdf
```

## Styling

Das Projekt verwendet Tailwind CSS.

Klassen werden direkt in den `.astro`-Dateien verwendet.

Beispiel:

```astro
<section class="mx-auto max-w-7xl px-4 py-20">
  <h1 class="text-4xl font-bold">CMA Augsburg</h1>
</section>
```

## Theme / Dark Mode

Die Website unterstützt Light/Dark Mode.

Der Theme-Toggle liegt in:

```txt
src/components/ThemeToggle.astro
```

Globale Theme-Logik befindet sich je nach Umsetzung im Layout oder in eingebundenen Scripts.

## Git-basierter CMS-Ansatz

Das Projekt ist so vorbereitet, dass Inhalte später über ein Git-basiertes CMS gepflegt werden können.

Typischer Ablauf:

1. Inhalte werden als Markdown, JSON oder YAML im Repository gespeichert.
2. Das CMS schreibt Änderungen direkt in Git.
3. Der Hosting-Anbieter baut die Website nach jedem Commit neu.
4. Astro erzeugt daraus eine statische Website.

Mögliche CMS-Lösung:

```txt
Decap CMS
```

Typische CMS-Dateien wären:

```txt
public/admin/index.html
public/admin/config.yml
```

Falls das CMS noch nicht vollständig eingerichtet ist, werden Inhalte aktuell direkt in den `.astro`-Dateien gepflegt.

## Build testen

Vor dem Veröffentlichen sollte immer geprüft werden, ob der Build funktioniert:

```bash
npm run build
```

Wenn der Build ohne Fehler durchläuft, kann die Seite deployed werden.

Optional danach prüfen:

```bash
npm run preview
```

## Deployment

Die Website kann auf jedem Hosting-Anbieter deployed werden, der statische Seiten unterstützt.

Geeignet sind zum Beispiel:

* Netlify
* Vercel
* Cloudflare Pages
* eigener Webspace mit Upload des `dist/`-Ordners

Für statisches Hosting wird nach dem Build nur der Inhalt dieses Ordners benötigt:

```txt
dist/
```

## Häufige Probleme

### `npm install` schlägt fehl

Lösung:

```bash
rm -rf node_modules package-lock.json
npm install
```

Danach erneut starten:

```bash
npm run dev
```

### Port 4321 ist bereits belegt

Astro nutzt automatisch einen anderen Port oder du startest manuell mit:

```bash
npm run dev -- --port 3000
```

Dann ist die Seite erreichbar unter:

```txt
http://localhost:3000
```

### Änderungen werden nicht angezeigt

Entwicklungsserver stoppen:

```bash
Ctrl + C
```

Dann neu starten:

```bash
npm run dev
```

### Bilder oder PDFs werden nicht gefunden

Prüfe:

* Liegt die Datei wirklich in `public/`?
* Beginnt der Pfad im Code mit `/`?
* Stimmen Groß-/Kleinschreibung und Dateiendung?

Beispiel:

```astro
<a href="/downloads/vereinssatzung.pdf">Download</a>
```

## Empfohlener Entwicklungsablauf

```bash
git pull
npm install
npm run dev
```

Änderungen machen.

Dann prüfen:

```bash
npm run build
```

Änderungen committen:

```bash
git add .
git commit -m "Update website content"
git push
```

## Lizenz

Dieses Projekt ist für **Calisthenics Movement Augsburg e.V.** bestimmt.

Eine Weiterverwendung außerhalb des Vereins sollte vorher abgestimmt werden.

# ocsw.it — Istruzioni per Claude Code

Sito di **OCSW — Oscar Costanzelli Software**, sviluppatore freelance (siti web, applicazioni web, software su misura).
Obiettivo del sito: presentare l'attività in modo professionale e portare contatti da imprese.

Slogan (dal biglietto da visita, da usare così):
- "Innovazione digitale per le imprese"
- "Soluzioni web e software progettate ad hoc"

Riferimento visivo: canvas di design "OCSW — Direzioni visive sito", pagina **Direzione 3**.
Quando un dettaglio non è specificato qui, segui il canvas.

---

## Stack

- **Astro** (ultima versione stabile), output statico. TypeScript.
- CSS scritto a mano con **custom properties** (`src/styles/tokens.css`) + CSS scoped nei componenti Astro. Niente Tailwind, niente librerie UI.
- JavaScript solo dove serve davvero (menu mobile, confronto prima/dopo, viewer 3D). Preferire `<script>` nei componenti o isole leggere.
- Immagini con `astro:assets` (`<Image />`), formati moderni, dimensioni esplicite.
- Niente WordPress, niente CMS per ora: i contenuti stanno in file Markdown/MDX con content collections (`src/content/`).
- Gestore pacchetti: npm.

Comandi:
- `npm run dev` — sviluppo
- `npm run build` — build di produzione
- `npm run preview` — anteprima della build

---

## Identità visiva: "Dual-Tone Architetturale"

L'idea: blocchi netti bianco/nero come pannelli architettonici, linee strutturali a vista, l'oro usato solo come accento (come il punto in "OCSW.").

### Colori (unici ammessi)

```css
--nero:        #0D0D0D;  /* fondo dei blocchi scuri, testo principale */
--bianco:      #FFFFFF;
--oro:         #CDA443;  /* SOLO accento */
--grigio-testo-chiaro: #4D4D4D;  /* testo secondario su bianco */
--grigio-testo-scuro:  #BFBFBF;  /* testo secondario su nero */
--linea-scura: #333333;  /* bordi interni ai blocchi neri */
--grigio-numeri-chiaro: #D9D9D9; /* numeri decorativi grandi su bianco */
--grigio-numeri-scuro:  #2B2B2B; /* numeri decorativi grandi su nero */
--placeholder: #F0F0F0;
```

Regole per l'oro:
- Su fondo nero: ammesso per etichette piccole, punto del logo, linea del cursore, quadratini.
- Su fondo bianco: SOLO elementi decorativi (punto del logo, quadratino 12×12, sottolineatura della voce di menu attiva). **Mai testo oro su bianco**: il contrasto non basta.
- Mai grandi campiture d'oro, tranne il pulsante "Contatti" attivo nella pagina Contatti.

### Tipografia

- Un solo font: **Poppins** (pesi 300, 400, 500, 600, 700, 800), self-hosted (`@fontsource/poppins` o file locali), fallback `"Helvetica Neue", sans-serif`.
- Titoli display: 700–800, interlinea 0.85–1.05, letter-spacing negativo (da -1px a -8px sui più grandi).
- Etichette: 11–13px, 600, MAIUSCOLO, letter-spacing 1.5–4px.
- Testo: 15–18px, interlinea 1.6–1.7; paragrafi introduttivi 18–22px peso 300.
- Dimensioni fluide con `clamp()`.

### Layout

- Pagine a tutta larghezza fatte di **blocchi**: righe divise 50/50 (o 33/66) con una metà nera e una bianca.
- Separatori: bordi da **1px solid var(--nero)**; dentro i blocchi neri `var(--linea-scura)`.
- Padding orizzontale dei blocchi: 40px (desktop), 20px (mobile).
- Griglie con `display: grid` e `repeat(auto-fit, minmax(…, 1fr))`; righe divise con `flex-wrap: wrap`.
- **Angoli vivi ovunque**: `border-radius: 0`. Niente ombre.
- Pulsanti: rettangolari, altezza minima 56px (44px nella nav), testo 14px 600 maiuscolo. Primario nero pieno, secondario con bordo.
- Mobile (fino a ~768px): i blocchi divisi si impilano (nero sopra, bianco sotto), i pulsanti vanno a tutta larghezza.

### Anti-pattern (da NON fare)

- Gradienti, glassmorphism, ombre, card arrotondate, card dentro card.
- Font Inter, Roboto, Arial, o un secondo font.
- Emoji, icone decorative a caso, illustrazioni generiche, foto stock.
- Colori fuori palette (niente viola, blu, ecc.).
- Testo grigio chiaro su fondi colorati, testo oro su bianco.
- Animazioni vistose. Ammesse solo transizioni brevi (opacity, 150–250ms) e sempre rispettando `prefers-reduced-motion`.

---

## Struttura del sito

```
/                    Home
/servizi/[slug]      Siti web · Applicazioni web · Software su misura
/progetti/carandina  Caso studio Carandina
/laboratorio/[slug]  Demo e progetti personali (vedi regole sotto)
/contatti            Contatti con form
```

### Home (in ordine)
1. Header: blocco nero con "OCSW." a sinistra, nav a destra (Servizi, Metodo, Progetti, Laboratorio, Contatti).
2. Hero divisa: a sinistra blocco nero con "OC / SW." gigante (800) ed etichetta "OSCAR COSTANZELLI SOFTWARE" in oro; a destra H1 "Innovazione digitale per le imprese." + paragrafo + due pulsanti.
3. Servizi: tre colonne alternate bianco/nero/bianco con numeri grandi 01–02–03.
4. Metodo: titolo a sinistra, griglia 2×2 a destra (P1 Analisi, P2 Progetto, P3 Sviluppo, P4 Supporto).
5. Progetti (blocco nero): card Carandina + card bianca "Il prossimo potrebbe essere il tuo." verso i contatti.
6. Laboratorio: tre card con etichette DEMO / PERSONALE (mostrare solo quelle pubblicate, vedi regole).
7. Contatti: metà bianca con titolo "Costruiamo qualcosa di solido." + pulsante; metà nera con i dati.
8. Footer.

### Pagina servizio
Breadcrumb · hero divisa con numero gigante e titolo · "Cosa realizzo" (griglia 4) · FAQ · navigazione servizio precedente/successivo.

### Caso studio Carandina
Hero nera con nome e righe meta (settore, ambito, piattaforma, link) · **confronto prima/dopo** con cursore (le due homepage sovrapposte, `clip-path`, comandato da un `<input type="range">` accessibile) · i tre interventi (01 visualizzatore 3D .glb in evidenza su nero, 02 restyling, 03 catalogo e schede PDF) · galleria · invito al contatto.

### Pagina Laboratorio (modello)
Tag DEMO/PERSONALE · titolo · riga ben visibile "Progetto dimostrativo: azienda, prodotti e dati sono di esempio." · "Prova la demo" · problema / approccio / cosa dimostra · funzionalità · tecnologie · invito al contatto.

### Contatti
Metà nera con titolo e dati; metà bianca con form (tipo di progetto a pulsanti, nome, azienda, email, telefono, messaggio, consenso privacy). Sotto: "cosa succede dopo" in tre passi.

---

## Regole sui contenuti (importanti)

- **Mai inventare** progetti, clienti, numeri, recensioni, loghi di clienti o risultati. Se un dato manca, usa un segnaposto tra parentesi quadre, es. `[TEMPI DI RISPOSTA]`, e segnalalo.
- L'unico progetto cliente pubblicabile è **Carandina** (carandina.it).
- Le demo del Laboratorio devono essere sempre etichettate come demo/progetti personali, con dati di esempio. Una card del Laboratorio si pubblica solo quando la demo funziona davvero.
- Non pubblicare dati interni dei clienti o informazioni che possano metterli in difficoltà.
- Lingua: italiano. Tono professionale, diretto, senza superlativi.

Dati di contatto (pubblici):
- Oscar Costanzelli — Sviluppatore software
- Tel +39 347 310 8273
- PEC oscar.costanzelli@pec.it
- Email di contatto: [DA DEFINIRE]
- P.IVA 02210020380
- ocsw.it

---

## Qualità

- Accessibilità: HTML semantico, un solo H1 per pagina, `<button>` e `<a>` veri, label sui campi, focus visibile, contrasto testo ≥ 4.5:1, target ≥ 44px, `aria-label` sui pulsanti solo icona.
- Responsive: verifica sempre a **390px** e **1440px** di larghezza.
- Performance: niente librerie pesanti; il viewer 3D (se usato) si carica solo quando entra nello schermo.
- SEO: `lang="it"`, title e meta description per pagina, Open Graph, sitemap.

## Modo di lavorare

- Una sezione o pagina alla volta. Prima di dichiararla finita: avvia il dev server, controllala nell'anteprima a 390px e 1440px e passa `/critique` (Impeccable).
- Usa le skill di Impeccable per le decisioni di design; in caso di conflitto prevalgono le regole di questo file.
- Commit piccoli e descrittivi, in italiano.
- Se una richiesta va contro queste regole, segnalalo prima di procedere.

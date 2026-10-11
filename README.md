# ocsw

Sito di **OCSW — Oscar Costanzelli Software** ([ocsw.it](https://ocsw.it)): siti web, applicazioni web e software su misura.

Costruito con [Astro](https://astro.build), output statico, CSS a mano con custom properties.

## Comandi

| Comando           | Azione                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Installa le dipendenze                  |
| `npm run dev`     | Dev server su `localhost:4321`          |
| `npm run build`   | Build di produzione in `./dist/`        |
| `npm run preview` | Anteprima della build                   |

## Struttura

- `src/styles/tokens.css` — colori, tipografia, spaziature
- `src/layouts/BaseLayout.astro` — layout base (head, header, footer)
- `src/components/` — componenti Astro
- `src/pages/` — pagine

Linee guida di design e contenuti: [CLAUDE.md](CLAUDE.md).

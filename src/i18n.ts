/*
 * Lingue del sito: italiano (principale, senza prefisso) e inglese (/en).
 * Ogni pagina ha il suo equivalente nell'altra lingua: serve al selettore IT/EN e agli hreflang.
 */

export type Lingua = "it" | "en";
export const lingue: Lingua[] = ["it", "en"];

export const percorsi = {
  home: { it: "/", en: "/en" },
  contatti: { it: "/contatti", en: "/en/contact" },
  privacy: { it: "/privacy", en: "/en/privacy" },
  carandina: { it: "/progetti/carandina", en: "/en/projects/carandina" },
  "siti-web": { it: "/servizi/siti-web", en: "/en/services/websites" },
  "applicazioni-web": { it: "/servizi/applicazioni-web", en: "/en/services/web-applications" },
  "software-su-misura": { it: "/servizi/software-su-misura", en: "/en/services/custom-software" },
} as const satisfies Record<string, Record<Lingua, string>>;

export type Pagina = keyof typeof percorsi;

/** Percorso pubblico senza .html né /index, come lo vede il visitatore. */
export function percorsoPulito(pathname: string): string {
  const p = pathname.replace(/\.html$/, "").replace(/\/index$/, "").replace(/\/$/, "");
  return p || "/";
}

export function linguaDa(url: URL): Lingua {
  const p = percorsoPulito(url.pathname);
  return p === "/en" || p.startsWith("/en/") ? "en" : "it";
}

/** La pagina corrente (chiave di `percorsi`), se è una pagina tradotta. */
export function paginaDa(url: URL): Pagina | undefined {
  const p = percorsoPulito(url.pathname);
  return (Object.keys(percorsi) as Pagina[]).find((k) => percorsi[k].it === p || percorsi[k].en === p);
}

/** Link a una pagina nella lingua data, con ancora opzionale (es. home + "#servizi"). */
export function link(pagina: Pagina, lingua: Lingua, ancora = ""): string {
  const base = percorsi[pagina][lingua];
  if (!ancora) return base;
  return base === "/" ? `/#${ancora}` : `${base}#${ancora}`;
}

export const localeOg: Record<Lingua, string> = { it: "it_IT", en: "en_GB" };

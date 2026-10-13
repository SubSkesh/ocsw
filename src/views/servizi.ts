import { getCollection } from "astro:content";
import { percorsi, type Lingua } from "../i18n";

/** Pagine servizio di una lingua: lo slug viene dall'URL pubblico in `percorsi`. */
export async function percorsiServizi(lingua: Lingua) {
  const servizi = (await getCollection("servizi", (s) => s.id.startsWith(`${lingua}/`))).sort(
    (a, b) => a.data.ordine - b.data.ordine,
  );
  return servizi.map((s, i) => ({
    params: { slug: percorsi[s.data.chiave][lingua].split("/").pop()! },
    props: { servizio: s, precedente: servizi[i - 1], successivo: servizi[i + 1] },
  }));
}

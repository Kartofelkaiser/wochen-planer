# Maiks Essensplan-Vorlieben (für Claude)

> Dieses Dokument in einen neuen Chat einfügen, damit Claude sofort alle Vorgaben kennt.
> Claude: Halte dieses Dokument bei jeder neuen geäußerten Vorliebe aktuell (Repo: Kartofelkaiser/wochen-planer, Datei VORLIEBEN.md).

## Ernährungsziele
- **~2100 kcal pro Tag**, alle Nährstoffe decken: Eiweiß ~1,5 g/kg Körpergewicht (Gewicht einstellbar, Standard 72 kg), Ballaststoffe ≥30 g, Eisen ≥14 mg, Calcium ≥1000 mg, Vitamin C ≥90 mg.
- Aufteilung: Frühstück ~550 kcal, Mittag ~700 kcal, Abendessen ~850 kcal.
- Der Plan soll gesund und abwechslungsreich sein.

## Plan-Struktur (immer so)
- **5 Auswahlmöglichkeiten Frühstück**, **5 Mittagessen** (gelten jeweils für die ganze Woche).
- **4 verschiedene echte Hauptgerichte pro Wochentag** (keine Reste-Einträge als feste Optionen).
- **Meal-Prep dynamisch:** Wählt Maik in „Plan bearbeiten" ein Meal-Prep-taugliches Gericht (`prep:true` oder `batch`), erscheint an den 2 Folgetagen sofort (vor dem Speichern) automatisch eine „(Meal-Prep)"-Option zum Aufwärmen – zieht sich durch alle Tage. Diese Optionen erscheinen erst NACH Auswahl des Basisgerichts, nie vorher.

## Budget
- Essen soll sich **hauptsächlich billig orientieren** – keine harte Grenze, ~3 €/Portion ist ein grober Richtwert, teurere Ausnahmen (z. B. Lachs ~4,50 €) sind okay, wenn der Rest günstig bleibt.
- **Zu jedem Gericht immer den ungefähren Zutatenpreis angeben** (price-Feld, wird in der App angezeigt).
- Beispiel-Feedback: Hähnchenschenkel wirkte zu teuer → ersetzt.

## Geschmack / konkrete Vorlieben
- Isst alles (keine Unverträglichkeiten bekannt).
- Deutsche Alltagsküche + gängige internationale Gerichte funktionieren gut (Dal, Curry, Tortilla, Enchiladas, Käsespätzle, Erbseneintopf …).

## Einkaufsliste
- **Mengen in üblich verkauften Packungsgrößen angeben** (z. B. 500-g-Packung Hack, 10er-Karton Eier, 1-L-Milch), nicht in Gramm-Bedarf allein.
- **Zwiebeln und Knoblauch nie auf die Einkaufsliste** – die sind immer im Haus.
- Vorräte automatisch abziehen; Frisches nur solange haltbar (Kühlregal ≤7 Tage, Obst/Gemüse ≤5 Tage, Trockenes/TK immer).

## Kochen
- Maik ist **Koch-Anfänger**: Zubereitungsschritte detailliert schreiben – konkrete Würzmengen (z. B. „½ TL Salz, 1 TL Paprikapulver"), Hitzestufen, Garzeiten und Woran-erkenne-ich-dass-es-fertig-ist-Hinweise.

## Wöchentliche Routine (samstags morgens)
- Jeden **Samstagmorgen** wird der Plan für die **kommende Woche (bis Sonntag)** erstellt.
- Dabei **Vorräte/Reste möglichst aufbrauchen** (Bestand liegt unter `/api/store?key=pantry_v1`, abzüglich dessen, was der neue Plan ohnehin braucht).
- **Verschobene Gerichte beachten:** Die App hat eine „↷ Verschieben"-Funktion (overrides unter `/api/store?key=overrides_v1`, Datum→Gericht-ID bzw. `skip`). Ragt ein verschobenes Gericht in die neue Woche (z. B. Sonntag→Montag), beginnt der neue Plan erst am Tag danach (z. B. Dienstag) – geplant wird trotzdem immer nur bis Sonntag.
- Neuen Plan per `PUT /api/store?key=plan_v4` speichern (Format: `{dinners:{Montag:'id',…},breakfast:'id',lunch:'id'}`), neue Gerichte zusätzlich nach `custom_v4` (id→Gericht-Objekt, ids mit `gen-` Präfix).

## Bei jedem neuen Plan
- **Möglichst komplett neue Gerichte ausdenken**, bisherige nicht wiederholen (auch der „Neue Woche generieren"-Button übergibt die Liste bisheriger Gerichte zum Ausschließen).
- **Fotos müssen zum Gericht passen und erreichbar sein**: nur verifizierte URLs (TheMealDB `themealdb.com/images/media/meals/…` oder direkte `upload.wikimedia.org`-Thumbnails, KEINE `Special:FilePath`-Redirects – die werden bei vielen Bildern gedrosselt und laden dann nicht).

## App-Konventionen (Wochenplan, Netlify)
- App heißt **„Wochenplan"** (früher „Wochenküche").
- Tabs: Plan · Heute · Kochen · Plan bearbeiten · Einkaufsliste · Vorräte · Nährstoffe (kein „Fragen"-Chat-Tab).
- Plan: vergangene Wochentage ausblenden; datumsbasiert mit „↷ Verschieben" **pro Mahlzeit getrennt**: Abendessen kaskadiert einen Tag nach hinten (ggf. in die nächste Woche), Frühstück/Mittag werden für den Tag ausgesetzt (slotskips_v1). Kochen: Gericht des aktuellen Tages vorauswählen.
- **Nicht verschoben = gegessen:** Ab dem Folgetag werden nicht verschobene Mahlzeiten automatisch als gegessen verbucht (Nährstoffe + Vorrats-Abzug, `finalized_v1` merkt den Stand). „Heute": manuelles Abhaken/Korrigieren, auch für vergangene Tage, + freies Essen mit Nährwerten eintragen.
- „Vorräte": Einkäufe erfassen; beim Abhaken werden Rezept-Zutaten abgezogen.
- Nährstoffe: umschaltbar Plan-Soll / Heute / Ø 7 Tage / Ø 30 Tage. Getrackt werden kcal, Eiweiß, Ballaststoffe, Eisen, Calcium, Vitamin C.
- Plan-Speicherung serverseitig über Netlify Function + Blobs (`/api/store`), Claude-Anbindung über `/api/claude` (braucht ANTHROPIC_API_KEY in Netlify; Claude.ai-Abo-Kontingent geht dafür nicht).
- In „Plan bearbeiten" hat jede Gerichte-Karte ein aufklappbares „Zutaten"-Dropdown.

## Technik-Spickzettel (für neue Chats & die Routine)
- **Live-Site:** https://wochen-planer.netlify.app (Netlify, deployt automatisch bei Push auf `main`)
- **Repo:** https://github.com/Kartofelkaiser/wochen-planer · lokaler Klon: `~/Desktop/Claude/wochen-planer` (Push-Token ist dort in der Git-Remote-URL konfiguriert – Token niemals in Dateien/Chats schreiben!)
- **Alles ist eine Datei:** `index.html` (Gerichte im `DISHES`-Objekt, UI, Logik). Dazu `netlify/functions/store.mjs` (Speicher) und `claude.mjs` (Claude-Proxy).
- **Speicher-API** (offen, kein Token): `GET/PUT https://wochen-planer.netlify.app/api/store?key=<key>` mit JSON-Body. Schlüssel:
  - `plan_v4` – aktueller Plan `{dinners:{Montag:'id',…,Sonntag:'id'},breakfast:'id',lunch:'id'}`
  - `custom_v4` – dynamische Gerichte (id→Objekt, Präfixe `gen-`/`prep-`)
  - `pantry_v1` – Vorräte `{ "item|einheit": {item,unit,qty,ts} }`
  - `overrides_v1` – verschobene Abendessen (Datum→Gericht-ID bzw. `'skip'`)
  - `slotskips_v1` – ausgesetzte Frühstücke/Mittage `{ "YYYY-MM-DD": {b:true,l:true} }`
  - `log_v1` – Ess-Protokoll (Datum→Einträge), `shop_v4` – Einkaufslisten-Häkchen, `weight_v4` – Gewicht, `finalized_v1` – letzter automatisch verbuchter Tag
- **Gericht-Format** (in `DISHES` bzw. `custom_v4`): `{meal:'b'|'l'|'d', name, illo, photo, time, price, prep:true?, batch:'Hinweis'?, tags:[], nutri:{kcal,protein,fiber,iron,calcium,vitc}, ing:[[Name,Menge|null,Einheit,'gemuese|kuehl|vorrat|tk|staple']], steps:[…]}`
- **Fotos vor Einbau prüfen:** `curl -s -o /dev/null -w "%{http_code}" <url>` muss 200 liefern; Motiv muss zum Gericht passen.
- Lokal gibt es kein Node; JS-Syntax-Check auf dem Mac per `osascript -l JavaScript` und `new Function(code)`.

## Fertiger Routine-Text (zum Kopieren)
> Erstelle den Essensplan für die kommende Woche (Montag bis Sonntag) für die App „Wochenplan" (https://wochen-planer.netlify.app). Halte dich exakt an dieses Dokument (Vorgaben oben): ~2100 kcal/Tag, 5 Frühstücke, 5 Mittagessen, 4 echte Abendessen pro Tag, günstig, Preise, neue Gerichte, detaillierte Anfänger-Kochschritte, verifizierte Fotos. Lies vorher per GET auf die Speicher-API: `pantry_v1` (Vorräte möglichst aufbrauchen), `overrides_v1` und `slotskips_v1` (ragt ein verschobenes Gericht in die neue Woche, beginnt der neue Plan erst am Tag danach). Speichere den fertigen Plan per PUT auf `plan_v4`, neue Gerichte nach `custom_v4`. Fasse am Ende kurz zusammen, was es diese Woche gibt und was es ungefähr kostet.

*Stand: 2026-07-02*

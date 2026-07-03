# Maiks Essensplan-Vorlieben (für Claude)

> Dieses Dokument in einen neuen Chat einfügen, damit Claude sofort alle Vorgaben kennt.
> Claude: Halte dieses Dokument bei jeder neuen geäußerten Vorliebe **und jeder grundlegenden neuen Arbeitsanweisung** sofort aktuell (Repo: Kartofelkaiser/wochen-planer, Datei VORLIEBEN.md), damit alles beim Erstellen des nächsten Plans automatisch einfließt.

## Ernährungsziele
- **~2100 kcal pro Tag**, alle Nährstoffe decken: Eiweiß ~1,5 g/kg Körpergewicht (Gewicht einstellbar, Standard 72 kg), Ballaststoffe ≥30 g, Eisen ≥14 mg, Calcium ≥1000 mg, Vitamin C ≥90 mg.
- Aufteilung: Frühstück ~550 kcal, Mittag ~700 kcal, Abendessen ~850 kcal.
- Der Plan soll gesund und abwechslungsreich sein.

## Plan-Struktur (immer so)
- **5 Auswahlmöglichkeiten Frühstück**, **5 Mittagessen** (gelten jeweils für die ganze Woche). Die **Milchreis-Frühstücksoption bleibt immer erhalten**.
- **3 verschiedene echte Hauptgerichte pro Wochentag** als Auswahl (seit 03.07.2026, vorher 4; keine Reste-Einträge als feste Optionen) – das gilt auch, wenn die Gerichte aus Internet-Rezepten stammen.
- **Meal-Prep dynamisch:** Wählt Maik in „Plan bearbeiten" ein Meal-Prep-taugliches Gericht (`prep:true` oder `batch`), erscheint an den 2 Folgetagen sofort (vor dem Speichern) automatisch eine „(Meal-Prep)"-Option zum Aufwärmen – zieht sich durch alle Tage. Diese Optionen erscheinen erst NACH Auswahl des Basisgerichts, nie vorher.

## Budget
- Essen soll sich **hauptsächlich billig orientieren** – keine harte Grenze, ~3 €/Portion ist ein grober Richtwert, teurere Ausnahmen (z. B. Lachs ~4,50 €) sind okay, wenn der Rest günstig bleibt.
- **Zu jedem Gericht immer den ungefähren Zutatenpreis angeben** (price-Feld, wird in der App angezeigt).
- Beispiel-Feedback: Hähnchenschenkel wirkte zu teuer → ersetzt.

## Geschmack / konkrete Vorlieben
- Isst alles (keine Unverträglichkeiten bekannt), **außer Brokkoli – mag er nicht**. In Gerichten durch Blumenkohl, Paprika, grüne Bohnen o. ä. ersetzen (auf ähnliche Nährwerte, v. a. Vitamin C und Ballaststoffe, achten).
- Deutsche Alltagsküche + gängige internationale Gerichte funktionieren gut (Dal, Curry, Tortilla, Enchiladas, Käsespätzle, Erbseneintopf …).

## Einkaufsliste
- **Mengen in üblich verkauften Packungsgrößen angeben** (z. B. 500-g-Packung Hack, 10er-Karton Eier, 1-L-Milch), nicht in Gramm-Bedarf allein.
- **Packungsgrößen müssen real bei Rewe/Netto existieren** – vor dem Eintragen prüfen, ob es die Größe dort wirklich gibt (Beispiel-Feedback: 360-g-Glas Apfelmus gab es bei Netto nicht → übliches 710-g-Glas). Die PACKS-Tabelle in index.html entsprechend pflegen.
- **Keine Duplikate durch Schreibvarianten:** Zutaten in neuen Gerichten exakt so schreiben wie in bestehenden (z. B. immer „Möhren", nie mal „Möhre"; „Eier" statt „Ei"; „Käse (gerieben)"). Die App normalisiert bekannte Varianten zusätzlich über ITEM_ALIASES in index.html – neue Varianten dort ergänzen.
- **Zwiebeln und Knoblauch nie auf die Einkaufsliste** – die sind immer im Haus.
- Vorräte automatisch abziehen; Frisches nur solange haltbar (Kühlregal ≤7 Tage, Obst/Gemüse ≤5 Tage, Trockenes/TK immer).

## Kochen
- Maik ist **Koch-Anfänger**: Zubereitungsschritte detailliert schreiben – konkrete Würzmengen (z. B. „½ TL Salz, 1 TL Paprikapulver"), Hitzestufen, Garzeiten und Woran-erkenne-ich-dass-es-fertig-ist-Hinweise.
- **Meal-Prep = doppelte Portion, automatisch gerechnet:** Ist ein Gericht an einem späteren Tag als „(Meal-Prep)" eingeplant, zeigt der Koch-Modus beim Basisgericht alle Zutatenmengen bereits **×2** an (Kopf: „2 Portionen (inkl. Meal-Prep)", kleine Notiz „×2 – Meal-Prep einberechnet" bei den Zutaten) plus Hinweis-Box; die Einkaufsliste rechnet die doppelten Zutaten ebenfalls ein. Bei neuen Gerichten/Plänen immer daran denken.
- **Keine vagen Angaben** wie „Salat mit Öl-Dressing dazu": immer ausschreiben, welcher Salat (z. B. „2 Handvoll Blattsalat") und welches Dressing mit Mengen (z. B. „1 EL Öl, 1 TL Essig, 1 Prise Salz und Zucker"). Gilt für alle Beilagen, Dips und Dressings.

## Plan-Länge & Ausnahmen
- Standard: Plan geht **Montag bis Sonntag** (7 Tage).
- **Auf Wunsch kann ein Plan ausnahmsweise länger als 7 Tage gehen** (z. B. ab heute bis Sonntag nächster Woche). Technisch: bereits geplante Tage der laufenden Woche werden über `plan.byDate` (Datum→Gericht-ID in `plan_v4`) fixiert, `plan.dinners` trägt die neue Woche, und Plan-Seite, Koch-Modus **und** „Plan bearbeiten" zeigen dann automatisch alle Tage bis zum Ende der nächsten Woche (fixierte Tage mit „📌 fixiert" markiert, in „Plan bearbeiten" als eigener nicht-klickbarer Block oben). Solche Verlängerungen gelten nur einmalig, danach wieder Standard.
- **Einmalig angewendet am 03.07.2026:** Plan von Fr 03.07. bis So 12.07.2026 (10 Tage); Sa 04.07. und So 05.07. blieben unverändert fixiert.

## Wöchentliche Routine (samstags morgens)
- Jeden **Samstagmorgen** wird der Plan für die **kommende Woche (bis Sonntag)** erstellt.
- Dabei **Vorräte/Reste möglichst aufbrauchen** (Bestand liegt unter `/api/store?key=pantry_v1`, abzüglich dessen, was der neue Plan ohnehin braucht).
- **Verschobene Gerichte beachten:** Die App hat eine „↷ Verschieben"-Funktion (overrides unter `/api/store?key=overrides_v1`, Datum→Gericht-ID bzw. `skip`). Ragt ein verschobenes Gericht in die neue Woche (z. B. Sonntag→Montag), beginnt der neue Plan erst am Tag danach (z. B. Dienstag) – geplant wird trotzdem immer nur bis Sonntag.
- Neuen Plan per `PUT /api/store?key=plan_v4` speichern (Format: `{dinners:{Montag:'id',…},breakfast:'id',lunch:'id'}`), neue Gerichte zusätzlich nach `custom_v4` (id→Gericht-Objekt, ids mit `gen-` Präfix).

## Rezept-Herkunft
- **Rezepte nicht selbst ausdenken, sondern aus dem Internet übernehmen** – möglichst gut und oft bewertete Rezepte (z. B. Chefkoch, EAT SMARTER, kochbar, gaumenfreundin o. ä.), an Portionsgröße/Budget/Nährwerte angepasst. **Gilt für ALLE Mahlzeiten: Frühstück, Mittag- und Abendessen.**
- Jedes Internet-Gericht bekommt im Gericht-Objekt ein `src`-Feld mit Quellenangabe.
- **Ausnahme:** simple, allgemein bekannte Gerichte ohne nennenswerte Rezeptvarianz (z. B. Pizza, Milchreis, Rührei, Frikadellen, Käsespätzle) – dafür braucht es keine Quellensuche.
- **Fotos direkt von der Rezeptquelle übernehmen**, wenn lizenzrechtlich/technisch möglich (Bild muss erreichbar sein und zum Gericht passen); sonst TheMealDB/Wikipedia. Nur verifizierte URLs verwenden; wenn keine Verifikation möglich ist (z. B. Cloud-Session ohne Bild-Zugriff), lieber die eingebaute Illustration lassen als eine ungeprüfte/unpassende URL einzutragen – Foto beim nächsten Mal mit Verifikationsmöglichkeit nachtragen. Die App entfernt kaputte Bilder automatisch (onerror-Fallback auf Illustration).

## Bei jedem neuen Plan
- **Möglichst komplett neue Gerichte ausdenken**, bisherige nicht wiederholen (auch der „Neue Woche generieren"-Button übergibt die Liste bisheriger Gerichte zum Ausschließen).
- **Vorräte auch bei internetbasierten Rezepten möglichst nutzen**: passende Rezepte so auswählen/anpassen, dass vorhandene Vorräte aufgebraucht werden – Nährwerte, Gesundheit und alle anderen Vorgaben bleiben dabei unverändert gültig.
- **Nach jeder Plan-Änderung immer prüfen:** (1) die Einkaufsliste – keine Duplikate durch Schreibvarianten, alle Mengen in real existierenden Rewe/Netto-Packungsgrößen; (2) die Kochschritte – detailliert und ohne vage Angaben (siehe „Kochen"). Beides gehört fest zur Abnahme, bevor der Plan als fertig gilt.
- **Fotos müssen zum Gericht passen und erreichbar sein**: nur verifizierte URLs (TheMealDB `themealdb.com/images/media/meals/…` oder direkte `upload.wikimedia.org`-Thumbnails, KEINE `Special:FilePath`-Redirects – die werden bei vielen Bildern gedrosselt und laden dann nicht).

## App-Konventionen (Wochenplan, Netlify)
- App heißt **„Wochenplan"** (früher „Wochenküche").
- Tabs: Plan · Heute · Kochen · Plan bearbeiten · Einkaufsliste · Vorräte · Nährstoffe (kein „Fragen"-Chat-Tab).
- **Einkaufsliste „Ab heute" und Meal-Prep:** Ist das heutige Abendessen unter „Heute" als gegessen abgehakt UND es existiert dafür eine spätere Meal-Prep-Option im Plan, zählt die „Ab heute"-Einkaufsliste weder das heutige Gericht noch die spätere Meal-Prep-Portion erneut mit (schon eingekauft/gekocht). Ohne das Abhaken kann die App das nicht wissen – Maik daran erinnern, frisch gekochte Meal-Prep-Gerichte zeitnah unter „Heute" abzuhaken.
- „Plan speichern" in „Plan bearbeiten" **setzt alle Abendessen-Verschiebungen zurück** (overrides_v1 wird geleert) – der neu gespeicherte Plan gilt, sonst würden alte Verschiebungen ihn auf der Plan-Seite überdecken. Abendessen-Tausch (⇄) läuft komplett über „Plan bearbeiten" und wird dauerhaft in plan_v4 gespeichert.
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
  - `plan_v4` – aktueller Plan `{dinners:{Montag:'id',…,Sonntag:'id'},breakfast:'id',lunch:'id',byDate?:{'YYYY-MM-DD':'id'}}` – `byDate` fixiert einzelne Datums-Tage (hat Vorrang vor dem Wochentag, aber nicht vor overrides; alte Einträge werden automatisch aufgeräumt)
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

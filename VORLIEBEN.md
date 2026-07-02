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
- **Hackfleisch-Bolognese lieber als Linsen-Bolognese.**
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

*Stand: 2026-07-02*

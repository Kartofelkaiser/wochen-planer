# Maiks Essensplan-Vorlieben (für Claude)

> Dieses Dokument in einen neuen Chat einfügen, damit Claude sofort alle Vorgaben kennt.
> Claude: Halte dieses Dokument bei jeder neuen geäußerten Vorliebe aktuell (Repo: Kartofelkaiser/wochen-planer, Datei VORLIEBEN.md).

## Ernährungsziele
- **~2100 kcal pro Tag**, alle Nährstoffe decken: Eiweiß ~1,5 g/kg Körpergewicht (Gewicht einstellbar, Standard 72 kg), Ballaststoffe ≥30 g, Eisen ≥14 mg, Calcium ≥1000 mg, Vitamin C ≥90 mg.
- Aufteilung: Frühstück ~550 kcal, Mittag ~700 kcal, Abendessen ~850 kcal.
- Der Plan soll gesund und abwechslungsreich sein.

## Plan-Struktur (immer so)
- **4 Auswahlmöglichkeiten Frühstück**, **4 Mittagessen** (gelten jeweils für die ganze Woche).
- **3+ Auswahlmöglichkeiten Abendessen pro Wochentag** (individuell pro Tag).
- Meal-Prep-Paare sind erwünscht (z. B. Montag doppelt kochen → Mittwoch Reste), spart Geld und Zeit.

## Budget
- Essen muss **günstig** sein: Richtwert ≤ ~3 € Zutatenkosten pro Portion (deutsche Discounter-Preise); Reste-Tage deutlich darunter.
- **Zu jedem Gericht immer den ungefähren Zutatenpreis angeben** (price-Feld, wird in der App angezeigt).
- Beispiel-Feedback: Hähnchenschenkel wirkte zu teuer → ersetzt. Lachs ist als teuerste Ausnahme (~4,50 €) okay, aber nicht als Standard.

## Geschmack / konkrete Vorlieben
- Isst alles (keine Unverträglichkeiten bekannt).
- **Hackfleisch-Bolognese lieber als Linsen-Bolognese.**
- Deutsche Alltagsküche + gängige Internationale Gerichte funktionieren gut (Dal, Curry, Tortilla, Enchiladas, Käsespätzle, Erbseneintopf …).

## Bei jedem neuen Plan
- **Möglichst komplett neue Gerichte ausdenken**, bisherige nicht wiederholen (auch der „Neue Woche generieren"-Button übergibt die Liste bisheriger Gerichte zum Ausschließen).
- **Fotos müssen zum Gericht passen und erreichbar sein**: nur verifizierte URLs (TheMealDB `themealdb.com/images/media/meals/…` oder direkte `upload.wikimedia.org`-Thumbnails, KEINE `Special:FilePath`-Redirects – die werden bei vielen Bildern gedrosselt und laden dann nicht).

## App-Konventionen (wochen-planer, Netlify)
- Tabs: Plan · Heute · Kochen · Plan bearbeiten · Einkaufsliste · Vorräte · Nährstoffe (kein „Fragen"-Chat-Tab).
- Plan: vergangene Wochentage ausblenden; Kochen: Gericht des aktuellen Tages vorauswählen.
- „Heute": Mahlzeiten abhaken (auch vergangene Tage nachtragbar) + freies Essen mit Nährwerten eintragen.
- „Vorräte": Einkäufe erfassen; beim Abhaken werden Rezept-Zutaten abgezogen; Einkaufsliste zieht Vorräte automatisch ab – Frisches zählt nur begrenzt (Kühlregal ≤7 Tage, Obst/Gemüse ≤5 Tage, Trockenes/TK immer).
- Nährstoffe: umschaltbar Plan-Soll / Heute / Ø 7 Tage / Ø 30 Tage.
- Plan-Speicherung serverseitig über Netlify Function + Blobs (`/api/store`), Claude-Anbindung über `/api/claude` (braucht ANTHROPIC_API_KEY in Netlify; Claude.ai-Abo-Kontingent geht dafür nicht).
- In „Plan bearbeiten" hat jede Gerichte-Karte ein aufklappbares „Zutaten"-Dropdown.

*Stand: 2026-07-02*

# GRUPPE-REPOSITORY
## TABELL
| Navn                   | IND-GITHUB-KONTO                                    |
|------------------------|-----------------------------------------------------|
| Ole Aleksander Paulsen | [OlePaulsen](https://github.com/OlePaulsen)         |
| Anita Øygard           | [anitaoygard](https://github.com/anitaoygard)       |
| Martine Sinding        | [MartineSinding](https://github.com/MartineSinding) |
| Ayat Farhat            | [ayatfarhat](https://github.com/ayatfarhat)         |
| Marius Jansen          | [MariusJansen99](https://github.com/MariusJansen99) |
| Lamek Tesfazghi        | [LamekTesfazghi](https://github.com/LamekTesfazghi) |
## 4B
- Sendte ut invitasjon til gruppe repository til alle. Deretter lastet alle ned
  Intellij og klonet repository. Deretter tok vi tur med å gjøre pull-request
  og committe/pushe navn og lenke. Googlet for å finne ut hvordan vi skulle bruke Markdown til
  tabell. Deretter diskuterte vi tekst til 4B, for så å skrive den. 

- Fikk endel problemer ved oppdatering av klone. Måtte commite/pushe noen filer
  for å oppdatere. Hadde også noen problemer med github-login gjennom
  Intellij. Dette fikset vi ved å bruke innlogging med token. Vi oppdaterte
også over hverandre i enkelte tilfeller, dette ordnet seg ved at oppdaterte
etter tur. 

- Gruppen har nå  en grunnleggende forståelse av pull-request, commit/push
  og Markdown. **Selvevaluering: 3** 

## Pull request

| Navn                   | Pull-request utført |
|------------------------|---------------|
 | Ole Aleksander Paulsen | **x**         |
 | Anita Øygard           | **x**         |
 | Martine Sinding        | **x**         |
 | Ayat Farhat            | **x**         |
| Marius Jansen          | **x**         |
| Lamek Tesfazghi        | **x**         |

# Flaggoppgaven

## 5A
- Vi anvendte Github projects for å jobbe med denne oppgaven. Vi mente det var enklest å bruke et "bord", ettersom
  vi hadde mest erfaring med det fra før. Kanban bord er oversiktelig å forståelig, så vi gikk inn for noe lignende.
  Det ble en forenklet versjon med kun fire kolonner. Disse var "To do", "In Progress", "Under review" og
  "Finished".
- Elementer ble først lagt til i "To do" relativt raskt, før de flyttet seg til høyre ettersom
  vi jobbet med oppgaven. Enkelte elementer ble omgjort til issues for enklere oversikt. "Under review" kolonnen
  ble kanskje litt lite brukt, ettersom vi ofte så over hverandres kode mens vi var samlet. Elementer hadde derfor
  en tendens til å hoppe rett fra "In Progress" til "Finished".
- Elementene vi lagde var fra oppgave 5) og 4).
  Et element tilegnet 5A)+5B), tre elementer tilegnet 5C) og tre elementer tilegnet 4). Pull requestene ble lagt
  rett inn i "Finished" kolonnen etter de var utført for oversiktens skyld.

## 5B) / 3)
- Vi fordelte oppgaven ved å sette et par gruppemedlemmer til å jobbe med hver metode.

- Anita og Martine jobbet med metode 1.

  Lamek, Ayat og Marius jobbet med metode 2.

  Ole jobbet med metode 3.

- Metodene ble fordelt relativt tilfeldig. Vi tok en runde og hørte hvem som ville jobbe med hva, men ingen hadde
noe spesielt utgangspunkt for å ta et logisk valg. Gruppemedlemmene hadde ingen preferanser, ettersom
vanskelighetsgraden og arbeidsmengden mellom de ulike metodene var nokså like.

- Metode 3 hadde tre deltakere, ettersom Marius ikke ville være til stede så mye uken før innlevering.
Hver person laget forslag til løsning av oppgaven, og lastet dette opp i sin egen branch i GRUPPE-REPOSITORY.
Deretter utførte én person på hver metode en pull request, for å få pflagg.html, cssflagg.html og canvasflagg.html
samlet i main branch. Alle utførte ikke pull request til main, ettersom dette kunne blitt rotete.

## 5C)
### Metode 1
Å programmere med p element og style attributt har sine fordeler.
Er man ny i koding er denne metoden enkel å forstå på grunn av
at den er satt opp på en logisk måte.

Likevel er det også noen negative sider ved denne metoden.
Den setter bergensninger for kodingen og den kan oppleves
som overfadisk i forhold til andre mer foretrukne metoder.

Da vi laget flagg med p element og style attribute, måtte vi først sette oss inn i hvordan denne metoden fungerte.
Da satt vi først opp det helt grunnleggende med html koden, head og body. Deretter begynte vi på den føste delen av
flagget. Her satt vi inn p style og begynte å utforme hvordan flagget skulle se ut. først og fremst bestemte vi
hvilken bakgrunnsfarge vi skulle ha og deretter hvordan form flagget skulle ha, hvor vidt og høyt det skulle være.
Videre kopierte vi denne koden, men byttet farge på resten av boksene. Avsluttningsvis ble dette til et prideflagg.

### Metode 2
Kunne velge mellom å bruk id eller Class.
Begge to er et slags navn eller merke som du gir til et bestemt HTML-element men forskjellen på de er at samme
Class kan brukes flere ganger i samme dokument, mens samme ID kan bare være en gang per dokument.
Brukte diverse nettsider og youtube som forklarte Class for eksempel w3school, for å skjønne oppgaven.
Slet litt med å finne de riktige dimensjonene i starten, men klarte det til slutt ved prøve og feile.
Prøvde å lage det Tanzaniske flagg først, men ble litt vanskelig så lagde det tyske flagget.

### Metode 3
Hovedutfordringen med metode 3 er å sette seg inn i de ulike funksjonene som kan anvendes, og hvordan de brukes.
Etter å ha satt opp canvas ID, og konstantene canvas(for å definere størrelse på canvas) og ctx(for å beskrive
hva som skal forekomme på canvas), er metoden enkel å bruke. På grunn av funksjonene du har tilgjengelig
kan du utføre oppgaven ved få linjer. Én kan tegne alle geometriske former i alle farger, spredd utover hvor
én vil på det definerte canvas.

En ulempe med canvas er at du ikke kan designere "layer" til hvert element.
Altså; det du skriver først vil komme på bunnen, og det som skrives etterpå vil bli satt over. Du kan altså ikke
kode elementen i den rekkefølgen du nødvendigvis vil. Dette førte til at jeg brukte unødvendig mye tid, ettersom
jeg ikke kunne forstå hvorfor sirkelen i Japan flagget mitt ikke kom frem. Det viste seg at den lå under det hvite
flagget. Du kan heller ikke lage "borders" til objekter. Jeg måtte derfor improvisere ved å legge et større sort
rektangel under det hvite, for at man skulle se flagget mot den hvite bakgrunnen. Dette er mer tungvindt enn
nødvendig.

### All tekst til flaggoppgaven ligger også i github-pages / index.html


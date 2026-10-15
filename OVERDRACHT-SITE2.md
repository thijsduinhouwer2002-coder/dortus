# Overdracht sitebouwer 2 (dortus.com)

Stand: 15 oktober 2026, 17:15 NL. Daarna stil tot na de MailView-lancering (±24 oktober).

**Dit bestand staat op branch `claude/overdracht-site2`, zonder PR. Zet het nooit op `main`.** De site draait op GitHub Pages (`CNAME` in de root). Een `.md`-bestand op `main` wordt dan een openbare pagina.

## 1. Branches en PR's

**Al mijn PR's zijn gemerged**, op 15 oktober, in deze volgorde:

| PR | Wat |
|---|---|
| #33 | Gids: Confluence Cloud storage is full |
| #38 | Vergelijking: Questions for Confluence vs AskSpace |
| #44 | Gids: How to put an Outlook email on a Confluence page |
| #45 | Fix: bronnen bij e-mailvoorbeeld en Outlook-opslagformaten |
| #49 | Gids: Stop answering the same questions in Slack |

**Open van mij:** niets. Mijn branches (`claude/guide-*`, `claude/qfc-vs-askspace-honest`, `claude/fix-email-sources`) zijn klaar. Er staat niets meer op dat niet in `main` zit.

**Open van anderen** (15 oktober, 17:15), niet van mij en niet aangeraakt:
- #21 en #22: MailView live (niet mergen tot goedkeuring).
- #25: AttachClean (niet mergen).
- #47 (draft): AskSpace-docs voor de rc.
- #52: interne links naar `/`.
- #53 (draft): exportgids.
- #54 (draft): MailView for Jira lanceringsdag.

**PR #1** (`claude/gracious-ramanujan-60xckv`) is gesloten zonder merge. Laat die branch zoals hij is.

## 2. Wat af is

- **Gidsen live op `main`:**
  - `confluence-cloud-storage-full.html`
  - `outlook-email-on-confluence-page.html`
  - `slack-questions-to-confluence.html`

  Alle drie hebben dezelfde footer als de rest, staan in de gidsenlijst en in de sitemap (met `lastmod`), en hebben de SEO-velden van #41.
- **`askspace-vs-questions-for-confluence.html`** (#38):
  - QfC staat voorop;
  - het reviewcijfer van Cowork staat erin ("about 3 out of 5 from 77 reviews", oktober 2026);
  - het verschil vragen/antwoorden heeft Atlassians eigen zin als bron, plus CONFCLOUD-48392;
  - eerlijk erbij: Smart Questions and Answers en Modern Questions for Confluence kunnen dat ook, volgens hun docs;
  - QfC is beter in de Confluence-zoekfunctie en in leesrechten per groep.
- **App Central-artikel voor AskSpace:** alleen als tekst geleverd, niet in de repo. De laatste versie staat in bijlage A. Thijs plaatst het, en pas na goedkeuring.

## 3. Wat niet af is, of open staat

**Artikel (bijlage A), vóór plaatsing:**
- **Wanneer plaatsen.** Advies: pas als AskSpace 4.2.0 (de rc, Sprintbrief PR #75) in production staat. Reden: 4.1.0 (`26b230d`) leest per groep van 50 antwoorden maar één pagina zoekresultaten. Geeft Confluence minder dan 50 per pagina, dan vallen antwoorden stil weg. Dat is aangetoond in een test met een nagebootste Confluence, niet op een echte site. De rc (`1d87b02`) leest alle pagina's.
  - Alternatief: op 4.1.0 eerst een proefimport doen en "We found … answers" vergelijken met "Imported … answers".
- **"Integrations" in het menupad** komt van Confluence zelf. De code kan het niet bewijzen; de app zegt in zijn eigen teksten wel "Space settings → Integrations → AskSpace". Een Engelse screenshot maakt het zeker.
- **Lengte:** 630 woorden, iets boven de gevraagde ~600.

**Site:**
- **Contrast:** `.prose .card .small` gebruikt `var(--ink-3)` en haalt 3,8:1, terwijl 4,5:1 de norm is (`styles.css:1380`). Voorstel: `var(--ink-2)`. Nooit gedaan.
- **Footertekst:** zegt nog "AskSpace vs Questions for Confluence", terwijl de pagina nu "Questions for Confluence vs AskSpace" heet. Hetzelfde geldt voor de linkteksten op `askspace.html`, `confluence-cloud-qa-options.html` en `docs/askspace/index.html`. Aanpassen raakt alle pagina's.
- **De `heading-order`-melding van axe** (h1 → h3) zit op alle gidsen. Dat is de huisstijl en geen WCAG-fout.

**Voor de AskSpace-app (Sprintbrief), gevonden in de code, niet op de site:**
- **Antwoorden boven de 100 per vraag vallen weg, en het voorbeeld telt ze wel mee.** Grens: `qa/src/lib/import.js:27`. Voorbeeld: `qfc-cloud-plan.js:46` en `:186`. Er is geen melding. Is het geaccepteerde antwoord nummer 101 of later, dan komt de vraag binnen zonder beste antwoord. Dat geldt ook nog in de rc.
- **De rc-commit en -opmerking zeggen dat voorbeeld en import "kloppen".** Voor vragen met meer dan 100 antwoorden is dat niet waar.
- **De groepenkiezer en het groepslidmaatschap lezen hooguit 200 groepen**, zonder door te bladeren.
- **Een verouderde opmerking:** "hooguit 20 rondes", terwijl de code er 50 bewaart.
- **Undo in 4.1.0:** crasht een import tussen het opslaan van de vragen en het opslaan van de importronde, dan staan er vragen zonder Undo. Opgelost in de rc.

**Voor MailView (Sprintbrief):**
- De PDF/Word-export controleert de licentie niet.
- Een `.msg` zonder extensie van meer dan 2 MB wordt in de weergave niet herkend (`engine.jsx:431`), in de export wel.

## 4. Valkuilen

1. **Nooit `git stash` tijdens een merge.** Het wist `MERGE_HEAD`. De wijzigingen blijven, maar de merge-commit wordt een gewone commit. Herstel: `git rev-parse <branch> > .git/MERGE_HEAD` en dan committen.
2. **De footer moet op elke pagina gelijk zijn.** Een nieuwe gids krijgt een `<li>` op elke pagina; `docs/askspace/index.html` gebruikt `../../`. Check: tel per pagina de linkparen in `<footer class="site-footer">`. `404.html` en `arrears.html` wijken bewust af.
3. **`sitemap.xml` en de footer geven altijd conflicten** als meerdere PR's tegelijk een gids toevoegen, want iedereen voegt achteraan toe. Los het op door beide regels te houden en `lastmod` erbij te zetten.
4. **SEO-velden (#41) op elke nieuwe pagina:**
   - canonical en `og:url` (absoluut, gelijk aan elkaar);
   - `og:site_name`, `og:image` met alt, `twitter:card`;
   - Article JSON-LD. Daarin is `datePublished` de eerste commit en `dateModified` de laatste wijziging in `<main>`;
   - de `lastmod` in de sitemap.

   Kijk na een merge-rij of `dateModified` nog klopt (#50 heeft dat één keer rechtgezet).
5. **Tabellen op 320 px:** ze passen dankzij `@media (max-width: 359px)` met minder padding in de cellen, plus `&shy;` in lange woorden. Een lege `<th>` geeft een axe-fout; gebruik `<td></td>`.
6. **Atlassian-, Slack-, Microsoft- en Community-pagina's zijn vanuit de container geblokkeerd** (status `000`), net als de docs van ngpilot.com en purde-software. Werk met zoekresultaten en zeg dat erbij. Letterlijke citaten komen van Cowork.
7. **Huisregels:**
   - geen gedachtestreepjes;
   - nooit "free", geen prijzen;
   - een gids draagt geen statusregel ("in review");
   - Marketplace-links alleen naar onze eigen listings;
   - MailView for Confluence krijgt geen listinglink tot de goedkeuring;
   - concurrent-namen alleen waar Cowork dat expliciet vraagt (nu alleen de ene zin op de vergelijkingspagina en in de wie-antwoordt-gids);
   - nooit suggereren dat Questions for Confluence stopt.
8. **Beweringen over AskSpace en MailView altijd met bestand en regel uit Sprintbrief.** Versies:

   | App | Versie | Commit |
   |---|---|---|
   | AskSpace | 4.0.0 | `2612716` |
   | AskSpace (production) | 4.1.0 | master `26b230d`; deploy-log 14 oktober 09:01 UTC |
   | AskSpace rc | wordt 4.2.0 | `1d87b02`, Sprintbrief PR #75 |
   | MailView | 1.4.1 | `d077e89` |

   Production 4.1.0 haal je uit de Actions-log van `askspace-forge-deploy` ("The version of your app [4.1.0] that was just deployed to [production]"). In de repo staat geen versienummer: `package.json` zegt 0.2.0.
9. **De checkscripts stonden in de scratchpad en zijn weg na de container.** Opnieuw opzetten:
   - `python3 -m http.server 8080 --bind 127.0.0.1`;
   - Playwright met Chromium uit `/opt/pw-browsers`: geen horizontaal scrollen op 320, 375 en 1440 px, licht en donker, plus axe-core;
   - `html-validate` met `void-style`, `no-inline-style` en `long-title` uit;
   - een Python-check op interne links en ankers, gelijke footers en een geldige sitemap.
10. **Proef-merge** in een losse worktree: `git worktree add --detach <map> origin/main`, dan de branches in volgorde mergen met `--no-ff`, en daarna `git worktree remove --force <map>`.

## Bijlage A: App Central-artikel AskSpace (laatste versie, 15 oktober)

Engels, ik-vorm, 630 woorden, links alleen `[LISTING]` en de vergelijkingspagina.

```markdown
# Moving from Questions for Confluence without putting your answers at risk

Disclosure first: I build AskSpace, a Q&A app for Confluence Cloud. This post is about its import from Questions for Confluence, and about when not to use it.

When teams consider switching, the worry is rarely the new app. It's the years of answers in the old one.

## First: do you need to switch at all?

Questions for Confluence is made by Atlassian, and for many teams it is fine. I would stay with it if you rely on:

- questions showing up in Confluence search next to your pages;
- global questions that belong to no space, and one list across all spaces;
- points and experts;
- watching a topic to hear about new questions;
- deciding per group who can view questions.

AskSpace works differently. Q&A lives per space and stays off until a space admin turns it on. In Questions for Confluence, asking and answering go together; Atlassian's help page *Ask a question* says: "if you can view the space, you'll be able to ask and answer questions". In AskSpace, a space admin sets who may ask and who may answer separately, so you can let everyone ask and only your support team answer. (A few other Q&A apps can do that too.) If that model doesn't fit how you work, the import below doesn't matter.

## What the import does

In the space, go to Space settings → Integrations → AskSpace. Under Import & export, click Import questions, choose "Questions for Confluence (this site)" and click Continue. Only space admins see this. AskSpace reads with your account, so it finds only questions you can see.

Before anything is written, you see a preview: counts per space and the first five questions. For each space you choose where its questions go: the same space, another space, or skip. "Download as CSV instead" gives you the same questions and answers as a file, without importing anything.

**What comes along:** questions, answers, original authors and dates, accepted answers (they become the best answer), and topics, which become tags. A question keeps up to three tags, and AskSpace tells you how many topics didn't become tags.

**What doesn't:**

- votes and comments;
- images, attachments, mentions and macros without text of their own. They become "[content omitted during import]", so you can see where something was;
- questions that don't belong to a space;
- answers beyond the oldest 100 on one question. The preview still counts them, and nothing warns you.

One import takes up to 5,000 questions, and a space holds up to 6,000.

## Why it is safe to try

Questions for Confluence isn't touched. The screen says so: "Your questions in Questions for Confluence stay where they are. AskSpace only reads them."

You can undo an import, even one you stopped halfway: right away, or later under Recent imports in the AskSpace settings. Undo deletes the imported questions with all their answers, including answers people added in AskSpace afterwards. That delete is final, so decide before your team starts answering there.

If you run the import again into the same space, questions already imported there are skipped. It is a one-way copy, not a sync: edits and new answers in Questions for Confluence after your import don't follow.

## What I would do

1. Run the preview and check the five sample questions.
2. Import one space, not all of them.
3. Let that team use it for two weeks, with Questions for Confluence still there.
4. Then decide. If it isn't for you, undo it before people add much.

I wrote a longer side-by-side, including where Questions for Confluence is ahead: [Questions for Confluence vs AskSpace: an honest comparison](https://dortus.com/askspace-vs-questions-for-confluence.html). AskSpace on the Marketplace: [LISTING].

Questions are welcome below. If the honest answer is "don't switch", I'll say so.
```

**Codebronnen bij het artikel** (4.1.0 / rc):

| Wat | Waar |
|---|---|
| Schermtekst `QFC_STAYS` | `qa/src/lib/transfer-text.js:161` |
| Waar die tekst verschijnt | `qa/src/frontend/qfc-cloud-import.jsx:306/412/567` (4.1.0) en `:316/422/582` (rc) |
| "Import & export" | `qa/src/frontend/transfer.jsx:766` / `:782` |
| "Import questions" | `transfer.jsx:769` / `:785` |
| "Questions for Confluence (this site)" | `qa/src/lib/import-sources.js:409` |
| "Continue" | `transfer.jsx:285` / `:296` |
| "AskSpace" in de space-instellingen | `qa/manifest.yml:10-17` |
| Grens van 100 antwoorden | `qa/src/lib/import.js:27`, `qa/src/lib/qfc-cloud-plan.js:163`, `qa/src/resolvers/index.js:2543-2546` / `:2737-2740` |

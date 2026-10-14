# Gidsenplan: de 10 beste onderwerpen voor de komende 2 weken

Stand 14 oktober 2026. 6 onderwerpen voor AskSpace (Q&A en kennisdelen in Confluence Cloud),
4 voor MailView (e-mail in Jira, JSM en Confluence). Gesorteerd op verwachte waarde: hoe goed
het onderwerp naar een app leidt, hoeveel bewijs er is dat mensen het zoeken, en hoe weinig het
overlapt met wat er al staat.

## Wat ik niet kan meten

- **Zoekvolume.** Geen toegang tot een zoekwoordtool of Google-data. Het bewijs hieronder is een
  vervanging: hoeveel vragen in de Atlassian Community en hoeveel Atlassian-supportartikelen en
  -tickets over het onderwerp gaan. Dat is één zoekopdracht per onderwerp, dus een ondergrens, geen
  telling.
- **Concurrentie in Google.** Niet te zien welke pagina's nu bovenaan staan of hoe moeilijk het is
  ze in te halen.
- **Wat een gids oplevert.** Geen data over bezoekers of installaties per pagina. Advies: Google
  Search Console koppelen aan dortus.com (Thijs moet het domein verifiëren). Dan zijn vertoningen
  en kliks per gids na een paar weken wel te meten.
- **De bronnen zelf.** De Atlassian-sites zijn vanuit de ontwikkelomgeving geblokkeerd; ik las de
  zoekresultaten, niet de pagina's. Bij het schrijven van elke gids opnieuw nalopen.

## Wat er al staat (geen dubbele zoekintentie)

| Pagina | Zoekintentie |
|---|---|
| `confluence-cloud-qa-options.html` | Q&A in Confluence Cloud: welke opties er zijn |
| `build-faq-confluence-cloud.html` (#28) | Een FAQ bouwen in Confluence Cloud |
| `stack-internal-vs-confluence-qa.html` (#29) | Stack Internal tegenover Q&A in Confluence |
| `askspace-vs-questions-for-confluence.html` (#30) | Alternatief voor Questions for Confluence, vergelijking |
| `export-questions-for-confluence-cloud.html` (#31) | QfC Cloud-data exporteren |
| `confluence-cloud-storage-full.html` (#33) | Confluence Cloud-opslag vol |
| `jsm-not-creating-requests-from-email.html` (#36) | JSM maakt geen request van een e-mail |
| `find-unused-attachments-confluence.html` (#25) | Ongebruikte bijlagen in Confluence |
| `open-msg-eml-in-jira.html`, `open-msg-eml-in-confluence.html` | .msg/.eml lezen in Jira of Confluence |
| `attach-outlook-email-to-jira.html` | Een Outlook-mail aan een Jira-werkitem hangen |
| `forwarding-email-jira-service-management.html` | Mails doorsturen naar JSM |
| `email-attachments-missing-jira-service-management.html` | Bijlagen van e-mailverzoeken ontbreken |
| `phishing-reports-jira-service-management.html` | Phishingmeldingen in JSM |
| `migration-email-attachments-jira.html` | E-mailbijlagen na een Jira-migratie |
| `msg-vs-eml.html` | Verschil .msg en .eml |

## Overzicht

| # | App | Titel | Zoekterm | Bewijs | Waarde |
|---|---|---|---|---|---|
| 1 | AskSpace | Moving Questions for Confluence from Data Center to Cloud | migrate questions for confluence to cloud | Atlassian-ticket zonder migratiepad + 3 Atlassian-artikelen | hoog |
| 2 | MailView | How to save an Outlook email to a Confluence page | save outlook email to confluence | 9 Community-vragen | hoog |
| 3 | MailView | How to see the original email behind a Jira Service Management request | jsm view original email headers | 5 Community-vragen + 2 Atlassian-artikelen | hoog |
| 4 | AskSpace | Stop answering the same questions in Slack: keep them in Confluence | slack questions to confluence | 6 Community-vragen | middel-hoog |
| 5 | AskSpace | How to keep track of open questions in Confluence page comments | confluence unresolved comments | 1 Atlassian-artikel + 2 Community-vragen | middel |
| 6 | AskSpace | Can you limit who answers in Questions for Confluence? | questions for confluence restrict who can answer | 3 Community-vragen + 1 Atlassian-ticket | middel |
| 7 | MailView | Email replies create new tickets in Jira Service Management | jsm email reply creates new ticket | 7 Community-vragen + 2 Atlassian-artikelen | middel (traffic, zwakke link naar de app) |
| 8 | MailView | How to create Jira work items from email (Jira, not JSM) | create jira issue from email | 1 Atlassian-artikel + 6 Community-vragen | middel |
| 9 | AskSpace | How to import an FAQ from a spreadsheet into Confluence | import faq excel confluence | 4 Community-vragen, niet FAQ-specifiek | laag-middel |
| 10 | AskSpace | One place for a team's questions in Confluence | confluence team questions | 4 Community-vragen | laag |

## De onderwerpen

### 1. Moving Questions for Confluence from Data Center to Cloud (AskSpace)

- **Zoekterm:** migrate questions for confluence to cloud (ook: questions for confluence cloud migration).
- **Bewijs:**
  - [MIG-106: Support the Migration of Questions for Confluence](https://jira.atlassian.com/browse/MIG-106): volgens de zoekresultaten is er geen export- of importpad van Server naar Cloud.
  - [Confluence pre-migration checklist](https://support.atlassian.com/migration/docs/confluence-pre-migration-checklist/): laat je controleren of Questions geïnstalleerd is.
  - [What migrates with the Confluence Cloud Migration Assistant](https://support.atlassian.com/migration/docs/what-migrates-with-the-confluence-cloud-migration-assistant/).
  - [Migrate from Confluence Cloud to Data Center](https://support.atlassian.com/confluence-cloud/docs/migrate-from-confluence-cloud-to-server/): Questions-data kan de andere kant op ook niet mee.
- **Niet al gedekt:** #31 gaat over exporteren uit Cloud, #30 is een vergelijking. Deze gids is voor teams die midden in een migratie zitten: een ander moment en een andere vraag.
- **Naar de app, zonder te pushen:** eerst wat Atlassian zegt en wat je zelf kunt (de REST-export op Data Center, opnieuw opbouwen). Daarna, met disclosure: AskSpace importeert het JSON-bestand van Questions for Confluence op Server of Data Center, met een preview en een undo (`import-sources.js`, bron `qfc-dc`, op de productiecommit `8ec23cc`).
- **Eerst nagaan:** het helptekstje noemt `?limit=700`. Uitzoeken hoe de import omgaat met meer dan 700 vragen, voordat de gids iets belooft.

### 2. How to save an Outlook email to a Confluence page (MailView for Confluence)

- **Zoekterm:** save outlook email to confluence (ook: embed outlook email in confluence page).
- **Bewijs:** 9 Community-vragen:
  - [Copy attachment from Outlook Mail to Confluence](https://community.atlassian.com/forums/Confluence-questions/Copy-attachment-from-Outlook-Mail-to-Confluence/qaq-p/961953)
  - [How can i get my outlook mails into confluence?](https://community.atlassian.com/t5/Confluence-questions/How-can-i-get-my-outlook-mails-into-confluence/qaq-p/677560)
  - [Drag and drop of attachments from outlook to confluence page doesn't work as expected](https://community.atlassian.com/t5/Confluence-questions/Drag-and-drop-of-attachments-from-outlook-to-confluence-page/qaq-p/1081335)
  - [How can I include an email in a page in Confluence](https://community.atlassian.com/t5/Answers-Developer-Questions/How-can-I-include-an-email-in-a-page-in-Confluence/qaq-p/561394)
  - [Display an email as a page in confluence](https://community.atlassian.com/forums/Confluence-questions/Display-an-email-as-a-page-in-confluence/qaq-p/1860743)
  - [Embed Outlook email.msg file into a confluence page](https://community.atlassian.com/forums/Confluence-questions/Embed-Outlook-email-msg-file-into-a-confluence-page/qaq-p/2644504)
  - [Integration between Microsoft Outlook and Confluence](https://community.atlassian.com/forums/Confluence-questions/Integration-between-Microsoft-Outlook-and-Confluence/qaq-p/849379)
  - [Can Outlook messages be uploaded and/or shared in Confluence?](https://community.atlassian.com/forums/Confluence-questions/Can-Outlook-messages-be-uploaded-and-or-shared-in-Confluence/qaq-p/2272674)
  - [Email to Confluence](https://community.atlassian.com/forums/Confluence-questions/Email-to-Confluence/qaq-p/2105663)
- **Niet al gedekt:** `open-msg-eml-in-confluence.html` gaat over het lezen van een bijlage die er al hangt. Deze gids gaat een stap eerder: hoe krijg je de mail op de pagina. Denk aan slepen (werkt niet), opslaan als .msg, printen naar PDF of plakken. Het is hetzelfde paar als `attach-outlook-email-to-jira` en `open-msg-eml-in-jira` voor Jira.
- **Naar de app, zonder te pushen:** de gratis routes eerst, met wat elk verliest (bijlagen, opmaak, headers). Daarna, met disclosure: een geüploade .msg/.eml toont MailView for Confluence als de e-mail op de pagina, ook in de PDF/Word-export.
- **Timing:** MailView for Confluence wacht nog op goedkeuring (rond 24 oktober). Tot dan alleen een link naar mailview-confluence.html.

### 3. How to see the original email behind a Jira Service Management request (MailView)

- **Zoekterm:** jsm view original email headers (ook: attach original email to ticket jira).
- **Bewijs:**
  - Community-vragen:
    - [Email header information (receiver, send date)](https://community.atlassian.com/forums/Jira-Service-Management/Email-header-information-receiver-send-date/qaq-p/1525651)
    - [Emailed request - attach original email to the ticket](https://community.atlassian.com/forums/Jira-questions/Emailed-request-attach-original-email-to-the-ticket/qaq-p/2878567)
    - [Viewing Source Email for Service Desk Tickets](https://community.atlassian.com/forums/Jira-Service-Management/Viewing-Source-Email-for-Service-Desk-Tickets/qaq-p/930821)
    - [How can I see which email address customers emailed](https://community.atlassian.com/forums/Jira-Service-Management/How-can-I-see-which-email-address-customers-emailed/qaq-p/2875830)
    - [Adding the original email in the issue attachments](https://community.atlassian.com/forums/Jira-Service-Management/Adding-the-original-email-in-the-issue-attachments/qaq-p/1618872)
  - Atlassian:
    - [View email logs for your service project](https://support.atlassian.com/jira-service-management-cloud/docs/view-email-logs-for-your-service-project/)
    - [View the email processing and connectivity logs](https://support.atlassian.com/jira-service-management-cloud/docs/view-the-email-processing-and-connectivity-logs/)
- **Niet al gedekt, wel deels:**
  - `email-attachments-missing-…` (sectie 6) en #36 noemen het downloaden van de ruwe mail, maar als bijzaak.
  - Deze gids gaat over de headers zelf: wie stuurde het echt, via welke servers, voor bewijs en phishing.
  - Bij het schrijven verwijzen, niet herhalen.
- **Naar de app, zonder te pushen:** de route zonder app eerst. Een projectbeheerder downloadt de .eml uit het e-maillogboek en opent die in een mailprogramma. Daarna, met disclosure: hang de .eml aan het werkitem, dan toont MailView de headers en de check voor iedereen die het werkitem kan zien.
- **Eerlijk zijn over:** MailView haalt de originele mail niet zelf op. Iemand met beheerrechten moet hem downloaden en aanhangen.

### 4. Stop answering the same questions in Slack: keep them in Confluence (AskSpace)

- **Zoekterm:** slack questions to confluence (ook: capture slack answers in confluence).
- **Bewijs:** 6 Community-vragen:
  - [Capturing knowledge sharing happening in Slack into Confluence pages](https://community.atlassian.com/forums/Confluence-questions/Capturing-knowledge-sharing-happening-in-Slack-into-Confluence/qaq-p/1324432)
  - [Can I push a Slack thread to Confluence Question?](https://community.atlassian.com/forums/Confluence-questions/Can-I-push-a-Slack-thread-to-Confluence-Question/qaq-p/1099291)
  - [Can I push a Slack thread or question to Confluence Question?](https://community.atlassian.com/forums/Confluence-questions/Can-I-push-a-Slack-thread-or-question-to-Confluence-Question/qaq-p/2318187)
  - [Confluence FAQ Slack Bot](https://community.atlassian.com/t5/Confluence-questions/Confluence-FAQ-Slack-Bot/qaq-p/1767672)
  - [Best integration for Questions, Jira and Slack?](https://community.atlassian.com/forums/Confluence-questions/Best-integration-for-Questions-Jira-and-Slack/qaq-p/1290108)
  - [Create confluence article from slack post/thread](https://community.atlassian.com/forums/Confluence-questions/Create-confluence-article-from-slack-post-thread/qaq-p/2270067)
- **Niet al gedekt:** #29 gaat over een betaalde Q&A-tool naast Confluence. Deze gids gaat over gewoonten: hoe je terugkerende chatvragen naar één plek krijgt. #28 (FAQ) noemt Slack niet.
- **Naar de app, zonder te pushen:** werkwijze eerst (vaste plek, linken in plaats van herhalen, een FAQ). Daarna AskSpace als die plek, met disclosure.
- **Eerlijk zijn over:** AskSpace heeft geen Slack-koppeling en praat met niets buiten Atlassian. Dat moet er letterlijk staan.

### 5. How to keep track of open questions in Confluence page comments (AskSpace)

- **Zoekterm:** confluence unresolved comments (ook: confluence resolve page comments).
- **Bewijs:**
  - Atlassian: [Comment on pages, live docs, whiteboards, blog posts, and slides](https://support.atlassian.com/confluence-cloud/docs/comment-on-pages-and-blog-posts/). Inline comments kun je resolven en filteren.
  - Community-vragen: [How to "resolve" general comments?](https://community.atlassian.com/forums/Confluence-questions/How-to-quot-resolve-quot-general-comments/qaq-p/3099310) en [How can you search for unresolved comments](https://community.atlassian.com/t5/Confluence-Cloud-questions/How-can-you-search-for-unresolved-comments/qaq-p/1232028).
- **Niet al gedekt:** de Q&A-gids noemt "a page with comments" in één alinea, en #28 noemt reacties als nadeel. Deze gids is een echte how-to voor wie nu met reacties werkt.
- **Naar de app, zonder te pushen:** eerst wat Confluence zelf kan (resolven, filteren in het reactiepaneel). Daarna het punt waarop reacties niet meer volstaan, en AskSpace met de lijst "Unanswered" en het paginablok, met disclosure.

### 6. Can you limit who answers in Questions for Confluence? (AskSpace)

- **Zoekterm:** questions for confluence restrict who can answer.
- **Bewijs:**
  - Community-vragen:
    - [Restricting answers permission in Question for Confluence add-on](https://community.atlassian.com/forums/discussion/1912325/restricting-answers-permission-in-question-for-confluence-add-on)
    - [Can Questions permissions be restricted on a "Space" basis?](https://community.atlassian.com/t5/Confluence-questions/Can-Questions-permissions-be-restricted-on-a-quot-Space-quot/qaq-p/1686605)
    - [How can I restrict the space in the ask question form to global space](https://community.atlassian.com/t5/Questions-for-Confluence/How-can-I-restrict-the-space-in-the-ask-question-form-to-global/qaq-p/1221598)
  - Atlassian-ticket CONFCLOUD-57675 (volgens de zoekresultaten: beheerders willen vragen stellen beperken tot bepaalde spaces).
- **Overlap:** #30 noemt dit als één regel in de tabel. Dit wordt een korte, gerichte how-to op een vraag die mensen letterlijk stellen. Eerst wat in QfC wél kan: View, Add en Delete per space, of Questions uitzetten in een space.
- **Naar de app, zonder te pushen:** pas daarna, met disclosure: AskSpace regelt vragen en antwoorden apart per space. Link naar #30 voor de rest.

### 7. Email replies create new tickets in Jira Service Management (MailView, vertrouwen)

- **Zoekterm:** jsm email reply creates new ticket.
- **Bewijs:**
  - 7 Community-vragen:
    - [Customer replying creates an email request instead of comment](https://community.atlassian.com/forums/Jira-Service-Management/Customer-replying-creates-an-email-request-instead-of-comment-on/qaq-p/2330780)
    - [Jira service desk issues create new issue on reply to email](https://community.atlassian.com/forums/Jira-Service-Management/Jira-service-desk-issues-create-new-issue-on-reply-to-email/qaq-p/1267220)
    - [Email replies are creating new tickets instead of adding as comments](https://community.atlassian.com/forums/Jira-Service-Management/Email-replies-are-creating-new-tickets-instead-of-adding-as/qaq-p/862049)
    - [Why jira creates new issue when replying to my email](https://community.atlassian.com/forums/Jira-Service-Management/Why-jira-creates-new-issue-when-replying-to-my-email/qaq-p/2150064)
    - [How do I get email replies to update a JSM Request](https://community.atlassian.com/forums/Jira-Service-Management/How-do-I-get-email-replies-to-update-a-JSM-Request/qaq-p/2502900)
    - [How can I prevent duplicate tickets when customers reply…](https://community.atlassian.com/forums/Jira-Service-Management/How-can-I-prevent-duplicate-tickets-when-customers-reply-to-an/qaq-p/3143076)
    - [Service Desk is creating a new ticket for a reply email](https://community.atlassian.com/forums/Jira-Service-Management/Service-Desk-is-creating-a-new-ticket-for-a-reply-email/qaq-p/750901)
  - Atlassian: [How to process email replies to closed requests as new requests](https://support.atlassian.com/jira/kb/how-to-process-email-replies-to-closed-requests-as-new-requests/).
- **Niet al gedekt:** #36 sluit dit expliciet uit ("a different problem"). Deze gids is het vervolg, met een link vanuit #36.
- **Naar de app:** zwak, en dat is eerlijk. MailView lost dit niet op. Deze gids is er voor vertrouwen en bezoekers van JSM-beheerders. MailView alleen in het kaartje onderaan.
- **Eerst nagaan:** de beste bron in de zoekresultaten was een Data Center-artikel. Voor Cloud moet er een eigen Atlassian-bron zijn, anders de gids niet schrijven.

### 8. How to create Jira work items from email (Jira, not JSM) (MailView)

- **Zoekterm:** create jira issue from email.
- **Bewijs:**
  - Atlassian: [Create work items and comments from email](https://support.atlassian.com/jira-cloud-administration/docs/create-issues-and-comments-from-email/).
  - Community-vragen:
    - [Creating a task from email in jira software](https://community.atlassian.com/forums/Jira-questions/Creating-a-task-from-email-in-jira-software/qaq-p/1986938)
    - [create task from email in Jira](https://community.atlassian.com/forums/Jira-questions/create-task-from-email-in-Jira/qaq-p/1184467)
    - [Creating jira tickets via email](https://community.atlassian.com/forums/Jira-questions/Creating-jira-tickets-via-email/qaq-p/1769735)
    - [Creating issues via email for multiple projects](https://community.atlassian.com/forums/Jira-questions/Creating-issues-for-via-email-for-multiple-projects-with-Jira/qaq-p/2337254)
    - [Create Jira issue from email with specific from address or subject text](https://community.atlassian.com/t5/Jira-Cloud-Admins-questions/Create-Jira-issue-from-email-with-specific-from-address-or/qaq-p/1861532)
    - [How can I create a Task from an email?](https://community.atlassian.com/forums/Jira-questions/How-can-I-create-a-Task-from-an-email/qaq-p/2558736)
- **Niet al gedekt:** alle e-mailgidsen nu gaan over JSM of over het lezen van bijlagen. Gewone Jira heeft een eigen mail handler en eigen beperkingen (alleen gelicentieerde gebruikers, één werkitemtype per handler).
- **Naar de app, zonder te pushen:** wie een mail als bijlage doorstuurt, krijgt een .eml op het werkitem. Dat is het punt waar `open-msg-eml-in-jira` en MailView logisch volgen.

### 9. How to import an FAQ from a spreadsheet into Confluence (AskSpace)

- **Zoekterm:** import faq excel confluence.
- **Bewijs (algemeen, niet FAQ-specifiek):**
  - [How to copy content from excel to Confluence](https://community.atlassian.com/forums/Confluence-questions/How-to-copy-content-from-excel-to-Confluence/qaq-p/2752973)
  - [How can I import an excel workbook into a confluence page](https://community.atlassian.com/t5/Confluence-questions/How-can-I-import-an-excel-workbook-into-a-confluence-page/qaq-p/1976807)
  - [Automatically import Excel rows to individual Confluence pages](https://community.atlassian.com/forums/Confluence-questions/Automatically-import-Excel-rows-to-individual-Confluence-pages/qaq-p/2764533)
  - [Importing from .xls to Confluence Cloud page template](https://community.atlassian.com/forums/Confluence-questions/Importing-from-xls-to-Confluence-Cloud-page-template/qaq-p/1620016)
- **Niet al gedekt:** #28 gaat over een FAQ opbouwen, niet over een bestaande lijst overzetten.
- **Naar de app, zonder te pushen:** de gratis routes eerst (plakken als tabel, een pagina per rij). Daarna, met disclosure: AskSpace importeert een simpele CSV met één vraag per rij en hooguit één antwoord (`import-sources.js`, bron `simple-csv`).
- **Eerlijk zijn over:** hooguit één antwoord per vraag.
- **Waarom laag:** het bewijs is algemeen, niet specifiek voor een FAQ.

### 10. One place for a team's questions in Confluence (AskSpace)

- **Zoekterm:** confluence team questions (ook: confluence ask a question form).
- **Bewijs:** 4 Community-vragen:
  - [Submit, collect and review requests in Confluence](https://community.atlassian.com/forums/Confluence-questions/Submit-collect-and-review-requests-in-Confluence/qaq-p/1396102)
  - [Public question and answers on confluence cloud](https://community.atlassian.com/forums/Confluence-questions/Public-question-and-answers-on-confluence-cloud/qaq-p/708705)
  - [Configuring and Using Questions for Confluence](https://community.atlassian.com/forums/Confluence-questions/Configuring-and-Using-Questions-for-Confluence/qaq-p/934749)
  - [Project Request Form](https://community.atlassian.com/forums/Confluence-questions/Project-Request-Form/qaq-p/2136456)
- **Overlap:** de Q&A-gids en #28 (optie 3) raken dit al.
- **Waarom laag:** alleen schrijven met een duidelijk eigen invalshoek, bijvoorbeeld een team dat nu vragen via privéberichten krijgt.
- **Naar de app:** AskSpace per space, met het blok "AskSpace questions" op de startpagina van het team.

## Voorstel voor de twee weken

- **Week 1:** 1, 4 en 5 (AskSpace; vindbaarheid van AskSpace is nu het grootste probleem) en 3 (MailView Jira, kan vóór de lancering met een link naar mailview.html).
- **Week 2:** 2 (na de goedkeuring van MailView for Confluence), 6, 7 en 8.
- **Alleen als er tijd over is:** 9 en 10.
- **Daarnaast:** Google Search Console koppelen. Zonder meting blijft deze volgorde een onderbouwde gok.

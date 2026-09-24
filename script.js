/* Language toggle (FR default, EN), theme toggle. No dependencies. */
(function () {
  "use strict";

  var MAILTO_FR = "mailto:laurans.contact@gmail.com?subject=" + encodeURIComponent("Mission freelance iOS / Laravel");
  var MAILTO_EN = "mailto:laurans.contact@gmail.com?subject=" + encodeURIComponent("Freelance project: iOS / Laravel");

  var I18N = {
    fr: {
      "meta.title": "Antoine Laurans — Développeur freelance iOS & Laravel",
      "meta.description": "Développeur freelance iOS (Swift/SwiftUI) et back-end Laravel à Montpellier. Ex-Crédit Agricole. Applications iOS, API Laravel, automatisation. Disponible 2-3 jours par semaine, en remote.",
      "skip": "Aller au contenu",
      "theme.toggle": "Changer de thème",
      "nav.services": "Services",
      "nav.projects": "Projets",
      "nav.experience": "Parcours",
      "nav.skills": "Compétences",
      "nav.contact": "Contact",

      "hero.role": "Développeur freelance iOS &amp; Laravel",
      "hero.tagline": "Je conçois et livre des applications iOS et des back-ends Laravel fiables, testés et documentés. Ancien développeur iOS chez Crédit Agricole Technologies &amp; Services, formé à Epitech et à California State University.",
      "hero.cta_email": "M'écrire",
      "hero.cta_projects": "Voir les projets",
      "hero.availability": "Disponible 2-3 j/semaine · Remote",
      "hero.photo_alt": "Portrait d'Antoine Laurans",

      "services.title": "Services",
      "services.lede": "Trois offres packagées, un tarif journalier unique de 350 €. Devis fixe après un cadrage court.",
      "services.from": "à partir de",
      "services.deliverables": "Livrables",
      "services.ios.title": "Application iOS de A à Z",
      "services.ios.sub": "MVP ou nouvelle fonctionnalité",
      "services.ios.desc": "Conception, développement Swift/SwiftUI, intégration API, tests, publication sur l'App Store.",
      "services.ios.deliv": "code source, build TestFlight, guide de publication.",
      "services.ios.price": "2 800 €",
      "services.ios.basis": "MVP 8 jours, ou 350 € / jour",
      "services.laravel.title": "API et back-office Laravel",
      "services.laravel.sub": "Le back-end de votre produit",
      "services.laravel.desc": "API REST documentée, authentification, rôles, paiements Stripe, interface d'administration, tests, déploiement.",
      "services.laravel.deliv": "dépôt Git, documentation OpenAPI, environnement de production.",
      "services.laravel.price": "1 750 €",
      "services.laravel.basis": "5 jours, ou 350 € / jour",
      "services.auto.title": "Automatisation et outils internes",
      "services.auto.sub": "Moins de tâches manuelles",
      "services.auto.desc": "Scripts, intégrations d'API, scraping, synchronisation de données, reporting automatisé.",
      "services.auto.deliv": "script ou service déployé, documentation d'exploitation.",
      "services.auto.price": "700 €",
      "services.auto.basis": "2 jours, ou 350 € / jour",
      "services.maint.title": "Reprise et maintenance d'une app existante",
      "services.maint.desc": "Audit d'une journée à 350 € avec plan d'action chiffré, puis forfait mensuel pour les évolutions et le suivi.",

      "projects.title": "Projets",
      "projects.lede": "Des produits menés de bout en bout, du back-end à l'app publiée.",
      "projects.vinea": "Plateforme d'investissement viticole : API Laravel 12, front React, applications iOS en SwiftUI et Android en Kotlin.",
      "projects.stravax": "Application iOS de coaching sportif : un coach IA qui s'appuie sur vos séances synchronisées depuis Garmin et Strava.",
      "projects.facturo": "SaaS de facturation multi-tenant : Next.js 15, NestJS, Prisma, PostgreSQL et paiements Stripe.",
      "projects.imposteur": "Jeu de soirée mobile-first en PWA, écrit en TypeScript avec Vite ; le moteur de jeu est testé par simulation.",
      "projects.vitiscrap": "Scraper Python multi-thread avec synchronisation automatique des résultats vers Google Sheets.",
      "projects.tag_ai": "IA",
      "projects.view_code": "Voir le code sur GitHub",

      "exp.title": "Parcours",
      "exp.lede": "Banque, santé publique, école d'ingénierie logicielle.",
      "exp.ca.when": "avr. – août 2025",
      "exp.ca.role": "Développeur applications mobiles iOS",
      "exp.ca.b1": "Fonctionnalités Swift dans une application bancaire à fort trafic.",
      "exp.ca.b2": "Outil de communication audio/vidéo en WebRTC.",
      "exp.ca.b3": "Revues de code et tests au sein d'une équipe agile.",
      "exp.chu.when": "août – déc. 2023",
      "exp.chu.role": "Développeur outils et systèmes",
      "exp.chu.b1": "Automatisations, intégrations d'API et traitement de données pour les équipes hospitalières.",
      "exp.chu.b2": "Contraintes de sécurité et RGPD propres au secteur de la santé.",
      "exp.edu": "Formation",
      "exp.epitech.role": "Master en développement logiciel",
      "exp.csusm.role": "Année d'échange, États-Unis",

      "skills.title": "Compétences",
      "skills.lede": "iOS d'abord, Laravel ensuite, et ce qu'il faut autour pour livrer.",
      "skills.mobile": "Mobile",
      "skills.backend": "Back-end",
      "skills.web": "Web",
      "skills.automation": "Automatisation",
      "skills.tooling": "Outillage",
      "skills.rest": "API REST",
      "skills.scraping": "Scraping",
      "skills.api_integration": "Intégration d'API",
      "skills.vps": "Déploiement VPS",
      "skills.agile": "Méthodes agiles",
      "skills.gdpr": "RGPD",

      "faq.title": "Questions fréquentes",
      "faq.q1": "Travaillez-vous à distance ?",
      "faq.a1": "Oui, 100 % remote possible, avec un point hebdomadaire en visio. Sur site ponctuellement à Montpellier ou Paris.",
      "faq.q2": "Livrez-vous le code source ?",
      "faq.a2": "Toujours. Le dépôt Git est à votre nom dès le premier jour.",
      "faq.q3": "Pouvez-vous reprendre une app existante ?",
      "faq.a3": "Oui : audit d'une journée, puis plan d'action chiffré.",
      "faq.q4": "Publiez-vous sur l'App Store ?",
      "faq.a4": "Oui, jusqu'à la mise en ligne et la première mise à jour.",
      "faq.q5": "Quel délai pour un MVP iOS ?",
      "faq.a5": "Comptez 2 à 4 semaines selon le périmètre, à 2-3 jours par semaine.",

      "contact.title": "Contact",
      "contact.lede": "Un projet iOS ou Laravel en tête ? Écrivez-moi quelques lignes sur le besoin et le calendrier, je réponds sous 24 h ouvrées.",
      "contact.mailto": MAILTO_FR,
      "contact.cv": "Télécharger mon CV",
      "contact.where": "Montpellier, France. Remote France et Europe, déplacements possibles à Paris. Micro-entreprise, SIRET sur demande.",
      "foot.made": "Site statique, sans cookies ni traqueurs."
    },
    en: {
      "meta.title": "Antoine Laurans — Freelance iOS & Laravel Developer",
      "meta.description": "Freelance iOS developer (Swift/SwiftUI) and Laravel back-end developer based in Montpellier, France. Formerly at Crédit Agricole. iOS apps, Laravel APIs, automation. Available 2–3 days a week, remote.",
      "skip": "Skip to content",
      "theme.toggle": "Switch theme",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "hero.role": "Freelance iOS &amp; Laravel developer",
      "hero.tagline": "I build and ship reliable iOS apps and Laravel back-ends, tested and documented. Former iOS developer at Crédit Agricole Technologies &amp; Services, trained at Epitech and California State University.",
      "hero.cta_email": "Email me",
      "hero.cta_projects": "See projects",
      "hero.availability": "Available 2–3 days/week · Remote",
      "hero.photo_alt": "Portrait of Antoine Laurans",

      "services.title": "Services",
      "services.lede": "Three packaged offers at a single rate of $40/hour. Fixed quote after a short scoping call.",
      "services.from": "from",
      "services.deliverables": "Deliverables",
      "services.ios.title": "iOS app from scratch",
      "services.ios.sub": "MVP or new feature",
      "services.ios.desc": "Swift/SwiftUI development, API integration, tests, App Store submission.",
      "services.ios.deliv": "source code, TestFlight build, release guide.",
      "services.ios.price": "$2,900",
      "services.ios.basis": "8-day MVP, or $40/h",
      "services.laravel.title": "Laravel API and admin back-office",
      "services.laravel.sub": "The back-end behind your product",
      "services.laravel.desc": "Documented REST API, authentication, roles, Stripe payments, admin panel, tests, deployment.",
      "services.laravel.deliv": "Git repo, OpenAPI docs, production environment.",
      "services.laravel.price": "$1,800",
      "services.laravel.basis": "5 days, or $40/h",
      "services.auto.title": "Automation and internal tools",
      "services.auto.sub": "Fewer manual tasks",
      "services.auto.desc": "Scripts, API integrations, scraping, data sync, automated reporting.",
      "services.auto.deliv": "deployed script or service, ops documentation.",
      "services.auto.price": "$700",
      "services.auto.basis": "2 days, or $40/h",
      "services.maint.title": "Takeover and maintenance of an existing app",
      "services.maint.desc": "One-day audit at $350 with a costed action plan, then a monthly retainer for improvements and support.",

      "projects.title": "Projects",
      "projects.lede": "Products carried end to end, from the back-end to the published app.",
      "projects.vinea": "Wine-investment platform: Laravel 12 API, React front-end, iOS app in SwiftUI and Android app in Kotlin.",
      "projects.stravax": "iOS running-coach app: an AI coach built on your workouts synced from Garmin and Strava.",
      "projects.facturo": "Multi-tenant invoicing SaaS: Next.js 15, NestJS, Prisma, PostgreSQL and Stripe payments.",
      "projects.imposteur": "Mobile-first party game as a PWA, written in TypeScript with Vite; the game engine is tested by simulation.",
      "projects.vitiscrap": "Multi-threaded Python scraper with automatic sync of results to Google Sheets.",
      "projects.tag_ai": "AI",
      "projects.view_code": "View the code on GitHub",

      "exp.title": "Experience",
      "exp.lede": "Banking, public healthcare, software engineering school.",
      "exp.ca.when": "Apr – Aug 2025",
      "exp.ca.role": "iOS mobile developer",
      "exp.ca.b1": "Swift features in a high-traffic banking app.",
      "exp.ca.b2": "WebRTC audio/video communication tool.",
      "exp.ca.b3": "Code reviews and testing in an agile team.",
      "exp.chu.when": "Aug – Dec 2023",
      "exp.chu.role": "Tools and systems developer",
      "exp.chu.b1": "Automations, API integrations and data processing for hospital teams.",
      "exp.chu.b2": "Healthcare security and GDPR constraints.",
      "exp.edu": "Education",
      "exp.epitech.role": "Master's in software engineering",
      "exp.csusm.role": "Exchange year, United States",

      "skills.title": "Skills",
      "skills.lede": "iOS first, Laravel second, and what it takes around them to ship.",
      "skills.mobile": "Mobile",
      "skills.backend": "Back-end",
      "skills.web": "Web",
      "skills.automation": "Automation",
      "skills.tooling": "Tooling",
      "skills.rest": "REST API",
      "skills.scraping": "Web scraping",
      "skills.api_integration": "API integration",
      "skills.vps": "Linux VPS deployment",
      "skills.agile": "Agile",
      "skills.gdpr": "GDPR",

      "faq.title": "Frequently asked questions",
      "faq.q1": "Do you work remotely?",
      "faq.a1": "Yes, fully remote, with a weekly video check-in. Occasional on-site days in Montpellier or Paris.",
      "faq.q2": "Do I get the source code?",
      "faq.a2": "Always. The Git repo is in your name from day one.",
      "faq.q3": "Can you take over an existing app?",
      "faq.a3": "Yes: a one-day audit, then a costed action plan.",
      "faq.q4": "Do you publish to the App Store?",
      "faq.a4": "Yes, through release and the first update.",
      "faq.q5": "How long for an iOS MVP?",
      "faq.a5": "Typically 2–4 weeks depending on scope, at 2–3 days a week.",

      "contact.title": "Contact",
      "contact.lede": "Have an iOS or Laravel project in mind? Send me a few lines about the need and the timeline; I reply within one business day.",
      "contact.mailto": MAILTO_EN,
      "contact.cv": "Download my CV",
      "contact.where": "Montpellier, France (CET). Remote across France and Europe, on-site in Paris on request. Sole proprietorship, registration number on request.",
      "foot.made": "Static site, no cookies, no trackers."
    }
  };

  var LANG_KEY = "al-lang";
  var THEME_KEY = "al-theme";

  function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ignore */ } }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.description"]);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", dict["meta.title"]);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) nodes[i].innerHTML = dict[key];
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var specs = attrNodes[j].getAttribute("data-i18n-attr").split(";");
      for (var k = 0; k < specs.length; k++) {
        var parts = specs[k].split(":");
        var attr = parts[0].trim();
        var akey = parts.slice(1).join(":").trim();
        if (attr && dict[akey] !== undefined) attrNodes[j].setAttribute(attr, dict[akey]);
      }
    }

    var buttons = document.querySelectorAll("[data-lang]");
    for (var b = 0; b < buttons.length; b++) {
      buttons[b].setAttribute("aria-pressed", buttons[b].getAttribute("data-lang") === lang ? "true" : "false");
    }
  }

  function initialLang() {
    var param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "fr") return param;
    var saved = safeGet(LANG_KEY);
    if (saved === "en" || saved === "fr") return saved;
    return "fr";
  }

  function setLang(lang, persist) {
    applyLang(lang);
    if (persist) safeSet(LANG_KEY, lang);
  }

  function currentTheme() {
    var forced = document.documentElement.getAttribute("data-theme");
    if (forced) return forced;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f2f5f4" : "#0b1c27");
    safeSet(THEME_KEY, theme);
  }

  // Init
  var savedTheme = safeGet(THEME_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  var lang = initialLang();
  setLang(lang, false);
  // Keep the ?lang choice for the next visit as well
  if (new URLSearchParams(window.location.search).get("lang")) safeSet(LANG_KEY, lang);

  var langButtons = document.querySelectorAll("[data-lang]");
  for (var i = 0; i < langButtons.length; i++) {
    langButtons[i].addEventListener("click", function () {
      var next = this.getAttribute("data-lang");
      setLang(next, true);
      if (window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        if (next === "fr") url.searchParams.delete("lang"); else url.searchParams.set("lang", next);
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      }
    });
  }

  var themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      setTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }
})();

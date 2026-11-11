import type { Lang } from "./site";

const fr = {
  dir: "ltr" as "ltr" | "rtl",
  meta: {
    title: "Attendify – Logiciel de pointage et gestion des présences",
    description: "Pointage entrée/sortie, absences, retards et rapports PDF : Attendify simplifie la gestion des présences en Algérie.",
  },
  nav: { home: "Accueil", features: "Fonctionnalités", pricing: "Tarifs", faq: "FAQ", blog: "Blog", contact: "Contact", download: "Télécharger", trial: "Essai gratuit", menu: "Menu" },
  hero: {
    badge: "Attendify, de vraies solutions pour de vrais problèmes de présence",
    title: "Le pointage et la gestion des présences, enfin simples",
    sub: "Une borne de pointage à l'entrée, une application de gestion au bureau RH : deux applications Windows, une seule vision claire de votre équipe.",
    cta1: "Essai gratuit", cta2: "Voir la démo",
    proof: "entreprises nous font déjà confiance",
    kiosk: "Entrée enregistrée", employee: "Amine B.", live: "En direct",
    dash: "Tableau de bord", present: "Présents", late: "Retards", absent: "Absences",
    in: "Entrée", out: "Sortie",
  },
  trust: { employees: "employés gérés", punches: "pointages traités", satisfaction: "de satisfaction du support" },
  demo: { title: "Voyez Attendify en action", sub: "Une démo vidéo de l'application de gestion et de la borne de pointage.", play: "Lire la vidéo" },
  how: {
    title: "Pas seulement une application, un écosystème",
    sub: "Les employés pointent sur la borne, les RH pilotent tout depuis le bureau.",
    kioskT: "Application de pointage", kioskD: "Installée sur une tablette à la porte. Les employés enregistrent leur entrée et sortie et reçoivent les convocations.",
    mgmtT: "Application de gestion", mgmtD: "Le poste du service RH : pointages, absences, appels, statistiques, rapports et droits d'accès.",
    custT: "Solutions sur mesure", custD: "Paie, pointage sur des sites distants (usine dans une ville, administration dans une autre) et modules adaptés à votre organisation.",
    steps: [["Installez la borne", "Installez l'application de pointage sur une tablette Windows."], ["Enregistrez vos employés", "Créez les fiches, groupes, départements et plannings."], ["Suivez tout en direct", "Les pointages remontent aussitôt au tableau de bord."]],
  },
  features: {
    title: "15 modules pour tout piloter", sub: "Filtrez par catégorie et découvrez ce que fait chaque module.",
    all: "Tous", more: "En savoir plus", close: "Fermer",
    cats: { punch: "Pointage", people: "Employés", calls: "Appels & questionnaires", plan: "Plannings & absences", stats: "Statistiques & alertes", reports: "Rapports & badges", admin: "Administration & sécurité" },
  },
  spot: {
    callsT: "Un système d'appels qui atteint vraiment vos employés", callsB: ["L'administration envoie une convocation", "Elle s'affiche au prochain pointage", "L'employé répond aux questionnaires"],
    alertsT: "Des alertes intelligentes, sans surveillance manuelle", alertsB: ["Pointage irrégulier détecté", "Travail hors planning", "Temps supplémentaire", "Appel vu ou non vu"],
    alertCards: [["Pointage irrégulier", "Sortie sans entrée – K. Meziane", "danger"], ["Hors planning", "Travail samedi – S. Haddad", "warning"], ["Temps supplémentaire", "+1h20 – N. Belkacem", "success"], ["Appel non vu", "Convocation – R. Khelifi", "warning"]],
    statsT: "Des statistiques claires sur les absences", statsB: ["Absences justifiées et non justifiées", "Filtres par groupe, département, fonction", "Sélection personnalisée des employés"],
    group: "Groupe", dept: "Département", func: "Fonction", custom: "Sélection libre", just: "Justifiées", unjust: "Non justifiées",
  },
  reports: {
    title: "7 rapports PDF et un éditeur de badges", sub: "Exportez en un clic, ou importez votre propre modèle PDF et placez vous-même les champs de données par glisser-déposer.",
    list: ["Appels", "Questionnaires", "Absences justifiées / non justifiées", "Heures sup. / manquantes", "Jours de travail supplémentaires", "Retards", "Autorisations d'entrée/sortie"],
    tplT: "Votre modèle PDF", tplD: "Importez votre modèle et placez chaque champ où vous le souhaitez.", tplFields: ["Nom", "Département", "Date", "Retards"], badgeT: "Éditeur de badges", badgeD: "Glissez les champs sur le badge.", fields: ["Photo", "Nom", "Fonction", "Code-barres"],
  },
  security: {
    title: "Sécurité et traçabilité", sub: "Chaque action est enregistrée, chaque droit est contrôlé.",
    roles: "Rôles et privilèges", audit: "Historique des opérations", archive: "Archive des employés",
    rolesD: "Définissez qui peut voir, modifier ou supprimer.", auditD: "Chaque ajout, modification ou suppression d'un pointage (entrée / sortie) est enregistré, avec recherche et période.", archiveD: "Archivez sans perdre l'historique.",
    cols: ["Ajouter", "Modifier", "Supprimer"], roleRows: ["Administrateur", "RH", "Superviseur"],
    log: [["Ajout pointage entrée", "admin", "09:12"], ["Modification pointage sortie", "rh.sara", "09:48"], ["Suppression pointage entrée", "admin", "10:05"]],
  },
  pricing: {
    title: "Une licence à vie, adaptée à votre organisation", note: "Paiement unique, sans abonnement", popular: "Populaire", cta: "Contactez-nous pour la personnalisation",
    plans: [
      { name: "Standard", tag: "Pour les petites entreprises", features: ["Jusqu'à 30 employés", "2 licences : Version Admin + Version Pointeuse", "6 mois de support technique gratuit", "Installation et saisie de données gratuites"], extras: ["Évolutif selon les besoins"] },
      { name: "Pro", tag: "Pour les équipes en croissance", features: ["Jusqu'à 200 employés", "5 licences (Admin + Pointeuse)", "12 mois de support technique gratuit", "Toutes les fonctionnalités du système incluses", "Installation et saisie de données gratuites"], extras: ["Évolutif selon les besoins"] },
      { name: "Entreprise", tag: "Pour les grandes organisations et multi-sites", features: ["Employés illimités", "Licences illimitées", "12 mois de support technique gratuit", "12 mois de mises à jour gratuites", "Toutes les fonctionnalités du système incluses", "Installation et saisie de données gratuites"], extras: ["Évolutif selon les besoins", "Support prioritaire"] },
    ] as { name: string; tag: string; features: string[]; extras: string[] }[],
  },
  testi: {
    title: "Ils ont simplifié leurs présences",
    items: [["Attendify nous a fait gagner des heures de saisie chaque semaine.", "Nadia B.", "Responsable RH", "Atlas BTP", "Industrie"], ["Les retards sont enfin visibles et justifiés correctement.", "Karim M.", "Gérant", "Medina Retail", "Commerce"], ["Les convocations sur la borne sont très pratiques pour l'administration.", "Samia H.", "Directrice administrative", "Wilaya Services", "Administration"]],
  },
  faq: { title: "Questions fréquentes" },
  blog: {
    title: "Derniers articles", all: "Voir tous les articles", read: "min de lecture",
    posts: [["Comment choisir son système de pointage", "Les critères essentiels avant d'équiper votre entreprise.", "Guide", "12 oct. 2026", 5], ["Gérer retards et absences avec équité", "Des règles claires pour un climat de confiance.", "RH", "28 sept. 2026", 6], ["Justifier les absences avec des documents", "Un processus simple pour garder des preuves fiables.", "Absences", "10 sept. 2026", 4]],
  },
  cta: {
    title: "Prêt à transformer votre", title2: "gestion de la présence ?",
    sub: "Rejoignez les entreprises leaders qui gèrent la présence de centaines d'employés avec Attendify — rationalisez votre gestion du personnel et augmentez la productivité.",
    items: [["Essai gratuit de 14 jours","Essayez le système d'abord — achetez en toute confiance"],["Installation sur site","Nous viendrons installer le système pour vous"],["Support technique","Nous sommes là pour vous aider"],["Licence à vie","Achat unique — utilisation illimitée"]],
    demo: "Demander une démo",
  },
  contact: { title: "Parlons de votre projet", email: "E-mail", phone: "Téléphones", address: "Adresse", whatsapp: "Écrire sur WhatsApp", download: "Télécharger les applications" },
  footer: {
    desc: "Le logiciel algérien de pointage et de gestion des présences.", product: "Produit", resources: "Ressources", company: "Entreprise", legal: "Légal",
    privacy: "Politique de confidentialité", terms: "Conditions d'utilisation", partners: "Partenaires", rights: "Tous droits réservés.",
  },
};

type Dict = typeof fr;

const en: Dict = {
  dir: "ltr",
  meta: { title: "Attendify – Time & attendance software", description: "In/out punches, absences, delays and PDF reports: Attendify makes attendance management simple in Algeria." },
  nav: { home: "Home", features: "Features", pricing: "Pricing", faq: "FAQ", blog: "Blog", contact: "Contact", download: "Download", trial: "Free trial", menu: "Menu" },
  hero: {
    badge: "Attendify, real solutions for real life attendance problems",
    title: "Time tracking and attendance, finally simple",
    sub: "A check-in kiosk at the door, a management app in the HR office: two Windows apps, one clear view of your team.",
    cta1: "Free trial", cta2: "See the demo", proof: "companies already trust us",
    kiosk: "Check-in recorded", employee: "Amine B.", live: "Live",
    dash: "Dashboard", present: "Present", late: "Late", absent: "Absent", in: "In", out: "Out",
  },
  trust: { employees: "employees managed", punches: "punches processed", satisfaction: "support satisfaction" },
  demo: { title: "See Attendify in action", sub: "A video demo of the management app and the check-in kiosk.", play: "Play video" },
  how: {
    title: "Not just an app, it's an ecosystem", sub: "Employees punch at the kiosk, HR runs everything from the office.",
    kioskT: "Check-in app", kioskD: "Installed on a tablet at the door. Employees clock in and out and receive summons.",
    mgmtT: "Management app", mgmtD: "The HR workstation: punches, absences, calls, statistics, reports and access rights.",
    custT: "Tailor-made solutions", custD: "Payroll, check-in for remote sites (factory in one city, administration in another) and modules adapted to your organization.",
    steps: [["Install the kiosk", "Install the check-in app on a Windows tablet."], ["Register employees", "Create profiles, groups, departments and schedules."], ["Follow it live", "Punches reach the dashboard instantly."]],
  },
  features: {
    title: "15 modules to run it all", sub: "Filter by category and see what each module does.", all: "All", more: "Learn more", close: "Close",
    cats: { punch: "Punching", people: "Employees", calls: "Calls & questionnaires", plan: "Schedules & absences", stats: "Statistics & alerts", reports: "Reports & badges", admin: "Admin & security" },
  },
  spot: {
    callsT: "A call system that actually reaches employees", callsB: ["Admin sends a summons", "It appears at the next punch", "Employee answers questionnaires"],
    alertsT: "Smart alerts, no manual monitoring", alertsB: ["Irregular punch detected", "Off-schedule work", "Extra time", "Call seen or not seen"],
    alertCards: [["Irregular punch", "Out without in – K. Meziane", "danger"], ["Off schedule", "Saturday work – S. Haddad", "warning"], ["Extra time", "+1h20 – N. Belkacem", "success"], ["Call not seen", "Summons – R. Khelifi", "warning"]],
    statsT: "Clear absence statistics", statsB: ["Justified and unjustified absences", "Filters by group, department, function", "Custom employee selection"],
    group: "Group", dept: "Department", func: "Function", custom: "Custom selection", just: "Justified", unjust: "Unjustified",
  },
  reports: {
    title: "7 PDF reports and a badge designer", sub: "Export in one click, or upload your own PDF template and drag and drop the data fields exactly where you want them.",
    list: ["Calls", "Questionnaires", "Justified / unjustified absences", "Overtime / short time", "Extra work days", "Delays", "In/out authorizations"],
    tplT: "Your PDF template", tplD: "Upload your template and place each field where you want it.", tplFields: ["Name", "Department", "Date", "Delays"], badgeT: "Badge designer", badgeD: "Drag fields onto the badge.", fields: ["Photo", "Name", "Function", "Barcode"],
  },
  security: {
    title: "Security and traceability", sub: "Every action is logged, every right is controlled.",
    roles: "Roles & privileges", audit: "Operations history", archive: "Employee archive",
    rolesD: "Define who can view, edit or delete.", auditD: "Every add, edit or delete of an attendance punch (in / out) is recorded, with search and date range.", archiveD: "Archive without losing history.",
    cols: ["Add", "Edit", "Delete"], roleRows: ["Administrator", "HR", "Supervisor"],
    log: [["In punch added", "admin", "09:12"], ["Out punch edited", "rh.sara", "09:48"], ["In punch deleted", "admin", "10:05"]],
  },
  pricing: {
    title: "A lifetime license that fits your organization", note: "One-time payment, no subscription", popular: "Popular", cta: "Contact us for customization",
    plans: [
      { name: "Standard", tag: "For small businesses", features: ["Up to 30 employees", "2 licenses: Admin version + Check-in version", "6 months of free technical support", "Free installation and data entry"], extras: ["Scalable as needed"] },
      { name: "Pro", tag: "For growing teams", features: ["Up to 200 employees", "5 licenses (Admin + Check-in)", "12 months of free technical support", "All system features included", "Free installation and data entry"], extras: ["Scalable as needed"] },
      { name: "Enterprise", tag: "For large and multi-site organizations", features: ["Unlimited employees", "Unlimited licenses", "12 months of free technical support", "12 months of free updates", "All system features included", "Free installation and data entry"], extras: ["Scalable as needed", "Priority support"] },
    ],
  },
  testi: {
    title: "They simplified attendance",
    items: [["Attendify saves us hours of data entry every week.", "Nadia B.", "HR Manager", "Atlas BTP", "Industry"], ["Delays are finally visible and properly justified.", "Karim M.", "Owner", "Medina Retail", "Retail"], ["Summons on the kiosk are very handy for administration.", "Samia H.", "Admin Director", "Wilaya Services", "Administration"]],
  },
  faq: { title: "Frequently asked questions" },
  blog: {
    title: "Latest articles", all: "View all articles", read: "min read",
    posts: [["How to choose a time-and-attendance system", "Key criteria before equipping your company.", "Guide", "Oct 12, 2026", 5], ["Handling delays and absences fairly", "Clear rules for a climate of trust.", "HR", "Sep 28, 2026", 6], ["Justifying absences with documents", "A simple process to keep reliable proof.", "Absences", "Sep 10, 2026", 4]],
  },
  cta: {
    title: "Ready to transform your", title2: "attendance management?",
    sub: "Join the leading companies managing the attendance of hundreds of employees with Attendify — streamline your workforce management and boost productivity.",
    items: [["14-day free trial","Try the system first — buy with confidence"],["On-site installation","We will come and install the system for you"],["Technical support","We are here to help you"],["Lifetime license","One-time purchase — unlimited use"]],
    demo: "Request a demo",
  },
  contact: { title: "Let's talk about your project", email: "Email", phone: "Phones", address: "Address", whatsapp: "Chat on WhatsApp", download: "Download the apps" },
  footer: {
    desc: "The Algerian time-and-attendance software.", product: "Product", resources: "Resources", company: "Company", legal: "Legal",
    privacy: "Privacy policy", terms: "Terms of use", partners: "Partners", rights: "All rights reserved.",
  },
};

const ar: Dict = {
  dir: "rtl",
  meta: { title: "Attendify – برنامج تسيير الحضور والغياب", description: "تسجيل الدخول والخروج والغيابات والتأخرات وتقارير PDF: Attendify يبسّط تسيير المواظبة في الجزائر." },
  nav: { home: "الرئيسية", features: "المزايا", pricing: "الأسعار", faq: "الأسئلة", blog: "المدونة", contact: "اتصل بنا", download: "تحميل", trial: "تجربة مجانية", menu: "القائمة" },
  hero: {
    badge: "Attendify، حلول حقيقية لمشاكل الحضور الحقيقية",
    title: "تسجيل الحضور وتسيير الغيابات، أخيراً ببساطة",
    sub: "محطة تسجيل عند المدخل وتطبيق تسيير في مكتب الموارد البشرية: تطبيقان لويندوز ورؤية واحدة واضحة لفريقك.",
    cta1: "تجربة مجانية", cta2: "شاهد العرض", proof: "مؤسسة تثق بنا",
    kiosk: "تم تسجيل الدخول", employee: "أمين ب.", live: "مباشر",
    dash: "لوحة القيادة", present: "الحاضرون", late: "المتأخرون", absent: "الغائبون", in: "دخول", out: "خروج",
  },
  trust: { employees: "موظف مسيَّر", punches: "تسجيل معالج", satisfaction: "رضا عن الدعم" },
  demo: { title: "شاهد Attendify أثناء العمل", sub: "عرض فيديو لتطبيق التسيير ومحطة التسجيل.", play: "تشغيل الفيديو" },
  how: {
    title: "ليس مجرد تطبيق، بل منظومة متكاملة", sub: "الموظفون يسجلون عند المحطة والموارد البشرية تتحكم من المكتب.",
    kioskT: "تطبيق التسجيل", kioskD: "مثبت على لوحة عند الباب. يسجل الموظفون الدخول والخروج ويستقبلون الاستدعاءات.",
    mgmtT: "تطبيق التسيير", mgmtD: "محطة الموارد البشرية: التسجيلات والغيابات والاستدعاءات والإحصائيات والتقارير والصلاحيات.",
    custT: "حلول مخصصة", custD: "الأجور، والتسجيل في مواقع بعيدة (مصنع في مدينة وإدارة في أخرى)، ووحدات تناسب مؤسستك.",
    steps: [["ثبّت المحطة", "ثبّت تطبيق التسجيل على لوحة ويندوز."], ["سجّل موظفيك", "أنشئ الملفات والأفواج والأقسام والجداول."], ["تابع مباشرة", "تصل التسجيلات فوراً إلى لوحة القيادة."]],
  },
  features: {
    title: "15 وحدة للتحكم في كل شيء", sub: "صنّف حسب الفئة واكتشف عمل كل وحدة.", all: "الكل", more: "اعرف أكثر", close: "إغلاق",
    cats: { punch: "التسجيل", people: "الموظفون", calls: "الاستدعاءات والاستبيانات", plan: "الجداول والغيابات", stats: "الإحصائيات والتنبيهات", reports: "التقارير والشارات", admin: "الإدارة والأمان" },
  },
  spot: {
    callsT: "نظام استدعاء يصل فعلاً إلى موظفيك", callsB: ["ترسل الإدارة استدعاء", "يظهر عند التسجيل التالي", "يجيب الموظف على الاستبيانات"],
    alertsT: "تنبيهات ذكية دون مراقبة يدوية", alertsB: ["اكتشاف تسجيل غير منتظم", "عمل خارج الجدول", "وقت إضافي", "استدعاء مشاهد أو غير مشاهد"],
    alertCards: [["تسجيل غير منتظم", "خروج دون دخول – ك. مزيان", "danger"], ["خارج الجدول", "عمل يوم السبت – س. حداد", "warning"], ["وقت إضافي", "+1س20 – ن. بلقاسم", "success"], ["استدعاء غير مشاهد", "استدعاء – ر. خليفي", "warning"]],
    statsT: "إحصائيات واضحة للغيابات", statsB: ["غيابات مبررة وغير مبررة", "تصفية حسب الفوج والقسم والوظيفة", "اختيار حر للموظفين"],
    group: "الفوج", dept: "القسم", func: "الوظيفة", custom: "اختيار حر", just: "مبررة", unjust: "غير مبررة",
  },
  reports: {
    title: "7 تقارير PDF ومصمم شارات", sub: "صدّر بنقرة، أو ارفع نموذج PDF الخاص بك وضع حقول البيانات حيث تريد بالسحب والإفلات.",
    list: ["الاستدعاءات", "الاستبيانات", "الغيابات المبررة / غير المبررة", "الساعات الإضافية / الناقصة", "أيام العمل الإضافية", "التأخرات", "تراخيص الدخول والخروج"],
    tplT: "نموذج PDF الخاص بك", tplD: "ارفع نموذجك وضع كل حقل في المكان الذي تريده.", tplFields: ["الاسم", "القسم", "التاريخ", "التأخرات"], badgeT: "مصمم الشارات", badgeD: "اسحب الحقول إلى الشارة.", fields: ["صورة", "الاسم", "الوظيفة", "الباركود"],
  },
  security: {
    title: "الأمان والتتبع", sub: "كل إجراء مسجل وكل صلاحية مضبوطة.",
    roles: "الأدوار والصلاحيات", audit: "سجل العمليات", archive: "أرشيف الموظفين",
    rolesD: "حدد من يمكنه العرض أو التعديل أو الحذف.", auditD: "كل إضافة أو تعديل أو حذف لتسجيل حضور (دخول / خروج) مسجل، مع بحث وفترة زمنية.", archiveD: "أرشف دون فقدان السجل.",
    cols: ["إضافة", "تعديل", "حذف"], roleRows: ["مدير", "موارد بشرية", "مشرف"],
    log: [["إضافة تسجيل دخول", "admin", "09:12"], ["تعديل تسجيل خروج", "rh.sara", "09:48"], ["حذف تسجيل دخول", "admin", "10:05"]],
  },
  pricing: {
    title: "رخصة مدى الحياة تناسب مؤسستك", note: "دفعة واحدة دون اشتراك", popular: "الأكثر طلباً", cta: "اتصل بنا للتخصيص",
    plans: [
      { name: "Standard", tag: "للمؤسسات الصغيرة", features: ["حتى 30 موظفاً", "رخصتان: نسخة الإدارة + نسخة التسجيل", "6 أشهر من الدعم التقني المجاني", "تثبيت وإدخال بيانات مجاني"], extras: ["قابل للتطوير حسب الحاجة"] },
      { name: "Pro", tag: "للفرق المتنامية", features: ["حتى 200 موظف", "5 رخص (إدارة + تسجيل)", "12 شهراً من الدعم التقني المجاني", "جميع مزايا النظام متضمنة", "تثبيت وإدخال بيانات مجاني"], extras: ["قابل للتطوير حسب الحاجة"] },
      { name: "Enterprise", tag: "للمؤسسات الكبرى متعددة المواقع", features: ["عدد غير محدود من الموظفين", "رخص غير محدودة", "12 شهراً من الدعم التقني المجاني", "12 شهراً من التحديثات المجانية", "جميع مزايا النظام متضمنة", "تثبيت وإدخال بيانات مجاني"], extras: ["قابل للتطوير حسب الحاجة", "دعم ذو أولوية"] },
    ],
  },
  testi: {
    title: "بسّطوا تسيير الحضور",
    items: [["وفّر لنا Attendify ساعات من الإدخال كل أسبوع.", "نادية ب.", "مسؤولة الموارد البشرية", "Atlas BTP", "صناعة"], ["أصبحت التأخرات مرئية ومبررة بشكل صحيح.", "كريم م.", "مسير", "Medina Retail", "تجارة"], ["الاستدعاءات على المحطة مفيدة جداً للإدارة.", "سامية ح.", "مديرة إدارية", "Wilaya Services", "إدارة"]],
  },
  faq: { title: "الأسئلة الشائعة" },
  blog: {
    title: "أحدث المقالات", all: "عرض كل المقالات", read: "دقائق قراءة",
    posts: [["كيف تختار نظام الحضور المناسب", "المعايير الأساسية قبل تجهيز مؤسستك.", "دليل", "12 أكتوبر 2026", 5], ["تسيير التأخرات والغيابات بإنصاف", "قواعد واضحة لمناخ من الثقة.", "موارد بشرية", "28 سبتمبر 2026", 6], ["تبرير الغيابات بالوثائق", "عملية بسيطة للاحتفاظ بإثباتات موثوقة.", "غيابات", "10 سبتمبر 2026", 4]],
  },
  cta: {
    title: "جاهز لتحويل", title2: "تسيير الحضور لديك؟",
    sub: "انضم إلى المؤسسات الرائدة التي تسيّر حضور مئات الموظفين مع Attendify — بسّط تسيير الموارد البشرية وارفع الإنتاجية.",
    items: [["تجربة مجانية لمدة 14 يوماً","جرّب النظام أولاً — واشترِ بثقة"],["تثبيت في موقعك","سنأتي لتثبيت النظام لك"],["دعم تقني","نحن هنا لمساعدتك"],["رخصة مدى الحياة","شراء لمرة واحدة — استعمال غير محدود"]],
    demo: "اطلب عرضاً",
  },
  contact: { title: "لنتحدث عن مشروعك", email: "البريد", phone: "الهواتف", address: "العنوان", whatsapp: "راسلنا على واتساب", download: "تحميل التطبيقات" },
  footer: {
    desc: "البرنامج الجزائري لتسجيل الحضور وتسيير المواظبة.", product: "المنتج", resources: "موارد", company: "المؤسسة", legal: "قانوني",
    privacy: "سياسة الخصوصية", terms: "شروط الاستخدام", partners: "الشركاء", rights: "جميع الحقوق محفوظة.",
  },
};

export const dict: Record<Lang, Dict> = { fr, en, ar };
export type { Dict };

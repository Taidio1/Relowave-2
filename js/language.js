const locales = ["en-GB", "pl-PL", "uk-UA"];
const languageMap = {
  "en-GB": "eng",
  "pl-PL": "pl",
  "uk-UA": "uk"
};

const languages = {
  pl: {
    //nav
    stronaglowna: "Strona Główna",
    onas: "O Nas",
    uslugi: "Usługi",
    kontakt: "Kontakt",
    //Welocome Page
    Tytul: "Witaj w ",
    Tytul2: "Relowave",
    slogan: "Ułatwimy Twój proces legalizacji pobytu w Polsce",
    btnind: "Zapoznaj się  >",
    btnind2: "Zapoznaj się  >",


    //Services
    Tytul1SE: "Nasze Usługi",
    Tytul2SE: "CZYM SIĘ ZAJMUJEMY",
    Lista1SE: "Legalizacja pobytu",
    Lista2SE: "Zezwolenia na pracę",
    Lista3SE: "Uzyskanie obywatelstwa",
    Lista4SE: "Konsultacje",
    Lista5SE: "Wymiana prawa jazdy",
    Lista6SE: "Uznanie zagranicznych aktów stanu cywilnego",

    Opis1AS: "Pobyt tymczasowy, Pobyt stały,Pobyt długoterminowy",
    Opis2AS: "Wspieramy w uzyskaniu wszelkich koniecznych zezwoleń na pracę.",
    Opis3AS: "Oferujemy kompleksawą pomoc w procesie uzyskania obywatelstwa.",
    Opis4AS: "Oferujemy profesjonalne wsparcie na każdym etapie procesu legalizacji.",
    Opis5AS: "Pomoc w procesie wymiany zagranicznego prawa jazdy na polskie.",
    Opis6AS: "Pomoc w uznaniu zagranicznych aktów stanu cywilnego.",

    //About Us
    titleAU: "O NAS",
    podtytulAU: "Specjalizujemy się w legalizacji pobytu cudzoziemców w Polsce. Od lat pomagamy naszym klientom w uzyskaniu wszelkich niezbędnych zezwoleń i dokumentów, dbając o najwyższą jakość świadczonych usług.",

    Opis1AU: "Ponad 7 lat doświadczenia w branży",
    Opis2AU: "Indywidualne podejscie. do każdego klienta.",
    Opis3AU: "Kompleksowa obsługa",
    Opis4AU: "Stały kontakt z klientem",
    btnMore: "Zapoznaj się",

    //Opinie
    OpinieT: "Opinie",

    //Plany
    TytulPl: "NASZE PAKIETY",
    PodTytulPl: "Dostosowane do Twoich potrzeb",
    Title1Pl: "KONSULTACJA INTRO",
    Title2Pl: "KONSULTACJA FULL ",
    Title3Pl: "BASIC",
    Title4Pl: "BASIC PLUS",
    Title5Pl: "RELOCATION UNLIMITED",

    Kons1Pl: "Konsultacja telefoniczna wstępna / 15min",

    Basic1Pl: "Wstępna konsultacja",
    KonWs2: "Analiza dokumentów",


    //Pakiet Basic
    Rodz1Pl: "Konsultacja wstępna rozszerzona",
    Rodz2Pl: "Analiza dokumentów",
    Rodz3Pl: "Przygotowanie pakietu dokumentów",
    Rodz4Pl: "Informacje na temat wymaganych dokumentów",

    //Pakiet Basic Plus
    BasicP1: "Konsultacja wstępna",
    BasicP2: "Analiza dokumentów",
    BasicP3: "Umówienia terminu w urzędzie",
    BasicP4: "Pełnomocnictwo",
    BasicP5: "Wspólna wizyta w Urzędzie Wojewódzkim w celu złożenia wniosku",
    BasicP6: "Nadzór nad przebiegiem sprawy oraz pilnowanie terminów",
    BasicP7: "Komunikacja z inspektorem w imieniu klienta",
    BasicP8: "Uzupełnienie dokumentów z imieniu klienta",
    BasicP9: "Rezerwacja wizyty dla odbioru karty pobytu",
    BasicP10: "*Cena nie obejmuje opłaty administracyjne",
    BasicP11: "**Cena ostateczna zależy od podstawy składanego wniosku",



    Praca1Pl: "Konsultacja wstępna",
    Praca2Pl: "Analiza dokumentów",
    Praca3Pl: "Pomoc w wyborze optymalnej ścieżki dla relokacji",
    Praca4Pl: "Pomoc w znalezieniu biura nieruchomości, szkoły, przedszkola lub kursu językowego zgodnie z Twoimi wymaganiami.",
    Praca5Pl: "Pomoc w otrzymaniu numeru PESEL",
    Praca6Pl: "Założenie konta bankowego",
    Praca7Pl: "Wymiana zagranicznego prawa jazdy na polskie",
    Praca8Pl: "Pomoc w uzyskaniu pierwszego zezwolenia na pobyt ,czasowy na podstawie pakietu „BASIC PLUS”",
    
    Btn1Pl: "UMÓW SIĘ NA KONSULTACJĘ",
    Btn2Pl: "PAKIET BASIC PLUS",
    Btn3Pl: "UZYSKAJ WYCENE",
    Btn4Pl: "PAKIET BASIC",
    Btn5Pl: "UMÓW SIĘ NA KONSULTACJĘ",

    //Sekcja: Czemy my?
    TytulWU: "CZEMU MY?",
    PodTytulWU: "Dlaczego warto wybrać Relowave?",
    OpisWo: "Wybór odpowiedniej firmy do legalizacji pobytu w Polsce to klucz do sukcesu. Oto kilka powodów, dla których Relowave jest najlepszym wyborem:",
    List1Wu: "Profesjonalizm i Doświadczenie",
    List2Wu: "Szybkość i Efektywność",
    List3Wu: "Indywidualne Podejście",
    List4Wu: "Kompleksowe Usługi",
    List5Wu: "Wsparcie i Doradztwo",

    //Kontakt
    TytulKo: "Nasze Biuro",
    TytulWi: "Napisz do Nas",
    BtnWi: "Wyślij Wiadomość",

    //Footer
    Slogan: "Twój migracyjny konsjerż w Polsce.",
    StronaglownaFO: "Strona Główna",
    OnasFO: "O Nas",
    UslugiFO: "Usługi",
    KontaktFO: "Kontakt",
    SkontFO: "Skontaktuj się",


  },
  eng: {
    //nav
    stronaglowna: "Home Page",
    onas: "About Us",
    uslugi: "Services",
    kontakt: "Contact",
    //Welcome Page
    Tytul: "Welcome to ",
    Tytul2: "Relowave",
    slogan: "We will simplify your residence legalization process in Poland",
    btnind: "Learn more >",
    btnind2: "Learn more >",

    //Services
    Tytul1SE: "Our Services",
    Tytul2SE: "WHAT WE DO",
    Lista1SE: "Residence legalization",
    Lista2SE: "Work permits",
    Lista3SE: "Citizenship acquisition",
    Lista4SE: "Consultations",
    Lista5SE: "Driver's license exchange",
    Lista6SE: "Recognition of foreign civil status documents",

    Opis1AS: "Temporary residence, Permanent residence, Long-term residence",
    Opis2AS: "We assist in obtaining all necessary work permits.",
    Opis3AS: "We offer comprehensive assistance in the citizenship acquisition process.",
    Opis4AS: "We provide professional support at every stage of the legalization process.",
    Opis5AS: "Assistance in the process of exchanging a foreign driver's license for a Polish one.",
    Opis6AS: "Help in recognizing foreign civil status documents.",

    //About Us
    titleAU: "ABOUT US",
    podtytulAU: "We specialize in the legalization of foreigners' residence in Poland. For years, we have been helping our clients obtain all the necessary permits and documents while ensuring the highest quality of services.",

    Opis1AU: "Over 7 years of industry experience",
    Opis2AU: "Individual approach to each client.",
    Opis3AU: "Comprehensive service",
    Opis4AU: "Constant communication with the client",
    btnMore: "Learn more",

    //Opinions
    OpinieT: "Reviews",

    //Plans
    TytulPl: "OUR PACKAGES",
    PodTytulPl: "Tailored to your needs",
    Title1Pl: "INTRO CONSULTATION",
    Title2Pl: "FULL CONSULTATION",
    Title3Pl: "BASIC",
    Title4Pl: "BASIC PLUS",
    Title5Pl: "RELOCATION UNLIMITED",

    Kons1Pl: "Initial phone consultation / 15min",

    Basic1Pl: "Initial consultation",
    KonWs2: "Document analysis",

    //Basic Package
    Rodz1Pl: "Extended initial consultation",
    Rodz2Pl: "Document analysis",
    Rodz3Pl: "Document package preparation",
    Rodz4Pl: "Information about required documents",

    //Basic Plus Package
    BasicP1: "Initial consultation",
    BasicP2: "Document analysis",
    BasicP3: "Scheduling an appointment at the office",
    BasicP4: "Power of attorney",
    BasicP5: "Joint visit to the Voivodeship Office to submit the application",
    BasicP6: "Supervision of the case progress and deadline tracking",
    BasicP7: "Communication with the inspector on behalf of the client",
    BasicP8: "Supplementing documents on behalf of the client",
    BasicP9: "Appointment reservation for residence card collection",
    BasicP10: "*The price does not include administrative fees",
    BasicP11: "**The final price depends on the basis of the submitted application",

    Praca1Pl: "Initial consultation",
    Praca2Pl: "Document analysis",
    Praca3Pl: "Help in choosing the optimal relocation path",
    Praca4Pl: "Support in finding a real estate office, school/kindergarten for children, or language course based on your requirements",
    Praca5Pl: "Assistance in obtaining a PESEL number",
    Praca6Pl: "Opening a bank account",
    Praca7Pl: "Exchanging a foreign driver's license for a Polish one",
    Praca8Pl: "Help in obtaining the first temporary residence permit based on the “BASIC PLUS” package",

    Btn1Pl: "SCHEDULE A CONSULTATION",
    Btn2Pl: "BASIC PLUS PACKAGE",
    Btn3Pl: "GET A QUOTE",
    Btn4Pl: "BASIC PACKAGE",
    Btn5Pl: "SCHEDULE A CONSULTATION",

    //Section: Why Us?
    TytulWU: "WHY US?",
    PodTytulWU: "Why choose Relowave?",
    OpisWo: "Choosing the right company for residence legalization in Poland is key to success. Here are a few reasons why Relowave is the best choice:",
    List1Wu: "Professionalism and Experience",
    List2Wu: "Speed and Efficiency",
    List3Wu: "Individual Approach",
    List4Wu: "Comprehensive Services",
    List5Wu: "Support and Advice",

    //Contact
    TytulKo: "Our Office",
    TytulWi: "Write to Us",
    BtnWi: "Send Message",

    //Footer
    Slogan: "Your migration concierge in Poland.",
    StronaglownaFO: "Home Page",
    OnasFO: "About Us",
    UslugiFO: "Services",
    KontaktFO: "Contact",
    SkontFO: "Contact Us",


  },
  uk: {
    //nav
    stronaglowna: "Головна сторінка",
    onas: "Про нас",
    uslugi: "Послуги",
    kontakt: "Контакт",
    //Welcome Page
    Tytul: "Ласкаво просимо до ",
    Tytul2: "Relowave",
    slogan: "Ми полегшимо ваш процес легалізації перебування в Польщі",
    btnind: "Дізнатися більше  >",
    btnind2: "Дізнатися більше  >",

    //Services
    Tytul1SE: "Наші послуги",
    Tytul2SE: "ЧИМ МИ ЗАЙМАЄМОСЯ",
    Lista1SE: "Легалізація перебування",
    Lista2SE: "Дозволи на роботу",
    Lista3SE: "Отримання громадянства",
    Lista4SE: "Консультації",
    Lista5SE: "Обмін водійських прав",
    Lista6SE: "Визнання іноземних актів цивільного стану",

    Opis1AS: "Тимчасове перебування, Постійне перебування, Довгострокове перебування",
    Opis2AS: "Допомога у отриманні всіх необхідних дозволів на роботу.",
    Opis3AS: "Пропонуємо комплексну допомогу у процесі отримання громадянства.",
    Opis4AS: "Пропонуємо професійну підтримку на кожному етапі легалізації.",
    Opis5AS: "Допомога в обміні іноземного водійського посвідчення на польське.",
    Opis6AS: "Допомога у визнанні іноземних актів цивільного стану.",

    //About Us
    titleAU: "ПРО НАС",
    podtytulAU: "Ми спеціалізуємося на легалізації перебування іноземців у Польщі. Протягом багатьох років ми допомагаємо нашим клієнтам отримати всі необхідні дозволи та документи, забезпечуючи найвищу якість послуг.",

    Opis1AU: "Більше 7 років досвіду у галузі",
    Opis2AU: "Індивідуальний підхід до кожного клієнта.",
    Opis3AU: "Комплексне обслуговування",
    Opis4AU: "Постійний зв’язок із клієнтом",
    btnMore: "Дізнатися більше",

    //Opinie
    OpinieT: "Відгуки",

    //Plans
    TytulPl: "НАШІ ПАКЕТИ",
    PodTytulPl: "Адаптовані до ваших потреб",
    Title1Pl: "КОНСУЛЬТАЦІЯ INTRO",
    Title2Pl: "КОНСУЛЬТАЦІЯ FULL",
    Title3Pl: "BASIC",
    Title4Pl: "BASIC PLUS",
    Title5Pl: "RELOCATION UNLIMITED",

    Kons1Pl: "Попередня телефонна консультація / 15 хв",

    Basic1Pl: "Попередня консультація",
    KonWs2: "Аналіз документів",

    //Pakiet Basic
    Rodz1Pl: "Розширена початкова консультація",
    Rodz2Pl: "Аналіз документів",
    Rodz3Pl: "Підготовка пакету документів",
    Rodz4Pl: "Інформація про необхідні документи",

    //Pakiet Basic Plus
    BasicP1: "Попередня консультація",
    BasicP2: "Аналіз документів",
    BasicP3: "Запис на прийом в офісі",
    BasicP4: "Довіреність",
    BasicP5: "Спільний візит до Воєводського управління для подачі заяви",
    BasicP6: "Контроль ходу справи та дотримання термінів",
    BasicP7: "Комунікація з інспектором від імені клієнта",
    BasicP8: "Доповнення документів від імені клієнта",
    BasicP9: "Резервація візиту для отримання карти перебування",
    BasicP10: "*Ціна не включає адміністративний збір",
    BasicP11: "**Кінцева ціна залежить від підстави подання заявки",

    Praca1Pl: "Попередня консультація",
    Praca2Pl: "Аналіз документів",
    Praca3Pl: "Допомога у виборі оптимального шляху для релокації",
    Praca4Pl: "Підтримка у пошуку агентства нерухомості, школи/дитячого садка для дітей, мовного курсу на основі ваших вимог",
    Praca5Pl: "Допомога у отриманні номера PESEL",
    Praca6Pl: "Відкриття банківського рахунку",
    Praca7Pl: "Обмін іноземного водійського посвідчення на польське",
    Praca8Pl: "Допомога у отриманні першого дозволу на тимчасове перебування на основі пакету «BASIC PLUS»",

    Btn1Pl: "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ",
    Btn2Pl: "ПАКЕТ BASIC PLUS",
    Btn3Pl: "ОТРИМАТИ ОЦІНКУ",
    Btn4Pl: "ПАКЕТ BASIC",
    Btn5Pl: "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ",

    //Section: Why Us?
    TytulWU: "ЧОМУ МИ?",
    PodTytulWU: "Чому варто обрати Relowave?",
    OpisWo: "Вибір правильної компанії для легалізації перебування у Польщі — ключ до успіху. Ось кілька причин, чому Relowave є найкращим вибором:",
    List1Wu: "Професіоналізм та Досвід",
    List2Wu: "Швидкість та Ефективність",
    List3Wu: "Індивідуальний Підхід",
    List4Wu: "Комплексні Послуги",
    List5Wu: "Підтримка та Консультації",

    //Contact
    TytulKo: "Наш офіс",
    TytulWi: "Напишіть нам",
    BtnWi: "Надіслати повідомлення",

    //Footer
    Slogan: "Ваш міграційний консьєрж у Польщі.",
    StronaglownaFO: "Головна сторінка",
    OnasFO: "Про нас",
    UslugiFO: "Послуги",
    KontaktFO: "Контакт",
    SkontFO: "Зв’язатися",
}

};

function updateTexts(language) {
  //nav
  document.getElementById('stronaglowna').innerText = languages[language].stronaglowna;
  document.getElementById('onas').innerText = languages[language].onas;
  document.getElementById('uslugi').innerText = languages[language].uslugi;
  document.getElementById('kontakt').innerText = languages[language].kontakt;
  //home
  document.getElementById('Tytul').innerText = languages[language].Tytul;
  document.getElementById('Tytul2').innerText = languages[language].Tytul2;
  document.getElementById('slogan').innerText = languages[language].slogan;
  document.getElementById('btnind').innerText = languages[language].btnind;
  document.getElementById('btnind2').innerText = languages[language].btnind2;
  //Servieces 
  document.getElementById('Tytul1SE').innerText = languages[language].Tytul1SE;
  document.getElementById('Tytul2SE').innerText = languages[language].Tytul2SE;

  document.getElementById('Lista1SE').innerText = languages[language].Lista1SE;
  document.getElementById('Lista2SE').innerText = languages[language].Lista2SE;
  document.getElementById('Lista3SE').innerText = languages[language].Lista3SE;
  document.getElementById('Lista4SE').innerText = languages[language].Lista4SE;
  document.getElementById('Lista5SE').innerText = languages[language].Lista5SE;
  document.getElementById('Lista6SE').innerText = languages[language].Lista6SE;

  document.getElementById('Opis1AS').innerText = languages[language].Opis1AS;
  document.getElementById('Opis2AS').innerText = languages[language].Opis2AS;
  document.getElementById('Opis3AS').innerText = languages[language].Opis3AS;
  document.getElementById('Opis4AS').innerText = languages[language].Opis4AS;
  document.getElementById('Opis5AS').innerText = languages[language].Opis5AS;
  document.getElementById('Opis6AS').innerText = languages[language].Opis6AS;

  //About Us
  document.getElementById('titleAU').innerText = languages[language].titleAU;
  document.getElementById('podtytulAU').innerText = languages[language].podtytulAU;
  document.getElementById('Opis1AU').innerText = languages[language].Opis1AU;
  document.getElementById('Opis2AU').innerText = languages[language].Opis2AU;
  document.getElementById('Opis3AU').innerText = languages[language].Opis3AU;
  document.getElementById('Opis4AU').innerText = languages[language].Opis4AU;
  document.getElementById('btnMore').innerText = languages[language].btnMore;
  //Opinie
  document.getElementById('OpinieT').innerText = languages[language].OpinieT;

  //Plany
  document.getElementById('TytulPl').innerText = languages[language].TytulPl;
  document.getElementById('PodTytulPl').innerText = languages[language].PodTytulPl;
  //Tytuły Planów
  document.getElementById('Title1Pl').innerText = languages[language].Title1Pl;
  document.getElementById('Title2Pl').innerText = languages[language].Title2Pl;
  document.getElementById('Title3Pl').innerText = languages[language].Title3Pl;
  document.getElementById('Title4Pl').innerText = languages[language].Title4Pl;
  //Opisy
  document.getElementById('Kons1Pl').innerText = languages[language].Kons1Pl;
  
  //Pakiet Basic
  document.getElementById('Btn4Pl').innerText = languages[language].Btn4Pl;
  document.getElementById('Rodz1Pl').innerText = languages[language].Rodz1Pl;
  document.getElementById('Basic1Pl').innerText = languages[language].Basic1Pl;
  document.getElementById('KonWs2').innerText = languages[language].KonWs2;
  //Praca
  
  //Pakiet Basic Plus
  document.getElementById('Rodz2Pl').innerText = languages[language].Rodz2Pl;
  document.getElementById('Rodz3Pl').innerText = languages[language].Rodz3Pl;
  document.getElementById('Rodz4Pl').innerText = languages[language].Rodz4Pl;
  
  // Basic Plus package elements
  document.getElementById('BasicP1').innerText = languages[language].BasicP1;
  document.getElementById('BasicP2').innerText = languages[language].BasicP2;
  document.getElementById('BasicP3').innerText = languages[language].BasicP3;
  document.getElementById('BasicP4').innerText = languages[language].BasicP4;
  document.getElementById('BasicP5').innerText = languages[language].BasicP5;
  document.getElementById('BasicP6').innerText = languages[language].BasicP6;
  document.getElementById('BasicP7').innerText = languages[language].BasicP7;
  document.getElementById('BasicP8').innerText = languages[language].BasicP8;
  document.getElementById('BasicP9').innerText = languages[language].BasicP9;
  document.getElementById('BasicP10').innerText = languages[language].BasicP10;
  document.getElementById('BasicP11').innerText = languages[language].BasicP11;
  
  
  
  document.getElementById('Praca1Pl').innerText = languages[language].Praca1Pl;
  document.getElementById('Praca2Pl').innerText = languages[language].Praca2Pl;
  document.getElementById('Praca3Pl').innerText = languages[language].Praca3Pl;
  document.getElementById('Praca4Pl').innerText = languages[language].Praca4Pl;
  document.getElementById('Praca5Pl').innerText = languages[language].Praca5Pl;
  document.getElementById('Praca6Pl').innerText = languages[language].Praca6Pl;
  document.getElementById('Praca7Pl').innerText = languages[language].Praca7Pl;
  document.getElementById('Praca8Pl').innerText = languages[language].Praca8Pl;
 
  //Btn
  document.getElementById('Btn1Pl').innerText = languages[language].Btn1Pl;
  document.getElementById('Btn2Pl').innerText = languages[language].Btn2Pl;
  document.getElementById('Btn3Pl').innerText = languages[language].Btn3Pl;
  document.getElementById('Btn5Pl').innerText = languages[language].Btn5Pl;
  //Kontakt
  document.getElementById('TytulWi').innerText = languages[language].TytulWi;
  document.getElementById('TytulKo').innerText = languages[language].TytulKo;
  //Napuisz do nas
  document.getElementById('BtnWi').innerText = languages[language].BtnWi;

  document.getElementById('Slogan').innerText = languages[language].Slogan;
  document.getElementById('StronaglownaFO').innerText = languages[language].StronaglownaFO;
  document.getElementById('OnasFO').innerText = languages[language].OnasFO;
  document.getElementById('UslugiFO').innerText = languages[language].UslugiFO;
  document.getElementById('KontaktFO').innerText = languages[language].KontaktFO;
  document.getElementById('SkontFO').innerText = languages[language].SkontFO;
  




};
function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
    ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
};

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
  const intlLocale = new Intl.Locale(locale);
  const langCode = intlLocale.language.toUpperCase().slice(0, 2); // Get the language code (e.g. "PL", "ENG", "UK")

  dropdownContent.innerHTML = "";
  const otherLocales = locales.filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherIntlLocale = new Intl.Locale(otherLocale);
    const otherLangCode = otherIntlLocale.language.toUpperCase().slice(0, 2);

    const listEl = document.createElement("li");
    listEl.innerHTML = `${otherLangCode} <img src="${getFlagSrc(otherIntlLocale.region)}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("mousedown", function () {
      setSelectedLocale(otherLocale);
      const selectedLanguage = languageMap[otherLocale];
      localStorage.setItem('preferredLanguage', selectedLanguage);
      updateTexts(selectedLanguage);
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(intlLocale.region)}" /> ${langCode} <span class="arrow-down"></span>`;
  const selectedLanguage = languageMap[locale];
  updateTexts(selectedLanguage);
};

setSelectedLocale(locales[0]);
const browserLang = new Intl.Locale(navigator.language).language;
for (const locale of locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang) {
    setSelectedLocale(locale);
  }
};

// Uaktualnij teksty na początkowy język po załadowaniu strony
window.onload = () => {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
  const savedLocale = Object.keys(languageMap).find(key => languageMap[key] === savedLanguage);
  setSelectedLocale(savedLocale || 'pl-PL');
};


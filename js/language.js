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
    Basic2Pl: "Analiza dokumentów",


    //Pakiet Basic
    Rodz1Pl: "Konsultacja wstępna rozszerzona",
    Rodz2Pl: "Analiza dokumentów",
    Rodz3Pl: "Przygotowanie pakietu dokumentów",
    Rodz4Pl: "Informacje na temat wymaganych dokumentów",

    //Pakiet Basic Plus
    Basic1:"Konsultacja wstępna",
    Basic2:"Analiza dokumentów",
    Basic3:"Umówienia terminu w urzędzie",
    Basic4:"Pełnomocnictwo",
    Basic5:"Wspólna wizyta w Urzędzie Wojewódzkim w celu złożenia wniosku",
    Basic6:"Nadzór nad przebiegiem sprawy oraz pilnowanie terminów",
    Basic7:"Komunikacja z inspektorem w imieniu klienta",
    Basic8:"Uzupełnienie dokumentów z imieniu klienta",
    Basic9:"Rezerwacja wizyty dla odbioru karty pobytu",
    Basic10:"*Cena nie obejmuje opłaty administracyjne",
    Basic11:"**Cena ostateczna zależy od podstawy składanego wniosku",



    Praca1Pl: "Konsultacja wstępna",
    Praca2Pl: "Analiza dokumentów",
    Praca3Pl: "Pomoc w wyborze optymalnej ścieżki dla relokacji",
    Praca4Pl: "Wsparcie w poszukiwaniu biura nieruchomości, szkoły/przedszkole dla dzieci, kursu językowego na podstawie twoich wymagań",
    Praca5Pl: "Pomoc w otrzymaniu numeru PESEL",
    Praca6Pl: "Pomoc w otrzymaniu zaświadczenia o zameldowanie",
    Praca7Pl: "Założenie konta bankowego",
    Praca8Pl: "Wymiana zagranicznego prawa jazdy na polskie",
    Praca9Pl: "Pomoc w uzyskaniu pierwszego zezwolenia na pobyt czasowy na podstawie pakietu „BASIC PLUS''",
    
    Btn1Pl: "UMÓW SIĘ NA KONSULTACJĘ",
    Btn2Pl: "UMÓW SIĘ NA KONSULTACJĘ",
    Btn3Pl: "PAKIET BASIC",
    Btn4Pl: "Kontakt",

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
    stronaglowna: "Home",
    onas: "About Us",
    uslugi: "Services",
    kontakt: "Contact",
    //Welcome Page
    Tytul: "Welcome to",
    Tytul2: "Relowave!",
    slogan: "Our mission is to simplify the process of legalizing your stay in Poland",
    btnind: "Read More",

    //Services
    Tytul1SE: "Our Services",
    Tytul2SE: "What We Do",

    Lista1SE: "Residence Legalization",
    Lista2SE: "Work Permits",
    Lista3SE: "Citizenship Acquisition",
    Lista4SE: "Consultations",
    Lista5SE: "Driver's License Permit",
    Lista6SE: "Recognition of foreign civil status records",

    Opis1AS: "Temporary Residence, Permanent Residence, Long-term Residence",
    Opis2AS: "We support in obtaining all necessary work permits.",
    Opis3AS: "We assist in obtaining documents related to citizenship acquisition.",
    Opis4AS: "We offer professional advice at every stage of the legalization process.",
    Opis5AS: "Assistance in obtaining necessary documents for legalizing your driver's license in Poland",
    Opis6AS: "Assistance in recognizing foreign civil status records",

    //About Us
    titleAU: "ABOUT US",
    podtytulAU: "is a company specializing in the legalization of foreigners' stay in Poland. For years, we have been helping our clients obtain all necessary permits and documents, ensuring the highest quality of services provided.",

    Opis1AU: "Over 7 years of industry experience",
    Opis2AU: "Our specialists are experts in the field of residence legalization.",
    Opis3AU: "We tailor our services to the individual needs of each client.",
    btnMore: "Read More",

    //Opinions
    OpinieT: "Reviews",

    //Plans
    TytulPl: "OUR PACKAGES",
    PodTytulPl: "Tailored to Your Needs",
    Title1Pl: "KONSULTACJA INTRO",
    Title2Pl: "KONSULTACJA FULL",
    Title3Pl: "BASIC PLUS",
    Title4Pl: "RELOCATION UNLIMITED",
    
    Kons1Pl: "Initial Consultation",
    Kons2Pl: "Document Analysis",
    Kons3Pl: "Preparation of Document Package",
    Kons4Pl: "Information on Required Documents",
    
    Basic1Pl: "Initial Consultation",
    Basic2Pl: "Document Analysis",
    
    Rodz1Pl: "Initial Consultation",
    Rodz2Pl: "Document Analysis",
    Rodz3Pl: "Appointment Scheduling at the Office",
    Rodz4Pl: "Power of Attorney",
    Rodz5Pl: "Joint Visit to the Voivodeship Office to Submit the Application",
    Rodz6Pl: "Supervision of the Case and Keeping Track of Deadlines",
    Rodz7Pl: "Communication with the Inspector on Behalf of the Client",
    Rodz8Pl: "Completing Documents on Behalf of the Client",
    Rodz9Pl: "Appointment Booking for Residence Card Collection",
    Rodz10Pl: "*Price does not include administrative fees",
    Rodz11Pl: "**Final price depends on the basis of the application",
    
    Praca1Pl: "Initial Consultation",
    Praca2Pl: "Document Analysis",
    Praca3Pl: "Assistance in Choosing the Optimal Path for Relocation",
    Praca4Pl: "Support in Finding a Real Estate Agency, School/Kindergarten for Children, Language Course Based on Your Requirements",
    Praca5Pl: "Assistance in Obtaining a PESEL Number",
    Praca6Pl: "Assistance in Obtaining a Residence Registration Certificate",
    Praca7Pl: "Bank Account Setup",
    Praca8Pl: "Exchange of Foreign Driver's License for Polish One",
    Praca9Pl: "Assistance in Obtaining the First Temporary Residence Permit under the 'BASIC PLUS' Package",
    

    Btn1Pl: "Contact",
    Btn2Pl: "Contact",
    Btn3Pl: "Contact",
    Btn4Pl: "Contact",


    BtnPl: "Contact",

    //Section: Why Us?
    TytulWU: "WHY US?",
    PodTytulWU: "Why Choose Relowave?",
    OpisWo: "Choosing the right company for legalizing your stay in Poland is key to success. Here are some reasons why Relowave is the best choice:",
    List1Wu: "Professionalism and Experience",
    List2Wu: "Speed and Efficiency",
    List3Wu: "Individual Approach",
    List4Wu: "Comprehensive Services",
    List5Wu: "Support and Advisory",

    //Contact
    TytulKo: "Our Office",
    TytulWi: "Write to Us",
    BtnWi: "Send Message",

    //Footer
    Slogan: "Your migration concierge in Poland.",
    StronaglownaFO: "Home",
    OnasFO: "About Us",
    UslugiFO: "Services",
    KontaktFO: "Contact",
    SkontFO: "Get in Touch",

  },
  uk: {
    //nav
    stronaglowna: "Головна сторінка",
    onas: "Про нас",
    uslugi: "Послуги",
    kontakt: "Контакт",
    //Welocome Page
    Tytul: "Ласкаво просимо до",
    Tytul2: "Relowave",
    slogan: "Наша місія - спрощення процесу легалізації перебування в Польщі",
    btnind: "Ознайомся",

    //Services
    Tytul1SE: "Наші Послуги",
    Tytul2SE: "Чим ми займаємося",
    Lista1SE: "Легалізація перебування",
    Lista2SE: "Дозволи на роботу",
    Lista3SE: "Отримання громадянства",
    Lista4SE: "Консультації",
    Lista5SE: "Дозвіл на водіння",
    Lista6SE: "Визнання іноземних актів цивільного стану",

    Opis1AS: "Тимчасове перебування, Постійне перебування, Довгострокове перебування",
    Opis2AS: "Допомагаємо у отриманні всіх необхідних дозволів на роботу.",
    Opis3AS: "Допомагаємо в отриманні документів, пов'язаних з отриманням громадянства.",
    Opis4AS: "Допомога у визнанні іноземних актів цивільного стану.",
    Opis5AS: "Допомога у отриманні необхідних документів для легалізації водійського посвідчення в Польщі",
    Opis6AS: "Допомога у визнанні іноземних актів цивільного стану",

    //About Us
    titleAU: "ПРО НАС",
    podtytulAU: "це компанія, що спеціалізується на легалізації перебування іноземців в Польщі. Ми допомагаємо нашим клієнтам отримати всі необхідні дозволи та документи, дбаючи про найвищу якість послуг.",

    Opis1AU: "Понад 7 років досвіду в галузі",
    Opis2AU: "Наші спеціалісти - експерти в галузі легалізації перебування.",
    Opis3AU: "Ми адаптуємо наші послуги до індивідуальних потреб кожного клієнта.",
    btnMore: "Читати більше",

    //Opinie
    OpinieT: "Відгуки",

    //Plany
    TytulPl: "НАШІ ПАКЕТИ",
    PodTytulPl: "Задовольняючи ваші потреби",
    Title1Pl: "КОНСУЛЬТАЦІЯ",
    Title2Pl: "БАЗОВИЙ",
    Title3Pl: "БАЗОВИЙ ПЛЮС",
    Title4Pl: "РЕЛОКАЦІЯ БЕЗ ОБМЕЖЕНЬ",

    Kons1Pl: "Початкова Консультація",
    Kons2Pl: "Аналіз Документів",
    Kons3Pl: "Підготовка Пакету Документів",
    Kons4Pl: "Інформація про Необхідні Документи",

    Basic1Pl: "Початкова Консультація",
    Basic2Pl: "Аналіз Документів",

    Rodz1Pl: "Початкова Консультація",
    Rodz2Pl: "Аналіз Документів",
    Rodz3Pl: "Запис на прийом в офісі",
    Rodz4Pl: "Довіреність",
    Rodz5Pl: "Спільний Візит до Воєводського Управління для Подання Заявки",
    Rodz6Pl: "Нагляд за Розглядом Справи та Контроль за Дотриманням Термінів",
    Rodz7Pl: "Комунікація з Інспектором від Імені Клієнта",
    Rodz8Pl: "Доповнення Документів від Імені Клієнта",
    Rodz9Pl: "Запис на Прийом для Отримання Карти Побиту",
    Rodz10Pl: "*Ціна не включає адміністративні збори",
    Rodz11Pl: "**Кінцева ціна залежить від підстави подання заявки",

    Praca1Pl: "Початкова Консультація",
    Praca2Pl: "Аналіз Документів",
    Praca3Pl: "Допомога у Виборі Оптимального Шляху для Релокації",
    Praca4Pl: "Підтримка в Пошуку Агенції Нерухомості, Школи/Дитячого Саду для Дітей, Мовного Курсу на Основі Ваших Вимог",
    Praca5Pl: "Допомога в Отриманні Номера PESEL",
    Praca6Pl: "Допомога в Отриманні Свідоцтва про Реєстрацію Місця Проживання",
    Praca7Pl: "Відкриття Банківського Рахунку",
    Praca8Pl: "Обмін Іноземного Водійського Посвідчення на Польське",
    Praca9Pl: "Допомога в Отриманні Першого Тимчасового Дозволу на Проживання за Пакетом 'BASIC PLUS'",


    Btn1Pl: "Контакт",
    Btn2Pl: "Контакт",
    Btn3Pl: "Контакт",
    Btn4Pl: "Контакт",

    //Sekcja: Czemy my?
    TytulWU: "ЧОМУ МИ?",
    PodTytulWU: "Чому варто обрати Relowave?",
    OpisWo: "Вибір відповідної компанії для легалізації перебування в Польщі є ключем до успіху. Ось кілька причин, чому Relowave є найкращим вибором:",
    List1Wu: "Професіоналізм і досвід",
    List2Wu: "Швидкість та ефективність",
    List3Wu: "Індивідуальний підхід",
    List4Wu: "Комплексні послуги",
    List5Wu: "Підтримка та консультації",

    //Kontakt
    TytulKo: "Наш офіс",
    TytulWi: "Напишіть нам",
    BtnWi: "Надіслати повідомлення",

    //footer
    Slogan: "Ваш міграційний консьєрж у Польщі.",
    StronaglownaFO: "Головна сторінка",
    OnasFO: "Про нас",
    UslugiFO: "Послуги",
    KontaktFO: "Контакт",
    SkontFO: "Зв'яжіться з нами",

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
  
  //Pakiet Basic Plus
  document.getElementById('Rodz1Pl').innerText = languages[language].Rodz1Pl;
  document.getElementById('Rodz2Pl').innerText = languages[language].Rodz2Pl;
  document.getElementById('Rodz3Pl').innerText = languages[language].Rodz3Pl;
  document.getElementById('Rodz4Pl').innerText = languages[language].Rodz4Pl;

  // Basic Plus package elements
  document.getElementById('Basic1').innerText = languages[language].Basic1;
  document.getElementById('Basic2').innerText = languages[language].Basic2;
  document.getElementById('Basic3').innerText = languages[language].Basic3;
  document.getElementById('Basic4').innerText = languages[language].Basic4;
  document.getElementById('Basic5').innerText = languages[language].Basic5;
  document.getElementById('Basic6').innerText = languages[language].Basic6;
  document.getElementById('Basic7').innerText = languages[language].Basic7;
  document.getElementById('Basic8').innerText = languages[language].Basic8;
  document.getElementById('Basic9').innerText = languages[language].Basic9;
  document.getElementById('Basic10').innerText = languages[language].Basic10;
  document.getElementById('Basic11').innerText = languages[language].Basic11;

  
  document.getElementById('Basic1PL').innerText = languages[language].Basic2Pl;
  //Praca
  document.getElementById('Praca1Pl').innerText = languages[language].Praca1Pl;
  document.getElementById('Praca2Pl').innerText = languages[language].Praca2Pl;
  document.getElementById('Praca3Pl').innerText = languages[language].Praca3Pl;
  document.getElementById('Praca4Pl').innerText = languages[language].Praca4Pl;
  document.getElementById('Praca5Pl').innerText = languages[language].Praca5Pl;
  document.getElementById('Praca6Pl').innerText = languages[language].Praca6Pl;
  document.getElementById('Praca7Pl').innerText = languages[language].Praca7Pl;
  document.getElementById('Praca8Pl').innerText = languages[language].Praca8Pl;
  document.getElementById('Praca9Pl').innerText = languages[language].Praca9Pl;
  //Btn
  document.getElementById('Btn1Pl').innerText = languages[language].Btn1Pl;
  document.getElementById('Btn2Pl').innerText = languages[language].Btn2Pl;
  document.getElementById('Btn3Pl').innerText = languages[language].Btn3Pl;
  document.getElementById('Btn4Pl').innerText = languages[language].Btn4Pl;
  //Kontakt
  document.getElementById('TytulKo').innerText = languages[language].TytulKo;
  //Napuisz do nas
  document.getElementById('TytulWi').innerText = languages[language].TytulWi;
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


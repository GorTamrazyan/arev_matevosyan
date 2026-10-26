// Переводы. Армянский (hy) — основной язык сайта.
const translations = {
  hy: {
    'meta.title': 'Վարսահարդարի պորտֆոլիո',

    'nav.home': 'Գլխավոր',
    'nav.about': 'Իմ մասին',
    'nav.work': 'Աշխատանքներ',
    'nav.prices': 'Գներ',
    'nav.contact': 'Կոնտակտներ',
    'nav.book': 'Գրանցվել →',

    'hero.eyebrow': 'Սանրվածքներ · Ներկում · Հարդարում',
    'hero.title': 'Ստեղծում եմ<br>կերպարներ,<br>որոնք <em>հիշվում են</em>',
    'hero.lead': 'Վարսահարդար-վարպետ Երևանում։ Օգնում եմ զգալ վստահություն սանրվածքի, ներկման և հարդարման միջոցով՝ ուշադրություն դարձնելով մազերի կառուցվածքին և ձեր ոճին։',
    'hero.btnWork': 'Դիտել աշխատանքները',
    'hero.btnPrices': 'Ծառայությունների գներ',
    'hero.photo': '[Վարպետի լուսանկար]',
    'hero.badge': 'ՍԻՐՈՎ ԵՎ ՈՒՇԱԴՐՈՒԹՅԱՄԲ · ՍՏԵՂԾՈՒՄ ԵՄ ԿԵՐՊԱՐ · ',
    'hero.exp': 'տարվա փորձ',

    'about.eyebrow': 'Իմ մասին',
    'about.title': 'Տեխնիկան հանդիպում է<br><em>ստեղծագործությանը։</em>',
    'about.lead': 'Ես վարսահարդար-վարպետ եմ, ստեղծում եմ կերպարներ, որոնք ընդգծում են անհատականությունը և հեշտությամբ պահպանում են ձևը առօրյայում։ Աշխատում եմ ցանկացած բարդության ներկման, սանրվածքների և հարդարումների հետ։',
    'about.btn': 'Ավելին իմ մասին',
    'about.stat1': 'տարվա փորձ<br>ոլորտում',
    'about.stat2': 'գոհ<br>հաճախորդ',
    'about.stat3Title': 'Ներկում<br>և սանրվածքներ',
    'about.stat3': 'հիմնական մասնագիտացում',

    'work.eyebrow': 'Ընտրված աշխատանքներ',
    'work.title': 'Պորտֆոլիո',
    'work.all': 'Բոլոր աշխատանքները →',
    'work.w1': 'Բալայաժ մուգ մազերի վրա',
    'work.w2': 'Երեկոյան հարդարում գանգուրներով',
    'work.w3': 'Կանացի սանրվածք «կասկադ»',
    'work.w4': 'Հարսանեկան սանրվածք',
    'work.w5': 'Մոխրագույն բլոնդ գունավորում',
    'work.w6': 'Կարճ սանրվածք «պիքսի»',
    'common.photo': '[Լուսանկար]',

    'cat.color': 'Ներկում',
    'cat.styling': 'Հարդարում',
    'cat.cut': 'Սանրվածք',
    'cat.event': 'Տոնական կերպար',

    'process.eyebrow': 'Ինչպես է անցնում այցը',
    'process.s1': 'Խորհրդատվություն',
    'process.s1Text': 'Քննարկում ենք ցանկությունները և ընտրում համապատասխան կերպարը',
    'process.s2': 'Ախտորոշում',
    'process.s2Text': 'Գնահատում եմ մազերի կառուցվածքն ու վիճակը',
    'process.s3': 'Տեխնիկայի ընտրություն',
    'process.s3Text': 'Ընտրում եմ ներկման կամ սանրվածքի տեխնիկան',
    'process.s4': 'Կատարում',
    'process.s4Text': 'Իրականացնում եմ կերպարը՝ ուշադրություն դարձնելով մանրուքներին',
    'process.s5': 'Արդյունք',
    'process.s5Text': 'Հարդարում և տնային խնամքի խորհուրդներ',

    'prices.eyebrow': 'Գնացուցակ',
    'prices.title': 'Ծառայությունների գներ',
    'prices.from': 'սկսած [ԳԻՆ] ֏',
    'prices.cuts': 'Սանրվածքներ',
    'prices.cutWomen': 'Կանացի սանրվածք',
    'prices.cutMen': 'Տղամարդու սանրվածք',
    'prices.cutKids': 'Մանկական սանրվածք',
    'prices.colorOne': 'Միագույն ներկում',
    'prices.balayage': 'Բալայաժ / օմբրե',
    'prices.highlights': 'Մելիրովկա',
    'prices.styling': 'Հարդարում և ոճ',
    'prices.blowdry': 'Հարդարում ֆենով',
    'prices.evening': 'Երեկոյան հարդարում',
    'prices.wedding': 'Հարսանեկան կերպար',
    'prices.care': 'Խնամք',
    'prices.keratin': 'Կերատինային վերականգնում',
    'prices.botox': 'Բոտոքս մազերի համար',
    'prices.note': 'Ճշգրիտ արժեքը կախված է մազերի երկարությունից և խտությունից և որոշվում է խորհրդատվության ժամանակ։',

    'ba.eyebrow': 'Փոխակերպումներ',
    'ba.title': 'Մինչև և հետո',
    'ba.photo': '[Լուսանկար՝ մինչև / հետո]',
    'ba.t1': 'Մուգից՝ կարամելային բալայաժ',
    'ba.t1Text': 'Գույնի մեղմ անցում՝ առանց մազերի կառուցվածքին վնասելու',
    'ba.t2': 'Հարսանեկան կերպար՝ փափուկ գանգուրներով',
    'ba.t2Text': 'Հարդարում և փայլ, որոնք պահպանվում են ամբողջ երեկո',

    'contact.eyebrow': 'Եկեք ծանոթանանք',
    'contact.title': 'Պատրա՞ստ եք <em>փոփոխությունների</em>',
    'contact.lead': 'Գրանցվեք խորհրդատվության՝ միասին կընտրենք կերպար, որը կընդգծի ձեր անհատականությունը։',
    'contact.btn': 'Գրանցվել խորհրդատվության',
    'contact.city': 'Երևան, Հայաստան',

    'footer.rights': '© 2026 LIA HAIR. Բոլոր իրավունքները պաշտպանված են։',
    'footer.privacy': 'Գաղտնիության քաղաքականություն',
    'footer.terms': 'Օգտագործման պայմաններ'
  },

  ru: {
    'meta.title': 'Портфолио мастера-парикмахера',

    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.work': 'Работы',
    'nav.prices': 'Цены',
    'nav.contact': 'Контакты',
    'nav.book': 'Записаться →',

    'hero.eyebrow': 'Стрижки · Окрашивание · Укладки',
    'hero.title': 'Я создаю<br>образы,<br>которые <em>запоминаются</em>',
    'hero.lead': 'Мастер-парикмахер в Ереване. Помогаю почувствовать уверенность через стрижку, окрашивание и укладку — с вниманием к структуре волос и вашему стилю.',
    'hero.btnWork': 'Смотреть работы',
    'hero.btnPrices': 'Цены на услуги',
    'hero.photo': '[Фото мастера]',
    'hero.badge': 'ДЕЛАЮ С ЛЮБОВЬЮ К ДЕТАЛЯМ · СОЗДАЮ ОБРАЗ · ',
    'hero.exp': 'лет опыта',

    'about.eyebrow': 'Обо мне',
    'about.title': 'Техника встречает<br><em>творчество.</em>',
    'about.lead': 'Я — мастер-парикмахер, создаю образы, которые подчёркивают индивидуальность и легко держат форму в повседневной жизни. Работаю с окрашиванием, стрижками и укладками любой сложности.',
    'about.btn': 'Подробнее обо мне',
    'about.stat1': 'лет опыта<br>в индустрии',
    'about.stat2': 'довольных<br>клиентов',
    'about.stat3Title': 'Окрашивание<br>и стрижки',
    'about.stat3': 'основная специализация',

    'work.eyebrow': 'Избранные работы',
    'work.title': 'Портфолио',
    'work.all': 'Все работы →',
    'work.w1': 'Балаяж на тёмных волосах',
    'work.w2': 'Вечерняя укладка локонами',
    'work.w3': 'Женская стрижка каскад',
    'work.w4': 'Свадебная причёска',
    'work.w5': 'Колорирование пепельный блонд',
    'work.w6': 'Короткая стрижка пикси',
    'common.photo': '[Фото]',

    'cat.color': 'Окрашивание',
    'cat.styling': 'Укладка',
    'cat.cut': 'Стрижка',
    'cat.event': 'Образ для торжества',

    'process.eyebrow': 'Как проходит запись',
    'process.s1': 'Консультация',
    'process.s1Text': 'Обсуждаем пожелания и подбираем подходящий образ',
    'process.s2': 'Диагностика',
    'process.s2Text': 'Оцениваю структуру и состояние волос',
    'process.s3': 'Подбор техники',
    'process.s3Text': 'Выбираю технику окрашивания или стрижки',
    'process.s4': 'Выполнение',
    'process.s4Text': 'Воплощаю образ с вниманием к деталям',
    'process.s5': 'Результат',
    'process.s5Text': 'Укладка и рекомендации по уходу дома',

    'prices.eyebrow': 'Прайс-лист',
    'prices.title': 'Цены на услуги',
    'prices.from': 'от [ЦЕНА] ֏',
    'prices.cuts': 'Стрижки',
    'prices.cutWomen': 'Женская стрижка',
    'prices.cutMen': 'Мужская стрижка',
    'prices.cutKids': 'Детская стрижка',
    'prices.colorOne': 'Окрашивание в один тон',
    'prices.balayage': 'Балаяж / омбре',
    'prices.highlights': 'Мелирование',
    'prices.styling': 'Укладка и стиль',
    'prices.blowdry': 'Укладка феном',
    'prices.evening': 'Вечерняя укладка',
    'prices.wedding': 'Свадебный образ',
    'prices.care': 'Уход',
    'prices.keratin': 'Кератиновое восстановление',
    'prices.botox': 'Ботокс для волос',
    'prices.note': 'Точная стоимость зависит от длины и густоты волос и определяется на консультации.',

    'ba.eyebrow': 'Трансформации',
    'ba.title': 'До и после',
    'ba.photo': '[Фото: до / после]',
    'ba.t1': 'Из тёмного в карамельный балаяж',
    'ba.t1Text': 'Мягкий переход цвета без вреда для структуры волос',
    'ba.t2': 'Свадебный образ с мягкими локонами',
    'ba.t2Text': 'Укладка и блеск, которые держатся весь вечер',

    'contact.eyebrow': 'Давайте знакомиться',
    'contact.title': 'Готовы к <em>переменам?</em>',
    'contact.lead': 'Запишитесь на консультацию — вместе подберём образ, который подчеркнёт вашу индивидуальность.',
    'contact.btn': 'Записаться на консультацию',
    'contact.city': 'Ереван, Армения',

    'footer.rights': '© 2026 LIA HAIR. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования'
  },

  en: {
    'meta.title': 'Hairstylist Portfolio',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.prices': 'Prices',
    'nav.contact': 'Contact',
    'nav.book': 'Book now →',

    'hero.eyebrow': 'Haircuts · Coloring · Styling',
    'hero.title': 'I create<br>looks<br>that are <em>remembered</em>',
    'hero.lead': 'Master hairstylist in Yerevan. I help you feel confident through cuts, color and styling — with care for your hair’s structure and your personal style.',
    'hero.btnWork': 'View my work',
    'hero.btnPrices': 'Service prices',
    'hero.photo': '[Stylist photo]',
    'hero.badge': 'MADE WITH LOVE FOR DETAIL · CREATING YOUR LOOK · ',
    'hero.exp': 'years of experience',

    'about.eyebrow': 'About me',
    'about.title': 'Technique meets<br><em>creativity.</em>',
    'about.lead': 'I’m a master hairstylist creating looks that highlight individuality and hold their shape easily in everyday life. I work with coloring, haircuts and styling of any complexity.',
    'about.btn': 'More about me',
    'about.stat1': 'years in<br>the industry',
    'about.stat2': 'happy<br>clients',
    'about.stat3Title': 'Coloring<br>and haircuts',
    'about.stat3': 'main specialty',

    'work.eyebrow': 'Selected work',
    'work.title': 'Portfolio',
    'work.all': 'All work →',
    'work.w1': 'Balayage on dark hair',
    'work.w2': 'Evening curls styling',
    'work.w3': 'Women’s layered cut',
    'work.w4': 'Bridal hairstyle',
    'work.w5': 'Ash blonde coloring',
    'work.w6': 'Short pixie cut',
    'common.photo': '[Photo]',

    'cat.color': 'Coloring',
    'cat.styling': 'Styling',
    'cat.cut': 'Haircut',
    'cat.event': 'Special occasion',

    'process.eyebrow': 'How a visit works',
    'process.s1': 'Consultation',
    'process.s1Text': 'We discuss your wishes and choose the right look',
    'process.s2': 'Diagnosis',
    'process.s2Text': 'I assess the structure and condition of your hair',
    'process.s3': 'Technique',
    'process.s3Text': 'I choose the coloring or cutting technique',
    'process.s4': 'Execution',
    'process.s4Text': 'I bring the look to life with attention to detail',
    'process.s5': 'Result',
    'process.s5Text': 'Styling and home care recommendations',

    'prices.eyebrow': 'Price list',
    'prices.title': 'Service prices',
    'prices.from': 'from [PRICE] ֏',
    'prices.cuts': 'Haircuts',
    'prices.cutWomen': 'Women’s haircut',
    'prices.cutMen': 'Men’s haircut',
    'prices.cutKids': 'Kids’ haircut',
    'prices.colorOne': 'Single-tone coloring',
    'prices.balayage': 'Balayage / ombré',
    'prices.highlights': 'Highlights',
    'prices.styling': 'Styling',
    'prices.blowdry': 'Blow-dry',
    'prices.evening': 'Evening styling',
    'prices.wedding': 'Bridal look',
    'prices.care': 'Hair care',
    'prices.keratin': 'Keratin treatment',
    'prices.botox': 'Hair botox',
    'prices.note': 'The exact price depends on hair length and thickness and is set during the consultation.',

    'ba.eyebrow': 'Transformations',
    'ba.title': 'Before & after',
    'ba.photo': '[Photo: before / after]',
    'ba.t1': 'From dark to caramel balayage',
    'ba.t1Text': 'A soft color transition without harming the hair structure',
    'ba.t2': 'Bridal look with soft curls',
    'ba.t2Text': 'Styling and shine that last all evening',

    'contact.eyebrow': 'Let’s get acquainted',
    'contact.title': 'Ready for <em>a change?</em>',
    'contact.lead': 'Book a consultation — together we’ll find a look that highlights your individuality.',
    'contact.btn': 'Book a consultation',
    'contact.city': 'Yerevan, Armenia',

    'footer.rights': '© 2026 LIA HAIR. All rights reserved.',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of use'
  }
};

const DEFAULT_LANG = 'hy';
const STORAGE_KEY = 'lang';

function getSavedLang() {
  try {
    const lang = localStorage.getItem(STORAGE_KEY);
    return translations[lang] ? lang : DEFAULT_LANG;
  } catch (e) {
    return DEFAULT_LANG;
  }
}

function setLang(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });

  document.documentElement.lang = lang;
  document.title = dict['meta.title'];

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active);
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage недоступен (приватный режим) — язык просто не запомнится
  }
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

setLang(getSavedLang());

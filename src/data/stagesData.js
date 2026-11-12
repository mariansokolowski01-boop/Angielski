/**
 * Baza danych edukacyjnej przygody „Lisek wraca do domu”
 * 7 etapów, po 5 słówek na etap.
 * Wszystkie teksty, ilustracje użytkownika oraz naklejki do Koła Fortuny.
 */

export const INTRO_DATA = {
  title: "Lisek wraca do domu",
  subtitle: "Ilustrowana bajka i leśna przygoda językowa dla Zuzi",
  character: "Zuzia i Rudy Lisek",
  imageHero: "/images/Zuzua lisek i miś.jpg",
  imageFox: "/images/lisek w szaliku.jpg",
  audio: "/audio/intro.mp3",
  story: `Pewnego słonecznego poranka Zuzia podeszła do starej, drewnianej furtki na skraju ogrodu. Tuż za nią siedział mały, rudy lisek w ciepłym, zielonym szaliku. Miał wielkie, ciekawe oczka, ale wyglądał na troszkę zagubionego.

„Cześć Zuziu!” – pisnął cichutko lisek. „Zgubiłem drogę powrotną do mojej norki w głębi lasu. Słyszałem, że jesteś bardzo mądra i potrafisz uczyć się magicznych słów w języku angielskim! Czy pomożesz mi przejść przez leśne krainy i wrócić do mojej rodziny?”

Zasady naszej wspólnej przygody:
1. W każdym z 7 rozdziałów poznasz 5 magicznych słówek.
2. Zagrasz w grę pamięciową Magiczne Pary.
3. Zdobywasz złote gwiazdki w sprawdzianie słuchowym.
4. Kręcisz Kołem Fortuny, zbierasz piękne naklejki do Albumu i odblokowujesz kolejne strony bajki!`
};

// Kolekcja naklejek do wylosowania w Kole Fortuny
export const STICKERS_DATA = [
  {
    id: "sticker_scarf",
    title: "Lisek w czapeczce",
    description: "Rudy lisek przygotowany na chłodny wiatr w mięciutkiej czapce i szaliku.",
    image: "/images/Lisek w szaliku i czapeczce..jpg",
    rarity: "Złota"
  },
  {
    id: "sticker_sandcastle",
    title: "Piaskowy Lisek",
    description: "Zuzia i Lisek ulepili wspaniałego liska z morskiego piasku na plaży!",
    image: "/images/Lisek i Zuzia na plazy bydują liska z piasku.jpg",
    rarity: "Rzadka"
  },
  {
    id: "sticker_train",
    title: "Podróż w wagoniku",
    description: "Wesoła wyprawa starym, drewnianym pociągiem przez szumiący las.",
    image: "/images/lisek i Zuzia w wagonie kolejowym.jpg",
    rarity: "Rzadka"
  },
  {
    id: "sticker_seal",
    title: "Przyjacielska Foka",
    description: "Urocza foka wysunęła pyszczek z wody, by przywitać się z Zuzią.",
    image: "/images/Lisek i Zuzia z foką nag brzegiem.jpg",
    rarity: "Złota"
  },
  {
    id: "sticker_lighthouse",
    title: "Morska Latarnia",
    description: "Wysoka latarnia morska, która wskazuje bezpieczną drogę statkom i przyjaciołom.",
    image: "/images/Lisek i Zuzia nad morzem z latarnią morską.jpg",
    rarity: "Legendarna"
  },
  {
    id: "sticker_cottage",
    title: "Przystań nad wodą",
    description: "Kolorowe domki rybackie i mewy szybujące nad brzegiem morza.",
    image: "/images/Lisek i Zuzia przy domku na plaży.jpg",
    rarity: "Rzadka"
  },
  {
    id: "sticker_sunset",
    title: "Wieczór na plaży",
    description: "Ciepłe promienie zachodzącego słońca oświetlające morskie fale.",
    image: "/images/Lisek i Zuzia wieczorem na plaży.jpg",
    rarity: "Złota"
  },
  {
    id: "sticker_hedgehogs",
    title: "Rodzinka Jeżyków",
    description: "Kolczaste leśne maluchy częstują Zuzię i Liska czerwonymi jabłuszkami.",
    image: "/images/Zuzia i lisek z jeżami.jpg",
    rarity: "Legendarna"
  }
];

export const STAGES_DATA = [
  {
    id: 1,
    number: 1,
    title: "Spotkanie przy furtce",
    subtitle: "Mały lisek, stare drzewo i wielki miś",
    badge: "Etap 1",
    themeColor: "from-amber-100 to-emerald-100",
    illustration: "/images/Zuzua lisek i miś.jpg",
    audioFile: "/audio/etap1.mp3",
    mapCoordinates: { x: 50, y: 92 }, // Pozycja na mapie w procentach (dół - furtka)
    description: "Zuzia otwiera furtkę do lasu i poznaje pierwszych leśnych mieszkańców.",
    storyIntro: "Zuzia ze skrzypnięciem pchnęła drewnianą furtkę ogrodu. Na miękkiej trawie siedział rudy lisek w zielonym szaliku, a obok przechodził potężny, ale łagodny niedźwiedź. W gałęziach śpiewał ptaszek, a z kępki mchu wyglądała żabka.",
    words: [
      {
        id: "fox",
        english: "fox",
        polish: "lisek",
        phonetic: "/fɒks/",
        hint: "Rudy zwierzak z puszystym ogonem i zielonym szalikiem",
        emoji: "🦊",
        iconName: "Fox",
        imageFile: "/images/lisek w szaliku.jpg",
        audioFile: "/audio/words/fox.mp3"
      },
      {
        id: "tree",
        english: "tree",
        polish: "drzewo",
        phonetic: "/triː/",
        hint: "Wysokie, zielone drzewo o grubym pniu",
        emoji: "🌳",
        iconName: "Tree",
        imageFile: "/images/words/tree.png",
        audioFile: "/audio/words/tree.mp3"
      },
      {
        id: "bird",
        english: "bird",
        polish: "ptaszek",
        phonetic: "/bɜːd/",
        hint: "Ma skrzydła i pięknie śpiewa w koronach drzew",
        emoji: "🐦",
        iconName: "Bird",
        imageFile: "/images/words/bird.png",
        audioFile: "/audio/words/bird.mp3"
      },
      {
        id: "frog",
        english: "frog",
        polish: "żabka",
        phonetic: "/frɒɡ/",
        hint: "Zielona i skacze: kum-kum!",
        emoji: "🐸",
        iconName: "Frog",
        imageFile: "/images/żaba.jpg",
        audioFile: "/audio/words/frog.mp3"
      },
      {
        id: "bear",
        english: "bear",
        polish: "niedźwiedź / miś",
        phonetic: "/beə/",
        hint: "Wielki, puszysty i macha łapą na powitanie",
        emoji: "🐻",
        iconName: "Bear",
        imageFile: "/images/Zuzua lisek i miś.jpg",
        audioFile: "/audio/words/bear.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 1,
      title: "Rozdział 1: Przy drewnianej furtce",
      illustration: "/images/Zuzua lisek i miś.jpg",
      textParts: [
        { type: "text", content: "Zuzia otwiera ze skrzypnięciem drewnianą furtkę ogrodu. Za nią w miękkim mchu siedzi mały, rudy lisek – " },
        { type: "word", english: "fox", polish: "lisek", audioFile: "/audio/words/fox.mp3" },
        { type: "text", content: " – który z dumą poprawia swój ulubiony zielony szalik. Tuż obok nich szumi potężne, prastare drzewo – " },
        { type: "word", english: "tree", polish: "drzewo", audioFile: "/audio/words/tree.mp3" },
        { type: "text", content: " – w którego gałęziach wesoło podśpiewuje kolorowy ptaszek – " },
        { type: "word", english: "bird", polish: "ptaszek", audioFile: "/audio/words/bird.mp3" },
        { type: "text", content: ". Nagle spod liścia łopianu wyskakuje zielona, roześmiana żabka – " },
        { type: "word", english: "frog", polish: "żabka", audioFile: "/audio/words/frog.mp3" },
        { type: "text", content: ", a z oddali dobiega głębokie, spokojne pomrukiwanie. To wielki, brunatny niedźwiedź – " },
        { type: "word", english: "bear", polish: "niedźwiedź", audioFile: "/audio/words/bear.mp3" },
        { type: "text", content: " – macha łapą na powitanie i wskazuje Zuzi oraz Liskowi bezpieczną ścieżkę w głąb lasu." }
      ]
    }
  },
  {
    id: 2,
    number: 2,
    title: "Leśna polana",
    subtitle: "Ciepłe słońce, kolorowe kwiaty i motyle",
    badge: "Etap 2",
    themeColor: "from-emerald-100 to-yellow-100",
    illustration: "/images/Zuzia i lisek na kolorowej łące.jpg",
    audioFile: "/audio/etap2.mp3",
    mapCoordinates: { x: 26, y: 78 }, // Po lewej stronie ścieżki
    description: "Słoneczna polanka pełna kolorów i zapachu polnych kwiatów.",
    storyIntro: "Ścieżka wyprowadziła Zuzię i Liska na rozległą łąkę utkaną tysiącami barwnych kwiatów. Ciepłe słońce muskało ich policzki, a nad trawą tańczyły wesołe motyle.",
    words: [
      {
        id: "flower",
        english: "flower",
        polish: "kwiatek",
        phonetic: "/ˈflaʊ.ər/",
        hint: "Kolorowy i pachnący na leśnej łące",
        emoji: "🌸",
        iconName: "Flower",
        imageFile: "/images/Zuzia i lisek na kolorowej łące.jpg",
        audioFile: "/audio/words/flower.mp3"
      },
      {
        id: "sun",
        english: "sun",
        polish: "słońce",
        phonetic: "/sʌn/",
        hint: "Świeci ciepłym blaskiem wysoko na niebie",
        emoji: "☀️",
        iconName: "Sun",
        imageFile: "/images/words/sun.png",
        audioFile: "/audio/words/sun.mp3"
      },
      {
        id: "grass",
        english: "grass",
        polish: "trawa",
        phonetic: "/ɡrɑːs/",
        hint: "Miękka, zielona rośnie pod łapkami liska",
        emoji: "🌱",
        iconName: "Grass",
        imageFile: "/images/words/grass.png",
        audioFile: "/audio/words/grass.mp3"
      },
      {
        id: "butterfly",
        english: "butterfly",
        polish: "motylek",
        phonetic: "/ˈbʌt.ə.flaɪ/",
        hint: "Lata z płatka na płatek, ma wzorzyste skrzydełka",
        emoji: "🦋",
        iconName: "Butterfly",
        imageFile: "/images/motyl.jpg",
        audioFile: "/audio/words/butterfly.mp3"
      },
      {
        id: "rock",
        english: "rock",
        polish: "kamień",
        phonetic: "/rɒk/",
        hint: "Duży, nagrzany od słońca kamień do odpoczynku",
        emoji: "🪨",
        iconName: "Rock",
        imageFile: "/images/words/rock.png",
        audioFile: "/audio/words/rock.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 2,
      title: "Rozdział 2: Słoneczna Polana",
      illustration: "/images/Zuzia i lisek na kolorowej łące.jpg",
      textParts: [
        { type: "text", content: "Ścieżka zaprowadziła Zuzię i Liska na szeroką polanę. Wysoko na błękitnym niebie lśniło ciepłe słońce – " },
        { type: "word", english: "sun", polish: "słońce", audioFile: "/audio/words/sun.mp3" },
        { type: "text", content: ", które ogrzewało ich noski. Pod stopami szeleściła świeża, zielona trawa – " },
        { type: "word", english: "grass", polish: "trawa", audioFile: "/audio/words/grass.mp3" },
        { type: "text", content: ". Zuzia pochyliła się i zerwała pachnący leśny kwiatek – " },
        { type: "word", english: "flower", polish: "kwiatek", audioFile: "/audio/words/flower.mp3" },
        { type: "text", content: ", a tuż nad nim zatańczył błękitny motylek – " },
        { type: "word", english: "butterfly", polish: "motylek", audioFile: "/audio/words/butterfly.mp3" },
        { type: "text", content: ". Zmęczeni podróżnicy usiedli na chwilę na wielkim, ciepłym kamieniu – " },
        { type: "word", english: "rock", polish: "kamień", audioFile: "/audio/words/rock.mp3" },
        { type: "text", content: ", by nabrać sił przed dalszą drogą nad szumiący strumyk." }
      ]
    }
  },
  {
    id: 3,
    number: 3,
    title: "Nad strumykiem",
    subtitle: "Krystaliczna woda, mostek i pływające kaczki",
    badge: "Etap 3",
    themeColor: "from-sky-100 to-teal-100",
    illustration: "/images/Zuzia i lisek na mostku.jpg",
    audioFile: "/audio/etap3.mp3",
    mapCoordinates: { x: 70, y: 64 }, // Po prawej stronie strumyka
    description: "Czysta woda, srebrne rybki i drewniany mostek łączący brzegi rzeki.",
    storyIntro: "W oddali rozległ się szum wody. Zuzia i Lisek stanęli na starym drewnianym mostku, spoglądając w przejrzysty nurt rzeczki, gdzie pluskały się rybki i kaczuszki.",
    words: [
      {
        id: "water",
        english: "water",
        polish: "woda",
        phonetic: "/ˈwɔː.tər/",
        hint: "Czysta i chłodna woda w leśnym potoku",
        emoji: "💧",
        iconName: "Water",
        imageFile: "/images/words/water.png",
        audioFile: "/audio/words/water.mp3"
      },
      {
        id: "fish",
        english: "fish",
        polish: "rybka",
        phonetic: "/fɪʃ/",
        hint: "Pływa zwinnie w strumyku i macha płetwą",
        emoji: "🐟",
        iconName: "Fish",
        imageFile: "/images/words/fish.png",
        audioFile: "/audio/words/fish.mp3"
      },
      {
        id: "bridge",
        english: "bridge",
        polish: "mostek",
        phonetic: "/brɪdʒ/",
        hint: "Drewniany mostek, po którym przechodzimy na drugi brzeg",
        emoji: "🌉",
        iconName: "Bridge",
        imageFile: "/images/Zuzia i lisek na mostku.jpg",
        audioFile: "/audio/words/bridge.mp3"
      },
      {
        id: "duck",
        english: "duck",
        polish: "kaczuszka",
        phonetic: "/dʌk/",
        hint: "Żółtodzioby ptak na wodzie: kwa-kwa!",
        emoji: "🦆",
        iconName: "Duck",
        imageFile: "/images/words/duck.png",
        audioFile: "/audio/words/duck.mp3"
      },
      {
        id: "boat",
        english: "boat",
        polish: "łódka",
        phonetic: "/bəʊt/",
        hint: "Mała drewniana łódka kołysze się przy brzegu",
        emoji: "⛵",
        iconName: "Boat",
        imageFile: "/images/words/boat.png",
        audioFile: "/audio/words/boat.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 3,
      title: "Rozdział 3: Przy szumiącym strumyku",
      illustration: "/images/Zuzia i lisek na mostku.jpg",
      textParts: [
        { type: "text", content: "W oddali rozległ się przyjemny szum. Zuzia i Lisek dotarli nad leśną rzeczkę, w której płynęła krystalicznie czysta woda – " },
        { type: "word", english: "water", polish: "woda", audioFile: "/audio/words/water.mp3" },
        { type: "text", content: ". Pod taflą wody błyszczała mała, zwinna rybka – " },
        { type: "word", english: "fish", polish: "rybka", audioFile: "/audio/words/fish.mp3" },
        { type: "text", content: ", która machnęła ogonkiem na powitanie. Aby przejść na drugi brzeg, przyjaciele weszli na stary, drewniany mostek – " },
        { type: "word", english: "bridge", polish: "mostek", audioFile: "/audio/words/bridge.mp3" },
        { type: "text", content: ". Obok mostka przepłynęła wesoła kaczuszka – " },
        { type: "word", english: "duck", polish: "kaczuszka", audioFile: "/audio/words/duck.mp3" },
        { type: "text", content: ", a przy trzcinach kołysała się zacumowana mała łódka – " },
        { type: "word", english: "boat", polish: "łódka", audioFile: "/audio/words/boat.mp3" },
        { type: "text", content: ". Przeprawa udała się znakomicie!" }
      ]
    }
  },
  {
    id: 4,
    number: 4,
    title: "Piknik w lesie",
    subtitle: "Pyszne przysmaki, leśny chlebek i słodki miód",
    badge: "Etap 4",
    themeColor: "from-rose-100 to-amber-100",
    illustration: "/images/Piknik Zuzi z Liskiem.jpg",
    audioFile: "/audio/etap4.mp3",
    mapCoordinates: { x: 30, y: 50 }, // W centrum ścieżki
    description: "Chwila na zasłużony odpoczynek! Zuzia rozkłada kraciasty kocyk i smakołyki.",
    storyIntro: "Gdy brzuszek Liska zaczął głośno burczeć, Zuzia rozłożyła piknikowy kocyk. Wyciągnęła chrupiące jabłka, świeży chleb, dzbanek mleka i złoty miód, a w borówkach czekały pyszne jagody.",
    words: [
      {
        id: "apple",
        english: "apple",
        polish: "jabłko",
        phonetic: "/ˈæp.əl/",
        hint: "Czerwone, soczyste jabłuszko, które niesie jeżyk",
        emoji: "🍎",
        iconName: "Apple",
        imageFile: "/images/jeż z jabłkiem.jpg",
        audioFile: "/audio/words/apple.mp3"
      },
      {
        id: "bread",
        english: "bread",
        polish: "chleb",
        phonetic: "/bred/",
        hint: "Świeży, pachnący chlebek z chrupiącą skórką",
        emoji: "🍞",
        iconName: "Bread",
        imageFile: "/images/words/bread.png",
        audioFile: "/audio/words/bread.mp3"
      },
      {
        id: "milk",
        english: "milk",
        polish: "mleko",
        phonetic: "/mɪlk/",
        hint: "Białe, zdrowe mleczko w kubeczku",
        emoji: "🥛",
        iconName: "Milk",
        imageFile: "/images/words/milk.png",
        audioFile: "/audio/words/milk.mp3"
      },
      {
        id: "honey",
        english: "honey",
        polish: "miód",
        phonetic: "/ˈhʌn.i/",
        hint: "Złocisty, słodki przysmak od leśnych pszczółek",
        emoji: "🍯",
        iconName: "Honey",
        imageFile: "/images/words/honey.png",
        audioFile: "/audio/words/honey.mp3"
      },
      {
        id: "berry",
        english: "berry",
        polish: "jagoda",
        phonetic: "/ˈber.i/",
        hint: "Fioletowa słodka jagódka prosto z krzaczka",
        emoji: "🫐",
        iconName: "Berry",
        imageFile: "/images/words/berry.png",
        audioFile: "/audio/words/berry.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 4,
      title: "Rozdział 4: Leśny Piknik",
      illustration: "/images/Piknik Zuzi z Liskiem.jpg",
      textParts: [
        { type: "text", content: "Liskowi zaburczało w brzuszku. Zuzia wyjęła z plecaka kraciasty kocyk i rozłożyła smakołyki. Na kocyku pojawiło się chrupiące jabłko – " },
        { type: "word", english: "apple", polish: "jabłko", audioFile: "/audio/words/apple.mp3" },
        { type: "text", content: ", bochenek pachnącego chleba – " },
        { type: "word", english: "bread", polish: "chleb", audioFile: "/audio/words/bread.mp3" },
        { type: "text", content: " oraz kubek, w którym było pyszne mleko – " },
        { type: "word", english: "milk", polish: "mleko", audioFile: "/audio/words/milk.mp3" },
        { type: "text", content: ". Do chleba dodali złoty, gęsty miód – " },
        { type: "word", english: "honey", polish: "miód", audioFile: "/audio/words/honey.mp3" },
        { type: "text", content: ", a na deser zebrały się leśne jagody – " },
        { type: "word", english: "berry", polish: "jagoda", audioFile: "/audio/words/berry.mp3" },
        { type: "text", content: ". Po tak wspaniałym posiłku Lisek był pełen nowej energii!" }
      ]
    }
  },
  {
    id: 5,
    number: 5,
    title: "Zwierzęta i deszczowy las",
    subtitle: "Ciepły deszczyk pod liściem, sowa i króliczek",
    badge: "Etap 5",
    themeColor: "from-indigo-100 to-purple-100",
    illustration: "/images/Zuzia i lisek pod liściem w czasie deszczu.jpg",
    audioFile: "/audio/etap5.mp3",
    mapCoordinates: { x: 70, y: 36 }, // Po prawej stronie ścieżki
    description: "Ciepły letni deszczyk. Przyjaciele chronią się pod wielkim liściem łopianu.",
    storyIntro: "Z nieba spadły pierwsze krople ciepłego deszczu. Zuzia i Lisek schowali się pod olbrzymim zielonym liściem, jak pod parasolem. Z gałęzi spoglądała na nich mądra sowa, a z norki wyjrzał puszysty zajączek.",
    words: [
      {
        id: "owl",
        english: "owl",
        polish: "sowa",
        phonetic: "/aʊl/",
        hint: "Mądry ptak z wielkimi oczami, siedzi na gałęzi",
        emoji: "🦉",
        iconName: "Owl",
        imageFile: "/images/sowa.jpg",
        audioFile: "/audio/words/owl.mp3"
      },
      {
        id: "moon",
        english: "moon",
        polish: "księżyc",
        phonetic: "/muːn/",
        hint: "Srebrzysty rogalik wyłania się zza chmur",
        emoji: "🌙",
        iconName: "Moon",
        imageFile: "/images/words/moon.png",
        audioFile: "/audio/words/moon.mp3"
      },
      {
        id: "star",
        english: "star",
        polish: "gwiazdka",
        phonetic: "/stɑːr/",
        hint: "Mruga złotym blaskiem na wieczornym niebie",
        emoji: "⭐",
        iconName: "Star",
        imageFile: "/images/words/star.png",
        audioFile: "/audio/words/star.mp3"
      },
      {
        id: "rabbit",
        english: "rabbit",
        polish: "króliczek",
        phonetic: "/ˈræb.ɪt/",
        hint: "Ma długie uszy i chrupie marchewki",
        emoji: "🐰",
        iconName: "Rabbit",
        imageFile: "/images/zając z marchewkami.jpg",
        audioFile: "/audio/words/rabbit.mp3"
      },
      {
        id: "squirrel",
        english: "squirrel",
        polish: "wiewiórka",
        phonetic: "/ˈskwɪr.əl/",
        hint: "Ruda spryciula skacze po gałęziach z orzeszkiem",
        emoji: "🐿️",
        iconName: "Squirrel",
        imageFile: "/images/words/squirrel.png",
        audioFile: "/audio/words/squirrel.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 5,
      title: "Rozdział 5: Pod Zielonym Liściem",
      illustration: "/images/Zuzia i lisek pod liściem w czasie deszczu.jpg",
      textParts: [
        { type: "text", content: "Kiedy ciepły letni deszcz zaczął kropić, Zuzia i Lisek schronili się pod wielkim liściem. Na niebie powoli rozbłysł srebrny księżyc – " },
        { type: "word", english: "moon", polish: "księżyc", audioFile: "/audio/words/moon.mp3" },
        { type: "text", content: ". Obok niego mrugała pierwsza jasna gwiazdka – " },
        { type: "word", english: "star", polish: "gwiazdka", audioFile: "/audio/words/star.mp3" },
        { type: "text", content: ". Z gałęzi sosenki patrzyła na nich mądra sowa – " },
        { type: "word", english: "owl", polish: "sowa", audioFile: "/audio/words/owl.mp3" },
        { type: "text", content: ", a spod mokrych paproci wyjrzał ciekawy króliczek – " },
        { type: "word", english: "rabbit", polish: "króliczek", audioFile: "/audio/words/rabbit.mp3" },
        { type: "text", content: ", obok którego przemknęła zwinna wiewiórka – " },
        { type: "word", english: "squirrel", polish: "wiewiórka", audioFile: "/audio/words/squirrel.mp3" },
        { type: "text", content: ". Deszcz ustał, a leśne powietrze pachniało cudownie świeżo!" }
      ]
    }
  },
  {
    id: 6,
    number: 6,
    title: "Wyprawa nad morze",
    subtitle: "Złoty piasek, wesoły krab, foka i muszelki",
    badge: "Etap 6",
    themeColor: "from-cyan-100 to-blue-200",
    illustration: "/images/Lisek i Zuzia na plaży.jpg",
    audioFile: "/audio/etap6.mp3",
    mapCoordinates: { x: 30, y: 22 }, // Wyżej po lewej przy wydmach
    description: "Ścieżka doprowadziła przyjaciół aż do piaszczystej plaży i szumiących morskich fal.",
    storyIntro: "Las się rozstąpił i przed Zuzią i Liskiem ukazało się bezkresne morze! Ciepły piasek łaskotał w stópki, na kamieniu wygrzewał się mały krab, a z fal wychyliła się uśmiechnięta foka.",
    words: [
      {
        id: "sea",
        english: "sea",
        polish: "morze",
        phonetic: "/siː/",
        hint: "Wielka, błękitna woda z falami",
        emoji: "🌊",
        iconName: "Water",
        imageFile: "/images/Lisek i Zuzia na plaży.jpg",
        audioFile: "/audio/words/sea.mp3"
      },
      {
        id: "sand",
        english: "sand",
        polish: "piasek",
        phonetic: "/sænd/",
        hint: "Złoty i ciepły piasek na plaży",
        emoji: "🏖️",
        iconName: "Rock",
        imageFile: "/images/Lisek i Zuzia na plazy bydują liska z piasku.jpg",
        audioFile: "/audio/words/sand.mp3"
      },
      {
        id: "crab",
        english: "crab",
        polish: "krab",
        phonetic: "/kræb/",
        hint: "Chodzi bokiem po piasku i ma małe szczypce",
        emoji: "🦀",
        iconName: "Fish",
        imageFile: "/images/Krab.jpg",
        audioFile: "/audio/words/crab.mp3"
      },
      {
        id: "seal",
        english: "seal",
        polish: "foka",
        phonetic: "/siːl/",
        hint: "Pływa w morzu i wesoło klaszcze płetwami",
        emoji: "🦭",
        iconName: "Duck",
        imageFile: "/images/Foka.jpg",
        audioFile: "/audio/words/seal.mp3"
      },
      {
        id: "shell",
        english: "shell",
        polish: "muszelka",
        phonetic: "/ʃel/",
        hint: "Śliczna, spiralna muszelka znaleziona w piasku",
        emoji: "🐚",
        iconName: "Flower",
        imageFile: "/images/words/shell.png",
        audioFile: "/audio/words/shell.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 6,
      title: "Rozdział 6: Szum Morskich Fal",
      illustration: "/images/Lisek i Zuzia na plaży.jpg",
      textParts: [
        { type: "text", content: "Niespodziewanie las ustąpił miejsca wydmom, a w powietrzu poczuli zapach morskiej bryzy. Przed nimi rozpościerało się błękitne morze – " },
        { type: "word", english: "sea", polish: "morze", audioFile: "/audio/words/sea.mp3" },
        { type: "text", content: ". Lisek z radością zanurzył łapki w ciepły, złoty piasek – " },
        { type: "word", english: "sand", polish: "piasek", audioFile: "/audio/words/sand.mp3" },
        { type: "text", content: ". Obok kamyka przeszedł czerwony krab – " },
        { type: "word", english: "crab", polish: "krab", audioFile: "/audio/words/crab.mp3" },
        { type: "text", content: ", a z morskich fal wyłoniła się urocza foka – " },
        { type: "word", english: "seal", polish: "foka", audioFile: "/audio/words/seal.mp3" },
        { type: "text", content: ", która podarowała Zuzi lśniącą muszelkę – " },
        { type: "word", english: "shell", polish: "muszelka", audioFile: "/audio/words/shell.mp3" },
        { type: "text", content: ". Zuzia schowała muszelkę do kieszonki na pamiątkę wielkiej wyprawy!" }
      ]
    }
  },
  {
    id: 7,
    number: 7,
    title: "Dom Liska",
    subtitle: "Ciepła norka, miękkie łóżeczko i stęskniona rodzina",
    badge: "Etap 7 - Finał",
    themeColor: "from-amber-100 to-orange-200",
    illustration: "/images/Zuzia i lisek w domu liska.jpg",
    audioFile: "/audio/etap7.mp3",
    mapCoordinates: { x: 50, y: 10 }, // Na samej górze mapy przy domku
    description: "Udało się! Dotarliście do przytulnego domku Liska w korzeniach starego dębu.",
    storyIntro: "I wreszcie, pośród korzeni prastarego dębu, ukazał się uroczy leśny domek! W oknie paliło się ciepłe światełko, a w progu stała cała rodzina Liska, witając podróżników z otwartymi ramionami.",
    words: [
      {
        id: "house",
        english: "house",
        polish: "domek",
        phonetic: "/haʊs/",
        hint: "Ciepły, bezpieczny leśny domek Liska",
        emoji: "🏡",
        iconName: "House",
        imageFile: "/images/Zuzia i lisek w domu liska.jpg",
        audioFile: "/audio/words/house.mp3"
      },
      {
        id: "door",
        english: "door",
        polish: "drzwi",
        phonetic: "/dɔːr/",
        hint: "Drewniane drzwi otwierają się na oścież",
        emoji: "🚪",
        iconName: "Door",
        imageFile: "/images/words/door.png",
        audioFile: "/audio/words/door.mp3"
      },
      {
        id: "window",
        english: "window",
        polish: "okno",
        phonetic: "/ˈwɪn.dəʊ/",
        hint: "Okienko, przez które wpada blask gwiazd",
        emoji: "🪟",
        iconName: "Window",
        imageFile: "/images/words/window.png",
        audioFile: "/audio/words/window.mp3"
      },
      {
        id: "bed",
        english: "bed",
        polish: "łóżeczko",
        phonetic: "/bed/",
        hint: "Miękkie łóżeczko z kołderką z pachnącego mchu",
        emoji: "🛏️",
        iconName: "Bed",
        imageFile: "/images/words/bed.png",
        audioFile: "/audio/words/bed.mp3"
      },
      {
        id: "family",
        english: "family",
        polish: "rodzina",
        phonetic: "/ˈfæm.əl.i/",
        hint: "Mama, tata i lisiątka – wszyscy, którzy bardzo się kochają",
        emoji: "👨‍👩‍👧",
        iconName: "Family",
        imageFile: "/images/words/family.png",
        audioFile: "/audio/words/family.mp3"
      }
    ],
    storyChapter: {
      chapterNumber: 7,
      title: "Rozdział 7: Szczęśliwy Powrót",
      illustration: "/images/Zuzia i lisek w domu liska.jpg",
      textParts: [
        { type: "text", content: "I wreszcie, pośród korzeni wielkiego dębu, ukazał się uroczy domek – " },
        { type: "word", english: "house", polish: "domek", audioFile: "/audio/words/house.mp3" },
        { type: "text", content: ". Zuzia i Lisek podbiegli bliżej. Właśnie otworzyły się drewniane drzwi – " },
        { type: "word", english: "door", polish: "drzwi", audioFile: "/audio/words/door.mp3" },
        { type: "text", content: ", a przez oświetlone okno – " },
        { type: "word", english: "window", polish: "okno", audioFile: "/audio/words/window.mp3" },
        { type: "text", content: " widać było przygotowane miękkie łóżeczko – " },
        { type: "word", english: "bed", polish: "łóżeczko", audioFile: "/audio/words/bed.mp3" },
        { type: "text", content: ". Na spotkanie Liskowi wybiegła cała jego stęskniona rodzina – " },
        { type: "word", english: "family", polish: "rodzina", audioFile: "/audio/words/family.mp3" },
        { type: "text", content: "! Wszyscy przytulili Zuzię z ogromną wdzięcznością. Dzielna Zuzia poznała tyle pięknych angielskich słówek i sprawiła, że mały Lisek znów był bezpieczny w swoim ciepłym domu!" }
      ]
    }
  }
];

import type {
  ContactDepartment,
  DocumentCategory,
  DocumentItem,
  NewsPost,
  SiteSettings,
  Venue,
  VenueCategory,
} from "../types";

export const siteSettings: SiteSettings = {
  companyName: "Športski objekti d.o.o.",
  legalName: "Športski objekti d.o.o. Osijek",
  address: "Kneza Trpimira 23, 31000 Osijek",
  phone: "+385 31 251 400",
  email: "info@sportski-objekti.hr",
  oib: "89861654362",
  officeHours: "Pon – Pet · 08:00 – 16:00",
};

export const venueCategories: VenueCategory[] = [
  {
    id: "1",
    slug: "dvorane",
    name: "Sportske dvorane",
    description: "Zatvoreni prostori za natjecanja i treninge.",
  },
  {
    id: "2",
    slug: "bazeni",
    name: "Bazeni",
    description: "Zatvoreni i otvoreni bazenski kompleksi.",
  },
  {
    id: "3",
    slug: "vanjski-tereni",
    name: "Vanjski sportski tereni",
    description: "Nogometni, teniski i ostali otvoreni sportski tereni.",
  },
  {
    id: "4",
    slug: "stadioni",
    name: "Stadioni",
    description: "Nogometni stadioni i sportske arene.",
  },
  {
    id: "5",
    slug: "specijalizirani-objekti",
    name: "Specijalizirani objekti",
    description:
      "Sportski objekti namijenjeni specifičnim sportovima i aktivnostima.",
  },
  {
    id: "6",
    slug: "ostalo",
    name: "Ostali objekti",
    description: "Ostali sportski objekti i pomoćni sadržaji.",
  },
];

const commonPrices = (base: number) => [
  {
    id: "p1",
    name: "Pojedinačna ulaznica",
    description: "Jednokratni ulaz za rekreativce.",
    price: base,
    unit: "osoba",
    category: "Ulaznice",
    active: true,
  },
  {
    id: "p2",
    name: "Mjesečna karta",
    description: "Neograničen pristup u tekućem mjesecu.",
    price: base * 9,
    unit: "mjesec",
    category: "Pretplate",
    active: true,
  },
  {
    id: "p3",
    name: "Najam terena",
    description: "Rezervacija cijelog terena.",
    price: base * 6,
    unit: "sat",
    category: "Najam",
    note: "Najava minimalno 24h unaprijed.",
    active: true,
  },
  {
    id: "p4",
    name: "Grupni termin",
    description: "Do 20 osoba, uz voditelja.",
    price: base * 16,
    unit: "termin",
    category: "Grupe",
    active: true,
  },
];

export const venues: Venue[] = [
  {
    id: "v1",
    slug: "nsd-gradski-vrt",
    name: "NŠD Gradski vrt",
    category: "dvorane",
    shortDescription: "Središnja višenamjenska sportska dvorana Grada Osijeka.",
    description:
      "Nastavno-športska dvorana Gradski vrt višenamjenski je sportski kompleks namijenjen održavanju treninga, sportskih natjecanja, kulturnih događanja, koncerata, sajmova i drugih javnih manifestacija.",
    address: "Kneza Trpimira 23, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",
    indoor: true,

    activities: [
      "Rukomet",
      "Košarka",
      "Odbojka",
      "Gimnastika",
      "Borilački sportovi",
      "Mali nogomet",
      "Koncerti",
      "Manifestacije",
    ],

    facilities: [
      "Velika sportska dvorana",
      "Male sportske dvorane",
      "Tribine",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Prostorije za službene osobe",
      "Ugostiteljski prostor",
      "Press prostor",
      "Parking",
    ],

    accessibility: [
      "Pristupačan ulaz",
      "Prilagođeni sanitarni čvorovi",
      "Pristup gledalištu",
      "Rezervirana parkirališna mjesta",
    ],

    heroImage: "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt2.jpg",

    gallery: [
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt3.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt4.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt5.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt6.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt7.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt8.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt9.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt10.jpg",
      "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt11.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Petak",
        hours: "Prema rasporedu treninga i događanja",
      },
      {
        day: "Subota – Nedjelja",
        hours: "Prema rasporedu natjecanja i događanja",
      },
    ],

    prices: commonPrices(5),

    sections: [
      {
        id: "male-dvorane",
        name: "Male dvorane NŠD Gradski vrt",
        shortDescription:
          "Dvorane za trening, rekreaciju i manje sportske programe.",
        description:
          "Male dvorane unutar kompleksa NŠD Gradski vrt namijenjene su treninzima sportskih klubova, školskim programima, borilačkim sportovima, gimnastici, plesu, rekreaciji i drugim sportskim aktivnostima.",

        activities: [
          "Gimnastika",
          "Borilački sportovi",
          "Ples",
          "Fitness",
          "Kondicijski trening",
          "Školski sport",
          "Rekreacija",
        ],

        facilities: [
          "Male sportske dvorane",
          "Svlačionice",
          "Sanitarni čvorovi",
          "Spremišta sportske opreme",
          "Parking",
        ],

        accessibility: [
          "Pristupačan ulaz",
          "Pristup dvoranama",
          "Prilagođeni sanitarni čvorovi",
        ],

        openingHours: [
          {
            day: "Ponedjeljak – Petak",
            hours: "Prema rasporedu treninga",
          },
          {
            day: "Subota – Nedjelja",
            hours: "Prema rasporedu korištenja",
          },
        ],

        prices: commonPrices(4),

        gallery: [
          "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt6.jpg",
          "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt7.jpg",
          "/images/facilities/nsd-gradski-vrt/nsd-gradski-vrt8.jpg",
        ],
      },
    ],

    featured: true,
    location: {
      name: "Gradski vrt",
      googleMaps:
        "https://www.google.com/maps?q=Sportska+dvorana+Gradski+vrt+Osijek",
    },
  },
  {
    id: "v2",
    slug: "sd-zrinjevac",
    name: "ŠD Zrinjevac",
    category: "dvorane",
    shortDescription:
      "Tradicionalna osječka sportska dvorana u središtu grada.",
    description:
      "Športska dvorana Zrinjevac jedan je od prepoznatljivih osječkih sportskih objekata. Koristi se za treninge i natjecanja sportskih klubova, školski i rekreativni sport te različite sportske manifestacije.",
    address: "Adama Reisnera 46/A, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",
    indoor: true,
    activities: [
      "Rukomet",
      "Košarka",
      "Odbojka",
      "Mali nogomet",
      "Borilački sportovi",
      "Školski sport",
      "Rekreacija",
    ],
    facilities: [
      "Glavna sportska dvorana",
      "Tribine",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Prostorije za klubove",
      "Parking u blizini",
    ],
    accessibility: [
      "Pristupačan ulaz",
      "Pristup gledalištu",
      "Prilagođeni sanitarni čvorovi",
    ],
    heroImage: "/images/facilities/sd-zrinjevac/sd-zrinjevac.jpg",
    gallery: [
      "/images/facilities/sd-zrinjevac/sd-zrinjevac2.jpg",
      "/images/facilities/sd-zrinjevac/sd-zrinjevac3.jpg",
      "/images/facilities/sd-zrinjevac/sd-zrinjevac4.jpg",
      "/images/facilities/sd-zrinjevac/sd-zrinjevac5.jpeg",
      "/images/facilities/sd-zrinjevac/sd-zrinjevac6.jpeg",
      "/images/facilities/sd-zrinjevac/sd-zrinjevac7.jpg",
    ],
    openingHours: [
      {
        day: "Ponedjeljak – Petak",
        hours: "Prema rasporedu treninga",
      },
      {
        day: "Subota – Nedjelja",
        hours: "Prema rasporedu natjecanja",
      },
    ],
    prices: commonPrices(4),
    featured: true,
    location: {
      name: "Zrinjevac",
      googleMaps:
        "https://www.google.com/maps?q=Sportska+dvorana+Zrinjevac+Osijek",
    },
  },
  {
    id: "v3",
    slug: "sd-jug",
    name: "ŠD Jug",
    category: "dvorane",
    shortDescription: "Sportska dvorana za klubove, škole i rekreativce.",
    description:
      "Športska dvorana Jug koristi se za svakodnevne treninge sportskih klubova, održavanje utakmica, školski sport i rekreativne programe stanovnika južnog dijela Osijeka.",
    address: "Ulica kralja Petra Svačića 67, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",
    indoor: true,
    activities: [
      "Košarka",
      "Odbojka",
      "Rukomet",
      "Mali nogomet",
      "Školski sport",
      "Rekreacija",
    ],
    facilities: [
      "Sportska dvorana",
      "Tribine",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Prostorije za klubove",
      "Parking",
    ],
    accessibility: [
      "Pristupačan ulaz",
      "Pristup sportskoj površini",
      "Prilagođeni sanitarni čvorovi",
    ],
    heroImage: "/images/facilities/sd-jug2/sd-jug2-3.jpg",

    gallery: [
      "/images/facilities/sd-jug2/sd-jug2.jpg",
      "/images/facilities/sd-jug2/sd-jug2-2.jpg",
      "/images/facilities/sd-jug2/sd-jug2-4.jpg",
      "/images/facilities/sd-jug2/sd-jug2-5.jpg",
      "/images/facilities/sd-jug2/sd-jug2-6.jpg",
      "/images/facilities/sd-jug2/sd-jug2-7.jpg",
      "/images/facilities/sd-jug2/sd-jug2-8.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Petak",
        hours: "Prema rasporedu treninga",
      },
      {
        day: "Subota – Nedjelja",
        hours: "Prema rasporedu natjecanja",
      },
    ],
    prices: commonPrices(4),
    featured: true,
    location: {
      name: "Jug II",
      googleMaps: "https://www.google.com/maps?q=Sportska+dvorana+Jug+Osijek",
    },
  },
  {
    id: "v4",
    slug: "srednjoskolsko-igraliste",
    name: "Srednjoškolsko igralište",
    category: "vanjski-tereni",
    shortDescription: "Najveće javno sportsko igralište u središtu Osijeka.",
    description:
      "Srednjoškolsko igralište, poznato i kao Srednjika, otvoreni je sportsko-rekreacijski kompleks namijenjen građanima, učenicima srednjih škola, sportskim klubovima i udrugama. Kompleks obuhvaća više sportskih terena i površina za nogomet, rukomet, košarku, odbojku, atletiku i rekreaciju. Korištenje otvorenih sadržaja igrališta za građane je bez naknade.",
    address: "Istarska 1D, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "uprava@sportski-objekti.hr",
    indoor: false,

    activities: [
      "Mali nogomet",
      "Rukomet",
      "Košarka",
      "Odbojka",
      "Atletika",
      "Trčanje",
      "Školski sport",
      "Rekreacija",
    ],

    facilities: [
      "Četiri rukometno-malonogometna terena",
      "Košarkaška igrališta",
      "Odbojkaška igrališta",
      "Atletska staza",
      "Malonogometno igralište s umjetnom travom",
      "Nogometni kavez",
      "Stolovi za stolni tenis",
      "Prostor za bicikle",
      "Rasvjeta",
    ],

    accessibility: [
      "Slobodan pristup otvorenim terenima",
      "Pristup pješacima",
      "Pristup biciklima",
      "Ravne vanjske sportske površine",
    ],

    heroImage:
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste.jpg",

    gallery: [
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste2.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste3.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste4.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste5.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste6.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste7.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste8.jpg",
      "/images/facilities/srednjeskolsko-igraliste/srednjeskolsko-igraliste9.jpg",
    ],

    openingHours: [
      {
        day: "1. travnja – 31. listopada",
        hours: "08:00 – 23:00",
      },
      {
        day: "1. studenoga – 31. ožujka",
        hours: "08:00 – 21:00",
      },
    ],

    prices: [
      {
        id: "srednjika-p1",
        name: "Korištenje otvorenih sportskih terena",
        description: "Slobodno korištenje igrališta za građane i rekreativce.",
        price: 0,
        unit: "osoba",
        active: true,
        note: "Korištenje bez naknade.",
      },
    ],

    sections: [
      {
        id: "nogometni-kavez",
        name: "Nogometni kavez",
        shortDescription: "Ograđeni teren za mali nogomet i rekreativnu igru.",
        description:
          "Nogometni kavez na Srednjoškolskom igralištu namijenjen je igranju malog nogometa, školskim sportskim programima, rekreaciji građana i organizaciji manjih sportskih događanja.",

        activities: [
          "Mali nogomet",
          "Nogomet",
          "Školski sport",
          "Rekreacija",
          "Sportski turniri",
        ],

        facilities: [
          "Ograđeni sportski teren",
          "Golovi",
          "Zaštitna mreža",
          "Rasvjeta",
          "Pristup Srednjoškolskom igralištu",
        ],

        accessibility: ["Pristup sportskoj površini", "Pristup pješacima"],

        openingHours: [
          {
            day: "Ponedjeljak – Nedjelja",
            hours: "Prema rasporedu korištenja",
          },
        ],

        prices: commonPrices(3),

        gallery: [
          "/images/facilities/srednjeskolsko-igraliste/nogometni-kavez-srednjeskolsko-igraliste.jpg",
          "/images/facilities/srednjeskolsko-igraliste/nogometni-kavez-srednjeskolsko-igraliste2.jpg",
          "/images/facilities/srednjeskolsko-igraliste/nogometni-kavez-srednjeskolsko-igraliste3.jpg",
        ],
      },
    ],

    featured: true,
    location: {
      name: "Središte Osijeka",
      googleMaps:
        "https://www.google.com/maps?q=Srednjoškolsko+igralište+Osijek",
    },
  },
  {
    id: "v5",
    slug: "pampas",
    name: "Pampas",
    category: "specijalizirani-objekti",
    shortDescription:
      "Sportski kompleks Pampas koji obuhvaća streljanu, kuglanu i ostale specijalizirane sportske sadržaje.",
    description:
      "Pampas je sportski kompleks namijenjen razvoju specijaliziranih sportova. Unutar kompleksa nalaze se Streljana Pampas i Kuglana Pampas, koje koriste sportski klubovi, natjecatelji i rekreativci tijekom cijele godine.",
    address: "Šandora Petefija 204/A, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: true,

    activities: [
      "Sportska natjecanja",
      "Sportske pripreme",
      "Treninzi",
      "Rekreacija",
    ],

    facilities: ["Parking", "Sanitarni čvorovi", "Svlačionice"],

    accessibility: ["Pristupačan ulaz", "Pristup sportskim sadržajima"],

    heroImage: "/images/facilities/pampas/pampas.jpg",

    gallery: [
      "/images/facilities/pampas/pampas2.jpg",
      "/images/facilities/pampas/pampas3.jpg",
      "/images/facilities/pampas/pampas4.jpg",
      "/images/facilities/pampas/pampas5.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu korištenja objekata",
      },
    ],

    prices: commonPrices(3),

    location: {
      name: "Pampas",
      googleMaps:
        "https://www.google.com/maps?q=Sportski+kompleks+Pampas+Osijek",
    },

    sections: [
      {
        id: "pampas-streljana",
        slug: "streljana-pampas",
        name: "Streljana Pampas",

        shortDescription: "Specijalizirani objekt za streljački sport.",

        description:
          "Streljana Pampas namijenjena je treninzima, natjecanjima i razvoju streljačkog sporta. Objekt koriste sportski klubovi, natjecatelji i drugi korisnici prema rasporedu.",

        gallery: [
          "/images/facilities/streljana-pampas/streljana-pampas.jpg",
          "/images/facilities/streljana-pampas/streljana-pampas2.jpg",
          "/images/facilities/streljana-pampas/streljana-pampas3.jpg",
          "/images/facilities/streljana-pampas/streljana-pampas4.jpg",
          "/images/facilities/streljana-pampas/streljana-pampas5.jpg",
        ],

        activities: [
          "Sportsko streljaštvo",
          "Trening streljaštva",
          "Natjecanja",
          "Sportske pripreme",
        ],

        facilities: [
          "Streljačka mjesta",
          "Prostor za natjecatelje",
          "Prostor za suce",
          "Svlačionice",
          "Sanitarni čvorovi",
        ],

        accessibility: ["Pristupačan ulaz", "Pristup sportskom prostoru"],

        openingHours: [
          {
            day: "Ponedjeljak – Nedjelja",
            hours: "Prema rasporedu treninga i natjecanja",
          },
        ],

        prices: commonPrices(3),
      },

      {
        id: "pampas-kuglana",
        slug: "kuglana-pampas",
        name: "Kuglana Pampas",

        shortDescription:
          "Kuglana namijenjena treninzima, natjecanjima i rekreaciji.",

        description:
          "Kuglana Pampas koristi se za treninge i natjecanja kuglačkih klubova te rekreativno kuglanje.",

        gallery: [
          "/images/facilities/kuglana-pampas/kuglana-pampas.jpg",
          "/images/facilities/kuglana-pampas/kuglana-pampas2.jpg",
          "/images/facilities/kuglana-pampas/kuglana-pampas3.jpg",
          "/images/facilities/kuglana-pampas/kuglana-pampas4.jpg",
          "/images/facilities/kuglana-pampas/kuglana-pampas5.jpg",
          "/images/facilities/kuglana-pampas/kuglana-pampas6.jpg",
        ],

        activities: [
          "Kuglanje",
          "Rekreativno kuglanje",
          "Trening",
          "Ligaška natjecanja",
          "Turniri",
        ],

        facilities: [
          "Kuglačke staze",
          "Prostor za igrače",
          "Svlačionice",
          "Sanitarni čvorovi",
          "Gledalište",
        ],

        accessibility: ["Pristupačan ulaz", "Pristup kuglačkim stazama"],

        openingHours: [
          {
            day: "Ponedjeljak – Petak",
            hours: "Prema rasporedu treninga",
          },
          {
            day: "Subota – Nedjelja",
            hours: "Prema rasporedu natjecanja",
          },
        ],

        prices: commonPrices(4),
      },
    ],
  },
  {
    id: "v6",
    slug: "stadion-gradski-vrt",
    name: "Stadion Gradski vrt",
    category: "stadioni",
    shortDescription: "Stadion za nogomet, atletiku i sportske manifestacije.",
    description:
      "Stadion Gradski vrt sportski je objekt namijenjen nogometnim treninzima i utakmicama, atletskim aktivnostima i drugim sportskim događanjima. Kompleks uključuje glavni teren, tribine i prateće sportske prostorije.",
    address: "Woodrowa Wilsona 2, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",
    indoor: false,
    activities: [
      "Nogomet",
      "Atletika",
      "Trening",
      "Sportska natjecanja",
      "Sportske manifestacije",
    ],
    facilities: [
      "Glavni nogometni teren",
      "Atletska staza",
      "Tribine",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Prostorije za službene osobe",
      "Parking",
    ],
    accessibility: [
      "Pristupačan ulaz",
      "Pristup tribinama",
      "Rezervirana mjesta za osobe s invaliditetom",
      "Prilagođeni sanitarni čvorovi",
    ],
    heroImage: "/images/facilities/stadion-gradski-vrt/stadion-gradski-vrt.jpg",

    gallery: [
      "/images/facilities/stadion-gradski-vrt/stadion-gradski-vrt2.jpg",
      "/images/facilities/stadion-gradski-vrt/stadion-gradski-vrt3.jpg",
      "/images/facilities/stadion-gradski-vrt/stadion-gradski-vrt4.jpg",
      "/images/facilities/stadion-gradski-vrt/stadion-gradski-vrt5.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Petak",
        hours: "Prema rasporedu treninga",
      },
      {
        day: "Subota – Nedjelja",
        hours: "Prema rasporedu utakmica i događanja",
      },
    ],
    prices: commonPrices(5),
    featured: true,
    location: {
      name: "Gradski vrt",
      googleMaps: "https://www.google.com/maps?q=Stadion+Gradski+vrt+Osijek",
    },
  },
  {
    id: "v7",
    slug: "hipodrom-pampas",
    name: "Hipodrom Pampas",
    category: "vanjski-tereni",
    shortDescription: "Prostor za konjički sport, treninge i natjecanja.",
    description:
      "Hipodrom Pampas namijenjen je konjičkom sportu, treninzima, natjecanjima i manifestacijama. Objekt obuhvaća otvorene sportske površine i prateću infrastrukturu za konje, sportaše i posjetitelje.",
    address: "Šandora Petefija, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",
    indoor: false,
    activities: [
      "Konjički sport",
      "Jahanje",
      "Preponsko jahanje",
      "Trening konja",
      "Konjička natjecanja",
      "Manifestacije",
    ],
    facilities: [
      "Konjička staza",
      "Otvoreni tereni",
      "Prostor za trening",
      "Prostor za natjecanja",
      "Parking",
    ],
    accessibility: ["Pristup otvorenim površinama", "Pristup gledateljima"],
    heroImage: "/images/facilities/hipodrom-pampas/hipodrom-pampas.jpg",
    gallery: [
      "/images/facilities/hipodrom-pampas/hipodrom-pampas2.jpg",
      "/images/facilities/hipodrom-pampas/hipodrom-pampas3.jpg",
      "/images/facilities/hipodrom-pampas/hipodrom-pampas4.jpg",
      "/images/facilities/hipodrom-pampas/hipodrom-pampas5.jpg",
      "/images/facilities/hipodrom-pampas/hipodrom-pampas6.jpg",
    ],
    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu treninga i događanja",
      },
    ],
    prices: commonPrices(3),
    location: {
      name: "Pampas",
      googleMaps: "https://www.google.com/maps?q=Hipodrom+Pampas+Osijek",
    },
  },
  {
    id: "v8",
    slug: "sc-olimpija",
    name: "ŠC Olimpija",
    category: "stadioni",

    shortDescription:
      "Sportski centar s velikim nogometnim terenom i malonogometnim igralištem.",

    description:
      "Športski centar Olimpija namijenjen je treninzima, natjecanjima i rekreativnom korištenju. Kompleks obuhvaća veliki nogometni teren te malonogometni teren koji koriste sportski klubovi, škole i građani.",

    address: "Ul. Zeleno polje 32",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: false,

    activities: [
      "Nogomet",
      "Malonogomet",
      "Sportske pripreme",
      "Natjecanja",
      "Rekreacija",
    ],

    facilities: [
      "Veliki nogometni teren",
      "Malonogometni teren",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Parking",
    ],

    accessibility: ["Pristupačan ulaz"],

    heroImage: "/images/facilities/sc-olimpija/sc-olimpija.jpg",

    gallery: [
      "/images/facilities/sc-olimpija/sc-olimpija2.jpg",
      "/images/facilities/sc-olimpija/sc-olimpija3.jpg",
      "/images/facilities/sc-olimpija/sc-olimpija4.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu korištenja",
      },
    ],

    prices: commonPrices(5),

    location: {
      name: "Olimpija",
      googleMaps: "https://www.google.com/maps?q=ŠC+Olimpija+Osijek",
    },

    sections: [
      {
        id: "olimpija-veliki-teren",
        slug: "veliki-nogometni-teren",
        name: "Veliki nogometni teren",

        description:
          "Glavni nogometni teren ŠC Olimpija namijenjen treninzima i natjecanjima.",

        gallery: [
          "/images/facilities/sc-olimpija/sc-olimpija-veliki-teren.jpg",
          "/images/facilities/sc-olimpija/sc-olimpija-veliki-teren3.jpg",
          "/images/facilities/sc-olimpija/sc-olimpija-veliki-teren4.jpg",
          "/images/facilities/sc-olimpija/sc-olimpija-veliki-teren5.jpg",
        ],

        activities: ["Nogomet", "Treninzi", "Natjecanja"],

        facilities: ["Prirodni travnjak", "Svlačionice", "Rasvjeta"],

        openingHours: [
          {
            day: "Ponedjeljak – Nedjelja",
            hours: "Prema rasporedu",
          },
        ],

        prices: commonPrices(5),
      },

      {
        id: "olimpija-malonogometni",
        slug: "malonogometni-teren",
        name: "Malonogometni teren",

        description:
          "Malonogometni teren za treninge, rekreaciju i natjecanja.",

        gallery: [
          "/images/facilities/sc-olimpija/sc-olimpija-malonogometni-teren.jpg",
          "/images/facilities/sc-olimpija/sc-olimpija-malonogometni-teren2.jpg",
          "/images/facilities/sc-olimpija/sc-olimpija-malonogometni-teren3.jpg",
        ],

        activities: ["Malonogomet", "Rekreacija"],

        facilities: ["Umjetna trava", "Rasvjeta"],

        openingHours: [
          {
            day: "Ponedjeljak – Nedjelja",
            hours: "Prema rasporedu",
          },
        ],

        prices: commonPrices(6),
      },
    ],
  },
  {
    id: "v9",
    slug: "teniski-centar-perivoj-kralja-tomislava",
    name: "Teniski centar Perivoj kralja Tomislava",
    category: "vanjski-tereni",
    shortDescription: "Teniski tereni smješteni u Perivoju kralja Tomislava.",
    description:
      "Teniski centar Perivoj kralja Tomislava namijenjen je treninzima, rekreativnom igranju tenisa, školi tenisa i održavanju turnira. Centar se nalazi u neposrednoj blizini središta Osijeka.",
    address: "Perivoj kralja Tomislava 1, 31000 Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",
    indoor: false,
    activities: [
      "Tenis",
      "Škola tenisa",
      "Rekreativni tenis",
      "Trening",
      "Teniski turniri",
    ],
    facilities: [
      "Teniski tereni",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Prostor za odmor",
      "Rasvjeta",
      "Parking u blizini",
    ],
    accessibility: ["Pristup teniskim terenima", "Pristup gledateljima"],
    heroImage:
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek.jpg",

    gallery: [
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek2.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek3.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek4.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek5.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek6.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek7.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek8.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek9.jpg",
      "/images/facilities/teniski-centar-osijek/teniski-centar-osijek10.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema sezonskom rasporedu",
      },
    ],
    prices: commonPrices(5),
    featured: true,
    location: {
      name: "Perivoj kralja Tomislava",
      googleMaps:
        "https://www.google.com/maps?q=Teniski+centar+Perivoj+kralja+Tomislava+Osijek",
    },
  },
  {
    id: "v10",
    slug: "gradski-bazeni",
    name: "Gradski bazeni",
    category: "bazeni",
    shortDescription:
      "Zatvoreni bazenski kompleks za sport, rekreaciju i školu plivanja.",
    description:
      "Gradski bazeni Osijek zatvoreni su bazenski kompleks namijenjen plivanju, vaterpolu, školi plivanja, treninzima sportskih klubova i rekreaciji građana tijekom cijele godine.",
    address: "Martina Divalta 6A, 31000 Osijek",
    phone: "+385 31 570 066",
    email: "info@sportski-objekti.hr",
    indoor: true,
    activities: [
      "Plivanje",
      "Vaterpolo",
      "Škola plivanja",
      "Rekreativno plivanje",
      "Aqua aerobik",
      "Sportski treninzi",
    ],
    facilities: [
      "Veliki bazen",
      "Mali bazen",
      "Dječji bazen",
      "Svlačionice",
      "Tuševi",
      "Sanitarni čvorovi",
      "Prostor za odmor",
      "Parking",
    ],
    accessibility: [
      "Pristupačan ulaz",
      "Prilagođene svlačionice",
      "Prilagođeni sanitarni čvorovi",
      "Pristup bazenskom prostoru",
    ],
    heroImage: "/images/facilities/gradski-bazeni/gradski-bazeni.jpg",

    gallery: [
      "/images/facilities/gradski-bazeni/gradski-bazeni2.jpg",
      "/images/facilities/gradski-bazeni/gradski-bazeni3.jpg",
      "/images/facilities/gradski-bazeni/gradski-bazeni4.jpeg",
      "/images/facilities/gradski-bazeni/gradski-bazeni5.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Petak",
        hours: "Prema važećem rasporedu",
      },
      {
        day: "Subota – Nedjelja",
        hours: "Prema važećem rasporedu",
      },
    ],
    prices: commonPrices(4),
    featured: true,
    location: {
      name: "Gradski vrt",
      googleMaps: "https://www.google.com/maps?q=Gradski+bazeni+Osijek",
    },
  },
  {
    id: "v11",
    slug: "sc-mackamama",
    name: "ŠC Mačkamama",
    category: "stadioni",

    shortDescription:
      "Sportski centar u Bosutskom naselju s nogometnim terenom namijenjenim treninzima, natjecanjima i rekreaciji.",

    description:
      "Športski centar Mačkamama nalazi se u Bosutskom naselju u Osijeku. Objekt je namijenjen treninzima, natjecanjima i rekreativnom korištenju te ga koriste sportski klubovi, škole i građani. Glavni sadržaj centra čini nogometni teren s pripadajućom infrastrukturom.",

    address: "Gacka 1",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: false,

    activities: ["Nogomet", "Sportske pripreme", "Natjecanja", "Rekreacija"],

    facilities: [
      "Nogometni teren",
      "Prirodni travnjak",
      "Tribine",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Rasvjeta",
      "Parking",
    ],

    accessibility: ["Pristupačan ulaz"],

    heroImage: "/images/facilities/sc-mackamama/sc-mackamama.jpg",

    gallery: [
      "/images/facilities/sc-mackamama/sc-mackamama2.jpg",
      "/images/facilities/sc-mackamama/sc-mackamama3.jpg",
      "/images/facilities/sc-mackamama/sc-mackamama4.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu korištenja",
      },
    ],

    prices: commonPrices(5),

    location: {
      name: "Mačkamama",
      googleMaps: "https://www.google.com/maps?q=ŠC+Mačkamama+Osijek",
    },

    sections: [],
  },
  {
    id: "v12",
    slug: "iktus",
    name: "Iktus",
    category: "ostalo",

    shortDescription:
      "Veslački centar na obali Drave namijenjen treninzima, natjecanjima i razvoju veslačkog sporta.",

    description:
      "Iktus je veslački centar smješten uz rijeku Dravu u Osijeku. Objekt je namijenjen treninzima, pripremama i natjecanjima veslača te pruža potrebnu infrastrukturu za rad sportskih klubova i organizaciju sportskih događanja na vodi.",

    address: "Šetalište kardinala Franje Šepera 8",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: false,

    activities: ["Veslanje", "Sportske pripreme", "Natjecanja", "Rekreacija"],

    facilities: [
      "Veslački hangar",
      "Pristup rijeci Dravi",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Teretana",
      "Parking",
    ],

    accessibility: ["Pristupačan ulaz"],

    heroImage: "/images/facilities/iktus/iktus.jpg",

    gallery: [
      "/images/facilities/iktus/iktus2.jpg",
      "/images/facilities/iktus/iktus3.jpg",
      "/images/facilities/iktus/iktus4.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu korištenja",
      },
    ],

    prices: commonPrices(5),

    location: {
      name: "Iktus",
      googleMaps: "https://www.google.com/maps?q=Iktus+Osijek",
    },

    sections: [],
  },
  {
    id: "v13",
    slug: "bocarski-dom-retfala",
    name: "Boćarski dom Retfala",
    category: "specijalizirani-objekti",

    shortDescription:
      "Specijalizirani sportski objekt namijenjen boćanju, treninzima i natjecanjima.",

    description:
      "Boćarski dom Retfala specijalizirani je sportski objekt namijenjen treninzima, natjecanjima i rekreativnom bavljenju boćanjem. Objekt koriste sportski klubovi, rekreativci i građani tijekom cijele godine.",

    address: "Ljudevita Posavskog 29/A",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: true,

    activities: ["Boćanje", "Sportske pripreme", "Natjecanja", "Rekreacija"],

    facilities: [
      "Boćarske staze",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Prostor za gledatelje",
      "Parking",
    ],

    accessibility: ["Pristupačan ulaz"],

    heroImage:
      "/images/facilities/bocarski-dom-retfala/bocarski-dom-retfala.jpg",

    gallery: [
      "/images/facilities/bocarski-dom-retfala/bocarski-dom-retfala2.jpg",
      "/images/facilities/bocarski-dom-retfala/bocarski-dom-retfala3.jpg",
      "/images/facilities/bocarski-dom-retfala/bocarski-dom-retfala4.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu korištenja",
      },
    ],

    prices: commonPrices(5),

    location: {
      name: "Boćarski dom Retfala",
      googleMaps: "https://www.google.com/maps?q=Boćarski+dom+Retfala+Osijek",
    },

    sections: [],
  },
  {
    id: "v14",
    slug: "dom-zeljeznicar",
    name: "Dom Željezničar",
    category: "ostalo",

    shortDescription:
      "Sportski objekt namijenjen treninzima, natjecanjima i rekreativnim sportskim aktivnostima.",

    description:
      "Dom Željezničar sportski je objekt kojim upravljaju Športski objekti d.o.o. Namijenjen je treninzima, natjecanjima i rekreativnom korištenju različitih sportskih sadržaja.",

    address: "Osijek",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: true,

    activities: ["Sportske pripreme", "Natjecanja", "Rekreacija"],

    facilities: [
      "Sportska dvorana",
      "Svlačionice",
      "Sanitarni čvorovi",
      "Parking",
    ],

    accessibility: ["Pristupačan ulaz"],

    heroImage: "/images/facilities/dom-zeljeznicar/dom-zeljeznicar.jpg",

    gallery: [
      "/images/facilities/dom-zeljeznicar/dom-zeljeznicar2.jpg",
      "/images/facilities/dom-zeljeznicar/dom-zeljeznicar3.jpg",
      "/images/facilities/dom-zeljeznicar/dom-zeljeznicar4.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Prema rasporedu korištenja",
      },
    ],

    prices: commonPrices(5),

    location: {
      name: "Dom Željezničar",
      googleMaps: "https://www.google.com/maps?q=Dom+Željezničar+Osijek",
    },

    sections: [],
  },
  {
    id: "v15",
    slug: "vanjski-tereni",
    name: "Vanjski tereni",
    category: "vanjski-tereni",

    shortDescription:
      "Mreža javnih sportskih igrališta na području grada Osijeka namijenjenih rekreaciji i sportu.",

    description:
      "Vanjski tereni obuhvaćaju javna sportska igrališta kojima upravljaju Športski objekti d.o.o. Raspoređena su na više lokacija u gradu te građanima omogućuju rekreativno i organizirano bavljenje sportom.",

    address: "Više lokacija u gradu Osijeku",
    phone: "+385 31 285 500",
    email: "info@sportski-objekti.hr",

    indoor: false,

    activities: ["Košarka", "Mali nogomet", "Rukomet", "Odbojka", "Rekreacija"],

    facilities: [
      "Vanjska sportska igrališta",
      "Košarkaški tereni",
      "Malonogometni tereni",
      "Rukometni tereni",
      "Odbojkaška igrališta",
    ],

    accessibility: ["Pristupačan ulaz"],

    heroImage: "/images/facilities/vanjski-tereni/vanjski-tereni.jpg",

    gallery: [
      "/images/facilities/vanjski-tereni/vanjski-tereni2.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni3.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni4.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni5.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni6.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni7.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni8.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni9.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni10.jpg",
      "/images/facilities/vanjski-tereni/vanjski-tereni11.jpg",
    ],

    openingHours: [
      {
        day: "Ponedjeljak – Nedjelja",
        hours: "Dostupno prema pravilima korištenja pojedinog igrališta",
      },
    ],

    prices: commonPrices(5),

    location: {
      name: "Više lokacija",
      googleMaps:
        "https://www.google.com/maps/search/Sportska+igrališta+Osijek",
    },

    sections: [],
  },
];

export const documentCategories: DocumentCategory[] = [
  {
    id: "1",
    slug: "javna-nabava",
    name: "Javna nabava",
    description: "Postupci, planovi i registri javne nabave.",
  },
  {
    id: "2",
    slug: "natjecaji",
    name: "Natječaji",
    description: "Otvoreni i zatvoreni natječaji.",
  },
  {
    id: "3",
    slug: "financijska-izvjesca",
    name: "Financijska izvješća",
    description: "Godišnja financijska izvješća.",
  },
  {
    id: "4",
    slug: "pravilnici",
    name: "Pravilnici",
    description: "Interni pravilnici i akti.",
  },
  {
    id: "5",
    slug: "cjenici",
    name: "Cjenici",
    description: "Cjenici korištenja sportskih objekata.",
  },
  {
    id: "6",
    slug: "planovi-i-izvjesca",
    name: "Planovi i izvješća",
    description: "Poslovni planovi i godišnja izvješća.",
  },
  {
    id: "7",
    slug: "ostali-dokumenti",
    name: "Ostali dokumenti",
    description: "Ostala javno dostupna dokumentacija.",
  },
];

export const documents: DocumentItem[] = [
  {
    id: "d1",
    title: "Plan nabave za 2026. godinu",
    category: "javna-nabava",
    publishedAt: "2026-01-15",
    fileType: "PDF",
    size: "412 KB",
    year: 2026,
  },
  {
    id: "d2",
    title: "Registar ugovora 2025.",
    category: "javna-nabava",
    publishedAt: "2026-01-08",
    fileType: "XLSX",
    size: "128 KB",
    year: 2026,
  },
  {
    id: "d3",
    title: "Odluka o odabiru — održavanje bazena",
    category: "javna-nabava",
    publishedAt: "2025-11-22",
    fileType: "PDF",
    size: "220 KB",
    year: 2025,
  },
  {
    id: "d4",
    title: "Natječaj — voditelj održavanja",
    category: "natjecaji",
    publishedAt: "2026-02-01",
    fileType: "PDF",
    size: "180 KB",
    year: 2026,
  },
  {
    id: "d5",
    title: "Natječaj — spasilac na bazenima (sezona)",
    category: "natjecaji",
    publishedAt: "2026-03-10",
    fileType: "PDF",
    size: "156 KB",
    year: 2026,
  },
  {
    id: "d6",
    title: "Godišnje financijsko izvješće 2024.",
    category: "financijska-izvjesca",
    publishedAt: "2025-04-30",
    fileType: "PDF",
    size: "1.2 MB",
    year: 2025,
  },
  {
    id: "d7",
    title: "Bilanca 2024.",
    category: "financijska-izvjesca",
    publishedAt: "2025-04-30",
    fileType: "PDF",
    size: "540 KB",
    year: 2025,
  },
  {
    id: "d8",
    title: "Pravilnik o radu",
    category: "pravilnici",
    publishedAt: "2024-09-01",
    fileType: "PDF",
    size: "310 KB",
    year: 2024,
  },
  {
    id: "d9",
    title: "Pravilnik o korištenju sportskih objekata",
    category: "pravilnici",
    publishedAt: "2025-06-15",
    fileType: "PDF",
    size: "410 KB",
    year: 2025,
  },
  {
    id: "d10",
    title: "Cjenik — Dvorana Gradski vrt",
    category: "cjenici",
    publishedAt: "2026-01-01",
    fileType: "PDF",
    size: "180 KB",
    year: 2026,
  },
  {
    id: "d11",
    title: "Cjenik — Gradski bazeni",
    category: "cjenici",
    publishedAt: "2026-01-01",
    fileType: "PDF",
    size: "180 KB",
    year: 2026,
  },
  {
    id: "d12",
    title: "Godišnji plan poslovanja 2026.",
    category: "planovi-i-izvjesca",
    publishedAt: "2026-01-20",
    fileType: "PDF",
    size: "820 KB",
    year: 2026,
  },
  {
    id: "d13",
    title: "Izvješće o poslovanju 2024.",
    category: "planovi-i-izvjesca",
    publishedAt: "2025-05-15",
    fileType: "PDF",
    size: "980 KB",
    year: 2025,
  },
  {
    id: "d14",
    title: "Izjava o pristupačnosti",
    category: "ostali-dokumenti",
    publishedAt: "2025-01-01",
    fileType: "PDF",
    size: "90 KB",
    year: 2025,
  },
];

const demoParagraphs = (topic: string) =>
  `
Športski objekti d.o.o. Osijek objavljuju detalje vezane uz temu: ${topic}. Ova obavijest priprema se za buduću sinkronizaciju s CMS-om Grada Osijeka, a trenutno se prikazuje kao demonstracijski sadržaj.

Sve navedene informacije informativnog su karaktera. Konačne odluke, termini i cijene bit će potvrđeni službenim priopćenjima i objavom u sekciji dokumenata.

Za dodatna pitanja i pojašnjenja slobodno se obratite našim odjelima putem kontakt stranice. Naši djelatnici stoje vam na raspolaganju tijekom radnog vremena.
`.trim();

export const news: NewsPost[] = [
  {
    id: "n1",
    slug: "sezona-kupanja-2026",
    title: "Sezona kupanja na Copacabani počinje 1. lipnja",
    excerpt:
      "Otvaramo ljetnu sezonu proširenim programom i produženim radnim vremenom.",
    content: demoParagraphs("otvaranje sezone kupanja na ŠRC Copacabana"),
    category: "Najave",
    categorySlug: "najave",
    publishedAt: "2026-05-12",
    status: "published",
    featured: true,
    readingMinutes: 3,
    syncStatus: "local",
    cityAppSync: false,
    author: "Uredništvo",
    venueName: "ŠRC Copacabana",
  },
  {
    id: "n2",
    slug: "novi-cjenici-2026",
    title: "Novi cjenici korištenja objekata za 2026. godinu",
    excerpt:
      "Ažurirani cjenici svih sportskih objekata dostupni su u sekciji dokumenata.",
    content: demoParagraphs("novi cjenici korištenja sportskih objekata"),
    category: "Obavijesti",
    categorySlug: "obavijesti",
    publishedAt: "2026-01-05",
    status: "published",
    readingMinutes: 2,
    syncStatus: "local",
    author: "Uprava",
  },
  {
    id: "n3",
    slug: "rekonstrukcija-dvorane-jug",
    title: "Završena rekonstrukcija Sportske dvorane Jug",
    excerpt: "Obnovljena parketna podloga, LED rasvjeta i nove svlačionice.",
    content: demoParagraphs("rekonstrukcija Sportske dvorane Jug"),
    category: "Projekti",
    categorySlug: "projekti",
    publishedAt: "2025-11-30",
    status: "published",
    featured: true,
    readingMinutes: 4,
    syncStatus: "local",
    venueName: "Sportska dvorana Jug",
  },
  {
    id: "n4",
    slug: "skola-plivanja-upisi",
    title: "Otvoreni upisi u Školu plivanja — jesenski ciklus",
    excerpt: "Program za djecu i odrasle uz certificirane trenere.",
    content: demoParagraphs("upisi u Školu plivanja"),
    category: "Programi",
    categorySlug: "programi",
    publishedAt: "2025-09-01",
    status: "published",
    readingMinutes: 3,
    syncStatus: "local",
    venueName: "Gradski bazeni",
  },
  {
    id: "n5",
    slug: "gradski-vrt-turnir",
    title: "Međunarodni turnir u Dvorani Gradski vrt",
    excerpt: "Vikend rukometa s ekipama iz pet zemalja.",
    content: demoParagraphs("međunarodni rukometni turnir"),
    category: "Događanja",
    categorySlug: "dogadjanja",
    publishedAt: "2025-10-14",
    status: "published",
    readingMinutes: 2,
    syncStatus: "local",
    venueName: "Dvorana Gradski vrt",
  },
  {
    id: "n6",
    slug: "tenis-sezona",
    title: "Otvorena teniska sezona u Teniskom centru",
    excerpt:
      "Šest zemljanih terena spremno je za rekreativce i klupske treninge.",
    content: demoParagraphs("otvaranje teniske sezone"),
    category: "Najave",
    categorySlug: "najave",
    publishedAt: "2025-04-05",
    status: "published",
    readingMinutes: 2,
    syncStatus: "local",
  },
  {
    id: "n7",
    slug: "javna-nabava-2025",
    title: "Objavljen plan javne nabave za 2025.",
    excerpt: "Cjeloviti plan dostupan je u sekciji dokumenata.",
    content: demoParagraphs("plan javne nabave"),
    category: "Obavijesti",
    categorySlug: "obavijesti",
    publishedAt: "2025-01-20",
    status: "published",
    readingMinutes: 2,
    syncStatus: "local",
    author: "Odjel nabave",
  },
];

export const managementTeam: import("../types").TeamMember[] = [
  {
    id: "m1",
    name: "Ime Prezime",
    position: "Direktor",
    bio: "Vodi poslovanje društva i strateški razvoj sportske infrastrukture.",
  },
  {
    id: "m2",
    name: "Ime Prezime",
    position: "Zamjenik direktora",
    bio: "Operativno vodstvo i koordinacija odjela.",
  },
  {
    id: "m3",
    name: "Ime Prezime",
    position: "Voditelj sportskih objekata",
    bio: "Odgovoran za rad dvorana, bazena i terena.",
  },
  {
    id: "m4",
    name: "Ime Prezime",
    position: "Voditelj održavanja",
    bio: "Tehnička služba i kontinuitet rada objekata.",
  },
  {
    id: "m5",
    name: "Ime Prezime",
    position: "Voditelj financija",
    bio: "Financijsko planiranje, kontroling i izvještavanje.",
  },
  {
    id: "m6",
    name: "Ime Prezime",
    position: "Voditelj administracije",
    bio: "Pravni poslovi, kadrovi i uredsko poslovanje.",
  },
];

export const contactDepartments: ContactDepartment[] = [
  {
    id: "c1",
    name: "Uprava",
    person: "Uprava društva",
    email: "uprava@sportski-objekti.hr",
    phone: "+385 31 251 400",
  },
  {
    id: "c2",
    name: "Rezervacije",
    person: "Odjel rezervacija",
    email: "rezervacije@sportski-objekti.hr",
    phone: "+385 31 251 401",
  },
  {
    id: "c3",
    name: "Javna nabava",
    person: "Odjel nabave",
    email: "nabava@sportski-objekti.hr",
    phone: "+385 31 251 402",
  },
  {
    id: "c4",
    name: "Održavanje",
    person: "Tehnička služba",
    email: "odrzavanje@sportski-objekti.hr",
    phone: "+385 31 251 403",
  },
];

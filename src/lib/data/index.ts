import type {
  ContactDepartment,
  DocumentCategory,
  DocumentItem,
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

    prices: [],

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

        prices: [],

        gallery: [
          "/images/facilities/nsd-gradski-vrt/mala-dvorana-nsd-gradski-vrt.jpg",
          "/images/facilities/nsd-gradski-vrt/mala-dvorana-nsd-gradski-vrt2.jpg",
          "/images/facilities/nsd-gradski-vrt/mala-dvorana-nsd-gradski-vrt3.jpeg",
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
    prices: [],
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
    prices: [],
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
        
        bookingUrl: "https://theplayoff.app/",
        
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

        prices: [],

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

    prices: [],

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

        prices: [],
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

        prices: [],
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
    prices: [],
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
    prices: [],
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

    prices: [],

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

        prices: [],
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

        prices: [],
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
    bookingUrl: "https://www.sporty.plus/hr",
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
    prices: [],
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
    prices: [],
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

    prices: [],

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

    prices: [],

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

    prices: [],

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

    prices: [],

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

    prices: [],

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
    slug: "godisnja-financijska-izvjesca",
    name: "Godišnja financijska izvješća",
    description: "Godišnja financijska izvješća Društva.",
  },
  {
    id: "2",
    slug: "sponzorstva-i-donacije",
    name: "Sponzorstva i donacije",
    description: "Pregled sponzorstava i donacija.",
  },
  {
    id: "3",
    slug: "skupstina",
    name: "Skupština",
    description: "Zapisnici i odluke Skupštine.",
  },
  {
    id: "4",
    slug: "nadzorni-odbor",
    name: "Nadzorni odbor",
    description: "Zapisnici i odluke Nadzornog odbora.",
  },
  {
    id: "5",
    slug: "javna-nabava",
    name: "Javna nabava",
    description:
      "Planovi nabave, registri ugovora i postupci javne nabave.",
  },
  {
    id: "6",
    slug: "zastita-osobnih-podataka",
    name: "Zaštita osobnih podataka",
    description: "Dokumenti vezani uz zaštitu osobnih podataka.",
  },
  {
    id: "7",
    slug: "pravo-na-pristup-informacijama",
    name: "Pravo na pristup informacijama",
    description:
      "Dokumenti i kontakt službenika za informiranje.",
  },
];


const demoParagraphs = (topic: string) =>
  `
Športski objekti d.o.o. Osijek objavljuju detalje vezane uz temu: ${topic}. Ova obavijest priprema se za buduću sinkronizaciju s CMS-om Grada Osijeka, a trenutno se prikazuje kao demonstracijski sadržaj.

Sve navedene informacije informativnog su karaktera. Konačne odluke, termini i cijene bit će potvrđeni službenim priopćenjima i objavom u sekciji dokumenata.

Za dodatna pitanja i pojašnjenja slobodno se obratite našim odjelima putem kontakt stranice. Naši djelatnici stoje vam na raspolaganju tijekom radnog vremena.
`.trim();



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

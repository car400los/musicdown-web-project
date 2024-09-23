import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "This IS Daddy Yankee",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["Daddy Yankee"],
  },
  {
    id: '2',
    albumId: 2,
    title: "This IS Nicky Jam",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Nicky Jam"],
  },
  {
    id: '3',
    albumId: 3,
    title: "This IS El Alfa",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["El Alfa"],
  },
  {
    id: '4',
    albumId: 4,
    title: "This IS Bad Bunny",
    color: colors.blue,
    cover:
      "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Bad Bunny"],
  },
  {
    id: '5',
    albumId: 5,
    title: "This IS Linkin Park",
    color: colors.purple,
    cover:
      "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Linkin Park"],
  },
  {
    id: '6',
    albumId: 6,
    title: "This IS J Balvin",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["J Balvin"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Con Calma",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Daddy Yankee"],
    "album": "Daddy Yankee",
    "duration": "3:13"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Gasolina",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Daddy Yankee"],
    "album": "Daddy Yankee",
    "duration": "3:12"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Limbo",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Daddy Yankee"],
    "album": "Daddy Yankee",
    "duration": "3:44"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "SÚBELE EL VOLUMEN",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Daddy Yankee"],
    "album": "Daddy Yankee",
    "duration": "3:43"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Yo Voy",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Daddy Yankee"],
    "album": "Daddy Yankee",
    "duration": "3:51"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Nicky Jam: Bzrp Music Sessions",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Nicky Jam"],
    "album": "Nicky Jam",
    "duration": "2:38"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Muevelo",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Nicky Jam"],
    "album": "Nicky Jam",
    "duration": "3:14"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "A Correr Los Lakers (Remix)",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Nicky Jam"],
    "album": "Nicky Jam",
    "duration": "5:47"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "En La Cama",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Nicky Jam"],
    "album": "Nicky Jam",
    "duration": "2:37"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Whine Up",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Nicky Jam"],
    "album": "Nicky Jam",
    "duration": "3:35"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "ESTE",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["El Alfa"],
    "album": "El Alfa",
    "duration": "2:42"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Los Aparatos",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["El Alfa"],
    "album": "El Alfa",
    "duration": "3:52"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Paketum",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["El Alfa"],
    "album": "El Alfa",
    "duration": "3:44"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "PLEBADA",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["El Alfa"],
    "album": "El Alfa",
    "duration": "3:41"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Te Llenaste",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["El Alfa"],
    "album": "El Alfa",
    "duration": "3:40"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "La Jumpa",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Bad Bunny"],
    "album": "Bad Bunny",
    "duration": "4:15"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "MONACO",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Bad Bunny"],
    "album": "Bad Bunny",
    "duration": "4:27"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Titi Me Pregunto",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Bad Bunny"],
    "album": "Bad Bunny",
    "duration": "4:03"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "WHERE SHE GOES",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Bad Bunny"],
    "album": "Bad Bunny",
    "duration": "3:51"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "Kemba Walker",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Bad Bunny"],
    "album": "Bad Bunny",
    "duration": "2:32"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Friendly Fire",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Linkin Park"],
    "album": "Linkin Park",
    "duration": "2:56"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "In The End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Linkin Park"],
    "album": "Linkin Park",
    "duration": "3:36"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Numb",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Linkin Park"],
    "album": "Linkin Park",
    "duration": "3:07"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "The Emptiness Machine",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Linkin Park"],
    "album": "Linkin Park",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "What I've Done",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["Linkin Park"],
    "album": "Linkin Park",
    "duration": "3:25"
  },
]
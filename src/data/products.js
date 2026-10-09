import exoticBottle from '../assets/exotic-bottle.png';
import velvetBottle from '../assets/velvet-bottle.png';
import goldenBottle from '../assets/golden-bottle.png';

import passionfruitSlice from '../assets/passionfruit-slice.png';
import blackberrySlice from '../assets/blackberry-slice.png';
import limeSlice from '../assets/lime-slice.png';

export const products = [
  {
    id: "exotic",
    title: "Exotic.",
    tagline: "Fruity",
    subtext: "Taste: Passion Fruit, Cider & Honeycomb Elixir",
    bgColor: "#b197fc",
    bottleImg: exoticBottle,
    decorImg: passionfruitSlice,
    region: "Bordeaux, France",
    abv: "11.5%",
    year: "2021",
    tastingNotes: ["Passion Fruit", "Wild Honey", "Guava", "Golden Apricot"],
    description: "An ethereal blend of passion fruit notes with a silky nectar finish.",
    price: "$114.99"
  },
  {
    id: "velvet",
    title: "Velvet.",
    tagline: "Full-Bodied",
    subtext: "Taste: Ripe Blackberry, Dark Cocoa & Oak",
    bgColor: "#f783ac",
    bottleImg: velvetBottle,
    decorImg: blackberrySlice,
    region: "Tuscany, Italy",
    abv: "14.0%",
    year: "2019",
    tastingNotes: ["Blackberry", "Dark Chocolate", "Toasted Oak", "Plum"],
    description: "Rich, deep red body with warm spices and bold berry complexity.",
    price: "$129.50"
  },
  {
    id: "golden",
    title: "Golden.",
    tagline: "Classic White",
    subtext: "Taste: Crisp Apple, Vanilla & Honeysuckle",
    bgColor: "#ffe066",
    bottleImg: goldenBottle,
    decorImg: limeSlice,
    region: "Napa Valley, USA",
    abv: "12.5%",
    year: "2020",
    tastingNotes: ["Green Apple", "Vanilla Bean", "Pear", "White Peach"],
    description: "Bright golden undertones with crisp acidity and smooth buttery finish.",
    price: "$98.00"
  }
];
import { Product } from "../schemas";

export const getProducts = () => {
  const products = [
    new Product(
      "product1",
      "Starwars",
      "Yoda",
      "$ 13.02",
      "images/poster1.jpg"
    ),
    new Product(
      "product2",
      "Venom",
      "Venom",
      "$ 15.68",
      "images/poster2.jpg"
    ),
    new Product(
      "product3",
      "Spiderman 3",
      "Spiderman",
      "$ 23.15",
      "images/poster3.jpg"
    ),
    new Product(
      "product4",
      "Transformers",
      "Transformers",
      "$ 12.42",
      "images/poster4.jpg"
    ),
    new Product(
      "product5",
      "Onepiece",
      "Onepiece",
      "$ 14.61",
      "images/poster5.jpg"
    ),
    new Product(
      "product6",
      "Treasure planet",
      "treasures",
      "$ 15.23",
      "images/poster6.jpg"
    ),
    new Product(
      "product7", 
      "Steins Gate", 
      "physics", 
      "$ 5.96", 
      "images/poster7.jpg"
    ),
    new Product(
      "product8", 
      "Lein", 
      "computers", 
      "$ 16.82", 
      "images/poster8.jpg"
    ),
    new Product(
      "product9",
      "Bib bop",
      "cosmos",
      "$ 18.17",
      "images/poster9.jpg"
    ),
    new Product(
      "product10",
      "Interstellar",
      "cosmos",
      "$ 6.90",
      "images/poster10.jpg"
    ),
    new Product(
      "product11",
      "Cyberpunk:ER",
      "sad",
      "$ 11.89",
      "images/poster11.jpg"
    ),
    new Product(
      "product12",
      "volk s vuol street",
      "millioner",
      "$ 14.07",
      "images/poster12.jpg"
    ),
    new Product(
      "product13",
      "My little ponny",
      "pizdec",
      "$ 4.90",
      "images/poster13.jpg"
    ),
    new Product(
      "product14",
      "Harry Potter",
      "o4karik",
      "$ 4.97",
      "images/poster14.jpg"
    ),
    new Product(
      "product15",
      "Sumerki",
      "HZ NE SMOTREL",
      "$ 4.75",
      "images/poster15.jpg"
    ),
    new Product(
      "product16",
      "Flash",
      "norm",
      "$ 5.15",
      "images/poster16.jpg"
    ),
    new Product(
      "product17",
      "Avangers",
      "heroes",
      "$ 5.95",
      "images/poster17.jpg"
    ),
    new Product(
      "product18",
      "Teen Titans",
      "no porn only true friendship (я уже забыл английский)",
      "$ 5.48",
      "images/poster18.jpg"
    ),
  ];

  return products;
};

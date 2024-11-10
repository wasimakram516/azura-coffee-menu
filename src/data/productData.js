import whiteChocolateCranberryCookie from '../assets/Cookies/WhiteChocolateCranberryCookie.webp';
import icedVanilla from '../assets/SignatureIcedBevarages/IcedVanilla.webp';
import passionFruitColdBrew from '../assets/SignatureIcedBevarages/PassionFruitColdBrew.webp';
import raspberryBlossom from '../assets/SignatureIcedBevarages/RaspberryBlossom.webp';
import longBlack from '../assets/HotBeverages/LongBlack.webp';
import cortado from '../assets/HotBeverages/Cortado.webp';
import cappuccino from '../assets/HotBeverages/Cappuccino.webp';
import flatWhite from '../assets/HotBeverages/FlatWhite.webp';
import cafeLatte from '../assets/HotBeverages/CafeLatte.webp';
import pourOver from '../assets/HotBeverages/PourOver.webp';
import mocha from '../assets/HotBeverages/Mocha.webp';
import spanishLatte from '../assets/HotBeverages/SpanishLatte.webp';
import hotChocolate from '../assets/HotBeverages/HotChocolate.webp';
import hotMatchaLatte from '../assets/HotBeverages/HotMatchaLatte.webp';
import icedLongBlack from '../assets/ColdBeverages/IcedLongBlack.webp';
import icedPourOver from '../assets/ColdBeverages/IcedPourOver.webp';
import icedSpanishLatte from '../assets/ColdBeverages/IcedSpanishLatte.webp';
import icedLatte from '../assets/ColdBeverages/IcedLatte.webp';
import icedMocha from '../assets/ColdBeverages/IcedMocha.webp';
import coldBrew from '../assets/ColdBeverages/ColdBrew.webp';
import mangoPassion from '../assets/ColdBeverages/MangoPassion.webp';
import icedMatchaLatte from '../assets/ColdBeverages/IcedMatchaLatte.webp';
import icedSpanishMatcha from '../assets/ColdBeverages/IcedSpanishMatcha.webp';
import icedTeaPeach from '../assets/IcedTea/IcedTeaPeach.webp';
import sunriseIcedTea from '../assets/IcedTea/SunriseIcedTea.webp';


const productData = [
  {
    category: "Cookies",
    items: [
      {
        name: "White Chocolate Cranberry Cookie",
        description: "",
        price: 1.000,
        currency: "OMR",
        image: whiteChocolateCranberryCookie
      }
    ]
  },
  {
    category: "Signature Iced Beverages",
    items: [
      {
        name: "Iced Vanilla",
        description: "Beverage made from Vanilla, ice, and sugar",
        price: 2.800,
        currency: "OMR",
        image: icedVanilla,
        trending: true
      },
      {
        name: "Passion Fruit Cold Brew",
        description: "",
        price: 2.800,
        currency: "OMR",
        image: passionFruitColdBrew
      },
      {
        name: "Raspberry Blossom",
        description: "Fresh pineapple juice, refreshing raspberry puree, tonic water, and Azura's signature cold brew.",
        price: 2.800,
        currency: "OMR",
        image: raspberryBlossom
      }
    ]
  },
  {
    category: "Hot Beverages",
    items: [
      {
        name: "Long Black",
        description: "A coffee beverage made by pouring a shot of espresso over hot water, similar to an Americano.",
        price: 1.600,
        currency: "OMR",
        image: longBlack,
        bestSeller: true
      },
      {
        name: "Cortado",
        description: "Indulge in a smooth Cortado with rich coffee and creamy milk, crafted from freshly brewed espresso and steamed milk topped with delicate foam.",
        price: 1.800,
        currency: "OMR",
        image: cortado
      },
      {
        name: "Cappuccino",
        description: "Made with espresso and steamed milk creating rich, velvety taste.",
        price: 1.900,
        currency: "OMR",
        image: cappuccino,
        trending: true
      },
      {
        name: "Flat White",
        description: "Made with a double shot of espresso and steamed milk, it's a perfect balance of strength and creaminess.",
        price: 2.000,
        currency: "OMR",
        image: flatWhite,
        bestSeller: true
      },
      {
        name: "Café Latte",
        description: "Made with espresso and steamed milk, it's the perfect way to start your day.",
        price: 2.000,
        currency: "OMR",
        image: cafeLatte,
        bestSeller: true
      },
      {
        name: "Pour Over",
        description: "",
        price: 2.800,
        currency: "OMR",
        image: pourOver
      },
      {
        name: "Mocha",
        description: "Made with espresso, steamed milk, and chocolate, a blend of flavors that satisfy your sweet tooth.",
        price: 2.100,
        currency: "OMR",
        image: mocha
      },
      {
        name: "Spanish Latte",
        description: "Made with espresso, steamed milk, and a touch of cinnamon.",
        price: 2.300,
        currency: "OMR",
        image: spanishLatte,
        bestSeller: true
      },
      {
        name: "Hot Chocolate",
        description: "Made with rich cocoa powder, a treat when you just want to indulge in something sweet.",
        price: 1.800,
        currency: "OMR",
        image: hotChocolate
      },
      {
        name: "Hot Matcha Latte",
        description: "A hot latte made with matcha green tea powder, milk, and sweetener.",
        price: 2.300,
        currency: "OMR",
        image: hotMatchaLatte
      }
    ]
  },
  {
    category: "Cold Beverages",
    items: [
      {
        name: "Iced Long Black",
        description: "Chilled long black coffee.",
        price: 1.900,
        currency: "OMR",
        image: icedLongBlack
      },
      {
        name: "Iced Pour Over",
        description: "",
        price: 3.000,
        currency: "OMR",
        image: icedPourOver
      },
      {
        name: "Iced Spanish Latte",
        description: "Made with rich espresso, milk, and ice, perfect for hot summer days.",
        price: 2.500,
        currency: "OMR",
        image: icedSpanishLatte,
        bestSeller: true,
        trending: true
      },
      {
        name: "Iced Latte",
        description: "Made with rich espresso, milk, and ice, a refreshing coffee for any time.",
        price: 2.300,
        currency: "OMR",
        image: icedLatte
      },
      {
        name: "Iced Mocha",
        description: "A rich and creamy blend of espresso, chocolate, and milk, perfect to cool you down on a hot day.",
        price: 2.500,
        currency: "OMR",
        image: icedMocha
      },
      {
        name: "Cold Brew",
        description: "Made with quality coffee beans, expertly brewed to perfection, served over ice.",
        price: 2.200,
        currency: "OMR",
        image: coldBrew
      },
      {
        name: "Mango Passion",
        description: "A tropical and refreshing drink made with mango and passion fruit.",
        price: 1.800,
        currency: "OMR",
        image: mangoPassion
      },
      {
        name: "Iced Matcha Latte",
        description: "A chilled beverage made with matcha green tea powder and milk.",
        price: 2.500,
        currency: "OMR",
        image: icedMatchaLatte
      },
      {
        name: "Iced Spanish Matcha",
        description: "",
        price: 2.800,
        currency: "OMR",
        image: icedSpanishMatcha,
        bestSeller: true
      }
    ]
  },
  {
    category: "Iced Tea",
    items: [
      {
        name: "Ice Tea Peach",
        description: "A cold beverage made with peach-flavored tea, typically served over ice.",
        price: 1.800,
        currency: "OMR",
        image: icedTeaPeach
      },
      {
        name: "Sunrise Iced Tea",
        description: "Sweet infused iced tea with mango tea, peach, and rosewater.",
        price: 1.800,
        currency: "OMR",
        image: sunriseIcedTea
      }
    ]
  }
];

export default productData;

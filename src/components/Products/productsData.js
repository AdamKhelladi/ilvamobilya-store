// CategoryImages
import categoryImg1 from "../../assets/products/products-categories-1.png";
import categoryImg2 from "../../assets/products/products-categories-2.png";
import categoryImg3 from "../../assets/products/products-categories-3.png";

// Sofas images
import sofaImage1 from "../../assets/products/SofasModels/model-1.jpg";
import sofaImage2 from "../../assets/products/SofasModels/model-2.jpg";
import sofaImage3 from "../../assets/products/SofasModels/model-3.jpg";
import sofaImage4 from "../../assets/products/SofasModels/model-4.jpg";
import sofaImage5 from "../../assets/products/SofasModels/model-5.jpg";
import sofaImage6 from "../../assets/products/SofasModels/model-6.jpg";
import sofaImage7 from "../../assets/products/SofasModels/model-7.jpg";
import sofaImage8 from "../../assets/products/SofasModels/model-8.jpg";
import sofaImage9 from "../../assets/products/SofasModels/model-9.jpg";
import sofaImage10 from "../../assets/products/SofasModels/model-10.jpg";
import sofaImage11 from "../../assets/products/SofasModels/model-11.jpg";
import sofaImage12 from "../../assets/products/SofasModels/model-12.jpg";
import sofaImage13 from "../../assets/products/SofasModels/model-13.jpg";
import sofaImage14 from "../../assets/products/SofasModels/model-14.jpg";
import sofaImage15 from "../../assets/products/SofasModels/model-15.jpg";
import sofaImage16 from "../../assets/products/SofasModels/model-16.jpg";
import sofaImage17 from "../../assets/products/SofasModels/model-17.jpg";
import sofaImage18 from "../../assets/products/SofasModels/model-18.jpg";
import sofaImage19 from "../../assets/products/SofasModels/model-19.jpg";
import sofaImage20 from "../../assets/products/SofasModels/model-20.jpg";

// Coffee tables images
import coffeeTableImage1 from "../../assets/products/CoffeeTableModels/model-1.jpg";
import coffeeTableImage2 from "../../assets/products/CoffeeTableModels/model-2.jpg";
import coffeeTableImage3 from "../../assets/products/CoffeeTableModels/model-3.jpg";
import coffeeTableImage4 from "../../assets/products/CoffeeTableModels/model-4.jpg";
import coffeeTableImage5 from "../../assets/products/CoffeeTableModels/model-5.jpg";
import coffeeTableImage6 from "../../assets/products/CoffeeTableModels/model-6.jpg";
import coffeeTableImage7 from "../../assets/products/CoffeeTableModels/model-7.jpg";
import coffeeTableImage8 from "../../assets/products/CoffeeTableModels/model-8.jpg";
import coffeeTableImage9 from "../../assets/products/CoffeeTableModels/model-9.jpg";
import coffeeTableImage10 from "../../assets/products/CoffeeTableModels/model-10.jpg";
import coffeeTableImage11 from "../../assets/products/CoffeeTableModels/model-11.jpg";
import coffeeTableImage12 from "../../assets/products/CoffeeTableModels/model-12.jpg";

// Dining tables images
import diningTableImage1 from "../../assets/products/DiningTableModels/model-1.jpg";
import diningTableImage2 from "../../assets/products/DiningTableModels/model-2.jpg";
import diningTableImage3 from "../../assets/products/DiningTableModels/model-3.jpg";
import diningTableImage4 from "../../assets/products/DiningTableModels/model-4.jpg";
import diningTableImage5 from "../../assets/products/DiningTableModels/model-5.jpg";

import { v4 as uuidv4 } from "uuid";

export const productsCategoriesData = [
  {
    id: 1,
    name: "Sofas",
    img: categoryImg3,
  },
  {
    id: 2,
    name: "Coffee Tables",
    img: categoryImg2,
  },
  {
    id: 3,
    name: "Dining Tables",
    img: categoryImg1,
  },
];

export const sofasData = [
  {
    id: 1,
    name: "L Alven",
    price: "106,000 DZD",
    img: sofaImage1,
    rate: "4.8",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid03589hH6sLBcgGGeerMXSTEYwU81RhwADBRKFXvXChB8oq11hKevX3ZFhqkCRyucDgl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 2,
    name: "L Arion",
    price: "98,000 DZD",
    img: sofaImage2,
    rate: "4.3",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02rCKAwarjzwkLZV6rYuV6Yn2U2YkEeEdQQyLyXxVfGM6hP6NHR3o74JaouUi9ufyZl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 3,
    name: "L Arko",
    price: "78,000 DZD",
    img: sofaImage3,
    rate: "4.6",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ckt9LNDPf689Jc3o6Y6P6S3sby7c8szWWY1E81FgddBVUMA1b7xEJAnHNoqQhzX8l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 4,
    name: "Lorene",
    price: "106,000 DZD",
    img: sofaImage4,
    rate: "4.9",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02bC8Nkj8WkYS3Zs2L7Gmc5sWBTaRLvURaGH8rjk9mQHAbFufaBCPMg42qAgW5ZwaQl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 5,
    name: "L Jero",
    price: "78,000 DZD",
    img: sofaImage5,
    rate: "4.2",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0qCynSQXE3FzfLBRP2CuMS3sLcaxGnc97sdm7gJfKYTJBuZ6joNNCV9iLCMN1vaVsl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 6,
    name: "L Cornel",
    price: "88,000 DZD",
    img: sofaImage6,
    rate: "4.7",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02skjrUA92rM4KNSHLnQE2RVCJgZnk1ViFHG9d9S1Vzz8JYfuSGuW1LqT1K3JbhCErl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 7,
    name: "L Loriva",
    price: "78,000 DZD",
    img: sofaImage7,
    rate: "4.4",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02SZ571emRYvta6uuqCG4avQTwVoPXUNxe1do3rzabYY44Y6XNRzmNfTHUbwyErDd1l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 8,
    name: "Evada",
    price: "130,000 DZD",
    img: sofaImage8,
    rate: "4.1",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0jVrXmvAZDirG4Epa4e6dHAZa1M3wr8v4qcvdFFUJVs4frpZjhMZEW9bfNkJpW9htl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 9,
    name: "Viron",
    price: "88,000 DZD",
    img: sofaImage9,
    rate: "4.5",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid04Ec46enw23vP2Sug3vmpQsKPc666xKN3fkpASbmNHWz7c5a1V3nh2ozSjGWe4Lj6l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 10,
    name: "Classique",
    price: "70,000 DA",
    img: sofaImage10,
    rate: "4.8",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02XK3co2d1Nz9aB3n68oGrzV9mGfLF3t7qHvqXW5bhi2JZPudf7XV88t57KqH72n4ml%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 11,
    name: "L Maxwel",
    price: "70,000 DA",
    img: sofaImage11,
    rate: "4.6",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0i6PCmVVapNneGKFQyytomG9KX7Uis5bbym8kM47f64Mfv5qj7MzPcQiHwaeVkp34l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 12,
    name: "Arena",
    price: "70,000 DA",
    img: sofaImage12,
    rate: "4.3",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0jbeF4fAcRgsyhqWYrsmhJvtH242n51BEMAEEd4LvCpxPLbUfRxQJ6SnRZSSdz8zYl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 13,
    name: "L Arena",
    price: "70,000 DA",
    img: sofaImage13,
    rate: "4.7",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02MayYcFR4MNxYy7PwH1hExXtFWNhB7U5QbQ6NKmPW8pRKxKWobPceisNg5wXDwsFwl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 14,
    name: "Kamille",
    price: "86,000 DZD",
    img: sofaImage14,
    rate: "4.5",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0EEwwks6QDMBgBEV7mb5tyFVJB9kMpCiYHFdgsMaBkL7c33mMj6sFHdTFyGAS85hSl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 15,
    name: "Panda",
    price: "115,000 DZD",
    img: sofaImage15,
    rate: "4.9",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02C4osiKqSgGGNpcePBe7g46Vv9NaxR54j5eymhx9h54WSoPRCZgGrkBSw4SQc7SCVl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 16,
    name: "L Ropose",
    price: "86,000 DZD",
    img: sofaImage16,
    rate: "4.2",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0Xm9XKTGCrYtSaSUSdG3CEBtnNtGCDRBPvotHgRT5JuFpYFPxkngnKeZgPuR7FVoQl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 17,
    name: "L Panda",
    price: "96,000 DZD",
    img: sofaImage17,
    rate: "4.4",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02V4yaSR6KrW1oHzujHvzjCYqkTNsKEqVTmGFokNYmiKnL3N3H3rUrEb43kaLMTYewl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 18,
    name: "Mira",
    price: "75,000 DZD",
    img: sofaImage18,
    rate: "4.6",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ZukrXw49xuesCHU2BMQ7uj3ocGpzUKSWS1ib3fqCQ4d8Lrao9Ex4M3GohdkEuEV6l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 19,
    name: "Bubly",
    price: "135,000 DZD",
    img: sofaImage19,
    rate: "4.1",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02T41gtbQoQco4UwBKVJGr1b7tyuibB4MWimj6WiX6x9Ev25JENK1HXZJzWuCMrZi3l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 20,
    name: "Fendi",
    price: "115,000 DZD",
    img: sofaImage20,
    rate: "4.8",
    category: "Sofa Furniture",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0erm57Jrmt1PcADfgmvvLnqSJhtiGGxA9m9dq1ztQ5LSsCRjLXMgJHABvFr6FbvJ2l%26id%3D61572166948470&show_text=true&width=500",
  },
];

export const coffeeTablesData = [
  {
    id: 100,
    name: "MDF Marble 1",
    price: "33,000 DZD",
    img: coffeeTableImage1,
    rate: "4.8",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 101,
    name: "Rounded Wooden 1",
    price: "17,000 DZD",
    img: coffeeTableImage2,
    rate: "4.2",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 102,
    name: "MDF Marble 2",
    price: "35,000 DZD",
    img: coffeeTableImage3,
    rate: "4.6",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 103,
    name: "Classic Table",
    price: "18,000 DZD",
    img: coffeeTableImage4,
    rate: "4.3",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 104,
    name: "MDF Marble 3",
    price: "35,000 DZD",
    img: coffeeTableImage5,
    rate: "4.9",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 105,
    name: "Bois Hetre",
    price: "26,000 DZD",
    img: coffeeTableImage6,
    rate: "4.1",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 106,
    name: "Rounded MDF",
    price: "29,000 DZD",
    img: coffeeTableImage7,
    rate: "4.7",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 107,
    name: "MDF Marble 4",
    price: "35,000 DZD",
    img: coffeeTableImage8,
    rate: "4.4",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 110,
    name: "MDF Marble 5",
    price: "35,000 DZD",
    img: coffeeTableImage11,
    rate: "4.6",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0369zq4ATpw13h3cUTRuLpixsRkKU9RF3GLbZgQH5Sxmr3fQByEA1tXP7r3drQotmPl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 111,
    name: "Glass Table Base",
    price: "15,000 DZD",
    img: coffeeTableImage12,
    rate: "4.3",
    category: "Coffee Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0XSujpqrwf57vYFCUn8enbKeyvVuv6Z2DdUbsQEV5cy7aRruSsB3aSHKsAoCCZdz7l%26id%3D61572166948470&show_text=true&width=500",
  },
];

export const diningTablesData = [
  {
    id: 200,
    name: "Glass Table",
    price: "65,000 DZD",
    img: diningTableImage1,
    rate: "4.7",
    category: "Dining Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0naJZqqmCLVNJoGZmQ8upd1nywMSMZ8D3mW8HzrZtMJyWVSgcqxmk3gB1GADvzoKxl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 201,
    name: "Glass Table",
    price: "65,000 DZD",
    img: diningTableImage2,
    rate: "4.3",
    category: "Dining Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0GWyx8evpmqi9rHRGH6VeQFXs4aqFrSdTn3MXrnzx3XxWSvzJGKQfVQNSK1XLxaV9l%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 202,
    name: "Luxury Marble",
    price: "55,000 DZD",
    img: diningTableImage3,
    rate: "4.6",
    category: "Dining Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0HyHwf7aqUbHbESFUM5QqitH49aC3EHRVgf741enW2FAqXb5kbSP4idojQ41J3aREl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 203,
    name: "Rounded Wooden",
    price: "55,000 DZD",
    img: diningTableImage4,
    rate: "4.1",
    category: "Dining Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ehUfa5hvxzXXtAtZGpYYtpBpQyuhPW57ekAZnYFpSDGewvkVBdGj3gMtY6WcPfidl%26id%3D61572166948470&show_text=true&width=500",
  },
  {
    id: 204,
    name: "Luxury Marble",
    price: "55,000 DZD",
    img: diningTableImage5,
    rate: "4.8",
    category: "Dining Table",
    fbLink:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ehUfa5hvxzXXtAtZGpYYtpBpQyuhPW57ekAZnYFpSDGewvkVBdGj3gMtY6WcPfidl%26id%3D61572166948470&show_text=true&width=500",
  },
];

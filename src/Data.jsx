import cat1 from "./images/cat-1.png";
import cat2 from "./images/cat-2.png";
import cat3 from "./images/cat-3.png";
import cat4 from "./images/cat-4.png";
import cat5 from "./images/cat-5.png";
import cat6 from "./images/cat-6.png";
import cat7 from "./images/cat-7.png";
import cat8 from "./images/cat-8.png";
import cat9 from "./images/cat-9.png";
import pd1 from "./images/product-1.jpg";
import pd2 from "./images/product-2.jpg";
import pd3 from "./images/product-3.jpg";
import pd4 from "./images/product-4.jpg";
import pd5 from "./images/product-5.jpg";
import pd6 from "./images/product-6.jpg";
import pd7 from "./images/product-7.jpg";
import pd8 from "./images/product-8.jpg";
const Headerdata = [
    {
        id: 1,
        title: "Home",
        tlink: "/home"
    },
    {
        id: 2,
        title: "About us",
        tlink: "/about"
    },
    {
        id: 3,
        title: "Shop",
        tlink: "/shop"
    },
    {
        id: 4,
        title: "Menu",
        tlink: "/#"
    },
    {
        id: 5,
        title: "Vendors",
        tlink: "/#"
    },
    {
        id: 6,
        title: "Pages",
        tlink: "/#"
    },
    {
        id: 7,
        title: "Contact",
        tlink: "/#"
    },
    {
        id: 8,
        title: "Account",
        tlink: "/#"
    },
]

const category = [
    {
        id: 1,
        name: "cake & milk",
        nlink: "/#"
    },
    {
        id: 2,
        name: "coffee & tea",
        nlink: "/#"
    },
    {
        id: 3,
        name: "pet food",
        nlink: "/#"
    },
    {
        id: 4,
        name: "vegetables",
        nlink: "/#"
    }
]

const categoryitems = [
    {
        id: 1,
        catimg: `${cat1}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 2,
        catimg: `${cat2}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 3,
        catimg: `${cat3}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 4,
        catimg: `${cat4}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 5,
        catimg: `${cat1}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 6,
        catimg: `${cat5}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 7,
        catimg: `${cat6}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 8,
        catimg: `${cat7}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 9,
        catimg: `${cat8}`,
        name: "organic kiwi",
        items: "28 items"
    },
    {
        id: 10,
        catimg: `${cat9}`,
        name: "organic kiwi",
        items: "28 items"
    }
]
const footercdata = [
    {
        id: 1,
        name: " About us",
        nlink: "/#"
    },
    {
        id: 2,
        name: "Delivery Information",
        nlink: "/#"
    },
    {
        id: 3,
        name: "privacy pocily",
        nlink: "/#"
    },
    {
        id: 4,
        name: "terms & conditions",
        nlink: "/#"
    },
    {
        id: 5,
        name: "Contact",
        nlink: "/#"
    },
    {
        id: 6,
        name: "Help",
        nlink: "/#"
    },
    {
        id: 7,
        name: "Carrers",
        nlink: "/#"
    }
]
const footeradata = [
    {
        id: 1,
        name: "Sign in",
        nlink: "/#"
    },
    {
        id: 2,
        name: "view Cart",
        nlink: "/#"
    },
    {
        id: 3,
        name: "my wishlist",
        nlink: "/#"
    },
    {
        id: 4,
        name: "track my order",
        nlink: "/#"
    },
    {
        id: 5,
        name: "help ticket",
        nlink: "/#"
    },
    {
        id: 6,
        name: "shipping ticket",
        nlink: "/#"
    },
    {
        id: 7,
        name: "product details",
        nlink: "/#"
    }
]
const footercodata = [
    {
        id: 1,
        name: "Become a vendor",
        nlink: "/#"
    },
    {
        id: 2,
        name: "Farmhouse",
        nlink: "/#"
    },
    {
        id: 3,
        name: "Farmer",
        nlink: "/#"
    },
    {
        id: 4,
        name: "Farm conditions",
        nlink: "/#"
    },
    {
        id: 5,
        name: "farm career",
        nlink: "/#"
    },
    {
        id: 6,
        name: "our suppliers",
        nlink: "/#"
    },
    {
        id: 7,
        name: "our promotions",
        nlink: "/#"
    }
]
const footerpdata = [
    {
        id: 1,
        name: "Milkshake",
        nlink: "/#"
    },
    {
        id: 2,
        name: "Butter",
        nlink: "/#"
    },
    {
        id: 3,
        name: "Eggs",
        nlink: "/#"
    },
    {
        id: 4,
        name: "Mrmalades",
        nlink: "/#"
    },
    {
        id: 5,
        name: "chees",
        nlink: "/#"
    },
    {
        id: 6,
        name: "butterscotch",
        nlink: "/#"
    },
    {
        id: 7,
        name: "Tea & coffee",
        nlink: "/#"
    }
]
const productsdata = [
    {
        img: `${pd1}`,
        text: "snack",
        name: "bandy bandy",
        price: 90,
        id: 1
    },
    {
        img: `${pd2}`,
        text: "snack",
        name: "french fries",
        price: 50,
        id: 2
    },
    {
        img: `${pd3}`,
        text: "snack",
        name: "sweet potato",
        price: 33,
        id: 3
    },
    {
        img: `${pd4}`,
        text: "snack",
        name: "penuts butter",
        price: 66,
        id: 4
    },
    {
        img: `${pd5}`,
        text: "snack",
        name: "nut cracker",
        price: 50,
        id: 5
    },
    {
        img: `${pd6}`,
        text: "snack",
        name: "juice",
        price: 60,
        id: 6
    },
    {
        img: `${pd7}`,
        text: "snack",
        name: "pista",
        price: 50,
        id: 7
    },
    {
        img: `${pd8}`,
        price: 80,
        id: 8,
        text: "snack",
        name: "green tea"
    }
]

export {
    Headerdata,
    category,
    categoryitems,
    footeradata,
    footercdata,
    footerpdata,
    footercodata,
    productsdata
}
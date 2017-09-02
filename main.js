const allProducts = [];

const product1 = {
    name: "Mop Attire",
    imagePath: "./images/mopAttire.jpg",
    imageAlt: "Product: Mop Attire",
    description: "This is a really good description of our product. It really sells it. It;s the best.",
    price: 3000,
    soldOut: false
};

const product2 = {
    name: "Taco Suit",
    imagePath: "./images/tacoSuit.jpg",
    imageAlt: "Product: Taco Suit",
    description: "This is a really good description of our product. It really sells it. It's the best.",
    price: 25,
    soldOut: false
};

const product3 = {
    name: "Neck Decoration",
    imagePath: "./images/neckDecoration.jpg",
    imageAlt: "Product: Neck Decoration",
    description: "This is a really good description of our product. It really sells it. It's the best.",
    price: 750,
    soldOut: false
};

const product4 = {
    name: "Head Ornament",
    imagePath: "./images/headOrnament.jpg",
    imageAlt: "Product: Head Ornament",
    description: "This is a really good description of our product. It really sells it. It's the best.",
    price: 3.22,
    soldOut: true
};

const product5 = {
    name: "Boob Hat",
    imagePath: "./images/boobHat.jpg",
    imageAlt: "Product: Boob Hat",
    description: "This is a really good description of our product. It really sells it. It's the best.",
    price: 36,
    soldOut: true
};


allProducts.push(product1)
allProducts.push(product2)
allProducts.push(product3)
allProducts.push(product4)
allProducts.push(product5)

const addNewProduct = (name, imagePath, imageAlt, description, price, soldOut) => {
    const newProduct= {name, imagePath, imageAlt, description, price, soldOut};
    allProducts.push(newProduct);
}

addNewProduct("Butt Cream", "https://upload.wikimedia.org/wikipedia/en/e/e8/Boudreauxs_Butt_Paste.jpg", "Here is a picture of butt cream.", "lorum oh well", 4.99, true);

console.log(allProducts);

let productContainer = document.getElementById("product-container");

const buildDomString = (product) => {
    let domString = "";

    domString += '<section class="product">';
    domString += '<div class="title">';
    domString += '<h2>' + product.name + ' </h2>';
    domString += '</div>';
    domString += '<div class="image">';
    domString += '<img src="' + product.imagePath + '" alt="' + product.imageAlt + '">';
    domString += '</div>';
    domString += '<div class="description">';
    domString += '<p>' + product.description + '</p>';
    domString += '<h6>$' + product.price + '</h6>';
    domString += '</div>';
    if ( product.soldOut) {
      domString +=  '<div class="sold-out">'
      domString +=  '<img src="./images/soldOut.png" alt="Sold Out">'
      domString +=  '</div>'
    }
    domString += '</section>';
    return domString;

    console.log("Dom String from for loop", domString);
}

const printProductArrayToDom = (productArray) => {
  for (let i = 0; i < productArray.length; i++) {

    const currentProduct = productArray[i];
    const productDomString = buildDomString(currentProduct);
    productContainer.innerHTML += productDomString;
  }
}

printProductArrayToDom(allProducts);

let selectedCard;

document.getElementById("product-container").addEventListener("click", (e) => {
    changeTheBorder(e);
    printSelectedDescription();
})

const changeTheBorder = (e) => {
    if (e.target.classList.contains("child")) {
        selectedCard = e.target.parentNode;
    } else if (e.target.parentNode.parentNode.classList.contains("product")) {
        selectedCard = e.target.parentNode.parentNode;
    } else if (e.target.classList.contains("product")) {
        selectedCard = e.target;
    }
    selectedCard.classList.add("border-dash");
    console.log("selectedCard", selectedCard);
}


const printSelectedDescription = () => {
    let description = selectedCard.childNode[2].childNode[0].innerHTML;
    console.log(description);
}










'use strict';

function AppState() {
  this.allProducts = [];
}



AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}


AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let stringifiedProduct = JSON.stringify(this.allProducts);
}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let retrievedProduct = localStorage.getItem('myProducts');
  console.log('products from local storage >>>', retrievedProduct);
  let parsedProduct = JSON.parse(retrievedProduct);
  console.log('my parsed products >>>', parsedProduct);

  this.instantiateProducts();

}

// // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load


// AppState.prototype.loadItems = function () {
//   let retrievedProduct = localStorage.getItem('productData');

//   console.log('products from local storage >>>', retrievedProduct);

//   let parsedProduct = JSON.parse(retrievedProduct);

//   console.log('my parsed product data >>>', parsedProduct);


//   if (retrievedProduct) {
//     for (let i = 0; i < parsedProduct.length; i++) {
//       if (parsedProduct[i].name === 'bagProd') {
//         let reconstructedSweepProd = new Product(parsedProduct[i].name, 'png');
//         reconstructedSweepProd.views = parsedProduct[i].views;
//         reconstructedSweepProd.votes = parsedProduct[i].votes;
//         allProducts.push(reconstructedSweepProd);

//       } else {
//         let reconstructedProduct = new Product(parsedProduct[i].name);

//         reconstructedProduct.views = parsedProduct[i].views;
//         reconstructedProduct.votes = parsedProduct[i].votes;
//         allProducts.push(reconstructedProduct);
//       }
//     }
//   } else {
//     let bagProd = new Product('bag');
//     let bananaProd = new Product('banana');
//     let bathroomProd = new Product('bathroom');
//     let bootsProd = new Product('boots');
//     let breakfastProd = new Product('breakfast');
//     let bubblegumProd = new Product('bubblegum');
//     let chairProd = new Product('chair');
//     let cthulhuProd = new Product('cthulhu');
//     let dogduckProd = new Product('dog-duck');
//     let dragonProd = new Product('dragon');
//     let penProd = new Product('pen');
//     let petsweepProd = new Product('pet-sweep');
//     let scissorsProd = new Product('scissors');
//     let sharkProd = new Product('shark');
//     let sweepProd = new Product('sweep', 'png');
//     let tauntaunProd = new Product('tauntaun');
//     let unicornProd = new Product('unicorn');
//     let watercanProd = new Product('water-can');
//     let wineglassProd = new Product('wine-glass');

//     allProducts.push(bagProd, bananaProd, bathroomProd, bootsProd, breakfastProd, bubblegumProd, chairProd, cthulhuProd, dogduckProd, dragonProd, penProd, petsweepProd, scissorsProd, sharkProd, sweepProd, tauntaunProd, unicornProd, watercanProd, wineglassProd);
 
//     this.instantiateProducts();
//   }
  
  // *** constructor function ***

  function Product(name, fileExtension = 'jpg') {
    this.name = name;
    this.source = `assets/${name}.${fileExtension}`;
    this.timesClicked = 0;
    this.timesShown = 0;
  }
'use strict';

let canvasElem = document.getElementById('chart');

/* TODO:

// * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */



// Instantiate a new AppState object
// let state = new AppState();

// Use a method on that AppState to load vote data from localStorage.
// Define an AppState object
let AppState = {
  data: null,

  // Method to load data from localStorage
  loadDataFromLocalStorage: function () {
    let data = localStorage.getItem('appStateData');
    if (data) {
      this.data = JSON.parse(data);
    }
  }
};


state.loadDataFromLocalStorage = function () {

  let state = new AppState();

  if (productData) {
    this.productData = JSON.parse(productData);
    productVotes.push(state.allProducts[i].votes);
  }
  state.loadItems();



renderChart();

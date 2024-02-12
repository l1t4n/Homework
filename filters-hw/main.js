import './style.css'
const productlist = document.getElementById('productlist');
const setfilters = document.getElementById('setfilters');
const sortproducts = document.getElementById('sortproducts');
const renderplace = document.getElementById('renderplace');
const rangeoutput = document.getElementById('rangeoutput');
const category = document.getElementById('category');
const manufacturer = document.getElementById('manufacturer');
const date = document.getElementById('date');
const range = document.getElementById('range');

range.value = 0;
range.addEventListener('input', () => {
  rangeoutput.innerHTML = range.value;
})

var jsonProducts = `[
  {"category":"TV","price":1500,"manufacturer":"Sony","createdAt":"2019-05-28T17:55:29.945Z"},
  {"category":"Laptop","price":1200,"manufacturer":"Acer","createdAt":"2019-05-28T19:55:29.946Z"},
  {"category":"Smartphone","price":750,"manufacturer":"Apple","createdAt":"2018-03-08T10:45:00.000Z"},
  {"category":"Fridge","price":1850,"manufacturer":"Vestfrost","createdAt":"2018-05-28T17:55:29.946Z"},
  {"category":"Boiler","price":500,"manufacturer":"Indesit","createdAt":"2014-12-25T08:30:00.000Z"},
  {"category":"Stove","price":700,"manufacturer":"Gorenje","createdAt":"2018-09-17T11:00:00.000Z"},
  {"category":"Washing Machine","price":850,"manufacturer":"Electrolux","createdAt":"2019-05-28T18:55:29.946Z"},
  {"category":"Vacuum Cleaner","price":450,"manufacturer":"Samsung","createdAt":"2019-05-13T17:55:29.946Z"},
  {"category":"Conditioner","price":1000,"manufacturer":"Toshiba","createdAt":"2017-07-01T00:00:00.000Z"},
  {"category":"Iron","price":320,"manufacturer":"Philips","createdAt":"2013-11-18T07:20:00.000Z"},
  {"category":"Teapot","price":400,"manufacturer":"Bosch","createdAt":"2016-10-03T09:45:00.000Z"},
  {"category":"Electric Shaver","price":440,"manufacturer":"Braun","createdAt":"2019-05-29T03:55:29.946Z"},
  {"category":"Toaster","price":620,"manufacturer":"Tefal","createdAt":"2015-05-29T03:55:29.946Z"},
  {"category":"Coffee Machine","price":1300,"manufacturer":"Delonghi","createdAt":"2019-05-28T02:55:29.946Z"}
]`;

const render = (parent, component) => {
  [...parent.children].forEach((el) => {
    el.remove();
  });

  if (Array.isArray(component)) {
    parent.append(...component);
  } else {
    parent.append(component);
  }
};

const products = JSON.parse(jsonProducts);

productlist.addEventListener('click', () => {
  console.log(products);
})

function categoryfn(fnprods) {
return fnprods.filter(product => product.category === category.value)
}

function rangefn(fnprods) {
  return fnprods.filter(product => product.price >= range.value)
}

function manufacturerfn(fnprods) {
  return fnprods.filter(product => product.manufacturer === manufacturer.value)
}



sortproducts.addEventListener('click', () => {
  const prodCategory = categoryfn(products);
  if(prodCategory) {
    const CandM = manufacturerfn(prodCategory);
    if(CandM) {
      const CandMandR = rangefn(CandM);
      console.log(CandMandR);
    } else console.log(CandM)
  } else console.log(prodCategory)
})

// const filterslist = `
// <select id="category">
//           <optgroup label="Category">
//             <option value="TV">TV</option>
//             <option value="Laptop">Laptop</option>
//             <option value="Smartphone">Smartphone</option>
//             <option value="Fridge">Fridge</option>
//             <option value="Boiler">Boiler</option>
//             <option value="Stove">Stove</option>
//             <option value="Washing Machine">Washing Machine</option>
//             <option value="Vacuum Cleaner">Vacuum Cleaner</option>
//             <option value="Conditioner">Conditioner</option>
//             <option value="Iron">Iron</option>
//             <option value="Teapot">Teapot</option>
//             <option value="Electric Shaver">Electric Shaver</option>
//             <option value="Toaster">Toaster</option>
//             <option value="Coffee Machine">Coffee Machine</option>

//           </optgroup>
//         </select>

//         <select id="manufacturer">
//           <optgroup label="Manufacturer">
//             <option value="Sony">Sony</option>
//             <option value="Acer">Acer</option>
//             <option value="Apple">Apple</option>
//             <option value="Vestfrost">Vestfrost</option>
//             <option value="Indesit">Indesit</option>
//             <option value="Gorenje">Gorenje</option>
//             <option value="Electrolux">Electrolux</option>
//             <option value="Samsung">Samsung</option>
//             <option value="Toshiba">Toshiba</option>
//             <option value="Philips">Philips</option>
//             <option value="Bosch">Bosch</option>
//             <option value="Braun">Braun</option>
//             <option value="Tefal">Tefal</option>
//             <option value="Delonghi">Delonghi</option>

//           </optgroup>
//         </select>

//         <div class="input-range-wrapper">
//           <input id="range" min="0" max="2000" type="range">
//           <div id="rangeoutput">
//             0
//           </div>
//         </div>

//         <input id="date" type="date">
// `

// setfilters.addEventListener('click', () => {
//   if(!renderplace.innerHTML) {
//     renderplace.innerHTML += filterslist
//   } else renderplace.innerHTML = ''
// })

// function printProductNames(jsonProducts) {
//   try {
//       const products = JSON.parse(jsonProducts);
//       products.forEach(product => {
//           console.log(`${product.category}: ${product.manufacturer},`);
//       });
//   } catch (error) {
//       console.error('Error parsing JSON:', error.message);
//   }
// }




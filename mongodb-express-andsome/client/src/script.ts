import './style.css'
function login() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    if (username.length > 3 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
      document.getElementById('authForm')!.style.display = 'none';
      document.getElementById('productForm')!.style.display = 'block';
    } else {
      alert('Invalid username or password!');
    }
  }

  function addProduct() {
    const productTitle = (document.getElementById('productTitle') as HTMLInputElement).value;
    const productDescription = (document.getElementById('productDescription') as HTMLInputElement).value;
    const productPrice = parseFloat((document.getElementById('productPrice') as HTMLInputElement).value);
    const hasDiscount = (document.getElementById('hasDiscount') as HTMLInputElement).checked;
  
    console.log({ title: productTitle, description: productDescription, price: productPrice, hasDiscount });
  }

  async function fetchProducts() {
    try {
      const response = await fetch('/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      displayProducts(products);
    } catch (e) {
      console.error(e.message);
    }
  }

  const productsPerPage = 10; 

function displayProducts(products: any[]) {
  const productsContainer = document.getElementById('products')!;
  productsContainer.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = `${product.title}: ${product.description}, $${product.price}`;
    productsContainer.appendChild(productElement);
  });
}

function displayPagination(totalProducts: number) {
  const paginationContainer = document.getElementById('pagination')!;
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = `${i}`;
    pageLink.onclick = () => fetchProducts(i);
    paginationContainer.appendChild(pageLink);
  }
}

async function fetchProductsPage(page: number = 1) {
  try {
    const response = await fetch(`/products?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    displayProducts(products);
  } catch (e) {
    console.error(e.message);
  }
}

  const products = [
    {
      title: "Smartphone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 599.99,
      hasDiscount: false
    },
    {
      title: "Laptop",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 1299.99,
      hasDiscount: true
    },
    {
      title: "Smart Watch",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 199.99,
      hasDiscount: false
    },
    {
      title: "Wireless Headphones",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 149.99,
      hasDiscount: false
    },
    {
      title: "Tablet",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 349.99,
      hasDiscount: true
    }
  ]; 
  const totalCount = 50; 

  displayProducts(products);
  displayPagination(totalCount);


      
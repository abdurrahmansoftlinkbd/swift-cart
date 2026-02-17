const categoryContainer = document.getElementById("category-container");
const productsContainer = document.getElementById("products-container");
const modal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");

const loadCategories = async () => {
  categoryContainer.innerHTML = `
        <div class="flex justify-center items-center">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    `;
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();
  displayCategories(categories);
};

const displayCategories = (categories) => {
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = `btn btn-outline capitalize px-4 py-2 rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white cursor-pointer transition duration-300`;
    categoryContainer.appendChild(button);
    button.addEventListener("click", () => {
      activeCategory(button);
      loadProductsByCategory(category);
    });
  });
};

const loadProductsByCategory = async (category) => {
  productsContainer.innerHTML = `
        <div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
<div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
<div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
    <div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
    `;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  const products = await res.json();
  displayProducts(products);
};

const activeCategory = (button) => {
  const categoryBtns = categoryContainer.querySelectorAll("button");
  categoryBtns.forEach((categoryBtn) => {
    categoryBtn.classList.remove("bg-indigo-600", "text-white");
  });
  button.classList.add("bg-indigo-600", "text-white");
};

const loadProducts = async () => {
  productsContainer.innerHTML = `
        <div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
<div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
<div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
    <div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
    `;
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  displayProducts(products);
};

const displayProducts = (products) => {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const { id, title, price, category, image, rating } = product;
    const { rate, count } = rating;
    const card = document.createElement("div");
    card.className = `card bg-base-100 border border-gray-200`;
    card.innerHTML = `
        <figure class="bg-gray-200 p-6 h-60 flex items-center justify-center">
            <img src="${image}" 
             class="w-full max-h-56 object-contain" />
      </figure>

      <div class="card-body p-4">

        <div class="flex justify-between items-center text-xs mb-2">
          <span class="text-indigo-600 bg-indigo-50 border-none badge badge-outline capitalize">
            ${category}
          </span>

          <span class="flex items-center gap-1 text-yellow-500">
            <i class="fa-solid fa-star"></i> ${rate}
            <span class="text-gray-400">(${count})</span>
          </span>
        </div>

        <h2 class="font-semibold line-clamp-1">
          ${title}
        </h2>

        <p class="font-bold text-lg">
          $${price}
        </p>

        <div class="card-actions justify-between mt-2">
          <button onclick="openProductModal(${id})" class="btn btn-sm btn-outline">
           <i class="fa-regular fa-eye"></i> Details
          </button>
          <button class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
        </div>
      </div>
    `;
    productsContainer.appendChild(card);
  });
};

const openProductModal = async (id) => {
  modalContent.innerHTML = `
    <div class="flex justify-center items-center h-64">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  `;
  modal.showModal();
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  displayModalContent(product);
};

const displayModalContent = (product) => {
  const { title, price, description, category, image, rating } = product;

  modalContent.innerHTML = `
    <div class="grid md:grid-cols-2 gap-8">

      <!-- Image -->
      <div class="flex justify-center items-center bg-gray-100 p-6 rounded-xl">
        <img src="${image}" 
             class="max-h-80 object-contain" />
      </div>

      <!-- Info -->
      <div>

        <span class="text-indigo-600 bg-indigo-50 border-none badge badge-outline capitalize mb-3">
          ${category}
        </span>

        <h2 class="text-2xl font-bold mb-3">
          ${title}
        </h2>

        <div class="flex items-center gap-2 text-yellow-500 mb-4">
          <i class="fa-solid fa-star"></i>
          ${rating.rate}
          <span class="text-gray-400">
            (${rating.count} reviews)
          </span>
        </div>

        <p class="text-gray-600 mb-6">
          ${description}
        </p>

        <p class="text-3xl font-bold text-indigo-600 mb-6">
          $${price}
        </p>

        <div class="flex gap-4">
          <button class="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            Buy Now
          </button>

          <button class="btn btn-outline">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
        </div>

      </div>
    </div>
  `;
};

loadCategories();
loadProducts();

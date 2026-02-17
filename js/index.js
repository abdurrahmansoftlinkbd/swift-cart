const loadTrendingProducts = async () => {
  const trendingContainer = document.getElementById("trending-container");
  trendingContainer.innerHTML = `
    <div class="col-span-full flex justify-center items-center">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
  `;

  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const topRated = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  displayTrendingProducts(topRated);
};

const displayTrendingProducts = (products) => {
  const trendingContainer = document.getElementById("trending-container");
  trendingContainer.innerHTML = "";
  products.forEach((product) => {
    const { id, title, price, category, image, rating } = product;
    const card = document.createElement("div");
    card.className = `
      card
      border border-gray-200 
    `;
    card.innerHTML = `
      <figure class="bg-gray-100 p-8 h-72 flex items-center justify-center">
        <img src="${image}" 
             class="max-h-64 object-contain" />
      </figure>

      <div class="card-body">

        <div class="flex justify-between items-center text-xs mb-2">
          <span class="text-indigo-600 bg-indigo-50 border-none badge badge-outline capitalize">
            ${category}
          </span>

          <span class="flex items-center gap-1 text-yellow-500">
            <i class="fa-solid fa-star"></i>
            ${rating.rate}
            <span class="text-gray-400">
              (${rating.count})
            </span>
          </span>
        </div>

        <h2 class="font-semibold line-clamp-1">
          ${title}
        </h2>

        <p class="font-bold text-lg mt-1">
          $${price}
        </p>

        <div class="card-actions justify-between mt-4">
          <button 
            onclick="openProductModal(${id})"
            class="btn btn-sm btn-outline">
            <i class="fa-regular fa-eye"></i> Details
          </button>

          <button class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
        </div>

      </div>
    `;

    trendingContainer.appendChild(card);
  });
};

const modal = document.getElementById("product_modal");
const modalContent = document.getElementById("modal-content");

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

      <!-- Details -->
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
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  `;
};

loadTrendingProducts();

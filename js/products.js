const categoryContainer = document.getElementById("category-container");

const loadCategories = async () => {
  categoryContainer.innerHTML = `
        <div class="flex justify-center items-center">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    `;
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();
  showCategoryBtns(categories);
};

const showCategoryBtns = (categories) => {
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = `btn btn-outline capitalize px-4 py-2 rounded-full border border-gray-300 hover:bg-indigo-600 hover:text-white cursor-pointer transition duration-300`;
    categoryContainer.appendChild(button);
    button.addEventListener("click", () => {
      activeCategoryBtn(button);
    });
  });
};

const activeCategoryBtn = (button) => {
  const categoryBtns = categoryContainer.querySelectorAll("button");
  categoryBtns.forEach((categoryBtn) => {
    categoryBtn.classList.remove("bg-indigo-600", "text-white");
  });
  button.classList.add("bg-indigo-600", "text-white");
};

loadCategories();

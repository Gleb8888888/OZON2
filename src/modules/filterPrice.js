import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const filterPrice = () => {
  const filter = document.querySelector(".filter");
  const saleCheckBox = filter.querySelector("#discount-checkbox");
  const checkMark = filter.querySelector(".filter-check_checkmark");
  let price = {
    minPrice: "",
    maxPrice: "",
  };

  filter.addEventListener("input", (Event) => {
    switch (Event.target.id) {
      case "min":
        price.minPrice = Event.target.value;
        changeFilter();
        break;
      case "max": {
        price.maxPrice = Event.target.value;
        changeFilter();
        break;
      }
    }
  });

  saleCheckBox.addEventListener("change", () => {
    checkMark.classList.toggle("checked");
    changeFilter();
  });

  const changeFilter = () => {
    getData().then((data) => {
      renderGoods(priceFilter(data, price, saleCheckBox.checked));
    });
  };
};

export default filterPrice;

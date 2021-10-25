const discountApplied = document.querySelector("#discountApplied");
const result = document.querySelector("#result");
const inputCoupon = document.querySelector("#inputCoupon");
var coupons = [];
var currentSelectedDiscountCoupon =
  inputCoupon.options[inputCoupon.selectedIndex].innerText;

/**
 * @description Function showing the value of the discount coupon selected from the dropdown list by the user
 */

function viewDicountCouponValue() {
  const newSelectedDiscountCoupon =
    inputCoupon.options[inputCoupon.selectedIndex].innerText;
  var selectedDiscountCouponValue = 0;

  console.log(
    "currentSelectedDiscountCoupon: " + currentSelectedDiscountCoupon
  );
  console.log("newSelectedDiscountCoupon: " + newSelectedDiscountCoupon);

  if (
    !coupons.length ||
    newSelectedDiscountCoupon !== currentSelectedDiscountCoupon
  ) {
    !coupons.length
      ? console.log("Coupons has not any element. Populating the array...")
      : "";
    setDiscountCouponListValues();
    currentSelectedDiscountCoupon = newSelectedDiscountCoupon;
  }

  console.log(coupons);

  for (var i = 0; i < coupons.length; i++) {
    //if(inputCoupon.options[inputCoupon.selectedIndex].selected) {
    if (inputCoupon[i].selected) {
      selectedDiscountCouponValue = coupons[i].value;
      break;
    }
  }

  discountApplied.innerHTML = "Discount applied: ";

  /*
  discountApplied.innerHTML +=
    selectedDiscountCouponValue === 0
      ? "No coupons selected"
      : selectedDiscountCouponValue + "%";
  */

  discountApplied.innerHTML += 
    newSelectedDiscountCoupon === 'Select a coupon'
      ? "No coupons selected"
      : selectedDiscountCouponValue + "%";
  
  result.innerText = "Price with discount coupon: ";
}

/**
 * @description Function setting the values of the discount coupons and putting them in an
 * array.
 */

function setDiscountCouponListValues() {
  var discountCoupons = [];

  for (var i = 0; i < inputCoupon.length; i++) {
    var discountCoupon = {
      name: inputCoupon[i].text,
      value: i * 20,
      selected: inputCoupon[i].selected,
    };

    discountCoupons.push(discountCoupon);
  }

  coupons = discountCoupons;
}

/**
 * @description Given a price and a discount, this function calcultes the value of the price
 * inputted
 * @param {number} price - The (product) price inputted by the user
 * @param {number} discount - The discount associated with the coupon selected by the user
 * @returns {number} discountPrice - The discounted price
 */

function calculateDiscountCouponPrice(price, discount) {
  const discountPricePercentage = 100 - discount;
  const discountPrice = (price * discountPricePercentage) / 100;
  return discountPrice;
}

/**
 * @description Function implementing the button click action
 */

function onClickButtonDiscountCouponPrice() {

  if (!coupons.length) {
    console.log("Coupons has not any element. Populating the array...");
    setDiscountCouponListValues();
  }

  // Select all the elements of the array coupons for which the condition
  // coupon.selected is true. coupon is an element (object) of the coupons.
  const couponSelected = coupons.filter(function (coupon) {
    return coupon.selected;
  });

  const couponSelectedValue = couponSelected[0].value;

  if (couponSelected) {
    const inputPrice = document.querySelector("#inputPrice");
    const inputPriceValue = inputPrice.value;
    const discountPrice = calculateDiscountCouponPrice(
      inputPriceValue,
      couponSelectedValue
    );
    result.innerText = "Price with discount coupon: " + discountPrice + "$";
  }

  /*
  for (var i = 0; i < coupons.length; i++) {
    if (coupons[i].selected) {
      const inputPrice = document.querySelector("#inputPrice");
      const inputPriceValue = inputPrice.value;
      const discountPrice = calculateDiscountCouponPrice(
        inputPriceValue,
        coupons[i].value
      );
      result.innerText = "Price with discount coupon: " + discountPrice + "$";
      break;
    }
  }
  */
}

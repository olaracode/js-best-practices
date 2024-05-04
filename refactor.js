let inventory = [
  {
    name: "apples",
    id: 1,
    quantity: 20,
    price: 0.85,
  },
  {
    name: "bananas",
    quantity: 10,
    id: 2,
    price: 1.25,
  },
  {
    name: "cherries",
    quantity: 5,
    price: 2.5,
    id: 3,
  },
  {
    name: "dates",
    quantity: 2,
    price: 3.0,
    id: 4,
  },
  {
    name: "elderberries",
    quantity: 1,
    price: 4.0,
    id: 5,
  },
  {
    name: "Watermelon",
    quantity: 0,
    price: 5.0,
    id: 6,
  },
  {
    name: "grapes",
    quantity: 0,
    price: 6.0,
    id: 7,
  },
];

let order = {
  country: "United States",
  items: [
    {
      id: 1,
      quantity: 5,
    },
    {
      id: 2,
      quantity: 1,
    },
    {
      id: 6,
      quantity: 1,
    },
  ],
};

function processOrder(order, inventory) {
  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grand_total = 0;
  let items = order.items;
  let country = order.country;
  let total_items_ = 0;
  let total_items_Price = 0;
  let total_items_Tax = 0;
  let total_items_Shipping = 0;
  let total_items_GrandTotal = 0;

  for (let i = 0; i < items.length; i++) {
    // Get the item details
    let item = items[i];
    let itemID = item.id;
    let item_quantity = item.quantity;
    let item_price = 0;
    let itemTax = 0;
    let itemShipping = 0;
    let itemGrandTotal = 0;

    for (let j = 0; j < inventory.length; j++) {
      // Find the item in the inventory
      if (inventory[j].id === itemID) {
        item_price = inventory[j].price;
        itemTax = item_price * 0.1;
        itemShipping = item_price * 0.05;
        itemGrandTotal = item_price + itemTax + itemShipping;
        total_items_Price += item_price * item_quantity;
        total_items_Tax += itemTax * item_quantity;
        total_items_Shipping += itemShipping * item_quantity;
        total_items_GrandTotal += itemGrandTotal * item_quantity;
        total_items_ += item_quantity;
        break;
      }
    }
  }

  if (country === "United States") {
    shipping = 5;
  } else if (country === "Canada") {
    shipping = 10;
  } else {
    shipping = 15;
  }

  tax = total_items_Tax;
  total = total_items_Price;
  grand_total = total + tax + shipping;

  return {
    total,
    shipping,
    tax,
    grand_total,
    total_items_,
    total_items_Price,
    total_items_Tax,
    total_items_Shipping,
    total_items_GrandTotal,
  };
}

console.log(processOrder(order, inventory));

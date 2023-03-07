const inventory = {
    "apple": {"price": 1, "quantity": 100},
    "banana": {"price": 1, "quantity": 50},
    "orange": {"price": 1, "quantity": 75},
    "grape": {"price": 1, "quantity": 25},
    "watermelon": {"price": 1, "quantity": 10}
  }
  
  let sum = 0;
  
  Object.values(inventory).forEach(item => {
    sum += item.price * item.quantity;
  });
  
  console.log(sum);
  
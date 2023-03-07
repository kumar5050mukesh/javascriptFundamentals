function removeDup(cart) {
    let uniqueItems = [];
    for ( item of cart) {
      if (!uniqueItems.includes(item)) {
        uniqueItems.push(item);
      }
    }
    return uniqueItems;
  }
  let customerCart = [1, 2, 3, 2, 4, 1, 5];
  let uniqueCart = removeDup(customerCart);
  console.log(uniqueCart); 
    
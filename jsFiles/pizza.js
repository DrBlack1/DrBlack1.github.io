let orderCount = (0);

const takeOrder = (topping) => {
    console.log(orderCount++,` ${topping} Pizza`);
    
}

takeOrder("Pineapple");
takeOrder("Ham")
takeOrder("Sausage")
takeOrder("Pepperoni")
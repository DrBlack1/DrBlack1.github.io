console.log('Firing up coffee.js');

let addOrder = (name, order) => {
    console.log('Shoving a new order on', name, order)
}

let getAllOrders = () => {
    console.log('Showing all orders...')
}

let showSpecificOrder = (name) => {
    console.log('Showing order for:', name)
}

module.exports = {
    addOrder,
    getAllOrders,
    showSpecificOrder
}
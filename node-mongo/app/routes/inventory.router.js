module.exports = function(app) {
    var inventories = require('../controllers/inventory.controller.js');

    app.post('api/inventory', inventories.createInventory);
    app.get('api/inventory/:id', inventories.getInventory);
    app.get('api/inventories', inventories.inventories);
    app.put('api/inventory/:id', inventories.updateInventory);
    app.delete('api/inventory/:id', inventories.deleteInventory);
}

// exports.createInventory = (req,res);
// exports.getInventory = (req,res);
// exports.inventories = async (req,res);
// exports.updateInventory = async (req,res);
// exports.deleteInventory = async (req,res);

// async function fun1(req,res){
//     let response = await request.get('http://localhost:3000')
//     if (response.err) {console.log('error');}
//     else {console.log('fetched response')}
// }
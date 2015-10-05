/* Products array/objects given */

var products = [
    {
        image: "images/coffee.png",
        name: "Filter Coffee",
        price: 1.5,
        count: 0
    },
    {
        image: "images/espresso.png",
        name: "Espresso",
        price: 1.0,
        count: 0
    },
    {
        image: "images/cappuccino.png",
        name: "Cappuccino",
        price: 2.0,
        count: 0
    },
    {
        image: "images/tea.png",
        name: "Tea",
        price: 1.0,
        count: 0
    },
    {
        image: "images/chocolate.png",
        name: "Hot Chocolate",
        price: 1.5,
        count: 0
    }
];

/* your JS code goes here */

/* REQ 22: menu can be opened and closed */

/**
 * Event listener for toggling the menu
 * Toggle #menu and the appearance of the menu's #trigger
 * @author  zimmermann
 * @version 1.0
 * @since   27.01.2014
 */
function toggleMenu() {
    //toggle the menu's div
    $('#menu').toggle(1000);
    //toggle the menu trigger's icon between bars and cross
    $('#trigger i').toggleClass('fa-bars fa-times');
}

/* REQ 27: initialize credit and sum */
var credit = 5.0;
var sum = 0.0;

/* REQ 26: add, remove and count functionality */

/**
 * Increases/Decreases the order amount of a product
 * Affects the corresponding count attribute in the products array
 * Updates products view
 * @param   id  the index of the product in the global products array
 * @param   amount  order will be increased/decreased by positive/negative Numbers
 * @author  zimmermann
 * @version 1.0
 * @since   27.01.2014
 */
function modifyProduct(id, amount) {
    //Distinction on negative/positive amounts (important for check)
    if (amount < 0) {
        //decrease amount, if it's not getting negative
        if (products[id].count + amount >= 0) {
            products[id].count += amount;
            /* REQ 27 */
            //adapt global sum of order, whenever selection changes
            sum -= products[id].price;
        }
    } else {
        //increase amount, as long as user has credit
        if (sum + products[id].price <= credit) {
            products[id].count += amount;
            /* REQ 27 */
            //adapt global sum of order, whenever selection changes
            sum += products[id].price;
        } else {
            /* REQ 27 */
            //notify user, if he/she tries to select too many products
            window.alert('You have insufficient credit!');
        }
    }

    //update content during each change
    updateProducts();
}

/* REQ 27 */

/**
 * Update credit and sum on order
 * @author  zimmermann
 * @version 1.0
 * @since   27.01.2014
 */
function order() {
    //notify user
    window.alert('Products ordered!');
    //balance credit
    credit -= sum;
    //reset shopping cart
    var product;
    for (product in products) {
        products[product].count = 0;
    }
    //reset total sum
    sum = 0;
    //apply changes
    updateProducts();
}

/* REQ 25: create the item */

/**
 * Create the HTML representation of one product and return the string
 * Build a container div of the class, add the product image, name, price, 
 * add/remove buttons and product count.
 * @param   id  the index of the product in the global products array
 * @return  String of the HTML of the one requested product
 * @author  zimmermann
 * @version 1.0
 * @since   27.01.2014
 */
function createProductHtml(id) {
    var product = products[id];
    return '<div class="item">'
        + '<img src="' + product.image + '">'
        + '<span class="name">' + product.name + '</span>'
        + '<span class="price">' + product.price + ' €</span>'
        /* REQ 26: onclick handlers are added */
        + '<span class="remove button fa fa-minus" onclick="modifyProduct(' + id + ', -1)"></span>'
        + '<span class="count">' + product.count + '</span>'
        /* REQ 26: onclick handlers are added */
        + '<span class="add button fa fa-plus" onclick="modifyProduct(' + id + ', 1)"></span>'
        + '</div>';
}


/* REQ 23: products are written programmatically into the content area */

/** 
 * Builds the HTML representation of all products and writes it to #content
 * Modifies the #content
 * @author  zimmermann
 * @version 1.0
 * @since   27.01.2014
 */
function updateProducts() {
    //building the products string starts with no content
    var productsHtml = "";
    //loop through all items of the products array
    var product;
    for (product in products) {
        /* REQ 25: call createProductsHtml */
        //access each item and add its HTML to the string
        productsHtml += createProductHtml(product);
        /* //REPLACED access each item and add its name to the string
        productsHtml += product.name;
        */
    }
    //modify the content section to display the resulting list of coffee products
    $('#content').html(productsHtml);
    
    /* REQ 27 */
    //write the (global) remaining credit to #credit
    $('#credit').html('<i class="fa fa-money"></i> ' + credit + ' €');
    //write the (global) total sum to #sum
    $('#sum').html('Σ ' + sum + ' €');
}

/* REQ 24: ensure that list is built after the DOM has loaded */
$(function () {
    //list all products initially
    updateProducts();
});
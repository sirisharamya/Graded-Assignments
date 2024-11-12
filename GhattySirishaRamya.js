// You are tasked with implementing a product management system. 
// The system will use JSON data for storing information about products. 
const productData = [
    {
        id: 1,
        name: "Iq007",
        category: "Electronics",
        price: 40,
        available: true
    },
    {
        id: 2,
        name: "Barbie Doll",
        category: "Toys",
        price: 25,
        available: true
    },
    {
        id: 3,
        name: "Vivo",
        category: "Electronics",
        price: 73,
        available: false
    }
];

function parseProductData(data) {
    return data;
}

const products = parseProductData(productData);

function addProduct(products, product) {
    return [...products, product];
}

const newProduct = {
    id: 4,
    name: "That Night",
    category: "Books",
    price: 10.5,
    available: true
};

const updatedProducts = addProduct(products, newProduct);

function updateProductPrice(products, productId, newPrice) {
    return products.map((product) =>
        product.id === productId ? { ...product, price: newPrice } : product
    );
}

const updatedProductsWithPrice = updateProductPrice(updatedProducts, 3, 58.6 );

function filterAvailableProducts(products) {
    return products.filter((product) => product.available);
}

const availableProducts = filterAvailableProducts(updatedProductsWithPrice);

function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category);
}

const electronicsProducts = filterProductsByCategory(updatedProductsWithPrice, "Electronics");

console.log("Products:", products);
console.log("All Products ; along with new Product (4):", updatedProducts);
console.log("All Products ; along with updated Price of product id :2:", updatedProductsWithPrice);
console.log("Available Products:", availableProducts);
console.log("Electronics Products:", electronicsProducts);
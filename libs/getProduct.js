async function getProduct(uid){
    const res = await fetch(`https://storefront-dff5a-default-rtdb.firebaseio.com/products/${uid}.json`)
    const product = await res.json();
    return product
}

export {getProduct}
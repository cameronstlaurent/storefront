import React from 'react';
import Image from 'next/image'
import styles from './styles.module.css';

function ProductCard ({children, product, ...props})  {
  const {productName, productBrand, productPrice, productDescription, imageUrl, uid}= {...product}
  return (
    <aside className={styles.ProductCardStyles} >
    <header>
      <Image
      className={styles.CardImg}
        src={imageUrl}
        alt={productName}
        width={500}
        height={240}
        quality={50}
      />
    </header>
    <div className={styles.InnerContainer}>
    <h3 className={styles.ProductName}>{productName}</h3>
    <h4 className={styles.ProductBrand}>{productBrand}</h4>
    <h4 className={styles.ProductPrice}>${productPrice}</h4>
    <p className={styles.ProductDescription}>{productDescription}</p>
    <footer>
    <form action="/api/checkout" method="POST">
    <input type="hidden" name="uid" value={uid}/>
    <button className={styles.BuyButton} type="submit">Buy Now</button>
    </form>
    </footer>
    </div>
    </aside>
  )
}

export default ProductCard
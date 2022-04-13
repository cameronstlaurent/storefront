import Head from 'next/head'
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";

import  { loadStripe } from "@stripe/stripe-js";

/* 
    Product Card
    SSG: Static Site Generation Pages of HTML + CSS ----------->edge ----->really fast load time.
    Pages of HTML + CSS ---------> CDN ----> really fast load time
*/

export default function Home(props) {
    const products = props.products

     const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Storefront</title>
      </Head>
      <PageTitle title="CS Diecast"  tagline="featured products"/>
        <main>
          <div className="inner-container flex-container">
            {products.map(product => <ProductCard key={product.uid} product={product}/>)}
          </div>
        </main>
    </>
    )
}

// Next sees getStaticProps you're telling it to build
// static pages from the data...
// getStaticProps is server code...
// application logic inside nextjs framework.
// api routes ....pass data from the client stripe make payment...

export async function getStaticProps(){
    // fetch data from the api. Node... fetch
    // Node vs JS node doesn't have any of the web apis... fetch
    const res = await fetch('https://storefront-dff5a-default-rtdb.firebaseio.com/products.json')
    const productData = await res.json();
    const products = Object.values(productData)
    console.log(products)

    return {
      props:{
        products,
        fallback:false
      },
      revalidate:60
    }
}
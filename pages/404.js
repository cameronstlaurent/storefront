// 404.js
import Link from 'next/link'

import Button from "../components/Button/Button";

import Image from 'next/image';


export default function FourOhFour() {
    return <>
    <section className="fourohfourpage">
      <h1 className="sr-only">404</h1>
      <Image className="logo" src="/logo.svg" alt="CS Diecast Logo"/>
      <Image className="four-oh-four" src="/404.svg" alt="error code 404"/>
      <p className="fourohfour-message">It appears that this page was too fast and too furious to be found.</p>
      <Link href="/" passHref>
        <Button>
            back to safety
        </Button>
      </Link>
    </section>
    </>
  }
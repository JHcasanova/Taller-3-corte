import { QuantitySelector } from "@/components";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from 'next/image';
import link from  'next/link'
import { Product } from '../../../interfaces/product.interface';

const ProductsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function() {
  return (
    <main>
      <h1 className={titleFont.className}>Cart Page</h1>
    </main>
  );
}

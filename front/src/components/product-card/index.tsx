import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({ product }: { product: ProductCardProps }) => {
  return (
    <article className={`
      flex flex-col
      w-full max-w-xs pb-4
      border border-gray-100 rounded-lg
      bg-white shadow-md
    `}>
      <Link
        className="relative block p-2 pt-4 h-40 rounded-lg overflow-hidden"
        href="#"
      >
        <Image
          width={200}
          height={200}
          src={product.image}
          alt={product.title}
          className="w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </Link>
      <div className="p-5 flex-grow">
        <Link href="#">
          <h2 className="text-xl tracking-tight text-slate-900">
            {product.title}
          </h2>
        </Link>
        <p className="mt-2 text-3xl font-bold text-slate-900">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(product.price)}
        </p>
      </div>
      <button className="flex items-center justify-center rounded-md bg-slate-900 mx-5 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </button>
    </article>
  );
};

export { ProductCard };

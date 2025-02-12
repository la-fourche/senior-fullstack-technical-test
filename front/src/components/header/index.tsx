import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="https://lafourche.fr/icons/brand_logos/fr.svg"
              width={100}
              height={80}
              className="mr-3 h-6 sm:h-9"
              alt="La Fourche Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="/cart"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

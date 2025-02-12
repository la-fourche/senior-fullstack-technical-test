import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow-md shadow-gray-100">
      <nav className={`
        flex justify-between items-center
        mx-auto max-w-screen-xl
        px-4 py-4 md:px-7
      `}>
        <Link href="/">
          <Image
            src="https://lafourche.fr/icons/brand_logos/fr.svg"
            width={123}
            height={53}
            className="w-[90px] md:w-[100px]"
            alt="La Fourche"
          />
        </Link>
        <Link
          href="/cart"
          className="font-semibold hover:underline"
        >
          Cart
        </Link>
      </nav>
    </header>
  );
};

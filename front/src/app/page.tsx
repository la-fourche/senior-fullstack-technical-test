import { Search } from "../components/search";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto py-4 md:py-7 px-4 md:px-7">
      <Search />
    </main>
  );
}

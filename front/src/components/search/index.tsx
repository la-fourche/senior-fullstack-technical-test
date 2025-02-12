"use client";

import { ProductList } from "@/components/product-list";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Pagination, SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

export function Search() {
  return (
    <InstantSearchNext indexName="bestbuy" searchClient={searchClient} routing>
      <SearchBox className={`
        relative w-full md:w-1/2 md:mx-auto
        [&_input]:w-full [&_input]:bg-white
        [&_input]:border [&_input]:border-gray-200
        [&_input]:py-2 [&_input]:px-2
        focus:[&_input]:border-gray-600 focus:[&_input]:outline-none
        [&_button]:p-4 [&_input]:border-gray-200
        [&_button]:absolute [&_button.ais-SearchBox-submit]:right-0 [&_button.ais-SearchBox-reset]:right-5
        `}/>
      <ProductList />
      <Pagination className={`
        text-center
        [&_li]:inline-block [&_li]:px-1 [&_li_a]:p-1
        [&_.ais-Pagination-item--disabled]:opacity-30
        [&_.ais-Pagination-item--selected]:font-bold
        [&_.ais-Pagination-item--selected]:bg-gray-100
      `} />
    </InstantSearchNext>
  );
}

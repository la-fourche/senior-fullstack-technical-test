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
      <SearchBox />
      <ProductList />
      <Pagination />
    </InstantSearchNext>
  );
}

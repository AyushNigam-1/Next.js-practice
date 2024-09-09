import Image from "next/image";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList"
export default async function Home() {

  const response = await fetch(`https://www.dbooks.org/api/recent`)
  if (!response.ok) {
    throw new Error('An error occurred while fetching the books')
  }
  let books = await response.json()
  books = books.books
  return (
    <>
      <Banner />
    <ProductList books={books} />
    </>
  );
}

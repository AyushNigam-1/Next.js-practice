import Image from "next/image";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList"
export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/books`)
  if (!response.ok) {
    throw new Error('An error occurred while fetching the books')
  }
  const books = await response.json()
  console.log(books)
  return (
    <>
      <Banner />
      <ProductList books={books} />
    </>
  );
}

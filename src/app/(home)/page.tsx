import Image from "next/image";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList"
import { Suspense } from "react";
import Loading from "@/components/Loading";
export default async function Home() {


  return (
    <>
      <Banner />
      <Suspense fallback={<Loading/>}>
      <ProductList />
      </Suspense>
    </>
  );
}

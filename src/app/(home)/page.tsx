import { Button } from "@/components/ui/button";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
export default async function Home() {
  return (
    <>
      <SearchBar />
      <Categories />
    </>
  );
}

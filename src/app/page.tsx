import Image from "next/image";
import TreeChart from "./component/Tree";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cat Breeds and Fur Colors</h1>
      <TreeChart />
    </div>
  );
}

import Header from "@/component/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className = "h-full overflow-x-hidden">

      <section className="min-h-[720px] bg-white w-full">
        <Header/>
      </section>
    </div>
  );
}

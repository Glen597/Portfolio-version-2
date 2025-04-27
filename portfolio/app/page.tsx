
import DesignCategories from "@/component/design-section";
import Header from "@/component/header";

export default function Home() {
  return (
    <div className="overflow-x-hidden  h-screen">
      <section className="min-h-[720px] w-full">
        <Header />
      </section>
      <section>
        <DesignCategories />
      </section>
    
    </div>
  );
}

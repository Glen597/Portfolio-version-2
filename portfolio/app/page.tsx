
import DesignCategories from "@/component/design-section";
import Header from "@/component/header";
import ServicesPage from "@/component/services";
import AboutMe from "@/component/aboutme";

export default function Home() {
  return (
    <div className="overflow-x-hidden  h-screen">
      <section className="min-h-[720px] w-full">
        <Header />
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[720px] w-full">
        <ServicesPage />
      </section>
      <section className="min-h-[600px] w-full bg-green-900">
        <AboutMe />
      </section>
    </div>
  );
}

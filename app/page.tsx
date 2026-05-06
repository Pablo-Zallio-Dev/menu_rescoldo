import { Dish } from "./components/ui/Dish";
import { Logo } from "./components/ui/Logo";
import { Nav } from "./components/ui/Nav";
import { TitleMenu } from "./components/ui/TitleMenu";
import { TitleSection } from "./components/ui/TitleSection";

import data from "../data/data.json";
import { Menu } from "@/types/type";
import { BtnUp } from "./components/ui/BtnUp";
import { Footer } from "./components/ui/Footer";
const menuData = data as Menu;

export default function Home() {
      return (

            <main className="min-h-screen">

                  <BtnUp />
                  <section className=" flex flex-col items-center ">
                        <section className=" flex flex-col items-center pt-12 ">
                              <Logo />
                              <TitleMenu />
                        </section>

                        <section className=" flex flex-wrap justify-center gap-2 pb-6 ">
                              {menuData.menu.map((category) => (
                                    <section key={category.category} className=" flex  ">
                                          <Nav categories={category.category} />
                                    </section>
                              ))}
                        </section>
                        <section className=" py-12 ">
                              {menuData.menu.map((categories) => (
                                    <section
                                          id={categories.category}
                                          key={categories.category}
                                          className="  px-3 w-full max-w-100 "
                                    >
                                          <TitleSection
                                                image={categories.image}
                                                category={categories.category}
                                                subitle={categories.subtitle}
                                          />
                                          {categories.items.map((dishes) => (
                                                <Dish
                                                      key={dishes.name}
                                                      titleDish={dishes.name}
                                                      priceDish={dishes.price}
                                                      descriptionDish={dishes.description}
                                                      allergensDish={["Lácteos", "Gluten", "Huevo"]}
                                                />
                                          ))}
                                    </section>
                              ))}
                        </section>
                        <section className=" flex flex-col items-center w-full pt-4 pb-20 border-t border-borders  ">
                              <Footer />
                        </section>
                  </section>
            </main>

      );
}

/* 




        <Nav categories={"Entrantes"} />
      
        <TitleSection category="Entrantes" subitle="Para abrir boca" image={"/images/image-dish_incoming.webp"} />
        <Dish
          titleDish="Pimientos del Piquillo Rellenos"
          priceDish='14'
          descriptionDish='Rellenos de brandada de bacalao y gratinados al horno.'
          allergensDish={["Lácteos", "Gluten", "Huevo"]}
        />
        </section>
        
        
        */

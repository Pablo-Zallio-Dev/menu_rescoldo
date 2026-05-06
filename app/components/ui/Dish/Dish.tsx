"use client";
import React from 'react';



export type DishProps = {
      titleDish: string,
      priceDish: number,
      descriptionDish: string,
      allergensDish: string[]

}

const Dish: React.FC<DishProps> = ({ titleDish, descriptionDish, priceDish, allergensDish }) => {
      return (
            <section className=" py-6 border-b border-borders ">
                  <section className=" flex justify-between font-bebasNeue pb-2 text-xl ">
                        <h2 className=""> {titleDish} </h2>
                        <h2 className=""> {priceDish}€ </h2>
                  </section>
                  <p className=" pr-16 pb-3 font-lora text-sm italic "> {descriptionDish} </p>
                  <section className=" flex gap-4 ">
                  {
                        allergensDish.map((allergen) => (
                              <section key={allergen} className="  font-lora text-xs ">
                                    <p  className=""> {allergen} </p>
                              </section>
                        ))
                  }
                  </section>
            </section>
      );
};

export default Dish;

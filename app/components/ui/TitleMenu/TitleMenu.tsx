"use client";
import React from 'react';



const TitleMenu: React.FC = ({ }) => {
      return (
            <section className=" flex flex-col items-center pb-8 ">
                  <p className="  mb-4 mt-8 font-bebasNeue font-display text-cream/60 text-sm md:text-base tracking-[0.2em] ">Asador · Leña y Brasa · Desde 1978</p>
                  <h1 className=" font-bebasNeue text-cream text-6xl md:text-8xl lg:text-9xl leading-none tracking-wider mb-6 ">El rescoldo</h1>
                  <p className=" font-lora italic text-warm-muted text-lg md:text-xl mb-8 ">carnes a la brasa · cocina de fuego </p>
                  <p className=" font-bebasNeue border-2 border-borders px-8 py-3 text-lg tracking-[0.2em]  ">carta - temporada 2026</p>
            </section>
      );
};

export default TitleMenu;

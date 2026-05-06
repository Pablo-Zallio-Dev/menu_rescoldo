"use client";
import React from 'react';



const Footer: React.FC  = ({}) => {
	return (
		<>
                  <p className="font-bebasNeue text-2xl whitespace-break-spaces   word-spacing  ">Fuego · Tiempo · Sabor</p>
                  <section className=" flex flex-col items-center gap-2 pt-8 font-lora text-sm italic ">
                  <p className="">Carrer Major 8 · Valencia</p>
                  <p className="">Tel: +34 963 47 15 22</p>
                  <p className="">www.elrescoldo.es</p>

                  </section>
            </>
	);
};

export default Footer;

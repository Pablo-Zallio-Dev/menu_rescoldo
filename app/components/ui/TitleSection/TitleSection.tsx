"use client";
import Image from 'next/image';
import React from 'react';

export type TitleSectionProps = {
      image: string,
	category: string,
      subitle: string
}

const TitleSection: React.FC<TitleSectionProps>  = ({ image, category, subitle}) => {
	return (
            <section className=" flex flex-col gap-2 pt-8 pb-10 ">
                  <section className="relative w-full h-36 ">
                        <Image className=' absolute object-cover ' src={image} alt={''} fill />
                  </section>
                  <h2 className=" pt-8 font-bebasNeue text-4xl "> {category} </h2>
                  <h3 className=" font-lora italic ">{subitle}</h3>
            </section>
	);
};

export default TitleSection;

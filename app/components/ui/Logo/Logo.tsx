"use client";
import Image from 'next/image';
import React from 'react';



const Logo: React.FC  = ({}) => {
	return (
		<section className=" relative w-44 h-44 ">
                  <Image className=' absolute rounded-full  ' src={'/images/logo.webp'} alt={'Logo del restaurante'} fill  />
            </section>
	);
};

export default Logo;

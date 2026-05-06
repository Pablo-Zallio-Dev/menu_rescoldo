"use client";
import React from 'react';

export type NavProps = {
      categories: string
}

const Nav: React.FC<NavProps> = ({ categories }) => {
      return (
            <section className=" flex  justify-center bg-background sticky top-0 py-4 ">

                  <nav className="  px-8 font-bebasNeue text-base tracking-widest ">
                        <a href={`#${categories}`} className="">{categories}</a>
                  </nav>
            </section>
      );
};

export default Nav;

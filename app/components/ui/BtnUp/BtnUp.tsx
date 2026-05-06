"use client";
import { MoveUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const BtnUp: React.FC = ({ }) => {
      const [visible, setVisible] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  const scroll = document.documentElement.scrollTop || document.body.scrollTop;
                  setVisible(scroll > 300);
            };

            window.addEventListener("scroll", handleScroll, { passive: true });
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
            <section className={` flex justify-center items-center gap-1 py-2  fixed bottom-0 z-50 w-full   border bg-text   transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
    `}>
                  <a href="#home" className=" flex items-center gap-1.5 leading-none text-background    font-bebasNeue text-base tracking-widest">
                  <MoveUp size={16} color="#3a2010" />
                        Subir
                  </a>
            </section>
      );
};

export default BtnUp;
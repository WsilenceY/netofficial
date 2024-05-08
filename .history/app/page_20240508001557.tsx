import Image from "next/image";
"use client";
import React, {useState,useEffect} from 'react';
import intl from 'react-intl-universal'
import Typed from 'typed.js';
export default function Home() {
   const [initDone, setInitDone] = useState(false);
   const typedel = React.useRef(null);
   useEffect(()=>{
        console.log('typedel---',Typed);
        if(!initDone) return;
        const typed = new Typed("#tttt", {
            strings: ['NETREEL.AI'],
            typeSpeed: 100,
          });
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    },[initDone])
  return (
    <>
     { initDone &&
        <div className="w-full h-full flex flex-col">
        </div>
     }
    </>
  );
}

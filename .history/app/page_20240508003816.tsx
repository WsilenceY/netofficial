import Image from "next/image";
"use client";
import React, {useState,useEffect} from 'react';
import intl from 'react-intl-universal'
import Typed from 'typed.js';
const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CH": require('./locales/zh-CN.json'),
    "zh-TW": require('./locales/zh-TW.json'),
  };
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
    useEffect(() => {
        intl.init({
            currentLocale: intl.determineLocale({urlLocaleKey: "language", cookieLocaleKey: "language"}),
            locales,
        }).then(() => {
            setInitDone(true);
        });
        intl.determineLocale({
            urlLocaleKey: "language",
            cookieLocaleKey: "language"
        });
    }, []);
  return (
    <>
     { initDone &&
        <main className="bg-block h-fit w-full flex-1 absolute top-0 box-border bg-[#100F22] relative selector">
            <div className="mx-auto w-full lg:h-screen sm:h-banner bg-cover relative lg:bg-bannerImg md:bg-bannerImg sm:bg-mbannerImg">
                <div className="lg:w-1/2 lg:h-24 md:h-96 m-auto text-center absolute sm:top-96 lg:top-0 bottom-0 left-0 right-0">
                    <h1 ref={typedel} id="tttt" className="lg:text-8xl md:text-6xl sm:text-5xl sm:mt-24 font-extrabold text-write-900">qqqqq</h1>
                    <p className="mt-4 text-write-500 lg:text-4xl md:text-2xl">">{intl.get("SLOGEN")}</p>
                </div>
            </div>
            {/* part 1 */}
                <div className="mx-auto w-full lg:h-screen sm:h-auto bg-cover flex lg:flex-row sm:flex-col-reverse sm:text-center items-center lg:px-28 sm:px-mspace relative">
                    <img className="absolute left-0 top-96 z-0"  src='/images/bgleft.png' alt=""/>
                    <div className="z-9 lg:basis-3/5 lax lax_preset_fadeIn:50:100 lax_preset_spin">
                        <h2 className='lg:text-4xl sm:text-2xl mb-10 '>{intl.get('PART1H1')}</h2>
                        <p className='text-justify'>{intl.get('PART1TEXT')}</p>
                    </div>
                    <div className="lg:w-120 lg:basis-2/5">
                        <img  src='/images/part2img.png' alt=""></img>
                    </div>
                </div>
        </main>
     }
    </>
  );
}

"use client";
import Image from "next/image";
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
                    <p className="mt-4 text-write-500 lg:text-4xl md:text-2xl">{intl.get("SLOGEN")}</p>
                </div>
            </div>
            {/* part 1 */}
                <div className="mx-auto w-full lg:h-screen sm:h-auto bg-cover flex lg:flex-row sm:flex-col-reverse sm:text-center items-center lg:px-28 sm:px-mspace relative">
                    <img className="absolute left-0 top-96 z-0"  src='/images/bgleft.png' alt=""/>
                    <div className="z-9 lg:basis-3/5 lax lax_preset_fadeIn:50:100 lax_preset_spin">
                        <h2 className='lg:text-4xl sm:text-2xl mb-10 '>{intl.get("PART1H1")}</h2>
                        <p className='text-justify'>{intl.get("PART1TEXT")}</p>
                    </div>
                    <div className="lg:w-120 lg:basis-2/5">
                        <Image  src='/images/part2img.png' alt=""/>
                    </div>
                </div>
            {/* part 2 */}
                <div className="mx-auto w-full lg:h-screen sm:h-hpart2 bg-cover relative">
                    <div className='lg:h-1/2 sm:h-auto lg:absolute sm:relative lg:top-0 sm:top-4 bottom-0 m-auto w-auto  lg:px-28 sm:px-mspace z-9'>
                        <h2 className='lg:text-4xl mb-12 text-center sm:text-2xl'>{intl.get('PART2H1')}</h2>
                        <Image className='mb-8' src='/images/part3img1.png'/>
                            <div className="flex lg:flex-row  sm:flex-col gap-8 z-9">
                                <p>
                                    <h3 className='mb-4'>{intl.get('PART2H2')}</h3>
                                    {intl.get('PART2TEXT1')}
                                    <ul className='flex justify-around mt-12'>
                                        <li>
                                            <Image className='w-8' src='/images/icon1.png'/>
                                        </li>
                                        <li>
                                            <Image className='w-8' src='/images/icon2.png'/>
                                        </li>
                                        <li>
                                            <Image className='w-8' src='/images/icon3.png'/>
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    <h3 className='mb-4'>{intl.get('PART2H3')}</h3>
                                    {intl.get('PART2TEXT2')}
                                    <ul className='flex justify-around mt-12'>
                                        <li>
                                            <Image className='w-8' src='/images/icon4.png'/>
                                        </li>
                                        <li>
                                            <Image className='w-8' src='/images/icon5.png'/>
                                        </li>
                                        <li>
                                            <Image className='w-8' src='/images/icon6.png'/>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        <Image className='mt-8'  src='/images/part3img2.png'></Image>
                    </div>
                    <Image className="absolute right-0 top-96 z-0"  src='/images/rightimg.png' alt=""/>
                </div>
                 <div className="mx-auto w-full lg:h-screen sm:h-hpart3 bg-cover relative z-9">
                    <div className='lg:h-4/5 sm:h-80 lg:absolute sm:relative top-0 bottom-0 right-0 left-0 mx-auto w-auto lg:px-28 sm:px-mspaces'>
                        <h2 className='lg:text-4xl lg:mb-12 sm:text-2xl text-center'>{intl.get('PART3H1')}</h2>
                        <Image className='mx-auto' src='/images/part4img.png'/>
                        <p className='text-center'>{intl.get('PART3TEXT')}</p>
                    </div>
                </div>
        </main>
     }
    </>
  );
}

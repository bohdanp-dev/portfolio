'use client';
import { TypeAnimation } from 'react-type-animation';
import {
    HERO_ABOUT, HERO_CAROUSEL_FRONTEND_DEVELOPER,
    HERO_CAROUSEL_NAME, HERO_CAROUSEL_WEB_DEVELOPER,
    HERO_DOWNLOAD_CV,
    HERO_GRADIENT_TEXT,
    HERO_HIRE,
} from "@/utils/textConsts";
import {CV, LINKEDIN_LINK} from "@/utils/heroLinks";
import {motion} from 'framer-motion';

const HeroSection = () => {

    return (
        <section className="lg:py-12 ">
            <div
                className=" flex flex-col items-center place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-[var(--text-color-primary)] mb-4 text-4xl h-28 sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text gradient-bg-to-r-1">
              {HERO_GRADIENT_TEXT}
          </span>

                    <TypeAnimation
                        sequence={[
                            HERO_CAROUSEL_NAME,
                            1000,
                            HERO_CAROUSEL_FRONTEND_DEVELOPER,
                            1000,
                            HERO_CAROUSEL_WEB_DEVELOPER,
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <div className="text-[var(--text-color-secondary)] text-center text-base sm:text-lg mb-6 lg:text-xl">
                    {HERO_ABOUT}
                </div>
                <div className="mb-10">
                    <a href={LINKEDIN_LINK} target={"_blank"}>
                            <motion.button
                                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 gradient-bg-to-br-1 font-bold text-black"
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.15 }}
                            >
                                {HERO_HIRE}
                            </motion.button>
                    </a>
                    <a
                        href={
                            CV
                        }
                    >
                        <motion.button
                            className="px-0.5 py-0.5 w-full sm:w-fit rounded-full  gradient-bg-to-br-1 text-white mt-3"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.15 }}
                        >
                          <span className="block bg-[var(--background-color)] text-[var(--text-color-primary)] font-bold rounded-full px-5 py-2">
                            {HERO_DOWNLOAD_CV}
                          </span>
                        </motion.button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

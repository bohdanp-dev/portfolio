'use client';
import Image from 'next/image';
import { useTransition, useState, useRef } from 'react';
import TabSelector from './TabSelector';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    ABOUT_ABOUT_ME,
    ABOUT_ABOUT_ME_LONG,
    ABOUT_EDUCATION_TAB_TITLE,
    ABOUT_SKILLS_TAB_TITLE,
    EDUCATION,
    SKILLS
} from '@/utils/textConsts'

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const TabContentData = (ref, isInView) => [
    {
        title: ABOUT_SKILLS_TAB_TITLE,
        id: 'skills',
        content: (
            <ul ref={ref} className="list-disc pl-2">
                <AnimatePresence>
                    {SKILLS.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? 'animate' : 'initial'}
                            transition={{ duration: 0.3, delay: index * 0.3 }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        ),
    },
    {
        title: ABOUT_EDUCATION_TAB_TITLE,
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                {EDUCATION.map((edu, index) => (
                    <motion.li
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                        key={index}
                    >
                        {edu}
                    </motion.li>
                ))}
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [isPending, startTransition] = useTransition();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    //i use useTransition here to ensure that other animations remain smooth
    const handleTabChange = (id) => {
        startTransition(() => {
            setActiveTab(id);
        });
    };

    return (
        <section id="about" className="text-white pt-24 -mt-24">
            <div className="md:grid md:grid-cols-2 gap-8  px-4 py-2 xl:gap-16 sm:py-4 xl:px-16">
                <Image
                    src={'/images/avatar.png'}
                    width={500}
                    height={500}
                    alt="about Image"
                    className="rounded-xl mx-auto"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 ">{ABOUT_ABOUT_ME}</h2>
                    <div className="text-[#8ecae6] lg:text-lg">
                        <ABOUT_ABOUT_ME_LONG />
                    </div>
                    <div className="flex flex-row justify-start mt-8">
                        <TabSelector
                            onSelectTab={() => handleTabChange('skills')}
                            active={activeTab === 'skills'}
                        >
                            Skills
                        </TabSelector>
                        <TabSelector
                            onSelectTab={() => handleTabChange('education')}
                            active={activeTab === 'education'}
                        >
                            Education
                        </TabSelector>
                    </div>
                    <div className="mt-8">
                        {TabContentData(ref, isInView).find((t) => t.id === activeTab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

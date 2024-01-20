'use client';
import { socialMediaLinks } from "@/utils/socialMediaLinks"
import SocialMediaLink from "@/components/SocialMediaLink";
import { TypeAnimation } from 'react-type-animation';
import {CONTACT_TEXT_BIG, CONTACT_TEXT_GRADIENT} from "@/utils/textConsts";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="flex justify-center align-middle my-10 md:my-12 py-4 gap-4 relative"
        >
            <div className="mb-3">
                <h5 className="text-4xl text-center font-bold my-2">
          <span className="text-transparent bg-clip-text gradient-bg-to-r-1">
            {CONTACT_TEXT_GRADIENT}
          </span>
                </h5>

                <h5 className="text-2xl text-center font-semibold text-[var(--text-color-primary)] my-2">
                    <TypeAnimation
                        sequence={[
                            'GitHub',
                            1000,
                            'LinkedIn',
                            1000,
                            'Telegram',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h5>
                <p className="text-[var(--text-color-secondary)] mb-4 text-xl max-w-2xl text-center ">
                    {CONTACT_TEXT_BIG}
                </p>
                <div className="flex flex-row gap-3 justify-center">
                    {socialMediaLinks.map((link, index)=>{
                        return <SocialMediaLink key={index} {...link}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

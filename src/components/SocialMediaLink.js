import Image from "next/image";
import {motion} from "framer-motion";

const SocialMediaLink = ({ href, icon, alt }) => (
    <motion.a whileHover={{ scale: 1.2 }} href={href} target="_blank" rel="noopener noreferrer">
        <Image src={icon} alt={alt} width={40} height={40} />
    </motion.a>
);

export default SocialMediaLink;
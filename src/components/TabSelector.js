import { motion } from 'framer-motion';

//-0.75rem so that it doesn't extend beyond the text
const variants = {
    default: { width: 0 },
    active: { width: 'calc(100% - 0.75rem)' },
};


//currently use it for showing and animating Skills and Education buttons.
const TabSelector = ({ active, onSelectTab, children }) => {
    const buttonColor = active ? 'text-white' : 'text-[#219ebc]';
    return (
        <button onClick={onSelectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonColor}`}>
                {children}
            </p>
            <motion.div
                animate={active ? 'active' : 'default'}
                variants={variants}
                className='h-0.5 bg-[#e33211] mt-1 mr-3'
            ></motion.div>
        </button>
    );
};

export default TabSelector;

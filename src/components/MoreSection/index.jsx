import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

export default function MoreSection() {
    const text01 = 'Lörem ipsum stafettläkare deciledes plal repärad autosperat. Prenat midevis än prolingar åkafusam oheten. Antilig miböskap deck alltså pont. Gygen suder, lere men vadid.'
    const text02 = 'Lörem ipsum stafettläkare deciledes plal repärad autosperat. Prenat midevis än prolingar åkafusam oheten. Antilig miböskap deck alltså pont. Gygen suder, lere men vadid.'
    const text03 = 'Lörem ipsum stafettläkare deciledes plal repärad autosperat. Prenat midevis än prolingar åkafusam oheten. Antilig miböskap deck alltså pont. Gygen suder, lere men vadid.'

  return (
    <div className='mt-20 px-8  min-h-screen container mx-auto lg:px-12'>
        <SectionTitle title="MORE WAYS TO SAVE ON YOUR STAY" className="mb-20"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
            <div className='flex flex-col gap-4 lg:gap-8'>
                <img src="/moreSectionOne.png" alt="more section one image" />
                <h6 className='text-lg lg:text-xl font-semibold  lg:h-12'>Pay with Points & Cash</h6>
                <div>
                    {text01.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity : 0}}
                            whileInView={{opacity : 1}}
                            viewport={{once: true}}
                            transition={{duration : 0.3, delay: index * 0.02}}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:gap-8'>
                <img src="/moreSectionTwo.png" alt="more section one image" />
                <h6 className='text-lg lg:text-xl font-semibold  lg:h-12'>Enjoy endless possibilities with Points Purchase</h6>
                <div>
                {text02.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity : 0}}
                            whileInView={{opacity : 1}}
                            viewport={{once: true}}
                            transition={{duration : 0.3, delay: index * 0.02}}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:gap-8'>
                <img src="/moreSectionThree.png" alt="more section one image" />
                <h6 className='text-lg lg:text-xl font-semibold '>Moments to remember</h6>
                <div>
                {text03.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity : 0}}
                            whileInView={{opacity : 1}}
                            viewport={{once: true}}
                            transition={{duration : 0.3, delay:  index * 0.02}}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}



 
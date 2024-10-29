import SectionTitle from '../ui/SectionTitle'
import { ImageCell } from './ImageCell'
import { TextCell, TextCellDescription, TextCellTitle } from './TextCell'

export default function WelcomeSection() {
  return (
    <div className='container mx-auto'>
        <div className='lg:min-h-[550px] py-16 md:py-24 flex flex-col justify-center items-center'>
            <SectionTitle title="WELCOME INTO THE MOMENT" />
            <p className='px-8  mt-4 lg:mt-14 text-sm md:text-base lg:text-lg text-pretty mx-auto '>Lörem ipsum diliga eusamma och ner. Nyning endotion resam. Twittra hexal: i diarere segisk. Biora lade och inframerar tengen sabelt. 
    Faska vivyre om än pade tåvis och tirade. Vanungen masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
    Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-flow-row px-8 lg:px-28 gap-0 overflow-hidden'>
            <ImageCell src='/welcomeOne.png' className='w-full' direction='left'/>
            <TextCell className="bg-green-light" direction='right'>
                <TextCellTitle>GATHERING PLACES</TextCellTitle>
                <TextCellDescription>masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
                Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
                </TextCellDescription>
            </TextCell>
            <ImageCell src='/welcometwo.png' className='w-full sm:hidden mt-4' direction='right'/>
            
            <TextCell className="bg-green-template text-white" direction='right'>
                <TextCellTitle>ENTICING FOOD & BEVERAGE</TextCellTitle>
                <TextCellDescription>masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
                Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
                </TextCellDescription>
            </TextCell>
            <ImageCell src='/welcometwo.png' className='hidden sm:block' direction='right'/>

            <ImageCell src='/welcomethree.png' className='w-full' direction='left'/>
            <TextCell className="bg-gray-template" direction='left'>
                <TextCellTitle>MEMORABLE SERVICE</TextCellTitle>
                <TextCellDescription>masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
                Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
                </TextCellDescription>
            </TextCell>
        
        </div>
    </div>
  )
}






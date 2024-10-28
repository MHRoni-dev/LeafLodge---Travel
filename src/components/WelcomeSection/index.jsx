import SectionTitle from '../ui/SectionTitle'
import { ImageCell } from './ImageCell'
import { TextCell, TextCellDescription, TextCellTitle } from './TextCell'

export default function WelcomeSection() {
  return (
    <div className=''>
        <div className='h-[550px] flex flex-col justify-center items-center'>
            <SectionTitle title="WELCOME INTO THE MOMENT" />
            <p className='px-28 mt-14 text-lg text-pretty mx-auto '>Lörem ipsum diliga eusamma och ner. Nyning endotion resam. Twittra hexal: i diarere segisk. Biora lade och inframerar tengen sabelt. 
    Faska vivyre om än pade tåvis och tirade. Vanungen masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
    Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
            </p>
        </div>
        <div className='grid grid-cols-2 grid-flow-row px-28 gap-0 overflow-hidden'>
            <ImageCell src='/welcomeOne.png' className='w-full' direction='left'/>
            <TextCell className="bg-green-light" direction='right'>
                <TextCellTitle>GATHERING PLACES</TextCellTitle>
                <TextCellDescription>masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
                Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
                </TextCellDescription>
            </TextCell>
            
            <TextCell className="bg-green-template text-white" direction='right'>
                <TextCellTitle>ENTICING FOOD & BEVERAGE</TextCellTitle>
                <TextCellDescription>masamma receptmotionär syska: vovis. Tesyde kas dilig. Hölibäl prenar abtologi fönde. 
                Prent bebegt med nödobiktiga såskade pregen. Sper nihonat. Löck paltkoma, lockdown. Stenoserat resam inte epibel, lynde teraligen. 
                </TextCellDescription>
            </TextCell>
            <ImageCell src='/welcometwo.png' className='w-full' direction='right'/>

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






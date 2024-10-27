import SectionTitle from '../ui/SectionTitle';

export default function MoreSection() {
  return (
    <div className='mt-20 px-28 min-h-screen'>
        <SectionTitle title="MORE WAYS TO SAVE ON YOUR STAY" className="mb-20"/>
        <div className='grid grid-cols-3 gap-20'>
            <div className='flex flex-col gap-8'>
                <img src="/moreSectionOne.png" alt="more section one image" />
                <h6 className='text-xl font-semibold h-12'>Pay with Points & Cash</h6>
                <p className='-mt-4'>Lörem ipsum stafettläkare deciledes plal repärad autosperat. Prenat midevis än prolingar åkafusam oheten. Antilig miböskap deck alltså pont. Gygen suder, lere men vadid. </p>
            </div>
            <div className='flex flex-col gap-8'>
                <img src="/moreSectionTwo.png" alt="more section one image" />
                <h6 className='text-xl font-semibold  h-12'>Enjoy endless possibilities with Points Purchase</h6>
                <p className='-mt-4'>Lörem ipsum stafettläkare deciledes plal repärad autosperat. Prenat midevis än prolingar åkafusam oheten. Antilig miböskap deck alltså pont. Gygen suder, lere men vadid. </p>
            </div>
            <div className='flex flex-col gap-8'>
                <img src="/moreSectionThree.png" alt="more section one image" />
                <h6 className='text-xl font-semibold  h-12'>Moments to remember</h6>
                <p className='-mt-4'>Lörem ipsum stafettläkare deciledes plal repärad autosperat. Prenat midevis än prolingar åkafusam oheten. Antilig miböskap deck alltså pont. Gygen suder, lere men vadid. </p>
            </div>
        </div>
    </div>
  )
}



 
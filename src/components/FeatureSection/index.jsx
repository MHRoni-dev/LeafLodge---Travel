import SectionTitle from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';

export default function FeatureSection() {
  return (
    <div className='pt-20 min-h-screen'>
        <SectionTitle title="NEW AND FEATURED HOTELS" className="mb-12"/>
        <div className='flex items-center justify-center w-full gap-12'>
          <MenuLink active={true}>LeafLodge-Philadelphia</MenuLink>
          <MenuLink>LeafLodge-Boston</MenuLink>
          <MenuLink>LeafLodge-New York</MenuLink>
          <MenuLink>LeafLodge-Detroit</MenuLink>
          <MenuLink>LeafLodge-Denver</MenuLink>
        </div>
        <div className='mt-20 relative'>
          <img src="/featureOne.png" alt="feature" className='w-full'/>
          <div className='absolute left-[15%] top-1/2 -translate-y-1/2 bg-white/90  py-16 w-[440px] rounded-xl'>
            <p className='text-2xl items-start ml-16'>
              LeafLodge Hotels <br /> and suites - Detroit
            </p>
            <div className='border-2 border-muted-foreground text-lg ml-auto px-8 py-3 w-fit mt-12 mr-16'>
              <span>Book Now</span>
            </div>
          </div>
        </div>
    </div>
  )
}


function MenuLink ({children, active}) {

  return  (
    <div className={cn('w-fit border-b-2 pb-2 px-2 ', active && 'border-black')}>
      <span>{children}</span>
    </div>
  )
}
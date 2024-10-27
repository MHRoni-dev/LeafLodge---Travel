import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import FeatureSection from '@/components/FeatureSection';
import MoreSection from '@/components/MoreSection';
import Footer from '@/components/Footer';

function App() {

  return (
    <div className='font-prompt'>
      <Header />
      <WelcomeSection />
      <FeatureSection />
      <MoreSection />
      <Footer />
    </div>
  )
}

export default App

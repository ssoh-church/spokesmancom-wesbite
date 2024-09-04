import AboutSection from '@/components/grids/AboutSection';
import CampaignsSection from '@/components/grids/CampaignSection';
import CounterSection from '@/components/grids/CounterSection';
import EventSection from '@/components/grids/EventSection';
import HeroGrid from '@/components/grids/HeroGrid';
import MinistryArm from '@/components/grids/MinistryArm';
import PromoSection from "@/components/grids/PromoSection";
import TestimonialSection from '@/components/grids/TestimonialSection';
import data from "@/data/basic-data.json"

export default function Home() {
  const {sliderData} = data
  const {ministryArms} = data
  const {eventData} = data
  return (
    <div>
      <HeroGrid data={sliderData} />
      <PromoSection />
      <MinistryArm  data={ministryArms}/>
      <AboutSection />
      <CampaignsSection />
      <EventSection eventData={eventData} limit={3}/>
    </div>
      
      
  );
}

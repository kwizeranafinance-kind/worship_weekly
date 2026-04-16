import Hero from '@/components/Hero';
import StreamSection from '@/components/StreamSection';
import RadioSection from '@/components/RadioSection';
import ScheduleSection from '@/components/ScheduleSection';
import PlatformsSection from '@/components/PlatformsSection';
import CommunitySection from '@/components/CommunitySection';

export default function Home() {
  return (
    <>
      <Hero />
      <StreamSection />
      <RadioSection />
      <ScheduleSection />
      <PlatformsSection />
      <CommunitySection />
    </>
  );
}

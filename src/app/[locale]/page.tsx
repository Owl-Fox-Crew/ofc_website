import Hero from '@/components/home/Hero';
import BrandValues from '@/components/home/BrandValues';
import ValueOffer from '@/components/home/ValueOffer';
import CommunicationKeys from '@/components/home/CommunicationKeys';
import Workflow from '@/components/home/Workflow';
import BrandStories from '@/components/home/BrandStories';
import FAQs from '@/components/home/FAQs';
import FAQForm from '@/components/home/FAQForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandValues />
      <ValueOffer />
      <CommunicationKeys />
      <Workflow />
      <BrandStories />
      <FAQs />
      <FAQForm />
    </main>
  );
}

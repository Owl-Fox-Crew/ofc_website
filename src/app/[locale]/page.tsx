import Hero from '@/components/home/hero';
import BrandValues from '@/components/home/brandvalues';
import ValueOffer from '@/components/home/valueoffer';
import CommunicationKeys from '@/components/home/communicationkeys';
import Workflow from '@/components/home/workflow';
import BrandStories from '@/components/home/brandstories';
import FAQs from '@/components/home/faqs';
import FAQForm from '@/components/home/faqform';

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

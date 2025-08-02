import Hero from '../../components/home/Hero';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Hero');

  return (
    <main>
      <Hero />
    </main>
  );
}
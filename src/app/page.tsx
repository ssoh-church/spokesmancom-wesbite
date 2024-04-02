import Image from "next/image";
import HeroGrid from '@/components/grids/HeroGrid';

export default function Home() {
  const sliderData = [
    {
      imageUrl: 'img/slider-1.jpg',
      title: 'We are dealers in Hope',
      subtitle: 'Connect with Us today',
      description: "Don't make a case against yourself because God will not make a case against you."
    },
    {
      imageUrl: 'img/slider-2.jpg',
      title: 'We are called to',
      subtitle: 'Connect with Us today',
      description: 'communicate divine truth with an accent of love and bring hope to our generation.'
    },
    {
      imageUrl: 'img/slider-3.jpg',
      title: 'We are committed to',
      subtitle: 'Connect with Us Today',
      description: 'the pursuit of excellence in all that pertains to life and Godliness through the agency of God\'s Word and the Holy Spirit.'
    }
  ];
  return (
      <HeroGrid data={sliderData} />
      
  );
}

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Image } from '@mantine/core';
import imgSrc from "@/images/avat.png";

export function HomePage() {
  return (
    <>
      <Image
        src={imgSrc}
        alt='Mantine logo'
        height={140}
        width={140}
        style={{
          margin: '20px auto',
          height: '140px',
          width: '140px',
        }}
      />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

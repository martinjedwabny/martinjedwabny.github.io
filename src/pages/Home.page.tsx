import imgSrc from "@/images/avat.png";

export function HomePage() {
  return (
    <>
      <img
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </>
  );
}

import Image from 'next/image'
import React from 'react'

export default function Home() {
  const [contador,setContador]=React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setContador((prevContador) => (prevContador>=3? 0 : prevContador+1));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const imagenes=[
    "/0.png",
    "/1.jpg",
    "/2.jpg",
    "/3.jpg"
  ]
  return (
    <div>
      <div display='block'>
      <Image
        src={imagenes[contador]}
        alt="Imagen cargada"
        layout="responsive"
        width={700}
        height={475}
        />
      </div>
    </div>
  )
}

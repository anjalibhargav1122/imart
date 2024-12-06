import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'
import "./Pages.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import table from "../imgs/table.webp"
import sofa from "../imgs/sofa.webp"
import kitchen from "../imgs/kitchen.webp"
import sea from "../imgs/sea.webp"
import cloth from "../imgs/cloth.webp"
import diya from "../imgs/diya.webp"
import sofaa from "../imgs/sofaa.webp"
import cren from "../imgs/cren.webp"
import leaf from "../imgs/leaf.png"
import bichhu from "../imgs/bichhu.jpg"
import { GiStarShuriken } from "react-icons/gi";
import Footer from '../components/Footer';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  boxShadow: 'none',
  padding: theme.spacing(1),
  color: theme.palette.text.dark,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Home = () => {

  useEffect(() => {
    const snakeTexts = document.querySelectorAll(".snake-ani");

    snakeTexts.forEach((snakeText) => {
      snakeText.innerHTML = snakeText.textContent
        .split("")
        .map((char, index) => `<span style="--i:${index}">${char}</span>`)
        .join("");

      snakeText.classList.add("animate");

      snakeText.addEventListener("mouseover", () => {
        snakeText.classList.remove("animate");
        void snakeText.offsetWidth;
        snakeText.classList.add("animate");
      });
    });
  }, []);

  const emailInputRef = useRef(null);
  const strengthLineRef = useRef(null);
  const [lineOpacity, setLineOpacity] = useState(0);


  const handleMouseEnter = () => setLineOpacity(1);
  const handleMouseLeave = () => setLineOpacity(0);

  const handleMouseMove = (event) => {
    const rect = emailInputRef.current.getBoundingClientRect();
    const xPosition = event.clientX - rect.left;
    strengthLineRef.current.style.transform = `translateX(${xPosition - 25}px) rotate(90deg)`;
  };

  const tx = [
    {
      "tx": "ACCOMPAGNEMENT ET CONSEIL"
    },
    {
      "tx": "MAITRISE DES PROJETS EN SPECIAL"
    },
    {
      "tx": "REPONSE TECHNIQUE"
    },
    {
      "tx": "MONTAGE INTEGRE"
    }
  ];

  return (
    <div>

      <div className='bg-[#f4f3f1] '>
        <Navbar />
        <Container maxWidth="md" className='pt-20'>
          <h1 className=' text-[70px] sm:text-[90px] ff leading-none mt-20'>AGENCE IMART</h1><h2 className='text-[50px] sm:text-[70px] '>MEUBLES D'EDITEURS</h2>

        </Container>
        <Container maxWidth={false}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>
            <Grid size={8} className="pt-14">
              <Item >
                <Container maxWidth="sm">
                  <h2 className='ff2 font-semibold'>AGENT EXCLUSIF DE MARQUES DE MOBILIER CONTRACT, RéSIDENTIEL ET DE DECORATION HAUT DE GAMME EN FRANCE.</h2><p className='ff3 mt-7'>Depuis la fin des années 90 Nathalie et Nicolas IMART se positionnent comme partenaires des maisons d’édition de mobilier italiennes  et espagnoles telles que Moroso ou Nanimarquina. </p><p className='ff3 mt-7'>Ils les accompagnent dans leur croissance sur le marché français, en créant des liens forts et durables avec la distribution - à Paris comme en province - et en tissant des relations de confiance avec les usines</p>
                </Container>
              </Item>
            </Grid>
            <Grid size={4} >
              <Item>
                <img src={table} alt='table' className='w-full h-full' />

              </Item>
            </Grid>

          </Grid>
        </Container>
        <Container maxWidth={false}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>
            <Grid size={7} >
              <Item >

                <img src={sofa} alt='sofa' className='w-full h-full' />
              </Item>
            </Grid>
            <Grid size={5} className='flex items-center justify-center'>
              <Item >
                {
                  tx.map((v, i) => {
                    return (
                      <p key={i} className='ff2 font-semibold text-[17px] mb-4'>{v.tx}</p>
                    )
                  })
                }
              </Item>
            </Grid>

          </Grid>
        </Container>
        <Container maxWidth={false}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>

            <Grid size={6} className='flex items-center justify-center'>
              <Item >


                <div className="relative  group cursor-pointer zoom">
                  <span className="text-xl tracking-wide group-hover:text-[#d28d7e]">DÉCOUVREZ L'AGENCE &nbsp;&nbsp;&nbsp;</span>

                  <span className="block mt-1 w-full  h-0.5 bg-black relative transition-all duration-300 group-hover:w-[120%] "></span>


                  <span className="absolute -right-8 bottom-0 translate-y-1/2 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:-right-[80px] mr-5 mb-[1px]">

                    <span className="block w-2 h-2 border-t-2 border-l-2 border-black transform rotate-[130deg] "></span>
                  </span>
                </div>

                <div className="relative inline-block group cursor-pointer mt-10 zoom">
                  <span className="text-xl tracking-wide group-hover:text-[#d28d7e]">Showroom &nbsp;&nbsp;&nbsp;</span>

                  <span className="block mt-1 w-full  h-0.5 bg-black relative transition-all duration-300 group-hover:w-[120%] "></span>


                  <span className="absolute -right-8 bottom-0 translate-y-1/2 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:-right-[58px] mr-5 mb-[1px]">

                    <span className="block w-2 h-2 border-t-2 border-l-2 border-black transform rotate-[130deg] "></span>
                  </span>
                </div>

              </Item>
            </Grid>
            <Grid size={6} >
              <Item >

                <img src={kitchen} alt='kitchen' className='w-full h-full' />
              </Item>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="sm" className='flex justify-center pt-20 pb-20'><GiStarShuriken className='text-4xl' /></Container>
      </div>
      <Container maxWidth={false} className='bg-[#beb3ad] pt-20 pb-20'> <Container maxWidth="lg">
        <div className='bg-black text-[#beb3ad] inline-block ps-4 text-xl pe-4 mt-10 pb-1'>nos marques</div>
        <div className='text-[43px] sm:text-[96px] pt-20 ff border-b-[1px] border-black pb-5 hover:text-[#d28b76] transition duration-300 tx zoom'>MOROSO</div><div className='w-1/2 '><img src={bichhu} alt='bichhu chair' className='w-full h-full  pic' /></div>
        <div className='text-[43px] sm:text-[96px] pt-10 ff border-b-[1px] border-black pb-5 hover:text-[#d28b76] transition duration-300 zoom'>DIESEL WITH MOROSO</div>
        <div className='text-[43px] sm:text-[96px] pt-10 ff border-b-[1px] border-black pb-5 hover:text-[#d28b76] transition duration-300 zoom'>PORRO</div>
        <div className='text-[43px] sm:text-[96px] pt-10 ff border-b-[1px] border-black pb-5 hover:text-[#d28b76] transition duration-300  zoom'>NANIMARQUINA</div>
        <div className='text-[43px] sm:text-[96px] pt-10 ff border-b-[1px] border-black pb-5 hover:text-[#d28b76] transition duration-300 whitespace-nowrap tracking-tighter zoom'>WALL & DECO</div>
        <div className='text-[43px] sm:text-[96px] pt-10 ff mb-20 hover:text-[#d28b76] transition duration-300 zoom'>ARCLINEA</div>
      </Container></Container>
      <div className='bg-[#f4f3f1] pt-20 '> <Container maxWidth="md" className='pt-20 text-center sm:text-start'><div className='w-[590px]   overflow-x-auto overflow-y-hidden'>

        <p className='ff text-[50px] sm:text-8xl '>NOUVEAUTéS</p>


      </div></Container><Container maxWidth="lg" className='pt-20'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>

            <Grid size={9} >
              <Item className='relative'>
                <Container maxWidth="sm"><p className='ff3'>Découvrez ici les nouveautés de chacune<br /> de nos marques.</p>

                </Container>
                <Container maxWidth="md mt-20 pt-20">
                  <img src={cloth} alt='cloth' className='w-full h-full hover:scale-110 transition duration-300' />
                  <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-[#f4f3f1] inline-block ps-4 text-sm pe-4 mt-0 pt-[0.20rem] pb-[0.15rem] whitespace-nowrap overflow-hidden ff2'>
                    ACTUALITES
                  </div>
                </Container>

              </Item>
            </Grid>
            <Grid size={3}>
              <Item className='relative zoom'>
                <img src={sea} alt='sea' className='w-full h-full hover:scale-110 transition duration-300' />
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-[#f4f3f1] inline-block ps-4 text-sm pe-4 mt-0 pt-[0.20rem] pb-[0.15rem] whitespace-nowrap overflow-hidden ff2'>
                  NOUVELLES COLLECTIONS
                </div>
              </Item>
            </Grid>


          </Grid>
        </Container>
        <Container maxWidth="sm" className='flex justify-center mt-20 pt-20  pb-20 mb-20'><div className='w-8'>
          <img src={leaf} alt='leaf' className='w-full h-full' /></div>
        </Container>
        <Container maxWidth={false} className='text-center sm:text-end text-5xl sm:text-8xl ff leading-[4.2rem] sm:leading-[7.5rem] mb-20'><p>NOS PIECES</p><p>DE COLLECTION</p>
        </Container>
        <Container maxWidth={false} className='mb-20'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>

            <Grid size={4} >
              <Item className='text-center'>
                <div className="relative inline-block group cursor-pointer zoom">
                  <span className="text-xl tracking-wide group-hover:text-[#d28d7e]">GALERIE AU CARRé &nbsp;&nbsp;&nbsp;</span>

                  <span className="block mt-1 w-full  h-0.5 bg-black relative transition-all duration-300 group-hover:w-[120%] "></span>


                  <span className="absolute -right-8 bottom-0 translate-y-1/2 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:-right-[72px] mr-5 mb-[1px]">

                    <span className="block w-2 h-2 border-t-2 border-l-2 border-black transform rotate-[130deg] "></span>
                  </span>
                </div>

              </Item>
            </Grid>
            <Grid size={8}>
              <Item >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>




                  <Grid size={4} >
                    <Item className='zoom '>
                      <p className="text-lg mb-5 ff2 snake-ani">
                        FAUTEUIL PROUST
                      </p>
                      <img src={sofaa} alt='sofa' className='w-full h-full hover:scale-110 transition duration-300' />
                    </Item>
                  </Grid>
                  <Grid size={4} >
                    <Item className='zoom'>
                      <p className='text-lg  mb-5 ff2 snake-ani'>MEUBLE MANIA</p>
                      <img src={diya} alt='diya' className='w-full h-full hover:scale-110 transition duration-300' />

                    </Item>
                  </Grid><Grid size={4} >
                    <Item className='zoom'>
                      <p className='text-lg  mb-5 ff2 snake-ani'>LUSTRE MARIE COQUINE</p>

                      <img src={cren} alt='light' className='w-full h-full hover:scale-110 transition duration-300' />
                    </Item>
                  </Grid>

                </Grid>
              </Item>
            </Grid>


          </Grid>
        </Container>
        <Container maxWidth={false} className='border-y-[1px] border-black pt-8 '>
          <Container maxWidth="lg">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>

              <Grid size={6} >
                <Item >
                  <p className='text-5xl sm:text-7xl ff'>NEWSLETTER</p>
                </Item>
              </Grid>
              <Grid size={6}>
                <Item >
                  inscrivez-vous pour recevoir notre newsletter

                  <form className="mt-10 relative">
                    <div className="flex relative">
                      <input
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        ref={emailInputRef}
                        type="email"
                        id="email"
                        className="block w-full p-4 text-sm text-[#f4f3f1] pt-2.5 pb-2.5 bg-black ps-[45px]"
                        placeholder="Votre e-mail"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white bg-black hover:bg-transparent border-l-[1px] border-l-white font-medium text-sm px-4 hover:border-[1px] border-black hover:text-black zoom"
                      >
                        ENVOYER
                      </button>
                    </div>
                    <div
                      ref={strengthLineRef}
                      className="strength-line absolute"
                      style={{
                        top: "20px",
                        left: "5px",
                        width: "36px",
                        height: "1px",
                        backgroundColor: "#f4f3f1",
                        borderRadius: "2.5px",
                        opacity: lineOpacity,
                        transition: "opacity 0.2s ease",
                      }}
                    />
                  </form>

                </Item>
              </Grid>


            </Grid>
          </Container>
        </Container>

        <Container maxWidth={false} className='border-b-[1px] border-black'>
          <Container maxWidth="lg" className='pt-20 pb-20 '>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 1, md: 0 }}>

              <Grid size={5} >
                <Item >
                  <p className='text-[#a0a0b2] text-xs ff2'>ADRESSE</p>
                  <p>3 RUE DE L'UNIVERSITÉ AMÉRICAINE
                  </p><p> 64200 BIARRITZ</p>
                </Item>
              </Grid>
              <Grid size={4}>
                <Item >

                  <p className='text-[#a0a0b2] text-xs ff2'>TELEPHONE</p>
                  <p className='hover:text-[#d28d7e] transition duration-300 zoom'>05 63 77 30 30</p>
                </Item>
              </Grid>
              <Grid size={3}>
                <Item >
                  <p className='text-[#a0a0b2] text-xs ff2'>SUIVEZ - NOUS</p>
                  <p className='hover:text-[#d28d7e] transition duration-300 zoom'>INSTAGRAM</p>

                </Item>
              </Grid>


            </Grid>
          </Container>
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default Home
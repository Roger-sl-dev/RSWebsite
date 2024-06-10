
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { SiAlpinedotjs, SiAstro, SiCapacitor, SiIonic, SiJavascript, SiNextdotjs, SiPlaywright, SiReact, SiShadcnui, SiStimulus, SiTailwindcss, SiTurbo, SiTypescript, SiVuedotjs } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';

export default function () {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
         <SwiperSlide>
          <CardIcon Texto="Javascript" Icon={<SiJavascript/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Typescript" Icon={<SiTypescript/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Alpine" Icon={<SiAlpinedotjs/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Astro" Icon={<SiAstro/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Turbo" Icon={<SiTurbo/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Stimulus" Icon={<SiStimulus/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="React" Icon={<SiReact/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Next" Icon={<SiNextdotjs/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Tailwind" Icon={<SiTailwindcss/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Shadcn" Icon={<SiShadcnui/>} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Ionic" Icon={<SiIonic />} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Capacitor" Icon={<SiCapacitor />} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Playwright" Icon={<SiPlaywright />} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Git" Icon={<FaGit/>} />   
        </SwiperSlide>
     
     
      </Swiper>
    </>
  );
}

const CardIcon =(props)=>{
    return (
        <div className=' group hover:bg-lime-300 flex flex-col gap-3 border border-lime-300 rounded-lg p-2 backdrop-blur-lg'>
            <span className=' group-hover:text-black  flex justify-center text-5xl  text-lime-300'>
              {props.Icon}
            </span>
            <p className=' text-2xl text-white  font-semibold text-center group-hover:text-black'>{props.Texto}</p>
        </div>
    )
}

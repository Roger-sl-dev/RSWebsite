
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
         <SwiperSlide>
          <Card 
          Name=' Marcelo Santos'
          Texto='Lorem ipsum suscipit nisl viverra placerat donec, neque dapibus diam ultricies maecenas fusce dictumst, bibendum aenean justo amet tempus.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          Name=' Marcelo Santos'
          Texto='Lorem ipsum suscipit nisl viverra placerat donec, neque dapibus diam ultricies maecenas fusce dictumst, bibendum aenean justo amet tempus.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          Name=' Marcelo Santos'
          Texto='Lorem ipsum suscipit nisl viverra placerat donec, neque dapibus diam ultricies maecenas fusce dictumst, bibendum aenean justo amet tempus.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          Name=' Marcelo Santos'
          Texto='Lorem ipsum suscipit nisl viverra placerat donec, neque dapibus diam ultricies maecenas fusce dictumst, bibendum aenean justo amet tempus.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          Name=' Marcelo Santos'
          Texto='Lorem ipsum suscipit nisl viverra placerat donec, neque dapibus diam ultricies maecenas fusce dictumst, bibendum aenean justo amet tempus.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          Name=' Marcelo Santos'
          Texto='Lorem ipsum suscipit nisl viverra placerat donec, neque dapibus diam ultricies maecenas fusce dictumst, bibendum aenean justo amet tempus.'
          />
        </SwiperSlide>
        
    
        
     
     
      </Swiper>
    </>
  );
}

const Card =(props)=>{
    return (
      <span class=" flex flex-col gap-5 p-5 place-items-start backdrop-blur-lg border rounded-lg  border-white ">
      <div class=" flex flex-row place-items-center gap-5 " >
      <div className=" avatar  border-2 scale-150 border-lime-300">
	       <img className=' ' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
       </div>
       <p className=' text-xl text-white font-semibold '>{props.Name}</p>
      </div>
      <p class=" text-lg text-white font-semibold">
          {props.Texto}
      </p>
      
  </span>
    )

}

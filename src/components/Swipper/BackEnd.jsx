import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import {  SiAdonisjs, SiCloudflare, SiDocker, SiElixir,  SiInsomnia,  SiLaravel,  SiMongodb, SiMysql, SiNodedotjs, SiPhoenixframework, SiPhp, SiPostgresql, SiRuby, SiRubyonrails, SiSwagger,} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

export default function () {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        dir='rtl'
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
          <CardIcon Texto="PHP" Icon={<SiPhp/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Laravel" Icon={<SiLaravel/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Node" Icon={<SiNodedotjs/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Adonis" Icon={<SiAdonisjs/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Ruby" Icon={<SiRuby/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Rails" Icon={<SiRubyonrails/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Elixir" Icon={<SiElixir/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Phoenix" Icon={<SiPhoenixframework/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="MySQl" Icon={<SiMysql/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Postgres" Icon={<SiPostgresql/>} />   
        </SwiperSlide>
         <SwiperSlide>
          <CardIcon Texto="Mongo" Icon={<SiMongodb/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Docker" Icon={<SiDocker/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Insomnia" Icon={<SiInsomnia/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Swagger" Icon={<SiSwagger/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Cloudflare" Icon={<SiCloudflare/>} />   
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon Texto="Azure" Icon={<VscAzure />} />   
        </SwiperSlide>
      
       
     
       
        
        
        
     
     
      </Swiper>
    </>
  );
}


const CardIcon =(props)=>{
    return (
        <div className=' group  hover:bg-lime-300 flex flex-col gap-3 border border-lime-300 rounded-lg p-2 backdrop-blur-lg'>
            <span className='  flex justify-center text-5xl  text-lime-300 group-hover:text-black'>
              {props.Icon}
            </span>
            <p className=' text-2xl text-white  font-semibold text-center hover:text-black'>{props.Texto}</p>
        </div>
    )
}

import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import specialities01 from '../../public/img/specialities/specialities-01.png'
import specialities02 from '../../public/img/specialities/specialities-02.png'
import specialities03 from '../../public/img/specialities/specialities-03.png'
import specialities04 from '../../public/img/specialities/specialities-04.png'
import specialities05 from '../../public/img/specialities/specialities-05.png'
import Image from "next/image";



const ClinicAndSpecialities = () => {

  return (
    <div className=" mt-10 container mx-auto">
      <h1 className="text-xl md:text-3xl font-bold text-center">Clinic and Specialities</h1>
      <p className="md:w-3/4 mx-auto text-justify mt-3">
        Clinic and Specialties: Exceptional healthcare. Personalized care,
        comprehensive specialties. Primary care, cardiology, orthopedics,
        dermatology, neurology, and more. Skilled doctors, advanced facilities.
        Prioritizing patient comfort, satisfaction. State-of-the-art technology
        for accurate diagnoses, effective treatments. Your health, our priority.
      </p>
      <div className="my-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="  rounded-full shadow-xl">
              <div className=" w-64 h-64 flex flex-col items-center  justify-center">
              <Image className="" width={100} src={specialities01} alt="specialities"/>
              <p className="font-bold mt-3">Neurology</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" rounded-full shadow-xl">
              <div className=" w-64 h-64 flex flex-col items-center  justify-center">
              <Image width={100} src={specialities02} alt="specialities"/>
              <p className="font-bold mt-3">Urology</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="  rounded-full shadow-xl">
              <div className=" w-64 h-64 flex flex-col items-center  justify-center">
              <Image width={100} src={specialities03} alt="specialities"/>
              <p className="font-bold mt-3">Orthopedic</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="  rounded-full shadow-xl">
              <div className=" w-64 h-64 flex flex-col items-center  justify-center">
              <Image width={100} src={specialities04} alt="specialities"/>
              <p className="font-bold mt-3">Cardiologist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="  rounded-full shadow-xl">
              <div className=" w-64 h-64 flex flex-col items-center  justify-center">
              <Image width={100} src={specialities05} alt="specialities"/>
              <p className="font-bold mt-3">Dentist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="  rounded-full shadow-xl">
              <div className=" w-64 h-64 flex flex-col items-center  justify-center">
              <Image width={100} src={specialities01} alt="specialities"/>
              <p className="font-bold mt-3">Neurology</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClinicAndSpecialities;

// // PartnersSlider.js
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const PartnersSlider = ({ partners }) => (
//   <section className="mb-12">
//     <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">الجهات المعنية والشركاء</h2>
//     <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }}>
//       {partners.map((partner) => (
//         <SwiperSlide key={partner.id}>
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
//             <img src={partner.logoUrl} alt={partner.name} className="w-36 h-36 mb-4 rounded-md" />
//             <h3 className="text-xl font-bold text-jordanian-black mb-2">{partner.name}</h3>
//             <p className="text-gray-600 text-center">{partner.description}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>
// );

// export default PartnersSlider;





import React from 'react';

const logoUrls = [
    "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    // "https://www.svgrepo.com/show/330140/chevrolet.svg", 
    // "https://www.svgrepo.com/show/330787/kia.svg", 
    // "https://www.svgrepo.com/show/303349/ford-1-logo.svg", 
    // "https://www.svgrepo.com/show/303249/mercedes-benz-9-logo.svg", 
    // "https://www.svgrepo.com/show/342292/tesla.svg", 
];


const Logocar = () => {
    return (
        <section className='my-10' style={{ padding: '3rem 0', backgroundColor: 'white', overflow: 'hidden', textAlign: 'center' }}>
            <h2  className='text-4xl font-extrabold mb-8 text-center text-jordanian-red mb-20'>الجهات المعنيه والشركاء </h2>
            <div style={{ position: 'relative', width: '100%', height: '7rem' }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '2rem',
                    animation: 'scroll 20s linear infinite',
                }}>
                    {logoUrls.concat(logoUrls).map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Sponsor logo ${index + 1}`}
                            style={{
                                height: '8rem',
                                flexShrink: 0,
                                marginRight: '2rem',
                            }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Logocar;

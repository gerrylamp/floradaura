import React, { useState } from 'react';
import ReviewCard from './ui/ReviewCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// Define the shape of a review for clarity
interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}
const reviews: Review[] = [{
  id: 1,
  name: 'Sophia Anderson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5,
  text: 'The crystal ball I purchased is absolutely breathtaking. The detail of the 3D flowers inside is exquisite, and it catches the light in the most magical way. It s become the centerpiece of my living room : . ,: date March 15, 2023',
  date: 'March 15, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481009088_122113122404725423_2643392360388305687_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9TdWq5lJigNzuONc-lM4DqZXCTuZhGL-plcJO5mEYv80SP0F7OaE6Qn9nbxFGS9QFHfGhDFqe6l4Iz0E5Rwpi&_nc_ohc=dIz_H2PeFUUQ7kNvwEDrzgq&_nc_oc=AdmsoU0hQMU8X2KIbSx8-ACIokExfsc6qqJzCoMugoSuebBwHHXemCcbN7fHUiIwy50&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=pRKRaxzZiK_gRzAOOqbwAA&oh=00_AfZWOASr-eibdTeGMj6O3MMFegwhkZBO5YgdIZVFe_HmhA&oe=68E142C4'
}, {
  id: 2,
  name: 'James Bennett',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5,
  text: 'I ordered a custom bouquet for my wife s birthday and Flora d Aura exceeded all expectations. The arrangement was stunning and stayed fresh for an impressively long time. The attention to detail and artistry is unmatched.',
  date: 'April 2, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481011718_122113122242725423_1314802323099293266_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5W8LVNaCrnaTgyivIjw2SvxVzG-oPVfC_FXMb6g9V8C-Xkp1A-XqTD6DdOJ_syv0DjbXlF0uM24FhNTTtyv1C&_nc_ohc=T7bvWM4HRE8Q7kNvwFUQ10S&_nc_oc=AdlX5TUrpEKmApGQ-UpdW9Ge-jR8LnuUZ8fQvgd2If_Qb5mxBP69VPQYNDwUCcYuU6M&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=9SYipU5nJGuoeIdn8Bz-oQ&oh=00_Afb5lUO8Q-aDnXTjn6K5oUOnRodCNHs9wx1dTYiavmDLNw&oe=68E169EC'
}, {
  id: 3,
  name: 'Elena Rodriguez',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  rating: 4,
  text: 'The Celestial Dreams Crystal is even more beautiful in person than in the photos. It s clearly handcrafted with care and precision : .The only reason for 4 stars instead of 5 is that shipping took longer than expected : . ,: date May 18, 2023',
  date: 'May 18, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480916330_122113122140725423_5840279304099997981_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEkkytdJaMBDumraRKIoReAbm73NorcAxhubvc2itwDGOhx1v0K3Fv5aBiZfr8FXBLxgtA2HeQVDenhspBC3tEU&_nc_ohc=kCTOoM7fGvgQ7kNvwFDI3RN&_nc_oc=AdmTsDHqisHpFEUEI7k2_Z3BtM09VlHZixjSciRpVy3DmahWeOU1-n-Eh-VJT23-mJM&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=IAewDMVFiJ7qpOTVZjlJLw&oh=00_AfY5m6RUeSVaWH8p3HEuvzyFvSCHvl-wnckfo5kbgmryvw&oe=68E140F6'
}, {
  id: 4,
  name: 'Michael Thompson',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  rating: 5,
  text: 'I ve purchased from several high - end florists but Flora d Aura is in a league of their own. The Spring Meadow Bouquet I ordered for our anniversary was a work of art. My wife was speechless when she saw it.',
  date: 'June 10, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481230610_122113122050725423_3226290448629358868_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXUQeC2-0v_ekOSm9JrCcVS2ENTtA_JkJLYQ1O0D8mQuH2fA3lrZ1UKoIGLdYtenjpyjhl8BO1vvKis1rGego4&_nc_ohc=MXt-gMZg0bAQ7kNvwHkCNOk&_nc_oc=AdnvYEUQSf5cJ-YMCQmzWjWLi1hsRoxXpPURhzxguriycn43sVo8tLzIeYPPrXMtD54&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=My3Qh6qLyFmY9CboDeeWTQ&oh=00_AfYtGV3BScT1RhdEZb4t3GVYQL5FEMobQk-YZXJsbvbk-w&oe=68E15AE1'
}, 
{
  id: 5,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480789563_122113121924725423_4880404285915024485_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFmuJd7oGCtv8e4t2qLi0wwHBcDj0KZgpMcFwOPQpmCk6ZFIP6KURmXEL1D38yu6Jv4C-zeAgYenjuRI1Ekzvo3&_nc_ohc=vB9MtORbuVUQ7kNvwGrhdbb&_nc_oc=AdnOABEqz38R4xHKv854Uhaxp0-CTkFDnIihN8h9cyWpFdI1dSR5A_J9L4Z_pNLFL9M&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=gmcI-kdxtAiRnewtq1t5-Q&oh=00_AfarU7KnCKtxxz-KfxBEGDAE2-th7rI33ZM3hhRP-bzPUQ&oe=68E1501B'
},
{
  id: 6,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480409145_122113121324725423_8516299493207586252_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGlnTgN_FxjFwWjldxPBSjEMzVwHn-i8YkzNXAef6LxieYSgpf97VlnhXc3GG8R1vhMDt6AvHYu6ujupiQFWgqJ&_nc_ohc=vYZ7pZOouHAQ7kNvwFp7n33&_nc_oc=AdlWDSybC5YMhKhUGu2fV9gXXKzmk8Qy0mtVVgwZc_seUCkSe383u9vgnhZjS_kWmB0&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=HPc9Mjc9Rb2rlRHrCE4-Nw&oh=00_AfaROZeHQyKI4liFJfctUxmnNIE1V8kpmcx8d4BGlu5t_Q&oe=68E13C8E'
},
{
  id: 7,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481270946_122113121270725423_6208920364682180241_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHx2wbGfB1s0XR71zX-agIE906Ifo8-S4T3Toh-jz5LhKElxdl5OJ8Uq5HoHy2iE9MOF4HXTklQlIgk3tuxrY4k&_nc_ohc=U6o8U59pjqwQ7kNvwG_YOPy&_nc_oc=Admi744QZpYkPkgQXyF0Sa8bPZYxIjjRpS1tK5d31D_RXto2Kuo2F-X04EQGqATpj-8&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=uVSv40s0ixvThTm2zb_J-g&oh=00_AfYoJry-8RxeJOGDPxX_cW5CfdzBD6wwVTAJn6vTl1GWOg&oe=68E15735'
},
{
  id: 8,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480735516_122113121174725423_6874037590994294375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjRZ6rGNEvYSEBaJgHYpyeSZOZ0LA5OfhJk5nQsDk5-GrVaczgjZO8IjrjJuGGZYah7qcpXhqeo5jFw8vWHLdg&_nc_ohc=GWFTmb-cYoIQ7kNvwG933RC&_nc_oc=AdnDwEfukGYoG6_aQY1ovyw68fyJV1tO5b8IzPkJiPbJhLeMpB_jZZouU6YndfKgssA&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=6zz5e7dcNUaJidww7BCghA&oh=00_AfZUv7GNOdRx3gGfn_3wpu-SdVtsdyz4bjna9i9sKQiIYQ&oe=68E154AA'
},
{
  id: 9,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480679580_122113121060725423_5877341436835194892_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJJD8eIyi4O23gxA-rqbuP-dCoYmyjI2_50KhibKMjb7UOGKGCRu0Em7pps_MGqHFLpVAcPxBAIU70jfghSq3a&_nc_ohc=ElNl0Iwf9rwQ7kNvwG8Lct3&_nc_oc=AdkfH9AEj6KI0aT9T2fXd1o3KpQxtpdr9p2U4lp9ZZHEG4hw7Ldwr7vI6tSUe-vMWT4&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=p274BZ7dV9wnbHBCflTRtg&oh=00_AfYItZD52p8QX9b2e9mHhX4TEqKHqbNoB0ag4fceHJAX_g&oe=68E14232'
},
{
  id: 10,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480559562_122113120874725423_7950315486618831569_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGzFFfx3Hpz6FvDSbtMmH_Jp_0kPt-UQqan_SQ-35RCpr3QzRKt-f2xRe34HMXSFk8ZxzyjkN8p0gpHC3ZeYjjw&_nc_ohc=ZSItl79WMxcQ7kNvwHH7dTN&_nc_oc=AdlUlPX-oQCsAlDVPtkmcK0mhoD96ROvg21eSRBcyDj5b4EXe5tuc7VEsHcel3zpJQ4&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=tsHepTk0Xcs_92Y3_4TS_A&oh=00_AfafJ_nKL0AkMvEeRDwnzcMcohlzlhKHZDes8r8gWZwZuQ&oe=68E1705E'
},
{
  id: 11,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/480981902_122113120790725423_5596521541714971211_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE567f5zymBget9Ifp2nOyODMevwjcPkfIMx6_CNw-R8mOXxac2BUOmp2keJamSNDmxyY2o1Gwk8XZByqo_MOxG&_nc_ohc=Ebe_eNwcVMEQ7kNvwFsAB8e&_nc_oc=AdkwsRY_aU_yxx4_e3vtoKKmuB4CC-mEbrSeXF712XhInTh34nMHoImY-AdHHv78Vm8&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=g3hZZgLFkav5iTLkvamiYQ&oh=00_Afbrm853PzcAJ4WJ3kcSYllqNagciGwBrvFOIxnlu2_6Yw&oe=68E1703B'
},
{
  id: 12,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481106591_122113123280725423_4387899129028163973_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFUB6C8L3L3JvWSYuTwiy9-eTJxtKYkbTV5MnG0piRtNfk5MH_UsZVDe7aPXW_2VJIzX04gLgSfR5GwQ_TkLa7S&_nc_ohc=CmyijwlhZTgQ7kNvwH1ubcs&_nc_oc=AdkXI7v01GXPRNuS5OcQhgdXuQPDrtWFscmCjKJ1_mAiXoYkM28--j11Dk27SiLzRRM&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=9w_JS7fnRsFE5yjk0G8voQ&oh=00_Afad1K_fPMwB5Ko-T52HKLKlVKLHVasA4GE9XtWt28V6xw&oe=68E1507A'
},
{
  id: 13,
  name: 'Olivia Chen',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  rating: 5,
  text: 'The Mystic Garden Crystal is pure magic. It s become my daily meditation focus, and the detail of the tiny garden inside is incredible. Every time I look at it, I notice something new. Worth every penny.',
  date: 'July 24, 2023',
  image: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481250579_122113077572725423_1598107463570119791_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdbUSSfWy0cn2k29LPPKDJggoIoYi-9MiCCgihiL70yOEe7Lngofy5_GJDQtwQiW4BpCyEsUlmWTNeCphI9jhN&_nc_ohc=hvMUuY2JvIQQ7kNvwH4O5_8&_nc_oc=AdnIBXkm-JOEwjw27UDMmbX35DWraL-FOJIZp72lTdFzghTGTNIqh4KUzc89he_sJac&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=GQoy_W6G47NHATmkHpDBcQ&oh=00_AfbQGwAyiWr9XSppiBZo7Ynma-0Gs-ENDAXKV1666nxWHQ&oe=68E15EF1'
},
];
const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex - reviewsPerPage < 0 ? Math.max(0, reviews.length - reviewsPerPage) : prevIndex - reviewsPerPage);
  };
  const currentPageIndex = Math.floor(currentIndex / reviewsPerPage);
  return <section id='reviews' className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f8d7da]/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d1e7dd]/10 rounded-full -mr-32 -mb-32 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#343a40] mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-[#5a6268] max-w-2xl mx-auto">
            Discover what our clients say about their Flora d'Aura experience
          </p>
        </div>
        <div className="relative">
          {/* Reviews slider */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentIndex * (100 / reviewsPerPage)}%)`
          }}>
              {reviews.map(review => <div key={review.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <ReviewCard review={review} />
                </div>)}
            </div>
          </div>
          {/* Navigation arrows */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#343a40] hover:text-[#d4af37] transition-colors z-10" aria-label="Previous reviews">
            <ChevronLeftIcon size={24} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#343a40] hover:text-[#d4af37] transition-colors z-10" aria-label="Next reviews">
            <ChevronRightIcon size={24} />
          </button>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
          length: totalPages
        }).map((_, index) => <button key={index} onClick={() => setCurrentIndex(index * reviewsPerPage)} className={`w-2.5 h-2.5 rounded-full transition-colors ${currentPageIndex === index ? 'bg-[#d4af37]' : 'bg-[#d1e7dd]'}`} aria-label={`Go to page ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default ReviewsSection;
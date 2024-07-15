// import images
import Hero_person from "./assets/images/Hero/person.png";
import Workers from "./assets/images/Hero/workers.png"

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import baret from "./assets/images/Skills/baret.png";
import socker from "./assets/images/Skills/socker.png";
import bird from "./assets/images/Skills/bird.png";
import halisaha from "./assets/images/Skills/halisaha.png";
import sera from "./assets/images/Skills/sera.png";
import star from "./assets/images/Skills/star.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import time from "./assets/images/Services/time.png";
import shield from "./assets/images/Services/shield.png";
import meter from "./assets/images/Services/meter.png";
import tick from "./assets/images/Services/tick.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";
import worker2 from "./assets/images/projects/worker2.png";
import proje1 from "./assets/images/projects/proje1.png";
import proje2 from "./assets/images/projects/proje2.png";
import proje3 from "./assets/images/projects/proje3.png";
import proje4 from "./assets/images/projects/proje4.png";
import proje5 from "./assets/images/projects/proje5.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Sur Güvenlik Fileleri",
    firstName: "SUR",
    LastName: "GÜVENLİK FİLELERİ",
    btnText: "İletişim",
    image: Workers,
    hero_content: [
      {
        count: "8+",
        text: "Yıl Deneyim",
      },
      {
        count: "500+",
        text: "Proje",
      },
    ],
  },
  skills: {
    title: "Ürettiğimiz File Grupları",
    subtitle: "-",
    skills_content: [
      {
        name: "Güvenlik Filesi",
        para: "Türkiye’nin lider güvenlik filesi üreticisi Sur güvencesiyle düşmeye karşı en dayanıklı ve en uygun fiyatlı güvenlik ağı satın alın.",
        logo: baret,
      },
      {
        name: "Spor Filesi",
        para: "Türkiye’nin en büyük spor filesi üreticilerinden biri olan Sur File’nin 8 yıllık tecrübesiyle imal edilen takım sporları ve bireysel sporların filelerini inceleyin!",
        logo: socker,
      },
      {
        name: "Kuş Filesi",
        para: "Uygun fiyatlı Sur kuş önleme filesi ile başta fabrikalar olmak üzere bir çok alanda kuşların yuva yapmasını veya kuşların girmesini engelleyin!",
        logo: bird,
      },
      {
        name: "Halı Saha Filesi",
        para: "Türkiye’nin lider halı saha filesi üreticisi Sur'un 8 yıllık tecrübesiyle uzun ömürlü ve uygun fiyatlı halı saha filesi satın alın!",
        logo: halisaha,
      },
      {
        name: "Tarım Filesi",
        para: "Tarım amaçlı kullanılan uygun fiyatlı tarım filesi satın alın! Avantajlı fiyatlar ve teknik destek Sur File’de.",
        logo: sera,
      },
      {
        name: "Özel Üretim Fileler",
        para: "Sur'un siparişe özel olarak ürettiği; lastik file, araç içi file ve koreografi filesi ve oyun parkı filelerini inceleyin!",
        logo: star,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Neden Sur'un Ürettiği Fileleri Tercih Etmelisiniz?",
    subtitle: "-",
    service_content: [
      {
        title: "Uzun Ömürlü",
        para: "Üretimimiz olan fileler hammaddesi ve üretim şekli sayesinde uzun yıllar sorunsuz kullanabileceğiniz ağlardır",
        logo: time,
      },
      {
        title: "Üst Düzey Mukavemetli",
        para: "%100 Polyamid ipten ürettiğimiz fileler ortalama 600 kg taşıma kapasitesine sahiptir",
        logo: shield,
      },
      {
        title: "Size Özel Üretim",
        para: "Kataloğumuzdaki her file, sizin verdiğiniz ölçüde ve belirttiğiniz renkte size özel olarak imal edilmektedir",
        logo: meter,
      },
      {
        title: "Düşmeye Karşı Test Edildi",
        para: "İş güvenlik filesi gibi düşme koruma ağlarımız insan ve eşya düşmesine karşı test edilmiştir",
        logo: tick,
      },
    ],
  },
  Projects: {
    title: "Projeler",
    subtitle: "-",
    image: worker2,
    project_content: [
      {
        title: "1",
        image: proje1,
      },
      {
        title: "2",
        image: proje2,
      },
      {
        title: "3",
        image: proje3,
      },
      {
        title: "4",
        image: proje4,
      },
      {
        title: "5",
        image: proje5,
      },
    ],
  },
  Testimonials: {
    title: "Müşteri Yorumları",
    subtitle: "-",
    testimonials_content: [
      {
        review:
          "“Güvenlik konusunda daha iyi bir yer bulmak zor”",
        img: avatar1,
        name: "Ahmet",
      },
      {
        review:
          "“Kedilerim fileler sayesinde balkonda rahatça nefes alabiliyor. Güvenlik konusunda hiçbir şüpem yok”",
        img: avatar2,
        name: "Burak",
      },
      {
        review:
          "“Apartmanımız için merdiven filesini Sur'da yaptırdık. Fiyatı ve kısa zamanda kurulumuyla herkese tavsiye ederim”",
        img: avatar3,
        name: "Mert",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "İletişim",
    subtitle: "-",
    social_media: [
      {
        text: "surinsaatfileleri@gmail.com",
        icon: GrMail,
        link: "mailto:surinsaatfileleri@gmail.com",
      },
      {
        text: "+90 552 744 76 47",
        icon: MdCall,
        link: "https://wa.me/05527447647",
      },
      {
        text: "surfileleri",
        icon: BsInstagram,
        link: "https://www.instagram.com/surfileleri/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};

import { addDoc, collection, doc, getDoc, query } from 'firebase/firestore';
import { db } from '../data/dbConfig';

export const uploadPortfolio = () => {
  const newPortfolioEn = {
    nav: {
      portfolio: 'Portfolio',
      contact: "Let's Talk!",
      en: 'en',
      es: 'es',
    },
    welcome: {
      message: "Hello!, I'm Fernanda Jensen, FullStack Developer",
      aboutme:
        'I first discovered my passion for programming in 2001 when I learned PHP and had loads of fun creating websites and animations as a hobby. Despite not pursuing it as a career at the time, I continued to tinker with coding and design in my spare time. After completing my degree in International Relations and Business Analysis, I began a successful career in the Oil & Gas industry as a Controller and Project Manager. However, in 2019, the need for smarter tools in my team led me to study Visual Basic for Applications, reigniting my passion for programming and problem-solving. I knew then that I wanted to make a career change and in 2022, I took the leap and enrolled in an intensive 12-month programming bootcamp to learn the latest technologies and skills needed to become a Junior front-end developer. Now I am excited to be back in the field and ready to tackle new challenges.',
    },
    projects: [
      {
        projectName: 'VeggieBox',
        description:
          "Website for a Meal Kit Delivery Subscription Service. We deliver to your doorstep everything you need to get cookin'!",
        gifUrl:
          'https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif',
        imgUrl:
          'https://res.cloudinary.com/ferjen/image/upload/v1674532019/portfolio/projects/img/veggieBox-website_m2wncu.jpg',
        repo: 'https://github.com/ferjencoder/veggieBox',
        tech: 'React, NodeJs, Vite, Sass, React-Bootstrap, JavaScript, TsParticles',
        design: '',
        mockup: '',
      },
      {
        projectName: 'VeggieBox',
        description:
          "Website for a Meal Kit Delivery Subscription Service. We deliver to your doorstep everything you need to get cookin'!",
        gifUrl:
          'https://res.cloudinary.com/ferjen/image/upload/v1674531275/portfolio/projects/gif/VeggieBox_hk61er.gif',
        imgUrl:
          'https://res.cloudinary.com/ferjen/image/upload/v1674532019/portfolio/projects/img/veggieBox-website_m2wncu.jpg',
        repo: 'https://github.com/ferjencoder/veggieBox',
        tech: 'React, NodeJs, Vite, Sass, React-Bootstrap, JavaScript, TsParticles',
        design: '',
        mockup: '',
      },
    ],
    resume: {
      pdf: 'https://res.cloudinary.com/ferjen/image/upload/v1674602916/portfolio/cv/CV-Fernanda_Jensen-eng_xpof7e.pdf',
      web: '',
    },
    certificates: {
      webdevUrl:
        'https://www.coderhouse.com/certificados/6292a28d8b24b7002132f3ca',
      jsUrl: 'https://www.coderhouse.com/certificados/62e010f257fcc7001a829ee1',
      reactUrl:
        'https://www.coderhouse.com/certificados/63afb725db7d5f000eb14bf2',
      vbaUrl: 'https://www.udemy.com/certificate/UC-ZBXMOWE7/',
      backendUrl: 'coming soon...',
    },
    contact: {
      github: 'https://github.com/ferjencoder',
      linkedin: 'https://www.linkedin.com/in/ferjen/',
      email: 'contacto@ferjen.dev',
      disccord: '',
    },
  };

  console.log(db);

  const enColRef = collection(db, 'portfolio', 'website', 'spanish');
  addDoc(enColRef, newPortfolioEn)
    .then(({ id }) => console.log(id))
    .catch((err) => console.log(err));

  console.log({ enColRef });
};

export const navBarLinksFetch = async (language = 'en') => {
  let link;

  const docRef = doc(
    db,
    'portfolio',
    'website',
    'english',
    'kTuKQWH20ahGEAbAKyLQ'
  );
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
    };
  } else {
    console.log('No such document!');
  }
  return eng;
};

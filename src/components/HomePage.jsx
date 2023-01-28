import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { LanguageContext } from '../context';
import { WobblyText } from './animations';
import { BsEmojiSmile } from 'react-icons/bs';

export const HomePage = () => {
  const { datos } = useContext(LanguageContext);

  let newMessage1 = [];

  datos.welcome.message1
    .toUpperCase()
    .split('')
    .map((char) => {
      newMessage1.push(char);
    });
  let newMessage2 = [];

  datos.welcome.message2
    .toUpperCase()
    .split('')
    .map((char) => {
      newMessage2.push(char);
    });
  let newMessage3 = [];

  datos.welcome.message3
    .toUpperCase()
    .split('')
    .map((char) => {
      newMessage3.push(char);
    });

  //TODO make a component for main animation
  return (
    <Container
      className="main d-flex flex-column p-0 justify-content-center"
      fluid>
      <section>
        <div className="ps-5 d-flex flex-row">
          {newMessage1.map((char, index) => {
            if (char === ' ') {
              let classNameNew = '  text__wobbly--outline hero__text--xxl pe-4';

              return (
                <WobblyText key={index} char={char} className={classNameNew} />
              );
            } else {
              return (
                <WobblyText
                  key={index}
                  char={char}
                  className=" text__wobbly--outline hero__text--xxl"
                />
              );
            }
          })}
        </div>
        <div className="ps-5 pb-2 d-flex flex-row bg-line">
          {newMessage2.map((char, index) => {
            if (char === ' ') {
              let classNameNew =
                ' text__wobbly--outline hero__text--xxl blend--difference pe-4';

              return (
                <WobblyText key={index} char={char} className={classNameNew} />
              );
            } else {
              return (
                <WobblyText
                  key={index}
                  char={char}
                  className="text__wobbly--outline hero__text--xxl blend--difference"
                />
              );
            }
          })}
          <BsEmojiSmile className="text__wobbly--outline hero__text--xxl ps-4 h1 text-warning" />
        </div>
        <div className="ps-5 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row">
            {newMessage3.map((char, index) => {
              if (char === ' ') {
                let classNameNew = 'text__wobbly--outline hero__text--xxl pe-4';

                return (
                  <WobblyText
                    key={index}
                    char={char}
                    className={classNameNew}
                  />
                );
              } else {
                return (
                  <WobblyText
                    key={index}
                    char={char}
                    className=" text__wobbly--outline hero__text--xxl"
                  />
                );
              }
            })}
          </div>
          <a href="" className="pe-5">
            <div className="position-relative">
              <img
                src="https://res.cloudinary.com/ferjen/image/upload/v1674886875/portfolio/arrow/arrow_egow1c.svg"
                alt="arrow pointing down"
                width={'350px'}
              />
              <p className="position-absolute top-50 start-50 translate-middle text__wobbly--outline hero__text--xxl h4 blend--difference pb-4 m-0">
                SCROLL
              </p>
            </div>
          </a>
        </div>
      </section>
    </Container>
  );
};

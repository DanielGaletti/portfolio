import * as Styled from './styles.js';

const Abstract = () => (
    <>
        <Styled.Lead>
            Computer Engineering graduate from UTFPR with 4+ years of experience in software engineering,
            technology consulting, and front-end development. Currently Software Engineer at{' '}
            <a href="https://wellhub.com" target="_blank" rel="noreferrer">
                Wellhub (formerly Gympass)
            </a>
            , working with ReactJS, Next.js, and TypeScript to build intelligent chatbots and scalable
            systems. MSc candidate in Computer Science at UFSCar, researching Visual Language Models (VLMs)
            and AI applied to computer vision. Combines a solid foundation in React, React Native, and the
            JavaScript ecosystem with advanced knowledge in Machine Learning, Deep Learning, and Data Science.
        </Styled.Lead>
        <Styled.Download
            href="https://raw.githubusercontent.com/DanielGaletti/portfolio/master/public/vitae.pdf"
            download
        >
            Download résumé (PDF)
        </Styled.Download>
    </>
);

export default Abstract;

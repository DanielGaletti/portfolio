import * as Styled from './styles.js';

const Abstract = () => (
    <>
        <Styled.Lead>
            Software Engineer with 4+ years of experience, MSc student in Computer Science
            at UFSCar researching Visual Language Models (VLMs) applied to image classification
            with multimodal inputs. Passionate about building AI-powered systems, with hands-on
            knowledge in PyTorch, Computer Vision, and applied Machine Learning. At{' '}
            <a href="https://wellhub.com" target="_blank" rel="noreferrer">
                Wellhub (formerly Gympass)
            </a>
            , ships intelligent chatbots and scalable systems serving millions of users, bridging
            solid front-end expertise with deep interest in intelligent, data-driven products.
        </Styled.Lead>
        <Styled.Download
            href="https://raw.githubusercontent.com/DanielGaletti/portfolio/master/public/vitae.pdf"
            download
        >
            Download resume (PDF)
        </Styled.Download>
    </>
);

export default Abstract;
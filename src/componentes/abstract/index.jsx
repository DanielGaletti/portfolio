import * as Styled from "./styles.js";

const Abstract = () => {
    return (
        <>
            <h1> Abstract </h1>
            <p>
                I am a Computer Engineer currently pursuing a Master’s degree specializing in Computer Vision, particularly in Vision Language Models (VLM) and machine learning from Federal University of São Carlos (UFSCar). <br />With a strong foundation from the Federal Technological University of Paraná, I have experience in web development and am skilled in technologies like React, TypeScript, and JavaScript. My professional journey includes roles at Via Consulting and Gympass, where I focus on enhancing user experiences through efficient code and design systems. I am eager to connect with students and collaborators interested in research opportunities in computer vision and AI. Feel free to reach out!
            </p>
            <Styled.Download href="https://github.com/DanielGaletti/portfolio/blob/master/public/vitae.pdf" download>
                    Download my Resumé
            </Styled.Download>
        </>
    )
};

export default Abstract;
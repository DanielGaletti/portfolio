import Banner from '../banner/index.jsx';
import * as Styled from "./styles.js";

const Experience = () => {
    return (
        <>
            <Styled.ExperienceTitle> Experience </Styled.ExperienceTitle>
            <Banner>
                <h2> Wellhub Company, 2022 - Present </h2>
                <p> I have been working as a Software Developer at Wellhub (Old gympass) Company since 2022. <br />
                    I am responsible for developing the service channels page, as well as creating and maintaining
                    the help and chatbot pages, which receive around 10,000 daily visits.
                    <br /> One of my key achievements was the creation of the new help center and integration with
                    external systems, utilizing a Server-Side Rendering architecture with accessibility features implemented.
                    <br /> <br />Technologies used: NextJS, TypeScript, Datadog, Snowplow, Segment, ReactJS. </p>
            </Banner>
            <Banner>
                <h2> Via Consulting Company, 2020 - 2022 </h2>
                <p> I worked as a software consultant from 2020 to 2022. 
                <br /> I was responsible for configuring software environments and developing applications using AngularJS, 
                primarily focused on CRM systems such as Zendesk. 
                <br /> <br />Technologies used: Javascript, AngularJS, Handlebars, Zendesk, Salfesforce </p>
            </Banner>
            <Banner>
                <h2> 2D Verse Junior Company, 2017-2018 </h2>
                <p> I worked as a Junior Developer at 2D Verse student-run company. 
                <br />I was responsible for developing games using Unity and all documentation
                <br /> <br />Technologies used: C#, Unity, Google Docs</p>
            </Banner>
        </>
    )
};

export default Experience;
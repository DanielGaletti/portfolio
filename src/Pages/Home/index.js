import React from 'react';
import Header from '../../componentes/header';
import Section from '../../componentes/section';
import Abstract from '../../componentes/abstract';
import Skills from '../../componentes/skills';
import Experience from '../../componentes/experience';
import Education from '../../componentes/education';
import Research from '../../componentes/research';
import Certifications from '../../componentes/certifications';
import Volunteer from '../../componentes/volunteer';
import Footer from '../../componentes/footer';
import * as Styled from './styles.js';

const Home = () => {
    return (
        <>
            <Styled.GlobalStyles />
            <Styled.Container>
                <Header />
                <Section id="summary" title="Professional Summary">
                    <Abstract />
                </Section>
                <Section id="skills" title="Technical Skills">
                    <Skills />
                </Section>
                <Section id="experience" title="Professional Experience">
                    <Experience />
                </Section>
                <Section id="education" title="Education">
                    <Education />
                </Section>
                <Section id="research" title="AI Research & Projects">
                    <Research />
                </Section>
                <Section id="certs" title="Certifications & Languages">
                    <Certifications />
                </Section>
                <Section id="volunteer" title="Volunteer Activities">
                    <Volunteer />
                </Section>
                <Footer />
            </Styled.Container>
        </>
    );
};

export default Home;

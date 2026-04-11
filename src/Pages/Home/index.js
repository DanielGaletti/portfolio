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
import * as Styled from './styles.js';

const anchors = [
    { href: '#summary', label: 'Summary' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#research', label: 'Research' },
    { href: '#certs', label: 'Certs' },
    { href: '#volunteer', label: 'Volunteer' },
];

const Home = () => (
    <>
        <Styled.HeroWrap>
            <Styled.HeroGlow aria-hidden="true" />
            <Header />
        </Styled.HeroWrap>
        <Styled.PortfolioNav aria-label="Portfolio sections">
            {anchors.map(({ href, label }) => (
                <Styled.Anchor key={href} href={href}>
                    {label}
                </Styled.Anchor>
            ))}
        </Styled.PortfolioNav>
        <Section
            id="summary"
            title="Professional summary"
            subtitle="Engineering, product-facing systems, and graduate research in vision & AI."
        >
            <Abstract />
        </Section>
        <Section
            id="skills"
            title="Technical skills"
            subtitle="Software engineering with React/Next, foundations in ML, and AI engineering, including MLOps, RAG, and production ML."
        >
            <Skills />
        </Section>
        <Section id="experience" title="Professional experience" subtitle="Roles where I shipped and scaled software.">
            <Experience />
        </Section>
        <Section id="education" title="Education" subtitle="Degrees and focused study paths.">
            <Education />
        </Section>
        <Section id="research" title="AI research & projects" subtitle="Research threads and applied coursework.">
            <Research />
        </Section>
        <Section id="certs" title="Certifications & languages" subtitle="Credentials and how I communicate.">
            <Certifications />
        </Section>
        <Section id="volunteer" title="Volunteer activities" subtitle="Community and accessibility work.">
            <Volunteer />
        </Section>
    </>
);

export default Home;

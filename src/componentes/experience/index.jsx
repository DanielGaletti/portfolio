import * as Styled from './styles';

const Experience = () => (
    <>
        <Styled.Job>
            <Styled.JobHeader>
                <Styled.JobLine>
                    <Styled.JobTitle>Software Engineer</Styled.JobTitle>
                    <Styled.Sep>|</Styled.Sep>
                    <Styled.Company>
                        <a href="https://wellhub.com" target="_blank" rel="noreferrer">
                            Wellhub (formerly Gympass)
                        </a>
                    </Styled.Company>
                </Styled.JobLine>
                <Styled.Dates>Nov 2022 – Present</Styled.Dates>
            </Styled.JobHeader>
            <Styled.List>
                <li>
                    Development of intelligent chatbots and help center systems using ReactJS, Next.js, and
                    TypeScript, serving millions of users.
                </li>
                <li>
                    Active participation in architecture decisions and technical leadership of the chatbot
                    library, integrating REST APIs and accessibility standards.
                </li>
                <li>
                    Implementation of automated testing (unit and E2E with Jest and Cypress) in an agile
                    environment.
                </li>
                <li>Creation of CI/CD pipelines with GitHub Actions for deploy automation.</li>
                <li>Development of libraries for data monitoring and analytics of user interactions.</li>
                <li>Integrations with external APIs and creation of reusable wrappers.</li>
            </Styled.List>
        </Styled.Job>

        <Styled.Job>
            <Styled.JobHeader>
                <Styled.JobLine>
                    <Styled.JobTitle>Technology Consultant</Styled.JobTitle>
                    <Styled.Sep>|</Styled.Sep>
                    <Styled.Company>Via Consulting</Styled.Company>
                </Styled.JobLine>
                <Styled.Dates>Sep 2021 – Oct 2022</Styled.Dates>
            </Styled.JobHeader>
            <Styled.List>
                <li>Development of web applications in AngularJS for large enterprise clients.</li>
                <li>Administration of CRM systems and process automation for multiple companies.</li>
                <li>Creation of complete help centers for mid-sized companies.</li>
                <li>Implementation of Web Accessibility standards (WCAG) in UI components.</li>
                <li>Analysis and investigation of metrics and data to support decision-making.</li>
            </Styled.List>
        </Styled.Job>
    </>
);

export default Experience;

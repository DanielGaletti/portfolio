import * as Styled from './styles';

const Education = () => (
    <>
        <Styled.Entry>
            <Styled.Degree>MSc in Computer Science</Styled.Degree>
            <Styled.Meta>
                <Styled.Org>Federal University of São Carlos (UFSCar)</Styled.Org>
                {' · '}
                2024 – 2026
            </Styled.Meta>
            <Styled.Body>
                Area: Artificial Intelligence · Focus: Visual Language Models, Computer Vision, Applied AI.
            </Styled.Body>
        </Styled.Entry>

        <Styled.Entry>
            <Styled.Degree>Data Science</Styled.Degree>
            <Styled.Meta>
                <Styled.Org>Iowa State University</Styled.Org>
                {' · '}
                2026
            </Styled.Meta>
            <Styled.Body>
                Data Science in R and Python with focus on practical applications, data analysis, and neural
                networks.
            </Styled.Body>
        </Styled.Entry>

        <Styled.Entry>
            <Styled.Degree>BSc in Computer Engineering</Styled.Degree>
            <Styled.Meta>
                <Styled.Org>Federal University of Technology – Paraná (UTFPR)</Styled.Org>
                {' · '}
                2016 – 2022
            </Styled.Meta>
            <Styled.Body>
                Extension projects in web accessibility. Full-stack development, cloud, project and team
                management.
            </Styled.Body>
        </Styled.Entry>

        <Styled.Entry>
            <Styled.Degree>BSc in Theology</Styled.Degree>
            <Styled.Meta>
                <Styled.Org>South American Theological Seminary (FTSA)</Styled.Org>
                {' · '}
                2019 – 2022
            </Styled.Meta>
            <Styled.Body>Emphasis on leadership and ethics.</Styled.Body>
        </Styled.Entry>
    </>
);

export default Education;

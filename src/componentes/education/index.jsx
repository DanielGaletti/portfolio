import * as Styled from "./styles.js";
import React, { useState } from 'react';

const Education = () => {
        const [showDetails, setShowDetails] = useState({});
    
        const toggleDetails = (index) => {
            setShowDetails((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        };
    
        const educationData = [
            {
                institution: 'Universidade Federal de São Carlos',
                course: 'Master of Science in Computer Science',
                year: '2026',
                details: 'Research in Artificial Intelligence Area, focused in VLM (Visual Language Model), Vision Computer and Learning Machine.',                
            },
            {
                institution: 'Universidade Tecnológica Federal do Paraná',
                course: 'Computer Engineering',
                year: '2022',
                details: `Graduated in Computer Engineering, focused in Software engineering. During college, I developed a lot of works in web project and application, like
                a social project. Also, I was the leader of College Chess Team and I participated in several clubs during university, like a extension project in augmented reality and
                Acessibility Web. \n My final thesis was about a Acessibility Web, where I worked in a open-source code called Reactstrap, to implement some acessibility there.`,                
            },
            {
                institution: 'Colégio Interação de Marília',
                course: 'High School',
                year: '2015',
                details: 'A simple High School',
            },
        ];

    return (
        <Styled.EducationContainer>
            <h1> Education</h1>
            <Styled.Table>
                <thead>
                    <tr>
                        <Styled.TableHeader>Institution</Styled.TableHeader>
                        <Styled.TableHeader>Course</Styled.TableHeader>
                        <Styled.TableHeader>Conclusion Year</Styled.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {educationData.map((edu, index) => (
                        <React.Fragment key={index}>
                            <Styled.TableRow onClick={() => toggleDetails(index)}>
                                <Styled.TableData>{edu.institution}</Styled.TableData>
                                <Styled.TableData>{edu.course}</Styled.TableData>
                                <Styled.TableData>{edu.year}</Styled.TableData>
                            </Styled.TableRow>
                            <Styled.DetailsRow show={showDetails[index]}>
                                <Styled.TableData colSpan="3">{edu.details}</Styled.TableData>
                            </Styled.DetailsRow>
                        </React.Fragment>
                    ))}
                </tbody>
            </Styled.Table>
        </Styled.EducationContainer>
    );
}

export default Education;
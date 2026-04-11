import * as Styled from './styles';

const certs = [
    'Zendesk Administrator',
    "O'Reilly - ReactJS Developer",
    'IBM - Machine Learning Foundations',
];

const Certifications = () => (
    <Styled.TwoCol>
        <div>
            <Styled.ColTitle>Certifications</Styled.ColTitle>
            <Styled.List>
                {certs.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </Styled.List>
        </div>
        <div>
            <Styled.ColTitle>Languages</Styled.ColTitle>
            <Styled.LangLine>
                <Styled.Lang>Portuguese:</Styled.Lang> Native
            </Styled.LangLine>
            <Styled.LangLine>
                <Styled.Lang>English:</Styled.Lang> Advanced (papers, technical courses, conversation)
            </Styled.LangLine>
            <Styled.LangLine>
                <Styled.Lang>Mandarin Chinese:</Styled.Lang> Basic (currently learning)
            </Styled.LangLine>
        </div>
    </Styled.TwoCol>
);

export default Certifications;

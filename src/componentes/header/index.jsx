import * as Styled from './styles.js';

const Header = () => (
    <Styled.Header>
        <Styled.ImageWrap>
            <Styled.ImageRing aria-hidden="true" />
            <Styled.ImageContainer>
                <Styled.Image
                    src="https://github.com/DanielGaletti/portfolio/blob/master/public/myself.png?raw=true"
                    alt="Daniel Galetti"
                />
            </Styled.ImageContainer>
        </Styled.ImageWrap>
        <Styled.HeaderBody>
            <Styled.Badge>
                <span aria-hidden="true">◆</span> Software &amp; AI
            </Styled.Badge>
            <Styled.Name>Daniel Galetti</Styled.Name>
            <Styled.Role>Software Engineer</Styled.Role>
            <Styled.Meta>
                Marília, São Paulo, Brazil. Deep Learning, Python, Pytorch, Data Science, MLOps, Computer Vision,
                OpenCV, RAG, Cloud, LangChain &amp; Software Engineering.
            </Styled.Meta>
            <Styled.TagRow>
                <Styled.MiniTag>AI Development &amp; Software Engineering</Styled.MiniTag>
                <Styled.MiniTag>Computer Vision</Styled.MiniTag>
                <Styled.MiniTag>Data Science</Styled.MiniTag>
                <Styled.MiniTag>MLOps</Styled.MiniTag>
                <Styled.MiniTag>Cloud</Styled.MiniTag>
                <Styled.MiniTag>LangChain</Styled.MiniTag>
                <Styled.MiniTag>Software Engineering</Styled.MiniTag>
            </Styled.TagRow>
        </Styled.HeaderBody>
    </Styled.Header>
);

export default Header;

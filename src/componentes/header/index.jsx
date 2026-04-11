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
            <Styled.Meta>São Carlos, São Paulo, Brazil — React, Next.js, TypeScript, ML &amp; computer vision.</Styled.Meta>
            <Styled.TagRow>
                <Styled.MiniTag>Front-end</Styled.MiniTag>
                <Styled.MiniTag>Chatbots &amp; scale</Styled.MiniTag>
                <Styled.MiniTag>MSc @ UFSCar</Styled.MiniTag>
            </Styled.TagRow>
        </Styled.HeaderBody>
    </Styled.Header>
);

export default Header;

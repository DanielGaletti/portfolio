import * as Styled from './styles';

const Section = ({ id, title, subtitle, children }) => (
    <Styled.Section id={id}>
        <Styled.SectionCard>
            <Styled.SectionHead>
                <Styled.SectionTitle>{title}</Styled.SectionTitle>
                {subtitle ? <Styled.SectionSubtitle>{subtitle}</Styled.SectionSubtitle> : null}
            </Styled.SectionHead>
            <Styled.Rule />
            {children}
        </Styled.SectionCard>
    </Styled.Section>
);

export default Section;

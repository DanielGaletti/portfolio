import * as Styled from './styles';

const Section = ({ id, title, children }) => (
    <Styled.Section id={id}>
        <Styled.SectionTitle>{title}</Styled.SectionTitle>
        <Styled.Rule />
        {children}
    </Styled.Section>
);

export default Section;

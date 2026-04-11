import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 2.75rem;
  scroll-margin-top: 5.5rem;

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: var(--navy);
  margin: 0 0 0.4rem 0;
  text-transform: uppercase;
`;

export const Rule = styled.div`
  height: 2px;
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--teal) 0%,
    var(--teal-bright) 55%,
    rgba(22, 160, 133, 0.25) 100%
  );
  margin-bottom: 1.15rem;
`;

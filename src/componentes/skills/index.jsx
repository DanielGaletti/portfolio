import * as Styled from './styles';

const items = [
    {
        title: 'Front-End & Mobile',
        chips: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'AngularJS'],
    },
    {
        title: 'AI / ML / Data Science',
        chips: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'OpenCV', 'Jupyter Notebook'],
    },
    {
        title: 'DevOps & Tools',
        chips: ['Git', 'GitHub Actions', 'Jest', 'Cypress', 'AWS', 'CI/CD', 'Cursor AI', 'GitHub Copilot'],
    },
    {
        title: 'APIs & Integrations',
        chips: ['RESTful APIs', 'Zendesk', 'CRM', 'Web Accessibility (WCAG)'],
    },
];

const Skills = () => (
    <Styled.Grid>
        {items.map(({ title, chips }) => (
            <Styled.Block key={title}>
                <Styled.Category>{title}</Styled.Category>
                <Styled.Chips>
                    {chips.map((c) => (
                        <Styled.Chip key={c}>{c}</Styled.Chip>
                    ))}
                </Styled.Chips>
            </Styled.Block>
        ))}
    </Styled.Grid>
);

export default Skills;

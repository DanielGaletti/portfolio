import * as Styled from './styles';

const items = [
    {
        title: 'Front-End & Mobile',
        text: 'React.js, React Native, Next.js, TypeScript, TailwindCSS, Bootstrap, AngularJS.',
    },
    {
        title: 'AI / ML / Data Science',
        text: 'Python, PyTorch, TensorFlow, Scikit-Learn, NumPy, OpenCV, Jupyter Notebook.',
    },
    {
        title: 'DevOps & Tools',
        text: 'Git, GitHub Actions, Jest, Cypress, AWS, CI/CD, Cursor AI, GitHub Copilot.',
    },
    {
        title: 'APIs & Integrations',
        text: 'RESTful APIs, Zendesk, CRM, Web Accessibility (WCAG).',
    },
];

const Skills = () => (
    <Styled.Grid>
        {items.map(({ title, text }) => (
            <Styled.Block key={title}>
                <Styled.Category>{title}</Styled.Category>
                <Styled.Detail>{text}</Styled.Detail>
            </Styled.Block>
        ))}
    </Styled.Grid>
);

export default Skills;

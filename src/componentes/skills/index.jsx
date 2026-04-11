import * as Styled from './styles';

const accentSoftware = new Set(['React.js', 'Next.js', 'TypeScript']);

const items = [
    {
        title: 'Software engineering: React & delivery',
        subtitle:
            'Day-to-day stack (aligned with my resume): React/Next product work, TypeScript, testing, and continuous delivery.',
        chips: [
            'React.js',
            'Next.js',
            'TypeScript',
            'React Native',
            'JavaScript ecosystem',
            'TailwindCSS',
            'Bootstrap',
            'AngularJS',
            'Jest',
            'Cypress',
            'Git',
            'GitHub Actions',
            'CI/CD',
            'AWS',
        ],
    },
    {
        title: 'AI / ML & data science (foundations)',
        subtitle: 'Research and modeling foundations: computer vision, statistics, and prototyping.',
        chips: [
            'Python',
            'PyTorch',
            'TensorFlow',
            'Scikit-Learn',
            'NumPy',
            'OpenCV',
            'Jupyter Notebook',
        ],
    },
    {
        title: 'AI engineering & MLOps',
        subtitle:
            'Systems around LLMs and models: shipping AI to production, running pipelines, and evolving models with governance.',
        chips: [
            'RAG & retrieval design',
            'Vector DBs & embeddings',
            'LLM APIs & orchestration',
            'Prompting, evals & guardrails',
            'Cloud ML & inference (GPU/CPU)',
            'MLOps pipelines',
            'CI/CD for ML',
            'Monitoring, logging & drift',
            'Model & data versioning',
            'Online fine-tuning & continual learning',
            'Feature / training data pipelines',
        ],
    },
    {
        title: 'APIs, access & product integrations',
        subtitle: 'Product integrations, accessibility, and development tooling.',
        chips: ['RESTful APIs', 'Zendesk', 'CRM', 'Web Accessibility (WCAG)', 'Cursor AI', 'GitHub Copilot'],
    },
];

const Skills = () => (
    <Styled.Grid>
        {items.map(({ title, subtitle, chips }) => (
            <Styled.Block key={title}>
                <Styled.Category>{title}</Styled.Category>
                {subtitle ? <Styled.Subtitle>{subtitle}</Styled.Subtitle> : null}
                <Styled.Chips>
                    {chips.map((c) => (
                        <Styled.Chip key={c} $accent={accentSoftware.has(c)}>
                            {c}
                        </Styled.Chip>
                    ))}
                </Styled.Chips>
            </Styled.Block>
        ))}
    </Styled.Grid>
);

export default Skills;

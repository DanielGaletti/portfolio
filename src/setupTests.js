import '@testing-library/jest-dom';

jest.mock('react-markdown', () => {
    function ReactMarkdown({ children }) {
        return <div data-testid="markdown-mock">{children}</div>;
    }
    return ReactMarkdown;
});

jest.mock('remark-gfm', () => () => {});

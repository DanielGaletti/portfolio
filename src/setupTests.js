// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('react-markdown', () => {
    function ReactMarkdown({ children }) {
        return <div data-testid="markdown-mock">{children}</div>;
    }
    return ReactMarkdown;
});

jest.mock('remark-gfm', () => () => {});

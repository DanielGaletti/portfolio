import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './componentes/layout';
import Home from './Pages/Home';
import BlogList from './Pages/Blog/BlogList';
import BlogPost from './Pages/Blog/BlogPost';

function App() {
    const basename = process.env.PUBLIC_URL || '';

    return (
        <BrowserRouter basename={basename}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

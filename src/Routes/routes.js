import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '../components/Home/index.js';
import About from '../components/About/index.js';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Routes>
        </Router>

    );
}

export default AppRoutes
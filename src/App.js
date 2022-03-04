import * as React from 'react';
import {ThemeProvider} from './contexts/theme';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loading from './components/Loading';

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

export default function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme} style={{minHeight: '100vh'}}>
          <div className="container">
            <Nav toggleTheme={toggleTheme} />

            <React.Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Popular />} />
                <Route path="/battle" element={<Battle />} />
                <Route path="/battle/results" element={<Results />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

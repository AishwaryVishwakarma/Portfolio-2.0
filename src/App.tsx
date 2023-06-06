import React from 'react';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import useMediaQuery from './hooks/useMediaQuery';
import RootLayout from './components/RootLayout/RootLayout';
import HomePage from './pages/home';
import {ParallaxProvider} from 'react-scroll-parallax';
import ProjectsPage from './pages/projects';

interface Utility {
  isMobile: boolean;
}

export const UtilityContext = React.createContext<Utility>({
  isMobile: false,
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'projects', element: <ProjectsPage />},
      // {path: '*', element: <ErrorPage />},
    ],
  },
]);

const App: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <ParallaxProvider>
      <UtilityContext.Provider value={{isMobile}}>
        <RouterProvider router={router} />
      </UtilityContext.Provider>
    </ParallaxProvider>
  );
};

export default App;

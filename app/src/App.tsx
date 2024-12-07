import  { useEffect } from 'react';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from "react-oidc-context";
import { routes } from './routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Loading } from './components/Loading/Loading';
import { CommonLayout } from './components/CommonLayout/CommonLayout';

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
      return <Loading />
  }

  if (auth.error) {
      return <div>Encountering error... {auth.error.message}</div>;
  }

  useEffect(() => {
    // Clean up URL if it contains auth-related query parameters
    if (window.location.search.includes('code=')) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            let Page = route.component;
            return (
              <Route 
                key={route.path} 
                path={route.path} 
                element={
                  route.isPrivate ? (
                    <PrivateRoute>
                      <CommonLayout><Page /></CommonLayout>
                    </PrivateRoute>
                  ) : (
                    <Page />
                  )
                } 
              />
            )})}
        </Routes>
      </Router>
    </div>
  )
}

export default App

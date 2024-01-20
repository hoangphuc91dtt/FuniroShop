import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { routerConfig } from '../configs/routerConfig';
import LayoutContainer from '../layouts/LayoutContainer';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {routerConfig.map(({ path, component, isHeader, isFooter, isBanner, title }) => (
            <Route
              key={title}
              path={path}
              element={
                <LayoutContainer
                  component={component}
                  isHeader={isHeader}
                  isFooter={isFooter}
                  isBanner={isBanner}
                  title={title}
                />
              }
            />
          ))}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

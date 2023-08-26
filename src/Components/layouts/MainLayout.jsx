import { Box } from '@mui/material';
import { useOutlet, useLocation, ScrollRestoration } from 'react-router-dom';
//import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { routes } from '@/routes';
import { Header } from './Header/Header';

export const MainLayout = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find(route => route.path === location.pathname) ?? {};

  return (
    <Box pt={location.pathname === '/' ? 0 : 9} minHeight="100vh">
      <Header />
      {/* <SwitchTransition>
        <CSSTransition
          key={location.key}
          nodeRef={nodeRef}
          timeout={440}
          classNames="page"
          unmountOnExit
        >
          {state => ( */}
      <main ref={nodeRef} className="page">
        {currentOutlet}
        <ScrollRestoration
          getKey={(location, matches) => {
            return location.pathname;
          }}
        />
      </main>
      {/* )}
        </CSSTransition>
      </SwitchTransition> */}
    </Box>
  );
};

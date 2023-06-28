import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarStyled } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBarStyled />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

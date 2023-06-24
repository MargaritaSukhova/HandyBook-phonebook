// import { Suspense } from "react";
import { AppBarStyled } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBarStyled />
      <Outlet />
    </div>
  );
};

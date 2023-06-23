import { Navigation } from 'components/Navigation/Navigation';
import { ReactComponent as Logo } from 'images/logo.svg';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <Logo style={{ width: 40, height: 50 }} />
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

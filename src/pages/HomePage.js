import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Handy Contact Book </h1>
      <h2>The free and easy way to collect phone numbers</h2>
      <p>
        The best tool to help you collect the phone numbers from friends and
        family
      </p>
      <div>
        <button type="button" onClick={handleLogIn}>
          Log In
        </button>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

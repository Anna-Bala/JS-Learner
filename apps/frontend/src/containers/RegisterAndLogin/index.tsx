import { useState } from 'react';
import mixpanel from 'mixpanel-browser';

import { Button } from '../../components/Buttons';
import { LOGIN_API_URL, USERS_API_URL } from '../../api/constants';
import Link from '../../components/Routing/Link';
import TextInput from '../../components/Form/TextInput';
import Typography from '../../components/Typography';
import './index.scss';

type TProps = {
  isLogin?: boolean;
  setIsTutorialModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterAndLogin = ({ isLogin = false, setIsTutorialModalOpen }: TProps) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleRegister = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const data = {
      username: userName,
      password,
    };

    await fetch(USERS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        mixpanel.identify(response.id);
        mixpanel.people.set({
          $name: response.username,
        });

        mixpanel.track('Sign Up', {
          userName: response.username,
          success: true,
        });

        setIsSuccess(true);
      })
      .catch(() => {
        setError('Something went wrong while creating an account, please try again.');

        mixpanel.reset();
        mixpanel.people.set({
          $name: '',
        });

        mixpanel.track('Sign Up', {
          success: false,
        });
      });
  };

  const handleLogin = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setError('');

    const data = {
      username: userName,
      password,
    };

    const loginResponse = await fetch(LOGIN_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });

    if (loginResponse.status !== 201 && loginResponse.status !== 200) {
      setError('Your username or password is incorrect, please try again.');

      mixpanel.track('Login', {
        success: false,
      });
    } else {
      mixpanel.track('Login', {
        userName: data.username,
        success: true,
      });

      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);

      const loginResponseData = await loginResponse.json();
      const userId = loginResponseData.userId.toString();
      const userName = loginResponseData.userName;
      const completedTutorial = loginResponseData.completedTutorial;

      mixpanel.identify(userId);
      mixpanel.people.set({
        $name: userName,
      });

      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', userName);
      setIsTutorialModalOpen?.(!completedTutorial);
    }
  };

  return (
    <section className="login">
      <header className="login__header">
        <Typography color="orange-600" variant="heading1">
          Drag&Code
        </Typography>
        {isSuccess ? (
          <Typography color="orange-600" variant="heading3">
            Registration complete, please go to the login page
          </Typography>
        ) : null}
      </header>
      <main>
        <form className="login__form">
          <Typography color="orange-600" variant="heading2">
            {isLogin ? 'Login' : 'Register'}
          </Typography>

          <div className="login__input-wrapper">
            <Typography color="orange-600" variant="label" htmlFor="userName">
              Username
            </Typography>
            <TextInput color="orange" name="userName" onChange={setUserName} value={userName} />
          </div>

          <div className="login__input-wrapper">
            <Typography color="orange-600" variant="label" htmlFor="password">
              Password
            </Typography>
            <TextInput color="orange" name="password" onChange={setPassword} value={password} isPasswordInput />
          </div>
          {!isLogin ? (
            <div className="login__input-wrapper">
              <Typography color="orange-600" variant="label" htmlFor="confirmPassword">
                Confirm Password
              </Typography>
              <TextInput
                color="orange"
                name="confirmPassword"
                onChange={setConfirmPassword}
                value={confirmPassword}
                isPasswordInput
              />
            </div>
          ) : null}

          {error ? (
            <Typography className="login__error" color="red-400" variant="body1">
              {error}
            </Typography>
          ) : null}

          <Button
            className="login__form-button"
            color="orange"
            onClick={isLogin ? handleLogin : handleRegister}
            variant="small"
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </form>

        <div className="login__redirect">
          <Typography color="orange-600" variant="body1">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Typography>

          {isLogin ? (
            <Link className="login__link" href="/register">
              Register
            </Link>
          ) : (
            <Link className="login__link" href="/login">
              Login
            </Link>
          )}
        </div>
      </main>
    </section>
  );
};

export default RegisterAndLogin;

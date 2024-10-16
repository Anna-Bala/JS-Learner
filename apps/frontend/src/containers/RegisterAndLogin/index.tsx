import { useState } from 'react';

import { Button } from '../../components/Buttons';
import Link from '../../components/Routing/Link';
import TextInput from '../../components/Form/TextInput';
import Typography from '../../components/Typography';
import './index.scss';

type TProps = {
  isLogin?: boolean;
};

const RegisterAndLogin = ({ isLogin = false }: TProps) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <section className="login">
      <header className="login__header">
        <Typography color="orange-600" variant="heading1">
          JavaScript Learner
        </Typography>
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

          <Button className="login__form-button" color="orange" variant="small" onClick={() => {}}>
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

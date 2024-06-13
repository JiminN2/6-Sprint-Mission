import ( useState, useEffect ) from React;

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const [signinButtonDisabled, setSigninButtonDisabled] = useState(true);

  useEffect(() => {
    const emailInput = document.getElementById('email_input');
    const emailErrorMessage = document.getElementById('emailErrorMessage');
    const nicknameInput = document.getElementById('nickname');
    const passwordInput = document.getElementById('pw_input');
    const passwordErrorMessage = document.getElementById('passwordErrorMessage');
    const passwordInput2 = document.getElementById('pw_input2');
    const passwordMismatchMessage = document.getElementById('passwordMismatchError');
    const loginButton = document.getElementById('loginButton');
    const signinButton = document.getElementById('signinButton');

    emailInput.addEventListener('focusout', handleEmailFocusOut);
    passwordInput.addEventListener('focusout', handlePasswordFocusOut);
    passwordInput2.addEventListener('input', checkPasswordMatch);

    loginButton.addEventListener('click', handleLoginClick);
    signinButton.addEventListener('click', handleSigninClick);
  }, []);

  const handleEmailFocusOut = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    updateLoginButton();
  };

  const handlePasswordFocusOut = () => {
    if (!validatePassword(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    updateLoginButton();
  };

  const checkPasswordMatch = () => {
    if (password!== passwordVerify) {
      setPasswordMismatchError(true);
    } else {
      setPasswordMismatchError(false);
    }
    updateSigninButton();
  };

  const updateLoginButton = () => {
    if (email && validateEmail(email) && password && validatePassword(password)) {
      setLoginButtonDisabled(false);
    } else {
      setLoginButtonDisabled(true);
    }
  };

  const updateSigninButton = () => {
    if (
      email &&
      validateEmail(email) &&
      nickname &&
      validateNickname(nickname) &&
      password &&
      validatePassword(password) &&
      passwordVerify &&
      password === passwordVerify
    ) {
      setSigninButtonDisabled(false);
    } else {
      setSigninButtonDisabled(true);
    }
  };

  const handleLoginClick = () => {
    window.location.href = './items';
  };

  const handleSigninClick = () => {
    window.location.href = './signin';
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateNickname = (nickname) => {
    return nickname.trim()!== '';
  };

  return (
    <div>
      {/* Your JSX code here */}
      <input
        type="text"
        id="email_input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        id="pw_input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        id="pw_input2"
        value={passwordVerify}
        onChange={(e) => setPasswordVerify(e.target.value)}
      />
      <button id="loginButton" disabled={loginButtonDisabled}>
        Login
      </button>
      <button id="signinButton" disabled={signinButtonDisabled}>
        Signin
      </button>
    </div>
  );
};

export default SignupPage;
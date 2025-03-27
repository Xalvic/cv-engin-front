const Login = () => {
  const handleGithubLogin = () => {
    window.location.href =
      "http://cv-engine.vercel.app/auth/social/github/redirect";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGithubLogin}>Login with GitHub</button>
    </div>
  );
};

export default Login;

const LogIn = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="forget">
          <label htmlFor="rememberMeCheckbox">
            <input
              type="checkbox"
              id="rememberMeCheckBox"
              name="rememberMeCheckBox"
            />
            Remember me
          </label>
          <a href="">Forget Password</a>
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don&#39;t have an account? <a href="">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

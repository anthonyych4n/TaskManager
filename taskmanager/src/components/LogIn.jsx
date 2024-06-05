const LogIn = () => {
  return (
    <div className="">
      <form className="form-container w-full md:w-[400px] flex flex-col items-center justify-center gap-y-8 bg-white px-10 pt-14 pb-14">
        <h1 className="text-xl">Login</h1>
        <div className="">
          <input type="text" placeholder="Username" />
        </div>
        <div className="">
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

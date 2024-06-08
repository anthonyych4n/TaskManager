const LogIn = () => {
  return (
    <div className="">
      <form className="form-container w-full md:w-[400px] flex flex-col items-center justify-center gap-y-8 px-10 pt-14 pb-14">
        <h1 className="text-xl">Login</h1>
        <div className="p-0">
          <input
            type="text"
            placeholder="Username"
            className="flex bg-gray-100 rounded-lg p-1"
          />
        </div>
        <div className="p-0">
          <input
            type="password"
            placeholder="Password"
            className="flex bg-gray-100 rounded-lg p-1"
          />
        </div>
        <div className="flex flex-col justify-between ">
          <label htmlFor="rememberMeCheckbox">
            <input
              type="checkbox"
              id="rememberMeCheckBox"
              name="rememberMeCheckBox"
            />
            Remember me
          </label>
          <a href="">Forget Password ?</a>
        </div>
        <button
          type="submit"
          className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
        >
          Login
        </button>

        <div className="register-link">
          <p>
            Don&#39;t have an account? <a href="/createaccount">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

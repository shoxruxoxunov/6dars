import React from "react";

function Login() {
  return (
    <div className="max-container1  flex flex-col items-center ">
      <div className="">
        <h1>Login</h1>
      </div>
      <div className="mt-[20px]">
        <form className="flex flex-col items-center">
          <label>
            <input
              type="email"
              placeholder="Type email"
              className="input input-bordered input-primary mb-[10px] w-full max-w-xs"
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Type password"
              className="input input-bordered input-primary mb-[10px] w-full max-w-xs"
            />
          </label>
        </form>
        <div className="ml-[75px]">
          <button className="btn btn-primary btn-sm">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

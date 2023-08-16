'use client';

import Link from "next/link";
import RegisterAnimation from "./components/loginAnimation";
import LoginAnimation from "./components/loginAnimation";

export default function Home() {
  const handleSubmit=()=>{

  }
  return (
    <main>
       <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name="username" placeholder="user name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
    <p>New to website? <Link href='/register' className="text-violet-600">Register</Link></p>
  </div>
  <LoginAnimation className="w-1/3"/>
</div>
    </main>
  )
}

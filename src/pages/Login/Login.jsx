import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const location=useLocation();
    console.log(location);
    const navigate=useNavigate();
    const{signIn}=useContext(AuthContext);
    const handleLogin=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            //navigate after loading
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.error(error.message)
        })

    }
    return (
        <div> 
           <Navbar></Navbar>
           <div>
            <h3 className="text-2xl text-center my-10">Please Login</h3>
            <div className="card shrink-0 w-full md:w-3/4 lg:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
           <input type="email" placeholder="email" className="input input-bordered" name="email" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
             <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
           </div>
           <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
       </form>
       <p className="text-center mb-5">Don't have an account? <Link to='/register' className="underline text-red-300">Register</Link></p>
      </div>
           </div>
  
        </div>
    );
};

export default Login;
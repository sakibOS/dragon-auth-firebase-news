import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('photo-url');
        const email=form.get('email')
        const password=form.get('password');
        console.log(name,photo,email,password)
        //create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
         .catch(error=>{
            console.error(error.message)
         })

    }
    return (
        <div> 
           <Navbar></Navbar>
           <div>
            <h3 className="text-2xl text-center my-10">Register your account</h3>
            <div className="card shrink-0 w-full md:w-3/4 lg:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
           <input type="text" placeholder="Enter your name" className="input input-bordered" name="name" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
           <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo-url" required />
          </div>
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
            <button className="btn btn-primary">Register Now</button>
          </div>
       </form>
       <p className="text-center mb-5">Already have an account? <Link to='/login' className="underline text-red-300">Login</Link></p>
      </div>
           </div>
  
        </div>
    );
};

export default Register;
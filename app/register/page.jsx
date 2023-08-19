'use client'
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';


const page = () => {
  const {signUp, user, setUser} = useContext(AuthContext)
    const handleRegister =(e)=> {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      signUp(email, password).then(res=>{
        const user = res.user;
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err=>console.log(err))
    }
    return (
          <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <form onSubmit={handleRegister} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <div className="card-body md:flex-row">
                <div id='basic' className='bg-base-200 border shadow-sm p-2 rounded-md'>
                  <h4>Basic Information</h4>
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Image</span>
                  </label>
                      <input type="file" name="image" id="image"/>
                  </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">About</span>
                  </label>
                  <textarea name="about" cols="30" rows="10" className='border rounded-md resize-none'></textarea>
                </div>
                </div>
                <div id='education' className='bg-base-200 border shadow-sm p-2 rounded-md'>
                  <h4>Education & Skills</h4>
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name of Institute</span>
                  </label>
                      <input type="text" name="institute" placeholder="institute" className="input input-bordered"/>
                  </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input type="text" name='subject' placeholder="subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Session</span>
                  </label>
                  <input type="text" name='session' placeholder="session" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea name="description" cols="30" rows="10" className='border rounded-md resize-none'></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Skills</span>
                  </label>
                  <div className='grid md:grid-cols-2 grid-cols-1'>
                  <div>
                  <input type="checkbox" name="html" value='html' id='html' className='mr-2'/>
                  <label htmlFor="html">HTML</label>
                  </div>
                  <div>
                  <input type="checkbox" name="css" value='css' id='css' className='mr-2'/>
                  <label htmlFor="css">CSS</label>
                  </div>
                  <div>
                  <input type="checkbox" name="javascript" value='javascript' id='javascript' className='mr-2'/>
                  <label htmlFor="javascript">JavaScript</label>
                  </div>
                  <div>
                  <input type="checkbox" name="tailwind" value='tailwind' id='tailwind' className='mr-2'/>
                  <label htmlFor="tailwind">Tailwind</label>
                  </div>
                  <div>
                  <input type="checkbox" name="react" value='react' id='react' className='mr-2'/>
                  <label htmlFor="react">React</label>
                  </div>
                  <div>
                  <input type="checkbox" name="node" value='node' id='node' className='mr-2'/>
                  <label htmlFor="node">Node</label>
                  </div>
                  <div>
                  <input type="checkbox" name="express" value='express' id='express' className='mr-2'/>
                  <label htmlFor="express">Express</label>
                  </div>
                  <div>
                  <input type="checkbox" name="mongodb" value='mongodb' id='mongodb' className='mr-2'/>
                  <label htmlFor="mongodb">MongoDB</label>
                  </div>
                  </div>
                </div>
                
                </div>
                <div id='education' className='bg-base-200 border shadow-sm p-2 rounded-md'>
                  <h4>Professional, Experience and Certification</h4>
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Professional Details</span>
                  </label>
                  <textarea name="details" cols="30" rows="10" className='border rounded-md resize-none'></textarea>
                  </div>
                  <h4>Experiece</h4>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Role</span>
                  </label>
                  <input type="text" name='role' placeholder="role" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Duration</span>
                  </label>
                  <input type="text" name='duration' placeholder="duration" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Company</span>
                  </label>
                  <input type='text' name="company" placeholder='company' className='input intput-border'></input>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job Type</span>
                  </label>
                  <input type='text' name="type" placeholder='job type' className='input intput-border'></input>
                </div>
                
                
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
           
          </div>
        </div>
      
    );
};

export default page;
import {React,useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser,reset } from '../features/authSlice';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
    );
  
    useEffect(() => {
      if (user || isSuccess) {
        navigate("/");
      }
      dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);
  
    const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
    };

    return (
    <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login memudahkan anda dalam mengakses berbagai fitur di Puskesmas Ngemplak 1</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={Auth}>
                    <div className="card-body">
                    <div className="form-control">
                        {isError && <div className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{message}</span>
                        </div>
                        </div>}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="********" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">{isLoading ? 'Loading...' : 'Login'}</button>
                    <label className="label mx-auto">
                        <span className="label-text-alt">Belum punya akun? <Link to="/register" className="link link-hover text-primary">Register</Link></span>
                    </label>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login
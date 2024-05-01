import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import qZone1 from '../../../assets/images/qZone1.png';
import qZone2 from '../../../assets/images/qZone2.png';
import qZone3 from '../../../assets/images/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login</h2>
               <button className="btn btn-outline w-full">
                 <FcGoogle />
                  Google
               </button>
               <button className="btn btn-outline w-full">
               <FaGithub />
                  Github
               </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl">Find Us on</h2>
                <a className="flex gap-2 p-4 text-lg items-center border rounded-t-xl" href="">
                <FaFacebook />
                <span>Facebook</span>
                </a>
                <a className="flex gap-2 p-4 text-lg items-center border-x" href="">
                <FaTwitter />
                <span>Twitter</span>
                </a>
                <a className="flex gap-2 p-4 text-lg items-center border rounded-b-xl" href="">
                <FaInstagram />
                <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
           
        </div>
    );
};

export default RightSideNav;
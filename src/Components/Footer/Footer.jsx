import logo from "../../assets/img/logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className='bg-[#ECF5FF] pt-[64px] pb-[64px]'>
      <div className="container mx-auto flex items-start justify-between">
        <div className="w-[30%]">
            <img className="w-[53px] h-[80px]" src={logo} alt="" />
            <p className="text-[16px] font-[500] leading-[24px] text-[#475467]">Design amazing digital experiences <br /> that create more happy in the world.</p>
        </div>
        <div className="allLinks flex gap-[16px] items-start justify-between w-[70%]">
            <div>
                <h1 className="text-[14px] font-[600] leading-[24px] text-[#667085] mb-[16px]">Product</h1>
                <div className="links flex flex-col gap-[12px]">
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Overview</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Features</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Solutions</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Tutorials</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Pricing</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Releases</a>
                </div>
            </div>
            <div>
                <h1 className="text-[14px] font-[600] leading-[24px] text-[#667085] mb-[16px]">Company</h1>
                <div className="links flex flex-col gap-[12px]">
                    <Link className="text-[16px] font-[600] leading-[24px] text-[#475467]" to="/about">About us</Link>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Careers</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Press</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">News</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Media kit</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Contact</a>
                </div>
            </div>
            <div>
                <h1 className="text-[14px] font-[600] leading-[24px] text-[#667085] mb-[16px]">Resources</h1>
                <div className="links flex flex-col gap-[12px]">
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Blog</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Newsletter</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Events</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Help centre</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Tutorials</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Support</a>
                </div>
            </div>
            <div>
                <h1 className="text-[14px] font-[600] leading-[24px] text-[#667085] mb-[16px]">Social</h1>
                <div className="links flex flex-col gap-[12px]">
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Twitter</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">LinkedIn</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Facebook</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">GitHub</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">AngelList</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Dribbble</a>
                </div>
            </div>
            <div>
                <h1 className="text-[14px] font-[600] leading-[24px] text-[#667085] mb-[16px]">Legal</h1>
                <div className="links flex flex-col gap-[12px]">
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Terms</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Privacy</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Cookies</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Licenses</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Settings</a>
                    <a className="text-[16px] font-[600] leading-[24px] text-[#475467]" href="#">Contact</a>
                </div>
            </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between pt-[64px] pb-[64px]">
        <h1>© 2024 Heritage- Nest . All rights reserved.</h1>
        <div className="icons flex items-center gap-[24px]">
            <h1 className="text-[24px] text-[#0059B1]"><FaTwitter/></h1>
            <h1 className="text-[24px] text-[#0059B1]"><FaLinkedin/></h1>
            <h1 className="text-[24px] text-[#0059B1]"><FaFacebook/></h1>
            <h1 className="text-[24px] text-[#0059B1]"><FaRegHandPeace/></h1>
        </div>
      </div>
    </div>
  )
}

export default Footer

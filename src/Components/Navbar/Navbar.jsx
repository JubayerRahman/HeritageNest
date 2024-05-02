import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"

const Navbar = () => {
  return (
    <div className="bg-[#ECF5FF] shadow-2xl ">
        <div className="flex items-center justify-between container mx-auto">
        <div className="flex gap-3">
            <Link className="text-[18px] leading-[27px]" to="/BuyerScreen">Buy</Link>
            <a className="text-[18px] leading-[27px]" href="#">Sell</a>
            <a className="text-[18px] leading-[27px]" href="#">Servicess</a>
        </div>
      <Link to="/"><img className="w-[53px] h-[80px]" src={logo}/></Link>
        <div className="flex gap-3">
            <a className="text-[18px] leading-[27px]" href="#">Manage Rentals</a>
            <a className="text-[18px] leading-[27px] font-[500]" href="#">Sign in</a>
        </div>
        </div>
    </div>
  )
}

export default Navbar

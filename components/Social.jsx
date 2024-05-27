import Link from "next/link"
import {FaFacebook, FaGithub, FaYoutube, FaTiktok} from "react-icons/fa"


const socials = [
    {icon: <FaFacebook />, path: ''},
    {icon: <FaGithub />, path: ''},
    {icon: <FaYoutube />, path: ''},
    {icon: <FaTiktok />, path: ''},

]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
            <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
            )
        })}
    </div>
  )
}

export default Social
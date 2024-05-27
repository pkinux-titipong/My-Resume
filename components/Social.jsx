import Link from "next/link"
import {FaFacebook, FaGithub, FaYoutube, FaTiktok} from "react-icons/fa"


const socials = [
    {icon: <FaFacebook />, path: 'https://www.facebook.com/pkinux'},
    {icon: <FaGithub />, path: 'https://github.com/pkinux-titipong'},
    {icon: <FaYoutube />, path: 'https://www.youtube.com/channel/UCIGXnirfTIk4zjegWDwU61w'},
    {icon: <FaTiktok />, path: 'https://www.tiktok.com/@pank.org'},

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
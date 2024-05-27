"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

import { motion } from "framer-motion";
import { FaNetworkWired,FaServer,FaWindows,FaLinux,FaDatabase,FaNodeJs } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"


const skill =[

  {
    num: '01',
    title: 'Network',
    description: "Inside Wiring Cat5 Cat6 cable, install wireless, cctv device, Install Rack and managing cable, Install Network equipment Network Technologies Huawei Router Switch AP Hikvision Switch POE IP camera Ethernet Fast Ethernet Fiber optic WAN LAN TCP/IP VLAN VPN IP Scan",
    href: "",
  },
  {
    num: '02',
    title: 'System',
    description: "Virtualbox, VMware, Linux server, CentOS,Ubuntu. Linux Command, Windows Server",
    href: "",
  },
  {
    num: '03',
    title: 'Programming',
    description: "Basic python, C, JAVA, PHP, HTML, CSS programming. Basic SQL(MySQL), Database, Data Structure. Basic Backend Using Node.js.",
    href: "",
  },
  {
    num: '04',
    title: 'Other',
    description: "Using hand tools.Working at height. Using fiber optic splicer",
    href: "",
  },
]

const skillList= [
  {
    icon: <FaNetworkWired />,
    name: "Network cable wring",
  },
  {
    icon: <FaServer />,
    name: "Server",
  },
  {
    icon: <FaWindows />,
    name: "Windows",
  },
  {
    icon: <FaLinux />,
    name: "Linux",
  },
  {
    icon: <FaDatabase />,
    name: "MySql",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },


]
const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity:0
          }}
          animate = {{
            opacity:1,
            transition:{
              delay:2.4,
              duration:0.4,
              ease: "easeIn",
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {skill.map((skill, index)=>{
              return(
                <div key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  {/**Num */}
                  <div className="w-full flex justify-between items-center">
                    <div 
                      className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                    >
                      {skill.num}
                    </div>
                    <Link href={skill.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl "/>
                    </Link>
                  </div>
                  {/**Title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{skill.title}</h2>
                  {/** Desc */}
                  <p className="text-white/60 ">{skill.description}</p>
                  {/**border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              )
            })}
  
            
        </motion.div>
        <br />
            <div className="flex flex-col justify-center">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:gap-[30px]">
              {skillList.map((skillList, index)=>{
                return(
                  <li key={index}> 
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skillList.icon}</div>
                  </li>
                )
              })}
            </ul>
            </div>
      </div>
    </section>
  )
};

export default Skills



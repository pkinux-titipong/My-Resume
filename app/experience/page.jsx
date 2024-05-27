"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const exp = [
    {
      duaration: "2021-2022",
      position: "IT System and Maintenance",
      company: "FLASH EXPRESS"
    },
    {
      duaration: "2022-2023",
      position: "IT Support",
      company: "Khonkaen Ceramic"
    },
    {
      duaration: "2023-2024",
      position: "IT Engineer",
      company: "RUNERGY PV TECHNOLOGY TH"
    },
    {
      duaration: "2024-PRESENT",
      position: "IT Support",
      company: "Do I.T. Solution"
    },

  ]

const Experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{
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
            {exp.map((exp, index)=>{
              return(
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  {/*Duration*/}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-4xl font-extrabold  text-accent group-hover:text-outline-hover transition-all duration-500">{exp.duaration}</div>
                  </div>

                  {/*position*/}
                  <div className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    <div>{exp.position}</div>
                  </div>

                  {/*company*/}
                  <div className="text-[42px] font-bold leading-none text-outline text-transparent group-hover:text-accent transition-all duration-500">
                    <div>{exp.company}</div>
                  </div>

                  {/**border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
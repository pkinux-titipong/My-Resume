"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,

} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

const info = [

  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description:'(+66) 098 276 5190',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description:'l.chotjit@outlook.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description:'Pluagdang pluagdang, Rayong 21140',
  },
]

import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <motion.section  
      initial={{ opacity:0 }}
      animate={{
        opacity:1,
        transition: {
          delay:2.4, duration: 0.4, ease: "easeIn"
        },
        
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*Form*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">
                  Contact Me, Let's work together
                </h3>
                <p className="text-white/60">
                  If you want IT Specialist, contact me!!
                </p>
                {/*input*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname"/>
                  <Input type="lastname" placeholder="Lastname"/>
                  <Input type="email" placeholder="E-mail"/>
                  <Input type="phone" placeholder="Phone Number"/>
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="ft">Full-time</SelectItem>
                      <SelectItem value="pt">part-time</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea  className="h-[200px]" placeholder="Type your message here."/>
                <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index)=>{
                return(
                  <li key={index}>
                    <div>
                      {item.icon}
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact
import { Button } from "./ui/button";
import Link from "next/link";

import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Titipong <span className="text-accent">C.</span>
                </h1> 
            </Link>

            {/* Desktop*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/about">
                    <Button>Contact</Button>
                </Link>
            </div>

            {/* Mobile */}
            <div className="xl:hidden">
                
                <MobileNav />
                
            </div>
        </div> 
        
    </header>
  )
}
export default Header
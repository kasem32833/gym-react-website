import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross2} from "react-icons/rx"
const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routesWithoutComponent = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Services",
          path: "/services"
        },
        {
          id: 4,
          name: "Contact",
          path: "/contact"
        },
        {
          id: 5,
          name: "Blog",
          path: "/blog"
        }
      ];
      
      
  return (
    <div>
        
        <button className="md:hidden" onClick={()=>setOpen(!open)} >{open ? <RxCross2 className="text-3xl "/> : <GiHamburgerMenu  className="text-3xl "/>}</button>
        <ul className="md:flex gap-6 bg-violet-500 text-white rounded-md p-4 w-32 absolute top-48">
            {
                routesWithoutComponent.map(route =><li key={route.id} >{route.name}</li>)
            }
        </ul>
      
       
    </div>
    
  );
};

export default Navbar;

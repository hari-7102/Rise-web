import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { BsEmojiLaughingFill } from "react-icons/bs";
import { Menu, X } from "lucide-react"; // Icons
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {

  const [isOpen , SetisOpen] = useState('')


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isOpen]);

  const location = useLocation('')

  const link = [
    {name : 'Why Rise' , link:'/whyrise' , },
    {name : 'How It Works' , link:'/howitworks'},
    {name : 'Rise' , link:'/'  , icon : <BsEmojiLaughingFill/>},
    {name : 'Example' , link:'/example'},
    {name : 'Contact Us' , link:'/contact'}
  ]


  const font = ['font-normal  text-lg ', 'font-normal  text-lg  ', 'font-audiowide text-3xl ','font-normal  text-lg  ','font-normal   text-lg ' ];


  return (
    <div >
      <div className='px-6 py-3 text-lg'  >
        <nav>
            <ul className='hidden md:flex justify-center items-center gap-12 '>
              {link.map((nav , index )  =>(
                  <div className='flex justify-center items-center gap-1 '>
                    <Link to={nav.link}><span size={36} className='text-orange-600 text-3xl'>{nav.icon}</span></Link>
                    <p  className={`${location.pathname === nav.link ? 'text-orange-600' : ''}`}><li className={` ${font[index]}`}><Link to={nav.link}>{nav.name}</Link></li></p>
                  </div>

              ))}
            </ul>

        </nav>
      </div>
      <div className="md:hidden flex justify-between items-center px-2">
        <div className='flex  items-center justify-center gap-1 '>
          <BsEmojiLaughingFill size={28}  className='text-orange-600 text-center  '/>
          <p  className='font-audiowide text-3xl'>Rise</p>
        </div>
          <button onClick={() => SetisOpen(!isOpen)}>
            {isOpen ? <X className="w-9 h-9 pe-1 cursor-pointer " /> : <Menu className="w-7 h-7  cursor-pointer  " />}
          </button>
      </div>

      {isOpen && 
        <ul className='bg-white flex flex-col justify-start py-24 items-center gap-8 h-screen'>
          {link.map((nav , index )  =>(
              <motion.div 

              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}

              className='flex justify-center items-center gap-1 '>
                <Link to={nav.link}><span size={36} className='text-orange-600  text-3xl '>{nav.icon}</span></Link>
                <p  className={`${location.pathname === nav.link ? 'text-orange-600' : ''}`} onClick={() => SetisOpen(false)}   ><li className={` ${font[index]}`} ><Link to={nav.link}>{nav.name}</Link></li></p>
              </motion.div>

          ))}
      </ul>
      }
    </div>
  )
}

export default Navbar



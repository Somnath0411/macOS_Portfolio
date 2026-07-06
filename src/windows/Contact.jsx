import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import {socials} from "#constants/index.js";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return(
  <>
  <div id= "window-header">
    <WindowControls target="contact"/>
    <h2>Contact Me</h2>
  </div>
  <div className ="p-5 space-y-5">
    <img src="/images/conference-me.jpeg" alt="somnath" className="w-20 h-20 rounded-full "/>
    <h3>
        Let's connect
    </h3>
    <p>I'm currently looking for full-stack or frontend developer roles where I can put my React, JavaScript, and MySQL skills to real use. I enjoy building clean, functional web applications and have hands-on experience across the stack, from responsive UIs to RESTful APIs, picked up through internships and hands-on projects like a hackathon-winning mental health analysis tool and a full CRUD employee management system. I'm a quick learner, comfortable working in team environments, and genuinely excited about solving real problems with code. If you're hiring or know of an opportunity that might be a good fit, I'd love to connect ,feel free to reach out!</p>
    <p className="flex items-center gap-2"><FaPhoneAlt />:+91 8489651499</p>
    <p className="flex items-center gap-2"><MdEmail/>:sbsomnath2003@gmail.com</p>

    <ul>
        {socials.map(({id,bg,link,icon,text})=>(
            <li key={id} style={{background:bg}} >
                <a href={link} target="_blank" rel="noopener noreferrer" title={text} className="flex items-center gap-2 ">
                    <img src={icon} alt={text} className="size-2"/>
                    <p>{text}</p>
                </a>
            </li>
        ))}
    </ul>

    </div>
    
  </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;

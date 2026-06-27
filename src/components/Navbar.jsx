import { useEffect, useState } from "react";

import {navLinks} from "#constants";
import {navIcons} from "#constants";
import useWindowStore from "#store/window.js";

const formatDateTime = (date) =>
    new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(date);

const Navbar = () => {
    const {openWindow }= useWindowStore();
    const [currentTime, setCurrentTime] = useState(() => formatDateTime(new Date()));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(formatDateTime(new Date()));
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold"> Somnath's Portfolio</p>
                <ul>
                    {navLinks.map(({id,name,type})=>(
                        <li key={id} onClick={()=>openWindow(type)}>
                            <p>{name}</p>
                        </li>
                        ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id,img})=>(

                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{currentTime}</time>
            </div>
        </nav>
    )
}
export default Navbar

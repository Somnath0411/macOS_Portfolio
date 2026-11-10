import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(formatDateTime(new Date()));
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    return (
        <nav>
            <div className="nav-brand">
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold"> Somnath's Portfolio</p>
                <button
                    type="button"
                    className="nav-menu-toggle"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
                <ul id="primary-navigation" className={`nav-links${isMenuOpen ? " is-open" : ""}`}>
                    {navLinks.map(({id,name,type})=>(
                        <li key={id}>
                            <button
                                type="button"
                                className="nav-link"
                                onClick={() => {
                                    openWindow(type);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {name}
                            </button>
                        </li>
                        ))}
                </ul>
            </div>

            <div className="nav-status">
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

import WindowControls from "#components/WindowControls.jsx";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {locations} from "#constants";
import useLocationStore from "#store/location.jsx";
import useWindowStore from "#store/window.js";
import clsx from "clsx";

const Finder = () => {
    const {openWindow}=useWindowStore();
    const openItem = (item)=>{
        if (item.fileType==='pdf') return openWindow('resume');
        if (item.kind==='folder') return setActiveLocation(item);
        if (["fig","url"].includes(item.fileType) && item.href) {
            window.open(item.href, "_blank");
            return;
        }
        openWindow(`${item.fileType}${item.kind}`, item);
    }
    const {activeLocation, setActiveLocation} = useLocationStore();
    return (
        <>
            <div id="window-header">
                <WindowControls target="finder"/>
                <Search className="icon"/>

            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {Object.values(locations).map((item)=>(
                            <li
                                key={item.id}
                                onClick={()=>
                                setActiveLocation(item)}
                                className={clsx(item.id===activeLocation.id?"active":"")}>
                            <img src={item.icon} className="w-4" alt={item.name} 
                            />
                                <p className="text-sm font-medium">
                                    {item.name}
                                </p>
                            </li>
                            ))}
                        </ul>
                        <div>
                            <h3>Work</h3>
                            <ul>
                                {locations.work.children.map((item)=>(
                                    <li
                                        key={item.id}
                                        onClick={()=>
                                            setActiveLocation(item)}
                                        className={clsx(item.id===activeLocation.id?"active":"")}>
                                        <img src={item.icon} className="w-4" alt={item.name}
                                        />
                                        <p className="text-sm font-medium">
                                            {item.name}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <ul className="content">
                    {activeLocation ?.children.map((item)=>(
                        <li key={item.id} className={item.position} onClick={()=>
                            openItem(item)}>
                            <img src={item.icon}  alt={item.name}/>
                            <p>
                            {item.name}
                        </p>
                        </li>
                    ))}
                </ul>

            </div>

        </>
    )
}
const FinderWindow = WindowWrapper(Finder,"finder");
export default FinderWindow

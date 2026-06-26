import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants";
import {Check} from "lucide-react"

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <p>
                    Window Constrols
                </p>
                <h2>
                    Tech Stack
                </h2>
            </div>
            <div className="techstack">
                <p>
                    <span className="font-bold">
                      @somnath %
                    </span>
                    show tech stack
                </p>
                <div className="label">
                    <p className="w-32">Category</p>
                    <p >Technologies</p>

                    <ul>
                        {techStack.map(({ category , items })=>(
                            <li className="flex items-center">
                            <Check className="check" size={20}/>
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item,i)=>(
                                   <li key={i}>
                                       {item}
                                   </li>
                                ))}
                            </ul>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
const TerminalWindow = WindowWrapper(Terminal ,'terminal');
export default TerminalWindow;

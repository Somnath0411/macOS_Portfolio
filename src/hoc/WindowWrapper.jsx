import useWindowStore from "#store/window.js";
import {useEffect, useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";

const WindowWrapper = (Component,windowKey) => {
  const Wrapped =(props)=>{
  const{focusWindow , windows}=useWindowStore();
  const {isOpen, zIndex}= windows[windowKey];
  const ref = useRef(null);

  useGSAP(()=>{
    const el = ref.current;
    if(!el || !isOpen) return;
    el.style.display="block";

    gsap.fromTo(el, {scale: 0.8 , opacity: 0, y:40},{scale:1,opacity:1,y:0 ,duration:0.4 ,ease:"power3.out"});
  },[isOpen]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia(
      "(min-width: 1025px) and (hover: hover) and (pointer: fine)",
    );
    let instance;

    const handlePointerDown = () => focusWindow(windowKey);
    const updateDragging = () => {
      instance?.kill();
      instance = undefined;

      if (mediaQuery.matches) {
        instance = Draggable.create(el)[0];
      }
    };

    el.addEventListener("pointerdown", handlePointerDown);
    updateDragging();
    mediaQuery.addEventListener("change", updateDragging);

    return () => {
      el.removeEventListener("pointerdown", handlePointerDown);
      mediaQuery.removeEventListener("change", updateDragging);
      instance?.kill();
    };
  }, [focusWindow]);

    useLayoutEffect(() => {
      const el =ref.current;
      if(!el) return;
      el.style.display= isOpen ? "block" : "none";
    }, [isOpen]);
 
  return (
    <section id={windowKey} ref={ref} style={{zIndex}} className="absolute">
     <Component {...props}/>
    </section>
  );
};
Wrapped.displayName = `WindowWrapper(${Component.displayName||Component.name||"Component"})`;

return Wrapped;
};
export default WindowWrapper;
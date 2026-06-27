import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Img = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;
  if (!data) return null;

  const { name, subtitle, image, imageUrl, description } = data;
  const src = image || imageUrl;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-4 bg-white text-black min-w-[320px] max-w-[560px]">
        {src && (
          <div className="mb-4">
            <img src={src} alt={name} className="w-full h-auto rounded-md" />
          </div>
        )}
        {subtitle && <p className="mb-4 text-sm text-slate-600">{subtitle}</p>}
        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3">
            {description.map((paragraph, index) => (
              <p key={index} className="text-sm leading-7 text-slate-800">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImgWindow = WindowWrapper(Img, "imgfile");
export default ImgWindow;

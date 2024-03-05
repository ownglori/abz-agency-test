import {useState} from "react";
import {stylesTooltip} from "@/styles";


export const Tooltip = ({children, text}) => {
  const [tooltip, setTooltip] = useState({show: false, x: 0, y: 0});

  const mouseEnter = (event) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      setTooltip({show: true, x: event.clientX - 12, y: event.clientY + 26});
    }
  };

  const mouseLeave = () => {
    setTooltip({show: false, x: 0, y: 0});
  };

  return (
    <div className={stylesTooltip.tooltip_container + (tooltip.show && ` ${stylesTooltip.tooltip_cursor}`)}
         onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {children}
      {tooltip.show && <span className={stylesTooltip.tooltip} style={{top: tooltip.y, left: tooltip.x}}>{text}</span>}
    </div>
  );
};

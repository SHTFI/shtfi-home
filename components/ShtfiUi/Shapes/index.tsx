import { ShapesProps } from "../types";
import style from "./Shapes.module.scss";

const Shapes: React.FC<ShapesProps> = ({
  shape = "squares",
  background = true,
  ...rest
}) => {
  return (
    <div className={style.wrapper} data-bg={background} {...rest}>
      <div className={style[shape]} data-shape={shape}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Shapes;

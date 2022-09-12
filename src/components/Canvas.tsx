import { Canvas as CCanvas } from "@react-three/fiber";
import Desk from "./Desk";

const Canvas = () => {
  return (
    <CCanvas className="h-2/3">
      <Desk />
    </CCanvas>
  );
};

export default Canvas;

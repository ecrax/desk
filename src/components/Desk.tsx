import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Table } from "../models/Table";
import { Screen } from "../models/Screen";

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="whitespace-nowrap">{progress.toFixed()}% loaded</div>
    </Html>
  );
};

const Desk: React.FC = () => {
  const { size } = useThree();
  const aspect = size.width / size.height;

  return (
    <Suspense fallback={<Loader />}>
      <PerspectiveCamera
        manual
        makeDefault
        position={[0, 0.5 * size.width, 2 * size.width]}
        near={0.1}
        far={1000}
        fov={40}
        aspect={aspect}
      />
      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={Math.E ** (0.4 * -aspect) * 7.5}
        target={[0, 0.5, 0]}
        enableZoom={false}
      />
      <Table />
      <Screen
        scale={0.0008}
        rotation={[0, -Math.PI / 2, 0]}
        position={[0, 0.632, -0.32]}
      />
      <Screen
        scale={0.0008}
        rotation={[0, -1.39626, 0]}
        position={[-0.7, 0.632, -0.26]}
      />
      <Screen
        scale={0.0008}
        rotation={[0, -1.74533, 0]}
        position={[0.7, 0.632, -0.26]}
      />
      <Environment files={"small_cathedral.hdr"} resolution={512} />
    </Suspense>
  );
};

export default Desk;

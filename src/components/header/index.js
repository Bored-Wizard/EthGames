import React, {Suspense} from "react";
import './style.css';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Logo from "../../container/homepage/logo";

const Header = () => {
  
  return (
    <section className="header justify-between " >
        <div className="row">
            <div className="h-10 w-10">
              <Canvas
              colorManagement
              camera={{position: [0,0,700], fov: 70}}
              >
                  <Suspense fallback={null}>
                      <OrbitControls autoRotate autoRotateSpeed={2} />
                      <ambientLight intensity={0.1} />
                      <spotLight position={[100,1000,100]} angle={0.3} />
                      <Suspense fallback={null}>
                          <Logo />
                      </Suspense>
                  </Suspense>
              </Canvas>
            </div>
            <h2 className="ml-2 text-2xl">EthGames</h2>
        </div>
        <div>
            
        </div>
    </section>
  );
}

export default Header;
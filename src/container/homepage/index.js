import React, {Suspense} from 'react';
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stars} from "@react-three/drei";
import Ether from "./Scene";
import Logo from "./logo";
import { FaCoins, FaDiceOne, FaDice } from 'react-icons/fa';
import { AiFillCopyrightCircle } from 'react-icons/ai';

const Homepage = (props) => {

    const HTMLContent = () => {
        return (
            <Html fullscreen className="display-center">
                <div className="homepage border-2 border-purple-400 flex justify-evenly">
                    <div className="mSection display-center">
                    <Canvas
                    colorManagement
                    camera={{position: [0,0,700], fov: 70}}
                    onMouseEnter={e => console.log(e)}
                    >
                        <Suspense fallback={null}>
                            <OrbitControls autoRotateSpeed={-2} />
                            <ambientLight intensity={0.1} />
                            <spotLight position={[100,1000,100]} angle={0.3} />
                            <Suspense fallback={null}>
                                <Logo />
                            </Suspense>
                        </Suspense>
                    </Canvas>
                    </div>
                    <div className="cSection justify-start text-white font-bold overflow-auto noScrollbar">
                        <div className="border-2 rounded-md p-4" >
                            <h4 className="text-2xl">
                                What is EthGames?
                            </h4>
                            <p className="mt-2 text-xl">
                                EthGames is a game where you can play and win ether with only a 1% house edge.
                            </p>
                            <p className="mt-2 text-xl">
                                It is fair and uses the chainlink VRF to provide the user with user fair gameplay.
                            </p>
                            <p className="mt-2 text-xl">
                                Ethgames provides various games that you can enjoy and play at any time.
                            </p>
                        </div>
                        <div className=" pl-20 pr-20">
                            <div className="mt-8 flex justify-between">
                                <label className="row border-2 p-2 rounded w-52 hover:bg-purple-600" onClick={() => props.secs.sec2.current.scrollIntoView()} >
                                    <AiFillCopyrightCircle size={40} />
                                    <span className="ml-2">Flip a coin</span>
                                </label>
                                <label className="row border-2 p-2 rounded w-52 hover:bg-purple-600" onClick={() => props.secs.sec3.current.scrollIntoView()} >
                                    <FaCoins size={40} />
                                    <span className="ml-2">Flip two coins</span>
                                </label>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <label className="row border-2 p-2 rounded w-52 hover:bg-purple-600">
                                    <FaDiceOne size={36} />
                                    <span className="ml-2">Roll a dice</span>
                                </label>
                                <label className="row border-2 p-2 rounded w-52 hover:bg-purple-600">
                                    <FaDice size={40} />
                                    <span className="ml-2">Roll two dice</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        )
    }
    return (
        <>
        <Canvas
        colorManagement
        camera={{position: [0,50,200], fov: 70}}
        >
            <Suspense fallback={null}>
                <OrbitControls autoRotate autoRotateSpeed={2} />
                <Stars />
                <ambientLight intensity={0.1} />
                <spotLight position={[100,1000,100]} angle={0.3} />
                <Suspense fallback={null}>
                    <Ether />
                </Suspense>
                <HTMLContent />
            </Suspense>
        </Canvas>
        </>
    )
}

export default Homepage

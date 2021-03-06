/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: fahad4 (https://sketchfab.com/fahad4)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ethereum-coin-51f1d335994949b0886fdb11d62ab64d
title: Ethereum Coin
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="Ethereum" position={[0, 0, 0]} rotation={[0, 1, 0]} scale={[1, 1, 0.7]}>
            <mesh geometry={nodes.Ethereum_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} />
            <mesh geometry={nodes.Ethereum_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
            <mesh geometry={nodes.Ethereum_aiStandardSurface3_0.geometry} material={materials.aiStandardSurface3} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

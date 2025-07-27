"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'
import { Environment } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas>
        <directionalLight position={[0, 3, 2]} intensity={3} />
        <Environment preset="city" />
        <Model/>
    </Canvas>
  )
}


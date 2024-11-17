import { Rive as RiveCanvas, RiveParameters } from '@rive-app/canvas'

import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

export default function RiveForWebStatic() {
  const riveRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState<{ width: number; height: number }>({
    height: 0,
    width: 0
  })

  useEffect(() => {
    let r: RiveCanvas

    if (!riveRef.current) return

    const options: RiveParameters = {
      autoplay: true,
      canvas: riveRef.current,
      stateMachines: 'bumpy',
      src: `https://cdn.rive.app/animations/vehicles.riv`,
      artboard: undefined,
      animations: undefined,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas()
      }
    }

    r = new RiveCanvas(options)
  }, [])

  if (!riveRef) return null

  return (
    <View
      style={{
        width: '100%',
        height: '100%'
      }}
      onLayout={event => {
        const { width, height } = event.nativeEvent.layout
        setSize({ width, height })
      }}>
      <canvas ref={riveRef} height={size.height} width={size.width}></canvas>
    </View>
  )
}

// import "./styles.css";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from 'react-spring';


// https://github.com/shuding/cobe

export default function Globe() {
  const canvasRef = useRef();


  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1600 * 2,
      height: 1600 * 2,

      phi: 0,
      theta: -0.21,
      dark: 0.6,
      diffuse: 0,
      mapSamples: 69000,
      mapBrightness: 3.0,
      mapBaseBrightness: 0.1,

      baseColor: [0 / 255, 84 / 255, 255 / 255],
      markerColor: [34 / 255, 64 / 255, 203 / 255],
      glowColor: [10 / 255, 100 / 255, 255 / 255],
      opacity: 0.5,
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.002
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="Globe absolute   -right-20 md:-right-[40rem] -bottom-[40rem]">
      <canvas
        ref={canvasRef}
        style={{ width: 1600, height: 1600, zIndex: 5, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}

// useEffect(() => {
//   let phi = 0;
//   let width = 0;
//   const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
//   window.addEventListener('resize', onResize)
//   onResize()
//   const globe = createGlobe(canvasRef.current, {
//     devicePixelRatio: 2.6,
//     width: width * 2,
//     height: width * 2,
//     phi: 0,
//     theta: -0.21,
//     dark: 0.6,
//     diffuse: 0,
//     mapSamples: 69000,
//     mapBrightness: 3.0,
//     mapBaseBrightness:0.10,
//   //   baseColor: [0, 84, 255],
//     baseColor: [0/255, 84/255, 255/255],
//     markerColor: [34 / 255, 64 / 255, 203 / 255],
//     glowColor: [59/255, 144/255, 255/255],

//   scale: 1,

//   // offset:[2.4,3.0] ,
//   // offsetY:  0.30,
//   opacity:0.68,

//     markers: [],
//     onRender: (state) => {
//       // This prevents rotation while dragging
//       if (!pointerInteracting.current) {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         phi += 0.005
//       }
//       state.phi = phi + r.get()
//       state.width = width * 2
//       state.height = width * 2
//     }
//   })
//   setTimeout(() => canvasRef.current.style.opacity = '1')
//   return () => globe.destroy()
// }, [])

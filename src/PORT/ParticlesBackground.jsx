// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import React from "react";
// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: {
//           enable: true,
//           zIndex: -1
//         },
//         background: {
//           color: "#ffffff"
//         },
//         particles: {
//           number: {
//             value: 60,
//             density: {
//               enable: true,
//               area: 800
//             }
//           },
//           color: {
//             value: "#999999"
//           },
//           shape: {
//             type: "circle"
//           },
//           opacity: {
//             value: 0.6
//           },
//           size: {
//             value: { min: 1, max: 3 }
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#cccccc",
//             opacity: 0.4,
//             width: 1
//           },
//           move: {
//             enable: true,
//             speed: 2,
//             direction: "none",
//             outModes: {
//               default: "bounce"
//             }
//           }
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse"
//             },
//             onClick: {
//               enable: true,
//               mode: "push"
//             },
//             resize: true
//           },
//           modes: {
//             repulse: {
//               distance: 120,
//               duration: 0.4
//             },
//             push: {
//               quantity: 4
//             }
//           }
//         },
//         detectRetina: true
//       }}
//     />
//   );
// };

// export default ParticlesBackground;

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value:"#f5",
          },
        },
        fpsLimit:30,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity:1,
            },
            repulse: {
              distance: 30,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ff9735",
          },
          links: {
            color: "#ff9735",
            distance: 0,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default:"bounce-vertical",
            },
            random: false,
            speed:1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type:"circle",
          },
          size: {
            value: { min: 0.5, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;

import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
const Par = () => {
    const particleInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, [])
    const particleLoaded = useCallback(async (container) => {
        await console.log(container);

    })
    return (
        <div>
            <Particles
                className="hidden lg:flex  "
                id="tsparticles"
                init={particleInit}
                loaded={particleLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "#fff"
                    //     }
                    // }
                    style: {
                        position: "absolute",
                    },
                    fps_limit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: false,
                                mode: "repulse"
                            },
                            onClick: {
                                enable: true,
                                mode: "push"
                            }
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 1
                            },
                            push: {
                                quantity: 0
                            }
                        }

                    },
                    particles: {
                        links: {
                            color: '#fff',
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 0.2
                        },

                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 4 },

                        },
                        number: {
                            value: 100,

                        },
                        move: {
                            direction: "none",
                            enable: true,
                            speed: 1,
                            random: true,
                            straight: false,
                            out_mode: "bounce",
                            bounce: true,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            },


                        },
                        opacity: {
                            value: 0.3
                        },
                        collisions: {
                            enable: true
                        }
                    }
                }}
            />
        </div>
    );
};

export default Par;
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.from(".head h1", {
    y: 200,
    skewY: 10,
    duration: 1,
})
    .to(
        ".head h1",
        {
            letterSpacing: "100px",
            scale: 2,
            duration: 0.6,
            opacity: 0,
        },
        "+=0.2"
    )
    .to(
        ".circle",
        {
            opacity: 1,
            scale: 2.5,
            borderRadius: "0%",
            backgroundColor: "#ffffff",
            duration: 1.5,
            ease: "power4.inOut",
        },
        "-=0.3"
    )
    .to(
        ".container",
        {
            opacity: 1,
            scale: 1,
            borderRadius: "0%",
            duration: 1.2,
            ease: "power3.out",
        },
        "-=1.0"
    )
    .to(
        ".loader-wrap",
        {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
        },
        "-=0.6"
    )
    .set(".loader-wrap", { display: "none" })
    .to(
        ".container span",
        {
            opacity: 1,
            transform: "skewX(0deg) scale(1)",
            duration: 1,
            ease: "power3.inOut",
        },
        "-=0.6"
    );

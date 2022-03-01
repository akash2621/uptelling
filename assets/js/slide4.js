//GSAPHorizontalScroll

// ========== GREE BACKGROUND ANIMATION START ==========
function SectionBGSAP7() {
    let SectionBGSAPTL7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionC",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionC").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionC").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL7.from("#SectionC .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== GREE BACKGROUND ANIMATION START ==========

window.onload = () => {
    GSAPHorizontalScroll();
    SectionBGSAP7();
};
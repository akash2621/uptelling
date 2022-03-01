// ========== GREE BACKGROUND ANIMATION START ==========
        gsap.registerPlugin(ScrollTrigger);
        const pageWrap = document.querySelector('#PageWrap')
        //GSAPHorizontalScroll
        function GSAPHorizontalScroll() {
            let Sections = gsap.utils.toArray("section");
            let GSAPHorizontalScrollTL = gsap.timeline({
                scrollTrigger: {
                trigger: "#PageWrap",
                triggerHook: "0.5",
                pin: true,
                start: "0% 0%",
                end:
                    "+=" +
                    (document.querySelector("#PageWrap").scrollWidth - window.innerWidth),
                scrub: 1,
                snap: {
                    snapTo: 1 / (Sections.length - 1),
                    duration: { min: 0.50, max: 1 },
                    delay: 1,
                    ease: "sine.inOut"
                    }
                }
            });
            GSAPHorizontalScrollTL.to(Sections, {
                xPercent: -100 * (Sections.length - 1),
                ease: "none"
            });
        }
        //GSAPHorizontalScroll

        // ========== GREE BACKGROUND ANIMATION SECTION ==========
        function SectionBGSAP() {
            let SectionBGSAPTL = gsap.timeline({
                scrollTrigger: {
                    trigger: "#SectionB",
                    // toggleActions: "play reverse play reverse",
                    scrub: 0,
                    start: () =>
                        "top top-=" +
                        (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
                    end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
                    // scroller:"#SectionB",
                    // horizontal: true,
                    markers: "true"
                }
            });
            SectionBGSAPTL.from("#SectionB .green_background", {
                opacity: "1",
                opacity: "0.5",
                opacity: "0.8",
                opacity: "0",
            })
            .from("#SectionB .green_background", {
                scale: 1,
                ease: "none",
            })
            .from("#SectionB .green_background", {
                x: 0, y: 0,
                x: -200, y: 0,
                x: -300, y: 0,
                x: -400, y: 0, 
                ease: Linear.easeNone,
            });
        }
        // ========== GREE BACKGROUND ANIMATION SECTION ==========

        // ========== LEFT CAMERA ANIMATION SECTION ==========
        function SectionBGSAP2() {
            let SectionBGSAPTL2 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#SectionB",
                    // toggleActions: "play reverse play reverse",
                    scrub: 0,
                    start: () =>
                        "top top-=" +
                        (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
                    end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
                    // scroller:"#SectionB",
                    // horizontal: true,
                    markers: "true"
                }
            });
            SectionBGSAPTL2.from("#SectionB .leftcamera_background", {
                opacity: "0",
            })
            .from("#SectionB .leftcamera_background", {
                scale: 1,
                ease: "none",
            })
            .from("#SectionB .leftcamera_background", {
                x: 100, y: 00 ,
                x: 200, y: 0 ,
                x: 300, y: 00 ,
                x: 400, y: 00 ,
                ease: Linear.easeNone,
            });
        }
        // ========== LEFT CAMERA ANIMATION SECTION ==========

        // ========== LEFT CAMERA ANIMATION SECTION ==========
        function SectionBGSAP3() {
            let SectionBGSAPTL3 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#SectionB",
                    // toggleActions: "play reverse play reverse",
                    scrub: 0,
                    start: () =>
                        "top top-=" +
                        (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
                    end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
                    // scroller:"#SectionB",
                    // horizontal: true,
                    markers: "true"
                }
            });
            SectionBGSAPTL3.from("#SectionB .logo_uptelling", {
                opacity: "0",
            })
            .from("#SectionB .logo_uptelling", {
                scale: 1,
                ease: "none",
            })
            .from("#SectionB .logo_uptelling", {
                x: 100, y: 50 ,
                x: 300, y: 100 ,
                x: 500, y: 150 ,
                x: 700, y: 250 ,
                ease: Linear.easeNone,
            })
        }
        // ========== LEFT CAMERA ANIMATION SECTION ==========

        window.onload = () => {
            GSAPHorizontalScroll();
            SectionBGSAP();
            // SectionBGSAP1();
            SectionBGSAP2();
            SectionBGSAP3();
        };
// ========== GREE BACKGROUND ANIMATION END ==========
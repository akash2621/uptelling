gsap.registerPlugin(ScrollTrigger);
const pageWrap = document.querySelector('#PageWrap')
//GSAPHorizontalScroll
function GSAPHorizontalScroll() {
    let Sections = gsap.utils.toArray("section");
    let GSAPHorizontalScrollTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#PageWrap",
            triggerHook: "0",
            pin: true,
            start: "0% 0%",
            end: "+=" + (document.querySelector("#PageWrap").scrollWidth - window.innerWidth),
            scrub: 1,
            snap: {
                snapTo: 1 / (Sections.length - 1),
                duration: { min: 0.1, max: 1 },
                delay: 1,
                ease: "sine.inOut"
            },
        }
        
    });
    // addIndicators({
    //     colorTrigger: "White",
    //     colorStart: "White",
    //     colorEnd: "White",
    // });
    GSAPHorizontalScrollTL.to(Sections, {
        xPercent: -100 * (Sections.length - 1),
        ease: "none"
    });
}
//GSAPHorizontalScroll





//  ********************************************************************* SLIDE 3 *********************************************************************
//  ********************************************************************* SLIDE 3 *********************************************************************
//  ********************************************************************* SLIDE 3 *********************************************************************
//  ********************************************************************* SLIDE 3 *********************************************************************
// ========== GREE BACKGROUND ANIMATION START ==========
function SectionBGSAP() {
    let SectionBGSAPTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionC", 
            scrub: 0,
            start: () => "top top-=" + (document.querySelector("#SectionC").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionC").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL.from("#SectionC .green_background", {
        ease: "Linear.easeNone",
    })
    .from("#SectionC .green_background", {
        ease: "Linear.easeNone",
    })
    .from("#SectionC .green_background", {
        x: -600, y: 0, opacity: "0",
        ease: Linear.easeNone,
    });
}
// ========== GREE BACKGROUND ANIMATION END ==========

// ========== LEFT CAMERA ANIMATION SECTION ==========
function SectionBGSAP2() {
    let SectionBGSAPTL2 = gsap.timeline({
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
    SectionBGSAPTL2.from("#SectionC .leftcamera_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .leftcamera_background", {
        scale: 1,
        ease: Linear.easeNone,
    })
    .from("#SectionC .leftcamera_background", {
        x: 600, y: 00, opacity: 0,
        ease: Linear.easeNone,
    });
}
// ========== LEFT CAMERA ANIMATION SECTION ==========

// ========== LOGO ANIMATION SECTION ==========
function SectionBGSAP3() {
    let SectionBGSAPTL3 = gsap.timeline({
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
    SectionBGSAPTL3.from("#SectionC .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== LOGO ANIMATION SECTION ==========

// ========== CONTENT HEADING 1 SECTION ==========
function SectionBGSAP4() {
    let SectionBGSAPTL4 = gsap.timeline({
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
    SectionBGSAPTL4.from("#SectionC .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== CONTENT HEADING 1 SECTION ==========

// ========== CONTENT HEADING 2 SECTION ==========
function SectionBGSAP5() {
    let SectionBGSAPTL5 = gsap.timeline({
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
    SectionBGSAPTL5.from("#SectionC .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== CONTENT HEADING 2 SECTION ==========

// ========== CONTENT SUBHEADING SECTION ==========
function SectionBGSAP6() {
    let SectionBGSAPTL6 = gsap.timeline({
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
    SectionBGSAPTL6.from("#SectionC .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionC .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== CONTENT SUBHEADING SECTION ==========





//  ********************************************************************* SLIDE 4 *********************************************************************
//  ********************************************************************* SLIDE 4 *********************************************************************
//  ********************************************************************* SLIDE 4 *********************************************************************
//  ********************************************************************* SLIDE 4 *********************************************************************
// ========== SLIDE 4 GREEN BACKGROUND ANIMATION START ==========
function SectionBGSAP7() {
    let SectionBGSAPTL7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionD",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionD").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionD").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL7.from("#SectionD .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 4 GREEN BACKGROUND ANIMATION END ==========

// ========== SLIDE 4 LOGO ANIMATION SECTION START ==========
function SectionBGSAP8() {
    let SectionBGSAPTL8 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionD",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionD").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionD").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL8.from("#SectionD .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 4 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 4 CONTENT HEADING 1 SECTION START ==========
function SectionBGSAP9() {
    let SectionBGSAPTL9 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionD",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionD").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionD").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL9.from("#SectionD .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 4 CONTENT HEADING 1 SECTION END ==========

// ========== SLIDE 4 CONTENT HEADING 2 SECTION START ==========
function SectionBGSAP10() {
    let SectionBGSAPTL10 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionD",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionD").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionD").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL10.from("#SectionD .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 4 CONTENT HEADING 2 SECTION END ==========

// ========== SLIDE 4 CONTENT SUBHEADING SECTION START ==========
function SectionBGSAP11() {
    let SectionBGSAPTL11 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionD",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionD").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionD").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL11.from("#SectionD .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionD .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 4 CONTENT SUBHEADING SECTION END ==========





//  ********************************************************************* SLIDE 5 *********************************************************************
//  ********************************************************************* SLIDE 5 *********************************************************************
//  ********************************************************************* SLIDE 5 *********************************************************************
//  ********************************************************************* SLIDE 5 *********************************************************************
// ========== SLIDE 5 GREEN BACKGROUND ANIMATION START ==========
function SectionBGSAP12() {
    let SectionBGSAPTL12 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionE",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionE").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionE").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL12.from("#SectionE .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 5 GREEN BACKGROUND ANIMATION END ==========

// ========== SLIDE 5 LOGO ANIMATION SECTION START ==========
function SectionBGSAP13() {
    let SectionBGSAPTL13 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionE",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionE").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionE").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL13.from("#SectionE .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 5 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 5 CONTENT HEADING 1 SECTION START ==========
function SectionBGSAP14() {
    let SectionBGSAPTL14 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionE",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionE").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionE").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL14.from("#SectionE .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 5 CONTENT HEADING 1 SECTION END ==========

// ========== SLIDE 5 CONTENT HEADING 2 SECTION START ==========
function SectionBGSAP15() {
    let SectionBGSAPTL15 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionE",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionE").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionE").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL15.from("#SectionE .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 5 CONTENT HEADING 2 SECTION END ==========

// ========== SLIDE 5 CONTENT SUBHEADING SECTION START ==========
function SectionBGSAP16() {
    let SectionBGSAPTL16 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionE",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionE").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionE").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL16.from("#SectionE .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionE .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 5 CONTENT SUBHEADING SECTION END ==========





//  ********************************************************************* SLIDE 6 *********************************************************************
//  ********************************************************************* SLIDE 6 *********************************************************************
//  ********************************************************************* SLIDE 6 *********************************************************************
//  ********************************************************************* SLIDE 6 *********************************************************************
// ========== SLIDE 6 GREEN BACKGROUND ANIMATION START ==========
function SectionBGSAP17() {
    let SectionBGSAPTL17 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionF",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionF").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionF").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL17.from("#SectionF .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 6 GREEN BACKGROUND ANIMATION END ==========

// ========== SLIDE 6 LOGO ANIMATION SECTION START ==========
function SectionBGSAP18() {
    let SectionBGSAPTL18 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionF",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionF").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionF").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL18.from("#SectionF .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 6 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 6 CONTENT HEADING 1 SECTION START ==========
function SectionBGSAP19() {
    let SectionBGSAPTL19 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionF",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionF").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionF").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL19.from("#SectionF .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 6 CONTENT HEADING 1 SECTION END ==========

// ========== SLIDE 6 CONTENT HEADING 2 SECTION START ==========
function SectionBGSAP20() {
    let SectionBGSAPTL20 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionF",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionF").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionF").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL20.from("#SectionF .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 6 CONTENT HEADING 2 SECTION END ==========

// ========== SLIDE 6 CONTENT SUBHEADING SECTION START ==========
function SectionBGSAP21() {
    let SectionBGSAPTL21 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionF",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionF").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionF").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL21.from("#SectionF .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionF .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 6 CONTENT SUBHEADING SECTION END ==========





//  ********************************************************************* SLIDE 8 *********************************************************************
//  ********************************************************************* SLIDE 8 *********************************************************************
//  ********************************************************************* SLIDE 8 *********************************************************************
//  ********************************************************************* SLIDE 8 *********************************************************************
// ========== SLIDE 8 GREEN BACKGROUND ANIMATION START ==========
function SectionBGSAP22() {
    let SectionBGSAPTL22 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionH",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionH").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionH").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL22.from("#SectionH .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 GREEN BACKGROUND ANIMATION END ==========

// ========== SLIDE 8 LOGO ANIMATION SECTION START ==========
function SectionBGSAP23() {
    let SectionBGSAPTL23 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionH",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionH").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionH").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL23.from("#SectionH .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 8 CONTENT HEADING 1 SECTION START ==========
function SectionBGSAP24() {
    let SectionBGSAPTL24 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionH",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionH").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionH").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL24.from("#SectionH .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT HEADING 1 SECTION END ==========

// ========== SLIDE 8 CONTENT HEADING 2 SECTION START ==========
function SectionBGSAP25() {
    let SectionBGSAPTL25 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionH",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionH").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionH").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL25.from("#SectionH .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT HEADING 2 SECTION END ==========

// ========== SLIDE 8 CONTENT SUBHEADING SECTION START ==========
function SectionBGSAP26() {
    let SectionBGSAPTL26 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionH",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionH").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionH").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL26.from("#SectionH .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionH .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT SUBHEADING SECTION END ==========





//  ********************************************************************* SLIDE 11 *********************************************************************
//  ********************************************************************* SLIDE 11 *********************************************************************
//  ********************************************************************* SLIDE 11 *********************************************************************
//  ********************************************************************* SLIDE 11 *********************************************************************
// ========== SLIDE 8 GREEN BACKGROUND ANIMATION START ==========
function SectionBGSAP27() {
    let SectionBGSAPTL27 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionK",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionK").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionK").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL27.from("#SectionK .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 GREEN BACKGROUND ANIMATION END ==========

// ========== SLIDE 8 LOGO ANIMATION SECTION START ==========
function SectionBGSAP28() {
    let SectionBGSAPTL28 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionK",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionK").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionK").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL28.from("#SectionK .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 8 CONTENT HEADING 1 SECTION START ==========
function SectionBGSAP29() {
    let SectionBGSAPTL29 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionK",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionK").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionK").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL29.from("#SectionK .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT HEADING 1 SECTION END ==========

// ========== SLIDE 8 CONTENT HEADING 2 SECTION START ==========
function SectionBGSAP30() {
    let SectionBGSAPTL30 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionK",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionK").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionK").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL30.from("#SectionK .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT HEADING 2 SECTION END ==========

// ========== SLIDE 8 CONTENT SUBHEADING SECTION START ==========
function SectionBGSAP31() {
    let SectionBGSAPTL31 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionK",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionK").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionK").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL31.from("#SectionK .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionK .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT SUBHEADING SECTION END ==========





//  ********************************************************************* SLIDE 12 *********************************************************************
//  ********************************************************************* SLIDE 12 *********************************************************************
//  ********************************************************************* SLIDE 12 *********************************************************************
//  ********************************************************************* SLIDE 12 *********************************************************************
// ========== SLIDE 8 GREEN BACKGROUND ANIMATION START ==========
function SectionBGSAP32() {
    let SectionBGSAPTL32 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionL",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionL").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionL").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL32.from("#SectionL .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .green_background", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .green_background", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 GREEN BACKGROUND ANIMATION END ==========

// ========== SLIDE 8 LOGO ANIMATION SECTION START ==========
function SectionBGSAP33() {
    let SectionBGSAPTL33 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionL",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionL").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionL").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL33.from("#SectionL .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 8 CONTENT HEADING 1 SECTION START ==========
function SectionBGSAP34() {
    let SectionBGSAPTL34 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionL",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionL").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionL").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL34.from("#SectionL .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .content_heading_1", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .content_heading_1", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT HEADING 1 SECTION END ==========

// ========== SLIDE 8 CONTENT HEADING 2 SECTION START ==========
function SectionBGSAP35() {
    let SectionBGSAPTL35 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionL",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionL").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionL").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL35.from("#SectionL .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .content_heading_2", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .content_heading_2", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT HEADING 2 SECTION END ==========

// ========== SLIDE 8 CONTENT SUBHEADING SECTION START ==========
function SectionBGSAP36() {
    let SectionBGSAPTL36 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionL",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionL").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionL").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL36.from("#SectionL .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .content_subheading", {
        ease: Linear.easeNone,
    })
    .from("#SectionL .content_subheading", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 CONTENT SUBHEADING SECTION END ==========





//  ********************************************************************* SLIDE 10 *********************************************************************
//  ********************************************************************* SLIDE 10 *********************************************************************
//  ********************************************************************* SLIDE 10 *********************************************************************
//  ********************************************************************* SLIDE 10 *********************************************************************
// ========== SLIDE 8 LOGO ANIMATION SECTION START ==========
function SectionBGSAP37() {
    let SectionBGSAPTL37 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionJ",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionJ").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionJ").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL37.from("#SectionJ .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionJ .logo_uptelling", {
        ease: Linear.easeNone,
    })
    .from("#SectionJ .logo_uptelling", {
        x: 700, y: 250 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 8 LOGO ANIMATION SECTION START ==========
function SectionBGSAP38() {
    let SectionBGSAPTL38 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionJ",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionJ").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionJ").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL38.from("#SectionJ .seactionj_section_head", {
        ease: Linear.easeNone,
    })
    .from("#SectionJ .seactionj_section_head", {
        ease: Linear.easeNone,
    })
    .from("#SectionJ .seactionj_section_head", {
        x: -600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 LOGO ANIMATION SECTION END ==========

// ========== SLIDE 8 LOGO ANIMATION SECTION START ==========
function SectionBGSAP39() {
    let SectionBGSAPTL39 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionJ",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionJ").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionJ").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL39.from("#SectionJ .seactionj_section p", {
        ease: Linear.easeNone,
    })
    .from("#SectionJ .seactionj_section p", {
        ease: Linear.easeNone,
    })
    .from("#SectionJ .seactionj_section p", {
        x: 600, y: 0, opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 8 LOGO ANIMATION SECTION END ==========





//  ********************************************************************* SLIDE 1 *********************************************************************
//  ********************************************************************* SLIDE 1 *********************************************************************
//  ********************************************************************* SLIDE 1 *********************************************************************
//  ********************************************************************* SLIDE 1 *********************************************************************
// ========== SLIDE 1 LOGO ANIMATION SECTION START ==========
function SectionBGSAP40() {
    let SectionBGSAPTL40 = gsap.timeline({
        scrollTrigger: {
            trigger: "#SectionB",
            scrub: 0,
            start: () =>
                "top top-=" +
                (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
            end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
            markers: "true"
        }
    });
    SectionBGSAPTL40.from("#SectionB .seactiona_logo", {
        ease: Linear.easeNone,
        opacity: 0,
    })
    .from("#SectionB .seactiona_logo", {
        ease: Linear.easeNone,
    })
    .from("#SectionB .seactiona_logo", {
        x: 0, y: 0 , opacity: 0,
        ease: Linear.easeNone,
    })
}
// ========== SLIDE 1 LOGO ANIMATION SECTION END ==========


window.onload = () => {
    GSAPHorizontalScroll();
    SectionBGSAP();
    // SLIDE 3
    SectionBGSAP2();
    SectionBGSAP3();
    SectionBGSAP4();
    SectionBGSAP5();
    SectionBGSAP6();
    // SLIDE 4
    SectionBGSAP7();
    SectionBGSAP8();
    SectionBGSAP9();
    SectionBGSAP10();
    SectionBGSAP11();
    // SLIDE 5
    SectionBGSAP12();
    SectionBGSAP13();
    SectionBGSAP14();
    SectionBGSAP15();
    SectionBGSAP16();
    // SLIDE 6
    SectionBGSAP17();
    SectionBGSAP18();
    SectionBGSAP19();
    SectionBGSAP20();
    SectionBGSAP21();
    // SLIDE 8
    SectionBGSAP22();
    SectionBGSAP23();
    SectionBGSAP24();
    SectionBGSAP25();
    SectionBGSAP26();
    // SLIDE 11
    SectionBGSAP27();
    SectionBGSAP28();
    SectionBGSAP29();
    SectionBGSAP30();
    SectionBGSAP31();
    // SLIDE 12
    SectionBGSAP32();
    SectionBGSAP33();
    SectionBGSAP34();
    SectionBGSAP35();
    SectionBGSAP36();
    // SLIDE 10
    SectionBGSAP37();
    SectionBGSAP38();
    SectionBGSAP39();
    // SLIDE 1
    SectionBGSAP40();
};
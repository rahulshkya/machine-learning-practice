gsap.from("#page1 #BOX",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page2 #BOX",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #BOX",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 #BOX",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:"#page3 #BOX"
})
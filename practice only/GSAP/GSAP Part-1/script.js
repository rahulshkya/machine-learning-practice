// gsap.from("h1",
//     {
//         opacity:0,
//         duration:2,
//         y:20,
//         delay:0.5,
//          stagger:0.4
//         // #ek ek krke heding ko chalane ka kaam
//     }
// )
// gsap.to("#box",
//     {
//         x:800,
//         duration:2,
//         delay:0.5,
//         rotate:360,
//         repeat:1,
//         yoyo:true
//     }
// )

// gsap.to("#box",{
//     x:800
//     ,rotate:360,
//     duration:2, 
//     delay:1
// })
// gsap.to("#box1",{
//     x:800
//     ,rotate:360,
//     backgroundColor:"yellow",
//     duration:2,
//     delay:1.7
// })
// gsap.to("#box2",{
//     x:800
//     ,rotate:360,
//     duration:2,
//     delay:2.5,
//     scale:0.5
// })

let tl =gsap.timeline()

// tl.to("#box",{
//     x:800
//     ,rotate:360,
//     duration:2,
//     delay:1
// })
// tl.to("#box1",{
//     x:800
//     ,rotate:360,
//     duration:2,
    
// })
// tl.to("#box2",{
//     x:800
//     ,rotate:360,
//     duration:2,
    
// })

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.4
})
tl.from("h1",{
    y:-20,
    opacity:0,
    duration:0.4,
    scale:0.2
})
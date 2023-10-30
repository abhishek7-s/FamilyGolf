var crsr = document.querySelector("#cursor")
var crsr1 = document.querySelector("#bgcrsr")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y +  "px"
    crsr1.style.left = dets.x - 150 +"px"
    crsr1.style.top = dets.y - 150 +"px"
})











gsap.to("#nav" , {
    backgroundColor: "#000",
    duration:0.75,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
} )


gsap.to("#main",{
    backgroundColor:"#000",

    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -90%",
        end : "top -100%",
        // markers:true,
        scrub:5
    }
})
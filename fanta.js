var tl = gsap.timeline({scrollTrigger:{
    trigger: "two",
    start: "50% 140%",
    end:"50% 50%",
    scrub: true,
  //  markers: true,

}})

tl.to("#fanta",{
    y:670,
     x:300
    
},'orange')
tl.to("#slice",{
    y:610,
    x:620
},'orange')

tl.to("#org",{
    y:570,
   x:-180
},'orange')

tl.to("#lea",{
    y:570,
    x:800,
},'orange')






  var tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#cola",
    start: "30% 200%",
    scrub:true,
    //markers:true,
  }})

  
tl2.from("#cola",{
    x:150,
    rotate:45,
  },'color')
  tl2.from("#lem",{
    x:-400,

  },'color')

  tl2.from("#lem1",{
    x:200,
  },'color')

  tl2.from('#pepsi',{
    y:100,
    rotate:25
  })
 

 
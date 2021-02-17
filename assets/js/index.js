$(document).ready(function(){

    $(window).on('load',()=>{
        $('#pageloader').delay(3800).fadeOut('slow')
        $('body').delay(4000).css({'overflow':'visible'})
    })

    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");     
    });
    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });

    $('.clk-me').click(()=>{
        $(".sidemenu").removeClass("active");
    })

    $(window).scroll(()=>{
        var sc=$(window).scrollTop()
        if(sc>15){
            $(".header").addClass("sticky")
        }
        else{
            $(".header").removeClass("sticky")
        }

        if(sc>=30){
            $('#Hm').css('color','#41e296')
        }
        if(sc>=500){
            $('#Hm').css('color','white')
            $('#Abt').css('color','#41e296')
        }
        if(sc>=1080){
            $('#Abt').css('color','white')
            $('#Skl').css('color','#41e296')
        }

        if(sc>=1680){
            $('#Skl').css('color','white')
            $('#Wrk').css('color','#41e296')
        }

        if(sc>=2320){
            $('#Wrk').css('color','white')
            $('#Prj').css('color','#41e296')
        }

        if(sc<2320){
            $('#Prj').css('color','white')
        }
        if(sc<1680){
            $('#Wrk').css('color','white')
        }
        if(sc<1080){
            $('#Skl').css('color','white')
        }
        if(sc<500){
            $('#Abt').css('color','white')
        }
        if(sc<30){
            $('#Hm').css('color','white')
        }

        


    })
})


let gh=document.getElementById('github-link'),il=document.getElementById('insta-link'),lk=document.getElementById('linkedin-link')

gh.addEventListener('click',()=>{
    // window.location.href=""
    window.open('https://github.com/narutonaresh','_blank')
})
lk.addEventListener('click',()=>{
    // window.location.href=""
    window.open('https://www.linkedin.com/in/dnareshkumar/','_blank');

})
il.addEventListener('click',()=>{
    window.open('https://www.instagram.com/naruto_naresh_/','_blank');
})


const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 800,
    reset: true,
    easing: 'ease-in' 
})

sr.reveal('.hero-text', {delay: 100,viewOffset: {
    top: 200,
    right: 10,
    bottom: 10,
    left: 10,
}})

sr.reveal('#my-image', {delay: 200,viewOffset: {
    top: 200,
    right: 10,
    bottom: 10,
    left: 10,
}})

sr.reveal('#Arcreactor', {delay: 200, viewOffset: {
    top: 200,
    right: 10,
    bottom: 10,
    left: 10,
}})
sr.reveal('.gap', {delay: 300,origin:'right',viewOffset: {
    top: 200,
    right: 10,
    bottom: 10,
    left: 10,
}})
sr.reveal('.download-button', {delay: 200})
sr.reveal('.mh-skills-item', {},1000)
sr.reveal('.mh-work-item', {},1000)
// sr.reveal('.grid-item', {},1000)


function takeme(path){
    if(path==="1"){
        window.open('https://github.com/NarutoNaresh/Scribbly','_blank')
    }
    else if(path==="2"){
        window.open('https://github.com/NarutoNaresh/Bmi_calculator','_blank')
    }
    else if(path==="3"){
        window.open('https://github.com/NarutoNaresh/quizzy','_blank')
    }
    else if(path==="4"){
        window.open('https://github.com/NarutoNaresh/W-spammer','_blank')
    }
    else if(path==="5"){
        window.open('https://github.com/NarutoNaresh/Asteroid-Hit','_blank')
    }
    else if(path==="6"){
        window.open('https://github.com/NarutoNaresh/project-potato','_blank')
    }

}

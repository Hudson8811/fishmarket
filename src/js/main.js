window.imageFolderPath='../';
if(!document.location.href.includes('localhost')){
    if(document.location.href.includes('github')){

    }
    else{
        window.imageFolderPath='/local/templates/skyfish/';
    }
}

//libs
@@include("./libs/jquery-3.7.0.min.js")
@@include("./libs/jquery.fancybox.min.js")
@@include("./libs/swiper-bundle.min.js")
@@include("./libs/stroll.min.js")
@@include("./libs/gsap.min.js")
@@include("./libs/ScrollTrigger.min.js")
@@include("./libs/hystmodal.min.js")
@@include("./libs/jquery.mask.min.js")
@@include("./libs/jq-ui.min.js")
@@include("./libs/jq-ui-touch-punch.min.js")
@@include("./libs/select2.min.js")
@@include("./libs/vanillaTextMask.js")
@@include("./libs/popper.min.js")
@@include("./libs/tippy.umd.min.js")
//my files
@@include("./import/main.js")
@@include("./import/components.js")
@@include("./import/modules.js")
@@include("./import/animation.js")
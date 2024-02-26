@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/preloader/preloader.js")
@@include("../../blocks/modules/pages/society/society-awards/society-awards.js")
@@include("../../blocks/modules/l-walk/l-walk.js")
@@include("../../blocks/modules/l-map/l-map.js")

document.addEventListener("DOMContentLoaded", () => {
    societyAwardsSliderInit();
    lWalkSliderInit();
    lMapInit();
})
@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/preloader/preloader.js")
@@include("../../blocks/modules/pages/society/society-awards/society-awards.js")
@@include("../../blocks/modules/pages/career/career-photos/career-photos.js")
@@include("../../blocks/modules/pages/team/team-photos/team-photos.js")
@@include("../../blocks/modules/pages/team/team-employees/team-employees.js")
@@include("../../blocks/modules/l-walk/l-walk.js")
@@include("../../blocks/modules/l-map/l-map.js")
@@include("../../blocks/modules/l-vacancies/l-vacancies.js")

document.addEventListener("DOMContentLoaded", () => {
    societyAwardsSliderInit();
    lWalkSliderInit();
    lVacanciesSliderInit();
    careerPhotosSliderInit();
    teamPhotosSliderInit();
    teamEmployeesSliderInit();
    lMapInit();
})
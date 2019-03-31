import lodash from "lodash";

const SWITCH_POS = 120;

const checkHeader = lodash.throttle(() => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > SWITCH_POS) {
    document.querySelector("#sticky-header").classList.add("sticky-header-visible");
    document.querySelector("#sticky-header").classList.remove("sticky-header-hidden");
  } else {
    document.querySelector("#sticky-header").classList.add("sticky-header-hidden");
    document.querySelector("#sticky-header").classList.remove("sticky-header-visible");
  }
}, 400);

export default checkHeader;
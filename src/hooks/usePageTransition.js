import { useNavigate } from "react-router-dom";
import { animateIn, animateOut } from "../components/TransitionOverlay";
import { gsap } from "gsap";

export function usePageTransition() {
  const navigate = useNavigate();

  const navigateTo = async (path) => {
    if (path === window.location.pathname) return;

    await animateIn();
    navigate(path);

    // Give React time to mount the new page, then reveal it
    requestAnimationFrame(() => {
      animateOut().then(() => {
        gsap.set(".block", { visibility: "hidden" });
      });
    });
  };

  return { navigateTo };
}

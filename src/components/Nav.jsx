import { usePageTransition } from "../hooks/usePageTransition";

export default function Nav() {
  const { navigateTo } = usePageTransition();

  return (
    <nav>
      <div className="logo">
        <button onClick={() => navigateTo("/")}>code</button>
      </div>
      <div className="nav-items">
        <button onClick={() => navigateTo("/")}>home</button>
        <button onClick={() => navigateTo("/resume")}>resume</button>
        <button onClick={() => navigateTo("/project")}>project</button>
      </div>
    </nav>
  );
}

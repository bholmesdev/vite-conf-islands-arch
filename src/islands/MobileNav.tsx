import './nav.css'
import { useState } from "preact/hooks";

// source: https://bholmes.dev/blog/accessible-show-hide-animations/

export default function DropdownExample() {
  const [expanded, setExpanded] = useState(false);
  const focusFirstDropdownLink = ({ target }: { target: any }) => {
	// if we apply this function to our dropdown,
	// the "target" should be a reference to the dropdown itself!
    target.firstElementChild.focus();
  };
  return (
    <>
      <nav>
        <button
          className="toggle-dropdown mobile-bp"
          aria-expanded={expanded}
          aria-haspopup="true"
          aria-label="Nav toggle"
          onClick={() => setExpanded(!expanded)}
        >
          Navigation
        </button>
        <div
          className={`dropdown mobile-bp ${expanded ? 'expanded' : ''}`}
          onTransitionEnd={focusFirstDropdownLink}
        >
          <NavLinks />
        </div>
      </nav>

    </>
  );
}

function NavLinks() {
  return (
    <>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    </>
  )
}
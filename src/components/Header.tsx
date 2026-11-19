import "./Header.css"
import { useState } from "react"

function Header() {
    let [dropdown, setDropdown] = useState(false);
    return (
        <>
            <header>
                <span className="header-content">
                    <a className="home-icon" href="/">
                        Home</a>
                    <a className="home-option" href="#about">
                        About Me</a>
                    <a className="home-option" href="#projects">
                        Projects </a>
                    <a className="home-option right" href="/RAMAH_RESUME_2026.pdf">
                        Resume</a>
                    <a className="right icon" href="mailto:hello@jacobramah.com" title="Email">
                        <svg
                        width="1.5rem"
                        height="1.5rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ scale: 1.1 }}
                        aria-hidden="true"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </a>
                    <a className="icon icon-delay" href="https://github.com/Blocky7277" title="Github">
                        <svg xmlns="http://w3.org" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                            </a>
                    <a className="icon icon-delay2" href="https://www.linkedin.com/in/jacob-ramah/" title="Linkedin">
                        <svg
                        width="1.5rem"
                        height="1.5rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                        <button className="menu icon dropdown" aria-expanded={dropdown} onClick={() => setDropdown(!dropdown)} title="Nav Menu">
                            <svg
                            width="1.5rem"
                            height="1.5rem"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            >
                                <line x1="3" y1="5" x2="21" y2="5" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="19" x2="21" y2="19" />
                            </svg>
                        </button>
                </span>
                    <nav className={"dropdown-content " + (dropdown ? "open" : "")}>
                        <div className="inner">
                            <a href="#about" className="home-option-mobile">About</a>
                            <a href="#projects" className="home-option-mobile">Projects</a>
                        </div>
                </nav>
            </header>
        </>
    )
}

export default Header

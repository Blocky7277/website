import "./Header.css"

function Header() {
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
                    <a className="home-option icon" href="mailto:jacob612r+outreach@gmail.com" title="Email">
                        <svg width="1.5rem" height="1.5rem" style={{scale: 1.1}} stroke="currentColor" strokeWidth="1">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                    <a className="home-option icon-delay" href="https://github.com/Blocky7277" title="Github">
                        <svg xmlns="http://w3.org" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                            </a>
                    <a className="home-option icon-delay2" href="https://www.linkedin.com/in/jacob-ramah/" title="Linkedin">
                        <svg width="1.5rem" height="1.5rem" stroke="currentColor" strokeWidth="1">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <button className="right menu icon-delay" title="Nav Menu">
                        <svg style={{scale: 1.4}}width="1.5rem" height="1.5rem" stroke="currentColor" strokeWidth="1">
                            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="currentColor" />
                        </svg>
                    </button>
                </span>
            </header>
            <aside>
                <div>
                    <li>
                        <a href="#about"></a>
                        <a href="#projects"></a>
                    </li>
                </div>
            </aside>
        </>
    )
}

export default Header
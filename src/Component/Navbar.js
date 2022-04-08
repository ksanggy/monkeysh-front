import { FaLaptopCode, FaTerminal, FaArchive } from 'react-icons/fa';
import { BiGitCommit, BiGitMerge, BiGitPullRequest } from 'react-icons/bi';



function Navbar(props) {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark py-2 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3 text-warning" href="/">
                        <FaTerminal />Monkeysh-Blog
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex flex-row align-items-center p-2">
                                <FaLaptopCode />
                                <a className="nav-link text-white" aria-current="location" href="/">Home</a>
                            </li>
                            <li className="nav-item d-flex flex-row align-items-center p-2">
                                <BiGitCommit />
                                <a className="nav-link text-white" href="/about">About</a>
                            </li>
                            <li className="nav-item d-flex flex-row align-items-center p-2">
                                <BiGitMerge />
                                <a className="nav-link text-white" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item d-flex flex-row align-items-center p-2">
                                <FaArchive />
                                <a className="nav-link text-white" href="/blogs">Blogs</a>
                            </li>
                            <li className="nav-item d-flex flex-row align-items-center p-2">
                                <BiGitPullRequest />
                                <a className="nav-link text-white" href="/contact-me">Contact Me</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a href='/login' className='btn btn-outline-light bg-warning text-dark'>
                                <i className='fa fa-sign-in me-1'/> Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    );
}

export default Navbar;
import { useLocation } from "react-router";
export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="https://github.com/Divyadharsh/kanbas_project_team3_frontend.git" className="nav-link">
                    Team GitHub 
                </a>
            </li>
        </ul>
    );
}

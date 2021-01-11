import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Francisco Felipe de Brito Correia durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC6f7eN1TUIqztgjcsJxgsoA" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/felipe-correia-08b50147/" target="_new">
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/felip.correia/?hl=pt-br" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
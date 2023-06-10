import { SiThemoviedatabase } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './footer.css';

const Footer = () => {
    const RedirectToTMDB = () => {
        const Link = 'https://www.themoviedb.org/?language=pt-BR';
        window.open(Link, '_blank');
    }

    const RedirectToApiDocTMBD = () => {
        const Link = 'https://developer.themoviedb.org/docs/append-to-response';
        window.open(Link, '_blank');
    }

    return (
        <div>
            <footer id='footer'>
                <p>
                    © 2023 Pesquisar Filmes, PF
                </p>
                <div id='icons'>
                    <SiThemoviedatabase onClick={RedirectToTMDB} />
                    <TbApi onClick={RedirectToApiDocTMBD} />
                </div>
            </footer>
        </div>
    )
}

export default Footer
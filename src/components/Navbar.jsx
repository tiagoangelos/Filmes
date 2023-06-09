import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

import './NavBar.css';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault(); //no scroll in the page!
        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <div>
            <nav id='navbar'>
                <h2>
                    <Link to='/'><BiCameraMovie />Pesquisar Filmes</Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' 
                        placeholder='Pesquisar Filme' 
                        onChange={(event) => setSearch(event.target.value)}
                        value={search}
                    />
                    <button type='submit'><BiSearchAlt2 /></button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
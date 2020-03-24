import React, { useState } from 'react';

import './styles.css';

function DevItem({ dev }) {

    const [github_username, setGitbubUsername] = useState('');
    const [techs, setTechs] = useState('');


    function editDev(devSelect) {
        console.log('Edit: '+devSelect);
        setGitbubUsername(devSelect);
    }

    function deleteDev(dev) {
        //console.log('Delete: '+dev);
    }

    return (
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https:/github.com/${dev.github_username}`} target="_blank" rel="noopener">Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;
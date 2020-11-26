import React, {Component} from 'react'


function Header(params) {
    
    return(
        <header>
            <img src={require('cat.jpg')} alt='cat'/>
            <p>Meme Generator</p>
        </header>
    )

}

export default Header;
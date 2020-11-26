import React, {Component} from 'react'


class Generator extends Component{

    constructor(){
        super()

        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    }

    render(){
        return(
            <h2>MEME GENERATOR</h2>
        )
    }
}


export default Generator
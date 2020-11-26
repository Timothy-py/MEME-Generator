import React, {Component} from 'react'
import axios from 'axios'


class Generator extends Component{

    constructor(){
        super()

        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response=>
            response.json()
        )
        .then(response=>{
            const {memes} = response.data
            console.log("All Memes Here")
            console.log(memes[0])
            this.setState({
                allMemeImgs: memes
            })
        })
        .catch((err)=>{
            console.log(`NO response ${err}`)
        })
    }

    render(){
        return(
            <h2>MEME GENERATOR</h2>
        )
    }
}


export default Generator
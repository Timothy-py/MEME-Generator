import React, {Component} from 'react'
import axios from 'axios'


class Generator extends Component{

    constructor(){
        super()

        this.state = {
            topText: '',
            bottomText: '',
            randomImg: '',
            allMemeImgs: []
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.generator = this.generator.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response=>
            response.json()
        )
        .then(response=>{
            const {memes} = response.data
            this.setState({
                allMemeImgs: memes
            })
        })
        .catch((err)=>{
            console.log(`Error: ${err}`)
        })
    }

    changeHandler(event){
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    generator(event){
        event.preventDefault()
        let randomNum = parseInt(Math.random()*(this.state.allMemeImgs.length))
        this.setState({
            randomImg: this.state.allMemeImgs[randomNum].url
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.generator}>
                    <label>
                        <input 
                        type="text" 
                        name="topText" 
                        value={this.state.topText} 
                        onChange={this.changeHandler}
                        placeholder="Top Text" />
                    </label>
                    <label>
                        <input 
                        type="text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange={this.changeHandler}
                        placeholder="Bottom Text" />
                    </label>

                    <button>Gen</button>
                </form>

                <div>
                    <img src={this.state.randomImg} />
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}


export default Generator
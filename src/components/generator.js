import React, {Component} from 'react'
import axios from 'axios'
import './generator.css'


class Generator extends Component{

    constructor(){
        super()

        this.state = {
            topText: '',
            bottomText: '',
            randomImg: '',
            allMemeImgs: [],
            isGenerating: true
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.generator = this.generator.bind(this)
    }

    componentDidMount(){
        this.setState({isGenerating: true})
        fetch('https://api.imgflip.com/get_memes')
        .then(response=>
            response.json()
        )
        .then(response=>{
            const {memes} = response.data
            this.setState({
                allMemeImgs: memes,
                isGenerating: false
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
            <div className="generator">
                <form onSubmit={this.generator}>
                    
                    <input 
                    type="text" 
                    name="topText" 
                    value={this.state.topText} 
                    onChange={this.changeHandler}
                    placeholder="Top Text" />
                    <br/>
                    <input 
                    type="text" 
                    name="bottomText" 
                    value={this.state.bottomText} 
                    onChange={this.changeHandler}
                    placeholder="Bottom Text" />

                <br/>
                <button>Generate</button>
                </form>

                <div className="generated">
                    {
                        (this.state.isGenerating) ? <p>Generating...</p> : <img src={this.state.randomImg} />
                    }
                    <div className="genTexts">
                        <h2 className="topText">{this.state.topText}</h2>
                        <h2 className="bottomText">{this.state.bottomText}</h2>
                    </div>
                </div>
            </div>
        )
    }
}


export default Generator
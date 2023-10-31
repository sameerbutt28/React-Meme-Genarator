import memesData from "../components/memesdata"
import React, { useState } from "react"
export default function NewImg() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <div className="inputforms">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="forminput"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="forminput"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="btnform" >
                    <button
                        className="formbutton"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="memeimage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
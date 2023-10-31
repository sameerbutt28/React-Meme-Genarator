import Image from "../images/trollface.png"
export default function Header(){
    return(
        <div className="header">
            <div className="subheader">
                <img className="trollimg" src={Image}/>
              <h1 className="title">Meme Generator</h1>  
            </div>

<h3 className="developername">Sameer-the Butt</h3>
        </div>
    )
}
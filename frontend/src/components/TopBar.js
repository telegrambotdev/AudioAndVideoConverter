import { Link } from 'react-router-dom';

const topBar = () => {

    function myFunction(e) {
        e.preventDefault();
        let x = document.getElementById("top_bar");
        console.log(x)
        console.log(x.className)
        if (x.className === "top") {
          x.className += " mobile";
          console.log('class changed to')
          console.log(x.className)
          document.getElementById('coffee').style.display = 'none';
        } else {
          x.className = "top";
          document.getElementById('coffee').style.display = 'block';
        }
      }

    return (
        <div id="top_bar" className="top">
            <Link className="hamburger" onClick={myFunction}> <i className="fa fa-bars"></i></Link>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="filetypes">Filetypes</Link>
            <Link to="yt">YT downloader</Link>
            {/* <Link to="trimmer">Audio Trimmer</Link>
            <Link to="contact">Contact</Link>
            <Link to="game">Game 1</Link>
            <Link to="game2">Game 2</Link>
            <Link to="chat">Chat</Link> */}
            <div id='coffee'>
                <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="fezcgrfkb" data-color="#000000" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#fff" data-font-color="#fff" data-coffee-color="#fd0" ></script>
            </div>
        </div>
    )
}
export default topBar;
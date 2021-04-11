import React, {useState} from "react";

function Footer() {

  const [isSubmit, setSend] = useState(false);

  function handleClick(event) {
    setSend(true);
    event.preventdefalt();

  }

    return (
      <section id="footer">
        <div className="get-in-touch">
          <h3>Get In Touch</h3>
          <div className="get-in-touch-connect-form">
            <form>
                <h1>We'd 🤍 to connect...</h1>
                <input type="text"  placeholder="Your Name" name="Name"  />
                <input type="email" placeholder="Email address" name="email" />
                <textarea type="text" placeholder="Your Message..." name="message" />
                <button className="btn footer-btn" type="submit" onClick={handleClick}>Send</button><br />
              {isSubmit && <label type="text" name="sucess-message" >Thank you for contacting us, we will get back to you soon!</label> }
            </form>
          </div>
          <div className="get-in-touch-contact"> 
            <p><i className="fas fa-map-marker-alt fa-2x"></i><br />Team West <br /> 265, Yorkland Blvd, North York, ON M2J 1S5.</p><hr /> 
            <a href="mailto:homefood@gmail.com"><i className="far fa-envelope fa-2x"></i></a>
            <a href="https://www.overleaf.com/read/ytqsjhsdztqq" target="_blank" rel="noreferrer"><i className="fas fa-file-word fa-2x"></i></a>
            <a href="https://sites.google.com/view/homefooddeliveryservies/home" target="_blank" rel="noreferrer"><i className="fab fa-google fa-2x"></i></a>
            <a href="https://github.com/simranjots/CapStone_Project" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
            <a href="https://www.youtube.com/watch?v=o7eYUkqTahk" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-2x"></i></a>
            <a href="#home"><i className="fas fa-angle-up fa-2x"></i></a>
            <div className="copyright-text"><p>&copy; Team West 2021</p></div>
        </div>
      </div>
      </section>
    );
}


export default Footer;
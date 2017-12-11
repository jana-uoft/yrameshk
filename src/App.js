import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Contact from './Contact';
import ImageO1 from './ramesh/01.jpg';
import ImageO2 from './ramesh/02.jpg';
import ImageO3 from './ramesh/03.jpg';
import ImageO4 from './ramesh/04.jpg';
import ImageO5 from './ramesh/05.jpg';
import ImageO6 from './ramesh/06.jpg';
import ImageO7 from './ramesh/07.jpg';
import ImageO8 from './ramesh/08.jpg';
import ImageO9 from './ramesh/09.jpg';
import Image10 from './ramesh/10.jpg';
import Image11 from './ramesh/11.jpg';
import Image12 from './ramesh/12.jpg';
import Image13 from './ramesh/13.jpg';
import Image14 from './ramesh/14.jpg';
import Image15 from './ramesh/15.jpg';
import Image16 from './ramesh/16.jpg';
import Image17 from './ramesh/17.jpg';
import Image18 from './ramesh/18.jpg';
import Image19 from './ramesh/19.jpg';
import Image20 from './ramesh/20.jpg';
import Image21 from './ramesh/21.jpg';
import Image22 from './ramesh/22.jpg';
import Image23 from './ramesh/23.jpg';
import Image24 from './ramesh/24.jpg';
import Image25 from './ramesh/25.jpg';
import Image26 from './ramesh/26.jpg';
import Image27 from './ramesh/27.jpg';
import Image28 from './ramesh/28.jpg';




const images = [
  ImageO1,
  ImageO2,
  ImageO3,
  ImageO4,
  ImageO5,
  ImageO6,
  ImageO7,
  ImageO8,
  ImageO9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isGalleryOpen: false
    }
  }



  showImageGallery = (photoIndex) => {
    this.setState({isGalleryOpen: true, photoIndex});
  }


  renderImage = (image, index) => {
    return (
      <article className="thumb" key={index}>
        <a className="image" style={{backgroundImage: "url("+image+")"}} style={{cursor: 'pointer'}} onClick={()=>this.showImageGallery(index)}>
          <img src={image} alt="ASD" style={{cursor: 'pointer'}} onClick={()=>this.showImageGallery(index)}/>
        </a>
       
        <h2>"ASDASDDSSD"</h2>
      </article>
    );
  }



  render() {


    const header = (
      <header id="header">
        <h1><a href=""><strong>Ramesh Yoha</strong> | Dreamographers</a></h1>
        <nav>
          <ul>
            <li><a href="#footer" className="icon fa-info-circle">About Ramesh</a></li>
          </ul>
        </nav>
      </header>
    );


    const aboutMe = (
      <div>
        <section>
          <h2>Photography is the beauty of Life Captured.</h2>
          <p>The passion towards Photography made me go around the <span role="img" aria-label="globe">🌍</span> and capture the moments with one extra <span role="img" aria-label="eyes">👁️/📸</span>. Started shooting since 2011 and never stopped. Loves to shoot Landscapes, Portaits, Creative and Candid. Covers local events as well. Still learning new things everyday.</p>
        </section>
        <section>
          <h2>Follow me on ...</h2>
          <ul className="icons">
            <li><a href="https://twitter.com/RameshYoha" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/Ramesh.K.Yoha" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/yrameshk" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/yrameshk26" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.youtube.com/channel/UCwGH1NcE7D4LNV2NHDnBNrg" className="icon fa-youtube" target="_blank" rel="noopener noreferrer"><span className="label">YouTube</span></a></li>
            <li><a href="https://www.linkedin.com/in/ramesh-yoha" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">LinkedIn</span></a></li>
          </ul>
        </section>
        <p className="copyright">
          &copy; Ramesh Yoha | &copy; Dreamographers
        </p>
      </div>
    );


    const footer = (
      <footer id="footer" className="panel">
        <div className="inner split">
          {aboutMe}
          <Contact/>
        </div>
      </footer>

    );


    return (
      <div id="wrapper">
        {header}
        <div id="main">{images.map(this.renderImage)}</div>
        {footer}

        {this.state.isGalleryOpen &&
          <Lightbox
            mainSrc={this.state.photoIndex < 9 ? "http://yrameshk.myddns.me/~Ramesh/user/pages/01.home/0"+(this.state.photoIndex+1).toString()+".jpg" : "http://yrameshk.myddns.me/~Ramesh/user/pages/01.home/"+(this.state.photoIndex+1).toString()+".jpg"}
            nextSrc={images[(this.state.photoIndex + 1) % images.length].url}
            prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length].url}
            onCloseRequest={() => {
              this.setState({ isGalleryOpen: false });
            }}
            onMovePrevRequest={() => this.setState({
                photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
            })}
            onMoveNextRequest={() => this.setState({
                photoIndex: (this.state.photoIndex + 1) % images.length,
            })}
          />
        }

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import $ from "jquery";
import Lightbox from 'react-image-lightbox';
import Contact from './Contact';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      photoIndex: 0,
      isGalleryOpen: false
    }
  }

  componentWillMount = () => {
    this.fetchPhotos()
    .then((result)=>{
      let images = [];
      for (let data of result.data){
        console.log(data)
        if (data.carousel_media) {
          for (let pic of data.carousel_media) {
            if (pic.images)
              images.push({url: pic.images.standard_resolution.url, caption: data.caption.text})
          }
        } else {
          images.push({url: data.images.standard_resolution.url, caption: data.caption.text})
        }
      }
      this.setState({ images });
    })
  }


  showImageGallery = (photoIndex) => {
    this.setState({isGalleryOpen: true, photoIndex});
  }


  renderImage = (image, index) => {
    const imageTitle = image.caption.split("#")[0];
    return (
      <article className="thumb" key={index}>
        <img src={image.url} alt={imageTitle} style={{cursor: 'pointer'}} onClick={()=>this.showImageGallery(index)}/>
        <h2>{image.caption}</h2>
      </article>
    );
  }


  fetchPhotos = () => {
    return $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=508727293.1677ed0.69d96553324f4468917af711a368260b&count=20',
        type: 'GET',
        dataType: "jsonp"
    });
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
        <div id="main">{this.state.images.map(this.renderImage)}</div>
        {footer}

        {this.state.isGalleryOpen &&
          <Lightbox
            mainSrc={this.state.images[this.state.photoIndex].url}
            nextSrc={this.state.images[(this.state.photoIndex + 1) % this.state.images.length].url}
            prevSrc={this.state.images[(this.state.photoIndex + this.state.images.length - 1) % this.state.images.length].url}
            onCloseRequest={() => {
              this.setState({ isGalleryOpen: false });
            }}
            onMovePrevRequest={() => this.setState({
                photoIndex: (this.state.photoIndex + this.state.images.length - 1) % this.state.images.length,
            })}
            onMoveNextRequest={() => this.setState({
                photoIndex: (this.state.photoIndex + 1) % this.state.images.length,
            })}
          />
        }

      </div>
    );
  }
}

export default App;

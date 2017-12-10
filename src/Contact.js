import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false
    }
  }

  onChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  }


  sendMessage = (event) => {
    document.getElementById('sendMessage').click();
    window.history.back();
  }

  cancelMessage = () => {
    this.setState({       
      name: "",
      email: "",
      message: "",
      sent: false
    });
  }


  render() {
    return (
      <div>
        <section>
          <h2>Get in touch</h2>
          <form onSubmit={this.sendMessage}>
            <div className="field half first">
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Name" 
                onChange={(event)=>this.onChange(event, "name")} 
                required={true}

              />
            </div>
            <div className="field half">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email" 
                onChange={(event)=>this.onChange(event, "email")}
                required={true}
              />
            </div>
            <div className="field">
              <textarea 
                name="message" 
                id="message" 
                rows="4" 
                placeholder="Message" 
                onChange={(event)=>this.onChange(event, "message")}
                required={true}
              />
            </div>
            <ul className="actions">
              <li>
                <a id="sendMessage" href={`mailto:ramesh.yohalingam@gmail.com?Subject=From: ${this.state.email}&body=${this.state.message}`} target="_blank">
                  <input type="submit" value="Send" className="special"/>
                </a>
              </li>
              <li><input type="reset" value="Reset" onClick={this.cancelMessage}/></li>
            </ul>
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
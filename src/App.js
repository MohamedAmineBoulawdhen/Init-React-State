import { Component } from "react";
class App extends Component {
  state = {
    person: {
      fullName: "Mohamed Amine Boulawdhen",
      bio: "bio",
      imgSrc:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F03%2FFree-cute-animal-wallpaper-HD.jpg&f=1&nofb=1&ipt=3304485087b353ec84eb7cb2d6eda9267b02e3e53570871c191811525a494fec&ipo=images",
      profession: "Developer",
    },
    show: true,
    time: 0,
  };
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    this.startTime = Date.now();
    this.intervalId = setInterval(() => {
      this.setState({
        time: Date.now() - this.startTime,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Change state</button>
        {this.state.show && (
          <div>
            <p>Name: {this.state.person.fullName}</p>
            <p>Bio: {this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
            <center>
              <img
                src={this.state.person.imgSrc}
                alt="Profile"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              />
            </center>
          </div>
        )}
        <p>Time since last mount: {this.state.time} ms</p>
      </div>
    );
  }
}

export default App;

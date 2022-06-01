import React from "react";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Cable from "./Dropwire";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      trigger: false,
      browser: name,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    this.handleScroll();
  };
  componentWillUnmount = () => {
    clearTimeout(this.check);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname !== "/") {
          this.setState({ trigger: true });
        }
        if (this.props.pathname === "/edu") {
          //  window.scroll(0, this.edu.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        style={{
          overflow: "hidden",
          //margin: "5px",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <a href="https://www.quora.com/unanswered/Is-Corpus-Linguistics-division-of-labors-efficiency-the-reason-for-all-laws">
          Jester.com.co
        </a>
        <br />
        {/*<a
          href="https://realecon.quora.com"
          style={{
            float: "right",
            width: `calc(${Math.min(600, this.state.width)}px - 70%)`
          }}
        >
          
        </a>*/}
        <h2>Is petty sales tax under $10k a gift tax exemption report?</h2>I
        will not let you get away with anything I cannot
        <br />
        <Cable
          style={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: "250px",
            height: "auto"
          }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/1lw8nj2s9qb3tiy/Screen%20Shot%202022-05-23%20at%207.28.40%20PM.png?raw=1"
          }
          float={"left"}
          title="The Young Turks"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <Cable
          onError={handleScollImgError}
          style={{ backgroundColor: "white" }}
          //img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.youtube.com/embed/7Jy9JyrukCY?start=135"
          }
          float={"right"}
          title="1800-1913 nearly constant GDP/p - https://youtu.be/7Jy9JyrukCY?t=135"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <a href="https://www.quora.com/Can-1099-workers-use-their-expenses-at-the-convenience-of-themselves">
          Can 1099 workers use their expenses at the convenience of themselves?
        </a>
        <br />
        <br />
        <a href="https://quora.com/nick-carducci">Propaganda Research</a>
      </div>
    );
  }
}

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
        Doesn’t ‘retarded’ mean stupid? Don’t ableists hate being called stupid?
        {space}
        <a href="https://reddit.com/r/2020haters">
          Aren’t anti-vaxxers mentally ill? Haven’t we proven vaccines save
          lives
        </a>
        ?
        <br />
        <br />
        "'Oh, you neo-marxist scum, in the situation of war I'd be the first one
        to execute you in the name of the state for high treason.'" Irratically,
        u/Narcy_Boy continues "he explicitly asked me if I was willing to die
        for my country or European Union or whatever. I said that I woundn't,
        because I don't believe in arbitrary patriotism or nationalism."
        <br />
        <br />I stopped reading and just started looking after you says common
        sense. That’s how we’re here. If you wasn’t right, I wouldn’t have even
        {space}
        <i>looked</i>
        {space}at it, maintenance.
        {space}
        <i>Anyways, neo-_ is akin to anti-_</i>, so this Marxist would use the
        state to hang when we have{space}
        <a href="https://thetax.party">Jersey Shore Premium</a>
        {space}
        Outlets’ usufruct without the state (+) with horizontal slaying.{space}
        <i>You’re ideating in reason</i>
        {space}I would{space}
        <a href="https://reddit.com/r/mentalhealthsupport">mediate</a>
        <br />
        <br />
        Are you saying common sense is draft dodging? History would say no,
        common sense is to do exactly what you complained about.
        {/**if you boycotting and not building you dying
        
        I am an infrastructure trust fund baby *who would like* [*NYC $10k
        apartment*](https://landlordliquidity.quora.com) *outright* living with
        mum at 30 trying to boycott credit on my website forums.

        //brainscan.info "green light, [correlated] politics" russel brand guest
        */}
        <br />
        <br />
        Pass me the ham{space}
        <i>
          (Isn’t charging the pot how it becomes expensive in the first place?
          Idk, JHU failed my{space}
          <a href="https://marginalism.uk">game theory ideas</a>.)
        </i>
        <h4
          style={{
            margin: "4px 0px"
          }}
        >
          Mimetic defense{space}
          <a href="https://reddit.com/r/moralanarchism">n</a>ich
          <a href="https://unemploymentinsurance.quora.com/If-you-are-receiving-unemployment-benefits-are-you-required-to-look-for-work-1">
            e
          </a>
        </h4>
        <a href="https://scopebook.quora.com">Timeclock unlock</a>
        {space}don’t self stunt price taking insurance nor exemption by labor
        demand of other markets’ substitutive inelasticity points to elastic
        marginal utility towards{space}
        <a href="https://open.spotify.com/show/4xv7K0FK3KFy2d2t085LoN">
          an unnatural
        </a>
        {space}marginal product diminishing no[t o]ne[ valued-utility, marginal
        before producer surplus loss of division of labor and amortized leisure
        utilization for everyone{space}(
        <a href="https://github.com/nickcarducci/mastercard-backbank/blob/main/src">
          the answer is 4/2 Micro/Macro
        </a>
        )] by fixed startup costs but for installments of{space}
        <a href="https://valueeconomics.quora.com">overhead labor</a>.
        <br />
        <br />
        <a href="https://ajp.psychiatryonline.org/doi/10.1176/appi.ajp.163.1.27">
          How can you self-harm your family but not yourself
        </a>
        ? Convicted NCAA weed smoking for deprecation{space}
        <a href="https://www.quora.com/unanswered/Is-the-incompetence-to-stand-trial-the-issue-of-racketeering">
          let alone performance
        </a>
        ?
        <br />
        Financial markets and institutions cannot gain principal from interest
        other than the seller of the collateral or debenture.
        <br />
        <br />
        International non profit cannot be{space}
        <a href="https://www.quora.com/unanswered/Would-modern-day-drug-gangs-trade-peacefully-if-they-were-only-prosecuted-insofar-as-to-open-source-name-and-so-on-to-allow-reviews">
          confiscated
        </a>
        {space}like for-
        <a href="https://occupywallst.quora.com/Who-is-in-the-tea-party-1">
          purpose 501c3
        </a>
        .
        <br />
        <br />
        Chelsea Manning just hurt image.
        <br />
        <br />
        <a
          href="https://truncatedwholesaletax.com"
          style={{
            float: "right",
            width: `calc(${Math.min(600, this.state.width)}px - 90%)`
          }}
        >
          <Cable
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "auto"
            }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dropbox.com/s/6movjouiifpm79h/waluigi.png?raw=1"
            }
            float={null}
            title="https://truncatedwholesaletax.com"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
        </a>
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
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Is-the-Joe-Biden-White-House-delusional-about-targeting-unconscionable-margins-without-a-percentage-nor-subsidiary-limitation">
          Is the Joe Biden White House delusional about targeting unconscionable
          margins without a percentage nor subsidiary limitation
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Can-you-say-the-treasury-bonds-are-treason-because-uniform-is-not-taxes-and-bonds">
          Can you say "the treasury bonds are 'treason'" because 'uniform' is
          not taxes and bonds
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Why-can-hospice-accord-mercy-deaths-but-you-cannot-yourself-when-you-wish-to">
          Why can hospice accord mercy-deaths but you cannot yourself when you
          wish to
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Is-Cindy-Adams-insane-for-saying-healthcare-and-economy-issues-are-reconcilable">
          Is Cindy Adams insane for saying healthcare and economy issues are
          reconcilable
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Can-I-claim-unemployment-for-inflation-to-ward-my-cost-of-living-or-deflation-for-less-wages-available">
          Can I claim unemployment for inflation to ward my cost of living or
          deflation for less wages available
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/What-rationality-is-there-to-make-camp-medical-tuition-retreats-and-lunch-employee-benefits-tax-exempt">
          What rationality is there to make camp, medical, tuition, retreats,
          and lunch employee benefits tax exempt
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Did-Chelsea-Manning-put-anyone-in-danger-except-the-image-of-the-Pentagon">
          Did Chelsea Manning put anyone in danger except the image of the
          Pentagon
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Would-modern-day-gangs-trade-peacefully-if-they-were-only-prosecuted-insofar-as-to-open-source-name-and-so-on-to-allow-reviews">
          Would modern day gangs trade peacefully if they were only prosecuted
          insofar as to open source, name, and so on to allow reviews
        </a>
        ?
        <br />
        <br />
        <a href="https://www.quora.com/Can-we-replace-the-FDA-with-open-source-and-login-gov-Know-Your-Customer">
          Can we replace the FDA with open source and login.gov 'Know Your
          Customer'
        </a>
        ?
      </div>
    );
  }
}

import React from 'react';
import './App.css';
import { FaBars, FaLongArrowAltLeft, FaLongArrowAltRight, FaAngleDown, FaChargingStation, FaEnvira, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, } from "react-icons/fa";

function App() {

    return (
      <div className="App">
        <ActiveHeader />

        <Header />

        <HeadNews />

        <ModelSlider />

        <Goal />

        <HighLight />

        <Studio />

        <MainNews />

        <SportChannels />

        <Footer />

        <Outer />
      </div>
    );
}

function Header() {
  return (
    <div className="header">
      <div className="header_img">
        <img src={process.env.PUBLIC_URL + '/imgs/header.jpg'} ></img>
      </div>
      <div>
        <img className="header_logo" src={process.env.PUBLIC_URL + '/imgs/logo.png'} ></img>
        <FaBars className="header_icon" size="32" color="white" />
        <p className="header_text">Mercedes-Benz</p>
      </div>
    </div>
  )
}

function HeadNews() {
  return (
    <div className="head_news">
      <div className="news_title">
        <h3>NEWS</h3>
      </div>
      <div className="news_content">
        <p> Mercedes-EQ Formula E Team facing fresh challenges in Season 8</p>
      </div>
      <div className="news_icon">
        <FaAngleDown size="25" />
      </div>
    </div>
  )
}

function ModelSlider() {
  return (
    <div>
      <div className="model_slide">
        <div className="slide">
          <img src={process.env.PUBLIC_URL + '/imgs/slide01.jpg'}  alt="#"></img>
          <img src={process.env.PUBLIC_URL + '/imgs/slide02.jpg'}  alt="#"></img>
          <img src={process.env.PUBLIC_URL + '/imgs/slide03.jpg'}  alt="#"></img>
        </div>
      </div>
      <div className="buttons">
        <FaLongArrowAltLeft id="buttonLeft" className="button" />
        <button>S680 GUARD</button>
        <FaLongArrowAltRight id="buttonRight" className="button" />
      </div>
    </div>
  )
}

function Goal() {
  return (
    <div className="goal">
      <div className="goal_img">
        <img src={process.env.PUBLIC_URL + '/imgs/goal.jpg'} ></img>
      </div>
      <div className="goal_text">
        <h2>Our goal: to build the world’s most desirable cars.</h2>
        <p>The Mercedes-Benz strategy is made up of six pillars. At its heart is the transformation of the company to become the number 1 for electric mobility and all-encompassing digitalisation. At the same time, there is a clear focus on the structural improvement of profitability, with sustainability as a guiding principle. The basis for the success of our new strategy is provided by our highly qualified and motivated team.</p>
      </div>
    </div>
  )
}

function HighLight() {
  return (
    <div className="highlight" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background1.jpg'})`
    }}>
      <div className="highlight_videos">
        <h2>HighLight Videos</h2>
        <div class="video">
          <div>
            <iframe src="https://www.youtube.com/embed/UB2nfX8x2O4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Mercedes-AMG EQS 53 4MATIC+ World Premiere</p>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/Ra__OWuOU1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Best of: Mercedes-Benz at the IAA MOBILITY 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Studio() {
  return (
    <div className="studio">
      <h4>ABOUT STUDIO ODEONSPLATZ</h4>
      <div className="studio_text">
        <p>Studio Odeonsplatz by Mercedes-Benz is an innovative concept where creativity, digitalization, art and content seamlessly merge into a single, unique brand experience.</p>
        <p>Spread across a lavish 400 sqm, Studio Odeonsplatz in the heart of Munich is an integrated physical and digital platform for our guests to network, talk to each other, and get inspiration.</p>
        <p>Constantly changing campaigns, exclusive themed worlds and cutting-edge installations – created in collaboration with leading designers, artists, tech experts and makers – fill Studio Odeonsplatz with vibrant life.</p>
        <p>The concept is topped off with a coworking and community area, complete with super speedy wifi and sweeping city views.</p>
      </div>
      <h4>DISCOVER NOW – CURRENT CAMPAIGN</h4>
      <h1>FESTIVE FOREST</h1>
      <div className="studio_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/studio2.jpg'} ></img>
          <p>Mercedes-Maybach S 580 4MATIC: WLTP: Verbrauch kombiniert: 11,7 - 10,4 l/100km; CO₂-Emissionen kombiniert: 266 - 236 g/km¹</p>
        </div>
        <div id="studio_content_text">
          <p>Soak up the spirit of the season.</p>
          <p>As the year draws to a close, it’s time to soak up the festive spirit of the season and end 2021 on a high. Maybach also marks its centenary, this year – and what better way to pay homage to the legacy brand than with this unique, immersive celebration? In cooperation with Maybach, Studio Odeonsplatz is transformed into a cool and cozy pop-up lodge, with all the merry trimmings of the season. Fusing forest vibes with a sense of timeless luxury, refined creativity and high quality – reflecting the brand’s values and perspectives – the campaign will run throughout December, building a sense of sweet anticipation across the month and closing out the year in style.</p>
        </div>
      </div>
      <img id="forest" src={process.env.PUBLIC_URL + '/imgs/studio3.jpg'} ></img>
      <div className="studio2">
        <div className="studio_content2">
          <div>
            <h2>ICONS OF LUXURY</h2>
            <p>The Maybach Icons of Luxury collection features exquisite luxury items formed from exclusive, sustainable materials and made by expert craftspeople using a unique fusion of time-tested and innovative handcrafting techniques. At the special Icons of Luxury pop-up, browse and purchase selected items from the collection, such as leather jackets, weekender bags, rollerball pens and eyewear.</p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/studio4.jpg'}  alt="#"></img>
          </div>
        </div>
        <div className="studio_content2">
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/studio5.jpg'}  alt="#"></img>
          </div>
          <div>
            <h2>FESTIVE FORTUNE</h2>
            <p>DREAMS COME TRUE Get into the holiday mood with our special Instagram holiday lottery! Hiding behind each door is a seasonal surprise from our friends and partners, who joined us over the year – every day in December there's a chance to win. Head over to <a href="https://www.instagram.com/accounts/login/">@STUDIO.ODEONSPLATZ</a> now to take part!</p>
          </div>
        </div>
        <div className="studio_content2">
          <div>
            <h2>48°08'33.4"N 11°34'38.0"E</h2>
            <p>Studio Odeonsplatz</p>
            <p>Brienner Strasse 1</p>
            <p>80333 Munich</p>
            <h2>Monday to Saturday: 9.00 am – 7.00 pm </h2>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/studio6.jpg'}  alt="#"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainNews() {
  return (
    <div className="news" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background2.jpg'})`
    }}>
      <h1>N E W S</h1>
      <div className="news_content">
        <div id="news1">
          <img src={process.env.PUBLIC_URL + '/imgs/news1.jpg'}  alt="#"></img>
          <div className="news_text">
            <h4>The scent of Mercedes-Benz luxury.</h4>
          </div>
        </div>
        <div id="news2">
          <img src={process.env.PUBLIC_URL + '/imgs/news2.jpg'}  alt="#"></img>
          <div className="news_text">
            <h4>Mercedes-EQ Formula E Team facing fresh challenges in Season...</h4>
          </div>
        </div>
        <div id="news3">
          <img src={process.env.PUBLIC_URL + '/imgs/news3.jpg'}  alt="#"></img>
          <div className="news_text">
            <h4>Team lay foundations for Season 8 during Valencia testing</h4>
          </div>
        </div>
      </div>
    </div>
  )
}


function SportChannels() {
  return (
    <div className="sport_channels" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background3.jpg'})`
    }}>
      <h1>Sport Channels</h1>
      <div className="channel">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/sport1.jpg'}  alt="#"></img>
          <p>Discover the F1 team supporting Lewis Hamilton and Valtteri Bottas. Here, fans of the Silver Arrows can find news, up-to-date reports, race reports, information about the tracks, video footage and much more.</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/sport2.png'}  alt="#"></img>
          <p>Here you can find all the important first-hand information about the Mercedes-AMG motorsport team: up-to-date news and reports, driver profiles, race calendars and detailed live data about each race.</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/sport3.jpg'} alt="#"></img>
          <p>As a founding partner of the Laureus Sport for Good Foundation, Mercedes-Benz supports and fosters social sports projects that improve the lives of underprivileged or sick children and youngsters.</p>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <div className="nobr">
        <FaChargingStation />
        <p>Kraftstoffverbrauch kombiniert　　</p>
        <FaEnvira />
        <p>CO₂-Emissionen kombiniert　　</p>
        <FaChargingStation />
        <p>Stromverbrauch im kombinierten Testzyklus</p>
      </div>
      <div>
        <p>Product may vary after press date on 18.02.2021.</p>
      </div>
      <div>
        <p>¹ Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU) 2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
      </div>
      <div>
        <p>² Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
      </div>
      <div>
        <p>³ Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
      </div>
      <div>
        <p>⁴ Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
      </div>
    </div>
  )
}

function Outer() {
  return (
    <div className="outer">
      <div className="outer_list">
        <img id="footer_logo" src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="#"></img>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">Company</a></li>
          <li><a href="">Design</a></li>
          <li><a href="">Inoovation</a></li>
        </ul>
        <ul>
          <li><a href="#">Exhibitions</a></li>
          <li><a href="#">Sport</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Lifestyle</a></li>
        </ul>
      </div>
      <div className="outer_icons">
        <p>Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of Mercedes-Benz.</p>
        <div>
          <a href="https://www.facebook.com/MercedesBenz"><FaFacebook className="outer_icon" /></a>
          <a href="https://twitter.com/mercedesbenz"><FaTwitter className="outer_icon" /></a>
          <a href="https://www.youtube.com/user/MercedesBenzTV"><FaYoutube className="outer_icon" /></a>
          <a href="https://www.instagram.com/accounts/login/?next=/mercedesbenz/"><FaInstagram className="outer_icon" /></a>
          <a href="https://www.linkedin.com/company/mercedes-benz_ag"><FaLinkedinIn className="outer_icon" /></a>
        </div>
      </div>
    </div>
  )
}

function ActiveHeader() {
  return (
    <div className="active_header" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background4.jpg'})`
    }}>
      <div className="header_menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Goal</a></li>
          <li><a href="#">HighLight</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Sport</a></li>
        </ul>
      </div>
      <div className="header_footer">
        <div>
          <p>MORE INFO :</p>
          <h5>CAREER | CONTACT</h5>
        </div>
        <div>
          <p>OFFICIAL :</p>
          <a href="https://www.facebook.com/MercedesBenz"><FaFacebook className="outer_icon" /></a>
          <a href="https://twitter.com/mercedesbenz"><FaTwitter className="outer_icon" /></a>
          <a href="https://www.youtube.com/user/MercedesBenzTV"><FaYoutube className="outer_icon" /></a>
          <a href="https://www.instagram.com/accounts/login/?next=/mercedesbenz/"><FaInstagram className="outer_icon" /></a>
          <a href="https://www.linkedin.com/company/mercedes-benz_ag"><FaLinkedinIn className="outer_icon" /></a>
        </div>
        <div id="copy">
          <p>Copyright ©</p>
          <p>Mercedes Benz. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}


export default App;

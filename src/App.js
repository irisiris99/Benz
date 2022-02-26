/* eslint-disable */
import React, { Component, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { FaBars, FaAngleDown, FaChargingStation, FaEnvira, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, } from "react-icons/fa";


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

        <Footer />

        <SportChannels />

        <Outer />
      </div>
    );
}



class HeadBtn extends Component {
  toggleBtn = () => {
    const menu = document.querySelector('.active_header');
    menu.classList.toggle('active');
  }

  render() {
    return (
      <div>
        <FaBars className="header_icon" size="32" color="white" onClick={this.toggleBtn}/>
      </div>
    );
  }
}

function Header() {

  const dtd = useSelector((state) => state);

  return (
    <div className="header">
      <div className="header_img">
        <img src={process.env.PUBLIC_URL + '/imgs/header.jpg'} />
      </div>
      <div>
        <a href="index.html"><img className="header_logo" src={process.env.PUBLIC_URL + '/imgs/logo.png'} /></a>
        <HeadBtn />
        <p className="header_text">Mercedes-{dtd}</p>
      </div>
    </div>
  )
}

class NewsBtn extends Component {
  toggleBtn = () => {
    const menu = document.querySelector('#toggle_news');
    menu.classList.toggle('active');
  }

  render() {
    return (
      <div>
        <FaAngleDown className="news_icon" size="25" color="white" onClick={this.toggleBtn}/>
      </div>
    );
  }
}

function HeadNews() {
  let [headNews, HeadNews2] = useState([
    'Mercedes-EQ Formula E Team facing fresh challenges in Season 8',
    'Mercedes-Benz Collaborates With Proenza Schouler.',
    'Studio Odeonsplatz by Mercedes-Benz',
    'SK Gaming runs, Mercedes-Benz doubles.',
    'League of Legends World Champopmship Ring.']);

  return (
    <div id="headnews">
      <div id="head_news">
        <div className="news_title">
          <h3>NEWS</h3>
        </div>
        <div className="news_content">
          <p> {headNews[0]} </p>
        </div>
        <NewsBtn />
      </div>
      <div id="toggle_news">
        <div className="head_news">
          <div className="news_title">
            <h3>NEWS</h3>
          </div>
          <div className="news_content">
            <p> {headNews[1]} </p>
          </div>
        </div>
        <div className="head_news">
          <div className="news_title">
            <h3>NEWS</h3>
          </div>
          <div className="news_content">
            <p> {headNews[2]} </p>
          </div>
        </div>
        <div className="head_news">
          <div className="news_title">
            <h3>NEWS</h3>
          </div>
          <div className="news_content">
            <p> {headNews[3]} </p>
          </div>
        </div>
        <div className="head_news">
          <div className="news_title">
            <h3>NEWS</h3>
          </div>
          <div className="news_content">
            <p> {headNews[4]} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

class NextBtn extends Component {
  NextBtnClick = () => {
    const avtr = document.querySelector('#avtr');
    const s680 = document.querySelector('#s680');
    const s580 = document.querySelector('#s580');
    const eqs580 = document.querySelector('#eqs580');
    const c300 = document.querySelector('#c300');
    const amg = document.querySelector('#amg');
    const slide = document.querySelector('.model_slide');

    s680.addEventListener('click', () => {
      slide.style.transform = 'translateX(-100%)';
    })
    s580.addEventListener('click', () => {
      slide.style.transform = 'translateX(-200%)';
    })
    eqs580.addEventListener('click', () => {
      slide.style.transform = 'translateX(-300%)';
    })  
    c300.addEventListener('click', () => {
      slide.style.transform = 'translateX(-400%)';
    })
    amg.addEventListener('click', () => {
      slide.style.transform = 'translateX(-500%)';
    })
    avtr.addEventListener('click', () => {
      slide.style.transform = 'translateX(0%)';
    })
  }

  render() {
    return (
      <div>
        <button id="avtr" className="button" onClick={this.NextBtnClick}>1</button>
        <button id="s680" className="button" onClick={this.NextBtnClick}>2</button>
        <button id="s580" className="button" onClick={this.NextBtnClick}>3</button>
        <button id="eqs580" className="button" onClick={this.NextBtnClick}>4</button>
        <button id="c300" className="button" onClick={this.NextBtnClick}>5</button>
        <button id="amg" className="button" onClick={this.NextBtnClick}>6</button>
      </div>
    )
  }
}

function ModelSlider() {
  return (
    <div id="model">
      <div className="model_slide">
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/B9lmtMAr56k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/hk8GVanoOzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/rnCnAOgBRKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/Ch6g9VwikZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/Np8uwCmD92c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/35h-neqDuxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/kRHwglTFtd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="slide_img">
            <iframe width="1547.77" height="825.47" src="https://www.youtube.com/embed/hk8GVanoOzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>
      <div className="buttons">
        <NextBtn />
      </div>
    </div>
  )
}

function Goal() {
  return (
    <div className="about_us" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background5.jpg'})`
    }}>
      <h1>―――――　WHO WE ARE</h1>
      <div>
        <h3>Mercedes-Benz AG is continually expanding its worldwide production network with around 35 production sites on four continents, while gearing itself to meet the requirements of electric mobility. At the same time, the company is constructing and extending its global battery production network on three continents.</h3>
      </div>
      <div>
        <p>Our goal: to build the world’s most desirable cars.</p>
        <p>“First Move the World” – that is the Purpose of Mercedes-Benz Cars</p>
      </div>
    </div>
  )
}

function HighLight() {
  
  let [Product, Product2] = useState('New Product : The New EQS 2022');
  let [ProductLeft, ProductLeft2] = useState('2022 Mercedes-Benz EQS 580 4Matic');
  let [ProductRight, ProductRight2] = useState('2022 Mercedes EQS futuristic interior');

  return (
    <div className="highlight" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background1.jpg'})`
    }}>
      <div className="product">
        <h2>{ Product }</h2>
        <div className="new_eqs">
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/new1.jpg' } />
            <p>{ ProductLeft }</p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/imgs/new2.jpg' } />
            <p>{ ProductRight }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Studio() {
  return (
    <div className="studio">
      <h2>ABOUT STUDIO ODEONSPLATZ</h2>
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
          <div className="studio2_img">
            <img src={process.env.PUBLIC_URL + '/imgs/studio4.jpg'}  alt="#"></img>
          </div>
        </div>
        <div id="middle_content" className="studio_content2">
          <div id="fortune" className="studio2_img">
            <img src={process.env.PUBLIC_URL + '/imgs/studio5.jpg'}  alt="#"></img>
          </div>
          <div>
            <h2>FESTIVE FORTUNE</h2>
            <p>DREAMS COME TRUE Get into the holiday mood with our special Instagram holiday lottery! Hiding behind each door is a seasonal surprise from our friends and partners, who joined us over the year – every day in December there's a chance to win. Head over to <a href="https://www.instagram.com/accounts/login/">@STUDIO.ODEONSPLATZ</a> now to take part!</p>
          </div>
        </div>
        <div id="last_content" className="studio_content2">
          <div>
            <h2 className="delete">48°08'33.4"N 11°34'38.0"E</h2>
            <p>Studio Odeonsplatz</p>
            <p>Brienner Strasse 1</p>
            <p>80333 Munich</p>
            <h2>Monday to Saturday: 9.00 am – 7.00 pm </h2>
          </div>
          <div className="studio2_img">
            <img src={process.env.PUBLIC_URL + '/imgs/studio6.jpg'}  alt="#"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainNews() {

  let [MainNews, NewsChange] = useState(['SK Gaming runs, Mercedes-Benz doubles.','More equal opportunities and inclusion..'])

  return (
    <div className="news" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/background6.jpg'})`
    }}>
      <h1>Live News</h1>
      <div className="news_header">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news1.jpg'}  alt="#" />
          <h4>{ MainNews[0] }</h4>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news2.jpg'}  alt="#" />
          <h4>{ MainNews[1] }</h4>
        </div>
      </div>
      <div className="news_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news3.jpg'}  alt="#" />
          <p>What Impact Does High Altitude Have on a...</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news4.jpg'}  alt="#" />
          <p>Mercedes-EQ and SK Gaming launch Projec...</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news5.jpg'}  alt="#" />
          <p>Mercedes-Benz SL glamour at the Pebble B...</p>
        </div>
      </div>
      <div className="news_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news6.jpg'}  alt="#" />
          <p>Laureus Sport Good: Everyone wins</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news7.jpg'}  alt="#" />
          <p>Interview with Sara Shakeel.</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news8.jpg'}  alt="#" />
          <p>30 years of Mercedes-Benz W 140</p>
        </div>
      </div>
      <div className="news_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news9.jpg'}  alt="#" />
          <p>The New EQS Mercedes-EQ and its</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news10.jpg'}  alt="#" />
          <p>She's Mercedes:"we should not se our</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news11.jpg'}  alt="#" />
          <p>Mercedes-Benz AG: Purpose.</p>
        </div>
      </div>
      <div className="news_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news12.jpg'}  alt="#" />
          <p>Mercedes-Benz C-Class: Learning to let go</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news13.jpg'}  alt="#" />
          <p>Team achieves FIA Three-Star Environment...</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news14.jpg'}  alt="#" />
          <p>On the road with Mercedes-Benz Dream Cars</p>
        </div>
      </div>
      <div className="news_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news15.jpg'}  alt="#" />
          <p>Mercedes Launches ‘Accelerate 25’ Diver...</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news16.jpg'}  alt="#" />
          <p>The Mercedes-AMG GT Roadster.</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news17.jpg'}  alt="#" />
          <p>The Mercedes-AMG GT Coupe.</p>
        </div>
      </div>
      <div id="last_child" className="news_content">
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/news18.jpg'}  alt="#" />
          <p>Dare to dream with Mercedes-Benz dream cars.</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news19.jpg'}  alt="#" />
          <p>Our call for diversity, standing against racism...</p>
        </div>
        <div className="delete">
          <img src={process.env.PUBLIC_URL + '/imgs/news20.jpg'}  alt="#" />
          <p>Mexico 2020:A character-building weekend.</p>
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
        <p className="delete">³ Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt. Stromverbrauch und Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.</p>
      </div>
      <div>
        <p className="delete">⁴ Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.</p>
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
          <li><a href="index.html">HOME</a></li>
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
          <li><a href="index.html">Home</a></li>
          <li><a href="#">New Product</a></li>
          <li><a href="#">Odeonsplatz</a></li>
          <li><a href="#">Live News</a></li>
          <li><a href="#">Sport</a></li>
        </ul>
      </div>
      <div className="header_footer">
        <div>
          <p>MORE INFO :</p>
          <h5>CAREER | CONTACT</h5>
        </div>
        <div className="block">
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

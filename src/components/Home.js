import React from "react";
import HomeComponent from "./Home Components/HomeComponent";
import Card from "./General Components/Card";
import { Link } from "react-router-dom";
import studentLearning from '../assets/images/news/gt.jpg';
import genZ from '../assets/images/news/genz.jpg';
import digitalNatives from '../assets/images/news/digitalNatives.jpg';

function Home() {
  const devices = [
    {
      href: "https://www.pna.gov.ph/articles/1223441",
      imageUrl: "https://files01.pna.gov.ph/category-list/2019/12/13/cellphone-blurred.jpg",
      title: "SENATOR MULLS CELLPHONE BAN INSIDE CLASSROOMS OF YOUNG LEARNERS",
    },
    {
      href: "https://childhope.org.ph/importance-of-technology-in-philippine-education/",
      imageUrl:
        "https://childhope.org.ph/wp-content/uploads/2021/03/children-using-tablets-for-online-learning-1024x1024.jpg",
      title: "THE IMPORTANCE OF TECHNOLOGY IN PHILIPPINE EDUCATION",
    },
    {
      href: "https://www.myprivatetutor.com.ph/blog/digital-learning-on-the-philippine-education-system",
      imageUrl: "https://www.lawlat.in/files/medialibrary/e3bc8fb3502397447a91668484f4e25e.png",
      title:
        "THE IMPACT OF DIGITAL LEARNING ON THE PHILIPPINE EDUCATION SYSTEM: A COMPREHENSIVE ANALYSIS",
    },
    // Add more card objects here
  ];

  const traits = [
    {
      href: "https://www.govtech.com/education/k-12/iste-identifies-7-traits-of-digital-learners.html",
      imageUrl: studentLearning,
      title: "ISTE IDENTIFIES 7 TRAITS OF DIGITAL LEARNERS",
    },
    {
      href: "https://www.umassglobal.edu/news-and-events/blog/generation-z-traits-teachers-need-to-adapt-to",
      imageUrl: genZ,
      title: "3 GENERATION Z TRAITS TODAY'S TEACHERS NEED TO ADAPT TO",
    },
    {
      href: "https://competendo.net/en/Digital_Natives,_Digital_Learners",
      imageUrl: digitalNatives,
      title: "DIGITAL NATIVES, DIGITAL LEARNERS",
    },
    // Add more card objects here
  ];

  return (
    <div>
      <HomeComponent>
        <Link to = "/device" className="black-underline"><h1 className="fs-5 title-font my-4">Device</h1></Link>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {devices.map((card) => (
            <div className="mx-2">
              <a href={card.href} className="title-font" target="_blank" rel="noopener noreferrer">
                <Card
                  cardWidth="280px"
                  cardHeight="270px"
                  imageWidth="275px"
                  imageHeight="90px"
                  imageUrl={card.imageUrl}
                >
                  <div>
                    <h3 className="fs-5">{card.title}</h3>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
        <Link to ="/traits" className="black-underline"><h1 className="fs-5 title-font my-4">Digital Traits</h1></Link>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {traits.map((card) => (
            <div className="mx-2">
              <a href={card.href} className="title-font" target="_blank" rel="noopener noreferrer">
                <Card
                  cardWidth="280px"
                  cardHeight="200px"
                  imageWidth="275px"
                  imageHeight="80px"
                  imageUrl={card.imageUrl}
                >
                  <div>
                    <h3 className="fs-5">{card.title}</h3>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </HomeComponent>
    </div>
  );
}

export default Home;
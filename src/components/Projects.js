import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ngochai.jpg";
import projImg2 from "../assets/img/zingmp3.png";
import projImg3 from "../assets/img/coinprice.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Apple Store",
      description: "A site for sales is an online platform that allows users to buy and choose from a wide range of products at a wide range of prices. The website provides an interface for searching, adding, editing, deleting products in the cart, ordering and paying for products.",
      imgUrl: projImg1,
      linkGithub: "https://github.com/minhquang2001/apple-v1",
      linkDemo: "https://www.ngochai.shop/",
    },
    {
      title: "Zing MP3",
      description: "Zing MP3 website makes it possible for users to listen to music. There are many essential features for users to use: pause, previous, next, and increase or decrease the volume.",
      imgUrl: projImg2,
      linkGithub: "https://github.com/minhquang2001/zingmp3",
      linkDemo: "https://zingmp3-steel.vercel.app/",
    },
    {
      title: "Crypto",
      description: "Crypto is a cryptocurrency application that allows users to search for information about different cryptocurrencies in real time.",
      imgUrl: projImg3,
      linkGithub: "https://github.com/minhquang2001/CryptoCoin",
      linkDemo: "https://coinprice.vercel.app/",
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              //animate__animated animate__fadeIn add to class
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  {/* <div className="skill-bx wow zoomIn"> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* <Row> */}
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      {/* </Row> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                  {/* </div> */}
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}

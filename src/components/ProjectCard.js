import { Col } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const ProjectCard = ({ title, description, imgUrl, linkGithub, linkDemo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const getImageHeight = () => {
    if (imageRef.current) {
      return imageRef.current.clientHeight;
    }
    return 0;
  };

  const getTranslateYValue = () => {
    const containerHeight = getImageHeight();
    return isHovered ? `-${containerHeight - 400}px` : "0%";
  };
  return (
    <>
      <div className="about-bx wow zoomIn row" style={{ marginBottom: '72px', padding: '2rem', alignItems: 'center' }}>
        <Col size={12} sm={12} md={6}>
          <div
            className="proj-imgbx"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              src={imgUrl}
              className="proj-img"
              ref={imageRef}
              style={{
                transform: `translateY(${getTranslateYValue()})`,
                transition: "transform 5s ease-in-out",
              }}
              alt={title}
            />
            {/* <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div> */}
          </div>
        </Col>
        <Col size={12} sm={12} md={6}>
          <div className="proj-wrap">
            <h1>{title}</h1>
            <p style={{width: '70%', textAlign: 'justify'}}>{description}</p>
            <div className="proj-wrap__icon">
              <a href={linkGithub} className="proj-wrap__icon__txt" target="_blank" rel="noreferrer">
                <p style={{margin: '0 12px 0 0', width: '100%'}}>Code</p>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={linkDemo} className="proj-wrap__icon__txt" target="_blank" rel="noreferrer">
                <p style={{margin: '0 12px 0 0', width: '100%'}}>Live Demo</p>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>


        </Col>
      </div>
    </>
  );
};

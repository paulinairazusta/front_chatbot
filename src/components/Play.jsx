import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Play() {
  const [play, setPlay] = useState("");
  const params = useParams();

  useEffect(() => {
    async function getPlay() {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/play/${params.id}`
      );
      setPlay(response.data);
    }
    getPlay();
  }, []);

  return (
    <Container className="play-container">
      <Row className="row">
        <Col>
          <img src={play.image} alt="Poster de la obra" className="image" />
        </Col>
        <Col className="description-container">
          <div className="play-description">
            <h1 className="title">{play.name}</h1>
            <p>{play.review}</p>
            <p>
              Funciones: {play.date} {play.time}h
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Play;

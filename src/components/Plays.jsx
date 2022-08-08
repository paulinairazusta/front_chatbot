import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./plays.css";

function Plays() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    async function getPlays() {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/plays`
      );
      setPlays(response.data);
    }
    getPlays();
  }, []);

  return (
    <ul>
      <Container className="play-container">
        {plays.map((play) => {
          return (
            <div key={play._id}>
              <Row className="row">
                <Col>
                  <Link to={`/play/${play._id}`} className="link">
                    <img
                      alt="Poster de la obra"
                      src={play.image}
                      className="image"
                    />
                  </Link>
                </Col>
                <Col className="description-container">
                  <div className="play-description">
                    <Link to={`/play/${play._id}`} className="link">
                      <h1> {play.name.toUpperCase()}</h1>
                    </Link>
                    <p>
                      {play.review.slice(0, 200)}
                      <Link to={`/play/${play._id}`} className="link">
                        ... Ver más
                      </Link>
                    </p>
                  </div>
                </Col>
              </Row>
              <hr />
            </div>
          );
        })}
      </Container>
    </ul>
  );
}

export default Plays;

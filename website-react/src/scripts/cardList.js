import { Card, Carousel } from "react-bootstrap";
import "../styles/card-styles.css"
import TrackVisibility from 'react-on-screen';
import activateElement from "./activateElement";
import deactivateElement from "./deactivateElement";

function cardList(project) {
    const ComponentToTrack = ({ isVisible }) => {
        if (isVisible) {
            activateElement(`HashLink${project._id}`)
        } else {
            deactivateElement(`HashLink${project._id}`)
        }
        return (
            <Card key={project._id} className="my-10rem h-100">
                <Card.Body className="wd-card text-center">
                    <Carousel>
                        <Carousel.Item interval={1000} className="my-20rem">
                            <img
                                className="d-block w-100 h-75"
                                src={`${project}`}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                {project.name}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Card.Body>
            </Card>);
    }
    return (
        <div id={project._id} className=" w-75 p-auto h-50">
            <TrackVisibility partialVisibility>
                <ComponentToTrack />
            </TrackVisibility>
        </div>
    );
} export default cardList
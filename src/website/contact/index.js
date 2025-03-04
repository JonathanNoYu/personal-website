import { Row } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Row className="d-flex justify-content-center p-auto mt-5">
        <iframe title="Contact-Me"
                className="wd-dark-filter" 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeEdkHdyisoJIp9ISxMr8RUX6bsKc3DYxoumNkvUtQ0aiClVA/viewform?embedded=true" 
                width="640" 
                height="849" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">Loading…</iframe>
      </Row>
    </>
  );
}
export default Contact;
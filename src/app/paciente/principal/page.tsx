import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrincipalDados from "./principal-dados";
import "./principal.css";

function Principal() {
  return (
    <>
      <div className="conteudo-titulo">Principal</div>
      <div className="conteudo">
        <Row>
          <Col xl={5} lg={7}>
            <PrincipalDados />
          </Col>

          <Col className="">Gleydson</Col>
        </Row>
      </div>
    </>
  );
}

export default Principal;

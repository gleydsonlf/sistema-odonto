import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Paciente() {
  return (
    <Container fluid>
      <Row className="app-interno">
        <Col lg={2} className="app-interno-menu">
          menu
        </Col>
        <Col lg={10} className="app-interno-conteudo">
          <div className="titulo">Cadastro de Paciente</div>
          <div className="conteudo">Conteúdo</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Paciente;

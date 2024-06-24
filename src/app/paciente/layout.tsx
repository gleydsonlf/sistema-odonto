import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuPaciente from "./menuPaciente";

function Paciente({ children }: any) {
  return (
    <Container fluid>
      <Row className="app-interno">
        <Col lg={2} className="app-interno-menu">
          <MenuPaciente />
        </Col>
        <Col lg={10} className="app-interno-conteudo">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Paciente;

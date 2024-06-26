"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";

function Anamnese() {
  return (
    <>
      <div className="conteudo-titulo">Anamnese</div>
      <div className="conteudo">
        <Row>
          <Col md={3}>
            <Form.Label>Selecione a Especialidade</Form.Label>

            <InputGroup>
              <Form.Select
                size="sm"
                aria-label="anamnese-select"
                id="anamnese-select"
              >
                <option value="clinico-geral">Clínico Geral</option>
                <option value="periodontia">Periodontia</option>
                <option value="implante">Implante</option>
              </Form.Select>
              <Button
                variant="outline-secondary"
                id="anamnese-btn-criar"
                size="sm"
              >
                Criar
              </Button>
            </InputGroup>
          </Col>
        </Row>

        {/* TABELA DE ANAMNESES */}

        <Row className="mt-4">
          <Table hover responsive className="tabela anamnese-tabela">
            <thead>
              <tr>
                <th></th>
                <th className="align-middle">Data</th>
                <th className="align-middle">Especialidade</th>
                <th className="align-middle">Dentista</th>
                <th className="align-middle"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle">1</th>
                <td className="align-middle">09/06/2024</td>
                <td className="align-middle">Clínico-Geral </td>
                <td className="align-middle">Dr. Gleydson Lucas</td>
                <td className="align-middle">
                  <Button variant="light" id="anamnese-editar" size="sm">
                    <FaRegEdit /> Editar
                  </Button>
                </td>
              </tr>
              <tr>
                <th className="align-middle">2</th>
                <td className="align-middle">25/05/2024 </td>
                <td className="align-middle">Periodontia </td>
                <td className="align-middle">Dr Brian Costa</td>
                <td className="align-middle">
                  <Button variant="light" id="anamnese-editar" size="sm">
                    <FaRegEdit /> Editar
                  </Button>
                </td>
              </tr>
              <tr>
                <th className="align-middle">3</th>
                <td className="align-middle">01/02/2024</td>
                <td className="align-middle">Ortodontia</td>
                <td className="align-middle">Dr. Gleydson Lucas</td>
                <td className="align-middle">
                  <Button variant="light" id="anamnese-editar" size="sm">
                    <FaRegEdit /> Editar
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  );
}

export default Anamnese;

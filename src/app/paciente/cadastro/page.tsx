"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./cadastro.css";
import { InputMask } from "@react-input/mask";

function Cadastro() {
  return (
    <>
      <div className="conteudo-titulo">Cadastro</div>
      <div className="conteudo">
        {/* Dados Cadastrais */}
        <Row>
          <Col md="6" id="nome-completo">
            <Form.Group controlId="formGridEmail">
              <Form.Label id="name" className="conteudo-label">
                Nome Completo
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Nome Completo"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="data-nascimento">
            <Form.Group controlId="data-nascimento">
              <Form.Label id="data-nascimento">Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                id="name"
                size="sm"
                placeholder="dd/mm/aaaa"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="sexo">
            <Form.Group controlId="sexo">
              <Form.Label>Sexo</Form.Label>
              <Form.Select size="sm">
                <option>Selecionar</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md="3" id="telefone-principal">
            <Form.Group controlId="telefone-principal">
              <Form.Label id="telefone-principal">
                Telefone Principal
              </Form.Label>
              <Form.Control
                type="text"
                id="telefone-principal"
                size="sm"
                placeholder="(xx) x xxxx-xxxx"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="telefone-secundario">
            <Form.Group controlId="telefone-secundario">
              <Form.Label id="telefone-secundario">
                Telefone Secundário
              </Form.Label>
              <Form.Control
                type="text"
                id="telefone-secundario"
                size="sm"
                placeholder="(xx) x xxxx-xxxx"
              />
            </Form.Group>
          </Col>

          <Col md="6" id="email">
            <Form.Group controlId="email">
              <Form.Label id="email" className="conteudo-label">
                Email
              </Form.Label>
              <Form.Control
                type="text"
                id="email"
                placeholder="__@__.__"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="cpf">
            <Form.Group controlId="cpf">
              <Form.Label id="cpf">CPF</Form.Label>
              <Form.Control type="text" id="cpf" placeholder="CPF" size="sm" />
            </Form.Group>
          </Col>

          <Col md="3" id="rg">
            <Form.Group controlId="rg">
              <Form.Label id="rg">RG</Form.Label>
              <Form.Control type="text" id="cpf" placeholder="RG" size="sm" />
            </Form.Group>
          </Col>

          <Col md="4" id="como-conheceu">
            <Form.Group controlId="como-conheceu">
              <Form.Label>Como conheceu o consultório</Form.Label>
              <Form.Select size="sm">
                <option>Selecionar</option>
                <option value="indicacao-paciente">
                  Indicação de outro paciente
                </option>
                <option value="indicacao-convenio">
                  Indicação do convênio
                </option>
                <option value="indicacao-redes-sociais">Redes Sociais</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Observações e responsável */}

          <Col md="6" id="observacoes">
            <Form.Group controlId="observacoes">
              <Form.Label id="observacoes" className="conteudo-label">
                Observações
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Observações"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="4" id="nome-responsavel">
            <Form.Group controlId="nome-responsavel">
              <Form.Label id="nome-responsavel" className="conteudo-label">
                Nome do Responsável
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Nome do Responsável"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="2" id="cpf-responsavel">
            <Form.Group controlId="cpf-responsavel">
              <Form.Label id="cpf-responsavel">CPF do Responsável</Form.Label>
              <Form.Control
                type="text"
                id="cpf"
                placeholder="CPF do Responsável"
                size="sm"
              />
            </Form.Group>
          </Col>
        </Row>
        <hr />
        {/* Endereço */}
        <Row>
          <Col md="12" className="d-flex align-items-center">
            <Col lg="2" id="cep">
              <Form.Group controlId="cep">
                <Form.Label id="name" className="conteudo-label">
                  CEP
                </Form.Label>
                <Form.Control
                  type="text"
                  id="cep"
                  placeholder="CEP"
                  size="sm"
                />
              </Form.Group>
            </Col>

            <Col className="nao-sabe-o-cep">
              <button className="btn btn-link">
                <FaSearch className="nao-sabe-o-cep-icone" />
                <h6>Não sabe o CEP ?</h6>
              </button>
            </Col>
          </Col>

          <Col md="6" id="endereco">
            <Form.Group controlId="endereco">
              <Form.Label id="endereco" className="conteudo-label">
                Endereço
              </Form.Label>
              <Form.Control
                type="text"
                id="endereco"
                placeholder="Endereço"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="numero">
            <Form.Group controlId="numero">
              <Form.Label id="numero" className="conteudo-label">
                Número
              </Form.Label>
              <Form.Control
                type="text"
                id="numero"
                placeholder="Número"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="complemento">
            <Form.Group controlId="complemento">
              <Form.Label id="complemento" className="conteudo-label">
                Complemento
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Complemento"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="bairro">
            <Form.Group controlId="bairro">
              <Form.Label id="bairro" className="conteudo-label">
                Bairro
              </Form.Label>
              <Form.Control
                type="text"
                id="bairro"
                placeholder="Bairro"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="cidade">
            <Form.Group controlId="cidade">
              <Form.Label id="cidade" className="conteudo-label">
                Cidade
              </Form.Label>
              <Form.Control
                type="text"
                id="cidade"
                placeholder="Cidade"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="estado">
            <Form.Group controlId="estado">
              <Form.Label>Estado</Form.Label>
              <Form.Select size="sm">
                <option>Selecionar</option>
                <option>Acre</option>
                <option>Bahia</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <hr />

        {/* Convênios */}
        <Row>
          <Col md="3" id="convenio">
            <Form.Group controlId="convenio">
              <Form.Label>Convênios</Form.Label>
              <Form.Select size="sm">
                <option>Particular</option>
                <option>Amil</option>
                <option>Brazil Dental</option>
                <option>CAMED</option>
                <option>Sulamerica</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md="3" id="carteirinha">
            <Form.Group controlId="carteirinha">
              <Form.Label id="carteirinha" className="conteudo-label">
                Carteirinha
              </Form.Label>
              <Form.Control
                type="text"
                id="carteirinha"
                placeholder="Carteirinha"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="empresa">
            <Form.Group controlId="empresa">
              <Form.Label id="empresa" className="conteudo-label">
                Empresa
              </Form.Label>
              <Form.Control
                type="text"
                id="empresa"
                placeholder="Empresa"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="validade-carteirinha">
            <Form.Group controlId="validade-carteirinha">
              <Form.Label id="validade-carteirinha" className="conteudo-label">
                Validade da Carteirinha
              </Form.Label>
              <Form.Control
                type="text"
                id="validade-carteirinha"
                placeholder="Validade da Carteirinha"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="6" id="nome-titular">
            <Form.Group controlId="nome-titular">
              <Form.Label id="nome-titular" className="conteudo-label">
                Nome do Titular
              </Form.Label>
              <Form.Control
                type="text"
                id="nome-titular"
                placeholder="Nome do Titular"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="cpf-do-titular">
            <Form.Group controlId="cpf-do-titular">
              <Form.Label id="cpf-do-titular" className="conteudo-label">
                CPF do Titular
              </Form.Label>
              <Form.Control
                type="text"
                id="cpf-do-titular"
                placeholder="CPF do Titular"
                size="sm"
              />
            </Form.Group>
          </Col>

          <Col md="3" id="data-nascimento-do-titular">
            <Form.Group controlId="data-nascimento-do-titular">
              <Form.Label id="data-nascimento-do-titular">
                Nascimento do Titular
              </Form.Label>
              <Form.Control type="date" id="name" size="sm" />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Cadastro;

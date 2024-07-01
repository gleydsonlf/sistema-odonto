"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PrincipalDados() {
  return (
    <>
      {/* Dados cadastrais */}
      <Row>
        <div className="principal-titulo">Dados Cadastrais</div>
        <Col xs={12} className="principal-dados">
          <div className="principal-dados-titulo">Nome: </div>
          <div className="principal-dados-dado">
            Joice Rodrigues da Silva Filgueira
          </div>
        </Col>

        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Telefone: </div>
          <div className="principal-dados-dado">85 98929.2019</div>
        </Col>

        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Telefone: </div>
          <div className="principal-dados-dado">85 98929.2019</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Nascimento: </div>
          <div className="principal-dados-dado">21/07/1984</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Idade: </div>
          <div className="principal-dados-dado">39 anos</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">CPF: </div>
          <div className="principal-dados-dado">888.752.702-44</div>
        </Col>
        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">RG: </div>
          <div className="principal-dados-dado">894.654.987-165</div>
        </Col>
        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Sexo: </div>
          <div className="principal-dados-dado">Feminino</div>
        </Col>
        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Indicação: </div>
          <div className="principal-dados-dado">Paciente</div>
        </Col>

        <Col xs={12} className="principal-dados">
          <div className="principal-dados-titulo">Email: </div>
          <div className="principal-dados-dado">joice.shelldon2@gmail.com</div>
        </Col>
      </Row>
      <hr />

      {/* Endereço */}
      <Row>
        <p className="principal-titulo">Endereço</p>
        <Col xs={12} className="principal-dados">
          <div className="principal-dados-titulo">Endereço: </div>
          <div className="principal-dados-dado">
            Avenida Sargento Hermínio Sampaio, 2755
          </div>
        </Col>

        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Complemento: </div>
          <div className="principal-dados-dado">Apt 404 B</div>
        </Col>

        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Bairro: </div>
          <div className="principal-dados-dado">Ellery</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Cidade: </div>
          <div className="principal-dados-dado">Fortaleza</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Estado: </div>
          <div className="principal-dados-dado">Ceará</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">CEP: </div>
          <div className="principal-dados-dado">60.320-504</div>
        </Col>
      </Row>

      <hr />

      {/* Convênios - Planos */}
      <Row>
        <p className="principal-titulo">Convênios</p>
        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Plano: </div>
          <div className="principal-dados-dado">Life Empresarial</div>
        </Col>

        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Categoria: </div>
          <div className="principal-dados-dado">Verde</div>
        </Col>

        <Col md={6} className="principal-dados">
          <div className="principal-dados-titulo">Carteira: </div>
          <div className="principal-dados-dado">214.32154.65</div>
        </Col>

        <Col sm={6} className="principal-dados">
          <div className="principal-dados-titulo">Validade: </div>
          <div className="principal-dados-dado">12/2029</div>
        </Col>

        <Col md={12} className="principal-dados">
          <div className="principal-dados-titulo">Empresa: </div>
          <div className="principal-dados-dado">
            Igreja Universal do Reino de Deus
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PrincipalDados;

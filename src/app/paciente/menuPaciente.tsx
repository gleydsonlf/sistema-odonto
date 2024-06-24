/* eslint-disable jsx-a11y/alt-text */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./paciente.css";
import Link from "next/link";
import {
  FaAddressCard,
  FaArrowUpRightDots,
  FaCircleDollarToSlot,
  FaFileCircleQuestion,
  FaFileSignature,
  FaIdCardClip,
  FaImage,
  FaTooth,
} from "react-icons/fa6";
import { FaSave, FaTrashAlt } from "react-icons/fa";

function MenuPaciente() {
  return (
    <>
      <Row>
        <Col sm={12} className="text-center">
          <Image src="../paciente.jpg" className="paciente-foto-perfil" />
        </Col>
        <Col sm={11} className="menu-paciente-titulo">
          <h6>Joice Filgueira</h6>
          <span>Life Empresarial</span>
        </Col>

        <div className="paciente-menu">
          <Link href={"/paciente/principal"} className="paciente-menu-link">
            <FaIdCardClip className="paciente-menu-link-icon" />
            Principal
          </Link>
          <Link href={"/paciente/cadastro"} className="paciente-menu-link">
            <FaAddressCard className="paciente-menu-link-icon" />
            Cadastro
          </Link>
          <Link href={"/paciente/anamnese"} className="paciente-menu-link">
            <FaFileCircleQuestion className="paciente-menu-link-icon" />
            Anamnese
          </Link>
          <Link href={"/paciente/tratamentos"} className="paciente-menu-link">
            <FaTooth className="paciente-menu-link-icon" />
            Tratamentos
          </Link>
          <Link href={"/paciente/evolucoes"} className="paciente-menu-link">
            <FaArrowUpRightDots className="paciente-menu-link-icon" />
            Evoluções
          </Link>
          <Link href={"/paciente/documentos"} className="paciente-menu-link">
            <FaFileSignature className="paciente-menu-link-icon" />
            Documentos
          </Link>
          <Link href={"/paciente/imagens"} className="paciente-menu-link">
            <FaImage className="paciente-menu-link-icon" />
            Imagens
          </Link>
          <Link href={"/paciente/financeiro"} className="paciente-menu-link">
            <FaCircleDollarToSlot className="paciente-menu-link-icon" />
            Financeiro
          </Link>
        </div>

        <div className="paciente-menu-btn">
          <button className="btn btn-primary btn-sm">
            <FaSave />
            Salvar
          </button>
        </div>
      </Row>
    </>
  );
}

export default MenuPaciente;

// import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./quotation.css";
import CHeader from "../../components/c-header/c-header";
import CFooter from "../../components/c-footer/c-footer";

export default function VQuotation() {
  const form = useRef();
  let { model } = useParams();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rci11tw",
        "template_ywo3rz7",
        {
          name: name,
          last_name: lastName,
          email: email,
          phone: phone,
          model: model,
        },
        "AUBCKE3CS14sbnH-r"
      )
      .then(
        (result) => {
          console.log(result.status);
          setName("");
          setLastName("");
          setEmail("");
          setPhone("");
          if (result.status === 200) {
            setSuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="v-quotation">
      <div className="v-quotation__header">
        <CHeader />
      </div>
      <div className="v-quotation__container">
        {model === "dashing" && (
          <h1 className="v-quotation__title">Cotizar Dashing</h1>
        )}
        {model === "x70" && <h1 className="v-quotation__title">Cotizar X70</h1>}
        {model === "x70-plus" && (
          <h1 className="v-quotation__title">Cotizar X70 PLUS</h1>
        )}
        {model === "x90-plus" && (
          <h1 className="v-quotation__title">Cotizar X90 PLUS</h1>
        )}
        <p className="v-quotation__subtitle">
          Bienvenido a nuestro servicio de cotización online. Te invitamos a
          completar los siguientes datos:
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="v-quotation__section__form"
        >
          <div className="v-quotation__form-group">
            <input
              type="text"
              className="v-quotation__form-input"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="v-quotation__form-group">
            <input
              type="text"
              className="v-quotation__form-input"
              placeholder="Apellido"
              name="last_name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="v-quotation__form-group">
            <input
              type="email"
              className="v-quotation__form-input"
              placeholder="Correo Electrónico"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="v-quotation__form-group">
            <input
              type="phone"
              className="v-quotation__form-input"
              placeholder="Teléfono"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          {name && lastName && email && phone ? (
            <input
              type="submit"
              value="Enviar"
              className="v-quotation__form__button"
              defaultChecked={false}
            />
          ) : (
            <input
              type="submit"
              value="Enviar"
              className="v-quotation__form__button__disabled"
              disabled
            />
          )}
          {success && (
            <div className="v-quotation__form__success">
              Formulario enviado exitosamente
            </div>
          )}
        </form>
      </div>
      <CFooter />
    </div>
  );
}

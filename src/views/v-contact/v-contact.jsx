// import { Link } from 'react-router-dom'
import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import CHeader from "../../components/c-header/c-header";
import CFooter from "../../components/c-footer/c-footer";
import CScrollUp from "../../components/c-scroll-up/c-scroll-up";

export default function VContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [motive, setMotive] = useState("");
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const emailForm = /\S+@\S+\.\S+/;
  const textEvaluation = /[a-zA-Z ]{2,254}/;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rci11tw",
        "template_8uvhure",
        {
          name: name,
          email: email,
          address: address,
          motive: motive,
          model: model,
          message: message,
        },
        "AUBCKE3CS14sbnH-r"
      )
      .then(
        (result) => {
          console.log(result.status);
          setName("");
          setEmail("");
          setAddress("");
          setMotive("");
          setModel("");
          setMessage("");
          if (result.status === 200) {
            setSuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const emailHandle = (e) => {
    const eva = emailForm.test(e);
    if (eva) {
      setEmail(e);
      setEmailError(false);
    } else {
      setEmail(e);
      setEmailError(true);
    }
  };
  const nameHandle = (e) => {
    const eva = textEvaluation.test(e);
    if (eva) {
      setName(e);
      setNameError(false);
    } else {
      setName(e);
      setNameError(true);
    }
  };
  return (
    <div className="v-contact">
      <div className="v-contact__header">
        <CHeader />
      </div>
      <div className="v-contact__container">
        <div className="v-contact__side-bar"></div>
        <div className="v-contact__section">
          <div className="v-contact__section__container">
            <h1 className="v-contact__section__title">Acércate</h1>
          </div>
          <div className="v-contact__section__container">
            <form onSubmit={sendEmail} className="v-contact__section__form">
              <div className="v-contact__section__form__container">
                <input
                  type="text"
                  className={
                    nameError
                      ? "v-contact__section__form__half-input-error"
                      : "v-contact__section__form__half-input"
                  }
                  placeholder="Nombre Completo (*)"
                  value={name}
                  onChange={(e) => {
                    nameHandle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className={
                    emailError
                      ? "v-contact__section__form__half-input-error"
                      : "v-contact__section__form__half-input"
                  }
                  placeholder="Correo Electrónico (*)"
                  value={email}
                  onChange={(e) => {
                    emailHandle(e.target.value);
                  }}
                />
              </div>
              <div className="v-contact__section__form__container">
                <input
                  type="text"
                  className="v-contact__section__form__input"
                  placeholder="Dirección (*)"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="v-contact__section__form__container">
                <input
                  type="text"
                  className="v-contact__section__form__half-input"
                  placeholder="Motivo de contacto (*)"
                  value={motive}
                  onChange={(e) => {
                    setMotive(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="v-contact__section__form__half-input"
                  placeholder="Modelo de interés (opcional)"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                />
              </div>
              <div className="v-contact__section__form__container">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Comentarios (*)"
                  className="v-contact__section__form__text-area"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              {name && email && address && motive && message ? (
                <input
                  type="submit"
                  value="Enviar"
                  className="v-contact__section__form__button"
                />
              ) : (
                <input
                  type="submit"
                  value="Enviar"
                  className="v-contact__section__form__button__disabled"
                  disabled
                />
              )}
              {success && (
                <div className="v-contact__form__success">
                  Formulario enviado exitosamente
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <CScrollUp />
      <CFooter />
    </div>
  );
}

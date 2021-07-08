import React, { useState, useEffect, useRef } from "react";
import styles from "./contact.module.css";
import cx from "classnames";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import axios from "axios";

const Contact = () => {
  library.add(fab, fas);
  const phone = <FontAwesomeIcon icon={["fas", "mobile-alt"]} />;

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const refTextMessage = useRef();

  const [datafield, setDatafield] = useState({
    from_name: "",
    from_email: "",
    sujet: "",
    message: "",
  });

  const [sendState, setSendState] = useState("");

  const handleChangeInput = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    setDatafield({
      ...datafield,
      [name]: value,
    });
  };

  const [textButon, setTexButon] = useState("Envoyer");

  const handleSubmitMessage = (e, datafield) => {
    e.preventDefault();
    let sujet = datafield.sujet;
    let email = datafield.from_email.toLowerCase();
    let emailValidate = false;
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      emailValidate = true;
    } else {
      console.log("Email Invalide");
    }

    if (sujet !== "" && emailValidate == true) {
      let loading = <FontAwesomeIcon icon={["fas", "spinner"]} pulse />;
      let success = <FontAwesomeIcon icon={["fas", "check"]} />;

      setSendState(loading);
      // refTextMessage.current.textContent = "Envoie en cours";
      setTexButon("Envoie en cours");
      axios
        .post(`${process.env.REACT_APP_API_URL}/sendmail/`, datafield)
        .then(() => {
          setSendState(success);
          setTexButon("Message envoyé");
        })
        .catch((error) => {
          setSendState("");
          setTexButon("Erreur lors de l'envoie");
          console.log(error);
        });
    }
  };

  return (
    <section>
      <div className={styles.heading}>
        <div className={cx(styles.singleContain)}>
          <h2 className={styles.title}>Contactez-Moi</h2>
          <div className={styles.intro}>
            <p>
              Vous souhaitez me contacter ? Dans ce cas vous pouvez m'envoyer un
              mail à l'adresse suivante{" "}
              <a
                className={styles.phone}
                href="mailto: assadi.halifa@gmail.com"
              >
                {" "}
                assadi.halifa@gmail.com
              </a>{" "}
              ou en remplissant le formulaire ci-dessous ou par telephone au :
            </p>
            <p>
              {" "}
              <a className={styles.phone} href="tel:+33672492315">
                <span> {phone} </span> 0672 49 23 15
              </a>
            </p>
            <p>je veillerai à vous répondre dans les plus brefs délais.</p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <div className="container">
          <form
            action=""
            className={styles.contact_form}
            onSubmit={(e) => handleSubmitMessage(e, datafield)}
          >
            <div className={styles.form_row}>
              <div className={cx(styles.form_group, styles.col_6)}>
                <label htmlFor="from_name" className={styles.label}>
                  Nom
                </label>
                <input
                  name="from_name"
                  id="from_name"
                  className={styles.form_control}
                  type="text"
                  placeholder="Nom et Prénom*"
                  required
                  onChange={(e) => handleChangeInput(e)}
                />
              </div>

              <div className={cx(styles.form_group, styles.col_6)}>
                <label htmlFor="from_email" className={styles.label}>
                  Prénom
                </label>
                <input
                  name="from_email"
                  id="from_email"
                  className={styles.form_control}
                  type="email"
                  placeholder="Email*"
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
              </div>

              <div className={cx(styles.form_group, styles.col_12)}>
                <label htmlFor="sujet" className={styles.label}>
                  Objet
                </label>
                <input
                  name="sujet"
                  id="sujet"
                  className={styles.form_control}
                  type="text"
                  placeholder="Objet*"
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
              </div>

              <div className={cx(styles.form_group, styles.col_12)}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={styles.form_control}
                  name="message"
                  rows="10"
                  placeholder="Votre Message"
                  onChange={(e) => handleChangeInput(e)}
                ></textarea>
              </div>

              <div
                className={cx(
                  styles.form_group,
                  styles.col_12,
                  styles.text_center
                )}
              >
                <button
                  id="sendMessage_btn"
                  type="submit"
                  className={styles.send_btn}
                >
                  {textButon}

                  <span className={styles.loadIcon}>{sendState}</span>
                </button>
              </div>
            </div>
            <div className={styles.showMessage}>
              <p ref={refTextMessage} className={styles.textMessage}></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

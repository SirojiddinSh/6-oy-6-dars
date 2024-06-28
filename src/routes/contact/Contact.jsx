import React from "react";
import "./Contact.css";
import iconPhone from "../../images/icons/contact-icon-phone.png";
import iconMail from "../../images/icons/contact-icon-email.png";
import iconLocation from "../../images/icons/contact-icon-map.png";

const Contact = () => {
    return (
        <div className="container-contact">
            <div className="contact">
                <h2>Contact</h2>
            </div>
            <div className="contact__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95968.87226119653!2d69.1666944!3d41.264742399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1719581920483!5m2!1sru!2s"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="contact__content">
                <div className="contact__info">
                    <div className="contact__info-item">
                        <img src={iconPhone} alt="" />
                        <div>
                            <h4>+998 94 601 35 35</h4>
                            <p>
                                Fahradit klasický smysluplný text vhodnou
                                bezvýznamovo
                            </p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <img src={iconLocation} alt="" />
                        <div>
                            <h4>Tashkent</h4>
                            <p>
                                {" "}
                                Fahradit klasický smysluplný text vhodnou
                                bezvýznamovo
                            </p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <img src={iconMail} alt="" />
                        <div>
                            <h4>yobbanazarbobo@gmail.com</h4>
                            <p>
                                Fahradit klasický smysluplný text vhodnou
                                bezvýznamovo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
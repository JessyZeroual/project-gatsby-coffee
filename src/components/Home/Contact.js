import React from "react";
import Title from "../Globals/Title";

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact" />
      <div className="row">
        <div className=" col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/jesszeroual@gmail.com" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="jessy"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="jessy@gmail.com"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="description">Message</label>
              <textarea
                type="description"
                rows="5"
                className="form-control"
                name="description"
                id="description"
                placeholder="Ajouter votre Message..."
              />
            </div>
            {/* submit */}
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
}

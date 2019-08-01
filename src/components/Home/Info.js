import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Notre histoire" />
        <div className="row">
          <div className="col-1à col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5 text-justify">
              C'est en 1971 que le premier magasin Gatsby-Coffee ouvre ses portes à
              Paris, bien loin de l'esprit coffee shop actuel puisque
              le magasin proposait du café en grain. C'était donc une activité
              plus proche du torréfacteur ou revendeur de café que du café de
              rue. En 1983, l'un des entrepreneurs fait un voyage à Milan et
              découvre les cafés que l'on appelle là-bas les bars à espresso. De
              retour dans sa ville, il introduit la vente de cafés à consommer
              sur place dans ses établissements. Plus tard, il simplifiera la
              carte, apportera une atmosphère plus décontractée et une ambiance
              à l'américaine. C'est en 1987 que l'enseigne définit les contours
              de son concept actuel. A cette date les entrepreneurs ambitieux
              plannifient 150 ouvertures en 5 ans sur le sol Français.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

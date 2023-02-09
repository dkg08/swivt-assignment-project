import React from "react";
import { delicacieData } from "../../data.js";
import { CatalogCard } from "../catalogCard/CatalogCard.jsx";
import "./catalog.scss";

export const Catalog = () => {
  return (
    <div className="catalogSection">
      <div className="catalogSectionWrapper">
        {/* catalog section header*/}

        <h3>
          Catalog sections <br />
          delicacies
        </h3>

        {/* delicacies list  */}
        <div className="delicaciesList">
          {delicacieData.map((delicacie) => (
            <CatalogCard
              key={delicacie.id}
              icon={delicacie.icon}
              caption={delicacie.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

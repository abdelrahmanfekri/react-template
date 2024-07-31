import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gql, useSubscription } from "@apollo/client";

const GET_HOME = gql`
  subscription Mysupscription {
    businesses {
      name
    }
  }
`;
export default function Home() {
  const { t } = useTranslation();
  const { data } = useSubscription(GET_HOME);
  return (
    <div>
      <h1>{t("home")}</h1>
      <ul>
        {data &&
          data.business.map((business) => (
            <li key={business.name}>{business.name}</li>
          ))}
      </ul>
    </div>
  );
}

import React from "react"
import { Link } from "react-router-dom"

import "./Error.css"

export default class Error extends React.Component {
  render() {
    return (
      <main className="Error">
        <p className="Code-erreur">404</p>

        <p className="Message-erreur">
          Oups! La page que vous demandez n'existe pas.
        </p>

        <p className="Retour-acceuil">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </p>
      </main>
    )
  }
}
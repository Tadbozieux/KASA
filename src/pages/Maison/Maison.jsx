import React from "react"
import { NavLink } from "react-router-dom"
// import "./Houses.css"
import Carrousel from "../../components/Carrousel/Carrousel"
import Infos from "../../components/Infos/Infos"
import Error from "../Error/Error"
import Collapse from "../../components/Collapse/Collapse"

export default class Maison extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      datas: [],
    }
  }

  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then(
        (jsonResponse) => {
          const idInUrl = this.props.match.params.id
          const itemToShow = jsonResponse.find((item) => item.id === idInUrl)

          if (itemToShow) {
            this.setState({
              isLoaded: true,
              datas: itemToShow,
            })
          }
        },
        (error) => {
          this.setState({ error })
        }
      )
  }

  componentDidMount() {
    this.getData("../datas.json")
  }

  render() {
    const { error, isLoaded } = this.state

    if (error) {
      return (
        <div>
          <Error />
        </div>
      )
    } else if (!isLoaded) {
      return (
        <NavLink to="/logement_non_trouvé">
          <div className="progress">
            Chargement en cours, si celui-ci dure trop longtemps cliquer pour
            essayer à nouveau
          </div>
        </NavLink>
      )
    } else {
      const {
        host,
        location,
        rating,
        tags,
        title,
        description,
        equipments,
        pictures,
      } = this.state.datas

      return (
        <main className="Houses">
          <Carrousel imgUrls={pictures} />
          <Infos
            location={location}
            title={title}
            tags={tags}
            host={host}
            rating={rating}
          />
          <div className="houseCollapses">
            <div className="houseDetails">
              <Collapse title="Description" content={description} />
            </div>
            <div className="houseDetails">
              <Collapse title="Équipements" content={equipments} />
            </div>
          </div>
        </main>
      )
    }
  }
}
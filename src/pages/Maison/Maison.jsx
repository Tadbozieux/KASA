import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Maison.css";
import datas from "../../data/data";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import redstar from "../../assets/redstar.svg";
import greystar from "../../assets/greystar.svg";

export default function Accomodation() {
  const [imageSlider, setImageSlider] = useState([]);

  const idAccomodation = useParams("id").id;
  const dataCurrentAccomodation = datas.filter(
    (data) => data.id === idAccomodation
  );

  useEffect(() => {
    const dataCurrentAccomodation = datas.filter(
      (data) => data.id === idAccomodation
    );
    setImageSlider(dataCurrentAccomodation[0].pictures);
  }, [idAccomodation]);

  const name = dataCurrentAccomodation[0].host.name.split(" ");
  const rating = dataCurrentAccomodation[0].rating;
  const description = dataCurrentAccomodation[0].description;
  const equipments = dataCurrentAccomodation[0].equipments;

  const collapsibleContentMaison = [
	{
	  title: "Description",
	  content: description,
	},
	{
	  title: "Équipements",
	  content: equipments,
	},
  ];

  return (
    <>
      <Carrousel imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation[0].title}</h1>
            <p>{dataCurrentAccomodation[0].location}</p>
            <div className="accomodation_content_infos_button">
              {dataCurrentAccomodation[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div className="accomodation_content_hostnameimg">
              <div className="accomodation_content_host_name">
                <p>{name[0]}</p>
                <p>{name[1]}</p>
              </div>
              <img
                className="img_host"
                src={dataCurrentAccomodation[0].host.picture}
                alt="host of this accomodation"
              />
            </div>
            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redstar : greystar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="houseCollapses">
          <div className="houseDetails">
		  <Collapse collapsibleItems={collapsibleContentMaison} className="row" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

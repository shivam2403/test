// Card.jsx
import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { useExternalUrl } from '../../../context/ExternalUrlContext';

const Card = ({ show }) => {
  const externalUrl = show.url;
    const {setExternalUrl,setName,setImg,setRating,setSummary,setOfficialSite,setGenre} = useExternalUrl();

  const handleNavigate=()=>{
    setExternalUrl(externalUrl);
    setName(show.name);
    setImg(show.image?.original);
    setRating(show.rating);
    setGenre(show.genres);
    setSummary(show.summary);
    setOfficialSite(show.officialSite);
  }

  return (
    <div className='cd'>
      <Link to={`/show/${show.id}`} onClick={handleNavigate}  style={{ textDecoration: "none",display:"flex",flexDirection:"column",gap:"15px"}}>
        <img className='cd_img' src={show?.image?.original || "https://wallpapercave.com/dwp2x/wp1917154.jpg"} alt="" />
        <h2 style={{ color: "#D81F26", background: "black", width: "280px", textAlign: "center", padding: "10px", borderRadius: "5px" }}>{show.name}</h2>
      </Link>
    </div>
  );
};

export default Card;

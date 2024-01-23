import './show.css'
import { useExternalUrl } from '../../context/ExternalUrlContext';
import { useEffect, useState } from 'react';

const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

const Show = () => {
    const { externalUrl, name, img, genre, summary, officialSite, rating,setExternalUrl,setName,setImg,setRating,setSummary,setOfficialSite,setGenre } = useExternalUrl();

//   const handleNavigate=()=>{
//     setExternalUrl(externalUrl);
//     setName(name);
//     setImg(img?.original);
//     setRating(rating);
//     setGenre(genre);
//     setSummary(summary);
//     setOfficialSite(officialSite);
//   }

//   useEffect(()=>{
//     handleNavigate();
//   },[])

  console.log(externalUrl, name, img, summary, officialSite, rating);

  const [text, setText] = useState('');

  useEffect(() => {
    setText(stripHtmlTags(summary));
  }, [summary]);


  return (
    <div className='sw'>
      <div className="sw_left">
        <img className='sw_img' src={img} alt="" />
      </div>
      <div className="sw_right">
        <h1 className='sw_name'>{name}</h1>
        <h2 className='sw_genre'>
          Genres: {genre ? genre.join(', '):''}
        </h2>
        <p className='sw_summary'><b>Description:</b> {text}</p>
        <h2 className='sw_rating'>Rating: {rating && rating.average}</h2>
        <a className='sw_book' href={officialSite}><button className='sw_btn'>Book now</button></a>
      </div>
    </div>
  );
};

export default Show;

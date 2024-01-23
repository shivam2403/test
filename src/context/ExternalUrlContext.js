import { createContext, useContext, useState } from 'react';


const ExternalUrlContext = createContext();

export const ExternalUrlProvider = ({ children }) => {
  const [externalUrl, setExternalUrl] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const [officialSite, setOfficialSite] = useState('');
  const [genre,setGenre]=useState([]);

  return (
    <ExternalUrlContext.Provider value={{ externalUrl, setExternalUrl,name,setName,img,setImg,rating,setRating,summary,setSummary,officialSite,setOfficialSite,genre,setGenre }}>
      {children}
    </ExternalUrlContext.Provider>
  );
};

export const useExternalUrl = () => useContext(ExternalUrlContext);

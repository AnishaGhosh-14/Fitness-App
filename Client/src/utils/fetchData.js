export const exerciseOptions = {
  method: "GET",
  params: {limit: '1000'},
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
 
  headers: {
    'X-RapidAPI-Key': 'b3c642ad13msh5cd90d6e6b309aap11f3bbjsn200ac9e20dfc',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log("---------------data",data);
  return data;
};

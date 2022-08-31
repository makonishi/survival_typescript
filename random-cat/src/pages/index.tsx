import { useState } from "react";
 
interface CatCategory {
  id: number;
  name: string;
}
 
interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}
 
type SearchCatImageResponse = SearchCatImage[];
 
const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};
 
const IndexPage = () => {
  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  );
 
  const handleClick = async () => {
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
  };
 
  return (
    <div>
      <button onClick={handleClick}>きょうのにゃんこ🐱</button>
      <div style={{ marginTop: 8 }}>
        <img src={catImageUrl} width={500} height="auto" />
      </div>
    </div>
  );
};
 
export default IndexPage;

import React, { useState, useContext, useEffect } from "react";
import { destinations_Data } from "../data";
import { createClient } from "contentful";
import { pagination } from "../utils/utils";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [Data, setData] = useState([]);
  const [DesData, setDesData] = useState(destinations_Data);
  const [IsLoading, SetIsLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  let latestPosts;
  const client = createClient({
    space: "xp3ehvbs6dy6",
    accessToken: import.meta.env.VITE_API_KEY,
  });

  //Fetch data
  const fetch = async () => {
    SetIsLoading(true);
    try {
      const response = await client.getEntries({ content_type: "blog" });

      const blogs = response.items.map((item) => {
        const { title, articleBlog, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        const date = item.sys.createdAt;
        return {
          titleOfBlog: title,
          text: articleBlog,
          image: img,
          id: id,
          createdAt: date,
        };
      });
      setData(blogs);
      setPageData(pagination(blogs));
      SetIsLoading(false);
    } catch (error) {
      console.log(error);
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  const SortData = () => {
    const sortData = Data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortData.slice(0, 6);
  };
  const resetAll = () => {
    setDesData(destinations_Data);
  };
  const FilterAfrica = () => {
    const africa = destinations_Data.filter(
      (card) => card.continent == "Africa"
    );
    setDesData(africa);
  };
  const FilterEurope = () => {
    const Europe = destinations_Data.filter(
      (card) => card.continent == "Europe"
    );
    setDesData(Europe);
  };
  const FilterAsia = () => {
    const Asia = destinations_Data.filter((card) => card.continent == "Asia");
    setDesData(Asia);
  };
  const FilterNorthamerica = () => {
    const North = destinations_Data.filter(
      (card) => card.continent == "North America"
    );
    setDesData(North);
  };
  const FilterSouthhamerica = () => {
    const South = destinations_Data.filter(
      (card) => card.continent == "South America"
    );
    setDesData(South);
  };
  const Australia = () => {
    const Australia = destinations_Data.filter(
      (card) => card.continent == "Australia"
    );
    setDesData(Australia);
  };
  return (
    <AppContext.Provider
      value={{
        Data,
        DesData,
        setDesData,
        FilterAfrica,
        resetAll,
        FilterEurope,
        FilterAsia,
        FilterSouthhamerica,
        FilterNorthamerica,
        Australia,
        IsLoading,
        SetIsLoading,
        fetch,
        SortData,
        pageData,
        setPageData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

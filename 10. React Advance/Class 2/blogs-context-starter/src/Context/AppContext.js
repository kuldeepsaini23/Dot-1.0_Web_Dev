import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//!Step 1
export const AppContext = createContext();

//!Step 2

export default function AppContextProvider({children}){
  const [loading, setLoading] = useState(false);
  const [posts, setPosts]  = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  //*Data Filling through API
  async function fetchBlogPosts(page = 1){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try{
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);

    }catch(error){
        console.log("error in fetching Data");

        setPage(1);
        setPosts([]);
        setTotalPage(null);
    }

    setLoading(false);
  }


  

  function handlePageChange(page){
    setPosts(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    handlePageChange,
    fetchBlogPosts
  };

  return <AppContext.Provider value={value}>
     {children}
  </AppContext.Provider>
}
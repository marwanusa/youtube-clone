const handelSearch = (search,navigate) => {
    if(search.length > 0)
    {
      navigate(`/search/${search}`);
    }
  };

export default handelSearch
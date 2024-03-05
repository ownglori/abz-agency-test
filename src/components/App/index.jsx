import {useEffect, useState} from "react";
import {Header, Banner, Main, Users, SingUp} from "@/components";
import {API} from "@/constants";


export const App = () => {
  const [data, setData] = useState({users: [], current_page: null, last_page: false});
  const [loading, setLoading] = useState(true);

  const fetchSuccess = (result, resetPagination) => {
    setData({
      users: resetPagination ? result.users : [...data.users, ...result.users],
      current_page: result.page,
      last_page: result.page === result.total_pages
    });
  };

  const fetchError = (error) => {
    console.error(error);
  };

  const fetchHandler = (result, resetPagination) => {
    if (result.success) {
      fetchSuccess(result, resetPagination);
    } else {
      fetchError(result.message);
    }
  };

  const getUsers = (link, resetPagination) => {
    setLoading(true);

    fetch(link)
      .then(response => response.json())
      .then(result => fetchHandler(result, resetPagination))
      .then(() => setLoading(false))
      .catch(error => fetchError(error));
  };

  const showMoreUsers = () => {
    setLoading(true);
    getUsers(`${API.USERS}?page=${data.current_page + 1}&count=6`);
  };

  const resetPagination = () => getUsers(`${API.USERS}?page=1&count=6`, true);

  useEffect(() => getUsers(`${API.USERS}?page=1&count=6`), []);

  return (
    <>
      <Header/>
      <Main>
        <Banner/>
        <Users data={data} loading={loading} buttonHandler={showMoreUsers}/>
        <SingUp resetPagination={resetPagination}/>
      </Main>
    </>
  );
};

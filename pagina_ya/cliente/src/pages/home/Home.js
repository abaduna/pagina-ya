import React, { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../hoock/useFetch";
import Table from "react-bootstrap/Table";
import NavBar from "../../componets/Navbar/NavBar";
function Home() {
  const [endpoint, setEndpoint] = useState("data");
  const { state, fetchData } = useFetch(endpoint);
  const { data, loading, error } = state;
  console.log(data);
  useEffect(() => {
    fetchData(endpoint);
  }, []);
  return (
    <><NavBar></NavBar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>profession</th>
          </tr>
        </thead>
        <tbody>
          {data.length >0 && data?.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.profession}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    </>
  );
}

export default Home;

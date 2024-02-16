import React, { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../hoock/useFetch";
import Table from "react-bootstrap/Table";
import NavBar from "../../componets/Navbar/NavBar";

function Home() {
  const [endpoint, setEndpoint] = useState("data");
  const { state, fetchData } = useFetch(endpoint);
  const { data, loading, error } = state;

  useEffect(() => {
    fetchData(endpoint);
  }, []);

  return (
    <>
      <NavBar />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Profesión</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.profession}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;

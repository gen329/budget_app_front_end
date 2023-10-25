import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Transactions from "../Components/Transactions";
const API = import.meta.env.VITE_BASE_URL;

function Index() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  let { index } = useParams();

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
      });
  }, [index]);


  useEffect(() => {
    const transactionTotal = data.reduce((acc, obj) => acc + obj.value, 0);
    setTotal(transactionTotal);
  }, [data]);

  return (
    <div className="Index">
      <h2>Bank Account Total:{total} </h2>
      <Transactions />
    </div>
  );
}

export default Index;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Transactions from "../Components/Transactions";
const API = import.meta.env.VITE_BASE_URL;

function Index() {
  const [data, setData] = useState([]);
  const [newInput, setInput] = useState(0);
  const [total, setTotal] = useState(0);

let { index } = useParams(); 

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
    .then(response => {
      setData(response.Data);
      const transactionTotal = response.data.reduce((acc, obj) => acc + obj.value, 0);
      setTotal(transactionTotal);
    })
    .catch(error => {
      console.error("Error fetching transactions", error);
    });
  }, []);

  const handleNewInput = (event) => {
    const inputValue = parseInt(event.target.value);
    setInput(inputValue);
  };

useEffect(() => {
  setTotal(total + newInput);
}, [newInput]);

  return (
    <div className="Index">
      <h2>Bank Account Total:{total} </h2>
      <Transactions />
    </div>
  );
}

export default Index;
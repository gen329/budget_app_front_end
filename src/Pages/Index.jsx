import { useState, useEffect } from "react";
import Transactions from "../Components/Transactions";
const API = import.meta.env.VITE_BASE_URL;

function Index() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((responseData) => {

        let total = 0;
        for (let i = 0; i < responseData.length; i++) {
          total += Number(responseData[i].amount)
        }
        setTotal(total);
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
      });
  }, []);


  return (
    <div className="Index">
      <h2>Bank Account Total:{total} </h2>
      <Transactions />
    </div>
  );
}

export default Index;
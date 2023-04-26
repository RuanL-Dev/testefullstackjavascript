import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components";
import { usePayment } from "../hooks/usePayment";

function PaymentsList() {
  const { fetchData, payments, error } = usePayment();
  useEffect(() => {
    // The list of payments is available from `GET /api/payments`
    fetchData();
    // react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Link to="/create">New Payment</Link>
      </div>
      <Alert message={error} />
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Card Number</th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cardNumber}</td>
                <td>{item.currency}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PaymentsList;

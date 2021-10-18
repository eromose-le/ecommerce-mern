import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';
import { format } from 'timeago.js';
import './widgetLg.css';

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch (err) {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <div className="widgetLgTitle">Latest transaction</div>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        {/* 1st */}
        <tbody>
          {orders.map((order, i) => (
            <tr className="widgetLgTr" key={i}>
              <td className="widgetLgUser">
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">$ {order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;

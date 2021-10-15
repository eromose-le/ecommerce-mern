import './widgetLg.css';

const WidgetLg = () => {
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
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="User"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Akinwande Vincent</span>
            </td>
            <td className="widgetLgDate">14 Oct 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          {/* 2nd */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="User"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Akinwande Vincent</span>
            </td>
            <td className="widgetLgDate">14 Oct 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          {/* 3rd */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="User"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Akinwande Vincent</span>
            </td>
            <td className="widgetLgDate">14 Oct 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          {/* 4th */}
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="User"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Akinwande Vincent</span>
            </td>
            <td className="widgetLgDate">14 Oct 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Rejected" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;

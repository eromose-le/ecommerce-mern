import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import './featuredInfo.css';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  // const [salesDiff, setSalesDiff] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/orders/income');
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
        // const clone = res.data;
        // const result = Object.assign({}, clone);
        // setSalesDiff(result[1].total - result[0].total);
      } catch (err) {}
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featured">
        {/* 1st */}
        <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ {income[1]?.total}</span>
            <span className="featuredMoneyRate">
              % {Math.floor(perc)}{' '}
              {perc < 0 ? (
                <ArrowDownward className="featuredIcon negative" />
              ) : (
                <ArrowUpward className="featuredIcon" />
              )}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 2nd */}
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ {income[1]?.total}</span>
            <span className="featuredMoneyRate">
              {/* -1.09 */}
              {income[1]?.total < income[0]?.total ? (
                <ArrowDownward className="featuredIcon negative" />
              ) : (
                <ArrowUpward className="featuredIcon" />
              )}
            </span>
          </div>
          <span className="featuredSub">Current month sales</span>
        </div>
        {/* 3rd */}
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ {income[0]?.total}</span>
            <span className="featuredMoneyRate">
              {perc}
              {perc < income[1]?.total ? (
                <ArrowUpward className="featuredIcon" />
              ) : (
                <ArrowDownward className="featuredIcon negative" />
              )}
            </span>
          </div>
          <span className="featuredSub">Previous month sales</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;

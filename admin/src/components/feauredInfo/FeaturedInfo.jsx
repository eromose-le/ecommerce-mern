import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured">
        {/* 1st */}
        <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,212</span>
            <span className="featuredMoneyRate">
              -12.9 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 2nd */}
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,418</span>
            <span className="featuredMoneyRate">
              -1.09 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        {/* 3rd */}
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,442</span>
            <span className="featuredMoneyRate">
              +19.9 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;

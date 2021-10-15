import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {/* 1st */}
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="BA"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Gberaese Austine</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        {/* 2nd */}
        <li className="widgetSmListItem">
          <img
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="BA"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Gberaese Austine</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        {/* 3rd */}
        <li className="widgetSmListItem">
          <img
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="BA"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Gberaese Austine</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        {/* 4th */}
        <li className="widgetSmListItem">
          <img
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="BA"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Gberaese Austine</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        {/* 5th */}
        <li className="widgetSmListItem">
          <img
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="BA"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Gberaese Austine</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;

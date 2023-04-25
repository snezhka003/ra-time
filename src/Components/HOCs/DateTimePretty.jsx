import PropTypes from "prop-types";
import moment from 'moment/min/moment-with-locales'
import 'moment/locale/ru';

moment.locale('ru');

const withDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const { date } = props;

    const transformPrettyTime = moment(date).fromNow();

    return <Component {...props} date={transformPrettyTime} />;
  };

  HOCComponent.propTypes = {
    date: PropTypes.string.isRequired,
  };

  HOCComponent.displayName = "transformDatetimeHOC";
  
  return HOCComponent;
};

export default withDateTimePretty;
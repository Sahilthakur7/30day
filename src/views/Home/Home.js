import React from 'react';
import { fetchNewTime} from '../../redux/actionCreators';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
      <button onClick={props.updateTime}>Update TIme</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime.currentTime
  }
}

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime())
})

export default connect(
  mapStateToProps,
    mapDispatchToProps,
)
(Home);

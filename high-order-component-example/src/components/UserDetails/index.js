import UserDetails from './UserDetails';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(UserDetails);
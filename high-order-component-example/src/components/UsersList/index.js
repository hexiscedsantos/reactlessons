import UsersList from './UsersList';
import { connect } from 'react-redux';
import { actions } from '../../shared/state/user';

const mapStateToProps = (state) => {
  return {
    users: state.user.userList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserClick: (selectedUserIdx) => { dispatch(actions.updateUser(selectedUserIdx)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
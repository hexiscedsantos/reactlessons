import Input from './Input';
import { actions } from '../../shared/state/search';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (inputVal) => dispatch(actions.doSearch(inputVal))
  };
};

export default connect(null, mapDispatchToProps)(Input);
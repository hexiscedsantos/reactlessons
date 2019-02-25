import Button from './Button';
import { actions } from '../../shared/state/search';
import { connect } from 'react-redux';

const mapDispatchToProps =  {
    onClick: actions.submitSearch
};

export default connect(null, mapDispatchToProps)(Button);

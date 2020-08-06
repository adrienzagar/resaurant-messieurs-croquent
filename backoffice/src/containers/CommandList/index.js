//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import CommandList from '../../components/CommandList';
import { getCommand } from '../../actions/command';


const mapStateToProps = (state, ownprops) => ({
    commands: state.command.listCommand,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getCommand: () => dispatch(getCommand()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommandList);
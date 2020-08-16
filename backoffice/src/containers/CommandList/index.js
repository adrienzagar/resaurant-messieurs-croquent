//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import CommandList from '../../components/CommandList';
import { getCommand, changeStatus, saveId } from '../../actions/command';


const mapStateToProps = (state, ownprops) => ({
    commands: state.command.listCommand,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getCommand: () => dispatch(getCommand()),
    changeStatus: () => dispatch(changeStatus()),
    saveId: (id) => dispatch(saveId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommandList);
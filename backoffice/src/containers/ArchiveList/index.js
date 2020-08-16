//! == Import : npm
import { connect } from 'react-redux';

//! == Import : local (actions)
import ArchiveList from '../../components/ArchiveList';
import { getCommand } from '../../actions/command';


const mapStateToProps = (state, ownprops) => ({
    commands: state.command.listCommand,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
    getCommand: () => dispatch(getCommand()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveList);
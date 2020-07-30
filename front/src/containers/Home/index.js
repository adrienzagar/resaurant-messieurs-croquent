import { connect } from 'react-redux';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
    presentation: state.home.presentation,
    imagePresentation: state.home.imagePresentation,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
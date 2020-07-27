import { connect } from 'react-redux';

import Footer from '../../components/Footer/index';

const mapStateToProps = (state) => ({
  socialntworks: state.footer.socialntworks,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
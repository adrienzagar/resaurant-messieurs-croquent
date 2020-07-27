import { connect } from 'react-redux';

import Footer from '../../components/Footer';

const mapStateToProps = (state) => ({
  socialnetworks: state.footer.socialnetworks,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
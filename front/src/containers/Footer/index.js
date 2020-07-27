import { connect } from 'react-redux';

import Footer from '../../components/Footer';

const mapStateToProps = (state) => ({
  socialnetworksData: state.footer.socialnetworksData,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
import { connect } from 'react-redux';

import Footer from '../../components/Footer';

const mapStateToProps = (state) => ({
  links: state.footer.links,
  socialnetworks: state.footer.socialnetworks,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
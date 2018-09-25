import { connect } from 'react-redux'
import { open, close } from '../actions/sidebar';
import PageLayout from '../components/PageLayout';

let mapStateToProps = state => {
    return {
        showSidebar: state.sidebar.showSidebar
    }
}

let mapDispatchToProps = dispatch => {
    return {
        open: () => dispatch(open()),
        close: () => dispatch(close())
    }
}

const PageLayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLayout);

export default PageLayoutContainer;
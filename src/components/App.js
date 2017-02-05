//wrapper component
import Main from './Main';

//binding action creator to a component with a Redux Connect
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';

//Surface Actions and props for Main and direct children
function mapStateToProps(state){
  return {
    contacts: state.contacts,
    history: state.callHistory
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
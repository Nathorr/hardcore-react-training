import App from "../App";
import { connect } from "react-redux";
import { getPersons, hirePerson, firePerson } from "../../ducks/person";

export default connect(
  state => ({
    persons: state.person.get("persons"),
    loading: state.ui.get("loading") > 0
  }),
  {
    getPersons,
    hirePerson,
    firePerson
  }
)(App);

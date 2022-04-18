import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "538754592723-m1k5n49487p3qolut2ced49i2h77pjh9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // Get user sign status
          // reference to the auth object to avoid referencing window.gapi..
          this.auth = window.gapi.auth2.getAuthInstance();
          // Setting the first signIn state
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          // listen to sign event to update status without needing window refresh
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    // this function gets called with a boolean parameter by the listen method
    // console.log(this.auth.isSignedIn.get());
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    // here we pass the user id also
    if (isSignedIn)
      return this.props.signIn(this.auth.currentUser.get().getId());
    if (!isSignedIn) return this.props.signOut();
    // else return null;
  };

  renderAuthButton() {
    // if (this.state.isSignedIn === null) return;
    if (this.props.authState === null) return;

    // if (this.state.isSignedIn)
    if (this.props.authState)
      return (
        <button
          onClick={() => this.auth.signOut()}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );

    return (
      <button
        onClick={() => {
          this.auth.signIn();
        }}
        className="ui blue google button"
      >
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { authState: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

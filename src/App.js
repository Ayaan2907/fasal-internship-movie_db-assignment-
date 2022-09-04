import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import {
  withAuthenticator,
  AmplifySignOut,
  Heading,
} from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        Hello {user.username}
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
// export default App;

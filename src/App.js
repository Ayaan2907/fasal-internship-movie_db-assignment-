import logo from "./logo.svg";
import "./App.css";
import {  Amplify } from "aws-amplify";
import { withAuthenticator, Button, Heading, AmplifySignOut } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <Heading level={1}>Hello {user.username}</Heading>
        {/* <Button onClick={signOut}>Sign out</Button> */}
      <AmplifySignOut/>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
// export default App;

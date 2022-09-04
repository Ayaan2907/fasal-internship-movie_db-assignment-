import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import {
  withAuthenticator,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App({user}) {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello </p>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
// export default App;

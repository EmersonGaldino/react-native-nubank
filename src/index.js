import React from "react";
import { StatusBar } from "react-native";

import "~/config/ReactotronConfig";

import Routes from "~/routes";

const App = () => (
  <>
    <StatusBar barStyle="light-content" background="8810ae" />
    <Routes />
  </>
);

export default App;

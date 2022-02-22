import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { GoalsScreen } from "./screens/goals.screen";

export default function App() {
  return (
    <>
      <GoalsScreen />
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}


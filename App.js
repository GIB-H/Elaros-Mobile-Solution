import * as React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { GoalsScreen } from "./screens/goals.screen";
import { CreateGoalScreen } from "./screens/createGoal.screen";

export default function App() {
  return (
    <>
      <CreateGoalScreen></CreateGoalScreen>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}; 

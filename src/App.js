import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";

import WorkoutStatus from'./workoutStatus'
import AddWorkout from "./addWorkout.js";

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const addNewWorkout = () => {
    const newWorkout = generateWorkout();
    console.log("addNewWorkout:", newWorkout);
    const newWorkoutList = [...workouts, newWorkout];
    setWorkouts(newWorkoutList)
  };

  const deleteWorkout = (workout) => {
    console.log("deleteWorkout:", workout);
    const newWorkoutList = workouts.filter(
      (filteredWorkouts) => filteredWorkouts !== workout
    );
    setWorkouts(newWorkoutList)
  };

  const completeWorkout = (workout) => {
    console.log("completeWorkout:", workout);
    const newWorkoutList = workouts.map((checkWorkout) => {
      if (checkWorkout === workout) {
        checkWorkout.done = true;
      }
      return checkWorkout;
    });
    setWorkouts(newWorkoutList);
  };

  // const completeWorkout = (workout) => {
  //   // figuring out the new state
  //   // change the complete property to true
  //   const newWorkoutList = workouts.map((checkWorkout) => {
  //     if (checkWorkout === workout) {
  //       const newWorkoutList2 = {...checkWorkout, complete: true}
  //       return newWorkoutList2
  //     }
  //     return checkWorkout
  //   })

  //   // ask react to update the old state to the new state
  //   setWorkouts(newWorkoutList)
  // }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      {/* <button onClick={addNewWorkout}>Add New Workout</button> */}
      <AddWorkout addNewWorkout={addNewWorkout}/>
      <ul>
        {workouts.map((workout, index) => (
          <WorkoutStatus workout={workout} index={index} completeWorkout={completeWorkout} deleteWorkout={deleteWorkout}/>
        ))}
      </ul>
    </div>
  );
}

export default App;

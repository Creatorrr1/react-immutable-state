function WorkoutStatus (props) {
    return (
            <li key={props.index}>
              <p>
                {props.workout.sets}x sets of{" "}
                <strong>
                  {props.workout.reps}x{props.workout.exercise}
                </strong>{" "}
                with {props.workout.rest} seconds rest
              </p>
              {!props.workout.done && (
                <button onClick={(e) => props.completeWorkout(props.workout)}>Done</button>
              )}
              {props.workout.done && <p>✅</p>}
              <button onClick={(e) => props.deleteWorkout(props.workout)}>Delete</button>
            </li>
    )
}

export default WorkoutStatus
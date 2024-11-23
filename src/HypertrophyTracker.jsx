import React, { useState, useEffect } from "react";
import Tracker from "./Components/Tracker";
import "./HypertrophyTracker.css";

function HypertrophyTracker() {
    const [trackers, setTrackers] = useState(() => {
        const savedTrackers = localStorage.getItem("trackers");
        return savedTrackers ? JSON.parse(savedTrackers) : [];
    });

    const [inputs, setInputs] = useState({
        exercise: "",
        sets: "",
        reps: "",
        weight: "",
    });

    useEffect(() => {
        localStorage.setItem("trackers", JSON.stringify(trackers));
    }, [trackers]);

    function onInputChange(e) {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    }

    function onAddButtonClicked() {
        if (!inputs.exercise && !inputs.sets && !inputs.reps && !inputs.weight) {
            alert("Please fill out at least one field");
            return;
        }

        setTrackers((prevTrackers) => [
            ...prevTrackers,
            {
                id: Date.now(),
                exercise: inputs.exercise,
                sets: inputs.sets,
                reps: inputs.reps,
                weight: inputs.weight,
            },
        ]);

        setInputs({ exercise: "", sets: "", reps: "", weight: "" });
    }

    function onRemoveButtonClicked(id) {
        setTrackers((prevTrackers) => prevTrackers.filter((tracker) => tracker.id !== id));
    }

    return (
        <div className="hypertrophy_tracker">
            <div className="header-banner">
                <div className="hypertrophy-tracker-label">Hypertrophy Tracker</div>
            </div>
            <div className="content">
                <div className="input-div">
                    <div className="exercise-input">
                        <input
                            type="text"
                            name="exercise"
                            className="exercise_input_field universal_input"
                            placeholder="Exercise"
                            value={inputs.exercise}
                            onChange={onInputChange}
                        />
                        <input
                            type="text"
                            name="sets"
                            className="set_input_field universal_input"
                            placeholder="Sets"
                            value={inputs.sets}
                            onChange={onInputChange}
                        />
                        <input
                            type="text"
                            name="reps"
                            className="rep_input_field universal_input"
                            placeholder="Reps"
                            value={inputs.reps}
                            onChange={onInputChange}
                        />
                        <input
                            type="text"
                            name="weight"
                            className="weight_input_field universal_input"
                            placeholder="Weight"
                            value={inputs.weight}
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <button className="add-button" onClick={onAddButtonClicked}>
                    <p className="add">Add</p>
                </button>
                <div className="tracker-list-div">
                    {trackers.map((tracker) => (
                        <Tracker
                            key={tracker.id}
                            id={tracker.id}
                            exercise={tracker.exercise}
                            sets={tracker.sets}
                            reps={tracker.reps}
                            weight={tracker.weight}
                            onRemove={() => onRemoveButtonClicked(tracker.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HypertrophyTracker;

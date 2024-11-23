function Tracker({ id, exercise, sets, reps, weight, onRemove }) {
    return (
        <div className="tracker-container">
            <div className="tracker-info">
                <div className="tracker-inputs">
                <img className="x-button" src="x-button.png" alt="Remove" onClick={onRemove}/>
                    <input 
                        type="text" 
                        value={exercise} 
                        className="tracker-input-fields" 
                        readOnly 
                    />
                    <input 
                        type="text" 
                        value={`${sets} Sets`} 
                        className="tracker-input-fields" 
                        readOnly 
                    />
                    <input 
                        type="text" 
                        value={`${reps} Reps`} 
                        className="tracker-input-fields" 
                        readOnly 
                    />
                    <input 
                        type="text" 
                        value={`${weight} Lbs`} 
                        className="tracker-input-fields" 
                        readOnly 
                    />
                </div>
            </div>
        </div>
    );
}

export default Tracker;

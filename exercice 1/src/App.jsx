import React from "react";

export default function App() {
  const [score, setScore] = React.useState(5);

  const handleScoreChange = (e) => {
    const newScore = parseInt(e.target.value);
    setScore(newScore);
  }

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${10 * score}%`;

    // 2- Compute color (optional)
    let scoreColor;

    // 3 - Return the style object
    if (score <= 2) {
      scoreColor = `#f3bc47`;
    } else if (score <= 5) {
      scoreColor = `#b9c54b`;
    } else if (score <= 7) {
      scoreColor = `#c7e755`;
    } else {
      scoreColor = `#9cc54b`;
    }

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}

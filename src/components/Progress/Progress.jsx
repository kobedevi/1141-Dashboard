const procent = 65;

export const Progress = () => {
  return (
    <div className="progress__container">
      <h1 className="progress__timer">21:18</h1>
      <div className="progress__bar">
        <div className="progress__fill" style={{ width: procent + "%" }}></div>
      </div>
    </div>
  );
};

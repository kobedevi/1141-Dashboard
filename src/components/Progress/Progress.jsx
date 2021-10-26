const procent = 65;

export const Progress = () => {
  return (
    <div class="progress__container">
      <h1 class="progress__timer">21:18</h1>
      <div class="progress__bar">
        <div class="progress__fill" style={{ width: procent + "%" }}></div>
      </div>
    </div>
  );
};

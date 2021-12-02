import { useEffect } from "react";
import { useTimer } from "use-timer";
import useElectron from "../../core/hooks/useElectron";

const timeFormat = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;

  let updatedSeconds;
  if (seconds.toString().length < 2) {
    updatedSeconds = "0" + JSON.stringify(seconds);
  } else {
    updatedSeconds = JSON.stringify(seconds);
  }

  let updatedMinutes;
  if (minutes.toString().length < 2) {
    updatedMinutes = "0" + JSON.stringify(minutes);
  } else {
    updatedMinutes = JSON.stringify(minutes);
  }

  return updatedMinutes + ":" + updatedSeconds;
};

export const Timer = () => {
  const { ipcRenderer } = useElectron();

  let duration = 3600;
  let x = 300;

  const { time, start, pause, reset, advanceTime } = useTimer({
    initialTime: duration,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      console.log("Time is over");
      // ipcRenderer.send("endGame");
    },
  });

  // Register listener after first render
  useEffect(() => {
    ipcRenderer.on("timer", (event, arg) => {
      if (arg === "start") {
        start();
      } else if (arg === "stop") {
        reset();
      } else if (arg === "pause") {
        pause();
      } else if (arg === "add") {
        advanceTime(-x);
      } else if (arg === "sub") {
        advanceTime(x);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1 className="progress__timer">{timeFormat(time)}</h1>;
};

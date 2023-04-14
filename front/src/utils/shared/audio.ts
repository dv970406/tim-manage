export const playAudio = (filePath: string) => {
  var audio = new Audio(filePath);
  audio.load();
  audio.volume = 1;
  audio.play();
};

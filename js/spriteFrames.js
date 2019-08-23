let heroFrames = [
  { name: "player_walk01", frame: { x: 0, y: 0, width: 32, height: 32 } },
  { name: "player_walk02", frame: { x: 32, y: 0, width: 32, height: 32 } },
  { name: "player_walk03", frame: { x: 64, y: 0, width: 32, height: 32 } },
  { name: "player_walk04", frame: { x: 0, y: 32, width: 32, height: 32 } },
  { name: "player_walk05", frame: { x: 32, y: 32, width: 32, height: 32 } },
  { name: "player_walk06", frame: { x: 64, y: 32, width: 32, height: 32 } },
  { name: "player_walk07", frame: { x: 0, y: 64, width: 32, height: 32 } },
  { name: "player_walk08", frame: { x: 32, y: 64, width: 32, height: 32 } },
  { name: "player_walk09", frame: { x: 64, y: 64, width: 32, height: 32 } },
  { name: "player_walk10", frame: { x: 0, y: 96, width: 32, height: 32 } },
  { name: "player_walk11", frame: { x: 32, y: 96, width: 32, height: 32 } },
  { name: "player_walk11", frame: { x: 64, y: 96, width: 32, height: 32 } }
];

let frameGenerator = (xFrame, yFrame, width, height) => {
  let spriteArray = [];

  for (let i = 0; i < yFrame; i++) {
    for (let j = 0; j < xFrame; j++) {
      spriteArray.push({
        name: `fire_frame${j + i * xFrame}`,
        frame: { x: width * j, y: height * i, width, height }
      });
    }
  }

  return spriteArray;
};

let fireFrames = frameGenerator(10, 6, 68, 9);

export default function cancelOrContinue() {
  return new Promise((resolve) => {
    const handler = (buffer) => {
      process.stdin.removeListener("data", handler);
      process.stdin.setRawMode(false);
      process.stdin.pause();

      const bytes = Array.from(buffer);
      if (bytes.length && bytes[0] === 3) {
        process.exit();
      }

      process.nextTick(resolve);
    };

    process.stdin.resume();
    process.stdin.setRawMode(true);

    process.stdin.once("data", handler);
  });
}

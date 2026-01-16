export const sleepForTimeMs = async (timeMs: number) => {
  await new Promise((resolve) => setTimeout(resolve, timeMs));
};

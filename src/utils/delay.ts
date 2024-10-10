/**
 * A delay function used to illustrate different states of the app during API fetching
 * @param ms - Time in ms
 */
const delay = async (ms: number) => {
  await new Promise(resolve => setTimeout(resolve, ms));
};

export default delay;

export async function simulateDelay(ms: number = 12000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

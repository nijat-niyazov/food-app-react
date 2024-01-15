export const delay = (ms: number = 3000): Promise<{ success: boolean }> =>
  new Promise((res) => setTimeout(() => res({ success: true }), ms));

export interface EnhancedError extends Error {
  status: number;
  code: string;
}

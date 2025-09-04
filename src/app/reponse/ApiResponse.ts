export interface ApiResponse<T> {
  msgStatus: string;
  message: string;
  statusCode: number;
  result: T;
}

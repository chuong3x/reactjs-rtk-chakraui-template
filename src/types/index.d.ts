declare interface IResponse {
    statusCode: number;
    message: string;
}

declare interface IServerResponse<T> extends IResponse {
    data: T;
}

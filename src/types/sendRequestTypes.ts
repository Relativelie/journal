export interface SendRequestState {
    isRequestLoading: boolean,
    isRequestSuccess: boolean,
    isRequestFatal: boolean,
    isRequestError: boolean,
    requestSuccessText: string,
    requestErrorText: string,
    errorCode: null | number,
    getResult: any[],
}

export enum SendRequestActionTypes {
    SEND_REQUEST_BEGIN = 'SEND_REQUEST_BEGIN',
    SEND_REQUEST_SUCCESS = 'SEND_REQUEST_SUCCESS',
    SEND_REQUEST_FATAL = 'SEND_REQUEST_FATAL',
    SEND_REQUEST_ERROR = 'SEND_REQUEST_ERROR',
    SAVE_GET_REQUEST = 'SAVE_GET_REQUEST',
}

interface SendRequestBegin {
    type: SendRequestActionTypes.SEND_REQUEST_BEGIN
}

interface SendRequestSuccess {
    type: SendRequestActionTypes.SEND_REQUEST_SUCCESS
}

interface SendRequestError {
    type: SendRequestActionTypes.SEND_REQUEST_ERROR,
    value: number
}

interface SendRequestFatal {
    type: SendRequestActionTypes.SEND_REQUEST_FATAL,
}

interface SaveGetRequest {
    type: SendRequestActionTypes.SAVE_GET_REQUEST,
    value: any[]
}

export type SendRequestAction =
    | SendRequestBegin
    | SendRequestSuccess
    | SendRequestError
    | SendRequestFatal
    | SaveGetRequest;
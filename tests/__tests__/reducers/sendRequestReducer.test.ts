import {
    saveGetResult,
    sendRequestBegin,
    sendRequestError,
    sendRequestSuccess,
} from '../../../src/store/actions/sendRequestActions';
import { sendRequestReducer } from '../../../src/store/reducers/sendRequestReducer';
import { SendRequestState } from '../../../src/types/sendRequestTypes';

let stateAllFalse: SendRequestState;
let stateLoadingTrue: SendRequestState;
beforeEach(() => {
    stateAllFalse = {
        isRequestLoading: false,
        isRequestSuccess: false,
        isRequestFatal: false,
        isRequestError: false,
        requestErrorText: 'Something went wrong...',
        errorCode: null,
        getResult: [],
    };
    stateLoadingTrue = {
        isRequestLoading: true,
        isRequestSuccess: false,
        isRequestFatal: false,
        isRequestError: false,
        requestErrorText: 'Something went wrong...',
        errorCode: null,
        getResult: [],
    };
});

describe('send request reducer', () => {
    test('begin', () => {
        const newState = sendRequestReducer(stateAllFalse, sendRequestBegin());
        expect(newState).toStrictEqual({
            ...stateAllFalse,
            isRequestLoading: true,
        });
    });

    test('save get request', () => {
        const newState = sendRequestReducer(
            stateAllFalse,
            saveGetResult([{ id: 56 }]),
        );
        expect(newState).toStrictEqual({
            ...stateAllFalse,
            getResult: [{ id: 56 }],
        });
    });

    test('success', () => {
        const newState = sendRequestReducer(stateLoadingTrue, sendRequestSuccess());
        expect(newState).toStrictEqual({
            ...stateLoadingTrue,
            isRequestSuccess: true,
            isRequestLoading: false,
            isRequestFatal: false,
            isRequestError: false,
        });
    });

    test('error', () => {
        const newState = sendRequestReducer(
            stateLoadingTrue,
            sendRequestError(500),
        );
        expect(newState).toStrictEqual({
            ...stateLoadingTrue,
            isRequestError: true,
            errorCode: 500,
            isRequestLoading: false,
            isRequestSuccess: false,
            isRequestFatal: false,
        });
    });
});

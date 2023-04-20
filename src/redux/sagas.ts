import {takeEvery, put} from 'redux-saga/effects'
import {LOGIN, REQUEST_LOGIN} from "./types";
import {tokenGen} from "../other/tokenGenerator";
import {mockPromise} from "../server/mockPromise";
export function* sagaWatcher() {
    yield takeEvery(REQUEST_LOGIN, sagaWorker)
}

export function* sagaWorker (args: any) {
    yield put({type: LOGIN})
    // @ts-ignore
    login(args.username, args.password).then((r) => {
        return r
    })
}

async function login (username: string, password: string) {
    console.log(username, password)
        const response = await mockPromise.getUser();
        const mockUsers = await response.data.find((user: any)=>user.username=== username && user.password === password)
        if(mockUsers){
            localStorage.setItem('token', tokenGen(11))
            return {
                type: LOGIN
            }

        }
        else {alert("Пользователь не найден!")}

}

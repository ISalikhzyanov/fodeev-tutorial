import tasks from "./tasks.json";
import users from './users.json'

export const mockPromise = {
    getData: function () {
        return Promise.resolve({
            data: tasks
        })
    },

    getUser: function () {
        return Promise.resolve({
            data: users
        })
    }
}

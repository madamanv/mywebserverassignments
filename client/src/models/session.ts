import router from "../router";
import * as users from "../models/user"
import { reactive } from "vue";


const session = reactive({
    user: null as users.User | null,
    allUsers: null as users.User[] | null,
})

export async function Login(email: string, password: string) {
    try {
        let response = await fetch("http://localhost:3001/api/users/login", {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "password": password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
        if (response.status == 404) {
            throw { message: "User not found" };
        }
        const user = await response.json();
        session.user = user.data;
        //TODO: Loading it here for now, but this code needs to move to beforeMount in assignTasks page.
        getAllUsers().then(response => {
            console.log(response);
            session.allUsers = response;
            console.log(session.allUsers);
          });
        router.push('/AssignTask');
    } catch (error) {
        console.log(error);
    }
}

export async function getAllUsers() {
    try {
        let response = await fetch("http://localhost:3001/api/users", {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
        const users = await response.json();
        return users.data;
    } catch (error) {
        throw { message: "Something went wrong!!, check api server connectivity..." };
    }
}

export async function getByHandler(handler: string) {
    try {
        let response = await fetch("http://localhost:3001/api/users/handle/".concat(handler), {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
        if (response.status == 404) {
            throw { message: "User not found" };
        }
        const user = await response.json();
        return user.data;
    } catch (error) {
        throw { message: "Something went wrong!!, check api server connectivity..." };
    }
}

export async function addTask(user: Object) {
    try {
        let patchResponse = await fetch("http://localhost:3001/api/users/".concat(user._id), {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({userTasks: user.userTasks}),
        });
        router.push('/AssignTask');
    } catch (error) {
        console.log(error);
    }
}

export function Logout() {
    session.user = null;
    session.allUsers = null;
    router.push('/login');
}

export default session;
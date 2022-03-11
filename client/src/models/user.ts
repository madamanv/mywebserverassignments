export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    picture: string;
    id: number;
    userTasks : any;
}

export const list: User[] = [
    {
        id: 1,
        handle: 'dodge',
        firstName: 'chandra',
        lastName: 'marachu',
        password: 'demon',
        email: 'dodge@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        userTasks: [
            {task : 'tyres',dueDate:'2022-01-15', isCompleted: true, assignedBy: "dodge"},
            {task : 'Nos',dueDate:'2022-02-4', isCompleted: false, assignedBy: "hellcat"},
            {task : 'cylinder',dueDate:'2022-03-2', isCompleted: true, assignedBy: "widebody"}
        ]
    },
    {
        id: 2,
        handle: 'hellcat',
        firstName: 'sekhar',
        lastName: 'marachu',
        password: 'demon',
        email: 'hellcat@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/2.jpg',
        userTasks: [
            {task : 'tyres check',dueDate:'2022-01-21', isCompleted: false, assignedBy: "dodge"},
            {task : 'Gas Leak',dueDate:'2022-02-2', isCompleted: false, assignedBy: "hellcat"}
        ]
    },
    {
        id: 3,
        handle: 'widebody',
        firstName: 'chandrasekhar',
        lastName: 'marachu',
        password: 'demon',
        email: 'widebody@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/3.jpg',
        userTasks: [
            {task : 'Nos Engine check',dueDate:'2022-05-04', isCompleted: false, assignedBy: "hellcat"},
            {task : 'multi cylinder',dueDate:'2022-05-016', isCompleted: false, assignedBy: "widebody"}
        ]
    }
]
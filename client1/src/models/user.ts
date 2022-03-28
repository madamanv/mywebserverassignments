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
            {task : 'engine',dueDate:'2022-02-11 2:22 PM', assignedBy: "dodge", description: "Add power boosters"}
         
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
            {task : 'tyres check',dueDate:'2022-01-21 1:00 AM', assignedBy: "dodge", description: "Re-done the tyres"}
            
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
            {task : 'multi cylinder',dueDate:'2022-05-016 3:00 PM',  assignedBy: "widebody", description: "Check connection and power"}
        ]
    }
]
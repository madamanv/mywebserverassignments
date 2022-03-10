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
        handle: 'Ryuk',
        firstName: 'Lawliet',
        lastName: 'Ryuzaki',
        password: 'Deathnote',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/4.jpg',
        userTasks: [
            {task : 'Need to update vue',dueDate:'04/21/2022', isCompleted: true, assignedBy: "Kira"},
            {task : 'Need to update pinia',dueDate:'05/18/2022', isCompleted: false, assignedBy: "OnePiece"},
            {task : 'Need to update express',dueDate:'03/11/2022', isCompleted: true, assignedBy: "Kira"}
        ]
    },
    {
        id: 2,
        handle: 'Kira',
        firstName: 'Light',
        lastName: 'Yagami',
        password: 'Deathnote',
        email: 'lyagami@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/5.jpg',
        userTasks: [
            {task : 'Need to update angular',dueDate:'03/21/2022', isCompleted: false, assignedBy: "Ryuk"},
            {task : 'Need to update react',dueDate:'03/26/2022', isCompleted: false, assignedBy: "OnePiece"}
        ]
    },
    {
        id: 3,
        handle: 'OnePiece',
        firstName: 'Monkey',
        lastName: 'Luffy',
        password: 'OP',
        email: 'l@gmail.com',
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
        userTasks: [
            {task : 'Need to update jQuery',dueDate:'04/05/2022', isCompleted: false, assignedBy: "Kira"},
            {task : 'Need to update ajax',dueDate:'03/25/2022', isCompleted: false, assignedBy: "Ryuk"}
        ]
    }
]
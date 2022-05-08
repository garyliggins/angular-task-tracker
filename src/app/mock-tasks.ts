//this is how you make a file of json data, a array of objects
import {Task} from './Task'

export const TASKS: Task[] = [
    {
        id: 1,
        text: "Doctor appointment",
        day: "may 5 2022 at 230pm",
        reminder: true,
    },
    {
        id: 2,
        text: "meeting",
        day: "may 6 2022 at 230pm",
        reminder: false,
    },
    {
        id: 3,
        text: "another meeting",
        day: "may 7 2022 at 230pm",
        reminder: true,
    },
    {
        id: 4,
        text: "another damn meeting",
        day: "may 8 2022 at 230pm",
        reminder: false,
    },
    {
        id: 5,
        text: "dentist",
        day: "may 9 2022 at 230pm",
        reminder: true,
    },
]
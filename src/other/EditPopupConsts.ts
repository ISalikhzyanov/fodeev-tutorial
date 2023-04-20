export interface IAuthor {
    id: string,
    author_name: string
}

export interface IStatusAndPriority {
    value: number,
    text: string
}

export const autors: IAuthor[] = [
    {
        id: "001",
        author_name: "John Smith"
    },
    {
        id: "002",
        author_name: "Sarah Lee"
    },
    {
        id: "003",
        author_name: "James Wilson"
    },
    {
        id: "004",
        author_name: "David Taylor"
    },
    {
        id: "005",
        author_name: "Emma Anderson"
    },
    {
        id: "006",
        author_name: "Ryan Garcia"
    },
]

export const statuses: IStatusAndPriority[] = [
    {
        value: 0,
        text: 'В очереди'
    },
    {
        value: 1,
        text: 'В работе'
    },
    {
        value: 2,
        text: 'Выполнено'
    }
]

export const priorities: IStatusAndPriority[] = [
    {
        value: 0,
        text: 'Низкий'
    },
    {
        value: 1,
        text: 'Средний'
    },
    {
        value: 2,
        text: 'Высокий'
    }
]

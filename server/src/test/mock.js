import faker from 'faker';

export const user = {
    name: "leticia",
    username: "letty",
    email: faker.internet.email(),
    password: "12345678"
}

export const book = {
    title: "assurance",
    author: "letty",
    description: "very interesting",
    quantity: "3"
}
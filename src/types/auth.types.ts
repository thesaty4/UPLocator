export type LoginResponse = {
    id: number,
    name: string,
    email: string,
    role: "admin",
    status: "active"|"inactive",
};

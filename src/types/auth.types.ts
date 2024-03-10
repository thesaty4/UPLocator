export type LoginResponse = {
    user:{
        id: number,
        name: string,
        email: string,
        role: "admin",
        status: "active"|"inactive",
    },
    token: string
};

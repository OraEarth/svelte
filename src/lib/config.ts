let process: any;

const p = process?.env ? process.env : import.meta.env;

export const config = {
    "hanko": p.VITE_HANKO_API,
    "pashword": p.VITE_PASHWORD_SALT,
};
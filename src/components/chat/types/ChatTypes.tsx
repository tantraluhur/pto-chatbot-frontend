
export type Agent = "User" | "Bot"

export type Message = {
    messageUser?: string;
    messageBot?: string;
    typing: boolean;
}
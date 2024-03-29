export type DialogueType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


let initialState = {
    dialogues: [
        {id: 1, name: "Barsik"},
        {id: 2, name: "Richi"},
        {id: 3, name: "Musya"},
        {id: 4, name: "Sharik"},
        {id: 5, name: "Lessi"},
        {id: 6, name: "Kubik"}
    ] as DialogueType[],
    messages: [
        {id: 1, message: "Meeooww"},
        {id: 2, message: "Wanna play?"},
        {id: 3, message: "I would eat all day looooong"},
        {id: 4, message: "Prr-r-rrr"},
        {id: 5, message: "Prr-r-rrr"}
    ] as MessageType[]
};

export type DialoguesPageType = typeof initialState
export type DialoguesPageActionsType = ReturnType<typeof sendMessageCreator>;


const dialoguesReducer = (state: DialoguesPageType = initialState, action: DialoguesPageActionsType): DialoguesPageType => {
    switch (action.type) {
        case 'dialogues/SEND-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessage}]
            };

        default:
            return state
    }
}


export const sendMessageCreator = (newMessage: string) => ({type: 'dialogues/SEND-MESSAGE', newMessage} as const)

export default dialoguesReducer;
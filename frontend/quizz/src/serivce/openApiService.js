
import { api } from "./api"

export const openAiGenerated = async (topic, questionCount) => {
    return api.get(`/openai?topic=${topic}&questionCount=${questionCount}`)
}
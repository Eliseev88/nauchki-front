import { instance } from "./API";

export const childApi = {
    getChild(id) {
        return instance.get('/v2/children/' + id,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("TOKEN"),
                },
            },
        );
    },
    getStage(gender, age) {
        return instance.get('/v2/children/standarts/' + gender + '/' + age,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("TOKEN"),
                },
            },
        );
    }
}

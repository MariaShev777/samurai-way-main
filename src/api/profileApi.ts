import {ProfileType} from "redux/profileReducer";
import {PhotosType} from "types/types";
import {instance} from "./api";
import {CommonResponse} from "./types";

export const profileAPI = {
    getProfile (userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus (userId: number)  {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus (status: string) {
        return instance.put<CommonResponse>(`profile/status`, {status}).then(res => res.data)
    },
    uploadPhoto (photos: File) {
        const formData = new FormData();
        formData.append('image', photos);
        return instance.put<CommonResponse<{photos: PhotosType}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile (profile: ProfileType) {
        return instance.put<CommonResponse>(`profile`, profile).then(res => res.data)
    }
}
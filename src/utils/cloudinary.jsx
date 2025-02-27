const cloud_name = "dya7iqp6y"
const upload_preset = "social_media"

export const uploadToCloudinary = async (pics, fileType) => {
    if(pics && fileType){
        const data = new FormData()
        data.append("file", pics)
        data.append("upload_preset", upload_preset)
        data.append("cloud_name", cloud_name)

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,{
            method: "POST",
            body: data
        })

        const response = await res.json()
        const url = response.url
        console.log("url ---------------", url)
        return response.url;
    }else{
        console.log("error")
    }
}
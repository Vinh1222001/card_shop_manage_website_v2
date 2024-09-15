import instance from "./init"

export const getAllProducts = async () =>{
    const response = instance.get(
        'https://jhaukacezyclslzmlkwv.supabase.co/rest/v1/products',
        {
            params:{
                select: "id,name,description,video,color,colorsys,sides,seen,price,pritech,cut,time,category,material,effect,size,createdAt,updatedAt,avatarHover:images!products_avtHoverId_fkey(imgSrc),status:statuses(value),avatar:images!products_avatarId_fkey(imgSrc)",
            }
        })

    return response
}

export const getProductAtId = async (productId:string) =>{
    const response = instance.get(
        'https://jhaukacezyclslzmlkwv.supabase.co/rest/v1/products',
        {
            params:{
                id:`eq.${productId}`
            }
        })

    return response
}
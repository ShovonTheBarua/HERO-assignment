export const loadAppList = () =>{
    try{
    const data = localStorage.getItem('installed')
    return data ? JSON.parse(data) : []
    } catch(err){
        console.log(err)
        return []
    }

}
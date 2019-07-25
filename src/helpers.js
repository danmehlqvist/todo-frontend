export const handleResponse = res => {
    if (!res.ok){
        throw Error(res.statusText);
    }
    return res;
}
export function getBackendUrl(){
    return ("http://localhost:8020/wp-json/wp/v2/")
}

export async function getBlogPosts(){
    const res = await fetch(getBackendUrl() + "posts/")
    return res.json()
}
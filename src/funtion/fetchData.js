const fetchData = async (url) => {
    const rawData = await fetch('https://booki-backend-v2.vercel.app/api/' + url);
    return await rawData.json()
}

export default fetchData;
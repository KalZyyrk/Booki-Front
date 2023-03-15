const fetchData = async (url) => {
    const rawData = await fetch('https://booki-backend-v2.vercel.app/' + url);
    return await rawData.json()
}

export default fetchData;
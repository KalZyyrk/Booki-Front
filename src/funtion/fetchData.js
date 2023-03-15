const fetchData = async (url) => {
    const rawData = await fetch('http://localhost:3000/api/' + url);
    return await rawData.json()
}

export default fetchData;
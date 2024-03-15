export async function fetchData(url) {
    try {
        const data = await fetch(url);
        const jsonData = await data.json();
        return jsonData;
    }
    catch (error) {
        console.log(error);
    }
}
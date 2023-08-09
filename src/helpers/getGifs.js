const getGifs= async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=knicc76QLGfErNv1GUKfQD1k9zR6aN9R&q=${category}&limit=20`;
    const respuesta = await fetch(url);
    const {data}= await respuesta.json();
    const gifs =data.map(image=>
        (
            {
                id:image.id,
                title:image.title,
                url:image.images.downsized_medium.url
            }
        )
        );
        return gifs;
}
export default getGifs;
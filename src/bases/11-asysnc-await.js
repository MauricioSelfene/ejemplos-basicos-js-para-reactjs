
const getImagen = async() => {

    const apiKey = 'PDLETtYY5emZBeZnXVVSUdma8sCAoM7Z';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data} = await resp.json();

    console.log(data);
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

        document.body.append( img );
    
}

getImagen();




const dadJokes = async () => {
    try {


        let heading = document.querySelector(".jokes");
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        heading.innerHTML = res.data.joke;
    }
    catch(e){
        let heading = document.querySelector(".jokes");
        heading.innerHTML = "Error!!!";
        console.log(e);
    }
}


dadJokes();
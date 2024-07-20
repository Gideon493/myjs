const postURl = "https://jsonplaceholder.typicode.com/posts";

const myposts = document.querySelector('#post');

const getPosts = async () => {
    const response = await fetch(postURl);

    const data = await response.json();

    data.map((post) => {

        myposts.innerHTML += `
        <div class="shadow-md hover:scale-105 duration-150 bg-gray-500 p-2 rounded-md">
        <h2 class="text-xl capitalize">${post.title.substring(0, 20) + "..."}</h2>
        <p class="text-sm">${post.body.substring(0, 100) + "..."}</p>
        </div>
        `;
    })
}

getPosts();
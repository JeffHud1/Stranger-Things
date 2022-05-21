export const Base_URL = "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt"

export async function fetchPosts (setPosts, token) {
    fetch(`${Base_URL}/posts`, {
        method: "GET",
        headers: makeHeaders(token)
    }).then(response=>response.json())
    .then(result=>{
        // console.log(result)
        setPosts(result.data.posts)
    })
    .catch(console.error)
}

export async function TokenRegister (inputUsername, inputPassword, setToken) {
        fetch(`${Base_URL}/users/register`, {
  method: "POST",
  headers : {
    "Content-Type" : "application/json"
  },
//   headers: makeHeaders(localStorageToken),
  body: JSON.stringify({
    user: {
      username: inputUsername,
      password: inputPassword
    }
  })
}).then(response => response.json())
  .then(result => {
      console.log(result)
    setToken(result.data.token);
    localStorage.setItem("jwt", result.data.token);
    alert(result.data.message)
  })
  .catch(console.error);
}

export async function TokenLogin (inputUsername, inputPassword, setToken) {
        fetch(`${Base_URL}/users/login`, {
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify({
    user: {
      username: inputUsername,
      password: inputPassword
    }
  })
}).then(response => response.json())
  .then(result => {
    setToken(result.data.token);
    localStorage.setItem("jwt", result.data.token);
    alert(result.data.message)
  })
  .catch(console.error);
}

const makeHeaders = (token) => {
    return (token ? 
    {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
    } :
    {
        "Content-Type" : "application/json"
    } )
}

export async function addNewPost (postObject, token) {
    fetch(`${Base_URL}/posts`, {
        method: "POST",
        headers :
        makeHeaders(token),
        body : JSON.stringify({
            post: 
            postObject
        })
    }).then(response => response.json())
    .then(result =>{
        console.log(result);
    })
    .catch(console.error)
}

export async function fetchCurrentUserData (setUserInfo, token) {
    fetch(`${Base_URL}/users/me`, {
        method: "GET",
        headers: makeHeaders(token)
    }).then(response=>response.json())
    .then(result=>{
        setUserInfo(result.data);
        console.log(result.data)
    })
    .catch(console.error)
}

export async function deletePost (postId, token) {
    fetch(`${Base_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: makeHeaders(token)
    }).then(response =>response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error)
}

export async function messagePost (postId, message, token, action, setAction) {
    fetch(`${Base_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: makeHeaders(token),
        body: JSON.stringify({
            message: {
                content: message
            }
        })
    }).then(response =>response.json())
    .then(result =>{
        console.log(result);
        console.log(action)
        setAction(!action)
    })
    .catch(console.error)
}

export async function updatePost (postId, updateTitle, updateDescription, updatePrice, newLocation, updateDeliver, token) {
    fetch(`${Base_URL}/posts/${postId}`, {
        method: "PATCH",
        headers: makeHeaders(token),
        body: JSON.stringify({
            post: {
                title: updateTitle,
                description: updateDescription,
                price: updatePrice,
                location: newLocation,
                willDeliver: updateDeliver
            }
        })
    }).then(response =>{response.json()})
    .then(result=>{
        console.log(result)
    })
    .catch(console.error)
}
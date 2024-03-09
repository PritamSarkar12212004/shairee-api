//this is the api and key section
const key="9b99556fb5e2d5d1bfac0824a6fb"
const url="https://hindi-jokes-api.onrender.com/jokes?api_key="
//this is the fetch section

//this is the element getting section
let name=document.querySelector("#name")
let btn=document.querySelector("#btn")
const content=document.querySelector(".content")
const next=document.querySelector("#next")
//fetch
func=async()=>{
    let response= await fetch(url+key)
    let data=await response.json()
    content.innerHTML=data.jokeContent
    name.innerHTML=data.created_by
    console.log(data)
}
//this is logick section
btn.addEventListener("click",()=>{
    content.style.display="block"
    name.style.display="block"
    btn.style.display="none"
    next.style.display="block"
    
   
    func()
    
    
})
next.addEventListener("click",()=>{
    func()
})


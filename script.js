const value = document.getElementsByClassName("value")[0]
const list = document.getElementsByClassName("list")[0]
const lis = document.querySelectorAll(".list ul li")
const ul = document.querySelector(".list ul")

value.addEventListener("click", () => {
    ul.style.top = 0
    list.style.height = "700px"
})

for(let i=0;i<lis.length;i++){
    lis[i].addEventListener("click", () => {
        ul.style.top = "-610px"
        list.style.height = "200px"
        value.innerHTML = lis[i].innerHTML
    })
}
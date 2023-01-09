const heading = document.getElementById("head");
var pageNum = 1;
async function getData(user = 0){
    heading.textContent = `Page number : ${pageNum}`;
    const userResponse = await fetch("https://content.newtonschool.co/v1/pr/main/users");
    const userData = await userResponse.json();
    const users = document.querySelectorAl("ol>li");
    for(let a=0; a<users.length;a++){
        users[a].textContent = userData[user].name;
        const postsResponse = await fetch(`https://content.newtonschool.co/v1/pr/main/posts?user_id=${user+1}`);
        const postsData = await postsResponse.json();
        const posts = document.querySelectorAl(`li[id='${a+1}'] + ul li`);
        for( let j=0; j<posts.length; j++){
            posts[j].textContent = postsData[j].title;
        }
        user++;
    }
}
getData();
let count = 0;
function next(){
    if(pageNum<5){
        pageNum++;
        count+=2;
        getData(count);
    }
}
function prev(){
    if(pageNum>1){
        pageNum--;
        count-=2;
        getData(count);
    }
}
const Posts =[];


//Do not touch these functions below at all
function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            Posts.push({title: 'Post1'});
            resolve();
        }, 3000)
    }) 
}
function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'Last Activity'});
            resolve()
        }, 1000)
    }) 
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
async function fun1(){
//promise.all
try{
await const promise1 = updateLastUserActivityTime()
    console.log('POST1')
await const promise2 = createPost()
    console.log('POST2')
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
    const post4 = await deletePost() 
       console.log("ERROR");
}
catch(err){
    console.log("ERROR")
}
}
fun1()
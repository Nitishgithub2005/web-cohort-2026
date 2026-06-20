console.log("promises")
const promise = new Promise((res,rej) =>{
    setTimeout(()=>{
        res("Chaicode");
        rej(new Error("Chai Error"))
    },2000);
})
console.log(promise);

promise
    .then((value) =>{ return value})
    .then((value) => console.log(value))
    .catch((error) => console.log(error))

const turant = Promise.resolve("Turanth")
console.log(turant)

const allPromise = Promise.any([
    Promise.resolve("Chai"),
    Promise.resolve("Code"),
    Promise.reject("Error")
]); 

const hPromise = new Promise((res,rej) =>{
    setTimeout(() => {
        // res("Masterji");
        rej(new Error("Masterji ka error"))
    },3000);
})

async function nice() {
    try {
        const result = await hPromise;
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

nice()
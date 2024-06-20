console.log(`JavaScript Started`);

const input = document.getElementById("task");
const addBtn = document.querySelector(".front-top").querySelector("button")
const taskSection = document.querySelector(".task-section")
let tasks = []

function fillTaskSection(){
    taskSection.innerHTML = "";
    for (const task of tasks) {
        taskSection.innerHTML+=task;
    }
}

function addDeleteListener(){
    Array.from(document.getElementsByClassName("del")).forEach((e,i)=>{
        e.addEventListener("click",()=>{
            console.log(e,i);
            let index = i-1
            tasks.splice(index,1)
            fillTaskSection();
            addDeleteListener()
        })
    })

    Array.from(document.getElementsByClassName("status-btn")).forEach((e,i)=>{
        e.addEventListener("click",()=>{
            e.innerHTML = "Completed"
            e.className+=" completed"
        })
    })
}
addBtn.addEventListener("click",(e)=>{
    if(input.value==""){
        console.warn(`No input yet`);
    }else{
        console.log(input.value);
        let task = input.value
        let newTask = `
                        <div class="task">
                            <div class="list">${task}</div>
                            <div class="status">
                                <div class="status-btn">Pending</div>
                            </div>
                            <div class="del"><img src="delete.png" alt="delete"></div>
                        </div>
        `
        input.value = "";
        tasks.push(newTask)
        fillTaskSection();
        addDeleteListener()
    }
})

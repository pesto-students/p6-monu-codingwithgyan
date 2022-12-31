const doTask1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task-1 is comepleted");
        },500);
    });
}
const doTask2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task-2 is comepleted");
        },500);
    });
}
const doTask3 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task-3 is comepleted");
        },500);
    });
}

const asyncAwaitFn = async() => {
    const task1 = await doTask1();
    console.log(`${task1} is completed its execcution`);

    const task2= await doTask2();
    console.log(`${task2} is completed its execcution`);

    const task3= await doTask3();
    console.log(`${task3} is completed its execcution`);
}

/*---------using Async Await---------*/
asyncAwaitFn();

async function * generator()
{
    const task1 = await doTask1();
    console.log(task1)
    yield task1;

    const task2 = await doTask2();
    console.log(task2)
    yield task2;

    const task3 = await doTask3();
    console.log(task3)
    yield task3;
}

/*---------using Generator---------*/
const gen  = generator();
gen.next();
gen.next();
gen.next();
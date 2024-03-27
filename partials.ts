interface Todo{
    title:string;
    description:string;
    id:number;
    done:boolean;
}
type updateTodoInput= Partial<Todo>;

function updateTodo(id:number,newProp:updateTodoInput){

}

updateTodo(1,{
    description:"new Title"
})
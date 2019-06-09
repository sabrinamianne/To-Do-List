

class Task {
    done: boolean = false;
  
    constructor(public description: string, public priority: string){}
    markDone() {
      this.done = true;
    }
  }
  
  var tasks: Task[] = [];
  tasks.push(new Task('Do the dishes', 'medium'));
  tasks.push(new Task('Range bedroom', 'medium'));
  tasks.push(new Task('Sort clothes', 'low'));
  tasks.push(new Task('Do homeworks', 'high'));
  tasks.push(new Task('Sleep', 'high'));
  tasks[0].markDone();
  
  
  function GetToDo (tasks)
  {
    for (var i: number = 0; i<tasks.length;i++)
    {
      console.log(tasks[i].description +" "+ tasks[i].priority +" "+ tasks[i].done);
    }
  }
  
  GetToDo(tasks);
  
const express = require('express');

const server = express();

server.use(express.json());

const projects = [{
  id: Number,
  title: String,
  tasks:Array
}];

let count = 0;

server.use((req, res, next) =>{
  count++
  console.log(`Total requisitions: ${count}`);
  next();
});

function checkIfIdExists(req, res, next){
  const {id} = req.params;    
  const currentProject = projects.find(c => c.id == id);
  if(!currentProject){
    return res.status(400).json({error: "The id does not exist"});
  }
  req.project = currentProject;
  next();

};

server.get('/projects', (req, res) =>{
  return res.json(projects);
});

server.post('/projects', (req, res) =>{
  const project = req.body;
  projects.push(project);
  return res.json(projects);
});

server.post('/projects/:id/tasks',checkIfIdExists, (req, res)=>{  
  const newTasks = req.body.tasks;
  const project = req.project;

  project.tasks = newTasks;
    
  return res.json(projects);
});

server.put('/projects/:id', checkIfIdExists, (req, res) =>{
  const {index} = req.params;
  const project = req.body;

  projects[index] = project;
  
  return res.json(projects);
});

server.delete('/projects/:index', checkIfIdExists, (req, res)=>{
  const {index} = req.params;

  projects.splice(index, 1);

  return res.send();
});

server.listen(3000);
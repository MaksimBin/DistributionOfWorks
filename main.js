let arrs = []

class User {
  constructor(id, name, nomer, job, color, textColor, jobs) {
    this.id = id,
      this.name = name,
      this.nomer = nomer,
      this.job = job,
      this.color = color,
      this.textColor = textColor,
      this.jobs = jobs
  }
}

for (let i = 0; i < 100; i++) {
    arrs.push(new User(i + 1, "title", i + 1, "job", "black", "hotpink", [1,2,3,4,5]))
}

let m

const clientDisplay = () => {
  document.querySelector('.app').innerHTML = arrs.map((x) => `<div style="background-color:${x.color}; color:${x.textColor};" class="element" onclick='openModal(${x.id})'>${x.name} ${x.nomer}</div>`).join("")
}

clientDisplay()

let clientJob
let usId

const openModal = (id) => {
  
  usId = id
  
  document.querySelector('.modal').style = "display: block;"

  let client = arrs.filter((x) => x.id == id
    ).shift()
  
  clientJob = client

  document.querySelector('.modal').innerHTML = `
  
  <div class="inputSave">
  
  <input class="name input" type="text" value="${client.name}" />
  
  
  <input class="job input" type="text" value="${client.job}" />
  
  <input class="color input" type="color" value="${client.color}" />
  
    <div class="jobs">
  ${client.jobs.map((x, index) => 
    `<button class="jobs-btn" onclick="editJobs(${index})">${x}</button>`
  ).join("")}
  </div>
  
  
  <button class="btn-save" onclick="saveClient(${client.id})">сохранить</button>
  
  </div>
  `
}

const saveClient = (id) => {

  let name = document.querySelector('.name').value

  let job = document.querySelector('.job').value

  let color = document.querySelector('.color').value

  arrs.map(x => {
    if (x.id == id) {
      x.name = name
      x.job = job
      x.color = color
      x.textColor = "black"
    }
  })

  clientDisplay()

  document.querySelector('.modal').style = "display: none;"
}

const editJobs = (indexJob) => {
  
 let job = clientJob.jobs.filter((x, index) => index == indexJob).shift()
  
  document.querySelector('.modal-jobs').style = "display: block;"
  
  document.querySelector('.modal-jobs').innerHTML = `<input class="input-jobs" type="text" value="${job}" />
  
  <button class="btn-save" onclick="saveJob(${indexJob})">сохранить</button>
  `
}

const saveJob = (indexJ) => {
  let newTexJob = document.querySelector('.input-jobs').value
  
  arrs.map(x => {
    if (x.id == usId) {
      x.jobs[indexJ] = newTexJob
    }
  })
  
  document.querySelector('.modal-jobs').style = "display: none;"
  
  openModal(usId)
}
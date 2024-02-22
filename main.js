let arrs = []


class User {
  constructor(id, name, nomer, job, color, textColor) {
    this.id = id,
      this.name = name,
      this.nomer = nomer,
      this.job = job,
      this.color = color,
      this.textColor = textColor
  }
}


for (var i = 0; i < 100; i++) {
  arrs.push(new User(i + 1, "title", i + 1, "job", "black", "hotpink"))
}


const clientDisplay = () => {
  document.querySelector('.app').innerHTML = arrs.map(x => `<div style="background-color:${x.color}; color:${x.textColor};" class="element" onclick='openModal(${x.id})'>${x.name} ${x.nomer}</div>`).join("")
}

clientDisplay()


const openModal = (id) => {
  document.querySelector('.modal').style = "display: block;"


  let client = arrs.filter(x => x.id == id).shift()

  document.querySelector('.modal').innerHTML = `
  
  <div class="inputSave">
  
  <input class="name input" type="text" value="${client.name}" />
  
 
  
  
  <input class="job input" type="text" value="${client.job}" />
  
 
  
  <input class="color input" type="color" value="${client.color}" />
  
  
  
  <button class="btn-save" onclick="saveClient(${client.id})">сохранить</button>
  
  </div>
  
  `

  console.log(client)

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
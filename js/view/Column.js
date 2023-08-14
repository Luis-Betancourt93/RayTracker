import KanbanAPI from "../api/KanbanAPI.js"

export default class Column {
  constructor(id, title){
    this.elements = {}
    this.elements.root = Column.createRoot()
    this.elements.title = this.elements.root.querySelector('.Kanban__column-title')
    this.elements.items = this.elements.root.querySelector('Kanban__column-items ')
    this.elements.items = this.elements.root.querySelector('Kanban__add-item ')

    this.elements.root.dataset.id = id
    this.elements. tilte.textContent = title

    this.elements.addItem.addEventListener('click', () => {
      const newItem = KanbanAPI
      this.renderItem(newItem)
    })
  }

  static createRoot() {
    const range = document.createRange()

    range.selectNode(document.body)

    return range.createContextualFragment(`
      <div class='Kanban__column'>
        <div class='Kanban__column-title'></div>  
        <div class='Kanban__column-items'></div>
        <button class= 'Kanban__add-item'></button> +
        Add</button>
      </div>

      `
    ).children[0]

  }


  renderItem(data) {
    const item = new Item(data.id, data.content)
    this.elements.items.appendChild(item.elements.root)
  }

}
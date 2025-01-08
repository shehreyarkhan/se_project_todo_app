class Todo {
  constructor(data, selector) {
    console.log(data, selector);
    this._data = data;
    this._tempalateElement = document.querySelector(selector);
  }
  _setEventListeners() {

    this._todoDeleteBtn.addEventListener("click", () => {
        this._todoElement.remove();
      });

    this._todoCheckboxEl.addEventListener('change', () => {
        this._data.completed = !this._data.completed;
        console.log(this._data.completed);
    })
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateDate() {
    const todoDate = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);
  
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }
  
  getView() {
    this._todoElement = this._tempalateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    
    this._generateDate();
    this._generateCheckboxEl();
    this._setEventListeners();
    
    return this._todoElement;
  }
}
export default Todo;

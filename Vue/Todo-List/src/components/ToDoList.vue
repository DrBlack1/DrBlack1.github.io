<!-- Watch your capital letters! -->

<template>
  <div>
    <!-- V-Model binds the vue data property when the user changes the content of the field in the form input -->
    <!-- @keyup.enter is an event listener -->
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addToDo"
    >
    <!-- To get the to do list items to render in the browser -->
    <!-- A v-for is a for loop in vue, we use this to render a list of items in an array -->
    <!-- We add index so we get the current item in the array -->
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
       <div class="todo-item-left">
           <div class="todo-item-label">{{ todo.title }}</div>
    <!-- Here we are going to enable the user to edit their list item -->
           <input class="todo-item-edit" type="text" v-model="todo.title">
            
        </div>
    <!-- 'Button' for removing a to do item -->
    <!-- @click is an event listener -->
        <div class="remove-item" @click="removeTodo(index)">
            &times;
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
    // The data function prepares the component to be reactive, if a property in the template changes, the component view will re-render to display
  data() {
    return {
      newTodo: " ",
      idForTodo: 3, // We need to increment this after we add to the 'todos' array
      // Array of objects - to do items
      // Notice we are using square brackets to declare an array, but storing objects inside the array
      todos: [
        {
          // Make sure to separate with commas
          id: 1, // Good practice to have an ID for later database use
          title: "Finish Vue To Do List", // Title of the item
          completed: false // A boolean value since this can be true or false
        },
        {
          // Make sure to separate with commas
          id: 2, // Good practice to have an ID for later database use
          title: "Take over the world", // Title of the item
          completed: false // A boolean value since this can be true or false, it is not complete by default
        }
      ]
    };
  },
  methods: {
    // Method for adding another item using the input field
    addToDo() {
      // Whenever you are referencing a data property, be sure to use 'this'

      // Before we push, we want to make sure the user doesn't submit an empty input and accidentally add further objecs
      // Trim removes whitespace, so we are essentially clearing the input
      if (this.newTodo.trim().length == 0) {
          return
      }

      // Using push to add to the array, in this case we are adding another object
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo, // This relates to the model on the form input - vue has two way data binding
        completed: false
      });
      // Once this is done ^, reset the field back to empty
      this.newTodo = "";
      // And also icrement the todos ID
      this.idForTodo++;
    },
    // Method to remove a to do item from the list
    removeTodo(index) {
    // The splice method adds/removes items to/from the array
        this.todos.splice(index, 1)
    }

  }
};
</script>
<!-- Making this global instead of scoped because later on we will extract to other components -->

<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}

.todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
        color: red;
    }
}

.todo-item-edit {
    font-size: 22px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    &:focus {
        outline: none;
    }
}

</style>

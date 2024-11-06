export const exampleFiles = [
  {
    name: 'typescript.ts',
    isFolder: false,
    language: 'typescript',
    snippet: `import Color from 'color';
    
import type { VSCodeTheme } from '../../types/theme';
import type { UIColors, SyntaxColors, AnsiColors } from '../../types/colors';

export function generateSemanticThemeJSON(
  name: string = 'Generated Color Theme',
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors,
): { themeJSON: string; themeObject: VSCodeTheme } {
  const getAC1Foreground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.AC1).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.AC1).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getAC2Foreground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.AC2).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.AC2).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getINFOForeground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.INFO).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.INFO).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getWARNINGForeground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.WARNING).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.WARNING).isDark() ? colors.FG3 : colors.FG1;
    }
  };
  const getERRORForeground = () => {
    if (Color(colors.BG1).isDark()) {
      return Color(colors.ERROR).isDark() ? colors.FG1 : colors.FG3;
    } else {
      return Color(colors.ERROR).isDark() ? colors.FG3 : colors.FG1;
    }
  };

  const theme = {
    name: name,
    type: Color(colors.BG1).isDark() ? ('dark' as 'dark' | 'light') : ('light' as 'dark' | 'light'),
    semanticClass: 'theme.rlabs',
    semanticHighlighting: true,
    colors: {
      // # Integrated Terminal Colors
      'terminal.background': colors.BG1,
      'terminal.foreground': colors.FG1,
      'terminal.border': colors.BORDER,
      'terminal.ansiBrightBlack': ansiColors.BrightBlack,
      'terminal.ansiBrightRed': ansiColors.BrightRed,
      'terminal.ansiBrightGreen': ansiColors.BrightGreen,
      'terminal.ansiBrightYellow': ansiColors.BrightYellow,
      'terminal.ansiBrightBlue': ansiColors.BrightBlue,
      'terminal.ansiBrightMagenta': ansiColors.BrightMagenta,
      'terminal.ansiBrightCyan': ansiColors.BrightCyan,
      'terminal.ansiBrightWhite': ansiColors.BrightWhite,
      'terminal.ansiBlack': ansiColors.Black,
      'terminal.ansiRed': ansiColors.Red,
      'terminal.ansiGreen': ansiColors.Green,
      'terminal.ansiYellow': ansiColors.Yellow,
      'terminal.ansiBlue': ansiColors.Blue,
      'terminal.ansiMagenta': ansiColors.Magenta,
      'terminal.ansiCyan': ansiColors.Cyan,
      'terminal.ansiWhite': ansiColors.White,
      'terminal.selectionBackground': colors.selection,
      // "terminal.selectionForeground": colors.FG1,
      'terminal.inactiveSelectionBackground': colors.selection,
    }
  }  
}
console.log(reverseArray(numbers)) // Output: [5, 4, 3, 2, 1]
    `
  },
  {
    name: 'javascript.js',
    isFolder: false,
    language: 'javascript',
    snippet: `
    // Async function to fetch user data
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

// Higher-order function
const withLogging = (fn) => {
  return (...args) => {
    console.log(\`Calling function with arguments: \${args}\`)
    const result = fn(...args)
    console.log(\`Function result: \${result}\`)
    return result
  }
}

// Example usage
const add = (a, b) => a + b
const loggedAdd = withLogging(add)

console.log(loggedAdd(5, 3))

// Class with getter and setter
class Circle {
  constructor(radius) {
    this._radius = radius
  }

  get diameter() {
    return this._radius * 2
  }

  set diameter(value) {
    this._radius = value / 2
  }

  get area() {
    return Math.PI * this._radius ** 2
  }
}

const circle = new Circle(5)
console.log(circle.diameter) // Output: 10
circle.diameter = 14
console.log(circle.radius) // Output: 7

    `
  },
  {
    name: 'html.html',
    isFolder: false,
    language: 'html',
    snippet: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Awesome Webpage</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Welcome to My Awesome Webpage</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to our website! We're glad you're here.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          We are a team of passionate individuals dedicated to creating awesome
          web experiences.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 My Awesome Webpage. All rights reserved.</p>
    </footer>
  </body>
</html>

    `
  },
  {
    name: 'css.css',
    isFolder: false,
    language: 'css',
    snippet: `
/* Variables */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --background-color: #f4f4f4;
}

/* Global Styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Header Styles */
header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
}

/* Navigation Styles */
nav ul {
  display: flex;
  list-style-type: none;
}

nav ul li {
  margin-right: 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

/* Main Content Styles */
main {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

h1,
h2 {
  color: var(--primary-color);
}

/* Form Styles */
form {
  display: grid;
  gap: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

/* Footer Styles */
footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin-bottom: 0.5rem;
  }
}

    `
  },
  {
    name: 'scss.scss',
    isFolder: false,
    language: 'scss',
    snippet: `
// Variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;
$background-color: #f4f4f4;

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-styles($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
}

// Global Styles
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: $text-color;
  background-color: $background-color;
}

// Header Styles
header {
  background-color: $primary-color;
  color: white;
  padding: 1rem;

  nav {
    ul {
      display: flex;
      list-style-type: none;

      li {
        margin-right: 1rem;

        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}

// Main Content Styles
main {
  padding: 2rem;

  section {
    margin-bottom: 2rem;

    h1,
    h2 {
      color: $primary-color;
    }
  }
}

// Form Styles
form {
  display: grid;
  gap: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    @include button-styles($secondary-color, white);
  }
}

// Footer Styles
footer {
  @include flex-center;
  background-color: $primary-color;
  color: white;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}

// Media Query for Responsive Design
@media (max-width: 768px) {
  header {
    nav {
      ul {
        flex-direction: column;

        li {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}

    `
  },
  {
    name: 'vue.vue',
    isFolder: false,
    language: 'vue',
    snippet: `
<template>
  <div class="todo-app">
    <h1>{{ title }}</h1>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new todo"
    />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="toggleTodo(index)">Toggle</button>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <p>Completed: {{ completedCount }} / {{ todos.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      title: 'My Todo App',
      newTodo: '',
      todos: [
        { text: 'Learn Vue', completed: false },
        { text: 'Build a todo app', completed: true },
        { text: 'Master Vue', completed: false },
      ],
    }
  },
  computed: {
    completedCount() {
      return this.todos.filter((todo) => todo.completed).length
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, completed: false })
        this.newTodo = ''
      }
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.todo-app {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

button {
  margin-left: 5px;
}
</style>

    `
  },
  {
    name: 'vue-html.vue',
    isFolder: false,
    language: 'vue-html',
    snippet: `
<template>
  <div class="user-profile">
    <h1>{{ user.name }}'s Profile</h1>
    <div v-if="user.avatar" class="avatar">
      <img :src="user.avatar" :alt="user.name + 's avatar'" />
    </div>
    <div class="user-info">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Location:</strong> {{ user.location }}</p>
      <p><strong>Bio:</strong> {{ user.bio }}</p>
    </div>
    <div class="user-stats">
      <h2>Stats</h2>
      <ul>
        <li v-for="(value, key) in user.stats" :key="key">
          <span class="stat-name">{{ key }}:</span>
          <span class="stat-value">{{ value }}</span>
        </li>
      </ul>
    </div>
    <div class="user-posts" v-if="user.posts && user.posts.length">
      <h2>Recent Posts</h2>
      <ul>
        <li v-for="post in user.posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <a :href="'/posts/' + post.id">Read more</a>
        </li>
      </ul>
    </div>
    <div v-else class="no-posts">
      <p>No posts yet.</p>
    </div>
  </div>
</template>

    `
  },
  {
    name: 'svelte.svelte',
    isFolder: false,
    language: 'svelte',
    snippet: `
<script>
	let count = 0;
	let name = 'World';
	let todos = [
	  { id: 1, text: 'Learn Svelte', done: true },
	  { id: 2, text: 'Build an app', done: false }
	];
  
	function handleClick() {
	  count += 1;
	}
  
	function addTodo() {
	  todos = [...todos, { id: todos.length + 1, text: 'New todo', done: false }];
	}
  
	function toggleTodo(id) {
	  todos = todos.map(todo => 
		todo.id === id ? { ...todo, done: !todo.done } : todo
	  );
	}
  
	$: exclamation = '!'.repeat(count);
	$: greeting = 'Hello ' + name + ' ' + exclamation;
	$: completedTodos = todos.filter(todo => todo.done).length;
  </script>
  
  <main>
	<h1>{greeting}</h1>
	
	<input bind:value={name}>
	
	<button on:click={handleClick}>
	  Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
  
	<h2>Todo List</h2>
	<button on:click={addTodo}>Add Todo</button>
	<ul>
	  {#each todos as todo (todo.id)}
		<li class:done={todo.done}>
		  <input
			type="checkbox"
			checked={todo.done}
			on:change={() => toggleTodo(todo.id)}
		  >
		  {todo.text}
		</li>
	  {/each}
	</ul>
  
	<p>{completedTodos} out of {todos.length} todos completed</p>
  </main>
  
  <style>
	main {
	  font-family: Arial, sans-serif;
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	}
  
	h1 {
	  color: #ff3e00;
	}
  
	input {
	  margin-bottom: 10px;
	}
  
	button {
	  background-color: #ff3e00;
	  color: white;
	  border: none;
	  padding: 5px 10px;
	  cursor: pointer;
	}
  
	ul {
	  list-style-type: none;
	  padding: 0;
	}
  
	li {
	  margin-bottom: 5px;
	}
  
	.done {
	  text-decoration: line-through;
	  color: #888;
	}
  </style>
    `
  },
  {
    name: 'react.tsx',
    isFolder: false,
    language: 'tsx',
    snippet: `
import React, { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total todos: {todos.length}</p>
        <p>Completed todos: {todos.filter((todo) => todo.completed).length}</p>
      </div>
    </div>
  )
}

export default TodoApp

    `
  },
  {
    name: 'ruby.rb',
    isFolder: false,
    language: 'ruby',
    snippet: `
    # A simple Ruby program demonstrating various features

# Class definition
class Person
	attr_accessor :name, :age
  
	def initialize(name, age)
	  @name = name
	  @age = age
	end
  
	def introduce
	  puts "Hello, my name is #{@name} and I'm #{@age} years old."
	end
  
	def self.create_from_hash(hash)
	  new(hash[:name], hash[:age])
	end
  end
  
  # Module definition
  module Greetable
	def greet
	  puts "Hello, #{@name}!"
	end
  end
  
  # Class inheritance and module inclusion
  class Employee < Person
	include Greetable
  
	attr_accessor :position
  
	def initialize(name, age, position)
	  super(name, age)
	  @position = position
	end
  
	def introduce
	  super
	  puts "I work as a #{@position}."
	end
  end
  
  # Create instances
  person = Person.new("Alice", 30)
  employee = Employee.new("Bob", 35, "Developer")
  
  # Method calls
  person.introduce
  employee.introduce
  employee.greet
  
  # Array and iteration
  people = [
	{ name: "Charlie", age: 25 },
	{ name: "David", age: 40 },
	{ name: "Eve", age: 22 }
  ]
  
  people.each do |person_hash|
	person = Person.create_from_hash(person_hash)
	person.introduce
  end
  
  # Hash manipulation
  scores = { alice: 95, bob: 80, charlie: 90 }
  high_scores = scores.select { |name, score| score >= 90 }
  puts "High scores: #{high_scores}"
  
  # Exception handling
  def divide(a, b)
	begin
	  result = a / b
	rescue ZeroDivisionError => e
	  puts "Error: #{e.message}"
	  result = nil
	ensure
	  puts "Division attempt completed."
	end
	result
  end
  
  puts divide(10, 2)
  puts divide(10, 0)
  
  # File I/O
  File.open("example.txt", "w") do |file|
	file.puts "This is a sample text."
	file.puts "Written by Ruby."
  end
  
  content = File.read("example.txt")
  puts "File content:"
  puts content
  
  # Remove the file
  File.delete("example.txt")
    `
  },
  {
    name: 'php.php',
    isFolder: false,
    language: 'php',
    snippet: `
<?php
// A simple PHP program demonstrating various features

// Class definition
class Person {
    private $name;
    private $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce() {
        echo "Hello, my name is {$this->name} and I'm {$this->age} years old.";
    }

    public static function createFromArray($data) {
        return new self($data['name'], $data['age']);
    }
}

// Interface definition
interface Greetable {
    public function greet();
}

// Class inheritance and interface implementation
class Employee extends Person implements Greetable {
    private $position;

    public function __construct($name, $age, $position) {
        parent::__construct($name, $age);
        $this->position = $position;
    }

    public function introduce() {
        parent::introduce();
        echo "I work as a {$this->position}.";
    }

    public function greet() {
        echo "Hello, {$this->name}!";
    }
}

// Create instances
$person = new Person("Alice", 30);
$employee = new Employee("Bob", 35, "Developer");

// Method calls
$person->introduce();
$employee->introduce();
$employee->greet();

// Array and iteration
$people = [
    ['name' => "Charlie", 'age' => 25],
    ['name' => "David", 'age' => 40],
    ['name' => "Eve", 'age' => 22]
];

foreach ($people as $personData) {
    $person = Person::createFromArray($personData);
    $person->introduce();
}

// Array manipulation
$scores = ['alice' => 95, 'bob' => 80, 'charlie' => 90];
$highScores = array_filter($scores, function($score) {
    return $score >= 90;
});
echo "High scores: " . print_r($highScores, true);

// Exception handling
function divide($a, $b) {
    try {
        if ($b == 0) {
            throw new Exception("Division by zero");
        }
        $result = $a / $b;
        return $result;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
        return null;
    } finally {
        echo "Division attempt completed.";
    }
}

echo divide(10, 2);
echo divide(10, 0);

// File I/O
$file = fopen("example.txt", "w");
fwrite($file, "This is a sample text.");
fwrite($file, "Written by PHP.");
fclose($file);

$content = file_get_contents("example.txt");
echo "File content:$content";

// Remove the file
unlink("example.txt");

// Namespace and use statement
namespace MyApp;

use DateTime;

$date = new DateTime();
echo "Current date and time: " . $date->format('Y-m-d H:i:s') . "\n";
?>
    `
  },
  {
    name: 'go.go',
    isFolder: false,
    language: 'go',
    snippet: `
package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"sync"
	"time"
)

// Person struct
type Person struct {
	Name string
	Age  int
}

// Introduce method for Person
func (p Person) Introduce() {
	fmt.Printf("Hello, my name is %s and I'm %d years old.", p.Name, p.Age)
}

// Employee struct embedding Person
type Employee struct {
	Person
	Position string
}

// Introduce method for Employee
func (e Employee) Introduce() {
	e.Person.Introduce()
	fmt.Printf("I work as a %s.", e.Position)
}

// Greeter interface
type Greeter interface {
	Greet()
}

// Greet method for Employee
func (e Employee) Greet() {
	fmt.Printf("Hello, %s!", e.Name)
}

func main() {
	// Create instances
	person := Person{Name: "Alice", Age: 30}
	employee := Employee{Person: Person{Name: "Bob", Age: 35}, Position: "Developer"}

	// Method calls
	person.Introduce()
	employee.Introduce()
	employee.Greet()

	// Slice and iteration
	people := []Person{
		{Name: "Charlie", Age: 25},
		{Name: "David", Age: 40},
		{Name: "Eve", Age: 22},
	}

	for _, p := range people {
		p.Introduce()
	}

	// Map manipulation
	scores := map[string]int{"alice": 95, "bob": 80, "charlie": 90}
	highScores := make(map[string]int)
	for name, score := range scores {
		if score >= 90 {
			highScores[name] = score
		}
	}
	fmt.Printf("High scores: %v\n", highScores)

	// Goroutine and channel
	ch := make(chan int)
	go func() {
		for i := 0; i < 5; i++ {
			ch <- i
			time.Sleep(time.Millisecond * 100)
		}
		close(ch)
	}()

	for num := range ch {
		fmt.Printf("Received: %d", num)
	}

	// Error handling
	result, err := divide(10, 2)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Printf("Result: %f", result)
	}

	result, err = divide(10, 0)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Printf("Result: %f", result)
	}

	// File I/O
	data := []byte("This is a sample text.\nWritten by Go.")
	err = ioutil.WriteFile("example.txt", data, 0644)
	if err != nil {
		fmt.Println("Error writing file:", err)
		return
	}

	content, err := ioutil.ReadFile("example.txt")
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}
	fmt.Printf("File content:\n%s\n", content)

	// Remove the file
	os.Remove("example.txt")

	// WaitGroup for concurrency
	var wg sync.WaitGroup
	for i := 0; i < 3; i++ {
		wg.Add(1)
		go func(id int) {
			defer wg.Done()
			fmt.Printf("Goroutine %d starting", id)
			time.Sleep(time.Second)
			fmt.Printf("Goroutine %d finished", id)
		}(i)
	}
	wg.Wait()
}

func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, fmt.Errorf("division by zero")
	}
	return a / b, nil
}
    `
  },
  {
    name: 'java.java',
    isFolder: false,
    language: 'java',
    snippet: `
import java.util.*;
    import java.io.*;
    import java.util.stream.*;
    
    class Person {
        private String name;
        private int age;
    
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    
        public void introduce() {
            System.out.printf("Hello, my name is %s and I'm %d years old.%n", name, age);
        }
    
        public static Person createFromMap(Map<String, Object> data) {
            return new Person((String) data.get("name"), (Integer) data.get("age"));
        }
    }
    
    interface Greetable {
        void greet();
    }
    
    class Employee extends Person implements Greetable {
        private String position;
    
        public Employee(String name, int age, String position) {
            super(name, age);
            this.position = position;
        }
    
        @Override
        public void introduce() {
            super.introduce();
            System.out.printf("I work as a %s.%n", position);
        }
    
        @Override
        public void greet() {
            System.out.printf("Hello, %s!%n", name);
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            // Create instances
            Person person = new Person("Alice", 30);
            Employee employee = new Employee("Bob", 35, "Developer");
    
            // Method calls
            person.introduce();
            employee.introduce();
            employee.greet();
    
            // List and iteration
            List<Map<String, Object>> people = Arrays.asList(
                Map.of("name", "Charlie", "age", 25),
                Map.of("name", "David", "age", 40),
                Map.of("name", "Eve", "age", 22)
            );
    
            people.stream()
            .map(Person::createFromMap)
            .forEach(Person::introduce);

        // Map manipulation
        Map<String, Integer> scores = Map.of("alice", 95, "bob", 80, "charlie", 90);
        Map<String, Integer> highScores = scores.entrySet().stream()
            .filter(entry -> entry.getValue() >= 90)
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
        System.out.println("High scores: " + highScores);

        // Exception handling
        try {
            System.out.println(divide(10, 2));
            System.out.println(divide(10, 0));
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Division attempt completed.");
        }

        // File I/O
        try {
            FileWriter writer = new FileWriter("example.txt");
            writer.write("This is a sample text.\n");
            writer.write("Written by Java.");
            writer.close();

            BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
            System.out.println("File content:");
            reader.lines().forEach(System.out::println);
            reader.close();

            // Remove the file
            new File("example.txt").delete();
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }

        // Multithreading
        Runnable task = () -> {
            String threadName = Thread.currentThread().getName();
            System.out.println(threadName + " is running");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(threadName + " finished");
        };

        for (int i = 0; i < 3; i++) {
            new Thread(task).start();
        }
    }

    public static double divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero");
        }
        return (double) a / b;
    }
} 

    `
  },
  {
    name: 'csharp.cs',
    isFolder: false,
    language: 'csharp',
    snippet: `
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public virtual void Introduce()
    {
        Console.WriteLine($"Hello, my name is {Name} and I'm {Age} years old.");
    }
}

interface IGreetable
{
    void Greet();
}

class Employee : Person, IGreetable
{
    public string Position { get; set; }

    public Employee(string name, int age, string position) : base(name, age)
    {
        Position = position;
    }

    public override void Introduce()
    {
        base.Introduce();
        Console.WriteLine($"I work as a {Position}.");
    }

    public void Greet()
    {
        Console.WriteLine($"Hello, {Name}!");
    }
}

class Program
{
    static async Task Main(string[] args)
    {
        var person = new Person("Alice", 30);
        var employee = new Employee("Bob", 35, "Developer");

        person.Introduce();
        employee.Introduce();
        employee.Greet();

        var people = new List<Dictionary<string, object>>
        {
            new Dictionary<string, object> { { "name", "Charlie" }, { "age", 25 } },
            new Dictionary<string, object> { { "name", "David" }, { "age", 40 } },
            new Dictionary<string, object> { { "name", "Eve" }, { "age", 22 } }
        };

        people.Select(data => new Person((string)data["name"], (int)data["age"]))
              .ToList()
              .ForEach(p => p.Introduce());

        var scores = new Dictionary<string, int> { { "alice", 95 }, { "bob", 80 }, { "charlie", 90 } };
        var highScores = scores.Where(pair => pair.Value >= 90)
                               .ToDictionary(pair => pair.Key, pair => pair.Value);
        Console.WriteLine($"High scores: {string.Join(", ", highScores)}");

        try
        {
            var result = await FetchDataAsync();
            Console.WriteLine($"Fetched data: {result}");
        }
        catch (Exception e)
        {
            Console.WriteLine($"Error: {e.Message}");
        }

        await foreach (var number in GenerateSequenceAsync())
        {
            Console.WriteLine(number);
        }

        await File.WriteAllTextAsync("example.txt", "Hello, C#!");
        var content = await File.ReadAllTextAsync("example.txt");
        Console.WriteLine($"File content: {content}");
        File.Delete("example.txt");
    }

    static async Task<string> FetchDataAsync()
    {
        await Task.Delay(2000);
        return "Some data";
    }

    static async IAsyncEnumerable<int> GenerateSequenceAsync()
    {
        for (int i = 1; i <= 5; i++)
        {
            yield return i;
            await Task.Delay(500);
        }
    }
}
    `
  },
  {
    name: 'python.py',
    isFolder: false,
    language: 'python',
    snippet: `
import asyncio
import aiofiles
from typing import Dict, List

class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hello, my name is {self.name} and I'm {self.age} years old.")

    @classmethod
    def from_dict(cls, data: Dict[str, object]):
        return cls(data['name'], data['age'])

class Employee(Person):
    def __init__(self, name: str, age: int, position: str):
        super().__init__(name, age)
        self.position = position

    def introduce(self):
        super().introduce()
        print(f"I work as a {self.position}.")

    def greet(self):
        print(f"Hello, {self.name}!")

async def fetch_data():
    await asyncio.sleep(2)
    return "Some data"

async def generate_sequence():
    for i in range(1, 6):
        yield i
        await asyncio.sleep(0.5)

async def main():
    person = Person("Alice", 30)
    employee = Employee("Bob", 35, "Developer")

    person.introduce()
    employee.introduce()
    employee.greet()

    people = [
        {"name": "Charlie", "age": 25},
        {"name": "David", "age": 40},
        {"name": "Eve", "age": 22}
    ]

    for person_data in people:
        Person.from_dict(person_data).introduce()

    scores = {"alice": 95, "bob": 80, "charlie": 90}
    high_scores = {name: score for name, score in scores.items() if score >= 90}
    print(f"High scores: {high_scores}")

    try:
        result = await fetch_data()
        print(f"Fetched data: {result}")
    except Exception as e:
        print(f"Error: {e}")

    async for number in generate_sequence():
        print(number)

    async with aiofiles.open("example.txt", mode='w') as file:
        await file.write("Hello, Python!")
    
    async with aiofiles.open("example.txt", mode='r') as file:
        content = await file.read()
        print(f"File content: {content}")

    import os
    os.remove("example.txt")

if __name__ == "__main__":
    asyncio.run(main())
    `
  },
  {
    name: 'rust.rs',
    isFolder: false,
    language: 'rust',
    snippet: `
use std::collections::HashMap;
use std::fs::File;
use std::io::{Write, Read};
use std::thread;
use std::time::Duration;

struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Self {
        Person { name, age }
    }

    fn introduce(&self) {
        println!("Hello, my name is {} and I'm {} years old.", self.name, self.age);
    }
}

struct Employee {
    person: Person,
    position: String,
}

impl Employee {
    fn new(name: String, age: u32, position: String) -> Self {
        Employee {
            person: Person::new(name, age),
            position,
        }
    }

    fn introduce(&self) {
        self.person.introduce();
        println!("I work as a {}.", self.position);
    }

    fn greet(&self) {
        println!("Hello, {}!", self.person.name);
    }
}

fn main() -> std::io::Result<()> {
    let person = Person::new(String::from("Alice"), 30);
    let employee = Employee::new(String::from("Bob"), 35, String::from("Developer"));

    person.introduce();
    employee.introduce();
    employee.greet();

    let people = vec![
        HashMap::from([("name", "Charlie"), ("age", "25")]),
        HashMap::from([("name", "David"), ("age", "40")]),
        HashMap::from([("name", "Eve"), ("age", "22")]),
    ];

    for person_data in people {
        let person = Person::new(
            person_data["name"].to_string(),
            person_data["age"].parse().unwrap(),
        );
        person.introduce();
    }

    let mut scores = HashMap::new();
    scores.insert("alice", 95);
    scores.insert("bob", 80);
    scores.insert("charlie", 90);

    let high_scores: HashMap<_, _> = scores.into_iter()
        .filter(|&(_, score)| score >= 90)
        .collect();
    println!("High scores: {:?}", high_scores);

    let handle = thread::spawn(|| {
        for i in 1..6 {
            println!("Thread: number {}", i);
            thread::sleep(Duration::from_millis(500));
        }
    });

    for i in 1..6 {
        println!("Main: number {}", i);
        thread::sleep(Duration::from_millis(300));
    }

    handle.join().unwrap();

    let mut file = File::create("example.txt")?;
    file.write_all(b"Hello, Rust!")?;

    let mut content = String::new();
    File::open("example.txt")?.read_to_string(&mut content)?;
    println!("File content: {}", content);

    std::fs::remove_file("example.txt")?;

    Ok(())
}
    `
  },
  {
    name: 'swift.swift',
    isFolder: false,
    language: 'swift',
    snippet: `
import Foundation

class Person {
    let name: String
    let age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func introduce() {
        print("Hello, my name is (name) and I'm (age) years old.")
    }
}

protocol Greetable {
    func greet()
}

class Employee: Person, Greetable {
    let position: String
    
    init(name: String, age: Int, position: String) {
        self.position = position
        super.init(name: name, age: age)
    }
    
    override func introduce() {
        super.introduce()
        print("I work as a (position).")
    }
    
    func greet() {
        print("Hello, (name)!")
    }
}

// Main execution
let person = Person(name: "Alice", age: 30)
let employee = Employee(name: "Bob", age: 35, position: "Developer")

person.introduce()
employee.introduce()
employee.greet()

let people = [
    ["name": "Charlie", "age": 25],
    ["name": "David", "age": 40],
    ["name": "Eve", "age": 22]
]

people.map { Person(name: $0["name"] as! String, age: $0["age"] as! Int) }
      .forEach { $0.introduce() }

let scores = ["alice": 95, "bob": 80, "charlie": 90]
let highScores = scores.filter { $0.value >= 90 }
print("High scores: (highScores)")

// Asynchronous operations
func fetchData() async throws -> String {
    try await Task.sleep(nanoseconds: 2_000_000_000)
    return "Some data"
}

func generateSequence() async -> AsyncStream<Int> {
    AsyncStream { continuation in
        Task {
            for i in 1...5 {
                continuation.yield(i)
                try? await Task.sleep(nanoseconds: 500_000_000)
            }
            continuation.finish()
        }
    }
}

Task {
    do {
        let result = try await fetchData()
        print("Fetched data: (result)")
    } catch {
        print("Error: (error)")
    }
    
    for await number in await generateSequence() {
        print(number)
    }
    
    let fileURL = URL(fileURLWithPath: "example.txt")
    try "Hello, Swift!".write(to: fileURL, atomically: true, encoding: .utf8)
    let content = try String(contentsOf: fileURL, encoding: .utf8)
    print("File content: (content)")
    try FileManager.default.removeItem(at: fileURL)
}

// Keep the program running to allow async tasks to complete
RunLoop.main.run(until: Date(timeIntervalSinceNow: 5))
    `
  },
  {
    name: 'cpp.cpp',
    isFolder: false,
    language: 'cpp',
    snippet: `
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
#include <memory>
#include <thread>
#include <chrono>
#include <fstream>

class Person {
protected:
    std::string name;
    int age;

public:
    Person(std::string name, int age) : name(std::move(name)), age(age) {}

    virtual void introduce() const {
        std::cout << "Hello, my name is " << name << " and I'm " << age << " years old." << std::endl;
    }
};

class Employee : public Person {
private:
    std::string position;

public:
    Employee(std::string name, int age, std::string position)
        : Person(std::move(name), age), position(std::move(position)) {}

    void introduce() const override {
        Person::introduce();
        std::cout << "I work as a " << position << "." << std::endl;
    }

    void greet() const {
        std::cout << "Hello, " << name << "!" << std::endl;
    }
};

int main() {
    auto person = std::make_unique<Person>("Alice", 30);
    auto employee = std::make_unique<Employee>("Bob", 35, "Developer");

    person->introduce();
    employee->introduce();
    employee->greet();

    std::vector<std::map<std::string, std::string>> people = {
        {{"name", "Charlie"}, {"age", "25"}},
        {{"name", "David"}, {"age", "40"}},
        {{"name", "Eve"}, {"age", "22"}}
    };

    for (const auto& person_data : people) {
        Person(person_data.at("name"), std::stoi(person_data.at("age"))).introduce();
    }

    std::map<std::string, int> scores = {{"alice", 95}, {"bob", 80}, {"charlie", 90}};
    std::map<std::string, int> high_scores;

    std::copy_if(scores.begin(), scores.end(), 
                 std::inserter(high_scores, high_scores.end()),
                 [](const auto& pair) { return pair.second >= 90; });

    std::cout << "High scores: ";
    for (const auto& [name, score] : high_scores) {
        std::cout << name << ": " << score << ", ";
    }
    std::cout << std::endl;

    std::thread worker([]() {
        for (int i = 1; i <= 5; ++i) {
            std::cout << "Thread: number " << i << std::endl;
            std::this_thread::sleep_for(std::chrono::milliseconds(500));
        }
    });

    for (int i = 1; i <= 5; ++i) {
        std::cout << "Main: number " << i << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(300));
    }

    worker.join();

    std::ofstream file("example.txt");
    file << "Hello, C++!";
    file.close();

    std::ifstream input_file("example.txt");
    std::string content;
    std::getline(input_file, content);
    std::cout << "File content: " << content << std::endl;
    input_file.close();

    std::remove("example.txt");

    return 0;
}
    `
  },
  {
    name: 'c.c',
    isFolder: false,
    language: 'c',
    snippet: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>
#include <unistd.h>

#define MAX_NAME 50

typedef struct {
    char name[MAX_NAME];
    int age;
} Person;

void introduce(const Person* person) {
    printf("Hello, my name is %s and I'm %d years old.", person->name, person->age);
}

typedef struct {
    Person person;
    char position[MAX_NAME];
} Employee;

void employee_introduce(const Employee* employee) {
    introduce(&employee->person);
    printf("I work as a %s.", employee->position);
}

void employee_greet(const Employee* employee) {
    printf("Hello, %s!\n", employee->person.name);
}

void* thread_function(void* arg) {
    for (int i = 1; i <= 5; i++) {
        printf("Thread: number %d", i);
        usleep(500000);  // Sleep for 500ms
    }
    return NULL;
}

int main() {
    Person person = {"Alice", 30};
    Employee employee = {{"Bob", 35}, "Developer"};

    introduce(&person);
    employee_introduce(&employee);
    employee_greet(&employee);

    Person people[] = {
        {"Charlie", 25},
        {"David", 40},
        {"Eve", 22}
    };

    for (int i = 0; i < sizeof(people) / sizeof(Person); i++) {
        introduce(&people[i]);
    }

    // Note: C doesn't have built-in hash maps, so we'll use a simple array for scores
    int scores[] = {95, 80, 90};
    char* names[] = {"alice", "bob", "charlie"};
    printf("High scores: ");
    for (int i = 0; i < sizeof(scores) / sizeof(int); i++) {
        if (scores[i] >= 90) {
            printf("%s: %d, ", names[i], scores[i]);
        }
    }
    printf("\n");

    pthread_t thread_id;
    pthread_create(&thread_id, NULL, thread_function, NULL);

    for (int i = 1; i <= 5; i++) {
        printf("Main: number %d", i);
        usleep(300000);  // Sleep for 300ms
    }

    pthread_join(thread_id, NULL);

    FILE* file = fopen("example.txt", "w");
    if (file != NULL) {
        fprintf(file, "Hello, C!");
        fclose(file);

        file = fopen("example.txt", "r");
        if (file != NULL) {
            char content[100];
            fgets(content, sizeof(content), file);
            printf("File content: %s", content);
            fclose(file);
        }

        remove("example.txt");
    }

    return 0;
}
    `
  },
  {
    name: 'lua.lua',
    isFolder: false,
    language: 'lua',
    snippet: `
-- Define the Person class
Person = {}
Person.__index = Person

function Person:new(name, age)
    local self = setmetatable({}, Person)
    self.name = name
    self.age = age
    return self
end

function Person:introduce()
    print(string.format("Hello, my name is %s and I'm %d years old.", self.name, self.age))
end

-- Define the Employee class that inherits from Person
Employee = {}
Employee.__index = Employee
setmetatable(Employee, {__index = Person})

function Employee:new(name, age, position)
    local self = setmetatable(Person:new(name, age), Employee)
    self.position = position
    return self
end

function Employee:introduce()
    Person.introduce(self)
    print(string.format("I work as a %s.", self.position))
end

function Employee:greet()
    print(string.format("Hello, %s!", self.name))
end

-- Create instances and call methods
local person = Person:new("Alice", 30)
local employee = Employee:new("Bob", 35, "Developer")

person:introduce()
employee:introduce()
employee:greet()

-- Create a list of people and introduce them
local people = {
    {name = "Charlie", age = 25},
    {name = "David", age = 40},
    {name = "Eve", age = 22}
}

for _, person_data in ipairs(people) do
    local person = Person:new(person_data.name, person_data.age)
    person:introduce()
end

-- Demonstrate table manipulation (Lua's equivalent of a hash map)
local scores = {alice = 95, bob = 80, charlie = 90}
local high_scores = {}

for name, score in pairs(scores) do
    if score >= 90 then
        high_scores[name] = score
    end
end

print("High scores:")
for name, score in pairs(high_scores) do
    print(string.format("%s: %d", name, score))
end

-- File I/O
local file = io.open("example.txt", "w")
if file then
    file:write("Hello, Lua!")
    file:close()

    file = io.open("example.txt", "r")
    if file then
        local content = file:read("*all")
        print("File content: " .. content)
        file:close()
    end

    os.remove("example.txt")
end

-- Coroutines for pseudo-concurrency
local function count_to_five()
    for i = 1, 5 do
        print("Coroutine: number " .. i)
        coroutine.yield()
    end
end

local co = coroutine.create(count_to_five)

for i = 1, 5 do
    print("Main: number " .. i)
    coroutine.resume(co)
end

-- Metatables and operator overloading
local Point = {}
Point.__index = Point

function Point:new(x, y)
    return setmetatable({x = x, y = y}, Point)
end

function Point:__add(other)
    return Point:new(self.x + other.x, self.y + other.y)
end

function Point:__tostring()
    return string.format("Point(%d, %d)", self.x, self.y)
end

local p1 = Point:new(1, 2)
local p2 = Point:new(3, 4)
local p3 = p1 + p2

print(p1)  -- Output: Point(1, 2)
print(p2)  -- Output: Point(3, 4)
print(p3)  -- Output: Point(4, 6)
    `
  },
  {
    name: 'sql.sql',
    isFolder: false,
    language: 'sql',
    snippet: `
-- Create tables
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department_id INT,
    salary DECIMAL(10, 2)
);

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    location VARCHAR(50)
);

-- Insert sample data
INSERT INTO departments (id, name, location) VALUES
(1, 'HR', 'New York'),
(2, 'IT', 'San Francisco'),
(3, 'Finance', 'Chicago');

INSERT INTO employees (id, name, age, department_id, salary) VALUES
(1, 'John Doe', 30, 2, 75000.00),
(2, 'Jane Smith', 35, 1, 65000.00),
(3, 'Bob Johnson', 28, 2, 80000.00),
(4, 'Alice Brown', 40, 3, 90000.00),
(5, 'Charlie Davis', 45, 1, 70000.00);

-- Basic SELECT query
SELECT * FROM employees;

-- JOIN query
SELECT e.name, e.age, d.name AS department, d.location
FROM employees e
JOIN departments d ON e.department_id = d.id;

-- Aggregate functions and GROUP BY
SELECT d.name AS department, AVG(e.salary) AS avg_salary, COUNT(*) AS employee_count
FROM employees e
JOIN departments d ON e.department_id = d.id
GROUP BY d.name;

-- Subquery
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- UPDATE statement
UPDATE employees
SET salary = salary * 1.1
WHERE department_id = (SELECT id FROM departments WHERE name = 'IT');

-- DELETE statement
DELETE FROM employees
WHERE age > 50;

-- CREATE VIEW
CREATE VIEW employee_details AS
SELECT e.id, e.name, e.age, d.name AS department, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.id;

-- Query the view
SELECT * FROM employee_details;

-- CREATE PROCEDURE
DELIMITER //
CREATE PROCEDURE give_raise(IN dept_name VARCHAR(50), IN raise_percentage DECIMAL(5,2))
BEGIN
    UPDATE employees e
    JOIN departments d ON e.department_id = d.id
    SET e.salary = e.salary * (1 + raise_percentage / 100)
    WHERE d.name = dept_name;
END //
DELIMITER ;

-- Call the procedure
CALL give_raise('IT', 5.00);

-- CREATE TRIGGER
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.age < 18 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Employee must be at least 18 years old';
    END IF;
END //
DELIMITER ;

-- This INSERT will fail due to the trigger
INSERT INTO employees (id, name, age, department_id, salary)
VALUES (6, 'Young Employee', 16, 1, 30000.00);
    `
  },
  {
    name: 'yaml.yaml',
    isFolder: false,
    language: 'yaml',
    snippet: `
# Company Configuration
company:
  name: Acme Corporation
  founded: 1985
  location:
    city: New York
    country: USA

# Employee Information
employees:
  - id: 1
    name: John Doe
    position: Software Engineer
    department: Engineering
    skills:
      - Python
      - JavaScript
      - Docker
    projects:
      - name: Project A
        role: Lead Developer
      - name: Project B
        role: Contributor
  - id: 2
    name: Jane Smith
    position: Product Manager
    department: Product
    skills:
      - Agile Methodologies
      - User Research
      - Data Analysis
    projects:
      - name: Project C
        role: Project Manager

# Department Structure
departments:
  Engineering:
    head: Alice Johnson
    budget: 1000000
    teams:
      - Frontend
      - Backend
      - DevOps
  Product:
    head: Bob Williams
    budget: 750000
    teams:
      - User Experience
      - Market Research
  Marketing:
    head: Carol Brown
    budget: 500000
    teams:
      - Digital Marketing
      - Content Creation

# Project Information
projects:
  - name: Project A
    description: Develop a new mobile app
    start_date: 2023-01-15
    end_date: 2023-06-30
    status: In Progress
    team_members:
      - John Doe
      - Jane Smith
  - name: Project B
    description: Upgrade server infrastructure
    start_date: 2023-03-01
    end_date: 2023-08-31
    status: Planning
    team_members:
      - John Doe
      - Alice Johnson

# Configuration Settings
settings:
  theme:
    primary_color: '#007bff'
    secondary_color: '#6c757d'
  features:
    enable_dark_mode: true
    enable_notifications: true
  security:
    two_factor_auth: required
    password_policy:
      min_length: 12
      require_special_chars: true

# Environment Variables
env_vars: !include env.yaml

# Complex Data Types
complex_data:
  ? - key1
    - key2
  : value
  ? - key3
    - key4
  : nested_key1: nested_value1
    nested_key2: nested_value2

# Anchors and Aliases
defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults

# Multi-line Strings
description: |
  This is a long description
  that spans multiple lines.
  It can include special characters: !@#$%^&*()
  and preserve formatting.

# Custom Tags
!!python/object/apply:datetime.datetime args: [2023, 4, 26, 12, 0, 0]

    `
  },
  {
    name: 'json.json',
    isFolder: false,
    language: 'json',
    snippet: `
{
  "company": {
    "name": "TechInnovate Solutions",
    "founded": 2010,
    "headquarters": {
      "city": "San Francisco",
      "state": "California",
      "country": "USA"
    },
    "employees": 500,
    "public": false
  },
  "products": [
    {
      "id": "P001",
      "name": "AI Assistant",
      "version": "2.5.0",
      "releaseDate": "2023-03-15",
      "features": [
        "Natural Language Processing",
        "Machine Learning Integration",
        "Multi-platform Support"
      ],
      "pricing": {
        "basic": 9.99,
        "pro": 29.99,
        "enterprise": "Custom"
      }
    },
    {
      "id": "P002",
      "name": "Cloud Storage Solution",
      "version": "1.8.2",
      "releaseDate": "2023-01-10",
      "features": [
        "End-to-end Encryption",
        "Automatic Syncing",
        "Collaborative Editing"
      ],
      "pricing": {
        "personal": 4.99,
        "business": 14.99,
        "enterprise": 49.99
      }
    }
  ],
  "partners": ["Microsoft", "Amazon Web Services", "Google Cloud Platform"],
  "financials": {
    "revenue": {
      "2021": 5000000,
      "2022": 7500000,
      "2023": 10000000
    },
    "expenses": {
      "2021": 4000000,
      "2022": 5500000,
      "2023": 7000000
    }
  },
  "future_plans": {
    "expansion": ["Europe", "Asia"],
    "new_products": [
      "Quantum Computing Solutions",
      "Augmented Reality Workspace"
    ],
    "hiring_goals": {
      "engineers": 50,
      "sales": 30,
      "support": 20
    }
  },
  "certifications": ["ISO 27001", "SOC 2", "GDPR Compliant"]
}

    `
  },
  {
    name: 'bash.sh',
    isFolder: false,
    language: 'bash',
    snippet: `
#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install a package
install_package() {
    if command_exists apt-get; then
        sudo apt-get update && sudo apt-get install -y "$1"
    elif command_exists yum; then
        sudo yum install -y "$1"
    elif command_exists brew; then
        brew install "$1"
    else
        echo "Unable to install package. No supported package manager found."
        exit 1
    fi
}

# Check and install required packages
required_packages=("git" "docker" "python3")
for package in "'"; do
    if ! command_exists "$package"; then
        echo "Installing $package..."
        install_package "$package"
    else
        echo "$package is already installed."
    fi
done

# Clone a repository
repo_url="https://github.com/example/repo.git"
repo_name=$(basename "$repo_url" .git)
if [ ! -d "$repo_name" ]; then
    git clone "$repo_url"
    cd "$repo_name" || exit
else
    echo "Repository already exists. Updating..."
    cd "$repo_name" || exit
    git pull
fi

# Create a backup of configuration files
backup_dir="$HOME/config_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$backup_dir"
config_files=(".bashrc" ".vimrc" ".gitconfig")
for file in "''"; do
    if [ -f "$HOME/$file" ]; then
        cp "$HOME/$file" "$backup_dir/"
        echo "Backed up $file"
    fi
done

# Build and run a Docker container
if command_exists docker; then
    docker build -t myapp .
    docker run -d -p 8080:80 --name myapp_container myapp
else
    echo "Docker is not installed. Skipping container build and run."
fi

# Process log files
log_dir="/var/log"
if [ -d "$log_dir" ]; then
    echo "Processing log files..."
    find "$log_dir" -name "*.log" -type f -mtime -7 | while read -r log_file; do
        echo "Analyzing $log_file"
        grep "ERROR" "$log_file" | tail -n 10
    done
else
    echo "Log directory not found."
fi

# Monitor system resources
echo "System Resource Usage:"
echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | sed "s/.*, *([0-9.]*)%* id./" | awk '{print 100 - $1"%"}')"
echo "Memory Usage: $(free -m | awk 'NR==2{printf "%.2f%%", $3*100/$2 }')"
echo "Disk Usage: $(df -h / | awk 'NR==2{print $5}')"

# Cleanup old files
cleanup_dir="$HOME/Downloads"
find "$cleanup_dir" -type f -mtime +30 -delete

echo "Script execution completed."
    `
  },
  {
    name: 'markdown.md',
    isFolder: false,
    language: 'markdown',
    snippet: `
# Project Documentation

## Table of Contents

- [Project Documentation](#project-documentation)
	- [Table of Contents](#table-of-contents)
	- [Introduction](#introduction)
		- [Key Features](#key-features)
	- [Installation](#installation)
	- [Usage](#usage)
	- [API Reference](#api-reference)
		- [\`doSomething(input: string): string\`](#dosomethinginput-string-string)
	- [Contributing](#contributing)
	- [License](#license)

## Introduction

Welcome to our project! This documentation will guide you through the installation process, basic usage, and how to contribute to the project.

### Key Features

- **Feature 1**: Description of feature 1
- **Feature 2**: Description of feature 2
- **Feature 3**: Description of feature 3

## Installation

To install the project, follow these steps:

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/username/project.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd project
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Usage

Here's a quick example of how to use the main functionality of the project:

\`\`\`javascript
const project = require('project');

const result = project.doSomething('Hello, World!');
console.log(result);
\`\`\`

For more detailed usage instructions, please refer to the [User Guide](docs/user-guide.md).

## API Reference

### \`doSomething(input: string): string\`

Performs the main operation of the project.

**Parameters:**

- \`input\`: A string to process

**Returns:**
A processed string

**Example:**
\`\`\`javascript
const result = project.doSomething('Hello');
// result: "Processed: Hello"
\`\`\`

For a complete API reference, see the [API Documentation](docs/api.md).

## Contributing

We welcome contributions to this project! Here's how you can help:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/AmazingFeature\`)
3. Make your changes
4. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
5. Push to the branch (\`git push origin feature/AmazingFeature\`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

![Project Logo](https://example.com/project-logo.png)

[![Build Status](https://travis-ci.org/username/project.svg?branch=master)](https://travis-ci.org/username/project)
[![npm version](https://badge.fury.io/js/project.svg)](https://badge.fury.io/js/project)
[![Coverage Status](https://coveralls.io/repos/github/username/project/badge.svg?branch=master)](https://coveralls.io/github/username/project?branch=master)

    `
  }
];

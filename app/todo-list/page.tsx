"use client"

import { useState, useEffect } from "react"
import { Plus, Trash2, Filter, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define the Task type
type Task = {
  id: string
  text: string
  completed: boolean
  category: string
  priority: "low" | "medium" | "high"
  createdAt: Date
}

// Initial tasks for website completion
const initialTasks: Task[] = [
  {
    id: "1",
    text: "Complete user authentication system",
    completed: false,
    category: "backend",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "2",
    text: "Implement database integration for job listings",
    completed: false,
    category: "backend",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "3",
    text: "Finalize mobile app design",
    completed: false,
    category: "design",
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: "4",
    text: "Add professor coordinator Ovidiu GHIUTA to about page",
    completed: false,
    category: "content",
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: "5",
    text: "Implement job application tracking system",
    completed: false,
    category: "feature",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "6",
    text: "Create email notification system",
    completed: false,
    category: "backend",
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: "7",
    text: "Optimize website performance",
    completed: false,
    category: "optimization",
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: "8",
    text: "Implement responsive design for all pages",
    completed: true,
    category: "frontend",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "9",
    text: "Set up analytics tracking",
    completed: false,
    category: "analytics",
    priority: "low",
    createdAt: new Date(),
  },
  {
    id: "10",
    text: "Conduct user testing",
    completed: false,
    category: "testing",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "11",
    text: "Deploy website to production",
    completed: false,
    category: "deployment",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "12",
    text: "Implement search functionality for jobs",
    completed: true,
    category: "feature",
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: "13",
    text: "Create admin dashboard for content management",
    completed: true,
    category: "admin",
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: "14",
    text: "Implement multi-language support",
    completed: true,
    category: "feature",
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: "15",
    text: "Set up CI/CD pipeline",
    completed: false,
    category: "devops",
    priority: "medium",
    createdAt: new Date(),
  },
]

// Categories with their colors
const categories = {
  backend: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  frontend: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  design: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  content: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  feature: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  optimization: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  analytics: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  testing: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  deployment: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  admin: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  devops: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
}

// Priority colors
const priorityColors = {
  low: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
}

export default function TodoListPage() {
  // State for tasks
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Try to load from localStorage if available (client-side only)
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks")
      return savedTasks ? JSON.parse(savedTasks) : initialTasks
    }
    return initialTasks
  })

  // State for new task input
  const [newTask, setNewTask] = useState("")
  const [newCategory, setNewCategory] = useState("feature")
  const [newPriority, setNewPriority] = useState<"low" | "medium" | "high">("medium")

  // State for filter
  const [filter, setFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return

    const task: Task = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
      category: newCategory,
      priority: newPriority,
      createdAt: new Date(),
    }

    setTasks([...tasks, task])
    setNewTask("")
  }

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Filter tasks based on current filters
  const filteredTasks = tasks.filter((task) => {
    // Filter by completion status
    if (filter === "completed" && !task.completed) return false
    if (filter === "active" && task.completed) return false

    // Filter by category
    if (categoryFilter !== "all" && task.category !== categoryFilter) return false

    // Filter by priority
    if (priorityFilter !== "all" && task.priority !== priorityFilter) return false

    return true
  })

  // Get unique categories from tasks
  const uniqueCategories = Array.from(new Set(tasks.map((task) => task.category)))

  // Calculate progress
  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Website Development Todo List</h1>
          <p className="text-muted-foreground">Track and manage tasks to complete the Job4Students website</p>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Progress</CardTitle>
                <CardDescription>
                  {completedCount} of {totalCount} tasks completed
                </CardDescription>
              </div>
              <div className="text-2xl font-bold">{progress}%</div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div
                className="bg-theme-purple h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Manage your website development tasks</CardDescription>

                <div className="flex flex-wrap gap-2 mt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => setFilter("all")}>All Tasks</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("active")}>Active Tasks</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("completed")}>Completed Tasks</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Category: {categoryFilter === "all" ? "All" : categoryFilter}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => setCategoryFilter("all")}>All Categories</DropdownMenuItem>
                      <Separator className="my-1" />
                      {uniqueCategories.map((category) => (
                        <DropdownMenuItem key={category} onClick={() => setCategoryFilter(category)}>
                          {category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Priority: {priorityFilter === "all" ? "All" : priorityFilter}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => setPriorityFilter("all")}>All Priorities</DropdownMenuItem>
                      <Separator className="my-1" />
                      <DropdownMenuItem onClick={() => setPriorityFilter("high")}>High</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setPriorityFilter("medium")}>Medium</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setPriorityFilter("low")}>Low</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {(filter !== "all" || categoryFilter !== "all" || priorityFilter !== "all") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setFilter("all")
                        setCategoryFilter("all")
                        setPriorityFilter("all")
                      }}
                    >
                      <X className="h-4 w-4 mr-1" /> Clear Filters
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all" onClick={() => setFilter("all")}>
                      All
                    </TabsTrigger>
                    <TabsTrigger value="active" onClick={() => setFilter("active")}>
                      Active
                    </TabsTrigger>
                    <TabsTrigger value="completed" onClick={() => setFilter("completed")}>
                      Completed
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-4">
                    {filteredTasks.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No tasks found with the current filters
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {filteredTasks.map((task) => (
                          <li
                            key={task.id}
                            className={`flex items-start justify-between p-3 rounded-lg border ${
                              task.completed ? "bg-muted/50" : "bg-card"
                            }`}
                          >
                            <div className="flex items-start gap-3 flex-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className={`h-5 w-5 rounded-full ${
                                  task.completed ? "text-green-500" : "text-muted-foreground"
                                }`}
                                onClick={() => toggleTask(task.id)}
                              >
                                <CheckCircle2 className={`h-5 w-5 ${task.completed ? "fill-green-500" : ""}`} />
                              </Button>

                              <div className="flex-1">
                                <p className={`${task.completed ? "line-through text-muted-foreground" : ""}`}>
                                  {task.text}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <Badge
                                    variant="outline"
                                    className={categories[task.category as keyof typeof categories]}
                                  >
                                    {task.category}
                                  </Badge>
                                  <Badge variant="outline" className={priorityColors[task.priority]}>
                                    {task.priority}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteTask(task.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </TabsContent>

                  <TabsContent value="active" className="mt-4">
                    {filteredTasks.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No active tasks found with the current filters
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {filteredTasks.map((task) => (
                          <li key={task.id} className="flex items-start justify-between p-3 rounded-lg border">
                            <div className="flex items-start gap-3 flex-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-5 w-5 rounded-full text-muted-foreground"
                                onClick={() => toggleTask(task.id)}
                              >
                                <CheckCircle2 className="h-5 w-5" />
                              </Button>

                              <div className="flex-1">
                                <p>{task.text}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <Badge
                                    variant="outline"
                                    className={categories[task.category as keyof typeof categories]}
                                  >
                                    {task.category}
                                  </Badge>
                                  <Badge variant="outline" className={priorityColors[task.priority]}>
                                    {task.priority}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteTask(task.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </TabsContent>

                  <TabsContent value="completed" className="mt-4">
                    {filteredTasks.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No completed tasks found with the current filters
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {filteredTasks.map((task) => (
                          <li
                            key={task.id}
                            className="flex items-start justify-between p-3 rounded-lg border bg-muted/50"
                          >
                            <div className="flex items-start gap-3 flex-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-5 w-5 rounded-full text-green-500"
                                onClick={() => toggleTask(task.id)}
                              >
                                <CheckCircle2 className="h-5 w-5 fill-green-500" />
                              </Button>

                              <div className="flex-1">
                                <p className="line-through text-muted-foreground">{task.text}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <Badge
                                    variant="outline"
                                    className={categories[task.category as keyof typeof categories]}
                                  >
                                    {task.category}
                                  </Badge>
                                  <Badge variant="outline" className={priorityColors[task.priority]}>
                                    {task.priority}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteTask(task.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  {filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"} displayed
                </p>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Add New Task</CardTitle>
                <CardDescription>Create a new task for the website</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="task" className="text-sm font-medium">
                    Task Description
                  </label>
                  <Input
                    id="task"
                    placeholder="Enter task description..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addTask()
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  >
                    {Object.keys(categories).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="priority" className="text-sm font-medium">
                    Priority
                  </label>
                  <select
                    id="priority"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as "low" | "medium" | "high")}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-theme-purple hover:bg-theme-blue"
                  onClick={addTask}
                  disabled={newTask.trim() === ""}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Task
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Task Summary</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{tasks.length}</div>
                    <div className="text-sm text-muted-foreground">Total Tasks</div>
                  </div>

                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{completedCount}</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>

                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{tasks.filter((t) => t.priority === "high").length}</div>
                    <div className="text-sm text-muted-foreground">High Priority</div>
                  </div>

                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{tasks.length - completedCount}</div>
                    <div className="text-sm text-muted-foreground">Remaining</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


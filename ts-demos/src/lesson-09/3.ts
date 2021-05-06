{
  interface Course {
    category: 'task' | 'live'
  }

  const course: Course = {
    category: 'task'
  }

  type Dir = 'east' | 'west' | 'north' | 'south'
  const dir: Dir = 'east'
}
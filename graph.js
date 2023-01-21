class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    if (this.adjacencyList.has(source)) {
      this.adjacencyList.get(source).push(destination);
    }

    if (this.adjacencyList.has(destination)) {
      this.adjacencyList.get(destination).push(source);
    }
  }

  bfs(startingVertex, callback) { // breadth-first search
    const queue = new Queue(); // queue of vertices
    const visited = { [startingVertex]: true }; // visited vertices

    queue.enQueue(startingVertex); // add starting vertex to queue

    while (!queue.isEmpty()) {
      let activeVertex = queue.deQueue(); // take vertex from queue

      callback(activeVertex); // callback for visited vertex

      // get array of adjacent vertices
      const neighbors = this.adjacencyList.get(activeVertex);

      neighbors.forEach(neighbor => {
        if (!visited[neighbor]) { // if vertex isn't visited 
          visited[neighbor] = true; // mark the vertex as visited
          queue.enQueue(neighbor); // add vertex to queue
        }
      });
    }
  }

  dfs(startingVertex, callback) { // depth-first search
    // same logic as bfs, just here we use stack to save vertices
    const stack = new Stack();
    const visited = { [startingVertex]: true };

    stack.push(startingVertex);

    while (!stack.isEmpty()) {
      let activeVertex = stack.pop();

      callback(activeVertex);

      const neighbors = this.adjacencyList.get(activeVertex);

      neighbors.forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
  }

  _path(startingVertex) { // bread-first search with path saving
    const queue = new Queue();
    const visited = { [startingVertex]: true };

    const distance = { [startingVertex]: 0 };
    const previous = { [startingVertex]: null };

    queue.enQueue(startingVertex);

    while (!queue.isEmpty()) {
      let activeVertex = queue.deQueue();

      const neighbors = this.adjacencyList.get(activeVertex);

      neighbors.forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.enQueue(neighbor);

          previous[neighbor] = activeVertex;
          distance[neighbor] = distance[activeVertex] + 1;
        }
      });
    }

    // return object of path and distance
    return { distance, previous };
  }

  findShortestPath(startingVertex, finishVertex) {
    const result = this._path(startingVertex);
    const path = [];

    let currentVertex = finishVertex;

    while (currentVertex) {
      path.unshift(currentVertex);
      currentVertex = result.previous[currentVertex];
    }

    return [...path, `distance: ${result.distance[finishVertex]}`];
  }
}
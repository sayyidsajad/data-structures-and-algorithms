class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList) {
      return;
    }
    for (let adj of this.adjacencyList[vertex]) {
      this.removeVertex(vertex, adj);
    }
    delete this.adjacencyList[vertex];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "-->" + [...this.adjacencyList[vertex]]);
    }
  }

  bfs(startVertex) {
    let queue = [];
    const visited = {};
    visited[startVertex] = true;
    queue.push(startVertex);
    while (queue.length) {
      let currentVertex = queue.shift();
      console.log(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.display();
graph.bfs('B')

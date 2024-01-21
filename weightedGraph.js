class Graph {
    constructor() {
      this.adjList = {};
    }
    addVertex(vertex) {
      if (!this.adjList[vertex]) {
        this.adjList[vertex] = {};
      }
    }
  
    addEdge(vertex1, vertex2, weight) {
      if (!this.adjList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjList[vertex1][vertex2] = weight;
      this.adjList[vertex2][vertex1] = weight;
    }
  
    removeEdge(vertex1, vertex2) {
      delete this.adjList[vertex1][vertex2];
      delete this.adjList[vertex2][vertex1];
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjList[vertex1] &&
        this.adjList[vertex2] &&
        vertex2 in this.adjList[vertex1] &&
        vertex1 in this.adjList[vertex2]
      );
    }
  
    remove(vertex) {
      if (!this.adjList[vertex]) {
        return;
      }
      for (let adjV in this.adjList[vertex]) {
        this.removeEdge(vertex, adjV);
      }
      delete this.adjList[vertex];
    }
  
    bfs(startVertex) {
      const queue = [];
      const visited = {};
      visited[startVertex] = true;
      queue.push(startVertex);
      while (queue.length) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
        for (let neighbor in this.adjList[currentVertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  
    dfs(startVertex) {
      const visited = {};
      const stack = [];
      visited[startVertex] = true;
      stack.push(startVertex);
      while (stack.length > 0) {
        const currentVertex = stack.pop();
        console.log(currentVertex);
        for (let neighbor in this.adjList[currentVertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        }
      }
    }
  
    dijkstra(startVertex) {
      const distances = {};
      const visited = {};
      for (let vertex in this.adjList) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
      }
      distances[startVertex] = 0;
      while (true) {
        const currentVertex = this.getMinDistanceVertex(distances, visited);
        if (!currentVertex) break;
        visited[currentVertex] = true;
        for (let neighbor in this.adjList[currentVertex]) {
          const weight = this.adjList[currentVertex][neighbor];
          const totalDistance = distances[currentVertex] + weight;
          if (!visited[neighbor] && totalDistance < distances[neighbor]) {
            distances[neighbor] = totalDistance;
          }
        }
      }
      for (let vertex in distances) {
        console.log(
          `Shortest distance from ${startVertex} to ${vertex}: ${distances[vertex]}`
        );
      }
    }
  
    getMinDistanceVertex(distances, visited) {
      let minDistance = Infinity;
      let minVertex = null;
      for (let vertex in distances) {
        if (!visited[vertex] && distances[vertex] < minDistance) {
          minDistance = distances[vertex];
          minVertex = vertex;
        }
      }
      return minVertex;
    }
  
    prim() {
      const result = [];
      const visited = {};
      const startVertex = Object.keys(this.adjList)[0];
      visited[startVertex] = true;
      while (Object.keys(visited).length < Object.keys(this.adjList).length) {
        let minWeight = Infinity;
        let minEdge = null;
        for (let vertex in visited) {
          for (let neighbor in this.adjList[vertex]) {
            if (
              !visited[neighbor] &&
              this.adjList[vertex][neighbor] < minWeight
            ) {
  
              minWeight = this.adjList[vertex][neighbor];
              minEdge = [vertex, neighbor];
            }
          }
        }
        if (minEdge) {
          const [from, to] = minEdge;
          result.push({ edge: [from, to], weight: minWeight });
          visited[to] = true;
        }
      }
      console.log("Minimum Spanning Tree (Prim's Algorithm):", result);
    }
    // kruskal() {
    //   const result = [];
    //   const edges = [];
    //   for (let vertex in this.adjList) {
    //     for (let neighbor in this.adjList[vertex]) {
    //       edges.push({
    //         edge: [vertex, neighbor],
    //         weight: this.adjList[vertex][neighbor],
    //       });
    //     }
    //   }
    //   edges.sort((a, b) => a.weight - b.weight);
    //   const parent = {};
    //   const find = (vertex) => {
    //     if (parent[vertex] === undefined) return vertex;
    //     return find(parent[vertex]);
    //   };
    //   const union = (x, y) => {
    //     const rootX = find(x);
    //     const rootY = find(y);
    //     if (rootX !== rootY) {
    //       parent[rootX] = rootY;
    //       return true;
    //     }
    //     return false;
    //   };
    //   edges.forEach(({ edge, weight }) => {
    //     const [from, to] = edge;
    //     if (union(from, to)) {
    //       result.push({ edge, weight });
    //     }
    //   });
    //   console.log("Minimum Spanning Tree (Kruskal's Algorithm):", result);
    // }
  
    display() {
      for (let vertex in this.adjList) {
        const neighbors = this.adjList[vertex];
        let neighborsStr = "";
        for (let neighbor in neighbors) {
          const weight = neighbors[neighbor];
          neighborsStr += `${neighbor} (${weight})`;
        }
        console.log(vertex + "-->" + neighborsStr);
      }
    }
  }
  
  const g = new Graph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addEdge("A", "B", 7);
  g.addEdge("A", "E", 1);
  g.addEdge("B", "C", 3);
  g.addEdge("B", "E", 8);
  g.addEdge("C", "E", 2);
  g.addEdge("C", "D", 6);
  g.addEdge("E", "D", 7);
  g.dijkstra('A')
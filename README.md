# Graph data structure
There are implementation of graph data structure. Here I use Stack and Queue data structures, implementation of which I represent in previous repository.

Each graph have vertex is connected to neighboring vertices with edges. So they have relationships and we need to store those in hash table data structure. For it I'll use built-in Map data strucutre.

Each graph have a adjacency list/matrix, which use to store relationships between vertices. If our model manipulates vertices, the adjacency list is a better choice. If we are dealing primarily with edges, the adjacency matrix is the more efficient approach.

There are two graph traversal algorithms, breadth-first search (bfs) and depth-first search (dfs). Both are represent's here.

And, in the end I use bfs to find shortest path for two vertices.

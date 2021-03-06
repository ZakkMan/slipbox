- **Type:** #[[__ 🟨 Literature Note]] | #[[Big-O Notation]] [[Algorithmic Performance]]
- **Source:** [[🟦  Algorithms and Data Structures in Action]]
- The RAM model is a computational model for measuring and comparing algorithmic performance. It works by abstracting away the hardware variables into a set of principles and assumptions, so that the performance of two algorithms can be roughly compared.
- RAM stands for Random Access Memory.
- The RAM model is based on a few assumptions. First, every basic operation is considered a one-time step, including arithmetic operations, conditionals (ie `if` statements), and function calls. Second, loops and subroutines are counted as multiple one-time steps proportional the number of times they run. Third, memory access counts as one step. Fourth, we consider memory to be infinite, even though this isn't realistic.
- Under the RAM Model, we measure the performance of an algorithm by the number of steps it takes to complete for a given input.

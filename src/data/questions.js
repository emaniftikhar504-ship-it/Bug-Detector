const languageInfo = {
  javascript: {
    name: "JavaScript",
    icon: "🟨",

    concepts: [
      {
        topic: "Variables",
        definition:
          "Variables store values that a program can use and change during execution.",
        example: "const name = 'Eman'; let score = 10;",
        use:
          "Use variables when a program needs to keep data such as names, counters, or settings.",
        advanced:
          "Prefer const when a binding does not need reassignment, and use let when reassignment is required."
      },
      {
        topic: "Data Types",
        definition:
          "JavaScript supports primitive and object-based values such as string, number, boolean, null, undefined, and objects.",
        example: "const age = 17; const active = true; const user = { name: 'Eman' };",
        use:
          "Choose appropriate data types to represent text, numbers, logical values, collections, and objects.",
        advanced:
          "JavaScript is dynamically typed, so the same variable binding can hold values of different types over time."
      },
      {
        topic: "Operators",
        definition:
          "Operators perform operations such as arithmetic, comparison, assignment, and logical evaluation.",
        example: "const total = price * quantity; const valid = age >= 18;",
        use:
          "Use operators when calculating values or building conditions.",
        advanced:
          "Strict equality with === avoids many implicit type-conversion surprises caused by loose equality."
      },
      {
        topic: "Conditionals",
        definition:
          "Conditional statements execute different code depending on whether a condition is true or false.",
        example: "if (score >= 50) { result = 'Pass'; } else { result = 'Fail'; }",
        use:
          "Use conditionals when program behavior depends on different situations.",
        advanced:
          "Complex conditional logic should be kept readable by using clear conditions or extracting decision logic into functions."
      },
      {
        topic: "Loops",
        definition:
          "Loops repeatedly execute a block of code while iterating over data or until a condition changes.",
        example: "for (let i = 0; i < 5; i++) console.log(i);",
        use:
          "Use loops when the same operation needs to be performed for multiple values.",
        advanced:
          "Choose iteration methods based on intent; array methods can make collection transformations clearer than manual loops."
      },
      {
        topic: "Functions",
        definition:
          "Functions group reusable instructions that can accept inputs and return results.",
        example: "function add(a, b) { return a + b; }",
        use:
          "Use functions to divide large programs into smaller reusable pieces.",
        advanced:
          "Small functions with clear inputs and outputs improve testing, readability, and maintainability."
      },
      {
        topic: "Arrays",
        definition:
          "Arrays are ordered collections used to store multiple values in one structure.",
        example: "const scores = [80, 92, 75];",
        use:
          "Use arrays when several related values need to be stored and processed together.",
        advanced:
          "Methods such as map, filter, and reduce support declarative collection processing."
      },
      {
        topic: "Objects",
        definition:
          "Objects store related data and behavior using key-value properties.",
        example: "const student = { name: 'Eman', gpa: 3.5 };",
        use:
          "Use objects to represent entities with multiple named properties.",
        advanced:
          "Object references are mutable, so copying an object reference does not create an independent object."
      },
      {
        topic: "Scope",
        definition:
          "Scope determines where variables can be accessed in a program.",
        example: "{ let message = 'Hello'; console.log(message); }",
        use:
          "Use block and function scope to prevent unrelated parts of a program from accessing internal variables.",
        advanced:
          "let and const are block-scoped, while var follows function scope."
      },
      {
        topic: "DOM",
        definition:
          "The Document Object Model represents an HTML document as objects that JavaScript can inspect and modify.",
        example: "document.querySelector('#title').textContent = 'Hello';",
        use:
          "Use the DOM when JavaScript needs to update webpage content or structure.",
        advanced:
          "Frequent DOM operations can affect performance, so updates should be kept efficient."
      },
      {
        topic: "Events",
        definition:
          "Events allow JavaScript to respond to user or browser actions such as clicks and keyboard input.",
        example:
          "button.addEventListener('click', () => console.log('Clicked'));",
        use:
          "Use event listeners when an application must react to user interaction.",
        advanced:
          "Event delegation can reduce the number of listeners when handling many similar elements."
      },
      {
        topic: "Promises",
        definition:
          "Promises represent the eventual completion or failure of an asynchronous operation.",
        example:
          "fetch('/api/data').then(response => response.json());",
        use:
          "Use promises when working with asynchronous operations such as network requests.",
        advanced:
          "Promises can be composed with async/await or chained with then and catch."
      },
      {
        topic: "Async/Await",
        definition:
          "async and await provide a readable syntax for working with promise-based asynchronous code.",
        example:
          "async function load() { const data = await fetch('/api'); }",
        use:
          "Use async/await when asynchronous workflows are easier to understand in sequential-looking code.",
        advanced:
          "await pauses the async function's continuation rather than blocking the entire JavaScript thread."
      },
      {
        topic: "Modules",
        definition:
          "Modules divide JavaScript programs into reusable files with explicit imports and exports.",
        example:
          "export function add() {}  import { add } from './math.js';",
        use:
          "Use modules to organize larger applications into maintainable components.",
        advanced:
          "Explicit module boundaries reduce global namespace pollution and make dependencies easier to track."
      },
      {
        topic: "Closures",
        definition:
          "A closure allows a function to retain access to variables from its surrounding lexical scope.",
        example:
          "function counter() { let n = 0; return () => ++n; }",
        use:
          "Use closures to preserve private state or create functions with remembered context.",
        advanced:
          "Closures are useful but can retain references longer than necessary if used carelessly."
      }
    ],

    bugs: [
      {
        topic: "Variable Declaration",
        code: "const score = 10;\nscore = 20;",
        problem: "A const binding cannot be reassigned.",
        fix: "Use let if the variable must receive another value.",
        hint: "Check whether the variable is declared with const or let."
      },
      {
        topic: "Function Call",
        code: "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet);",
        problem: "The function itself is printed instead of being called.",
        fix: "Call it with parentheses: greet('Eman').",
        hint: "Look at what is inside console.log."
      },
      {
        topic: "Array Index",
        code: "const colors = ['red', 'blue'];\nconsole.log(colors[2]);",
        problem: "Index 2 is outside the available array positions.",
        fix: "Use colors[0] or colors[1] for this array.",
        hint: "JavaScript arrays start at index zero."
      },
      {
        topic: "Condition",
        code: "const age = 20;\nif (age = 18) {\n  console.log('Adult');\n}",
        problem: "Assignment is being used instead of comparison.",
        fix: "Use === when comparing values.",
        hint: "Check the operator inside the if condition."
      },
      {
        topic: "Async Result",
        code: "async function getData() {\n  return 'Done';\n}\nconsole.log(getData());",
        problem: "An async function returns a Promise.",
        fix: "Use await inside an async function or .then() to access the resolved value.",
        hint: "What does every async function return?"
      }
    ]
  },

  python: {
    name: "Python",
    icon: "🐍",

    concepts: [
      {
        topic: "Variables",
        definition:
          "Python variables are names bound to objects and do not require an explicit type declaration.",
        example: "name = 'Eman'\nscore = 95",
        use:
          "Use variables to give meaningful names to values used by a program.",
        advanced:
          "Python uses dynamic typing, while type hints can document expected types without enforcing them at runtime."
      },
      {
        topic: "Data Types",
        definition:
          "Common Python data types include int, float, str, bool, list, tuple, set, and dict.",
        example: "age = 17\nname = 'Eman'\nactive = True",
        use:
          "Select a type according to whether data is numeric, textual, ordered, unique, or key-value based.",
        advanced:
          "Python objects carry runtime type information, enabling dynamic behavior."
      },
      {
        topic: "Conditions",
        definition:
          "if, elif, and else allow Python programs to make decisions based on conditions.",
        example: "if score >= 50:\n    print('Pass')\nelse:\n    print('Fail')",
        use:
          "Use conditions when different actions are required for different situations.",
        advanced:
          "Readable conditions are preferred over deeply nested branches."
      },
      {
        topic: "Loops",
        definition:
          "for and while loops repeat code over sequences or while conditions remain true.",
        example: "for number in [1, 2, 3]:\n    print(number)",
        use:
          "Use loops for repeated processing of data.",
        advanced:
          "Python's iteration protocol allows custom objects to work naturally with for loops."
      },
      {
        topic: "Functions",
        definition:
          "Functions package reusable logic and can receive parameters and return values.",
        example: "def add(a, b):\n    return a + b",
        use:
          "Use functions to break large programs into smaller reusable units.",
        advanced:
          "Default arguments and keyword arguments can make APIs expressive, but mutable defaults should be avoided."
      },
      {
        topic: "Lists",
        definition:
          "Lists are ordered, mutable collections that can contain multiple values.",
        example: "numbers = [10, 20, 30]\nnumbers.append(40)",
        use:
          "Use lists when ordered data needs to be changed.",
        advanced:
          "List comprehensions can express transformations and filtering concisely."
      },
      {
        topic: "Tuples",
        definition:
          "Tuples are ordered immutable collections.",
        example: "point = (10, 20)",
        use:
          "Use tuples for fixed collections of values that should not be changed.",
        advanced:
          "Tuple unpacking can make multiple-value assignment concise and readable."
      },
      {
        topic: "Dictionaries",
        definition:
          "Dictionaries store key-value pairs and provide fast lookup by key.",
        example: "student = {'name': 'Eman', 'gpa': 3.5}",
        use:
          "Use dictionaries when data is naturally represented by named keys.",
        advanced:
          "Modern Python dictionaries preserve insertion order, while lookup remains hash-based."
      },
      {
        topic: "Sets",
        definition:
          "Sets store unique elements and support efficient membership testing.",
        example: "unique = {1, 2, 3}",
        use:
          "Use sets when duplicates should be removed or fast membership checks are needed.",
        advanced:
          "Set operations such as union and intersection are useful for collection comparison."
      },
      {
        topic: "Exceptions",
        definition:
          "Exceptions represent runtime problems that can be handled using try, except, else, and finally.",
        example: "try:\n    value = int(text)\nexcept ValueError:\n    print('Invalid number')",
        use:
          "Use exception handling when an operation may fail and the program can recover.",
        advanced:
          "Catch specific exceptions rather than using broad exception handlers unnecessarily."
      },
      {
        topic: "Modules",
        definition:
          "Modules are Python files that contain reusable code and can be imported into other files.",
        example: "import math\nprint(math.sqrt(25))",
        use:
          "Use modules to organize reusable functionality.",
        advanced:
          "Packages and modules create clear boundaries for larger Python applications."
      },
      {
        topic: "Classes",
        definition:
          "Classes define objects that combine data and behavior.",
        example: "class Student:\n    def __init__(self, name):\n        self.name = name",
        use:
          "Use classes when modeling entities that have state and behavior.",
        advanced:
          "Good class design keeps responsibilities focused and exposes a clear public interface."
      },
      {
        topic: "Comprehensions",
        definition:
          "Comprehensions provide compact syntax for creating collections from iterable data.",
        example: "squares = [x * x for x in range(5)]",
        use:
          "Use comprehensions for simple transformations and filtering.",
        advanced:
          "Very complex comprehensions should be replaced with ordinary loops for readability."
      },
      {
        topic: "Generators",
        definition:
          "Generators produce values lazily instead of storing the complete sequence in memory.",
        example: "def numbers():\n    yield 1\n    yield 2",
        use:
          "Use generators when processing large or streaming data efficiently.",
        advanced:
          "yield suspends generator execution and preserves its state for the next iteration."
      },
      {
        topic: "Decorators",
        definition:
          "Decorators modify or extend function or class behavior without changing the original implementation directly.",
        example: "@login_required\ndef dashboard():\n    pass",
        use:
          "Use decorators for reusable cross-cutting behavior such as logging or authorization.",
        advanced:
          "functools.wraps helps decorators preserve metadata of the wrapped function."
      }
    ],

    bugs: [
      {
        topic: "Indentation",
        code: "if score >= 50:\nprint('Pass')",
        problem: "The statement inside the if block is not indented.",
        fix: "Indent print so it belongs to the if block.",
        hint: "Python uses indentation to define blocks."
      },
      {
        topic: "List Index",
        code: "numbers = [10, 20, 30]\nprint(numbers[3])",
        problem: "Index 3 does not exist in a three-item list.",
        fix: "Use indexes 0, 1, or 2.",
        hint: "Remember zero-based indexing."
      },
      {
        topic: "Function Name",
        code: "def greet():\n    print('Hello')\ngreat()",
        problem: "The function was defined as greet but called as great.",
        fix: "Call greet().",
        hint: "Compare the function definition and function call."
      },
      {
        topic: "Dictionary Key",
        code: "student = {'name': 'Eman'}\nprint(student['age'])",
        problem: "The dictionary does not contain the key age.",
        fix: "Add the key or use get('age') when appropriate.",
        hint: "Check which keys actually exist."
      },
      {
        topic: "Mutable Default",
        code: "def add_item(item, items=[]):\n    items.append(item)\n    return items",
        problem: "The same default list is reused between calls.",
        fix: "Use None as the default and create a list inside the function.",
        hint: "Think about when default arguments are created."
      }
    ]
  },

  java: {
    name: "Java",
    icon: "☕",

    concepts: [
      {
        topic: "Variables and Types",
        definition:
          "Java variables have declared types such as int, double, boolean, and reference types.",
        example: "int age = 17;\nboolean active = true;",
        use:
          "Use appropriately typed variables to store program data.",
        advanced:
          "Java's static type system catches many type errors during compilation."
      },
      {
        topic: "Classes",
        definition:
          "A class is a blueprint that defines the data and behavior of objects.",
        example: "class Student {\n    String name;\n}",
        use:
          "Use classes to model entities and organize related data and methods.",
        advanced:
          "Classes should have focused responsibilities and controlled access to internal state."
      },
      {
        topic: "Objects",
        definition:
          "Objects are runtime instances of classes.",
        example: "Student s = new Student();",
        use:
          "Create objects when a program needs actual instances of a class.",
        advanced:
          "Object references point to objects stored on the heap, while local reference variables are typically stack-managed."
      },
      {
        topic: "Inheritance",
        definition:
          "Inheritance allows a class to derive behavior and state from another class.",
        example: "class Dog extends Animal { }",
        use:
          "Use inheritance when there is a genuine is-a relationship between types.",
        advanced:
          "Composition is often preferable when behavior should be assembled rather than inherited."
      },
      {
        topic: "Polymorphism",
        definition:
          "Polymorphism allows a parent type reference to work with objects of compatible child types.",
        example: "Animal a = new Dog();",
        use:
          "Use polymorphism when code should operate on different implementations through a common type.",
        advanced:
          "Method overriding enables dynamic dispatch for instance methods."
      },
      {
        topic: "Interfaces",
        definition:
          "Interfaces define contracts that implementing classes agree to provide.",
        example: "interface Payable { void pay(); }",
        use:
          "Use interfaces when unrelated classes should follow the same behavior contract.",
        advanced:
          "Programming to interfaces reduces coupling between implementations and consumers."
      },
      {
        topic: "Arrays",
        definition:
          "Java arrays store a fixed-size sequence of values of the same type.",
        example: "int[] marks = {80, 90, 75};",
        use:
          "Use arrays when the collection size is fixed and indexed access is useful.",
        advanced:
          "For dynamically sized collections, Java provides classes such as ArrayList."
      },
      {
        topic: "Methods",
        definition:
          "Methods define reusable operations associated with classes or objects.",
        example: "int add(int a, int b) { return a + b; }",
        use:
          "Use methods to organize operations into reusable units.",
        advanced:
          "Method signatures determine overloading, while return types alone do not distinguish overloads."
      },
      {
        topic: "Exceptions",
        definition:
          "Exceptions represent abnormal conditions and can be handled using try, catch, finally, and throws.",
        example: "try { risky(); } catch (Exception e) { }",
        use:
          "Use exceptions when operations can fail and the program needs controlled recovery.",
        advanced:
          "Checked exceptions are part of Java's type-checked exception model and must be handled or declared."
      },
      {
        topic: "Collections",
        definition:
          "The Collections Framework provides reusable structures such as List, Set, and Map.",
        example: "List<String> names = new ArrayList<>();",
        use:
          "Use collections when dynamic data structures are needed.",
        advanced:
          "Choosing a collection based on lookup, ordering, duplication, and insertion requirements affects performance."
      },
      {
        topic: "Generics",
        definition:
          "Generics allow classes and methods to work with types while providing compile-time type safety.",
        example: "List<String> names = new ArrayList<>();",
        use:
          "Use generics to avoid unnecessary casts and make APIs type-safe.",
        advanced:
          "Java generics use type erasure at runtime."
      },
      {
        topic: "Streams",
        definition:
          "Streams provide a declarative way to process sequences of data.",
        example: "names.stream().filter(n -> n.length() > 3).toList();",
        use:
          "Use streams for readable collection transformations and filtering.",
        advanced:
          "Streams are lazy until a terminal operation triggers processing."
      },
      {
        topic: "Lambdas",
        definition:
          "Lambda expressions provide concise implementations of functional interfaces.",
        example: "x -> x * 2",
        use:
          "Use lambdas when a small function is needed as a value or callback.",
        advanced:
          "Lambdas work with functional interfaces containing a single abstract method."
      },
      {
        topic: "JVM",
        definition:
          "The Java Virtual Machine executes Java bytecode and provides runtime services.",
        example: "Java source -> bytecode -> JVM execution",
        use:
          "The JVM enables Java bytecode to run across compatible platforms.",
        advanced:
          "The JVM includes runtime components such as garbage collection and JIT compilation."
      },
      {
        topic: "Garbage Collection",
        definition:
          "Java's garbage collector automatically reclaims memory from objects that are no longer reachable.",
        example: "Student s = new Student();\ns = null;",
        use:
          "Automatic garbage collection reduces the need for explicit memory deallocation.",
        advanced:
          "Garbage collection manages memory but does not replace careful resource management for files or network connections."
      }
    ],

    bugs: [
      {
        topic: "Semicolon",
        code: "int age = 17\nSystem.out.println(age);",
        problem: "The variable declaration is missing a semicolon.",
        fix: "Write int age = 17;",
        hint: "Check the end of the declaration."
      },
      {
        topic: "Array Index",
        code: "int[] nums = {1, 2, 3};\nSystem.out.println(nums[3]);",
        problem: "Index 3 is outside the array.",
        fix: "Use indexes 0 through 2.",
        hint: "Java arrays are zero-indexed."
      },
      {
        topic: "Object Creation",
        code: "Student s;\ns.name = \"Eman\";",
        problem: "The reference was declared but no Student object was created.",
        fix: "Create it using new Student().",
        hint: "A reference declaration is not object creation."
      },
      {
        topic: "Static Context",
        code: "class Test {\n  int value = 10;\n  public static void main(String[] args) {\n    System.out.println(value);\n  }\n}",
        problem: "An instance field is accessed from a static context.",
        fix: "Create an object or make the field static when appropriate.",
        hint: "main is static."
      },
      {
        topic: "String Comparison",
        code: "String a = \"Java\";\nString b = \"Java\";\nif (a == b) { }",
        problem: "== compares references rather than string content.",
        fix: "Use a.equals(b) for content comparison.",
        hint: "Think about object references."
      }
    ]
  },

  csharp: {
    name: "C#",
    icon: "🔷",

    concepts: [
      {
        topic: "Variables",
        definition:
          "C# variables have declared or inferred types such as int, string, bool, and double.",
        example: "int age = 17;\nvar name = \"Eman\";",
        use:
          "Use variables to store data used during program execution.",
        advanced:
          "var still has a compile-time type; it does not make C# dynamically typed."
      },
      {
        topic: "Classes",
        definition:
          "Classes define objects by describing their data and behavior.",
        example: "class Student { public string Name; }",
        use:
          "Use classes to model entities and organize application logic.",
        advanced:
          "Encapsulation and focused responsibilities improve class maintainability."
      },
      {
        topic: "Properties",
        definition:
          "Properties provide controlled access to data using get and set accessors.",
        example: "public string Name { get; set; }",
        use:
          "Use properties when data needs a clean public interface.",
        advanced:
          "Properties can enforce validation or expose read-only state through appropriate accessors."
      },
      {
        topic: "Methods",
        definition:
          "Methods define reusable operations inside classes or structs.",
        example: "int Add(int a, int b) => a + b;",
        use:
          "Use methods to organize reusable behavior.",
        advanced:
          "Method overloads can provide multiple signatures for related operations."
      },
      {
        topic: "Inheritance",
        definition:
          "Inheritance allows a class to derive from another class and reuse compatible behavior.",
        example: "class Dog : Animal { }",
        use:
          "Use inheritance for genuine hierarchical relationships.",
        advanced:
          "C# supports single class inheritance but allows multiple interface implementations."
      },
      {
        topic: "Interfaces",
        definition:
          "Interfaces define contracts that classes and structs can implement.",
        example: "interface ILogger { void Log(string text); }",
        use:
          "Use interfaces to decouple code from concrete implementations.",
        advanced:
          "Dependency injection commonly uses interfaces to replace implementations during testing."
      },
      {
        topic: "Collections",
        definition:
          "C# collections such as List, Dictionary, Queue, and Stack store groups of values.",
        example: "List<int> scores = new List<int>();",
        use:
          "Choose a collection according to lookup, ordering, and insertion requirements.",
        advanced:
          "Generic collections provide type safety without repeated casting."
      },
      {
        topic: "Generics",
        definition:
          "Generics allow reusable types and methods to operate with specified types safely.",
        example: "List<string> names = new List<string>();",
        use:
          "Use generics to create reusable type-safe code.",
        advanced:
          "Generic constraints can restrict which types can be used with a generic type."
      },
      {
        topic: "LINQ",
        definition:
          "LINQ provides expressive querying and transformation of collections and other data sources.",
        example: "var adults = users.Where(u => u.Age >= 18).ToList();",
        use:
          "Use LINQ when filtering, projecting, grouping, or ordering data.",
        advanced:
          "Many LINQ operations use deferred execution until results are enumerated."
      },
      {
        topic: "Delegates",
        definition:
          "Delegates represent references to methods with compatible signatures.",
        example: "Func<int, int> square = x => x * x;",
        use:
          "Use delegates for callbacks and passing behavior as values.",
        advanced:
          "Delegates are central to events, callbacks, and functional-style APIs in C#."
      },
      {
        topic: "Events",
        definition:
          "Events provide a publish-subscribe mechanism for notifying interested handlers.",
        example: "public event EventHandler? Updated;",
        use:
          "Use events when objects need to notify other objects about state changes.",
        advanced:
          "Events restrict external code from directly invoking the underlying delegate."
      },
      {
        topic: "Async/Await",
        definition:
          "async and await simplify asynchronous programming with Task-based operations.",
        example: "var data = await LoadAsync();",
        use:
          "Use async/await for I/O operations that should not block the calling thread.",
        advanced:
          "Async methods improve responsiveness but do not automatically make CPU-heavy work faster."
      },
      {
        topic: "Exceptions",
        definition:
          "Exceptions represent runtime errors and can be handled using try, catch, and finally.",
        example: "try { Run(); } catch (Exception ex) { }",
        use:
          "Use exceptions for exceptional failures that the application can handle.",
        advanced:
          "Catch specific exception types when recovery depends on the cause."
      },
      {
        topic: "Nullable References",
        definition:
          "Nullable reference type annotations help identify possible null references during development.",
        example: "string? nickname = null;",
        use:
          "Use nullable annotations to communicate and detect possible null values.",
        advanced:
          "Nullable reference types mainly provide compile-time analysis rather than changing the runtime object model."
      },
      {
        topic: "Garbage Collection",
        definition:
          "The .NET runtime automatically manages memory for managed objects.",
        example: "var student = new Student();",
        use:
          "Automatic memory management reduces manual allocation and deallocation requirements.",
        advanced:
          "Unmanaged resources still require deterministic cleanup, commonly through IDisposable and using."
      }
    ],

    bugs: [
      {
        topic: "Semicolon",
        code: "int age = 17\nConsole.WriteLine(age);",
        problem: "The declaration is missing a semicolon.",
        fix: "Add ; after 17.",
        hint: "Check the end of the first statement."
      },
      {
        topic: "Null Reference",
        code: "string? name = null;\nConsole.WriteLine(name.Length);",
        problem: "name can be null before Length is accessed.",
        fix: "Check for null or use appropriate null-safe handling.",
        hint: "What happens when name has no object?"
      },
      {
        topic: "List Index",
        code: "var nums = new List<int> { 1, 2, 3 };\nConsole.WriteLine(nums[3]);",
        problem: "Index 3 is outside the list.",
        fix: "Use an index from 0 to 2.",
        hint: "Count the available positions."
      },
      {
        topic: "Method Name",
        code: "void Display() { }\nDispay();",
        problem: "The method name in the call is misspelled.",
        fix: "Call Display().",
        hint: "Compare both spellings."
      },
      {
        topic: "Async Return",
        code: "async Task<string> GetName()\n{\n    return \"Eman\";\n}",
        problem: "The method is asynchronous but the caller must await its Task to obtain the result.",
        fix: "Use await GetName() from an appropriate async context.",
        hint: "Async methods commonly return Task or Task<T>."
      }
    ]
  },

  cpp: {
    name: "C / C++",
    icon: "⚙️",

    concepts: [
      {
        topic: "Variables",
        definition:
          "C and C++ variables reserve storage for values and have declared types.",
        example: "int age = 17;\ndouble price = 99.5;",
        use:
          "Use variables to store values required by a program.",
        advanced:
          "Choosing appropriate types affects memory usage, range, precision, and correctness."
      },
      {
        topic: "Pointers",
        definition:
          "Pointers store memory addresses and can be used to access objects indirectly.",
        example: "int x = 10;\nint* p = &x;",
        use:
          "Use pointers when direct memory access or dynamic data structures are required.",
        advanced:
          "Invalid pointer use can cause undefined behavior and memory corruption."
      },
      {
        topic: "References",
        definition:
          "C++ references provide another name for an existing object.",
        example: "int x = 10;\nint& ref = x;",
        use:
          "Use references for efficient parameter passing and aliases to existing objects.",
        advanced:
          "A reference must normally be bound to an existing object and cannot be reseated like a pointer."
      },
      {
        topic: "Functions",
        definition:
          "Functions group reusable instructions and may receive parameters and return values.",
        example: "int add(int a, int b) { return a + b; }",
        use:
          "Use functions to divide programs into reusable operations.",
        advanced:
          "Passing large objects by const reference can avoid unnecessary copying in C++."
      },
      {
        topic: "Arrays",
        definition:
          "Arrays store a fixed number of elements of the same type in contiguous memory.",
        example: "int marks[3] = {80, 90, 75};",
        use:
          "Use arrays when a fixed-size indexed collection is appropriate.",
        advanced:
          "Out-of-bounds access is undefined behavior and must be prevented."
      },
      {
        topic: "Classes",
        definition:
          "C++ classes combine data and functions into user-defined types.",
        example: "class Student { public: string name; };",
        use:
          "Use classes to model objects and encapsulate behavior.",
        advanced:
          "Access control and RAII are important tools for safe class design."
      },
      {
        topic: "Constructors",
        definition:
          "Constructors initialize objects when they are created.",
        example: "Student(string n) : name(n) {}",
        use:
          "Use constructors to establish valid initial object state.",
        advanced:
          "Member initializer lists are preferred for directly initializing data members."
      },
      {
        topic: "Inheritance",
        definition:
          "Inheritance lets one class derive behavior and data from another class.",
        example: "class Dog : public Animal {};",
        use:
          "Use inheritance for appropriate hierarchical relationships.",
        advanced:
          "Virtual functions are important when polymorphic behavior is required through base references or pointers."
      },
      {
        topic: "STL",
        definition:
          "The Standard Template Library provides reusable containers, algorithms, iterators, and utilities.",
        example: "std::vector<int> scores = {80, 90, 70};",
        use:
          "Use STL components instead of reinventing common data structures and algorithms.",
        advanced:
          "Selecting the correct STL container can significantly affect performance characteristics."
      },
      {
        topic: "Vectors",
        definition:
          "std::vector is a dynamically sized contiguous sequence container.",
        example: "std::vector<int> nums;\nnums.push_back(10);",
        use:
          "Use vector when a resizable array with fast indexed access is needed.",
        advanced:
          "Vector reallocation can invalidate pointers, references, and iterators to its elements."
      },
      {
        topic: "Templates",
        definition:
          "Templates allow generic functions and classes to work with different types.",
        example: "template <typename T>\nT maximum(T a, T b) { return a > b ? a : b; }",
        use:
          "Use templates when the same algorithm should work with multiple types.",
        advanced:
          "Template instantiation happens at compile time and enables type-safe generic programming."
      },
      {
        topic: "Smart Pointers",
        definition:
          "Smart pointers manage dynamically allocated objects through ownership semantics.",
        example: "auto p = std::make_unique<int>(10);",
        use:
          "Use smart pointers to reduce manual memory management and leaks.",
        advanced:
          "unique_ptr expresses exclusive ownership while shared_ptr provides shared ownership with reference counting."
      },
      {
        topic: "RAII",
        definition:
          "RAII ties resource lifetime to object lifetime so cleanup happens automatically.",
        example: "std::lock_guard<std::mutex> lock(mutex);",
        use:
          "Use RAII for memory, locks, files, and other resources requiring reliable cleanup.",
        advanced:
          "RAII provides deterministic cleanup when an object leaves its scope."
      },
      {
        topic: "Move Semantics",
        definition:
          "Move semantics allow resources to be transferred from temporary or expiring objects instead of copied.",
        example: "std::vector<int> b = std::move(a);",
        use:
          "Use move operations when transferring ownership of expensive resources efficiently.",
        advanced:
          "After moving from an object, its state remains valid but its exact value is generally unspecified."
      },
      {
        topic: "Undefined Behavior",
        definition:
          "Undefined behavior means the language standard imposes no requirements on what happens.",
        example:
          "int a[2] = {1, 2};\nint x = a[5];",
        use:
          "Avoid undefined behavior because compiler optimizations may produce unexpected results.",
        advanced:
          "Undefined behavior can invalidate assumptions across an entire program and cannot be treated as a normal runtime error."
      }
    ],

    bugs: [
      {
        topic: "Missing Semicolon",
        code: "int age = 17\nstd::cout << age;",
        problem: "The declaration is missing a semicolon.",
        fix: "Add ; after 17.",
        hint: "Check the end of the declaration."
      },
      {
        topic: "Pointer Initialization",
        code: "int* p;\nstd::cout << *p;",
        problem: "p is an uninitialized pointer.",
        fix: "Initialize p to a valid object address before dereferencing it.",
        hint: "What does p actually point to?"
      },
      {
        topic: "Vector Index",
        code: "std::vector<int> v = {1, 2, 3};\nstd::cout << v[3];",
        problem: "Index 3 is outside the vector.",
        fix: "Use indexes 0 through 2.",
        hint: "Count the elements."
      },
      {
        topic: "Reference Lifetime",
        code: "int& getValue() {\n    int x = 10;\n    return x;\n}",
        problem: "The function returns a reference to a local variable that no longer exists after the function returns.",
        fix: "Return by value or reference an object whose lifetime outlives the function.",
        hint: "Consider the lifetime of x."
      },
      {
        topic: "Memory Leak",
        code: "int* p = new int(10);\np = new int(20);",
        problem: "The first allocated object becomes unreachable and cannot be deleted.",
        fix: "Prefer smart pointers or delete the owned memory before losing the pointer.",
        hint: "What happened to the first allocation?"
      }
    ]
  }
};

const levels = [
  {
    id: 1,
    name: "Basic",
    icon: "🌱",
    description: "Core syntax and programming fundamentals."
  },
  {
    id: 2,
    name: "Intermediate",
    icon: "⚡",
    description: "Practical coding and problem solving."
  },
  {
    id: 3,
    name: "Advanced",
    icon: "🔥",
    description: "Deeper concepts and application."
  },
  {
    id: 4,
    name: "Expert",
    icon: "👑",
    description: "Debugging, architecture and advanced reasoning."
  }
];

const levelTemplates = {
  1: {
    type: "MCQ",
    build: (concept, language) => ({
      question: `In ${language}, what is ${concept.topic} mainly used for?`,
      correct: concept.definition,
      explanation: concept.definition,
      hint: `Think about the basic purpose of ${concept.topic}.`
    })
  },

  2: {
    type: "MCQ",
    build: (concept, language) => ({
      question: `Which example correctly demonstrates ${concept.topic} in ${language}?`,
      correct: concept.example,
      explanation: `${concept.topic} can be represented using this pattern: ${concept.example}`,
      hint: `Look for the example that directly uses ${concept.topic}.`
    })
  },

  3: {
    type: "MCQ",
    build: (concept, language) => ({
      question: `Which situation is ${concept.topic} in ${language} most appropriate for?`,
      correct: concept.use,
      explanation: concept.use,
      hint: `Think about when a developer would practically need ${concept.topic}.`
    })
  },

  4: {
    type: "MCQ",
    build: (concept, language) => ({
      question: `Which statement shows an important engineering consideration for ${concept.topic} in ${language}?`,
      correct: concept.advanced,
      explanation: concept.advanced,
      hint: `Consider performance, maintainability, safety, or language behavior.`
    })
  }
};

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function makeOptions(correct, pool) {
  const unique = [...new Set(pool.filter((item) => item !== correct))];

  const distractors = shuffle(unique).slice(0, 3);

  while (distractors.length < 3) {
    distractors.push("None of the above.");
  }

  return shuffle([correct, ...distractors]);
}

function createMcqs(profile, levelId) {
  const template = levelTemplates[levelId];

  return profile.concepts.map((concept, index) => {
    const base = template.build(concept, profile.name);

    const pool = profile.concepts
      .filter((item) => item.topic !== concept.topic)
      .map((item) => {
        if (levelId === 1) return item.definition;
        if (levelId === 2) return item.example;
        if (levelId === 3) return item.use;
        return item.advanced;
      });

    const options = makeOptions(base.correct, pool);

    return {
      id: `${profile.name.toLowerCase().replace(/\W/g, "")}-${levelId}-mcq-${index + 1}`,
      type: "MCQ",
      topic: concept.topic,
      question: base.question,
      options,
      answer: options.indexOf(base.correct),
      explanation: base.explanation,
      hint: base.hint
    };
  });
}

function createBugQuestions(profile, levelId) {
  return profile.bugs.map((bug, index) => {
    const options = makeOptions(bug.fix, [
      bug.problem,
      `Ignore the error and run the program again.`,
      "The code does not need any change."
    ]);

    return {
      id: `${profile.name.toLowerCase().replace(/\W/g, "")}-${levelId}-bug-${index + 1}`,
      type: "BUG",
      topic: `Bug Detective: ${bug.topic}`,
      question: `Detect the problem in this ${profile.name} code and choose the correct fix.`,
      code: bug.code,
      options,
      answer: options.indexOf(bug.fix),
      explanation: `${bug.problem} Correct approach: ${bug.fix}`,
      hint: bug.hint
    };
  });
}

export function getQuestions(languageId, levelId) {
  const profile = languageInfo[languageId];

  if (!profile) return [];

  const mcqs = createMcqs(profile, levelId);
  const bugs = createBugQuestions(profile, levelId);

  return [...mcqs, ...bugs];
}

export const languages = Object.entries(languageInfo).map(
  ([id, language]) => ({
    id,
    name: language.name,
    icon: language.icon
  })
);

export { levels };

export const totalChallengeCount = languages.length * 4 * 20;
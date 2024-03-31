// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Express -15 as a 6-bit signed binary number",
    answer: "101111",
    options: [
      "001111",
      "101111",
      "101110",
      "101100"
    ]
  },
  {
    numb: 2,
    question: "How do you instantiate an array in Java?",
    answer: "int arr[] = new int[3];",
    options: [
      "int arr[];",
      "int arr[] = new int(3);",
      "int arr[] = new int[3];",
      "int arr() = new int(3);",
    ]
  },
  {
    numb: 3,
    question: "When does the ArrayIndexOutOfBoundsException occur?",
    answer: "Run-time",
    options: [
      "Compile-time",
      "Run-time",
      "Not an error",
      "Not an exception at all"
    ]
  },
  {
    numb: 4,
    question: "Assuming int is of 4bytes, what is the size of int arr[15];?",
    answer: "60",
    options: [
      "15",
      "19",
      "11",
      "60"
    ]
  },
  {
    numb: 5,
    question: "Elements in an array are accessed?",
    answer: "randomly",
    options: [
      "randomly",
      "sequentially",
      "exponentially",
      "logarithmically"
    ]
  },
  {
    numb: 6,
    question: "Which of these best describes an array?",
    answer: "Container of objects of similar types",
    options: [
      "A data structure that shows a hierarchical behavior",
      "Container of objects of similar types",
      "Arrays are immutable once initialised",
      "Array is not a data structure"
    ]
  },
  {
    numb: 7,
    question: " Which keyword is used for function in Python language?",
    answer: "def",
    options: [
      "Function",
      "def",
      "Fun",
      "Define"
    ]
  },
  {
    numb: 8,
    question: "What is a memory efficient double linked list?",
    answer: "Each node has only one pointer to traverse the list back and forth",
    options: [
      "Each node has only one pointer to traverse the list back and forth",
      "The list has breakpoints for faster traversal",
      "An auxiliary singly linked list acts as a helper list to traverse through the doubly linked list",
      "A doubly linked list that uses bitwise AND operator for storing addresses"
    ]
  },
  {
    numb: 9,
    question: "How do you calculate the pointer difference in a memory efficient double linked list?",
    answer: "pointer to previous node xor pointer to next node",
    options: [
      "head xor tail",
      "pointer to previous node xor pointer to next node",
      "pointer to previous node – pointer to next node",
      "pointer to next node – pointer to previous node"
    ]
  },
  {
    numb: 10,
    question: "What is the worst case time complexity of inserting a node in a doubly linked list?",
    answer: "O(n)",
    options: [
      "O(nlogn)",
      "O(logn)",
      "O(n)",
      "O(1)"
    ]
  },


  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

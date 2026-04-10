/**
 * OOP multiple-choice questions for Tic Tac Toe loser quiz.
 * Each item: q, options (4 strings), correct (0–3 index), explanation (shown on wrong pick).
 */
window.OOP_QUESTIONS = [
  {
    q: 'Which pillar of OOP describes bundling data with the methods that operate on it, often hiding internal details?',
    options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Abstraction'],
    correct: 1,
    explanation: 'Encapsulation bundles state and behavior together and controls access (e.g., private fields), hiding implementation details.'
  },
  {
    q: 'Runtime polymorphism in many OOP languages is most commonly achieved via:',
    options: ['Method overloading only', 'Operator overloading only', 'Method overriding (virtual / dynamic dispatch)', 'Macros'],
    correct: 2,
    explanation: 'Overriding a method in a subclass lets the program call the correct implementation at runtime based on the actual object type.'
  },
  {
    q: 'Inheritance primarily models which relationship?',
    options: ['Has-a', 'Uses-a', 'Is-a', 'Depends-on'],
    correct: 2,
    explanation: 'Inheritance expresses an is-a relationship: a subclass is a specialized kind of its superclass.'
  },
  {
    q: 'Which statement best describes abstraction?',
    options: [
      'Hiding variables inside a class',
      'Exposing only essential behavior while hiding complexity',
      'Allowing one interface for many implementations',
      'Copying code from a base class'
    ],
    correct: 1,
    explanation: 'Abstraction focuses on what an object does (essential interface) rather than how every detail works internally.'
  },
  {
    q: 'Compile-time polymorphism often refers to:',
    options: ['Method overriding', 'Method overloading', 'Garbage collection', 'Reflection'],
    correct: 1,
    explanation: 'Overloading resolves which method to call based on signatures at compile time in statically typed languages.'
  },
  {
    q: 'A class that cannot be instantiated and may define abstract methods is called:',
    options: ['A sealed class', 'An abstract class', 'A static class', 'A friend class'],
    correct: 1,
    explanation: 'Abstract classes are meant to be extended; they may leave some methods for subclasses to implement.'
  },
  {
    q: 'Encapsulation is strengthened by:',
    options: ['Public fields everywhere', 'Controlled access via getters/setters or accessors', 'Global variables', 'Multiple inheritance only'],
    correct: 1,
    explanation: 'Accessors and visibility modifiers let you enforce invariants while still exposing a minimal interface.'
  },
  {
    q: 'The Liskov Substitution Principle says that:',
    options: [
      'Subclasses should be replaceable for their base types without breaking correctness',
      'Every class must have exactly one parent',
      'Interfaces cannot have default methods',
      'Private methods must be virtual'
    ],
    correct: 0,
    explanation: 'If you substitute a subclass where a base type is expected, behavior should remain valid for clients.'
  },
  {
    q: 'Composition (object fields) vs inheritance — composition favors:',
    options: [
      'Tight coupling to base class internals',
      'Flexible has-a relationships and easier change',
      'Eliminating interfaces',
      'Faster compilation only'
    ],
    correct: 1,
    explanation: 'Composition builds behavior by combining objects, often reducing fragile coupling to inheritance hierarchies.'
  },
  {
    q: 'An interface in OOP typically emphasizes:',
    options: ['Implementation details', 'What operations are available, not how they are coded', 'Heap allocation only', 'Inheritance depth'],
    correct: 1,
    explanation: 'Interfaces define contracts — the operations types must support — leaving implementation to classes.'
  },
  {
    q: 'Polymorphism allows:',
    options: [
      'Only one subclass per base class',
      'Different classes to be treated uniformly through a shared interface or base type',
      'Only static methods',
      'No virtual methods'
    ],
    correct: 1,
    explanation: 'Polymorphism lets you write code against a common type while actual behavior varies by concrete class.'
  },
  {
    q: 'Which is an example of encapsulation?',
    options: [
      'A subclass overriding a method',
      'Keeping a balance field private and exposing deposit() / withdraw()',
      'Two classes with the same name in one file',
      'Using multiple return types'
    ],
    correct: 1,
    explanation: 'Hiding internal state and exposing controlled operations is classic encapsulation.'
  },
  {
    q: 'Diamond problem is most associated with:',
    options: [
      'Single inheritance',
      'Multiple inheritance where the same base appears along different paths',
      'Interfaces only',
      'Garbage collection'
    ],
    correct: 1,
    explanation: 'Ambiguity can arise when a class inherits the same base through more than one path in a multiple-inheritance graph.'
  },
  {
    q: 'A constructor’s main role is typically to:',
    options: ['Destroy objects', 'Initialize new object state', 'Compile the program', 'Serialize to JSON only'],
    correct: 1,
    explanation: 'Constructors set up initial state when an instance is created.'
  },
  {
    q: 'Method overriding requires:',
    options: [
      'Different class name only',
      'A subclass providing a new implementation for a method defined in an ancestor',
      'Same parameter types in unrelated classes',
      'Static binding only'
    ],
    correct: 1,
    explanation: 'Overriding replaces or extends inherited instance behavior in a subclass, resolved dynamically in many languages.'
  }
];

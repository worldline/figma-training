# SOLID Principles
In software engineering, SOLID is a acronym for five design principles intended to make software designs more **understandable**, **flexible**, and **maintainable**. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin (*Uncle Bob*), first introduced in his 2000 paper Design Principles and Design Patterns.

Let's quickly go over each one, what they actually mean, and what are the benefits of adhering to them.  

![SOLID](../../assets/img/architecture/solid.png)


## Single Responsibility

The Single-Responsibility Principle is a computer-programming principle that states that every module, class or function in a computer program should have responsibility over a single part of that program's functionality, and it should encapsulate that part. All of that module, class or function's services should be narrowly aligned with that responsibility.

"There should never be more than one reason for a class to change." In other words, every class should have only one responsibility. When using *reason* here, what it actually refers to are **roles** or **actors** 

As an example, consider a module that compiles and prints a report. Imagine such a module can be changed for two reasons. First, the content of the report could change. Second, the format of the report could change. These two things change for different causes. The single-responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should, therefore, be in separate classes or modules. It would be a bad design to couple two things that change for different reasons at different times. 

So the question is: **Why should you use it and what happens if you ignore it?**

The argument for the single responsibility principle is relatively simple: it makes your software easier to implement and prevents unexpected side-effects of future changes

- Frequency and effects of changes
    - Changes in the codebase happen all the time, as requirements evolve over time. This means that ultimately responsibilities have to change. 
    - If a element (class, module, etc.) addresses multiple responsibilities, that increases the odds of it having to change as responsibilities evolve. This then further cascades if that element is a dependency of other elements
    - Therefore, as much as possible, one should strive to limit an element's handled responsibilities   
- Easier to Understand
    - Ultimately, limiting to a single responsibility per software component also means that the codebase will be smaller, make it easier to follow, explain, understand and implement

## Open/Closed Principle

The Open-Closed Principle states that "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.". The way this is usually approached was initially through inheritance, but it has been redefined to use polymorphism. The general idea of this principle is great. It tells you to write your code so that you will be able to add new functionality without changing the existing code. That prevents situations in which a change to one of your classes also requires you to adapt all depending classes.

If we take as an example an interface, the open/closed principle applies in that one has to implement the methods described by the interface (open), but they cannot add any methods to the interface (closed). 

The main benefit of this approach is that an interface introduces an additional level of abstraction which enables loose coupling. The implementations of an interface are independent of each other and don’t need to share any code. If you consider it beneficial that two implementations of an interface share some code, you can either use inheritance or composition.

## Liskov's Substitution Principle

The Liskov Substitution Principle extends the Open/Closed Principle by focusing on the behavior of a superclass and its subtypes. Substitutability is a principle in object-oriented programming stating that, in a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program. 

This principal was first introduced by Barbara Liskov in 1987 and, while its formal definition is a bit too scientific to quickly wrap your head around it.

> Let Φ(x) be a property provable about objects x of type T.  
> Then Φ(y) should be true for objects y of type S where S is a subtype of T.

What it essentially boils down to in practice is that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.

An overridden method of a subclass needs to accept the same input parameter values as the method of the superclass. That means you can implement less restrictive validation rules, but you are not allowed to enforce stricter ones in your subclass. Otherwise, any code that calls this method on an object of the superclass might cause an exception, if it gets called with an object of the subclass.

Similar rules apply to the return value of the method. The return value of a method of the subclass needs to comply with the same rules as the return value of the method of the superclass. You can only decide to apply even stricter rules by returning a specific subclass of the defined return value, or by returning a subset of the valid return values of the superclass.

The benefits of this principle are a bit harder to grasp, as is the fact that enforcing the principle is no easy task considering that no compiler warning or errors can be thrown if a subclass enforces stricter rules compared to its parent class. In practice it is a good idea to keep this in mind when designing the superclasses and subtypes, in order to try to ensure somewhat predictable behaviour once the application goes live.

## Interface Segretation Principle

The Interface-Segregation Principle states that no client should be forced to depend on methods it does not use. This principle proposes to split interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces. This principle helps to keep a system decoupled and thus easier to refactor, change, and redeploy.

Similar to the Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts. 

The benefits of adhering to this principle are more straight-forward: When one is implementing an interface, they should **only** have to implement the methods they **require**
- It happens quite often when designing interfaces that one has to draw the line somewhere between having few monolitical interfaces and many interfaces with just one method. Similar to the Single Responsibility Principle, one has to be careful not to go overboard, as having as many interfaces as methods would make the implementing code way too heavy and difficult to read and on the flip side the code dependant on the interfaces would quickly be unreadable. 
- As in most things, a balance should be struck here in order to have the reasonable of methods per interface, and making as many of those methods relevant to the client implementing them

## Dependency Inversion Principle

The Dependency Inversion Principle is a specific form of loosely coupling software modules. When following this principle, the conventional dependency relationships established from high-level policy-setting modules to low-level dependency modules are reversed. This helps render the high-level modules independent of the low-level module implementation details. The principle states:

1. High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
2. Abstractions should not depend on concrete implementations. It's the concrete implementations which should depend on abstractions.

By dictating that both high-level and low-level objects must depend on the same abstraction, this design principle inverts the way some people may think about object-oriented programming.

The idea behind the 2 points of this principle is that when designing the interaction between a high-level module and a low-level one, the interaction should be thought of as an abstract interaction between them. This not only has implications on the design of the high-level module, but also on the low-level one: the low-level one should be designed with the interaction in mind and it may be necessary to change its usage interface. 

Given its reliance on using interfaces instead of concrete implementations, and given the fact that for a high-level module the implementation can be changed in the low-level module without any impact, it entails that this principle is a practicle application of the Open/Closed and Substitution Principles discussed earlier.

The benefits of following this principle are based on the fact that it allows the decoupling of different components. For instance: 
- The business rules should not depend on whether the data received comes from a local database or a network call. Neither should there be any impact on the business rules side if the actual implementation of the database changes. Since both depend only on an abstraction, as long as that contract is respected, the principle stands
- When writting unit tests, the main idea is that the tests should **only** test one part of the codebase. For instance, when testing the business rules, one shouldn't have to do actual network calls. Thanks to this principle, we can have test implementations of the data layer (network, database, etc.) and the business rules layer wouldn't not notice the difference. Additionally, this helps us test out all the different possible cases from the data layer without having to reconfigure an environment each time

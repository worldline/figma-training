# Dependency Injection

## Intro 

**Dependency Injection** *(DI)* is a technique used in software engineering in order to provide the parameters necessary for your bit of code to function. Before we get too deep into the topic, some vocabulary and term definition is probably in order. Starting off with the name itself: 

- Dependency: a dependency is reference one class has towards a another class, which is necessary for its execution. For example, a *Car* class might need a reference to an *Engine* class. These required classes are called dependencies, and in this example the *Car* class is dependent on having an instance of the *Engine* class to run.

- Injection: the *injection* part of *DI* refers to how the dependencies are provided. In general, the ways this can be done are by having the class instantiate its dependencies on its own, getting them from somewhere else, or having it passed as a parameter (at the moment the class is created, or at a later moment). The third option is the *injection* part

A slightly more in-depth explanation of all this can be found [here](https://developer.android.com/training/dependency-injection#fundamentals).

Now that we have a better idea of what dependency injection IS, let's take a look at WHAT we'll be using it for

## Uses

In practice, when we're discussing **DI**, we're going to be using it for a few things: 

### Providing constructor parameters: 
Like explained above, this is the base use for **DI**. We'll be finding this practically everywhere: 

- The most basic case is delegating the instantiation of parameters. 
    - For instance, say we have multiple HTTP Clients, and we want to add to each one a interceptor which will log the requests in the console. Additionnally, we'll also want to not create multiple instances of that interceptor. 
    - Without any **DI** we would have to manually handle on our own the instantiation of the interceptor, make sure we don't create multiple instances of it, and ideally only instance everything when we actually need it. 
    - Obviously this is all very much doable, but it means additional code which has to be written for everything which is therefore prone to implementation errors. 

- A slightly more advance use case, building on the one from above, and working along with the *SOLID* principles (particularaly the Dependency Inversion Principle), we have the case where we want to instanciate the implementation of an interface. 
    - For instance, we can have Service_A which requires an implementation of the Data_Repository_B interface. 
    - If we have split up our code along Clean Architecture principles (which is what the previous "App Architecture" topic briefly describes), then that means that Service_A only has visibility on the Data_Repository_B interface - the actual implementation should be split off into a different module and should be of no concern to Service_A. 
    - If we have done all that, then we have no direct way of knowing which implementation should be used, and therefore cannot create it on our own, as we could have done for the interceptors in the example above.
    - Without going into too much detail on the actual technical implementation just yet, in order to get around this conundrum, our **DI** framework will be responsible for determining which implementation to use, according to the configuration we wrote, instantiate it once or multiple times according to our needs, and provide it to the class which requires it. We'll get into the details a bit later on ;).

- Finally, a nuance of the above use case is having the possibility of easily switching between implementations. 
    - This can be quite handy for cases such as:
        - having an implementation which calls a webservice to recover data, and another one which uses local data (an offline database for instance, if the user does not have internet connectivity), or
        - when you want to isolate a specific component in order to be able to proper **Unitary** testing. Using the exemple from above, if we wanted to test various cases of Service_A and we required specific responses from Data_Repository_B, we could use a test implementation of the repository which returns the data which allows us to test out all the possible cases.

## So, what do you use?

The most recommended Dependency Injection Framework is [Dagger](https://dagger.dev/dev-guide/android.html). It is the industry standard, and provides most if not all of the tools required to answer to your needs. The only issue with implementing Dagger is the relatively steep learning curve and somewhat obscure error messages which sometimes makes debugging difficult. In order to address this issue and still keep all the benefits of the underlying engine, [Dagger-Hilt](https://dagger.dev/hilt/) was developped which greatly streamlines the setup process.
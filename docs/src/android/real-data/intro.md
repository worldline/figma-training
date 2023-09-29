# Intro to Architecture

While it is entirely possible to organize all your codebase into a single class, it is (strongly) recommended to have a more clearly defined structure. This has its advantages and disadvantes. 

Starting with the disadvantages: 
- Code boilerplate
- Code redundancy/duplication
- Jumping through extra hoops to achieve a similar result

But, thankfully, there are also advantages:
- Standardising the codebase 
    - Using established design patterns facilitates developer onboarding
    - You know where the code is *supposed* to be
- Helps modularize the codebase so that specific codebase responsibilities (i.e. making network calls, storing data, applying business ruless) are grouped together
- Provides a structure that helps enforce *SOLID* principles

::: warning That's difficult, we know 🤕
In the following lessons of the `Architecture - theory` section, we will present a lot of important principles. It's normal to not fully understand them just by reading, the idea is to have a global understanding of general principles to be able to better apply them in the following sections.
:::
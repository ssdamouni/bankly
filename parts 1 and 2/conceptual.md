### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for JSON web token. It is a secure way of sending information between parties. The information is digitally signed so that the server will know if the information can be trusted.

- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT contains the information from the header, payload and secret encoded together at the end of the JSON Web Token.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes. The paylaod can be easily turning into human readable content.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Basically the server produces a Token when the user signing and it is sent along with the request to the API to ensure that requests are coming from an authenticated user.

- Compare and contrast unit, integration and end-to-end tests.
Unit testing is testing the smallest parts of the application. So showing how individual function should work. These are the simplest tests to write. Integrations tests test how functions should interact with each other. The end-to-end tests test the entire stack of the application. These are much more complicated to write and time consuming. They are essentially test that a client doing something is process correctly all the way back to the database.

- What is a mock? What are some things you would mock?
A mock is a function used for testing designed to help test things that are not meant to happen the same everytime. So for instance if a random number was invovled in the test. You could write a mock that just give you the same random number every time so that you will know what the out come will be.

- What is continuous integration?
The practice of automating the integration of code. So for a lot of developers working on the same product it is sure to test all the code before it is integrated into the central branch. 

- What is an environment variable and what are they used for?
it a dynammic object on a computer containing and editable value that can be access by different applications. They can be used to set and enviroment to run code in (testing or production). 
- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?
It verifies that all the information will work when it is sent to the database. Them means that the server can just reject the bad information rather than allowing it to break the app.

- What are some ways to decide which code to test?
The best things to test are things that don't work in a really clear and obvious way. For instance helper functions that do a vital task but the input and return value are not super obvious.

- What are some differences between Web Sockets and HTTP?
HTTP is one direction. So either the client is sending the server a request or the server is responding tot he request. Web sockets check if both parties want to communicate and then information can be sent both ways. Websockets are typically used if you want real time updates on the client side. So for instance in video games or chat rooms. HTTP is better for simple requests or serving static web pages.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
I like the simplicity as well as the fact that neither of these frameworks are very opinionated. I sort of preferred flask only because have to deal with all of asynchronous code can make things a little more complication. in addition, getting an application started in express requires a bit more work right at the beginning. In addition, error handling is quite a bit different. Express seems to have a lot more flexibility with how you throw and handle error but the engineer has to set it up themselves. Flask does the error handling for you but you also have less control. So, Overall i prefer flask but both are useful for different things. 

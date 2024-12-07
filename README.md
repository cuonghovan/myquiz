# Real-Time Vocabulary Quiz Coding Challenge

### Part 1: System Design
   - **Architecture Diagram**:
      <img width="893" alt="architecture" src="https://github.com/user-attachments/assets/9c6a924c-0b4e-44bc-ad64-a5f2f11d807c">

   - **Component Description**: 
      - **Client**: The web application built with React
      - **Amazon Cognito**: for user authentication and authorization.
      - **Amazon API Gateway**: To manage API requests from the frontend, it uses Cognito to authorize requests.
      - **AWS Lambda**: Functions for handling quiz logic (joining quizzes, submitting answers, getting participants and quiz data, updating scores via WS).
      - **Amazon DynamoDB**: A database to store quizzes, participants, WS connections.
  
   - **Data Flow**:
       - This below flow demonstrate a scenario when user A is already on leadboard screen while user B starts the quiz.
     ![Dataflow](https://github.com/user-attachments/assets/12443060-9efa-4411-b2ce-b58586419cd8)

   - **Technologies and Tools**:
      1. Frontend
        - Technology: React.js
          - Justification: React is a popular JavaScript library for building user interfaces. It allows for the creation of dynamic, single-page applications that can handle real-time updates efficiently.
        - Real-Time Framework: Socket.IO or WebSocket
          - Justification: For real-time communication, Socket.IO or native WebSocket can be used to establish a connection between the client and server for instant score updates and leaderboard changes.
      2. Backend
        - Technology: AWS Lambda
          - Justification: AWS Lambda allows you to run backend code without provisioning servers. It can scale automatically with usage.
        - API Gateway: AWS API Gateway
          - Justification: API Gateway provides a robust way to create and manage APIs for your application. It integrates seamlessly with Lambda functions.
        - Programming Language: Node.js
          - Justification: Node.js is well-suited for serverless architectures, with extensive libraries for handling HTTP requests, WebSocket connections, and more.
      3. Database
        - Database: Amazon DynamoDB
          - Justification: DynamoDB is a fully managed NoSQL database that provides low-latency data access and can scale to handle high traffic. It is ideal for storing quiz data, user data, and scores due to its flexibility and speed.
      4. Authentication
        - Service: Amazon Cognito
        - Justification: Amazon Cognito provides user authentication and management, enabling secure sign-up, sign-in, and access control for your application. It integrates easily with other AWS services.

### Part 2: Implementation
  - Real-time Quiz Participation: Users should be able to join a quiz session using a unique quiz ID.

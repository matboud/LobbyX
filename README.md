
![LobbyX](https://github.com/matboud/LobbyX/assets/24990394/21305b0d-918c-48ec-b26e-8249634e5c9f)



# LobbyX - Casino Games List Lobby
### Overview
LobbyX is a React-based application designed for a casino games list lobby. This project showcases a user-friendly interface for browsing and searching through a list of casino games. It is built using Next.js, TypeScript, Tailwind CSS, and Redux for the front end, and Java Spring Boot for the back end.

### Features
Search functionality to find games quickly.
Lazy loading for efficient performance.
Detailed view of game image and name.
Scalable and well-structured codebase.
Docker containerization for easy deployment.
Performance Metrics
Lighthouse Scores: 99% Performance, 100% SEO, 95% Best Practices, 93% Accessibility.
<img width="520" alt="Screenshot 2023-11-28 at 20 39 47" src="https://github.com/matboud/LobbyX/assets/24990394/716c0c8e-5e4e-4bcd-8d54-b9e1b9670b80">



### Prerequisites
#### Docker
Installation and Running the Project

Frontend
To run the frontend part of the application in a Docker container, execute the following commands in your terminal:

bash
Copy code
./build-docker.sh
./run-docker.sh

Backend
Similarly, to set up and run the backend:

bash
Copy code
./build-docker.sh
./run-docker.sh


API Endpoints
The back end provides several API endpoints for interacting with the games database. For details on available endpoints and their usage, please refer to the API documentation section.


## PS:
- I haven't included environment variables for the backend or frontend in the project, even though they should be there. This is because I hosted the database on a VPS, and I didn't have enough time to configure it for proper communication.
-------------

Contact
For any further queries or suggestions, please contact <contact@matboud.com>.

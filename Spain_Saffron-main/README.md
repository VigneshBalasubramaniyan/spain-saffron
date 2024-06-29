Saffron Project
This project consists of a React frontend and a FastAPI backend to provide information about the various uses of saffron. The application is designed to be interactive and responsive for both mobile and desktop users.

Prerequisites
Node.js (for the frontend)
Python 3.8+ (for the backend)
Git (for version control)
Setup Instructions
Clone the Repository
First, clone the repository from GitHub.

bash
Copy code
git clone <repository-url>
cd saffron-project
Backend Setup
Create a virtual environment (optional but recommended):

bash
Copy code
python -m venv venv
Activate the virtual environment:

On Windows:

bash
Copy code
venv\Scripts\activate
On macOS/Linux:

bash
Copy code
source venv/bin/activate
Install the required dependencies:

bash
Copy code
pip install fastapi uvicorn
Run the backend server:

bash
Copy code
uvicorn main:app --reload
The backend will be running at http://127.0.0.1:8000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd saffron-frontend
Install the required dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The frontend will be running at http://localhost:3000.

Running the Application
Ensure the backend server is running:

Open a terminal and navigate to the project directory.
Activate the virtual environment (if used) and start the backend server with uvicorn main:app --reload.
Ensure the frontend server is running:

Open another terminal, navigate to the saffron-frontend directory, and start the frontend server with npm start.
Access the application:

Open your web browser and go to http://localhost:3000.
Project Structure
bash
Copy code
saffron-project/
├── saffron-frontend/   # React frontend code
├── venv/               # Virtual environment (optional)
├── main.py             # FastAPI backend code
└── README.md           # This file
Additional Notes
The backend endpoints are defined in main.py.
The frontend components are located in the saffron-frontend/src directory.
The project uses Material-UI for the frontend design.
Troubleshooting
If you encounter issues with dependencies, try running the installation commands with --force or --legacy-peer-deps for npm.
Ensure that the backend and frontend servers are not conflicting with any other services running on your machine.
Storing User Data
The backend captures user data including visit time, age group, gender, and accessed information. This data is stored as part of the application logic in FastAPI.

Contributing
If you wish to contribute to the project, please fork the repository and create a pull request with your changes.

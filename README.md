# ProctorAuth Application

## Getting Started

Follow these steps to set up and run the ProctorAuth application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- A Gmail account for sending emails (if using the backend email functionality).

### Environment Variables

1. **Create a .env File:**
   In the `backend` directory, create a file named `.env` and add the following variables:

   ```
   EMAIL_USER=your_gmail_username
   EMAIL_PASS=your_gmail_password_or_app_password
   ```

   Replace `your_gmail_username` and `your_gmail_password_or_app_password` with your actual Gmail credentials. If you have 2-Step Verification enabled, use an App Password instead of your regular password.

2. **Note:** The `.env` file should not be included in your Git repository. You can add it to your `.gitignore` file to prevent it from being committed. 

### Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd proctorauth-main
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd proctorauth-main/backend_otp_app/backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server:**
   ```bash
   cd proctorauth-main/backend_otp_app/backend
   npm start
   ```
   The backend server will run on `http://localhost:4000`.

2. **Start the Frontend Server:**
   ```bash
   cd proctorauth-main/backend_otp_app/frontend
   npm start
   ```
   The frontend application will be available at `http://localhost:3000`.

### Verifying Functionality

- **Backend:** Ensure the server is running and check the console for any errors related to email sending.
- **Frontend:** Open your browser and navigate to `http://localhost:3000` to interact with the application.

## File Descriptions

### Backend

- **src/index.js**: The main entry point for the backend server, handling API requests and email sending.
- **src/config.js**: Configuration file for environment variables and settings.
- **src/routes.js**: Defines the API routes for the backend.
- **src/controllers.js**: Contains the logic for handling requests and sending emails.

### Frontend

- **src/App.js**: The main component of the React application, rendering the UI.
- **src/components/**: Directory containing reusable UI components.
- **src/services/**: Directory for API service calls to the backend.
- **public/index.html**: The HTML template for the React application.


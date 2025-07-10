# Apex Housing Society Management System

Apex is a modern web application designed to streamline and digitize the management of housing societies and apartment communities. It provides residents, management, and staff with a centralized platform for communication, operations, and community engagement.

## Features

- **Document Wallet**: Securely store and manage important documents like leases, agreements, and property-related files online.
- **Complaint Tracking**: Submit, monitor, and resolve maintenance or community issues efficiently.
- **Amenities Booking**: Book shared facilities (e.g., gym, lounge) with ease.
- **Resident Directory**: Access and connect with fellow residents.
- **Visitor Entry Management**: Track and manage guest access for enhanced security.
- **Event Calendar**: Stay updated on community events and activities.
- **Announcement Posts**: Receive and post important community announcements.
- **Expense Management**: Track, analyze, and manage society finances and maintenance payments.
- **User Roles**: Supports roles like Resident, Chairman, and Security Guard for tailored access and features.
- **Dark/Light Mode**: Switch between light and dark themes for a comfortable user experience.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend/Database**: Firebase Realtime Database
- **Libraries**: [Fuse.js](https://fusejs.io/) for search functionality

## Getting Started

### Prerequisites
- Node.js (for local development, if needed)
- A modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd apex-user
   ```
2. Install dependencies (for search functionality):
   ```bash
   npm install
   ```

### Running the App
- Open `index.html` in your browser for the landing page.
- Use the navigation links to access login, signup, and feature pages.
- The app is designed to work as a static site with Firebase as the backend.

### Firebase Setup
- The app uses Firebase for authentication and data storage. Update the Firebase configuration in `scripts/firebase.js` with your own credentials if deploying independently.

## Project Structure

```
apex-user/
├── assets/           # Images and icons
├── data/             # Sample user data
├── images/           # Additional images
├── scripts/          # JavaScript files (features, utils, firebase)
├── stylesheets/      # CSS files (global and feature-specific)
├── index.html        # Landing page
├── home-u.html       # User dashboard
├── login.html        # Login page
├── sign-up.html      # Apartment registration
├── sign-up-user.html # User signup by Apartment ID
├── contact.html      # Contact form
└── ...
```

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License
This project is for educational and demonstration purposes. For production use, please ensure compliance with data privacy and security standards.

---
**Apex** – Where Management Meets Modern Living 
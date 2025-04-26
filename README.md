` The Interactive Constellation Weaver`
 🚀 Overview
The Interactive Constellation Weaver is an imaginative platform where users can:

Draw constellations by connecting stars on a virtual star map.

Assign custom names and meanings to their unique constellations.

Generate short stories based on the constellation’s shape and symbolism.

Share and explore constellations crafted by other users, building a collective celestial folklore.

🛠️ Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Styling: CSS

🧩 Features
⭐ Star Map Canvas
Draw and connect points to form constellations.

Edit and move stars freely.

Smooth and intuitive drawing with HTML <canvas>.

📝 Constellation Details
Input custom names and meanings.

Real-time story generation based on user input and constellation shape.

📖 Story Generation
Auto-generates creative stories using templates and constellation data.

Combines the meaning and shape to create unique folklore tales.

🌌 Constellation Gallery
Browse and explore constellations created by others.

Discover the imaginative stories behind each constellation.

🔐 User Authentication
User registration and login.

Secure password handling with bcrypt hashing.

JWT-based session management.

🔗 API Endpoints
Users

Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and receive token
Constellations
GET   /api/users  retrieve all the available users stored

Method	Endpoint	Description
POST	/constellations	Create a new constellation
GET	/constellations	Get all constellations
GET	/constellations/:id	Get a specific constellation
PUT	/constellations/:id	Update a constellation
DELETE	/constellations/:id	Delete a constellation


`** Frontend Structure**`

Canvas Component: Interactive star map for drawing.

Form Component: Capture name and meaning.

Story Display: Shows generated stories.

Gallery Page: Explore and view constellations from users.

Auth Pages: Register and login forms.

🎨 Story Generation Logic
Template Approach:

Example:

"The [name] constellation, shaped like a [shape description], symbolizes [meaning]. Legend says it guided ancient travelers under the starlit sky."

Dynamic Descriptions:

Based on number of points, complexity, and user-assigned meaning


`**🛡️ Security**``
Passwords securely hashed using bcryptjs.

JWT tokens securely manage user sessions.

CORS setup to allow safe API interaction

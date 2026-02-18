<h1>📝 API-Driven Todo Application</h1>

<h2>Overview</h2>
<p>
This project is a full-stack Todo List application built using <strong>Node.js</strong>, <strong>Express</strong>, 
and vanilla <strong>HTML, CSS, and JavaScript</strong>. It was developed as part of an API-focused assignment, 
with an emphasis on understanding RESTful routes, status codes, and frontend-backend integration.
</p>

<p>
The application allows users to add, update, delete, search, filter, and prioritise tasks through a clean, 
structured interface inspired by strong horizontal design principles and professional usability practices.
</p>

<h2>Key Features</h2>
<ul>
  <li>Add new tasks via a REST API (POST)</li>
  <li>Update tasks by selecting and editing them (PUT)</li>
  <li>Delete individual tasks using per-item delete buttons (DELETE)</li>
  <li>View all tasks dynamically using loop-based rendering (GET)</li>
  <li>Priority system (High, Medium, Low)</li>
  <li>Search functionality for quick task filtering</li>
  <li>Priority filter buttons (All, High, Medium, Low)</li>
  <li>Automatic sorting by priority</li>
  <li>Clear input fields and editing state management</li>
</ul>

<h2>Assignment Requirements (Thursday API Transcript Alignment)</h2>
<ul>
  <li>Use of in-memory storage for tasks while the server is running</li>
  <li>Full CRUD functionality (Create, Read, Update, Delete)</li>
  <li>Proper API status codes (200, 201, 400, 404, 500)</li>
  <li>Delete button for each task using loop rendering</li>
  <li>Update functionality based on task ID</li>
  <li>Frontend connected to backend API endpoints</li>
  <li>Research-led development using code snippets and testing</li>
</ul>

<h2>Technical Stack</h2>
<ul>
  <li><strong>Backend:</strong> Node.js, Express</li>
  <li><strong>Frontend:</strong> HTML, CSS, JavaScript (Vanilla)</li>
  <li><strong>Architecture:</strong> Client-Server REST API</li>
  <li><strong>Data Storage:</strong> In-memory array (temporary persistence)</li>
</ul>

<h2>Project Structure</h2>
<pre>
todo_app/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── public/
    ├── index.html
    ├── styles.css
    └── script.js
</pre>

<h2>API Endpoints</h2>

<h3>GET /api/tasks</h3>
<p>Retrieves all tasks stored in memory.</p>

<h3>POST /api/tasks</h3>
<p>Creates a new task with text and priority.</p>

<h3>PUT /api/tasks/:id</h3>
<p>Updates an existing task by ID.</p>

<h3>DELETE /api/tasks/:id</h3>
<p>Deletes a specific task using its unique ID.</p>

<h2>Status Code Usage</h2>
<ul>
  <li><strong>200:</strong> Successful request (load, update, delete)</li>
  <li><strong>201:</strong> Task successfully created</li>
  <li><strong>400:</strong> Invalid input (e.g. empty task)</li>
  <li><strong>404:</strong> Task not found</li>
  <li><strong>500:</strong> Server error handling</li>
</ul>

<h2>Usability & UX Improvements</h2>
<ul>
  <li>Helper text explaining how to update tasks</li>
  <li>Empty state message when no tasks exist</li>
  <li>Active filter highlighting for clarity</li>
  <li>Search bar for improved task navigation</li>
  <li>Structured horizontal layout inspired by architectural design principles</li>
</ul>

<h2>Design Approach</h2>
<p>
The interface follows strong horizontal visual structure and minimal styling, focusing on clarity, 
readability, and usability. The colour scheme uses complementary purple and blue tones with a light 
background to create contrast while maintaining a professional and calm user experience.
</p>

<h2>How to Run the Project</h2>
<ol>
  <li>Clone the repository</li>
  <li>Navigate to the project folder</li>
  <li>Install dependencies using <code>npm install</code></li>
  <li>Start the server with <code>node server.js</code></li>
  <li>Open <code>http://localhost:3000</code> in your browser</li>
</ol>

<h2>Important Notes</h2>
<ul>
  <li>Tasks are stored in memory and reset when the server restarts</li>
  <li>This matches the assignment guidance to avoid database complexity</li>
  <li>The project prioritises API understanding over persistent storage</li>
</ul>

<h2>Future Improvements</h2>
<ul>
  <li>Database integration (MongoDB or PostgreSQL)</li>
  <li>User authentication</li>
  <li>Drag-and-drop task ordering</li>
  <li>Task completion tracking</li>
  <li>Deployment to a live hosting platform</li>
</ul>

<h2>Author</h2>
<p>
Nathan – Software Development Bootcamp Student<br>
Currently focusing on APIs, JavaScript logic, and full-stack fundamentals while building a 
GitHub portfolio of practical projects.
</p>

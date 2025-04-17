export default function Home() {
    return (
      <div style={{ padding: 40 }}>
        <h1>Welcome to the Task API</h1>
        {/* <p>Try visiting <code>/api/tasks</code></p> */}
        <p>Try visiting{' '}<a href="http://localhost:3000/api/tasks" rel="noopener noreferrer">/api/tasks</a></p>
      </div>
    );
  }
  
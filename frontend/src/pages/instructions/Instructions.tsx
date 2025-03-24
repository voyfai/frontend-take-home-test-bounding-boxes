import "./instructions.css"

export const Instructions = () => {
  return (
    <div className="instructions-page">
      <h1>Document Viewer Task Instructions</h1>
      
      <section className="task-requirements">
        <h2>Main Requirements:</h2>
        <ul>
          <li>Render a documents table in a new page</li>
          <li>Load document from the backend when page opens (endpoint is already set up )</li>
          <li>Store response in Redux store</li>
          <li>Create a bounding box and document viewer</li>
        </ul>
      </section>

      <section className="interaction-requirements">
        <h2>Interaction Requirements:</h2>
        <ul>
          <li>Clicking an item in the table should display the corresponding bounding box in the document viewer</li>
          <li>Clicking a bounding box should highlight the corresponding row in the table</li>
          <li>Implement a toggle to show either all bounding boxes or just one</li>
          <li>The bounding boxes should hold their size when the page is resized</li>
        </ul>
      </section>
    </div>
  )
}
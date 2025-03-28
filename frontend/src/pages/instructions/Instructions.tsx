import "./instructions.css"

export const Instructions = () => {
  return (
    <div className="instructions-page">
      <h1>Document Viewer Task Instructions</h1>

      <section className="task-requirements">
        <h2>Project use case</h2>
        <ul>
          <li>You are a logisitcs forwarder processing customs declarations</li>
          <li>you will have shipment related documents read out by an llm</li>
          <li>you as an operator need to review the items before confirming the read out is correct and ready to be processed</li>
        </ul>
      </section>
      
      <section className="task-requirements">
        <h2>Main Requirements:</h2>
        <ul>
          <li>Render a documents table in a new page</li>
          <li>Load document from the backend when page opens (assume endpoint is already set up in the backend )</li>
          <li> Create a service that fetches the document from the backend</li>
          <li>Store response in Redux store</li>
          <li>Create a bounding box and document viewer</li>
          <li>Create a table that displays the document items</li>
        </ul>
      </section>

      <section className="interaction-requirements">
        <h2>Interaction Requirements:</h2>
        <ul>
          <li>The cells in the document should be mapped to unique items showing all relevant values in the table row with one item id</li>
          <li>Clicking a unique item in the table should display the corresponding bounding boxes in the document viewer</li>
          <li>Clicking a bounding box should highlight the corresponding row in the table</li>
          <li>Implement a toggle to show either all bounding boxes or just one</li>
          <li>The bounding boxes should hold their size when the page is resized</li>
        </ul>
      </section>
    </div>
  )
}
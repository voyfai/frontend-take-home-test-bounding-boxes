# Document Viewer Technical Assessment

## Project Use Case
- You are a logistics forwarder processing customs declarations
- You will have shipment related documents read out by an LLM
- You as an operator need to review the items before confirming the read out is correct and ready to be processed

## Getting Started

### Backend Setup
```bash
cd backend
npm install
npm run start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```


## Assessment Requirements

### Main Requirements
- Render a documents table in a new page
- Load document from the backend when page opens (assume endpoint is already set up in the backend)
- Create a service that fetches the document from the backend
- Store response in Redux store
- Create a bounding box and document viewer
- Create a table that displays the document items

### Interaction Requirements
- The cells in the document should be mapped to unique items showing all relevant values in the table row with one item id
- Clicking a unique item in the table should display the corresponding bounding boxes in the document viewer
- Clicking a bounding box should highlight the corresponding row in the table
- Implement a toggle to show either all bounding boxes or just one
- The bounding boxes should hold their size when the page is resized

## Questions?

If you have any questions or run into technical issues, please reach out to us.

Good luck with your assessment! 

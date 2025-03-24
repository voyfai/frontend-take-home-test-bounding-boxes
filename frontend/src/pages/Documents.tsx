import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "../pages/Documents.css"
import { AppDispatch, RootState } from '../store/store';

const FileList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { documents } = useSelector((state: RootState) => state.documents);


  return (
    <div className="table-container">
        Document Id / Name
      <table>
        <thead>
          <tr>
            <th>itemId </th>
            <th>origin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td>{document.items.length}</td>
              <td>
                <button onClick={() => console.log('View details:', document.id)}>
                  show bounding box
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
import React, { useState } from 'react';
import RichTextEditor from "./RichTextEditor/RichTextEditor";

export default function App() {
  const [content, setContent] = useState('');

  const handleContentChange = (editor: any) => {
    setContent(editor.getHTML());
  }

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h3>Editor</h3>
        <RichTextEditor onChange={handleContentChange} />
      </div>
      <div style={{ flex: 1 }}>
        <h3>Preview</h3>
        <div 
          style={{ 
            border: '1px solid #ccc', 
            padding: '16px',
            minHeight: '40vh',
            overflow: 'auto'
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}


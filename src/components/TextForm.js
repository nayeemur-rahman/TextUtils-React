import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm() {
  const [text, setText] = useState('');
  return (
    <section className="text-form">
      <div className="container">
        <textarea
          id="text-input"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          placeholder="Enter your text..."
          rows={12}
        ></textarea>
        <div className="actions">
          <button disabled={!text}
            onClick={() => {
              setText(text.toUpperCase());
            }}
          >
            Convert to Upper Case
          </button>
          <button disabled={!text}
            onClick={() => {
              setText(text.toLowerCase());
            }}
          >
            Convert to Lower Case
          </button>
          <button disabled={!text}
            onClick={() => {
              setText(
                text
                  .replace(/ *\n */g, '\n')
                  .replace(/ +/g, ' ')
                  .trim()
              );
            }}
          >
            Remove Extra Spaces
          </button>
          <button disabled={!text}
            onClick={() => {
              setText('');
            }}
          >
            Clear Text
          </button>
          <button disabled={!text}
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
          >
            Copy Text
          </button>
        </div>
        <div className="summary">
          <h2>Text Summary</h2>
          <p>
            {text.split('\n').filter((i) => i).length} lines, {text.split(/\s/).filter((i) => i).length} words, {text.length} characters
          </p>
        </div>
      </div>
    </section>
  );
}

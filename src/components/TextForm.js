import React, { useState } from 'react';
import Alert from './Alert';
import './TextForm.css';

export default function TextForm() {
  const [text, setText] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  function showAlert(message) {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 1000);
  }
  return (
    <section className="text-form">
      <div className="container">
        <div className="textarea-container">
          <textarea
            id="text-input"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            placeholder="Enter your text..."
            rows={12}
          ></textarea>
          {alertMessage && <Alert message={alertMessage} />}
        </div>
        <div className="actions">
          <button
            disabled={!text}
            onClick={() => {
              setText(text.toUpperCase());
              showAlert('Converted to Upper Case.');
            }}
          >
            Convert to Upper Case
          </button>
          <button
            disabled={!text}
            onClick={() => {
              setText(text.toLowerCase());
              showAlert('Converted to Lower Case.');
            }}
          >
            Convert to Lower Case
          </button>
          <button
            disabled={!text}
            onClick={() => {
              setText(
                text
                  .replace(/ *\n */g, '\n')
                  .replace(/ +/g, ' ')
                  .trim()
              );
              showAlert('Removed Extra Spaces.');
            }}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={!text}
            onClick={() => {
              setText('');
              showAlert('Text cleared.');
            }}
          >
            Clear Text
          </button>
          <button
            disabled={!text}
            onClick={() => {
              navigator.clipboard.writeText(text);
              showAlert('Copied!');
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

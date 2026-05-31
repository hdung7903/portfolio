'use client';

import { useState } from 'react';

export default function CVViewer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        id="cv-preview-btn"
        className="btn-ghost cv-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Preview CV"
      >
        View CV ↗
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="cv-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="CV Preview"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="cv-modal">
            {/* Header bar */}
            <div className="cv-modal-header">
              <span className="cv-modal-title">
                Hoàng Dũng — CV Preview
              </span>
              <div className="cv-modal-actions">
                <span className="cv-no-download">View only · no download</span>
                <button
                  className="cv-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close CV preview"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF embed — no toolbar, no download button */}
            <div className="cv-frame-wrap">
              <iframe
                src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                className="cv-frame"
                title="Hoàng Dũng CV"
                // Prevent context-menu save-as on the iframe area
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

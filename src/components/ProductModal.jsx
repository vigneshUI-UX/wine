import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onReserve }) {
  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={16} />
          </button>

          <div className="modal-header">
            <h2>{product.title}</h2>
            <p>{product.subtext}</p>
          </div>

          <div className="modal-body">
            <img
              src={product.bottleImg}
              alt={product.title}
              className="modal-bottle-preview"
            />

            <div className="modal-info">
              <div className="specs-grid">
                <div className="spec-box">
                  <span className="spec-label">Region</span>
                  <div className="spec-value">{product.region}</div>
                </div>
                <div className="spec-box">
                  <span className="spec-label">ABV</span>
                  <div className="spec-value">{product.abv}</div>
                </div>
                <div className="spec-box">
                  <span className="spec-label">Vintage</span>
                  <div className="spec-value">{product.year}</div>
                </div>
              </div>

              <div className="tags-section">
                <div className="tags-label">Tasting Profile</div>
                <div className="tags-wrapper">
                  {product.tastingNotes.map((note, idx) => (
                    <span key={idx} className="tag-pill">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <p className="description-text">{product.description}</p>

              <button className="reserve-btn" onClick={() => onReserve(product)}>
                Reserve Bottle ({product.price})
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from './data/products';
import ProductSlider from './components/ProductSlider';
import ProductModal from './components/ProductModal';
import './styles/global.css';
import './styles/slider.css';
import './styles/modal.css';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleReserve = (product) => {
    setIsModalOpen(false);
    setToastMessage(`Added ${product.title} (${product.price}) to order!`);

    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ProductSlider products={products} onOpenModal={handleOpenModal} />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onReserve={handleReserve}
      />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-notification"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
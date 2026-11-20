import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from 'react';

export interface ImageViewerData {
  src: string;
  titre: string;
  date?: string;
}

interface ImageViewerProps {
  image: ImageViewerData | null;
  onClose: () => void;
}

export default function ImageViewer({ image, onClose }: ImageViewerProps) {
  const [zoom, setZoom] = useState(1);
  const [translationX, setTranslationX] = useState(0);
  const [translationY, setTranslationY] = useState(0);
  const [deplacement, setDeplacement] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const depart = useRef({ x: 0, y: 0 });
  const aBouge = useRef(false);

  useEffect(() => {
    setZoom(1);
    setTranslationX(0);
    setTranslationY(0);
    setDeplacement(false);
    aBouge.current = false;
  }, [image?.src]);

  useEffect(() => {
    if (!image) return;

    function gererTouche(evenement: KeyboardEvent) {
      if (evenement.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', gererTouche);
    return () => document.removeEventListener('keydown', gererTouche);
  }, [image, onClose]);

  useEffect(() => {
    const element = imageRef.current;
    if (!element || !image) return;

    function gererMolette(evenement: WheelEvent) {
      evenement.preventDefault();
      if (evenement.deltaY < 0) {
        setZoom((valeur) => Math.min(valeur + 0.25, 3));
      } else {
        setZoom((valeur) => Math.max(valeur - 0.25, 0.5));
      }
    }

    element.addEventListener('wheel', gererMolette, { passive: false });
    return () => element.removeEventListener('wheel', gererMolette);
  }, [image]);

  useEffect(() => {
    if (!deplacement) return;

    function deplacerSouris(evenement: globalThis.MouseEvent) {
      if (zoom <= 1) return;
      aBouge.current = true;
      setTranslationX(evenement.clientX - depart.current.x);
      setTranslationY(evenement.clientY - depart.current.y);
    }

    function terminerDeplacement() {
      setDeplacement(false);
    }

    window.addEventListener('mousemove', deplacerSouris);
    window.addEventListener('mouseup', terminerDeplacement);

    return () => {
      window.removeEventListener('mousemove', deplacerSouris);
      window.removeEventListener('mouseup', terminerDeplacement);
    };
  }, [deplacement, zoom]);

  useEffect(() => {
    if (!deplacement) return;

    function deplacerTactile(evenement: globalThis.TouchEvent) {
      if (zoom <= 1 || evenement.touches.length !== 1) return;
      evenement.preventDefault();
      aBouge.current = true;
      setTranslationX(evenement.touches[0].clientX - depart.current.x);
      setTranslationY(evenement.touches[0].clientY - depart.current.y);
    }

    function terminerTactile() {
      setDeplacement(false);
    }

    window.addEventListener('touchmove', deplacerTactile, { passive: false });
    window.addEventListener('touchend', terminerTactile);

    return () => {
      window.removeEventListener('touchmove', deplacerTactile);
      window.removeEventListener('touchend', terminerTactile);
    };
  }, [deplacement, zoom]);

  function demarrerDeplacement(evenement: MouseEvent<HTMLImageElement>) {
    if (zoom <= 1) return;
    aBouge.current = false;
    depart.current = {
      x: evenement.clientX - translationX,
      y: evenement.clientY - translationY
    };
    setDeplacement(true);
  }

  function demarrerDeplacementTactile(evenement: TouchEvent<HTMLImageElement>) {
    if (zoom <= 1 || evenement.touches.length !== 1) return;
    aBouge.current = false;
    depart.current = {
      x: evenement.touches[0].clientX - translationX,
      y: evenement.touches[0].clientY - translationY
    };
    setDeplacement(true);
  }

  function cliquerImage() {
    if (aBouge.current) {
      aBouge.current = false;
      return;
    }

    if (zoom === 1) {
      setZoom(Math.min(zoom + 0.25, 3));
    } else {
      reinitialiserZoom();
    }
  }

  function reinitialiserZoom() {
    setZoom(1);
    setTranslationX(0);
    setTranslationY(0);
  }

  if (!image) return null;

  return (
    <div
      id="imageViewerModal"
      className="image-viewer-modal"
      style={{ display: 'block' }}
      onClick={(evenement) => {
        if (evenement.target === evenement.currentTarget) onClose();
      }}
    >
      <span className="image-viewer-close" onClick={onClose}>
        &times;
      </span>

      <div className="zoom-indicator" id="zoomIndicator">
        {Math.round(zoom * 100)}%
      </div>

      <div className="image-viewer-container" id="imageContainer">
        <img
          ref={imageRef}
          id="viewerImage"
          className={`image-viewer-img${zoom > 1 ? ' zoomed' : ''}`}
          src={image.src}
          alt=""
          style={{
            transform: `translate(${translationX}px, ${translationY}px) scale(${zoom})`,
            cursor: zoom > 1 ? (deplacement ? 'grabbing' : 'zoom-out') : 'zoom-in'
          }}
          onClick={cliquerImage}
          onMouseDown={demarrerDeplacement}
          onTouchStart={demarrerDeplacementTactile}
        />
      </div>

      <div className="image-info" id="imageInfo">
        <h3 id="imageTitle">{image.titre}</h3>
        <p id="imageDate">{image.date || ''}</p>
      </div>

      <div className="zoom-controls">
        <button
          className="zoom-btn"
          type="button"
          data-zoom="out"
          title="Dézoomer"
          onClick={() => setZoom((valeur) => Math.max(valeur - 0.25, 0.5))}
        >
          <i className="fas fa-search-minus"></i>
        </button>
        <button
          className="zoom-btn"
          type="button"
          data-zoom="reset"
          title="Réinitialiser"
          onClick={reinitialiserZoom}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
        <button
          className="zoom-btn"
          type="button"
          data-zoom="in"
          title="Zoomer"
          onClick={() => setZoom((valeur) => Math.min(valeur + 0.25, 3))}
        >
          <i className="fas fa-search-plus"></i>
        </button>
      </div>
    </div>
  );
}

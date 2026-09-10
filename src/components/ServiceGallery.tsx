import { useState } from 'react'

type ServiceGalleryProps = {
  images: string[]
  title: string
}

export function ServiceGallery({
  images,
  title,
}: ServiceGalleryProps) {
  const [current, setCurrent] = useState(0)

  if (!images.length) {
    return null
  }

  const previous = () => {
    setCurrent(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const next = () => {
    setCurrent(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="service-gallery">

      <div className="service-gallery__image">

        <img
          src={images[current]}
          alt={`${title} - CH Gas Works`}
          loading="lazy"
        />

        <button
          type="button"
          className="service-gallery__arrow service-gallery__arrow--prev"
          onClick={previous}
          aria-label="Previous image"
        >
          ←
        </button>

        <button
          type="button"
          className="service-gallery__arrow service-gallery__arrow--next"
          onClick={next}
          aria-label="Next image"
        >
          →
        </button>

        <span className="service-gallery__counter">
          {current + 1} / {images.length}
        </span>

      </div>

      <div className="service-gallery__dots">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            className={
              index === current
                ? 'service-gallery__dot service-gallery__dot--active'
                : 'service-gallery__dot'
            }
            onClick={() => setCurrent(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}
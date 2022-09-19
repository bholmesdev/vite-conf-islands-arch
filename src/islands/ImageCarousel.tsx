import { useState } from 'preact/hooks'
import './imageCarousel.css'

// source: https://bholmes.dev/blog/making-an-animated-image-carousel-the-easy-way-with-svelte/

const photos = [
  'https://static.billboard.com/files/media/Lady-Gaga-Fame-Monster-album-covers-billboard-1000x1000-compressed.jpg',
  'https://static.billboard.com/files/media/Janet-Jackson-Rhythm-Nation-1814-album-covers-billboard-1000x1000-compressed.jpg',
  'https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-compressed.jpg',
  'https://static.billboard.com/files/media/No-Doubt-Tragic-Kingdom-album-covers-billboard-1000x1000-compressed.jpg'
]

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      {photos.map((photo, idx) => <img width={400} height={400} className={`image ${idx === index ? 'visible' : ''}`} src={photo} alt="Placeholder of nature I guess?" />)}
      <button class="next-btn" onClick={() => setIndex((index + 1) % photos.length)}>Next <span>&rarr;</span></button>
    </div>
  )
}
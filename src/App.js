import React from 'react';
import './App.css';

function App() {
  const dummyPhotos = [
    { id: 1, url: 'https://picsum.photos/seed/foto1/600/500', author: '@alex_shots', likes: 245 },
    { id: 2, url: 'https://picsum.photos/seed/foto2/600/500', author: '@nature_vibes', likes: 892 },
    { id: 3, url: 'https://picsum.photos/seed/foto3/600/500', author: '@city_walker', likes: 124 },
    { id: 4, url: 'https://picsum.photos/seed/foto4/600/500', author: '@macro_king', likes: 456 },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FotoShare</div>
        <div className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#community">Community</a>
          <a href="#pro">Pro</a>
        </div>
        <button className="btn-upload">
          <span style={{marginRight: '8px'}}>+</span> Upload
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Share your moments in <span>vibrant</span> colors.</h1>
        <p>
          Join the world's most dynamic community of photographers and creators. 
          Upload, inspire, and discover breathtaking visuals in high resolution.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Start Exploring</button>
          <button className="btn-secondary">Join for Free</button>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="gallery-preview" id="discover">
        <h2>Trending Today</h2>
        <div className="grid">
          {dummyPhotos.map((photo) => (
            <div className="card" key={photo.id}>
              <div style={{overflow: 'hidden'}}>
                <img src={photo.url} alt={`By ${photo.author}`} className="card-img" />
              </div>
              <div className="card-info">
                <span className="card-author">{photo.author}</span>
                <span className="card-likes">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {photo.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

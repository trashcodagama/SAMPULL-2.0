import videoBg from '../assets/videos/videoBg.mp4'


export default function Landing() {
  return (
    <div className="Landing">
        <div className="overlay">
      </div>

      <video src={videoBg} autoPlay loop muted />
      <div className="content White">
        <h1>Welcome to Sampull</h1>
        <p>Discover. Elevate. Collaborate.</p>
        </div>
    </div>
  );
}

import videoBg from '../assets/videos/videoBg.mp4'


export default function Landing() {
  return (
    <div className="Landing">
        <div className="overlay">
      </div>

      <video src={videoBg} autoPlay loop muted />
      <div className="content White">
        <h1>Welcome</h1>
        <p>To my site.</p>
        </div>
    </div>
  );
}

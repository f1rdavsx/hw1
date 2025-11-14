import './header.scss';

export default function Header() {
  return (
    <header>
        <h3>Area</h3>
        <nav>
            <li>Benefits</li>
            <li>Specifications</li>
            <li>How-to</li>
            <li>Contact Us</li>
        </nav>
        <div className="link-button">
            <button>Learn More</button>
        </div>
    </header>
  )
}

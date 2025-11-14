import './banner.scss';
import banner from '../../images/Ipad.png';

export default function Banner() {
  return (
    <section className='banner'>
      <h1>Browse everything.</h1>

      <div>
        <img src={banner} alt="banner" />
      </div>
    </section>
  )
}

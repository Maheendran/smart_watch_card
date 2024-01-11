import firstImage from '../../public/1.jpg'
import twoImage from '../../public/2.jpg'
import threeImage from '../../public/3.jpg'

const Main = () => {
  return (
    <div className="Main">


<div className="sub_main">

<div className="smartWatch">
  <img src="https://www.pngmart.com/files/13/Smartwatch-PNG-HD.png" alt="" />
</div>
  <div className="left_main">

    <div className="left_nav">
<p >S-WATCH</p>
<p>SHOP</p>
<p>SEARCH</p>
    </div>

    {/* name and price */}

    <div className="name_box">
<h1>
  FOSSIL <br />
  <span className="name_stroke">Gen 5</span>
  <p className="price">$ 300 </p>
  <p className="priceone">Explore</p>
</h1>



<div className="collage">
<div className="first">
  <img style={{width:'100%',height:'100%',borderRadius:'10px'}} src={firstImage} alt="" />
</div>

<div className="second">
<img style={{width:'100%',height:'100%' ,borderRadius:'10px'}} src={twoImage} alt="" />
<img style={{width:'100%',height:'100%',borderRadius:'10px'}} src={threeImage} alt="" />
</div>
<div>

</div>
</div>
<div className="collage">
<div className="second">
<img style={{width:'100%',height:'100%' ,borderRadius:'10px'}} src={twoImage} alt="" />
<img style={{width:'100%',height:'100%',borderRadius:'10px'}} src={threeImage} alt="" />
</div>
<div className="first">
  <img style={{width:'100%',height:'100%',borderRadius:'10px'}} src={firstImage} alt="" />
</div>


<div>

</div>
</div>
<div>

</div>

    </div>
  </div>
  <div className="right_main">


    <div className='nextWatch'>
      <img src="https://www.pngarts.com/files/8/Apple-Watch-Series-5-Transparent-Background-PNG.png" alt="" />
    </div>
  </div>


  <div className='cart'>
    <p>CART</p>
  </div>
</div>





    </div>
  )
}

export default Main
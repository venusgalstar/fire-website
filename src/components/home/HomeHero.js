import { connect } from 'react-redux';


const HomeHero = (props) => {
  return (
    <>
      <section id="section-hero" className="pos-rel">
        <div className="content mx-auto">

          <div className="hero-left">
            <div className="title">
              <div className="title-main c-w noto-bold">
                <h1>Phoenix <span>Community Capital</span></h1>
              </div>
              <div className="title-sub">
                large-scale, high yield<br className='mobile-hidden'/>
                return investments
              </div>
              <div className='c-w title-sub1'>
              Rise from the Ashes <br/>of Traditional finance
              </div>
            </div>
            <div className="flex create-buy-btn">
              <button className="btn deaction-btn create-nest-btn btn-middle createNestBtn" onClick={() => { window.location.href = "/app" }}>
                <div className="fs-30">
                  Create Nest
                </div>

              </button>
              <button className="btn action-btn btn-middle buyFireBtn" onClick={() => { window.open("https://traderjoexyz.com/trade?inputCurrency=AVAX&outputCurrency=0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5#/") }}>
                <div className="fs-30">
                  Buy Fire
                </div>
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img className="phoenixHome" src="/img/phoenix.png" alt="Phoenix" />
            <div className="c-w fs-30 phoenix_img_info">Rise from the ashes of traditional finance</div>
          </div>
        </div>

      </section>

      <div className="statistics" >
        <div className="content">
          <span className="flex flex-col align-center statistics-item1">
            <div className=" statistics-item1-title">
              Treasury Balance
            </div>
            <div className="c-w fs-30 noto-bold">
              ${String(props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
          </span>
          <span className="flex flex-col align-center statistics-item2">
            <div className="statistics-item2-title">
              Current Total investment
            </div>
            <div className="c-w fs-30 noto-bold">
              $84,556
            </div>
          </span>
          <span className="flex flex-col align-center statistics-item3">
            <div className="statistics-item3-title">
              Number of nests
            </div>
            <div className="c-w fs-30 noto-bold">
              {String(props.all_nodes).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    all_nodes: state.all_nodes,
    treasury_balance: state.treasury_balance
  };
}

export default connect(mapStateToProps)(HomeHero);
import React, { Component} from "react";

class Main extends Component {
  render() {
    return (

      <div id="content">
        <h3 style={{marginTop:"20px"}}>List Card</h3>
        <div class="row">
          
           {this.props.products.map((product, key) => {
              return (
                	<div class=" col-md-2 col-sm-6 d-flex" key={key} >
						<div class="card w-100 my-2 shadow-2-strong" style={{textAlign: "center",marginTop:"10px",boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
           
                <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" // Replace this URL with the correct image URL
              alt="Product Image"
              style={{ width: '100%', borderRadius:"5px" }}
            />
							<div class="card-body d-flex flex-column">
              <h4><b>{product.name}</b></h4>
                <div style={{textAlign: "center"}}>
              <span>Price: </span>
              <img
                src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png"
                style={{ width: '8%' }}
              />
              <text> </text>
              <span>
                {window.web3.utils.fromWei(
                  product.price.toString(),
                 "ether"
                  )}{" "} Eth
              </span>
            </div>
            <div style={{marginLeft:"0px"}} class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
            {!product.purchased ? (
                      <button style={{width:"100%"}} className="btn btn-warning" name={product.id}
                        value={product.price}
                        onClick={(event) => {
                          this.props.purchaseProduct(
                            event.target.name,
                            event.target.value
                          );
                        }}
                      >
                        Buy
                      </button>
                    ) : (
                      <button style={{width:"100%"}}className="btn btn-warning" disabled>
                        Purchased
                      </button>
                    )}
                    </div>
           
							
							</div>
						</div>
            
					</div>
              );
           })}
			</div>
       <div class="row">
       <div class="col-6 col-md-4"></div>
</div>
      </div>
    );
  }
}

export default Main;

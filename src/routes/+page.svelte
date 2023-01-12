<script>
    // jpg image
    import img1 from '../images/1.jpg'
    import img2 from '../images/2.jpg'
    import img3 from '../images/3.jpg'
    import img4 from '../images/4.jpg'
    import img5 from '../images/5.jpg'
    import img6 from '../images/6.jpg'
    import img10 from '../images/10.jpg'
    import img7 from '../images/7.jpg'
    import img8 from '../images/8.jpg'
    import img9 from '../images/9.jpg'
    import img11 from '../images/11.jpg'
    // png images
    import img01 from '../images/1.png'
    import img02 from '../images/2.png'
    import img03 from '../images/3.png'
    import img04 from '../images/4.png'
    import img05 from '../images/5.png'
    import img06 from '../images/6.png'
    import img07 from '../images/7.png'
    import img08 from '../images/8.png'
    import img09 from '../images/9.png'
    import img010 from '../images/10.png'
    import img011 from '../images/11.png'
    import img012 from '../images/12.png'
    import img013 from '../images/13.png'
    import img014 from '../images/14.png'
    import img015 from '../images/15.png'
    import img016 from '../images/15.png'
    import img017 from '../images/17.png'
    import img018 from '../images/18.png'
    import img019 from '../images/19.png'
    import img020 from '../images/20.png'

    import tag from '../images/tag.png'
    import offer from '../images/offer.png'

    import {products, cart} from '$lib/components/config/card.js';

    const addToCart = (product) => {
        for(let item of $cart) {
                if(item.id === product.id) {
                    product.quantity += 1
                    $cart = $cart;
                    return;
                }
        }
        $cart = [...$cart, product]
    }

</script>

<!-- banner -->
<div class="banner">
    <div class="w3l_banner_nav_left">
        <nav class="navbar nav_bottom">
         <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header nav_2">
              <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
           </div> 
           <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav nav_1">
                    <li><a href="products.html">Branded Foods</a></li>
                    <li><a href="household.html">Households</a></li>
                    <li class="dropdown mega-dropdown active">
                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Veggies & Fruits<span class="caret"></span></a>				
                        <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div class="w3ls_vegetables">
                                <ul>	
                                    <li><a href="/">Vegetables</a></li>
                                    <li><a href="vegetables.html">Fruits</a></li>
                                </ul>
                            </div>                  
                        </div>				
                    </li>
                    <li><a href="kitchen.html">Kitchen</a></li>
                    <li><a href="short-codes.html">Short Codes</a></li>
                    <li class="dropdown">
                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Beverages<span class="caret"></span></a>
                        <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div class="w3ls_vegetables">
                                <ul>
                                    <li><a href="drinks.html">Soft Drinks</a></li>
                                    <li><a href="drinks.html">Juices</a></li>
                                </ul>
                            </div>                  
                        </div>	
                    </li>
                    <li><a href="pet.html">Pet Food</a></li>
                    <li class="dropdown">
                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Frozen Foods<span class="caret"></span></a>
                        <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div class="w3ls_vegetables">
                                <ul>
                                    <li><a href="frozen.html">Frozen Snacks</a></li>
                                    <li><a href="frozen.html">Frozen Nonveg</a></li>
                                </ul>
                            </div>                  
                        </div>	
                    </li>
                    <li><a href="bread.html">Bread & Bakery</a></li>
                </ul>
             </div><!-- /.navbar-collapse -->
        </nav>
    </div>
    <div class="w3l_banner_nav_right">
        <section class="slider">
            <div class="flexslider">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>
                
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src={img1} alt="">
                        </div>

                        <div class="item">
                            <img src={img2} alt="">
                        </div>

                        <div class="item">
                            <img src={img1} alt="">
                        </div>

                        <div class="item">
                            <img src={img2} alt="">
                        </div>
                    </div>
                
                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
        
    </div>
    <div class="clearfix"></div>
</div>
<!-- banner -->
<div class="banner_bottom">
    <div class="wthree_banner_bottom_left_grid_sub">
    </div>
    <div class="wthree_banner_bottom_left_grid_sub1">
        <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
                <img src={img4} alt=" " class="img-responsive" />
                <div class="wthree_banner_bottom_left_grid_pos">
                    <h4>Discount Offer <span>25%</span></h4>
                </div>
            </div>
        </div>
        <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
                <img src={img5} alt=" " class="img-responsive" />
                <div class="wthree_banner_btm_pos">
                    <h3>introducing <span>best store</span> for <i>groceries</i></h3>
                </div>
            </div>
        </div>
        <div class="col-md-4 wthree_banner_bottom_left">
            <div class="wthree_banner_bottom_left_grid">
                <img src={img6} alt=" " class="img-responsive" />
                <div class="wthree_banner_btm_pos1">
                    <h3>Save <span>Upto</span> $10</h3>
                </div>
            </div>
        </div>
        <div class="clearfix"> </div>
    </div>
    <div class="clearfix"> </div>
</div>
<!-- top-brands -->
<div class="top-brands">
    <div class="container">
        <h3>Hot Offers</h3>
        <div class="agile_top_brands_grids">
            {#each $products as product}
            <div class="col-md-3 top_brand_left">
                <div class="hover14 column">
                    <div class="agile_top_brand_left_grid">
                        <div class="tag"><img src={tag} alt=" " class="img-responsive" /></div>
                        <div class="agile_top_brand_left_grid1">
                            <figure>
                                <div class="snipcart-item block" >
                                    <div class="snipcart-thumb">
                                        <a href="/"><img title=" " alt=" " src={product.image} /></a>		
                                        <h4>{product.name}</h4>
                                        <p>{product.content}fortune sunflower oil</p>
                                        <h4>{product.price} đ<span>{product.prices} đ</span></h4>
                                    </div>
                                    <div class="snipcart-details top_brand_home_details">
                                        <form action="checkout.html" method="post">
                                            <fieldset>
                                                <input type="submit" name="submit" value="Add to cart" class="button" on:click={() => addToCart(product)}/>
                                            </fieldset>
                                                
                                        </form>
                                
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/each}
            <div class="clearfix"> </div>
        </div>
    </div>
</div>
<!-- //top-brands -->
<!-- fresh-vegetables -->
<div class="fresh-vegetables">
    <div class="container">
        <h3>Top Products</h3>
        <div class="w3l_fresh_vegetables_grids">
            <div class="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
                <div class="w3l_fresh_vegetables_grid2">
                    <ul>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="products.html">All Brands</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="vegetables.html">Vegetables</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="vegetables.html">Fruits</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="drinks.html">Juices</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="pet.html">Pet Food</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="bread.html">Bread & Bakery</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="household.html">Cleaning</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="products.html">Spices</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="products.html">Dry Fruits</a></li>
                        <li><i class="fa fa-check" aria-hidden="true"></i><a href="products.html">Dairy Products</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9 w3l_fresh_vegetables_grid_right">
                <div class="col-md-4 w3l_fresh_vegetables_grid">
                    <div class="w3l_fresh_vegetables_grid1">
                        <img src={img8} alt=" " class="img-responsive" />
                    </div>
                </div>
                <div class="col-md-4 w3l_fresh_vegetables_grid">
                    <div class="w3l_fresh_vegetables_grid1">
                        <div class="w3l_fresh_vegetables_grid1_rel">
                            <img src={img7} alt=" " class="img-responsive" />
                            <div class="w3l_fresh_vegetables_grid1_rel_pos">
                                <div class="more m1">
                                    <a href="products.html" class="button--saqui button--round-l button--text-thick" data-text="Shop now">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w3l_fresh_vegetables_grid1_bottom">
                        <img src={img10} alt=" " class="img-responsive" />
                        <div class="w3l_fresh_vegetables_grid1_bottom_pos">
                            <h5>Special Offers</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 w3l_fresh_vegetables_grid">
                    <div class="w3l_fresh_vegetables_grid1">
                        <img src={img9} alt=" " class="img-responsive" />
                    </div>
                    <div class="w3l_fresh_vegetables_grid1_bottom">
                        <img src={img11} alt=" " class="img-responsive" />
                    </div>
                </div>
                <div class="clearfix"> </div>
                <div class="agileinfo_move_text">
                    <div class="agileinfo_marquee">
                        <h4>get <span class="blink_me">25% off</span> on first order and also get gift voucher</h4>
                    </div>
                    <div class="agileinfo_breaking_news">
                        <span> </span>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
</div>
<!-- //fresh-vegetables -->
<!-- newsletter -->
<div class="newsletter">
    <div class="container">
        <div class="w3agile_newsletter_left">
            <h3>sign up for our newsletter</h3>
        </div>
        <div class="w3agile_newsletter_right">
            <form action="#" method="post">
                <input type="email" name="Email" placeholder="Email...">
                <input type="submit" value="subscribe now">
            </form>
        </div>
        <div class="clearfix"> </div>
    </div>
</div>
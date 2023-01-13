<script>
    import offer from '../../images/offer.png'

    import {products, cart} from '$lib/components/config/cart.js';
    // import {fruits} from '$lib/components/config/card.js'

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


<!-- products-breadcrumb -->
<div class="products-breadcrumb">
    <div class="container">
        <ul>
            <li><i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a><span>|</span></li>
            <li>Products</li>
        </ul>
    </div>
</div>
<!-- //products-breadcrumb -->
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
                    <li><a href="/fruit">Fruits</a></li>
                    <li><a href="/">Households</a></li>
                    <li class="dropdown mega-dropdown active">
                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Veggies & Fruits<span class="caret"></span></a>				
                        <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div class="w3ls_vegetables">
                                <ul>	
                                    <li><a href="/">Vegetables</a></li>
                                    <li><a href="/">Fruits</a></li>
                                </ul>
                            </div>                  
                        </div>				
                    </li>
                    <li><a href="/">Kitchen</a></li>
                    <li><a href="/">Short Codes</a></li>
                    <li class="dropdown">
                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Beverages<span class="caret"></span></a>
                        <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div class="w3ls_vegetables">
                                <ul>
                                    <li><a href="/">Soft Drinks</a></li>
                                    <li><a href="/">Juices</a></li>
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
                                    <li><a href="/">Frozen Snacks</a></li>
                                    <li><a href="/">Frozen Nonveg</a></li>
                                </ul>
                            </div>                  
                        </div>	
                    </li>
                    <li><a href="/">Bread & Bakery</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </div>
    <div class="w3l_banner_nav_right">
        <div class="w3l_banner_nav_right_banner3">
            <h3>Best Deals For New Products<span class="blink_me"></span></h3>
        </div>
        
        <div class="w3ls_w3l_banner_nav_right_grid">
            <h3 style="padding: 15px 15px 0 15px;">Product</h3>
            <div class="w3ls_w3l_banner_nav_right_grid1">
                <h6>All products</h6>
                {#each $products as product}
                <div class="col-md-3 w3ls_w3l_banner_left" style="padding: 15px;">
                    <div class="hover14 column">
                    <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                        <div class="agile_top_brand_left_grid_pos">
                            <img src={offer} alt=" " class="img-responsive" />
                        </div>
                        <div class="agile_top_brand_left_grid1">
                            <figure>
                                <div class="snipcart-item block">
                                    <div class="snipcart-thumb">
                                        <a href="single.html"><img src={product.image} alt=" " class="img-responsive" /></a>
                                        <h4>{product.name}</h4>
                                        <p>{product.content}</p>
                                        <h4>{product.price} đ<span>{product.prices} đ</span></h4>
                                    </div>
                                    <div class="snipcart-details">
                                        <button class="clickbtn" on:click={() => addToCart(product)}><i class="fa fa-shopping-cart"></i></button>
                                        <style>
                                            .clickbtn{
                                                width: 150px; font-size: 22px; color: pink; background-color: red; border: 1px solid red; border-radius: 5px;
                                            }
                                            .clickbtn:hover{
                                                color: pink; background-color: green;border: 1px solid green;
                                            }
                                        </style>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </div>
                </div>
                {/each}
                <div class="clearfix"> </div>

                <!-- <h6>Fruits</h6>
                {#each $fruits as product}
                <div class="col-md-3 w3ls_w3l_banner_left" style="padding: 15px;">
                    <div class="hover14 column">
                    <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                        <div class="agile_top_brand_left_grid_pos">
                            <img src={offer} alt=" " class="img-responsive" />
                        </div>
                        <div class="agile_top_brand_left_grid1">
                            <figure>
                                <div class="snipcart-item block">
                                    <div class="snipcart-thumb">
                                        <a href="single.html"><img src={product.image} alt=" " class="img-responsive" /></a>
                                        <h4>{product.name}</h4>
                                        <p>{product.content}</p>
                                        <h4>{product.price} đ<span>{product.prices} đ</span></h4>
                                    </div>
                                    <div class="snipcart-details">
                                        <button class="clickbtn" on:click={() => addToCart(product)}><i class="fa fa-shopping-cart"></i></button>
                                        <style>
                                            .clickbtn{
                                                width: 150px; font-size: 22px; color: pink; background-color: red; border: 1px solid red; border-radius: 5px;
                                            }
                                            .clickbtn:hover{
                                                color: pink; background-color: green;border: 1px solid green;
                                            }
                                        </style>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    </div>
                </div>
                {/each} -->
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
<div class="newsletter">
    <div class="container">
        <div class="w3agile_newsletter_left">
            <h3>sign up for our newsletter</h3>
        </div>
        <div class="w3agile_newsletter_right">
            <form action="#" method="post">
                <input type="email" name="Email" placeholder="Email">
                <input type="submit" value="subscribe now">
            </form>
        </div>
        <div class="clearfix"> </div>
    </div>
</div>
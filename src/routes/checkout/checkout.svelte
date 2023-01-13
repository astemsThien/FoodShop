<script>
    import { cart } from '$lib/components/config/cart.js';
    
	// giảm 1 sản phẩm (-) All product
	const minusItem = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							$cart = $cart
					} else {
							$cart = $cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}

	// tăng 1 sản phẩm (+) All product
	const plusItem = (product) => {
			for(let item of $cart) {
							if(item.id === product.id) {
								product.quantity += 1
								$cart = $cart;
								return;
							}
					}
	}

        // All product
		// tổng sản phẩm trong giỏ hàng
		$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
		// xóa 1 sản phẩm trong giỏ hàng
		const deleteProduct = (product) => {
			$cart =  $cart.filter((proc) => proc.id != product.id)
		}
      
</script>

<!-- products-breadcrumb -->
<div class="products-breadcrumb">
    <div class="container">
        <ul>
            <li><i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a><span>|</span></li>
            <li>Checkout</li>
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
<!-- about -->
    <div class="privacy about">
        <h3>Chec<span>kout</span></h3>
        
    <div class="checkout-right">
                <h4>Your shopping cart contains: <span>{$cart.length} Products</span></h4>
            <table class="timetable_sub">
                <thead>
                    <tr>
                        <th>SL</th>	
                        <th>Product</th>
                        <th>Quality</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <!-- All product -->
                {#each $cart as product }
                {#if product.quantity > 0}
                <tbody><tr class="rem1">
                    <td class="invert"><p class="number"></p></td>
                    <style>
                        body{
                            counter-reset: my-sec-counter;
                        }
                        .number:before {
                            counter-increment: my-sec-counter;
                            content: counter(my-sec-counter) ". ";
                        }
                    </style>
                    <td class="invert-image" style="width: 220px;"><a href="single.html"><img src={product.image} alt=" " class="img-responsive"></a></td>
                    <td class="invert" style="width: 150px;">
                        <button style="margin-right: 12px;" class="left" on:click={() => plusItem(product)}>+</button>&ensp;&ensp;&ensp;&ensp; {product.quantity} &ensp;&ensp;&ensp;&ensp;<button style="margin-left: 12px;" class="right" on:click={() => minusItem(product)}>-</button> 
                    </td>
                    <td class="invert">{product.name}</td>
                    <td class="invert">{product.price} đ</td>
                    <td class="invert">
                        <button class="remove-product" on:click={() => deleteProduct(product)}>Xóa</button>
                    </td>
                </tr>
            </tbody>
            {/if}
            {/each}
        </table>
        </div>
        
        <div class="checkout-left">	
            <div class="col-md-4 checkout-left-basket">
                <h4>Continue to basket</h4>
                <ul>
                    {#each $cart as product }
                    {#if product.quantity > 0}
                    <li>{product.name} <i> - </i> <span>{product.price * product.quantity} đ</span></li>
                    {/if}
                    {/each}
                    <li style="color: black; 
                    font-weight: bold; 
                    padding: 1em 0;
                    border-top: 1px solid #DDD;
                    border-bottom: 1px solid #DDD;
                    margin: 2em 0 0;">Total <i> - </i> <span>{total} đ</span></li>
                </ul>
            </div>
            <div class="col-md-8 address_form_agile">
                <h4>Add a new Details</h4>
            <form action="payment.html" method="post" class="creditly-card-form agileinfo_form">
                                <section class="creditly-wrapper wthree, w3_agileits_wrapper">
                                    <div class="information-wrapper">
                                        <div class="first-row form-group">
                                            <div class="controls">
                                                <label class="control-label">Full name: </label>
                                                <input class="billing-address-name form-control" type="text" name="name" placeholder="Full name">
                                            </div>
                                            <div class="w3_agileits_card_number_grids">
                                                <div class="w3_agileits_card_number_grid_left">
                                                    <div class="controls">
                                                        <label class="control-label">Mobile number:</label>
                                                        <input class="form-control" type="text" placeholder="Mobile number">
                                                    </div>
                                                </div>
                                                <div class="w3_agileits_card_number_grid_right">
                                                    <div class="controls">
                                                        <label class="control-label">Landmark: </label>
                                                    <input class="form-control" type="text" placeholder="Landmark">
                                                    </div>
                                                </div>
                                                <div class="clear"> </div>
                                            </div>
                                            <div class="controls">
                                                <label class="control-label">Town/City: </label>
                                            <input class="form-control" type="text" placeholder="Town/City">
                                        <button class="submit check_out"><a href="/pay">Delivery to this Address</a></button>
                                    </div>
                                </section>
                            </form>
                                <div class="checkout-right-basket">
                        <a href="/pay">Make a Payment <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
                </div>
                </div>
            <div class="clearfix"> </div>
        </div>
    </div>
<!-- //about -->
    </div>
    <div class="clearfix"></div>
</div>
<!-- //banner -->


<!-- newsletter -->
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
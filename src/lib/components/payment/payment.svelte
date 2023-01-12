<script>
    import pay from '../../../images/paypal.png'
</script>

<!-- products-breadcrumb -->
<div class="products-breadcrumb">
    <div class="container">
        <ul>
            <li><i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a><span>|</span></li>
            <li>Payment</li>
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
                    <li><a href="products.html">Branded Foods</a></li>
                    <li><a href="household.html">Households</a></li>
                    <li class="dropdown mega-dropdown active">
                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Veggies & Fruits<span class="caret"></span></a>				
                        <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div class="w3ls_vegetables">
                                <ul>	
                                    <li><a href="vegetables.html">Vegetables</a></li>
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
<!-- payment -->
    <div class="privacy about">
        <h3>Pay<span>ment</span></h3>
        
            <div class="checkout-right">
            <!--Horizontal Tab-->
    <div id="parentHorizontalTab">
        
        <div class="resp-tabs-container hor_1">

            <div>
                <div id="tab4" class="tab-grid" style="display: block;">
                        <div class="row">
                    <div class="col-md-6">
                        <img class="pp-img" src={pay} alt="Image Alternative text" title="Image Title">
                        <p>Important: You will be redirected to PayPal's website to securely complete your payment.</p><a class="btn btn-primary">Checkout via Paypal</a>	
                    </div>
                    <div class="col-md-6">
                        <form class="cc-form">
                            <div class="clearfix">
                                <div class="form-group form-group-cc-number">
                                    <label>Card Number</label>
                                    <input class="form-control" placeholder="xxxx xxxx xxxx xxxx" type="text"><span class="cc-card-icon"></span>
                                </div>
                                <div class="form-group form-group-cc-cvc">
                                    <label>CVV</label>
                                    <input class="form-control" placeholder="xxxx" type="text">
                                </div>
                            </div>
                            <div class="clearfix">
                                <div class="form-group form-group-cc-name">
                                    <label>Card Holder Name</label>
                                    <input class="form-control" type="text">
                                </div>
                                <div class="form-group form-group-cc-date">
                                    <label>Valid Thru</label>
                                    <input class="form-control" placeholder="mm/yy" type="text">
                                </div>
                            </div>
                            <div class="checkbox checkbox-small">
                                <label>
                                    <input class="i-check" type="checkbox" checked>Add to My Cards</label>
                            </div>
                            <input class="btn btn-primary submit" type="submit" value="Proceed Payment">
                        </form>
                    </div>
                </div>
                    
                    </div>
            </div>
            
        </div>
    </div>

<!--Plug-in Initialisation-->

<!-- // Pay -->

            </div>

    </div>
<!-- //payment -->
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
                <input type="email" name="Email" placeholder="Email" >
                <input type="submit" value="subscribe now">
            </form>
        </div>
        <div class="clearfix"> </div>
    </div>
</div>
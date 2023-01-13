<script>
    import { cart} from '$lib/components/config/cart.js';
    
</script>

<div class="agileits_header">
    <div class="w3l_offers">
        <a href="/product">Today's special Offers !</a>
    </div>
    <div class="w3l_search">
        <form action="#" method="post">
            <input type="text" name="Product" placeholder="Search a product..." >
            <input type="submit" value=" ">
        </form>
    </div>
    <div class="product_list_header">  
        <form action="#" method="post" class="last">
            <fieldset>
                <input type="hidden" name="cmd" value="_cart" />
                <input type="hidden" name="display" value="1" />
                <a href="/checkout"><input type="submit" name="submit" value="view your cart       ({$cart.length})" class="button"/></a>
            </fieldset>
        </form>
    </div>
    <div class="w3l_header_right">
        <ul>
            <li class="dropdown profile_details_drop">
                <a href="/login" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i></a>	

            </li>
        </ul>
    </div>
    <div class="w3l_header_right1">
        <h2><a href="/contactt">Contact</a></h2>
    </div>
    <div class="clearfix"> </div>
</div>
<div class="logo_products">
    <div class="container">
        <div class="w3ls_logo_products_left">
            <h1><a href="/"><span>Grocery</span> Store</a></h1>
        </div>
        <div class="w3ls_logo_products_left1">
            <ul class="special_items">
                <li><a href="/eventt">Events</a><i>/</i></li>
                <li><a href="/about">About</a><i>/</i></li>
                <li><a href="/product">Products</a><i>/</i></li>
                <li><a href="/servicse">Services</a></li>
            </ul>
        </div>
        <div class="w3ls_logo_products_left1">
            <ul class="phone_email">
                <li><i class="fa fa-phone" aria-hidden="true"></i>(+0123) 234 567</li>
                <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:store@grocery.com">store@astems.co.kr</a></li>
            </ul>
        </div>
        <div class="clearfix"> </div>
    </div>
</div>
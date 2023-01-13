<script>
    let userObject = null;
    const userBase = window.userbase;
    let authPromise = userBase.init({appId: '7e03f771-442d-4523-b503-10b2d582c494'})
        .then(({user}) => userObject = user)

    let username, password;

    const signIn = () => authPromise = userBase.signIn({username, password}).then(user => userObject = user);
    const Close = () => authPromise = userBase.signOut().then(() => userObject = null);
</script>

<!-- products-breadcrumb -->
<div class="products-breadcrumb">
    <div class="container">
        <ul>
            <li><i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a><span>|</span></li>
            <li>Sign In & Sign Up</li>
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
<!-- login -->
    <div class="w3_login">
        <h3>Sign In & Sign Up</h3>
        <div class="w3_login_module">
            <div class="module form-module">
            <div class="toggle"><i class="fa fa-times fa-pencil"></i>
                <div class="tooltip">Click Me</div>
            </div>
            <div class="form">
                {#await authPromise}
                Loading...
                {:then _} 
                <h2>Login to your account</h2>
                <form action="#" method="post">
                <input type="text" name="Username" placeholder="Username" required bind:value={username}>
                <input type="password" name="Password" placeholder="Password" required bind:value={password}>
                <button class="signin" on:click={signIn} type="button">Login</button>
                <style>
                    .signin{
                        width: 100%;
                        background-color: #84c639; 
                        border: 1px solid #84c639;
                        font-size: 25px;
                        color: #ffffff;
                    }
                    .signin:hover{
                        background-color: #fa1818; 
                    }
                </style>
                </form>
                {/await}
            </div>
            
    
            <div class="form">
                <h2>Create an account</h2>
                <form action="#" method="post">
                <input type="text" name="Username" placeholder="Username" required>
                <input type="password" name="Password" placeholder="Password" required>
                <input type="email" name="Email" placeholder="Email Address" required>
                <input type="text" name="Phone" placeholder="Phone Number" required>
                <input type="submit" value="Register">
                </form>
            </div>
            <div class="cta"><a href="/">Forgot your password?</a></div>
            </div>
        </div>
        <script>
            $('.toggle').click(function(){
              // Switches the Icon
            $(this).children('i').toggleClass('fa-pencil');
              // Switches the forms  
            $('.form').animate({
                height: "toggle",
                'padding-top': 'toggle',
                'padding-bottom': 'toggle',
                opacity: "toggle"
            }, "slow");
            });
        </script>
    </div>
<!-- //login -->
    </div>
    <div class="clearfix"></div>
</div>
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

<?php include('inc/header.php') ?>

<section class="hero">
    <div class="container">
        <nav id="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item" aria-current="page">Partners and Agents</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-5 pr-hero">
                <h3> Become our ambassador  </h3>
                <p class="para"> Lexpassp is always looking at expanding its network. If you are a professional with different backgrounds such as company owner, leading advisor, family office, consultant, lawyer, private banker, accountant and other financial/legal professionals and want to become one of our ambassadors , please contact us. </p>

            </div>
            <div class="col-md-7">
                <img src="/assets/img/partners.jpg" alt="">
            </div>
        </div>
    </div>
</section>


<section class="partners">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-2">
                <img src="/assets/img/logo.png" alt="">

                <form id="partners_form" action="" method="get">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name" value="" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name" value="" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" value="" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nationality" value="" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <select class="form-control" name="select" id="">
                                <option value=""> Are you a </option>
                                <option value=""> How would you like to </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea class="form-control" name="mess" id="" cols="30" rows="5" placeholder="How can we colaborate" required></textarea>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <button type="submit"> SEND </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<?php include('inc/footer.php') ?>
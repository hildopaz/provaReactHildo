import React from 'react';
import Input from '../components/micro/Input';

function Forms() {
    return (
        <>
            <div class="main-content">

                {/* <!-- content --> */}
                <div class="container-fluid content-top-gap">

                    {/* <!-- breadcrumbs --> */}
                    <nav aria-label="breadcrumb" class="mb-4">
                        <ol class="breadcrumb my-breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Forms</li>
                        </ol>
                    </nav>
                    {/* <!-- //breadcrumbs --> */}
                    {/* <!-- forms --> */}
                    <section class="forms">
                        {/* <!-- forms 1 --> */}
                        <div class="card card_border py-2 mb-4">
                            <div class="cards__heading">
                                <h3>Forms <span></span></h3>
                            </div>
                            <div class="card-body">
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="input__label">Email address</label>
                                        <input type="email" class="form-control input-style" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                            anyone else.</small>
                                    </div>
                                    <Input label="exampleInputPassword1" text="Password"
                                        type="password" id="exampleInputPassword1" placeholder="Password" />
                                    <div class="form-check check-remember check-me-out">
                                        <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1" />
                                        <label class="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-style mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
                        {/* <!-- //forms 1 --> */}

                        {/* <!-- forms 2 --> */}
                        <div class="card card_border py-2 mb-4">
                            <div class="card-body">
                                <form action="#" method="post">
                                    <div class="form-row">
                                        <Input className="col-md-6" label="inputEmail4" text="Email"
                                            type="email" id="inputEmail4" placeholder="Email" />
                                        <Input className="col-md-6" label="inputPassword4" text="Password"
                                            type="password" id="inputPassword4" placeholder="Password" />

                                    </div>
                                    <Input label="inputAddress" text="Adress"
                                        type="text" id="inputAddress" placeholder="1234 Main St" />
                                    <Input label="inputAddress2" text="Address 2"
                                        type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />

                                    <div class="form-row">
                                        <Input className="col-md-6" label="inputCity" text="City" type="text" id="inputCity" />
                                        <div class="form-group col-md-4">
                                            <label for="inputState" class="input__label">State</label>
                                            <select id="inputState" class="form-control input-style">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <Input className="col-md-2" label="inputZip" text="Zip"
                                            type="text" id="inputZip" />
                                    </div>
                                    <div class="form-check check-remember check-me-out">
                                        <input class="form-check-input checkbox" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label checkmark" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-style mt-4">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Forms;
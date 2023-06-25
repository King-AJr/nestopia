import axios from "axios";
import { useState, useEffect } from "react";


function AreaListing() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5050/all_listings')
            .then(response => {
                const data = response.data;
                // Handle the deserialized JSON data
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error('Error retrieving listings:', error);
            });
    }, []);

    return (
        <div>
            <main>

                    <section className="listing-page-area bg-gray">
                        <div className="container-fluid pe-lg-0">
                            <div className="row">
                                <div className="col-xxl-12 col-xl-8">
                                    <div className="pages-contant">
                                        <div className="d-flex flex-sm-row flex-column mb-20">
                                            <div className="listing-search-pages">
                                                <form action="#">
                                                    <div className="d-flex text-center">
                                                        <div className="input-group pr-15">
                                                            <input type="text" className="form-control ps-0"
                                                                placeholder="What are you looking for?" />
                                                        </div>
                                                        <div className="divider"></div>
                                                        <div className="input-group">
                                                            <a className="input-search" href="#"><i
                                                                className="las la-map-marked-alt"></i></a>
                                                            <input type="text" className="form-control ps-0" placeholder="Location" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                            

                                        <div className="pages-btn d-flex flex-wrap pb-30">
                                            <div className="l-btn form-check d-flex">
                                                <div>
                                                    <input type="checkbox" className="btn-check" id="btnCheck01" />
                                                    <label className="btn btn-outline-secondary" htmlFor="btnCheck01"> <i
                                                        className="las la-map-marker-alt"></i> Near me</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" className="btn-check" id="btnCheck02" />
                                                    <label className="btn btn-outline-secondary" htmlFor="btnCheck02"> <i
                                                        className="las la-dollar-sign"></i>Price</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" className="btn-check" id="btnCheck03" />
                                                    <label className="btn btn-outline-secondary" htmlFor="btnCheck03"> <i
                                                        className="las la-clock"></i> Open now</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" className="btn-check" id="btnCheck04" />
                                                    <label className="btn btn-outline-secondary" htmlFor="btnCheck04"> <i
                                                        className="las la-random"></i> Best Match</label>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="las la-filter"></i>
                                                        More Filter
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="r-btn">
                                                <a className="small-2 p-btn" href="#"> <i className="las la-redo-alt"></i> Reset All</a>
                                            </div>
                                        </div>

                                        <div className="pages-sub-title d-flex flex-wrap justify-content-between pt-30 mb-40">
                                            <p className="sub-regular-1 mb-10">{data.length}</p>
                                            <div className="left-contant d-flex flex-wrap">

                                                <select className="custom-select small-1 db-toggle">
                                                    <option value="">Restaurant 01</option>
                                                    <option value="">Restaurant 02</option>
                                                    <option value="">Restaurant 03</option>
                                                </select>
                                                <div className="gl-btn">
                                                    <a className="grid-btn active text-center" href="#"><i
                                                        className="las la-border-all"></i></a>
                                                    <a className="list-btn text-center" href="#"><i className="las la-list-ul"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        {data.map(element => {
                                        {/* <!--Restaurants item --> */}
                                        <div className="pages-items mb-10">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="restaurant-listing-widget wow fadeInUp">
                                                        <div className="restaurant-img">
                                                            <div className="bottom-caption">
                                                                <p><span><i className="lar la-clock"></i> Closed</span> ⋅ Opens 6AM Tue
                                                                </p>
                                                            </div>
                                                            <img src="assets/img/restaurants/pages-01.png" alt="image" />
                                                        </div>
                                                        <div className="contant bg-white">
                                                            <a href="#">
                                                                <h4 className="sub-bold-2 mb-20">{element.name}</h4>
                                                            </a>
                                                            <div className="reviews d-flex mb-10">
                                                                <span>4.8 <i className="las la-star"></i><i className="las la-star"></i><i
                                                                    className="las la-star"></i><i className="las la-star"></i><i
                                                                        className="las la-star"></i>
                                                                    50 reviews
                                                                </span>
                                                                <span className="d-flex dot-sep">
                                                                    $$ <span className="sep">American</span>
                                                                </span>
                                                            </div>
                                                            <span className="restaurants-author d-flex"><img
                                                                src="assets/img/icons/icon-08.svg" alt="Icon" />{element.location}</span>
                                                            <div className="s-btn d-flex">
                                                                <a href="www.domainname.html"><i className="las la-globe"></i>Website</a>
                                                                <a href="tel:0123456789"><i className="las la-phone-volume"></i>Call</a>
                                                                <a href="#"><i className="las la-bookmark"></i>Save</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        })}
                                        {/* <!-- Restaurants item--> */}
                                        <nav aria-label="...">
                                            <ul className="pagination pagi-content">
                                                <li className="page-item">
                                                    <span className="page-link"><i className="las la-angle-left"></i>Prev</span>
                                                </li>
                                                <li className="page-item active" aria-current="page"><span className="page-link">1</span>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next<i className="las la-angle-right"></i></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* <!--Google map--> */}
                                <div id="map-container-google-1">
                                    {/* //  className="pages-map px-0 col-xxl-5 col-xl-4 z-depth-1-half map-container wow fadeIn" */}
                                    {/* // style={{ height: "900px"}}> */}
                                    {/* // <iframe  className="pe-0 h-100 w-100" */}
                                    {/* //     src="https://maps.google.com/maps?q=manhatan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" */}
                                    {/* //     style={{ border: "0"}} allowfullscreen></iframe> */}
                                </div>
                                {/* <!--Google Maps--> */}
                            </div>
                        </div>
                    </section>

            </main>
        </div>
    )
}

export default AreaListing;
import { Component } from "react"

class Home extends Component {
    render() {
        return (
            <div classname="container mb-4">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><h2>Gaming</h2></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <form className="d-flex ms-auto
                            " role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

class About extends Component {
    render() {
        return (
            <div className="container my-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-1</h5>
                                <p className="card-text">Mario & Luigi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-2</h5>
                                <p className="card-text">Gaming Controller</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-3</h5>
                                <p className="card-text">Gamepad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/1601774/pexels-photo-1601774.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-4</h5>
                                <p className="card-text">Gaming Arcade Set</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-5</h5>
                                <p className="card-text">Gaming Setup</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-6</h5>
                                <p className="card-text">Folding Gamepad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/4009604/pexels-photo-4009604.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-7</h5>
                                <p className="card-text">Big Screen Gaming Set</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/790479/pexels-photo-790479.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-8</h5>
                                <p className="card-text">Powerpack Gamepad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product-9</h5>
                                <p className="card-text">Gaming Arcade Machines</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div className="container mt-4 fs-3">
                <table className="table table-danger table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sr.</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Availibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mario & Luigi</td>
                            <td>700/-</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Gamepad</td>
                            <td>4500/-</td>
                            <td>Unavailable</td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>Gaming Setup</td>
                            <td>25000/-</td>
                            <td>Available</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
export { Home, About, Contact }
import "./menu.css"

export function menu () {

    return `
    <header>
        <section class="company">
            <img src="" alt="cubiertos">
            <a href="">RestorApp</a>
        </section>

        <section class="navBar">
            <nav class="links">
                <a>Menu</a>
                <a>My Orders</a>
                <a>Profile</a>
            </nav>
        </section>
    </header>

    <main>

        <section class="products">
            <article class="products__general">
                <h1>Our menu</h1>
                <form action="/buscar" method="get">
                    <input type="search" placeholder="buscar producto">
                </form>
            </article>

            <article class="products_general">
                <button>all</button>
                <button>burgers</button>
                <button>sides</button>
                <button>drinks</button>
            </article>

            <article class="products__eat">
                <div>
                    <h3>burger1</h3>
                    <button>add</button>
                </div>
                <div>
                    <h3>burger2</h3>
                    <button>add</button>
                </div>
                <div>
                    <h3>burger3</h3>
                    <button>add</button>
                </div>
                <div>
                    <h3>burger4</h3>
                    <button>add</button>
                </div>
                <div>
                    <h3>burger5</h3>
                    <button>add</button>
                </div>
                <div>
                    <h3>burger6</h3>
                    <button>add</button>
                </div>
            </article>
        </section>

        <section class="orders">
            <article class="orders__title">
                <h4>your order</h4>
                <button>clear all</button>
            </article>

            <article class="orders__online">
                <div>productos elegidos</div>
            </article>

            <article class="orders__price">
                <a>precios...</a>
            </article>

            <button class="orders__confirm">confirm order</button>
        </section>

    </main>`;

}
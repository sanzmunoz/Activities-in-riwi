import "./login.css"

export function login () {

    return `
    
    <section class="login">
    
        <h1>RestorApp</h1>

        <article class="login__user">
                <a>Full Name</a>
                <input type="text" placeholder="e.g John Doe">
                <a>Email Address</a>
                <input type="email" placeholder="name@example.com">
                <a>Select Role</a>

                <select name="select" id="role" class="role">
                <option value="value1">User</option>
                <option value="value2" selected>Admin</option>
                </select>
            </article>

            <article class="login__init">
                <button class="login__button">Sign In</button>
                
                <article class="login__init__button">
                <a>Don't have an account? <button class="login__newUser">sign up</button></a>
                </article>
        </article>

    </section>`;

}
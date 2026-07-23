export default function Main({name, age}) {
    return(
        <main className="main-content">
            <section id="about">
                <h2>About me</h2>
                <p>I am {name} an aspiring Backend Developer</p>
                <p>I am {age} years old</p>
            </section>
        </main>
    )
}
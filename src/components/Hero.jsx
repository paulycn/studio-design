
function Hero() {
  return (
    <div className="mx-auto max-w-7xl flex justify-center items-center gap-10">
    <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-medium leading-tight">
        Design Loft <br/>
        Mobilă la comandă
        </h1>
        <p className="text-black-p">Doriți să creați propriul model de mobilier?<br/>
            Cu Design Loft, serviciul de proiectare design se oferă <br/>
            absolut GRATIS.
        </p>
        <div>
            <button onClick={() => window.location.href = 'tel:+37379908683'}> Comandă acum</button>
        </div>
    </div>
    <div>
        <img className="max-h-[550px]" src="/src/assets/img/sofa.png" alt="sofa" />
    </div>
    </div>
  )
}

export default Hero
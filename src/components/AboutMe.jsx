const AboutMe = () => (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold">Sobre Mim</h1>
        <p className="mt-4 text-lg max-w-2xl text-center">
            Olá, meu nome é Eric Yuji Ito e estou cursando Engenharia de Software na FIAP. Sou apaixonado por tecnologia e desenvolvimento de software, sempre buscando aprender e me aprimorar.
        </p>
        <p className="mt-2 text-lg max-w-2xl text-center">
            Este é meu portfólio onde compartilho meus projetos, habilidades e experiências. Acredito no impacto positivo da tecnologia na vida das pessoas e, por isso, sempre busco criar soluções que possam trazer melhorias ao mundo.
        </p>
        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Habilidades</h2>
            <ul className="mt-4 list-disc list-inside text-left">
                <li>Desenvolvimento Web: React, JavaScript, HTML, CSS, Tailwind</li>
                <li>Design de Interfaces: Figma, Photoshop</li>
                <li>Internet das Coisas (IoT): Node-RED, Arduino</li>
                <li>Automação e Análise de Dados: Python</li>
            </ul>
        </section>
    </section>
);

export default AboutMe;
